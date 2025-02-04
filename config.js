export default {
    product: {
        name: 'AutoCode',
        description: `# MyLog.food - AI-Powered Nutrition & Fitness Tracker

## Overview

MyLog.food is a smart nutrition and fitness tracking Progressive Web App (PWA) that leverages
state-of-the-art AI to process natural language food entries and provide comprehensive nutritional
insights. Designed with a mobile-first approach and built for performance, our platform aims to
empower users with accurate, personalized, and actionable health data—all while offering an engaging
user experience.

![Hero Image](public/hero.jpg)

# PROD

https://MyLog.food

## Features

- 🍎 Natural Language Food Entry with contextual suggestions
- 🧮 AI-Powered Nutrition Analysis using the specialized gpt-4o-mini model
- 📊 Comprehensive Nutrient Tracking
    - Calories
    - Macronutrients
    - Vitamins (A, B1, B3, B6, B12, C, D)
- 💪 Exercise Logging and custom metric tracking
- 📱 Daily Energy Balance Dashboard with interactive visualizations
- 📈 Vitamin Progress Visualization and Health Score Algorithm
- 👤 Personal Profile Management with smart goal tracking (weight loss, weight gain, maintenance)
- 🔍 Food Image Recognition with AR overlay support and improved portion size estimation
- 📸 Barcode Scanner Integration for quick food logging
- 🎨 Animated emoji feedback that zooms and explodes upon food log entry`,
        advantages: [
            'Smart Meal Recommendations based on dietary patterns',
            'Portion Size Detection and Dietary Pattern Analysis',
            'Progress Predictions and Goal Achievement Paths',
            'AR Food Recognition'
        ]
    },

    mainSubreddit: 'HealthyFood',
    targetSubreddits: ['Nutrition', 'HealthyFood', 'MealPrep', 'FoodPorn', 'Fitness'],
    keywordsToTrack: ['food log', 'nutrition tracker', 'meal tracking', 'healthy eating'],
    keywordsToInject: ['FoodLog', 'Nutrition', 'Tracker', 'MyLogFood'],
    postSchedule: {
        cron: '0 21 * * *'
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
