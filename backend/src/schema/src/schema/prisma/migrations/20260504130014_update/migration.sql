-- CreateEnum
CREATE TYPE "PrimaryRole" AS ENUM ('STUDENT', 'WORKING_PROFESSIONAL', 'OTHER');

-- CreateEnum
CREATE TYPE "EducationLevel" AS ENUM ('HIGH_SCHOOL', 'UNDERGRAD', 'GRADUATE', 'OTHER');

-- CreateEnum
CREATE TYPE "InstitutionContext" AS ENUM ('SCHOOL', 'COLLEGE', 'WORKPLACE', 'SELF_STUDY');

-- CreateEnum
CREATE TYPE "PrimaryGoal" AS ENUM ('EXAM', 'JOB_COMMUNICATION', 'ACADEMIC', 'RELOCATION', 'CASUAL');

-- CreateEnum
CREATE TYPE "SubmissionGenre" AS ENUM ('GENERAL', 'WORK_EMAIL', 'SHORT_ESSAY', 'DIARY', 'ACADEMIC_PARAGRAPH');

-- CreateEnum
CREATE TYPE "AnalysisStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateEnum
CREATE TYPE "MistakeSeverity" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateEnum
CREATE TYPE "PillarCode" AS ENUM ('VERB_SYSTEMS', 'AGREEMENT_GRAMMAR', 'DETERMINERS_QUANTITY', 'PREPOSITIONS_PHRASAL', 'LEXICAL_COLLOCATION', 'CLARITY_AMBIGUITY', 'COHESION_FLOW', 'INFO_STRUCTURE', 'REGISTER_TONE', 'PUNCTUATION_MECHANICS', 'SPELLING_ORTHOGRAPHY', 'GENRE_PRAGMATICS');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "image" TEXT,
    "isNewUser" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "id" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userAgent" TEXT,
    "ip" TEXT,
    "isRevoked" BOOLEAN NOT NULL DEFAULT false,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "primaryRole" "PrimaryRole" NOT NULL,
    "educationLevel" "EducationLevel",
    "intitutionContext" TEXT,
    "occupationTitle" TEXT,
    "englishReadingSelfScore" INTEGER NOT NULL,
    "englishWritingSelfScore" INTEGER NOT NULL,
    "primaryGoal" "PrimaryGoal",
    "weeklyTimeMinutes" INTEGER,
    "interestTags" TEXT[],
    "preferredGenres" "SubmissionGenre"[],
    "localePreference" TEXT NOT NULL DEFAULT 'en-US',
    "grammarScore" INTEGER,
    "vocabularyScore" INTEGER,
    "fluencyScore" INTEGER,
    "pronunciationScore" INTEGER,
    "learningPurpose" TEXT,
    "targetScoreGoal" INTEGER,
    "dailyGoalMinutes" INTEGER,
    "preferredLearningStyle" TEXT,
    "weakAreas" TEXT[],
    "initialAssessmentDone" BOOLEAN NOT NULL DEFAULT false,
    "onboardingCompletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WritingPrompt" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "genre" "SubmissionGenre" NOT NULL,
    "body" TEXT NOT NULL,
    "topicTags" TEXT[],
    "targetLevel" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WritingPrompt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "promptId" TEXT,
    "title" TEXT,
    "genre" "SubmissionGenre" NOT NULL,
    "body" TEXT NOT NULL,
    "wordCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalysisRun" (
    "id" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "status" "AnalysisStatus" NOT NULL DEFAULT 'PENDING',
    "analyzerModel" TEXT,
    "analyzerVersion" TEXT,
    "rulesetVersion" TEXT,
    "summaryJson" JSONB,
    "rawModelOutput" JSONB,
    "errorMessage" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "AnalysisRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mistake" (
    "id" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "analysisRunId" TEXT NOT NULL,
    "pillar" "PillarCode" NOT NULL,
    "subtype" TEXT NOT NULL,
    "severity" "MistakeSeverity",
    "startOffset" INTEGER NOT NULL,
    "endOffset" INTEGER NOT NULL,
    "surfaceText" TEXT,
    "message" TEXT NOT NULL,
    "suggestion" TEXT,
    "canonicalRuleId" TEXT,
    "confidence" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mistake_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStats" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "totalXp" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 1,
    "currentStreak" INTEGER NOT NULL DEFAULT 0,
    "longestStreak" INTEGER NOT NULL DEFAULT 0,
    "lastActiveDate" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "XpEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "xpDelta" INTEGER NOT NULL,
    "payload" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "XpEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "RefreshToken_userId_idx" ON "RefreshToken"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_userId_key" ON "UserProfile"("userId");

-- CreateIndex
CREATE INDEX "Submission_userId_createdAt_idx" ON "Submission"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "AnalysisRun_submissionId_idx" ON "AnalysisRun"("submissionId");

-- CreateIndex
CREATE INDEX "Mistake_pillar_subtype_idx" ON "Mistake"("pillar", "subtype");

-- CreateIndex
CREATE INDEX "Mistake_submissionId_idx" ON "Mistake"("submissionId");

-- CreateIndex
CREATE INDEX "Mistake_analysisRunId_idx" ON "Mistake"("analysisRunId");

-- CreateIndex
CREATE UNIQUE INDEX "UserStats_userId_key" ON "UserStats"("userId");

-- CreateIndex
CREATE INDEX "XpEvent_userId_createdAt_idx" ON "XpEvent"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "WritingPrompt"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalysisRun" ADD CONSTRAINT "AnalysisRun_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mistake" ADD CONSTRAINT "Mistake_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mistake" ADD CONSTRAINT "Mistake_analysisRunId_fkey" FOREIGN KEY ("analysisRunId") REFERENCES "AnalysisRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStats" ADD CONSTRAINT "UserStats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "XpEvent" ADD CONSTRAINT "XpEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
