import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';
import config from './config.js';
import { createLogger, format, transports } from 'winston';

dotenv.config({ override: true });

const anthropic = new Anthropic({ apiKey: process.env.CLAUDE_KEY });
const model = config.claudeConfig.model;

const logger = createLogger({
    level: config.logging.level,
    format: format.combine(format.timestamp(), format[config.logging.format]()),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: config.logging.filename })
    ]
});

const generateContent = async (prompt, options = {}) => {
    const messages = [
        {
            role: 'user',
            content: [{ type: 'text', text: prompt }]
        }
    ];

    const defaultOptions = {
        maxTokens: config.contentGeneration.maxLength,
        temperature: config.claudeConfig.temperature
    };

    const mergedOptions = { ...defaultOptions, ...options };

    try {
        const response = await anthropic.messages.create({
            model,
            max_tokens: mergedOptions.maxTokens,
            temperature: mergedOptions.temperature,
            messages
        });

        return response?.content?.[0]?.text;
    } catch (error) {
        logger.error('Error generating content with Claude:', error);
        throw error;
    }
};

export const generateRedditPost = async (subreddit) => {
    const prompt = `Create a Reddit post for r/${subreddit} about ${config.product.name}. Make it sound natural and engaging, as if written by a real user. Don't mention that it's promotional content. Include a title and body text.`;
    return generateContent(prompt, { maxTokens: 300 });
};

export const generateRedditComment = async (postTitle, toolMentioned) => {
    const prompt = `Write a Reddit comment for a post titled "${postTitle}" that mentions ${toolMentioned}. Casually bring up ${config.product.name} as an alternative you've been using. Keep it concise and relevant to the original post. Make it sound like a genuine user comment.`;
    return generateContent(prompt, { maxTokens: 150 });
};

export const analyzePostPerformance = async (postData) => {
    const prompt = `Analyze this Reddit post:
Title: ${postData.title}
Upvotes: ${postData.upvotes}
Comments: ${postData.commentCount}
Subreddit: ${postData.subreddit}

Briefly analyze its performance and suggest improvements.`;
    return generateContent(prompt, { maxTokens: 200 });
};

export const generatePersonalizedContent = async (subreddit, keywords) => {
    const prompt = `Create content for r/${subreddit} mentioning ${
        config.product.name
    }. Use these keywords naturally: ${keywords.join(
        ', '
    )}. Make it fit the subreddit's style and rules. Write as if you're a regular user sharing their experience.`;
    return generateContent(prompt, { maxTokens: 250 });
};

export const handleUserInteraction = async (userComment) => {
    const prompt = `Respond to this comment about ${config.product.name}: "${userComment}". Write a helpful and friendly response addressing their points. Sound like a real user, not a company representative.`;
    return generateContent(prompt, { maxTokens: 200 });
};

export const optimizeContentForKeywords = async (content, keywords) => {
    const prompt = `Rewrite this content, naturally incorporating these keywords: ${keywords.join(
        ', '
    )}. Keep the original meaning and tone:

${content}`;
    return generateContent(prompt, { maxTokens: content.length + 100 });
};

export const generateMultilingualContent = async (content, targetLanguage) => {
    const prompt = `Translate and adapt this content to ${targetLanguage}, keeping it natural and culturally appropriate:

${content}`;
    return generateContent(prompt, { maxTokens: content.length * 1.5 });
};

export const generateContentSummary = async (content) => {
    const prompt = `Summarize the main points of this content briefly:

${content}`;
    return generateContent(prompt, { maxTokens: Math.min(content.length / 2, 150) });
};

export const scoreContent = async (content) => {
    const prompt = `Rate this content from 0 to 1 based on engagement, relevance, and persuasiveness:

${content}

Give only the score as a number.`;
    const score = await generateContent(prompt, { maxTokens: 10 });
    return parseFloat(score);
};

export const generateHashtags = async (content) => {
    const prompt = `Create 3-5 relevant hashtags for this content:

${content}`;
    return generateContent(prompt, { maxTokens: 50 });
};

export const generateCallToAction = async (platform) => {
    const prompt = `Write a natural-sounding call-to-action for ${config.product.name} on ${platform}. Encourage users to try it without being too pushy.`;
    return generateContent(prompt, { maxTokens: 50 });
};

export const generateIndustryNews = async () => {
    const prompt = `Summarize recent developments in AI coding tools and technologies. Focus on trends relevant to ${config.product.name}'s features. Write it like a tech news article.`;
    return generateContent(prompt, { maxTokens: 200 });
};

export const generateCodeSnippet = async (language, task) => {
    const prompt = `Create a short ${language} code snippet showing how ${config.product.name} can help with ${task}. Include a brief explanation. Write it as if you're sharing your own code.`;
    return generateContent(prompt, { maxTokens: 250 });
};

export const generateComparison = async (competitor) => {
    const prompt = `Compare ${config.product.name} and ${competitor} objectively. Highlight ${config.product.name}'s unique features without criticizing the competitor. Write it like a user review.`;
    return generateContent(prompt, { maxTokens: 200 });
};

export const generateFAQ = async () => {
    const prompt = `Create 3-5 common questions and answers about ${config.product.name}. Focus on what new users might ask. Write in a conversational tone.`;
    return generateContent(prompt, { maxTokens: 300 });
};

export const generateTestimonial = async () => {
    const prompt = `Write a realistic user testimonial for ${config.product.name}. Mention specific benefits they experienced in their coding work. Make it sound genuine and personal.`;
    return generateContent(prompt, { maxTokens: 150 });
};
