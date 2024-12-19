export default {
    product: {
        name: 'MyTrip.city',
        description: `
{
    "twitter": [
        "🌍 Introducing MyTrip.city - Your AI-powered travel companion! Generate personalized 2-3 day itineraries for any destination with stunning visuals and audio guides. Plan your next adventure in seconds! #TravelTech #AI https://mytrip.city",
        "🎯 Perfect travel planning made easy:\n✅ AI-generated itineraries\n✅ Visual-rich content\n✅ Audio guides\n✅ Carbon footprint calculator\n✅ Weather integration\nStart exploring now at https://mytrip.city #Travel #TechInnovation",
        "🚀 Travel smarter with MyTrip.city:\n• Personalized itineraries\n• GPS-based audio guides\n• Local events integration\n• Packing list generator\n• Multi-language support\nTry it free today! #TravelPlanning #AI"
    ],
    "linkedin": [
        "🌟 Excited to introduce MyTrip.city - an innovative AI-powered travel itinerary generator that's revolutionizing how we plan trips!\n\nOur platform combines cutting-edge AI technology with practical travel planning tools to create personalized 2-3 day itineraries for any destination worldwide. Whether you're a solo traveler or planning a group trip, MyTrip.city provides everything you need for the perfect journey.\n\nTry it now at https://mytrip.city\n\n#TravelTechnology #AI #Innovation #TravelPlanning",
        "🎯 Transform Your Travel Planning with MyTrip.city\n\nKey Features:\n• AI-generated personalized itineraries\n• Visual-rich content with stunning destination images\n• GPS-based audio guides\n• Carbon footprint calculator\n• Real-time weather integration\n• Local event recommendations\n• Multi-language support\n\nExperience the future of travel planning at https://mytrip.city\n\n#TravelTech #Innovation #AI #DigitalTransformation",
        "🚀 MyTrip.city: Where AI Meets Travel Planning\n\nProudly announcing our comprehensive travel planning solution that helps travelers:\n✅ Save time with instant itinerary generation\n✅ Discover hidden gems with local insights\n✅ Stay organized with smart packing lists\n✅ Track carbon footprint\n✅ Access offline guides\n\nStart planning your next adventure at https://mytrip.city\n\n#TravelInnovation #AI #TechnologySolutions"
    ],
    "facebook": [
        "🌎 Introducing MyTrip.city - Your Personal AI Travel Planner!\n\nTired of spending hours planning your trips? Let our AI-powered platform create the perfect itinerary for you in seconds! With stunning visuals, audio guides, and personalized recommendations, planning your next adventure has never been easier.\n\nTry it now: https://mytrip.city\n\n#TravelPlanning #AI #Innovation",
        "✈️ Make Your Travel Dreams Reality with MyTrip.city!\n\nDiscover what makes us special:\n🎯 AI-generated personalized itineraries\n📸 Beautiful destination photos\n🎧 GPS-based audio guides\n🌡️ Real-time weather updates\n🎫 Local event recommendations\n📝 Smart packing lists\n♻️ Carbon footprint tracking\n\nStart planning your perfect trip today: https://mytrip.city",
        "🌟 Transform Your Travel Experience with MyTrip.city!\n\nOur platform offers:\n• Personalized 2-3 day itineraries\n• Multi-language support\n• Offline access\n• Local cuisine recommendations\n• Weather integration\n• Social sharing\n• Mobile app access\n\nBest of all? It's free to try! Visit https://mytrip.city and start planning your next adventure today!\n\n#TravelPlanning #Innovation #AI"
    ]
}
`,
        advantages: [
            'AI-powered itinerary generation',
            'Personalized travel recommendations',
            'GPS-based audio guides',
            'Real-time weather integration',
            'Carbon footprint calculator',
            'Multi-language support',
            'Offline access',
            'Smart packing lists',
            'Local event recommendations',
            'Visual-rich content'
        ]
    },
    mainSubreddit: 'travel',
    targetSubreddits: [
        'travel',
        'solotravel',
        'backpacking',
        'digitalnomad',
        'TravelHacks',
        'traveltips',
        'travelpartners',
        'shoestring',
        'roadtrip',
        'Europetravel',
        'JapanTravel',
        'traveladvice',
        'travelnopics',
        'backpackers',
        'onebag'
    ],
    keywordsToTrack: ['travel planning', 'itinerary', 'AI travel'],
    keywordsToInject: ['MyTrip.city', 'AI travel planner', 'personalized itinerary'],
    postSchedule: {
        cron: '0 21 * * *'
    },
    interactionLimits: {
        maxCommentsPerHour: 10,
        maxPostsPerDay: 10,
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
