#!/usr/bin/env node

/**
 * Worker Startup Script (standalone process)
 *
 * On Render/MVP, prefer embedded worker in the API server instead:
 *   ENABLE_WORKER=true  →  npm start  (see src/index.js)
 *
 * Usage (local or dedicated worker service): node src/worker/index.js
 *
 * Environment Variables:
 * - REDIS_URL: Redis connection URL (default: redis://localhost:6379)
 * - DATABASE_URL: PostgreSQL connection URL
 * - GEMINI_API_KEY: Google Gemini API key
 * - ENABLE_WORKER: If set to "true", this script will exit (worker runs embedded in main process)
 */

import dotenv from 'dotenv';
import { connectRedis, disconnectRedis } from '../config/redis.js';

// Load environment variables
dotenv.config();

// Exit if embedded worker is enabled (to avoid conflict)
if (process.env.ENABLE_WORKER === "true") {
  console.log('⚠️  ENABLE_WORKER is set to true - worker runs embedded in main process');
  console.log('⚠️  This standalone worker script will not start');
  process.exit(0);
}

console.log('🚀 Starting writing submission worker...');

let closeWorkerFn = null;

// Connect to Redis
connectRedis()
  .then(async () => {
    console.log('✅ Redis connected');

    const workerModule = await import('./submissionWorker.js');
    closeWorkerFn = workerModule.closeWorker;
    console.log('✅ Worker started successfully');
  })
  .catch((error) => {
    console.error('❌ Failed to connect to Redis:', error);
    process.exit(1);
  });

// Graceful shutdown (standalone worker process)
const shutdown = async () => {
  console.log('\n🛑 Shutting down worker...');

  if (closeWorkerFn) {
    await closeWorkerFn();
  }

  await disconnectRedis();
  console.log('✅ Worker shutdown complete');
  process.exit(0);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
