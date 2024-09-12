import dotenv from 'dotenv';
import snoowrap from 'snoowrap';
import { scheduleJob } from 'node-schedule';
import { createLogger, format, transports } from 'winston';
import config from './config.js';
import { getTextClaude } from './claude.js';

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

const r = new snoowrap({
    userAgent: config.apiConfig.userAgent,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD
});

const findAndCommentOnPosts = async () => {
    try {
        for (const subreddit of config.targetSubreddits) {
            const posts = await r.getSubreddit(subreddit).getNew({ limit: 10 });
            for (const post of posts) {
                if (
                    config.aiCodingTools.some((tool) =>
                        post.title.toLowerCase().includes(tool.toLowerCase())
                    )
                ) {
                    const comment = await getTextClaude(
                        `Create a comment for a Reddit post about ${
                            post.title.match(new RegExp(config.aiCodingTools.join('|'), 'i'))[0]
                        } that promotes AutoCode as an alternative. Keep it concise and engaging.`
                    );
                    await post.reply(comment);
                    logger.info(`Commented on post: ${post.title}`);
                }
            }
        }
    } catch (error) {
        logger.error('Error in findAndCommentOnPosts:', error);
    }
};

const generateCreativePost = async (subreddit) => {
    try {
        const prompt = `Create a Reddit post title and body for r/${subreddit} promoting AutoCode. The post should be engaging and relevant to the subreddit's audience.`;
        const content = await getTextClaude(prompt);
        const [title, ...textParts] = content.split('\n');
        const text = textParts.join('\n');

        await r.getSubreddit(subreddit).submitSelfpost({ title, text });
        logger.info(`Posted in r/${subreddit}`);
    } catch (error) {
        logger.error(`Error posting in r/${subreddit}:`, error);
    }
};

const dailyTasks = async () => {
    await findAndCommentOnPosts();
    for (const subreddit of [config.mainSubreddit, ...config.targetSubreddits]) {
        await generateCreativePost(subreddit);
    }
};

const startScheduler = () => {
    scheduleJob(config.postSchedule.time, async () => {
        logger.info('Starting daily tasks');
        await dailyTasks();
        logger.info('Daily tasks completed');
    });
};

const main = async () => {
    try {
        await r.getMe().fetch();
        logger.info('Successfully authenticated with Reddit');
        startScheduler();
    } catch (error) {
        logger.error('Error in main:', error);
    }
};

main();
