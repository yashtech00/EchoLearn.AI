import { PrismaClient } from "@prisma/client";
import pkg from "pg";
const { Pool } = pkg;

// Use the same connection pattern as the existing server
const connectionString = "postgresql://localhost:5432/englishiq";
const pool = new Pool({ connectionString });

async function addIsNewUserColumn() {
  try {
    console.log('Connecting to database...');
    
    // Check if column already exists
    const checkResult = await pool.query(`
      SELECT column_name 
      FROM information_schema.columns 
      WHERE table_name = 'User' 
      AND column_name = 'isNewUser'
    `);
    
    if (checkResult.rows.length === 0) {
      console.log('Adding isNewUser column to User table...');
      
      // Add the column
      await pool.query(`
        ALTER TABLE "User" 
        ADD COLUMN "isNewUser" BOOLEAN DEFAULT true
      `);
      
      console.log('✅ isNewUser column added successfully');
    } else {
      console.log('✅ isNewUser column already exists');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await pool.end();
  }
}

addIsNewUserColumn();
