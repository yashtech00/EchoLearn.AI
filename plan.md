# MVP System Design — AI Writing Coach + Mistake Memory (Web)

**Stack:** Next.js (web) · Express.js (API) · Prisma · PostgreSQL  
**Audience:** Students and working professionals (single product, profile-driven personalization)  
**Version:** v1 MVP document — implementation reference for engineering  

---

## 1. MVP goals and non-goals

### 1.1 Goals

- User **registers**, completes **portfolio/onboarding**, lands on a **dashboard** guided by profile (level, interests, role).
- User submits **writing**; system runs **AI + rules-backed analysis**, stores **structured mistakes** (12 pillars × subtypes) with **evidence** (text spans).
- User views **mistake memory** (history, filters) and **analytics** derived from stored facts (counts, trends, pillar mix)—not opaque scores.
- **Gamification lite:** XP, streak, level; tied to completed activities and quality where measurable.
- **Web only** for v1.

### 1.2 Non-goals (defer)

- Native mobile apps, offline-first.
- Real-time multiplayer, social graph, leaderboards (optional later).
- Full “adaptive ML” bandit—MVP uses **simple rules** (weakest pillar, recency).
- Separate game engine microservice—MVP can use **one activity type** (“writing challenge”) plus optional **one mini-game** if time permits.

---

## 2. High-level architecture

### 2.1 Logical view

```
┌─────────────────────────────────────────────────────────────────┐
│                     Browser (Next.js App Router)                 │
│  Auth UI · Onboarding · Dashboard · Writing · Analytics · XP     │
└───────────────────────────────┬─────────────────────────────────┘
                                │ HTTPS (JSON)
                                ▼
┌─────────────────────────────────────────────────────────────────┐
│              Express API (REST) · Business logic                  │
│  Auth middleware · Validation · Orchestration · Rate limits       │
└───────┬─────────────────────┬─────────────────────┬─────────────┘
        │                     │                     │
        ▼                     ▼                     ▼
 ┌─────────────┐      ┌───────────────┐      ┌─────────────────┐
 │  Prisma ORM │      │ LLM Provider  │      │  Job queue      │
 │  PostgreSQL │      │ (OpenAI/etc.) │      │  (optional MVP) │
 └─────────────┘      └───────────────┘      └─────────────────┘
```

- **Next.js** owns UX, SSR, and can use **Route Handlers** only for cookies/session bridge if desired; **primary API is Express** to keep a clear backend boundary for Prisma + long-running analysis.
- **PostgreSQL** is the source of truth for users, profiles, submissions, mistakes, XP events.
- **LLM** is called from Express (never expose API keys to the browser).

### 2.2 Suggested deployment topology (MVP)

| Component        | Hosting example        | Notes                                      |
|-----------------|------------------------|--------------------------------------------|
| Next.js         | Vercel / Node server   | `NEXT_PUBLIC_API_URL` points to Express     |
| Express API     | Railway / Render / Fly | Same region as DB; enable HTTPS            |
| PostgreSQL      | Neon / RDS / Supabase  | Connection string in API only              |

### 2.3 Monorepo layout (suggested)

```
repo/
├── apps/
│   ├── web/                 # Next.js (App Router)
│   └── api/                 # Express + Prisma client
├── packages/
│   ├── database/            # prisma/schema.prisma, migrations (optional pkg)
│   └── shared/              # shared TS types, zod schemas, pillar enums
├── package.json
└── turbo.json               # optional (Turborepo)
```

Alternative: single `apps/api` with `prisma/` at repo root—either is fine if **one** Prisma schema is the source of truth.

### 2.4 Request flow: submit writing → analysis

1. User posts `POST /v1/submissions` with `{ text, genre, topicTags, optional promptId }`.
2. Express creates `Submission` + `AnalysisRun` (`PENDING`).
3. Express invokes **analyzer** (LLM with JSON schema + optional rule engine).
4. On success: persist `Mistake[]`, set `AnalysisRun` `COMPLETED`; compute **XP transaction**; update **`UserStats`** (denormalized counters).
5. Return submission + mistakes + summary stats.

**Sync vs async:** MVP can process **synchronously** for texts under ~500–800 words with a server timeout budget; add a **job queue** (BullMQ + Redis) when you exceed provider latency SLOs.

---

## 3. Authentication and session strategy

### 3.1 Recommended MVP: JWT access + refresh (HttpOnly cookies)

| Token     | Lifetime   | Storage              |
|-----------|------------|----------------------|
| Access    | 15 min     | Memory / Authorization header |
| Refresh   | 14–30 days | HttpOnly Secure cookie (`api` domain or shared parent domain) |

Express issues tokens on `POST /v1/auth/register`, `POST /v1/auth/login`; Next.js stores access token in memory (or short-lived cookie via Route Handler if you prefer).

**Why not NextAuth only:** You asked for Express as API; keeping auth in Express avoids splitting user tables across adapters. You can still add NextAuth later as OIDC-style consumer.

### 3.2 Password hashing

- **Argon2id** or **bcrypt** (cost tuned); never store plaintext.

---

## 4. Domain model (conceptual)

### 4.1 Core entities

- **User** — credentials, email verification flags (optional MVP).
- **UserProfile** — onboarding: role, education/work, English self-rating, interests.
- **Submission** — user text + metadata (genre, word count, optional prompt).
- **AnalysisRun** — one analyzer execution; model + rules version; status; raw response optional.
- **Mistake** — atomic finding: pillar, subtype, offsets, evidence snippet, suggestion, severity.
- **ActivityEvent** (optional but recommended) — append-only log for XP and analytics (“submission_completed”, “rewrite_completed”).
- **UserStats** — denormalized: `totalXp`, `level`, `currentStreak`, `longestStreak`, `lastActiveDate`.

### 4.2 Pillar taxonomy (stored as enums or lookup table)

Use **stable string codes** in DB for analytics continuity.

**Pillars (`PillarCode`):**

| Code | Label |
|------|--------|
| `VERB_SYSTEMS` | Verb systems |
| `AGREEMENT_GRAMMAR` | Agreement & sentence grammar |
| `DETERMINERS_QUANTITY` | Determiners, articles & quantity |
| `PREPOSITIONS_PHRASAL` | Prepositions & phrasal verbs |
| `LEXICAL_COLLOCATION` | Lexical choice & collocation |
| `CLARITY_AMBIGUITY` | Clarity, redundancy & ambiguity |
| `COHESION_FLOW` | Cohesion & flow |
| `INFO_STRUCTURE` | Information structure & emphasis |
| `REGISTER_TONE` | Register, tone & audience |
| `PUNCTUATION_MECHANICS` | Punctuation & mechanics |
| `SPELLING_ORTHOGRAPHY` | Spelling & orthography |
| `GENRE_PRAGMATICS` | Genre & pragmatic moves |

**Subtype:** `String` field `subtypeCode` (e.g. `TENSE_CONSISTENCY`, `COMMA_SPLICE`) — enforce allowed values per pillar in application validation (Zod). MVP can ship a **constants file** rather than DB seed for subtypes.

---

## 5. Analytics definitions (computed, not stored as fake scores)

Implement as **pure functions** over `Mistake` + `Submission`:

- **Word count** — define algorithm (split on whitespace; hyphen rules documented).
- **Error density** — `(mistakeCount / wordCount) * 100`.
- **Pillar mix** — `%` of mistakes per pillar over a window.
- **Recurrence index** — frequency of `(pillarCode, subtypeCode)` in last *N* submissions.

Persist only **facts** (mistakes); aggregates can be **materialized later** if needed.

---

## 6. REST API surface (MVP)

Base path: `/v1`

### 6.1 Auth

| Method | Path | Body | Notes |
|--------|------|------|-------|
| POST | `/auth/register` | email, password, displayName | Creates User + empty profile |
| POST | `/auth/login` | email, password | Returns tokens |
| POST | `/auth/refresh` | refresh token | Rotating refresh recommended |
| POST | `/auth/logout` | — | Invalidate refresh |

### 6.2 Profile

| Method | Path | Body |
|--------|------|------|
| GET | `/me/profile` | — |
| PUT | `/me/profile` | See JSON example §7.3 |

### 6.3 Submissions & analysis

| Method | Path | Notes |
|--------|------|-------|
| POST | `/submissions` | Create submission + run analysis sync |
| GET | `/submissions/:id` | Detail + mistakes |
| GET | `/submissions` | Paginated list (filters: date range) |

### 6.4 Mistakes & analytics

| Method | Path | Notes |
|--------|------|-------|
| GET | `/me/mistakes` | Filters: pillar, subtype, dateFrom, dateTo |
| GET | `/me/analytics/summary` | Window: `7d`, `30d`, `all` |

### 6.5 Stats / XP

| Method | Path | Notes |
|--------|------|-------|
| GET | `/me/stats` | XP, level, streak |

---

## 7. JSON examples (API + DB-shaped payloads)

### 7.1 Register request / response

**Request — `POST /v1/auth/register`**

```json
{
  "email": "ada@example.com",
  "password": "minimum-12-chars-policy",
  "displayName": "Ada"
}
```

**Response — 201**

```json
{
  "user": {
    "id": "01HZYX9V8QK2N8YTXYZ1234ABC",
    "email": "ada@example.com",
    "displayName": "Ada",
    "createdAt": "2026-04-17T10:12:00.000Z"
  },
  "tokens": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "accessTokenExpiresInSec": 900,
    "refreshToken": "opaque-or-jwt-refresh"
  }
}
```

### 7.2 Profile payload (onboarding)

**Request — `PUT /v1/me/profile`**

```json
{
  "primaryRole": "WORKING_PROFESSIONAL",
  "educationLevel": "GRADUATE",
  "institutionContext": "WORKPLACE",
  "occupationTitle": "Product Analyst",
  "englishReadingSelfScore": 4,
  "englishWritingSelfScore": 3,
  "primaryGoal": "JOB_COMMUNICATION",
  "weeklyTimeMinutes": 90,
  "interestTags": ["FINANCE", "TRAVEL", "TECH"],
  "preferredGenres": ["WORK_EMAIL", "SHORT_ESSAY"],
  "localePreference": "en-US"
}
```

**Enums (suggested):**

- `primaryRole`: `STUDENT` | `WORKING_PROFESSIONAL` | `OTHER`
- `educationLevel`: `HIGH_SCHOOL` | `UNDERGRAD` | `GRADUATE` | `OTHER`
- `institutionContext`: `SCHOOL` | `COLLEGE` | `WORKPLACE` | `SELF_STUDY`
- `primaryGoal`: `EXAM` | `JOB_COMMUNICATION` | `ACADEMIC` | `RELOCATION` | `CASUAL`

**Stored row (`UserProfile`) — JSON-shaped document example**

```json
{
  "userId": "01HZYX9V8QK2N8YTXYZ1234ABC",
  "primaryRole": "WORKING_PROFESSIONAL",
  "educationLevel": "GRADUATE",
  "institutionContext": "WORKPLACE",
  "occupationTitle": "Product Analyst",
  "englishReadingSelfScore": 4,
  "englishWritingSelfScore": 3,
  "primaryGoal": "JOB_COMMUNICATION",
  "weeklyTimeMinutes": 90,
  "interestTags": ["FINANCE", "TRAVEL", "TECH"],
  "preferredGenres": ["WORK_EMAIL", "SHORT_ESSAY"],
  "localePreference": "en-US",
  "onboardingCompletedAt": "2026-04-17T10:20:00.000Z"
}
```

### 7.3 Create submission + analysis

**Request — `POST /v1/submissions`**

```json
{
  "promptId": "01HZY000PROMPT0001",
  "title": "Quick status update",
  "genre": "WORK_EMAIL",
  "body": "Hi team, just a quick update about the Q2 figures. We was hoping to finalize the deck by Friday, but we need another day due to data delay. Please let me know if thats okay. Best, Ada",
  "targetWordCount": 120,
  "metadata": {
    "clientTimeZone": "Asia/Kolkata"
  }
}
```

**Response — 201** (persisted entities + computed summary)

```json
{
  "submission": {
    "id": "01HZY111SUB999",
    "userId": "01HZYX9V8QK2N8YTXYZ1234ABC",
    "promptId": "01HZY000PROMPT0001",
    "title": "Quick status update",
    "genre": "WORK_EMAIL",
    "body": "Hi team, just a quick update ...",
    "wordCount": 52,
    "createdAt": "2026-04-17T10:25:00.000Z"
  },
  "analysis": {
    "runId": "01HZY222RUN888",
    "status": "COMPLETED",
    "analyzerModel": "gpt-4.1-mini",
    "analyzerVersion": "writing-coach-analyzer@1.3.0",
    "rulesetVersion": "pillars-subtypes@2026-04-01",
    "completedAt": "2026-04-17T10:25:04.120Z",
    "summary": {
      "mistakeCount": 5,
      "errorDensityPer100Words": 9.62,
      "byPillar": [
        { "pillar": "AGREEMENT_GRAMMAR", "count": 2 },
        { "pillar": "VERB_SYSTEMS", "count": 1 },
        { "pillar": "SPELLING_ORTHOGRAPHY", "count": 1 },
        { "pillar": "GENRE_PRAGMATICS", "count": 1 }
      ]
    },
    "mistakes": [
      {
        "id": "01HZY333MIST001",
        "pillar": "VERB_SYSTEMS",
        "subtype": "SVA_BASIC",
        "severity": "MEDIUM",
        "startOffset": 82,
        "endOffset": 84,
        "surfaceText": "We",
        "message": "Subject–verb agreement: plural subject needs plural verb.",
        "suggestion": "We were hoping",
        "evidenceQuote": "We was hoping",
        "canonicalRuleId": "RULE.SVA_PLURAL_SUBJECT_WERE",
        "confidence": 0.86
      }
    ]
  },
  "gamification": {
    "xpAwarded": 25,
    "reasons": ["SUBMISSION_COMPLETED", "FIRST_SUBMISSION_OF_DAY"],
    "userStats": {
      "totalXp": 125,
      "level": 2,
      "currentStreakDays": 3
    }
  }
}
```

### 7.4 Mistake row (as returned by `GET /v1/me/mistakes`)

```json
{
  "items": [
    {
      "id": "01HZY333MIST001",
      "submissionId": "01HZY111SUB999",
      "createdAt": "2026-04-17T10:25:00.000Z",
      "pillar": "VERB_SYSTEMS",
      "subtype": "SVA_BASIC",
      "severity": "MEDIUM",
      "startOffset": 82,
      "endOffset": 84,
      "surfaceText": "We",
      "message": "Subject–verb agreement: plural subject needs plural verb.",
      "suggestion": "We were hoping",
      "canonicalRuleId": "RULE.SVA_PLURAL_SUBJECT_WERE",
      "confidence": 0.86
    }
  ],
  "page": { "cursor": null, "hasMore": false }
}
```

### 7.5 Analytics summary

**Request — `GET /v1/me/analytics/summary?window=30d`**

**Response — 200**

```json
{
  "window": "30d",
  "submissionsCount": 14,
  "totalMistakes": 96,
  "avgErrorDensityPer100Words": 11.4,
  "pillarMix": [
    { "pillar": "PREPOSITIONS_PHRASAL", "percent": 28.1, "count": 27 },
    { "pillar": "DETERMINERS_QUANTITY", "percent": 18.8, "count": 18 }
  ],
  "topSubtypes": [
    {
      "pillar": "PREPOSITIONS_PHRASAL",
      "subtype": "VERB_PREPOSITION_PAIR",
      "count": 14,
      "recurrenceIndex": 0.43
    }
  ],
  "notes": [
    "Recurrence index = occurrences in window / submissions in window (see server docs)."
  ]
}
```

### 7.6 Activity / XP event (append-only log — optional table)

```json
{
  "id": "01HZY444XP0001",
  "userId": "01HZYX9V8QK2N8YTXYZ1234ABC",
  "eventType": "SUBMISSION_ANALYZED",
  "payload": {
    "submissionId": "01HZY111SUB999",
    "mistakeCount": 5,
    "wordCount": 52
  },
  "xpDelta": 25,
  "createdAt": "2026-04-17T10:25:04.200Z"
}
```

---

## 8. Prisma schema (MVP reference)

> Copy into `schema.prisma` and adjust naming. Use `@map` for snake_case columns if you prefer SQL style.

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum PrimaryRole {
  STUDENT
  WORKING_PROFESSIONAL
  OTHER
}

enum EducationLevel {
  HIGH_SCHOOL
  UNDERGRAD
  GRADUATE
  OTHER
}

enum InstitutionContext {
  SCHOOL
  COLLEGE
  WORKPLACE
  SELF_STUDY
}

enum PrimaryGoal {
  EXAM
  JOB_COMMUNICATION
  ACADEMIC
  RELOCATION
  CASUAL
}

enum SubmissionGenre {
  GENERAL
  WORK_EMAIL
  SHORT_ESSAY
  DIARY
  ACADEMIC_PARAGRAPH
}

enum AnalysisStatus {
  PENDING
  COMPLETED
  FAILED
}

enum MistakeSeverity {
  LOW
  MEDIUM
  HIGH
}

enum PillarCode {
  VERB_SYSTEMS
  AGREEMENT_GRAMMAR
  DETERMINERS_QUANTITY
  PREPOSITIONS_PHRASAL
  LEXICAL_COLLOCATION
  CLARITY_AMBIGUITY
  COHESION_FLOW
  INFO_STRUCTURE
  REGISTER_TONE
  PUNCTUATION_MECHANICS
  SPELLING_ORTHOGRAPHY
  GENRE_PRAGMATICS
}

model User {
  id           String   @id @default(cuid())
  email        String   @unique
  passwordHash String
  displayName  String?
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  profile     UserProfile?
  submissions Submission[]
  stats       UserStats?
  xpEvents    XpEvent[]
}

model UserProfile {
  userId                  String             @id
  user                    User               @relation(fields: [userId], references: [id], onDelete: Cascade)

  primaryRole             PrimaryRole
  educationLevel          EducationLevel?
  institutionContext      InstitutionContext?
  occupationTitle         String?
  englishReadingSelfScore Int                // 1-5
  englishWritingSelfScore Int                // 1-5
  primaryGoal             PrimaryGoal?
  weeklyTimeMinutes       Int?
  interestTags            String[]           // FINANCE, SPORTS, etc.
  preferredGenres         SubmissionGenre[]
  localePreference        String             @default("en-US")

  onboardingCompletedAt   DateTime?
  createdAt               DateTime           @default(now())
  updatedAt               DateTime           @updatedAt
}

model WritingPrompt {
  id          String           @id @default(cuid())
  title       String
  genre       SubmissionGenre
  body        String
  topicTags   String[]
  targetLevel Int?             // optional CEFR-ish 1-6
  isActive    Boolean          @default(true)
  createdAt   DateTime         @default(now())

  submissions Submission[]
}

model Submission {
  id           String           @id @default(cuid())
  userId       String
  user         User             @relation(fields: [userId], references: [id], onDelete: Cascade)

  promptId     String?
  prompt       WritingPrompt?   @relation(fields: [promptId], references: [id])

  title        String?
  genre        SubmissionGenre
  body         String           @db.Text
  wordCount    Int

  createdAt    DateTime         @default(now())

  analysisRuns AnalysisRun[]
  mistakes     Mistake[]

  @@index([userId, createdAt])
}

model AnalysisRun {
  id              String          @id @default(cuid())
  submissionId    String
  submission      Submission      @relation(fields: [submissionId], references: [id], onDelete: Cascade)

  status          AnalysisStatus  @default(PENDING)

  analyzerModel   String?
  analyzerVersion String?
  rulesetVersion  String?

  summaryJson     Json?
  rawModelOutput  Json?           // optional; consider PII/size policies

  errorMessage    String?
  startedAt       DateTime        @default(now())
  completedAt     DateTime?

  mistakes        Mistake[]

  @@index([submissionId])
}

model Mistake {
  id               String           @id @default(cuid())
  submissionId     String
  submission       Submission       @relation(fields: [submissionId], references: [id], onDelete: Cascade)

  analysisRunId    String
  analysisRun      AnalysisRun      @relation(fields: [analysisRunId], references: [id], onDelete: Cascade)

  pillar           PillarCode
  subtype          String           // e.g. TENSE_CONSISTENCY
  severity         MistakeSeverity?

  startOffset      Int
  endOffset        Int
  surfaceText      String?

  message          String
  suggestion       String?

  canonicalRuleId  String?
  confidence       Float?

  createdAt        DateTime         @default(now())

  @@index([pillar, subtype])
  @@index([submissionId])
  @@index([analysisRunId])
}

model UserStats {
  userId           String   @id
  user             User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  totalXp          Int      @default(0)
  level            Int      @default(1)

  currentStreak    Int      @default(0)
  longestStreak    Int      @default(0)
  lastActiveDate   DateTime? // date-only semantics in application (UTC day)

  updatedAt        DateTime @updatedAt
}

model XpEvent {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  eventType String
  xpDelta   Int
  payload   Json?

  createdAt DateTime @default(now())

  @@index([userId, createdAt])
}
```

---

## 9. Analyzer contract (LLM output)

Force the model to return **JSON** matching a Zod schema. Each mistake must include:

- `pillar` (enum)
- `subtype` (string from allowed list / free with mapping layer)
- `startOffset`, `endOffset` (Unicode code unit indices in UTF-16 **or** byte — **pick one and document**; JavaScript uses UTF-16 code units—align with how you extract substrings in Node)
- `message`, `suggestion`

**Quality control:** Post-validate offsets against `body`; drop or clamp invalid spans.

---

## 10. XP and level formulas (transparent)

Define in code constants:

**Base XP**

- `+10` submission completed (analyzed successfully)
- `+1` per 50 words (capped at e.g. +20) to reward longer practice without spam
- `+Streak bonus` +5 per day after day 2, cap +15

**Level**

- `level = floor(sqrt(totalXp / 50)) + 1` (example tunable curve)

Persist every change in `XpEvent` for auditability.

---

## 11. Security, privacy, compliance (MVP baseline)

- **Transport:** TLS everywhere.
- **Secrets:** only on API server; rotate LLM keys.
- **Rate limiting:** per IP + per user on expensive routes (`POST /submissions`).
- **Input limits:** max `body` length (e.g. 5_000 chars) for MVP.
- **Logging:** avoid logging full user essays in production logs; log ids + lengths.
- **Deletion:** `DELETE /me` GDPR-style can be phase 1.5; at least document data retention.

---

## 12. Observability

- Structured logs (pino): `route`, `userId`, `latencyMs`, `analysisStatus`.
- Metrics: analysis success rate, LLM latency, tokens per submission (cost).
- Error tracking: Sentry on API + Web.

---

## 13. MVP delivery checklist (engineering)

- [ ] Monorepo with `web` + `api`, shared types package
- [ ] Prisma migrate to Postgres
- [ ] Register/login + profile CRUD
- [ ] Submission + synchronous analysis pipeline
- [ ] Mistakes stored; GET with filters
- [ ] Analytics summary endpoint
- [ ] Dashboard UI: onboarding, submit, results, analytics, XP
- [ ] Deploy: web + api + db; env vars documented

---

## 14. Environment variables (reference)

**API (`apps/api/.env`)**

```
DATABASE_URL=postgresql://...
JWT_ACCESS_SECRET=...
JWT_REFRESH_SECRET=...
OPENAI_API_KEY=...
CORS_ORIGIN=https://your-app.vercel.app
ACCESS_TOKEN_TTL_SEC=900
REFRESH_TOKEN_TTL_SEC=1209600
```

**Web (`apps/web/.env.local`)**

```
NEXT_PUBLIC_API_URL=https://api.your-domain.com
```

---

## 15. What to build next after MVP (product, not infra)

- Async job queue for analysis; webhook or polling for completion
- Rewrite pass and **fix-rate** analytics
- Mini-games emitting the same `Mistake` model
- Materialized weekly report table + email digest

---

*End of MVP system design document.*
