import { Queue } from 'bullmq';
import { getRedisConnection } from './redis.js';

/**
 * BullMQ Queue Configuration
 * 
 * Queue: writing-submissions
 * Purpose: Queue writing submissions for async AI analysis
 * 
 * Job Data Structure:
 * {
 *   submissionId: string,
 *   userId: string,
 *   content: string,
 *   genre: string,
 *   userProfile: object (optional)
 * }
 */

const writingSubmissionQueue = new Queue('writing-submissions', {
  connection: getRedisConnection(),
  defaultJobOptions: {
    attempts: 3, // Retry failed jobs 3 times
    backoff: {
      type: 'exponential',
      delay: 2000, // Initial delay: 2s, then 4s, 8s
    },
    removeOnComplete: {
      count: 1000, // Keep last 1000 completed jobs
      age: 24 * 3600, // Remove jobs older than 24 hours
    },
    removeOnFail: {
      count: 5000, // Keep last 5000 failed jobs for debugging
    },
  },
});

writingSubmissionQueue.on('error', (err) => {
  console.error('Queue Error:', err);
});

writingSubmissionQueue.on('waiting', (job) => {
  console.log(`Job ${job.id} is waiting`);
});

writingSubmissionQueue.on('active', (job) => {
  console.log(`Job ${job.id} is now active`);
});

writingSubmissionQueue.on('completed', (job) => {
  console.log(`Job ${job.id} has completed`);
});

writingSubmissionQueue.on('failed', (job, err) => {
  console.error(`Job ${job?.id} has failed:`, err.message);
});

/**
 * Add a job to the queue
 * @param {Object} jobData - Job data
 * @param {string} jobData.submissionId - Submission ID
 * @param {string} jobData.userId - User ID
 * @param {string} jobData.content - Writing content
 * @param {string} jobData.genre - Writing genre
 * @param {Object} jobData.userProfile - User profile (optional)
 * @returns {Promise<Job>} - BullMQ job instance
 */
export const addSubmissionJob = async (jobData) => {
  try {
    const job = await writingSubmissionQueue.add(
      'analyze-writing',
      jobData,
      {
        jobId: jobData.submissionId, // Use submissionId as jobId to prevent duplicates
        priority: 1, // Default priority
      }
    );
    console.log(`✅ Job added to queue: ${job.id}`);
    return job;
  } catch (error) {
    console.error('❌ Failed to add job to queue:', error);
    throw error;
  }
};

/**
 * Get job status
 * @param {string} jobId - Job ID
 * @returns {Promise<Object>} - Job data
 */
export const getJobStatus = async (jobId) => {
  try {
    const job = await writingSubmissionQueue.getJob(jobId);
    if (!job) {
      return null;
    }
    const state = await job.getState();
    const progress = job.progress;
    return {
      id: job.id,
      name: job.name,
      data: job.data,
      state,
      progress,
      processedOn: job.processedOn,
      finishedOn: job.finishedOn,
      failedReason: job.failedReason,
      attemptsMade: job.attemptsMade,
    };
  } catch (error) {
    console.error('❌ Failed to get job status:', error);
    throw error;
  }
};

/**
 * Remove completed jobs from queue
 * @param {number} limit - Number of jobs to remove
 */
export const cleanCompletedJobs = async (limit = 1000) => {
  try {
    await writingSubmissionQueue.clean(24 * 3600, limit, 'completed');
    console.log(`✅ Cleaned completed jobs`);
  } catch (error) {
    console.error('❌ Failed to clean completed jobs:', error);
  }
};

/**
 * Remove failed jobs from queue
 * @param {number} limit - Number of jobs to remove
 */
export const cleanFailedJobs = async (limit = 5000) => {
  try {
    await writingSubmissionQueue.clean(24 * 3600, limit, 'failed');
    console.log(`✅ Cleaned failed jobs`);
  } catch (error) {
    console.error('❌ Failed to clean failed jobs:', error);
  }
};

/**
 * Close queue connection
 * Should be called on application shutdown
 */
export const closeQueue = async () => {
  try {
    await writingSubmissionQueue.close();
    console.log('✅ Queue closed successfully');
  } catch (error) {
    console.error('❌ Failed to close queue:', error);
  }
};

export default writingSubmissionQueue;
