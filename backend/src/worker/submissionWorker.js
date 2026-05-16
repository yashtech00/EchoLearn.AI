import { Worker } from 'bullmq';
import { getRedisConnection } from '../config/redis.js';
import prisma from '../lib/prisma.js';
import { analyzeMistakeMemory } from '../services/mistake_memory_aI.service.js';
import { analysisResponseValidator } from '../validator/mistake_memory_ai.validator.js';
import { logUserActivity } from '../services/activity.service.js';

/**
 * Background Worker for Writing Submissions
 * 
 * This worker processes writing submissions from the queue:
 * 1. Fetches submission from DB
 * 2. Updates status to PROCESSING
 * 3. Calls AI service for analysis
 * 4. Validates AI response using Zod
 * 5. Stores analysis result in DB
 * 6. Updates status to COMPLETED or FAILED
 */

const worker = new Worker(
  'writing-submissions',
  async (job) => {
    const { submissionId, userId, content, genre, userProfile } = job.data;

    console.log(`🔄 Processing submission ${submissionId}`);

    try {
      // Step 1: Update submission status to PROCESSING
      await prisma.submission.update({
        where: { id: submissionId },
        data: { status: 'PROCESSING' },
      });

      console.log(`✅ Status updated to PROCESSING for ${submissionId}`);

      // Step 2: Call AI service for analysis
      const AIResponse = await analyzeMistakeMemory(content, userProfile);

      if (!AIResponse.success) {
        throw new Error(AIResponse.error || 'AI analysis failed');
      }

      const analysisData = AIResponse.data;

      // Step 3: Validate AI response using Zod
      const validationResult = analysisResponseValidator.safeParse(analysisData);

      if (!validationResult.success) {
        console.error('❌ AI response validation failed:', validationResult.error);
        throw new Error('AI response validation failed');
      }

      const validatedData = validationResult.data;

      // Step 4: Store analysis result in submission
      await prisma.submission.update({
        where: { id: submissionId },
        data: {
          status: 'COMPLETED',
          analysisJson: validatedData,
          rawAIResponse: JSON.stringify(analysisData),
          completedAt: new Date(),
        },
      });

      // Step 5: Create AnalysisRun record for detailed tracking
      const analysisRun = await prisma.analysisRun.create({
        data: {
          submissionId,
          status: 'COMPLETED',
          analyzerModel: 'gemini-2.5-flash',
          analyzerVersion: '1.0.0',
          rulesetVersion: 'pillars-12@2026-01-01',
          summaryJson: validatedData.summary,
          rawModelOutput: analysisData,
          completedAt: new Date(),
        },
      });

      // Step 6: Create Mistake records
      if (validatedData.mistakes && validatedData.mistakes.length > 0) {
        await prisma.mistake.createMany({
          data: validatedData.mistakes.map((mistake) => ({
            submissionId,
            analysisRunId: analysisRun.id,
            pillar: mistake.pillar,
            subtype: mistake.subtype,
            severity: mistake.severity,
            startOffset: mistake.startOffset,
            endOffset: mistake.endOffset,
            surfaceText: mistake.surfaceText,
            message: mistake.message,
            suggestion: mistake.suggestion,
            canonicalRuleId: mistake.canonicalRuleId,
            confidence: mistake.confidence,
          })),
        });
      }

      // Step 7: Calculate and award XP
      const score = validatedData.score || 0;
      const mistakeCount = validatedData.summary?.mistakeCount || 0;
      let xpEarned = 0;

      // Base XP for submission
      xpEarned += 10;

      // XP bonus based on score
      if (score >= 80) xpEarned += 20;
      else if (score >= 60) xpEarned += 15;
      else if (score >= 40) xpEarned += 10;
      else if (score >= 20) xpEarned += 5;

      // XP bonus for low mistake count
      if (mistakeCount === 0) xpEarned += 10;
      else if (mistakeCount <= 3) xpEarned += 5;

      // Update user stats with unified activity service
      const activityResult = await logUserActivity(
        userId,
        'SUBMISSION_ANALYSIS',
        'WRITING',
        submissionId,
        xpEarned
      );

      console.log(`✅ Submission ${submissionId} processed successfully`);
      console.log(`   Score: ${score}, Mistakes: ${mistakeCount}, XP: +${activityResult.xpEarned} (including +${activityResult.streakBonus} streak bonus)`);

      return {
        success: true,
        submissionId,
        score,
        mistakeCount,
        xpEarned: activityResult.xpEarned,
      };
    } catch (error) {
      console.error(`❌ Error processing submission ${submissionId}:`, error);

      // Update submission status to FAILED
      await prisma.submission.update({
        where: { id: submissionId },
        data: {
          status: 'FAILED',
          errorMessage: error.message,
          completedAt: new Date(),
        },
      });

      throw error; // Re-throw to trigger BullMQ retry
    }
  },
  {
    connection: getRedisConnection(),
    concurrency: 5, // Process 5 jobs concurrently
  }
);

// Worker event handlers
worker.on('completed', (job) => {
  console.log(`✅ Job ${job.id} completed successfully`);
});

worker.on('failed', (job, err) => {
  console.error(`❌ Job ${job?.id} failed:`, err.message);
});

worker.on('error', (err) => {
  console.error('Worker error:', err);
});

// Graceful shutdown
const shutdown = async () => {
  console.log('🛑 Shutting down worker...');
  await worker.close();
  console.log('✅ Worker closed');
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

console.log('🚀 Writing submission worker started');

export default worker;
