# Prisma Relation Fix - May 18, 2026

## Issue 1: Relation Syntax Error
Backend was throwing `PrismaClientValidationError` when creating new writing topics:
```
Unknown argument `userId`. Did you mean `user`?
```

## Issue 2: Missing Schema Field
Backend was throwing `PrismaClientValidationError`:
```
Unknown argument `exampleStarters`. Available options are marked with ?.
```

## Root Causes

### Issue 1: Incorrect Relation Syntax
Prisma schema defines relationships using nested objects, not direct foreign key fields. When creating records with relations, we must use the `connect` syntax instead of passing the foreign key directly.

### Issue 2: Missing Field in Schema
The `WritingPrompt` model was missing the `exampleStarters` field that was being used in the controller and expected by the frontend.

## Changes Made

### 1. Fixed Prisma Relations in Controller
**File:** `backend/src/controller/mistake_memory_controller.js`

#### Writing Prompt Creation (2 instances)
**Before:**
```javascript
const newPrompt = await prisma.writingPrompt.create({
  data: {
    userId,  // ❌ Direct foreign key
    title: topicData.topic,
    // ... other fields
  },
});
```

**After:**
```javascript
const newPrompt = await prisma.writingPrompt.create({
  data: {
    user: {  // ✅ Nested relation
      connect: { id: userId }
    },
    title: topicData.topic,
    // ... other fields
  },
});
```

#### Submission Creation
**Before:**
```javascript
const submission = await prisma.submission.create({
  data: {
    userId,      // ❌ Direct foreign key
    promptId: promptId || null,  // ❌ Direct foreign key
    // ... other fields
  },
});
```

**After:**
```javascript
const submission = await prisma.submission.create({
  data: {
    user: {  // ✅ Nested relation
      connect: { id: userId }
    },
    prompt: promptId ? {  // ✅ Conditional nested relation
      connect: { id: promptId }
    } : undefined,
    // ... other fields
  },
});
```

#### User Stats Creation
**Before:**
```javascript
userStats = await prisma.userStats.create({
  data: {
    userId,  // ❌ Direct foreign key
    totalXp: 0,
    // ... other fields
  },
});
```

**After:**
```javascript
userStats = await prisma.userStats.create({
  data: {
    user: {  // ✅ Nested relation
      connect: { id: userId }
    },
    totalXp: 0,
    // ... other fields
  },
});
```

### 2. Added Missing Field to Schema
**File:** `backend/src/schema/prisma/schema.prisma`

**Added:**
```prisma
model WritingPrompt {
  // ... existing fields
  exampleStarters String[] @default([]) // Array of example starter sentences
  writingTips Json?   // Array of writing tips [{title, description}]
  // ... rest of fields
}
```

**Database Migration:**
```bash
npx prisma db push --schema=./prisma/schema.prisma
npx prisma generate --schema=./prisma/schema.prisma
```

## Prisma Relation Patterns

### Required Relation
```javascript
user: {
  connect: { id: userId }
}
```

### Optional Relation
```javascript
prompt: promptId ? {
  connect: { id: promptId }
} : undefined
```

### Multiple Relations (Create with nested data)
```javascript
submissions: {
  create: [
    { title: "...", body: "..." }
  ]
}
```

## Testing
- ✅ Create new writing topic endpoint now works
- ✅ Submit writing endpoint now works
- ✅ User stats creation now works
- ✅ Example starters are properly stored and retrieved
- ✅ No Prisma validation errors

## Files Modified
1. `backend/src/controller/mistake_memory_controller.js` - Fixed relation syntax
2. `backend/src/schema/prisma/schema.prisma` - Added exampleStarters field
3. Database schema updated via `prisma db push`
4. Prisma client regenerated

## Related Documentation
- [Prisma Relations Guide](https://www.prisma.io/docs/concepts/components/prisma-schema/relations)
- [Prisma Nested Writes](https://www.prisma.io/docs/concepts/components/prisma-client/relation-queries#nested-writes)
- [Prisma DB Push](https://www.prisma.io/docs/reference/api-reference/command-reference#db-push)
