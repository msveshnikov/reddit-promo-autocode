import dotenv from 'dotenv';
import snoowrap from 'snoowrap';
import { scheduleJob } from 'node-schedule';
import { createLogger, format, transports } from 'winston';
import config from './config.js';
import {
    generateRedditPost,
    generateRedditComment,
    analyzePostPerformance,
    generatePersonalizedContent,
    handleUserInteraction,
    optimizeContentForKeywords,
    generateMultilingualContent,
    scoreContent,
    generateHashtags,
    generateCallToAction
} from './claude.js';
import NodeCache from 'node-cache';
import pLimit from 'p-limit';

dotenv.config();

const logger = createLogger({
    level: config.logging.level,
    format: format.combine(format.timestamp(), format[config.logging.format]()),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: config.logging.filename })
    ]
});

const cache = new NodeCache({ stdTTL: config.caching.ttl });

const r = new snoowrap({
    userAgent: config.apiConfig.userAgent,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD
});

const commentLimit = pLimit(config.interactionLimits.maxCommentsPerHour);
const postLimit = pLimit(config.interactionLimits.maxPostsPerDay);

const findAndCommentOnPosts = async () => {
    try {
        for (const subreddit of config.targetSubreddits) {
            const posts = await r.getSubreddit(subreddit).getNew({ limit: 10 });
            for (const post of posts) {
                if (
                    config.keywordsToTrack.some((tool) =>
                        post.title.toLowerCase().includes(tool.toLowerCase())
                    )
                ) {
                    await commentLimit(async () => {
                        const toolMentioned = config.keywordsToTrack.find((tool) =>
                            post.title.toLowerCase().includes(tool.toLowerCase())
                        );
                        const comment = await generateRedditComment(post.title, toolMentioned);
                        const optimizedComment = await optimizeContentForKeywords(comment, [
                            'AutoCode',
                            'AI',
                            'coding'
                        ]);
                        await post.reply(optimizedComment);
                        logger.info(`Commented on post: ${post.title}`);

                        await new Promise((resolve) =>
                            setTimeout(
                                resolve,
                                config.interactionLimits.minTimeBetweenComments * 1000
                            )
                        );
                    });
                }
            }
        }
    } catch (error) {
        logger.error('Error in findAndCommentOnPosts:', error);
    }
};

const generateCreativePost = async (subreddit) => {
    try {
        await postLimit(async () => {
            const content = await generateRedditPost(subreddit);
            const [title, ...textParts] = content.split('\n');
            const text = textParts.join('\n');

            const optimizedText = await optimizeContentForKeywords(text, [
                'AutoCode',
                'AI',
                'coding'
            ]);
            const score = await scoreContent(optimizedText);

            if (score < config.contentScoring.minScore) {
                logger.info(`Content score too low (${score}), regenerating`);
                return generateCreativePost(subreddit);
            }

            const hashtags = await generateHashtags(optimizedText);
            const callToAction = await generateCallToAction('Reddit');

            const fullText = `${optimizedText}\n\n${hashtags}\n\n${callToAction}`;

            const post = await r.getSubreddit(subreddit).submitSelfpost({ title, text: fullText });
            logger.info(`Posted in r/${subreddit}`);

            if (config.analytics.trackPerformance) {
                scheduleJob('30 minutes', async () => {
                    const updatedPost = await r.getSubmission(post.id).fetch();
                    const analysis = await analyzePostPerformance({
                        title: updatedPost.title,
                        upvotes: updatedPost.ups,
                        commentCount: updatedPost.num_comments,
                        subreddit: updatedPost.subreddit.display_name
                    });
                    logger.info(`Post performance analysis: ${analysis}`);
                });
            }
        });
    } catch (error) {
        logger.error(`Error posting in r/${subreddit}:`, error);
    }
};

const handleUserInteractions = async () => {
    try {
        const inbox = await r.getInbox();
        for (const item of inbox) {
            if (!item.new) continue;
            const response = await handleUserInteraction(item.body);
            await item.reply(response);
            await item.markAsRead();
            logger.info(`Responded to user interaction: ${item.id}`);
        }
    } catch (error) {
        logger.error('Error in handleUserInteractions:', error);
    }
};

const generatePersonalizedPosts = async () => {
    try {
        for (const subreddit of config.targetSubreddits) {
            const keywords = await getSubredditKeywords(subreddit);
            const content = await generatePersonalizedContent(subreddit, keywords);
            const optimizedContent = await optimizeContentForKeywords(content, keywords);
            const [title, ...textParts] = optimizedContent.split('\n');
            const text = textParts.join('\n');

            if (config.internationalization.enabled) {
                for (const language of config.internationalization.supportedLanguages) {
                    const translatedContent = await generateMultilingualContent(
                        optimizedContent,
                        language
                    );
                    const [translatedTitle, ...translatedTextParts] = translatedContent.split('\n');
                    const translatedText = translatedTextParts.join('\n');

                    await r.getSubreddit(subreddit).submitSelfpost({
                        title: translatedTitle,
                        text: translatedText
                    });
                    logger.info(`Posted personalized content in r/${subreddit} (${language})`);
                }
            } else {
                await r.getSubreddit(subreddit).submitSelfpost({ title, text });
                logger.info(`Posted personalized content in r/${subreddit}`);
            }
        }
    } catch (error) {
        logger.error('Error in generatePersonalizedPosts:', error);
    }
};

const getSubredditKeywords = async (subreddit) => {
    const cacheKey = `keywords_${subreddit}`;
    const cachedKeywords = cache.get(cacheKey);
    if (cachedKeywords) return cachedKeywords;

    try {
        const posts = await r.getSubreddit(subreddit).getHot({ limit: 20 });
        const allWords = posts.flatMap((post) => post.title.toLowerCase().split(/\W+/));
        const wordCounts = allWords.reduce((acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        }, {});
        const sortedWords = Object.entries(wordCounts)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 10)
            .map(([word]) => word);

        cache.set(cacheKey, sortedWords);
        return sortedWords;
    } catch (error) {
        logger.error(`Error getting keywords for r/${subreddit}:`, error);
        return [];
    }
};

const dailyTasks = async () => {
    await findAndCommentOnPosts();
    await generateCreativePost(config.mainSubreddit);
    await generatePersonalizedPosts();
    await handleUserInteractions();
};

const startScheduler = () => {
    scheduleJob(config.postSchedule.time, async () => {
        logger.info('Starting daily tasks');
        await dailyTasks();
        logger.info('Daily tasks completed');
    });
};

const retryWithBackoff = async (fn, maxAttempts, initialDelay, backoffFactor) => {
    let attempt = 0;
    while (attempt < maxAttempts) {
        try {
            return await fn();
        } catch (error) {
            attempt++;
            if (attempt === maxAttempts) throw error;
            const delay = initialDelay * Math.pow(backoffFactor, attempt - 1);
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }
};

const refreshAuthToken = async () => {
    try {
        await r.refreshToken();
        logger.info('Successfully refreshed Reddit access token');
    } catch (error) {
        logger.error('Error refreshing Reddit access token:', error);
    }
};

const main = async () => {
    try {
        await retryWithBackoff(
            () => r.getMe().fetch(),
            config.retryMechanism.maxAttempts,
            config.retryMechanism.initialDelay,
            config.retryMechanism.backoffFactor
        );
        logger.info('Successfully authenticated with Reddit');

        setInterval(refreshAuthToken, config.security.tokenRefreshInterval);

        startScheduler();
    } catch (error) {
        logger.error('Error in main:', error);
    }
};

main();
