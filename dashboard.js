import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createLogger, format, transports } from 'winston';
import config from './config.js';
import { generateRedditPost, generateRedditComment } from './claude.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express();
const port = 3000;

const logger = createLogger({
    level: config.logging.level,
    format: format.combine(format.timestamp(), format.simple()),
    transports: [new transports.Console(), new transports.File({ filename: 'dashboard.log' })]
});

app.use(express.static('public'));
app.use(express.json());

app.get('/api/stats', async (req, res) => {
    try {
        const stats = await fs.readFile(path.join(__dirname, 'stats.json'), 'utf-8');
        res.json(JSON.parse(stats));
    } catch (error) {
        logger.error('Error reading stats file:', error);
        res.status(500).json({ error: 'Unable to read stats' });
    }
});

app.get('/api/config', (req, res) => {
    res.json({
        targetSubreddits: config.targetSubreddits,
        mainSubreddit: config.mainSubreddit,
        product: config.product
    });
});

app.get('/api/logs', async (req, res) => {
    try {
        const logs = await fs.readFile(config.logging.filename, 'utf-8');
        res.send(logs);
    } catch (error) {
        logger.error('Error reading log file:', error);
        res.status(500).json({ error: 'Unable to read logs' });
    }
});

app.post('/api/generate-post', async (req, res) => {
    try {
        const { subreddit } = req.body;
        const post = await generateRedditPost(subreddit);
        res.json({ post });
    } catch (error) {
        logger.error('Error generating post:', error);
        res.status(500).json({ error: 'Unable to generate post' });
    }
});

app.post('/api/generate-comment', async (req, res) => {
    try {
        const { postTitle, toolMentioned } = req.body;
        const comment = await generateRedditComment(postTitle, toolMentioned);
        res.json({ comment });
    } catch (error) {
        logger.error('Error generating comment:', error);
        res.status(500).json({ error: 'Unable to generate comment' });
    }
});

app.get('/api/social-media-content', async (req, res) => {
    try {
        const content = await fs.readFile(
            path.join(__dirname, 'docs', 'social_media_content.json'),
            'utf-8'
        );
        res.json(JSON.parse(content));
    } catch (error) {
        logger.error('Error reading social media content:', error);
        res.status(500).json({ error: 'Unable to read social media content' });
    }
});

app.get('/api/landing-page', async (req, res) => {
    try {
        const landingPage = await fs.readFile(path.join(__dirname, 'landing.html'), 'utf-8');
        res.send(landingPage);
    } catch (error) {
        logger.error('Error reading landing page:', error);
        res.status(500).json({ error: 'Unable to read landing page' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    logger.info(`Dashboard server running at http://localhost:${port}`);
});

process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
