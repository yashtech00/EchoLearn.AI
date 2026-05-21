-- Add exampleStarters column to WritingPrompt table
-- Migration: add_example_starters
-- Date: 2026-05-18

ALTER TABLE "WritingPrompt" 
ADD COLUMN IF NOT EXISTS "exampleStarters" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- Update existing records to have empty array
UPDATE "WritingPrompt" 
SET "exampleStarters" = ARRAY[]::TEXT[]
WHERE "exampleStarters" IS NULL;
