export default {
    product: {
        name: 'MaxNotes',
        description: `MaxNotes.app - AI Voice Markdown Notes Organizer

# PROD

https://MaxNotes.app

## Overview

MaxNotes is a cutting-edge application designed to revolutionize voice note organization and
management using the power of AI. It offers a seamless experience for capturing voice memos,
automatically transcribing them, and intelligently organizing them into markdown notes. MaxNotes
leverages advanced AI integrations and a thoughtfully designed user interface to empower users to
effortlessly capture, organize, and extract valuable insights from their voice notes.

## Key Features

- **AI-Powered Voice Transcription & Markdown Conversion:** Automatically transcribes voice notes
  into text and formats them as markdown for easy editing and organization.
- **Photo and Image Recognition:** Utilizes AI to analyze and tag images, making them searchable and
  categorizable within notes.
- **Intelligent Note Organization:** Leverages AI to categorize and tag notes, making them easily
  searchable and retrievable.
- **Advanced Semantic Search:** Powerful search capabilities powered by multiple AI engines to find
  notes based on meaning and context, not just keywords.
- **Secure User Authentication:** Robust user authentication system with enhanced privacy controls
  to protect user data.
- **Offline Functionality with PWA:** Progressive Web App features for offline access and seamless
  updates, ensuring notes are accessible anytime, anywhere.
- **Markdown, Mermaid, and Diagram Support:** Future implementation to allow rich note-taking with
  markdown formatting, diagrams, and flowcharts.
- **Real-time Collaboration (Future):** Planned support for collaborative note editing in real-time.
`,
        advantages: [
            'Effortless Voice Note Taking with AI Transcription',
            'Organize Notes Intelligently with AI Categorization',
            'Semantic Search to Find Notes by Meaning',
            'Access Notes Offline with PWA Support',
            'Capture and Organize Images within Notes'
        ]
    },
    mainSubreddit: 'productivity',
    targetSubreddits: [
        'productivity',
        'notes',
        'artificialintelligence',
        'MachineLearning',
        'technology',
        'apps',
        'writing',
        'pwa',
        'software',
        'androidapps',
        'iosapps',
        'voice',
        'voicetech',
        'markdown'
    ],
    keywordsToTrack: [
        'voice notes',
        'ai notes',
        'markdown notes',
        'note taking app',
        'voice to text'
    ],
    keywordsToInject: ['MaxNotes', 'VoiceNotesAI', 'AINoteTaking', 'MarkdownNotes'],
    postSchedule: {
        cron: '0 13 * * *'
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
