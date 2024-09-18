# AutoCode: Reddit Promo Agent (built by [AutoCode](https://autocode.work) in 5 minutes)

## Overview

This is a tool designed to promote products on Reddit through targeted interactions and creative
posts.

## Requirements

-   Use ES6 imports and async/await syntax
-   Engage with posts about specified topics
-   Create daily posts in relevant subreddits
-   Focus on product-specific subreddit as the main target
-   Track specified subreddits
-   Use Claude Sonnet to create posts and comments

Environment variables:

-   CLIENT_ID - https://old.reddit.com/prefs/apps/
-   CLIENT_SECRET- https://old.reddit.com/prefs/apps/
-   REDDIT_USERNAME
-   REDDIT_PASSWORD
-   CLAUDE_KEY

## Features

1. Post Interaction
2. Content Creation
3. Scheduling
4. Reddit API Integration
5. Claude Haiku Integration
6. Configuration Management
7. Landing Page Generation
8. Social Media Content Management

## Project Structure

-   `reddit.js`: Main script for Reddit interactions
-   `claude.js`: Integration with Claude Haiku for content generation
-   `config.js`: Centralized configuration settings
-   `package.json`: Project dependencies and scripts
-

## Design Considerations

1. Content Personalization
2. Analytics
3. Logging
4. AI-Driven Content Optimization
5. Ethical Considerations
6. Multi-Product Support
7. Content Template System
8. Automated Competitor Analysis
9. User Profiling
10. Community Engagement Metrics
11. Adaptive Posting Strategy
12. Compliance Management
13. Cross-Platform Content Synchronization
14. A/B Testing for Content Performance
15. Social Media Integration

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up Reddit API credentials and Claude Haiku key in `.env` file
4. Configure product details and target subreddits in `config.js`
5. Run the script: `npm start`
6. To persist run `pm2 start reddit.js`

## Contributing

Contributions are welcome! Please read our contributing guidelines and code of conduct before
submitting pull requests.

## License

This project is licensed under the MIT License.

# TODO
