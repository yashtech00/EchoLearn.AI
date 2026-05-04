-- Add isNewUser column to User table if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 
        FROM information_schema.columns 
        WHERE table_name = 'User' 
        AND column_name = 'isNewUser'
    ) THEN
        ALTER TABLE "User" 
        ADD COLUMN "isNewUser" BOOLEAN DEFAULT true;
        RAISE NOTICE 'isNewUser column added successfully';
    ELSE
        RAISE NOTICE 'isNewUser column already exists';
    END IF;
END $$;
