# Backend Error Fixes

## Issue 1: Prisma Version Mismatch ❌

### Error
```
unknown variant `SocketTimeout`, expected one of `GenericJs`, `UnsupportedNativeDataType`...
clientVersion: '6.19.3'
```

### Root Cause
Prisma Client version doesn't match Prisma Engine version. This happens when:
- Prisma was updated but `prisma generate` wasn't run
- Node modules are out of sync
- Multiple Prisma versions installed

### Quick Fix (Recommended)

```bash
cd backend
./fix-prisma.sh
```

### Manual Fix

```bash
cd backend

# 1. Clean existing Prisma artifacts
rm -rf node_modules/.prisma
rm -rf src/schema/generated

# 2. Reinstall dependencies
npm install

# 3. Regenerate Prisma Client
npm run prisma:generate

# 4. Restart your services
npm run dev
npm run worker:dev
```

### Alternative: Update to Latest Prisma

```bash
cd backend

# Update Prisma to latest version
npm install prisma@latest @prisma/client@latest @prisma/adapter-pg@latest

# Regenerate client
npm run prisma:generate
```

---

## Issue 2: Gemini API Network Timeout ❌

### Error
```
[GoogleGenerativeAI Error]: Error fetching from https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent: fetch failed
```

### Root Causes
1. **Network timeout** - Default Node.js fetch has no timeout
2. **API rate limiting** - Too many requests
3. **Network connectivity issues** - Firewall, DNS, or ISP issues
4. **API key issues** - Invalid or expired key

### Fixes Applied ✅

#### 1. Added Request Timeout
- Analysis requests: 90 seconds timeout
- Topic generation: 30 seconds timeout
- Prevents hanging requests

#### 2. Improved Retry Logic
- Exponential backoff (5s, 10s, 15s)
- Retries on network errors: timeout, fetch failed, ECONNRESET, ETIMEDOUT
- Falls back to `gemini-1.5-flash` if `gemini-2.5-flash` fails
- Up to 3 attempts per model

#### 3. Better Error Handling in Worker
- Distinguishes network errors from validation errors
- Only retries on network errors
- Provides user-friendly error messages
- Prevents infinite retry loops

### Verify Your Setup

```bash
# 1. Check if API key is set
cd backend
cat .env | grep GEMINI_API_KEY

# 2. Test API connectivity
curl -H "Content-Type: application/json" \
  -d '{"contents":[{"parts":[{"text":"Hello"}]}]}' \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY"

# 3. Check network connectivity
ping generativelanguage.googleapis.com
```

### If Issues Persist

#### Check API Key
1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Verify your API key is active
3. Check usage limits and quotas
4. Regenerate key if needed

#### Check Network
```bash
# Test DNS resolution
nslookup generativelanguage.googleapis.com

# Test with verbose curl
curl -v https://generativelanguage.googleapis.com

# Check for proxy/firewall
echo $HTTP_PROXY
echo $HTTPS_PROXY
```

#### Increase Timeout (if needed)
Edit `backend/src/services/mistake_memory_aI.service.js`:
```javascript
// For very slow connections
timeout: 120000, // 2 minutes
```

---

## Issue 3: Worker Job Failures

### Symptoms
- Jobs stuck in "PROCESSING" state
- Worker crashes repeatedly
- Redis connection issues

### Solutions

#### 1. Check Redis Connection
```bash
# Test Redis
redis-cli ping
# Should return: PONG

# Check Redis memory
redis-cli info memory
```

#### 2. Clear Failed Jobs
```bash
cd backend
node -e "
const { Queue } = require('bullmq');
const { getRedisConnection } = require('./src/config/redis.js');

const queue = new Queue('writing-submissions', {
  connection: getRedisConnection()
});

(async () => {
  await queue.clean(0, 1000, 'failed');
  console.log('✅ Cleared failed jobs');
  process.exit(0);
})();
"
```

#### 3. Monitor Worker Health
```bash
# Run worker with debug logs
DEBUG=bullmq:* npm run worker:dev
```

---

## Testing After Fixes

### 1. Test Prisma Connection
```bash
cd backend
npm run prisma:studio
# Should open Prisma Studio without errors
```

### 2. Test API Endpoint
```bash
# Start server
npm run dev

# In another terminal, test submission
curl -X POST http://localhost:3000/api/submissions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "content": "This is a test submission.",
    "genre": "GENERAL"
  }'
```

### 3. Monitor Worker Logs
```bash
npm run worker:dev

# Watch for:
# ✅ "Writing submission worker started"
# ✅ "Processing submission..."
# ✅ "Submission processed successfully"
```

---

## Prevention

### 1. Keep Dependencies Updated
```bash
# Check for updates
npm outdated

# Update safely
npm update

# Regenerate Prisma after updates
npm run prisma:generate
```

### 2. Add Health Checks
Create `backend/src/routes/health.js`:
```javascript
import express from 'express';
import prisma from '../lib/prisma.js';
import { getRedisConnection } from '../config/redis.js';

const router = express.Router();

router.get('/health', async (req, res) => {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {}
  };

  // Check Prisma
  try {
    await prisma.$queryRaw`SELECT 1`;
    health.services.database = 'ok';
  } catch (error) {
    health.services.database = 'error';
    health.status = 'degraded';
  }

  // Check Redis
  try {
    const redis = getRedisConnection();
    await redis.ping();
    health.services.redis = 'ok';
  } catch (error) {
    health.services.redis = 'error';
    health.status = 'degraded';
  }

  res.json(health);
});

export default router;
```

### 3. Set Up Monitoring
- Use PM2 for process management
- Set up error tracking (Sentry, LogRocket)
- Monitor API usage and quotas
- Set up alerts for failed jobs

---

## Summary

✅ **Fixed:**
- Prisma version mismatch with regeneration script
- Gemini API timeout with 60-90s limits
- Retry logic with exponential backoff
- Error handling with proper categorization
- Worker stability with selective retries

🔧 **To Apply:**
1. Run `./fix-prisma.sh` in backend directory
2. Restart services: `npm run dev` and `npm run worker:dev`
3. Monitor logs for successful processing
4. Test with a sample submission

📝 **Next Steps:**
- Set up health check endpoint
- Add monitoring and alerts
- Consider rate limiting for API calls
- Implement circuit breaker pattern for external APIs

