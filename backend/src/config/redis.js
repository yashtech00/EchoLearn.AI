import { createClient } from 'redis';

/**
 * Redis connection URL
 */
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';

/**
 * Redis client configuration
 * Used by BullMQ for job queue management
 */
const redisClient = createClient({
  url: REDIS_URL,
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

redisClient.on('connect', () => {
  console.log('Redis Client Connected');
});

/**
 * Connect to Redis
 * Should be called on application startup
 */
export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('✅ Redis connected successfully');
  } catch (error) {
    console.error('❌ Failed to connect to Redis:', error);
    throw error;
  }
};

/**
 * Disconnect from Redis
 * Should be called on application shutdown
 */
export const disconnectRedis = async () => {
  try {
    await redisClient.quit();
    console.log('✅ Redis disconnected successfully');
  } catch (error) {
    console.error('❌ Failed to disconnect from Redis:', error);
  }
};

/**
 * Get Redis client instance
 */
export const getRedisClient = () => redisClient;

/**
 * Export connection options for BullMQ
 * BullMQ can accept either a client instance or connection options
 */
export const redisConnectionOptions = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT || '6379'),
  db: parseInt(process.env.REDIS_DB || '0'),
  password: process.env.REDIS_PASSWORD || undefined,
};

// For BullMQ, prefer using the URL directly if available
export const getRedisConnection = () => {
  if (REDIS_URL) {
    return REDIS_URL;
  }
  return redisConnectionOptions;
};

export default redisClient;
