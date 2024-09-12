import dotenv from 'dotenv';
import snoowrap from 'snoowrap';
import { scheduleJob } from 'node-schedule';
import { createLogger, format, transports } from 'winston';

dotenv.config();

const logger = createLogger({
    level: 'info',
    format: format.combine(format.timestamp(), format.json()),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
});

const r = new snoowrap({
    userAgent: 'AutoCode Reddit Promo Agent v1.0',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USERNAME,
    password: process.env.REDDIT_PASSWORD
});

const targetSubreddits = ['AutoCode', 'ClaudeAI', 'ChatGPTCoding', 'ArtificialIntelligence'];
const aiCodingTools = ['Aider', 'Claude Dev', 'Cursor AI'];

const findAndCommentOnPosts = async () => {
    try {
        for (const subreddit of targetSubreddits) {
            const posts = await r.getSubreddit(subreddit).getNew({ limit: 10 });
            for (const post of posts) {
                if (
                    aiCodingTools.some((tool) =>
                        post.title.toLowerCase().includes(tool.toLowerCase())
                    )
                ) {
                    await post.reply(
                        `Have you tried AutoCode? It's a great alternative to ${
                            post.title.match(new RegExp(aiCodingTools.join('|'), 'i'))[0]
                        }!`
                    );
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
        const title = `Introducing AutoCode: The Future of AI-Powered Coding`;
        const text = `AutoCode is revolutionizing the way developers write code. With advanced AI capabilities, it streamlines your workflow and boosts productivity. Try it today!`;

        await r.getSubreddit(subreddit).submitSelfpost({ title, text });
        logger.info(`Posted in r/${subreddit}`);
    } catch (error) {
        logger.error(`Error posting in r/${subreddit}:`, error);
    }
};

const dailyTasks = async () => {
    await findAndCommentOnPosts();
    for (const subreddit of targetSubreddits) {
        await generateCreativePost(subreddit);
    }
};

const startScheduler = () => {
    scheduleJob('0 12 * * *', async () => {
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
