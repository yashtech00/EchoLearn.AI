import { createClient } from "redis";
import IORedis from "ioredis";

import dotenv from "dotenv";
dotenv.config();

/**
 * Redis URL
 */
const REDIS_URL = process.env.REDIS_URL;

/**
 * Normal Redis client
 * (optional app usage)
 */
const redisClient = createClient({
  url: REDIS_URL,
  socket: {
    tls: REDIS_URL.startsWith("rediss://") ? {rejectUnauthorized:false} : undefined,
  },
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error:", err);
});

redisClient.on("connect", () => {
  console.log("✅ Redis Client Connected");
});

/**
 * BullMQ connection
 */
const bullMQConnection = new IORedis(REDIS_URL, {
  maxRetriesPerRequest: null,
  tls: REDIS_URL.startsWith("rediss://") ? {rejectUnauthorized:false} : undefined,
});

bullMQConnection.on("connect", () => {
  console.log("✅ BullMQ Redis Connected");
});

bullMQConnection.on("error", (err) => {
  console.error("❌ BullMQ Redis Error:", err);
});

/**
 * Connect Redis
 */
export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("✅ Redis connected successfully");
  } catch (error) {
    console.error("❌ Failed to connect to Redis:", error);
    throw error;
  }
};

/**
 * Disconnect Redis
 */
export const disconnectRedis = async () => {
  try {
    await redisClient.quit();
    await bullMQConnection.quit();
    console.log("✅ Redis disconnected successfully");
  } catch (error) {
    console.error("❌ Failed to disconnect Redis:", error);
  }
};

/**
 * App redis client
 */
export const getRedisClient = () => redisClient;

/**
 * BullMQ connection
 */
export const getRedisConnection = () => bullMQConnection;

export default redisClient;