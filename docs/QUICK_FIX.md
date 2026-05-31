# Quick Fix Guide 🚀

## Problem: Prisma Error + Gemini Timeout

### Step 1: Fix Prisma (2 minutes)
```bash
cd backend
./fix-prisma.sh
```

### Step 2: Restart Services
```bash
# Terminal 1 - API Server
npm run dev

# Terminal 2 - Worker
npm run worker:dev
```

### Step 3: Verify
```bash
# Check health
curl http://localhost:3000/api/health

# Watch worker logs
# Should see: "✅ Submission processed successfully"
```

---

## What Was Fixed?

### ✅ Prisma Client
- Regenerated to match engine version
- Cleared stale artifacts
- Synced dependencies

### ✅ Gemini API
- Added 60-90s timeout
- Exponential backoff retry (5s → 10s → 15s)
- Better error messages
- Fallback to gemini-1.5-flash

### ✅ Worker Stability
- Smart retry (only network errors)
- Prevents infinite loops
- Better error categorization

---

## Still Having Issues?

### Prisma Still Broken?
```bash
cd backend
npm install prisma@latest @prisma/client@latest
npm run prisma:generate
```

### Gemini Still Timing Out?
1. Check API key: `cat .env | grep GEMINI_API_KEY`
2. Test connectivity: `ping generativelanguage.googleapis.com`
3. Verify quota: https://aistudio.google.com/apikey

### Worker Not Processing?
```bash
# Check Redis
redis-cli ping

# Clear failed jobs
redis-cli FLUSHDB

# Restart worker
npm run worker:dev
```

---

## Need Help?

Check the full documentation:
- `FIXES_BACKEND_ERRORS.md` - Detailed fixes
- Worker logs - Look for specific error messages
- Prisma Studio - `npm run prisma:studio`

---

## Success Indicators ✅

You'll know it's working when you see:
```
✅ Status updated to PROCESSING for [id]
[Gemini] Model=gemini-2.5-flash Attempt=1/3
✅ Submission [id] processed successfully
   Score: 85, Mistakes: 3, XP: +45
```
