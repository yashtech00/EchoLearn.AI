#!/bin/bash

# Script to update Prisma schema and regenerate client
# Run this after modifying schema.prisma

echo "🔄 Updating Prisma schema..."

cd "$(dirname "$0")/src/schema"

# Generate Prisma Client
echo "📦 Generating Prisma Client..."
npx prisma generate --schema=./prisma/schema.prisma

# Create migration
echo "🗄️  Creating migration..."
npx prisma migrate dev --name add_example_starters --schema=./prisma/schema.prisma

echo "✅ Schema update complete!"
