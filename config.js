// config.js
export default {
    mainSubreddit: 'AutoCode',
    targetSubreddits: ['ClaudeAI', 'ChatGPTCoding', 'ArtificialIntelligence'],
    aiCodingTools: ['Aider', 'Claude Dev', 'Cursor AI'],
    postSchedule: {
        interval: 'daily',
        time: '12:00',
        timezone: 'UTC'
    },
    interactionLimits: {
        maxCommentsPerHour: 10,
        maxPostsPerDay: 2,
        minTimeBetweenComments: 300 // 5 minutes
    },
    contentGeneration: {
        minLength: 100,
        maxLength: 500,
        useKeywords: true,
        keywordDensity: 0.02
    },
    apiConfig: {
        baseUrl: 'https://oauth.reddit.com',
        version: 'v1',
        userAgent: 'AutoCode Reddit Promo Agent v1.0.0'
    },
    errorHandling: {
        maxRetries: 3,
        retryDelay: 1000
    },
    logging: {
        level: 'info',
        format: 'json',
        filename: 'autocode.log'
    },
    analytics: {
        trackEngagement: true,
        trackPerformance: true,
        dashboardUrl: 'http://localhost:3000/dashboard'
    },
    security: {
        tokenRefreshInterval: 3600000 // 1 hour
    },
    features: {
        postInteraction: true,
        contentCreation: true,
        scheduling: true,
        rateLimit: true,
        errorHandling: true,
        contentPersonalization: true,
        analytics: true,
        authentication: true,
        logging: true
    },
    plugins: []
};
