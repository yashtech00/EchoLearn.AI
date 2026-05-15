#!/usr/bin/env node

/**
 * Worker Startup Script
 * 
 * This script starts the background worker for processing writing submissions.
 * It should be run as a separate process from the main API server.
 * 
 * Usage: node src/worker/index.js
 * 
 * Environment Variables:
 * - REDIS_URL: Redis connection URL (default: redis://localhost:6379)
 * - DATABASE_URL: PostgreSQL connection URL
 * - GEMINI_API_KEY: Google Gemini API key
 */

import dotenv from 'dotenv';
import { connectRedis, disconnectRedis } from '../config/redis.js';

// Load environment variables
dotenv.config();

console.log('🚀 Starting writing submission worker...');

// Connect to Redis
connectRedis()
  .then(() => {
    console.log('✅ Redis connected');
    
    // Import and start the worker
    import('./submissionWorker.js')
      .then(() => {
        console.log('✅ Worker started successfully');
      })
      .catch((error) => {
        console.error('❌ Failed to start worker:', error);
        process.exit(1);
      });
  })
  .catch((error) => {
    console.error('❌ Failed to connect to Redis:', error);
    process.exit(1);
  });

// Graceful shutdown
const shutdown = async () => {
  console.log('\n🛑 Shutting down worker...');
  await disconnectRedis();
  console.log('✅ Worker shutdown complete');
  process.exit(0);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
