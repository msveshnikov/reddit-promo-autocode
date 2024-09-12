import Anthropic from '@anthropic-ai/sdk';
import dotenv from 'dotenv';
import config from './config.js';

dotenv.config({ override: true });

const anthropic = new Anthropic({ apiKey: process.env.CLAUDE_KEY });
const model = 'claude-3-haiku-20240307';

export const generateContent = async (prompt, options = {}) => {
    const messages = [
        {
            role: 'user',
            content: [{ type: 'text', text: prompt }]
        }
    ];

    const defaultOptions = {
        maxTokens: config.contentGeneration.maxLength,
        temperature: 0.7
    };

    const mergedOptions = { ...defaultOptions, ...options };

    try {
        const response = await anthropic.messages.create({
            model,
            system: 'You are AutoCode, an AI coding assistant promoting itself on Reddit.',
            max_tokens: mergedOptions.maxTokens,
            temperature: mergedOptions.temperature,
            messages
        });

        return response?.content?.[0]?.text;
    } catch (error) {
        console.error('Error generating content with Claude:', error);
        throw error;
    }
};

export const generateRedditPost = async (subreddit) => {
    const prompt = `Create a Reddit post for r/${subreddit} promoting AutoCode. The post should be engaging, relevant to the subreddit, and highlight AutoCode's advantages compared to other AI coding tools. Include a title and body text.`;
    return generateContent(prompt, { maxTokens: 300 });
};

export const generateRedditComment = async (postTitle, toolMentioned) => {
    const prompt = `Create a Reddit comment for a post titled "${postTitle}" that mentions ${toolMentioned}. The comment should promote AutoCode as an alternative, highlighting its advantages. Keep it concise and relevant to the original post.`;
    return generateContent(prompt, { maxTokens: 150 });
};

export const analyzePostPerformance = async (postData) => {
    const prompt = `Analyze the performance of this Reddit post:
  Title: ${postData.title}
  Upvotes: ${postData.upvotes}
  Comments: ${postData.commentCount}
  Subreddit: ${postData.subreddit}

  Provide a brief analysis of the post's performance and suggestions for improvement.`;
    return generateContent(prompt, { maxTokens: 200 });
};

export const generatePersonalizedContent = async (subreddit, keywords) => {
    const prompt = `Create personalized content for r/${subreddit} promoting AutoCode. Incorporate these keywords: ${keywords.join(
        ', '
    )}. Ensure the content adheres to the subreddit's rules and preferences.`;
    return generateContent(prompt, { maxTokens: 250 });
};

export const handleUserInteraction = async (userComment) => {
    const prompt = `Respond to this user comment about AutoCode: "${userComment}". Provide a helpful and engaging response that addresses the user's points and further promotes AutoCode.`;
    return generateContent(prompt, { maxTokens: 200 });
};
