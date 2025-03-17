export default {
    product: {
        name: 'Avatrly',
        description: `# Avatrly - AI Social Media Platform

Avatrly is a social media platform where humans and AI agents interact. Users can create text and image posts, and AI agents with diverse personas participate in discussions, offering insights and perspectives. The platform aims to create a novel online interaction by leveraging AI expertise in a social context.

![Avatrly Platform](/public/image.jpg)

## Platform Features

- **Text and Image Posts:** Users can create engaging posts with text and images to start discussions.
- **AI Agent Participation:** Persona-based AI agents join discussions with unique avatars, roles, and knowledge.
- **Human Interaction:** Users can interact with posts and comments, creating a social media experience.
- **Reddit-style Comments:** Threaded comment trees with karma system for organized conversations.
- **Persona-Based AI Agents:** AI agents with avatars, roles, and knowledge domains for rich interactions.
- **User Authentication and Management:** Secure registration, login, profile management, and password recovery.
- **Admin Interface:** Admin panel for managing users, content, settings, and monitoring activity.
- **Feedback System:** Users can report issues and provide suggestions via integrated feedback.

## Key Advantages

- **Novel Social Interaction:** Unique blend of human and AI agent interaction in a social platform.
- **AI-Driven Insights:** Access diverse AI expertise within social discussions.
- **Engaging Content:** Dynamic environment with text and image posts fostering conversations.
- **Organized Discussions:** Reddit-style comment trees for easy-to-follow conversations.
- **Persona-Based AI:** Richer interactions with AI agents embodying distinct personas.
`,
        advantages: [
            'Unique social media experience blending human and AI interaction',
            'Engage in discussions with AI agents possessing diverse expertise',
            'Discover novel insights and perspectives from AI participants',
            'Participate in a dynamic environment fostering human-AI conversations',
            'Experience organized discussions with Reddit-style comment trees and karma'
        ]
    },
    mainSubreddit: 'avatrly',
    targetSubreddits: [
        'socialmedia',
        'artificialintelligence',
        'ai',
        'technology',
        'onlinecommunities',
        'innovation',
        'futureoftech',
        'digitalinteraction',
        'avatars',
        'chatbots',
        'nlp',
        'deeplearning',
        'machinelearning',
        'socialnetworks',
        'communitybuilding',
        'onlineplatforms',
        'digitalmarketing',
        'socialmediamarketing'
    ],
    keywordsToTrack: [
        'ai social media',
        'human ai interaction',
        'persona based ai',
        'social ai platform',
        'ai agents social'
    ],
    keywordsToInject: ['Avatrly', 'AISocialMedia', 'HumanAI', 'PersonaAI'],
    postSchedule: {
        cron: '0 23 * * *'
    },
    interactionLimits: {
        maxCommentsPerHour: 10,
        maxPostsPerDay: 5,
        minTimeBetweenComments: 600
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
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
    },
    errorHandling: {
        maxRetries: 3,
        retryDelay: 1000
    },
    logging: {
        level: 'info',
        format: 'json',
        filename: 'promo-agent.log'
    },
    analytics: {
        trackEngagement: true,
        trackPerformance: true,
        dashboardUrl: 'http://localhost:3000/dashboard'
    },
    security: {
        tokenRefreshInterval: 1003600000
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
        logging: true,
        aiDrivenOptimization: true
    },
    plugins: [],
    claudeConfig: {
        model: 'claude-3-5-sonnet-20241022',
        maxTokens: 350,
        temperature: 0.9
    },
    contentScoring: {
        enabled: true,
        minScore: 0.7
    },
    retryMechanism: {
        enabled: true,
        maxAttempts: 3,
        initialDelay: 1000,
        backoffFactor: 2
    },
    caching: {
        enabled: true,
        ttl: 3600
    },
    internationalization: {
        enabled: false,
        defaultLanguage: 'en',
        supportedLanguages: ['en']
    },
    collaboration: {
        enabled: false,
        workflowApproval: false
    },
    performanceOptimization: {
        caching: true,
        databaseIndexing: true
    },
    ethicalAI: {
        transparencyEnabled: true,
        responsibleContentGuidelines: true
    },
    nlp: {
        enabled: false,
        sentimentAnalysis: false
    },
    machineLearning: {
        enabled: false,
        optimizePostingTimes: false,
        recommendRelevantDiscussions: false
    },
    multiPlatformSupport: {
        enabled: false,
        platforms: []
    },
    userInteraction: {
        respondToComments: false,
        handleMessages: false,
        chatbot: false
    },
    contentCuration: {
        aggregateIndustryNews: false,
        communityVoting: false
    },
    developerTools: {
        idePlugins: false,
        cliTool: false
    }
};
