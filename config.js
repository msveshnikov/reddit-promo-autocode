export default {
    product: {
        name: 'AutoCode',
        description: `# AutoCode

AutoCode is an innovative automatic coding tool designed to bootstrap any software project incrementally, transforming README.md instructions into a fully functional software project using Claude 3.5 Sonnet API. AutoCode was bootstrapped by itself from one simple prompt.

![AutoCode Logo](image.png)

## Features

-   NodeJS-based console application
-   Automatic code generation based on README.md instructions
-   Utilizes Claude 3.5 Sonnet API for intelligent code generation
-   Incremental project building
-   Creates and modifies source files in the current folder and subfolders
-   Self-updating README.md with new design ideas and considerations
-   Code quality checks and suggestions/auto fixes
-   Automatic dependency management and creation of missing files
-   Adherence to DRY, KISS, and SRP principles
-   Intelligent code analysis and refactoring suggestions
-   Automated documentation generation
-   User-friendly command-line interface
-   Support for multiple programming languages
-   AI-powered agents for specialized tasks
-   Pricing tiers with license management
-   Cross-platform compatibility (Windows, macOS, Linux)
-   Syntax checking and auto-fixing

## Installation

No installation is required. AutoCode can be run directly using npx.

## Usage

1. Create CLAUDE_KEY environment variable 
2. Navigate to your project folder in the terminal.
3. Run the following command:

npx autocode-ai

4. Follow the prompts and watch as your project comes to life!

## How It Works

AutoCode reads your README.md file and your sources and sends the instructions to the Claude 3.5 Sonnet API. The API interprets the instructions and generates the necessary code structure, files, and content. AutoCode then saves the generated code back to your project directory. It can now generate code for different languages based on the project requirements and applies language-specific linting and formatting.`,
        advantages: [
            'Fast and efficient code generation',
            'Seamless integration with popular development environments',
            'Advanced AI-powered code suggestions',
            'Customizable to fit various coding styles and preferences'
        ]
    },
    mainSubreddit: 'AutoCode',
    targetSubreddits: [
        'ClaudeAI',
        'ChatGPTCoding',
        'ArtificialInteligence',
        'Bard',
        // 'OpenAI', // banned haha
        'OnlyAICoding',
        'LocalLLaMA'
    ],
    keywordsToTrack: ['aider', 'Claude Dev', 'Cursor AI', 'continue.dev', 'v0'],
    keywordsToInject: ['AutoCode', 'AI', 'coding'],
    postSchedule: {
        interval: 'daily',
        time: '21:02'
    },
    interactionLimits: {
        maxCommentsPerHour: 10,
        maxPostsPerDay: 2,
        minTimeBetweenComments: 300
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
        userAgent: 'Reddit Promo Agent v1.0.0'
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
        tokenRefreshInterval: 3600000
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
        model: 'claude-3-5-sonnet-20240620',
        maxTokens: 250,
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
