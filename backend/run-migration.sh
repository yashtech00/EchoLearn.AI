#!/bin/bash

# Script to run SQL migration
# Usage: ./run-migration.sh add_example_starters.sql

echo "🗄️  Running database migration..."

# Load environment variables
source .env

# Run the SQL file using psql
PGPASSWORD="${DATABASE_URL#*://}" psql "$DATABASE_URL" -f add_example_starters.sql

if [ $? -eq 0 ]; then
    echo "✅ Migration completed successfully!"
else
    echo "❌ Migration failed!"
    exit 1
fi
