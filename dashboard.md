# Dashboard.js Documentation

## Overview

`dashboard.js` is the main server file for a dashboard application. It sets up an Express.js server that provides various API endpoints for fetching statistics, configuration, logs, and generating content. The server also serves static files and handles the main landing page.

This file is part of a larger project that includes other components such as `claude.js` for content generation, `config.js` for configuration management, and `reddit.js` for Reddit-related functionality.

## Dependencies

- `express`: Web application framework
- `fs/promises`: File system module (Promise-based API)
- `path`: Path manipulation utilities
- `url`: URL parsing and manipulation
- `winston`: Logging library
- `config.js`: Custom configuration module
- `claude.js`: Custom module for generating Reddit content

## Server Configuration

- The server runs on port 3000
- Static files are served from the `public` directory
- JSON parsing middleware is enabled

## Logging

A Winston logger is configured with the following settings:
- Log level is set from the configuration file
- Logs are written to both console and a file named 'dashboard.log'
- Log format includes timestamps

## API Endpoints

### GET /api/stats

Fetches statistics from the `stats.json` file.

**Response:**
- 200 OK: JSON object containing statistics
- 500 Internal Server Error: If unable to read the stats file

### GET /api/config

Returns selected configuration settings.

**Response:**
- 200 OK: JSON object with `targetSubreddits`, `mainSubreddit`, and `product` fields

### GET /api/logs

Retrieves the contents of the log file.

**Response:**
- 200 OK: Raw log file contents
- 500 Internal Server Error: If unable to read the log file

### POST /api/generate-post

Generates a Reddit post for a given subreddit.

**Request Body:**
- `subreddit`: String - The target subreddit

**Response:**
- 200 OK: JSON object with the generated post
- 500 Internal Server Error: If unable to generate the post

### POST /api/generate-comment

Generates a Reddit comment based on a post title and mentioned tool.

**Request Body:**
- `postTitle`: String - The title of the post
- `toolMentioned`: String - The tool mentioned in the post

**Response:**
- 200 OK: JSON object with the generated comment
- 500 Internal Server Error: If unable to generate the comment

### GET /api/social-media-content

Fetches social media content from a JSON file.

**Response:**
- 200 OK: JSON object containing social media content
- 500 Internal Server Error: If unable to read the content file

### GET /api/landing-page

Retrieves the contents of the landing page HTML file.

**Response:**
- 200 OK: HTML content of the landing page
- 500 Internal Server Error: If unable to read the landing page file

### GET /

Serves the main index.html file from the public directory.

## Error Handling

- Uncaught exceptions and unhandled rejections are logged using the Winston logger
- Each API endpoint includes error handling that logs errors and returns appropriate HTTP status codes

## Usage Example

To start the server:

```javascript
node dashboard.js
```

The server will start running at `http://localhost:3000`, and you should see a log message indicating that the server has started.

## Integration with Other Files

- `config.js`: Provides configuration settings used throughout the application
- `claude.js`: Contains functions for generating Reddit posts and comments
- `public/index.html`: The main HTML file served for the root route
- `docs/social_media_content.json`: Contains social media content served through an API endpoint
- `landing.html`: The HTML content for the landing page

## Note

This file is the central component of the dashboard application, handling HTTP requests, serving static content, and coordinating with other modules to provide the necessary functionality for the dashboard interface.