/*
  Warnings:

  - The values [EXAM,JOB_COMMUNICATION,ACADEMIC,RELOCATION,CASUAL] on the enum `PrimaryGoal` will be removed. If these variants are still used in the database, this will fail.
  - The values [OTHER] on the enum `PrimaryRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `educationLevel` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `intitutionContext` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `learningPurpose` on the `UserProfile` table. All the data in the column will be lost.
  - You are about to drop the column `occupationTitle` on the `UserProfile` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PrimaryGoal_new" AS ENUM ('FLUENCY', 'PROFICIENCY', 'EXAM_PREP', 'BUSINESS_ENGLISH', 'TRAVEL_AND_CULTURE_ENGLISH', 'GRAMMAR_MASTERY');
ALTER TABLE "UserProfile" ALTER COLUMN "primaryGoal" TYPE "PrimaryGoal_new" USING ("primaryGoal"::text::"PrimaryGoal_new");
ALTER TYPE "PrimaryGoal" RENAME TO "PrimaryGoal_old";
ALTER TYPE "PrimaryGoal_new" RENAME TO "PrimaryGoal";
DROP TYPE "public"."PrimaryGoal_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "PrimaryRole_new" AS ENUM ('STUDENT', 'WORKING_PROFESSIONAL', 'HOBBYIST', 'JOB_SEEKER');
ALTER TABLE "UserProfile" ALTER COLUMN "primaryRole" TYPE "PrimaryRole_new" USING ("primaryRole"::text::"PrimaryRole_new");
ALTER TYPE "PrimaryRole" RENAME TO "PrimaryRole_old";
ALTER TYPE "PrimaryRole_new" RENAME TO "PrimaryRole";
DROP TYPE "public"."PrimaryRole_old";
COMMIT;

-- AlterTable
ALTER TABLE "UserProfile" DROP COLUMN "educationLevel",
DROP COLUMN "intitutionContext",
DROP COLUMN "learningPurpose",
DROP COLUMN "occupationTitle";

-- DropEnum
DROP TYPE "EducationLevel";

-- DropEnum
DROP TYPE "InstitutionContext";
