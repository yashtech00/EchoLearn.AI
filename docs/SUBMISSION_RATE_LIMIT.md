# Submission Rate Limit — Implementation Plan

One free write + one free rewrite per topic, max one new topic per 24 hours.

---

## 1. Schema Changes

File: `backend/src/schema/prisma/schema.prisma`

### Add to `Submission` model

```prisma
model Submission {
  // ... existing fields ...
  rewriteCount  Int       @default(0)
}
```

### Add to `WritingPrompt` model

```prisma
model WritingPrompt {
  // ... existing fields ...
  cycleCompletedAt  DateTime?
}
```

### Run migration

```bash
npx prisma migrate dev --name add_submission_rate_limit
npx prisma generate
```

---

## 2. Controller Changes

File: `backend/src/controller/mistake_memory_controller.js`

### 2a. `createSubmission` — block duplicate submission for same topic

Add this check **before** `prisma.submission.create(...)`:

```js
const existing = await prisma.submission.findFirst({
  where: {
    userId: req.user.userId,
    promptId: body.promptId,
    status: { not: 'FAILED' },
  },
});
if (existing) {
  return res.status(409).json({
    success: false,
    error: 'You already have a submission for this topic.',
  });
}
```

### 2b. `rewriteSubmission` — block second rewrite

Add this check **after** fetching the submission and **before** `queue.add(...)`:

```js
if (submission.rewriteCount >= 1) {
  return res.status(403).json({
    success: false,
    error: 'Rewrite limit reached. You get one free rewrite per topic.',
  });
}
```

Then, **after** `queue.add(...)` succeeds, increment the counter:

```js
await prisma.submission.update({
  where: { id: submission.id },
  data: { rewriteCount: { increment: 1 } },
});
```

### 2c. `createNewTopic` — enforce cycle completion + 24h cooldown

Add both checks **before** calling the AI topic generator:

```js
// Gate 1: user must finish current topic cycle before starting a new one
const activeTopic = await prisma.writingPrompt.findFirst({
  where: { userId: req.user.userId, isActive: true },
});
if (activeTopic && !activeTopic.cycleCompletedAt) {
  return res.status(409).json({
    success: false,
    error: 'Complete your current topic first before requesting a new one.',
  });
}

// Gate 2: max 1 new topic per 24 hours
const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
const recentTopic = await prisma.writingPrompt.findFirst({
  where: {
    userId: req.user.userId,
    createdAt: { gte: since },
  },
});
if (recentTopic) {
  return res.status(429).json({
    success: false,
    error: 'You can start a new topic once every 24 hours.',
  });
}
```

---

## 3. Worker Changes

File: `backend/src/worker/submissionWorker.js`

After the submission status is set to `COMPLETED`, add this block **only when the job is a rewrite**:

```js
if (jobData.isRewrite) {
  await prisma.writingPrompt.updateMany({
    where: {
      userId: jobData.userId,
      isActive: true,
    },
    data: {
      cycleCompletedAt: new Date(),
      isActive: false,
    },
  });
}
```

Place this **after** XP is logged and **before** the worker returns success, so the cycle only closes on a clean evaluation.

---

## 4. Full User Flow After Changes

```
GET  /writing/current-topic
       └─ returns active WritingPrompt (creates one if none exists)

POST /writing/submissions          { promptId, title, genre, body }
       └─ blocked if submission already exists for this promptId (409)
       └─ creates Submission with status PENDING, enqueues AI job

GET  /writing/submissions/:id      (poll until status = COMPLETED)

PATCH /writing/submission/:id/rewrite   { body }
       └─ blocked if rewriteCount >= 1 (403)
       └─ clears previous analysis, increments rewriteCount, enqueues AI job

GET  /writing/submissions/:id      (poll until status = COMPLETED)
       └─ worker sets WritingPrompt.cycleCompletedAt + isActive = false

POST /writing/new-topic
       └─ blocked if active topic has no cycleCompletedAt (409)
       └─ blocked if any topic created within last 24h (429)
       └─ generates new topic, deactivates previous
```

---

## 5. File Summary

| File | What to change |
|------|----------------|
| `backend/src/schema/prisma/schema.prisma` | Add `rewriteCount Int @default(0)` to Submission; add `cycleCompletedAt DateTime?` to WritingPrompt |
| `backend/src/controller/mistake_memory_controller.js` | Add guards in `createSubmission`, `rewriteSubmission`, `createNewTopic` |
| `backend/src/worker/submissionWorker.js` | Mark prompt cycle complete after rewrite job finishes |

---

## 6. Error Responses Reference

| Scenario | HTTP Status | Message |
|----------|-------------|---------|
| Submit twice for same topic | 409 | You already have a submission for this topic. |
| Second rewrite attempt | 403 | Rewrite limit reached. You get one free rewrite per topic. |
| New topic before cycle done | 409 | Complete your current topic first before requesting a new one. |
| New topic within 24h | 429 | You can start a new topic once every 24 hours. |
