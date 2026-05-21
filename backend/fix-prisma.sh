#!/bin/bash

echo "🔧 Fixing Prisma Client Version Mismatch..."
echo ""

# Step 1: Clean Prisma artifacts
echo "1️⃣  Cleaning Prisma artifacts..."
rm -rf node_modules/.prisma
rm -rf src/schema/generated
echo "✅ Cleaned"
echo ""

# Step 2: Reinstall dependencies
echo "2️⃣  Reinstalling dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Step 3: Regenerate Prisma Client
echo "3️⃣  Regenerating Prisma Client..."
npm run prisma:generate
echo "✅ Prisma Client regenerated"
echo ""

echo "✨ Done! You can now restart your services:"
echo "   npm run dev"
echo "   npm run worker:dev"
