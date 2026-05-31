
# EnglishIQ — Complete Product + Architecture Blueprint

## 1. Vision of EnglishIQ

EnglishIQ is not just an AI grammar checker.

It is:

> An adaptive English learning operating system that remembers the user's weaknesses, tracks improvement over time, and personalizes practice across games, writing, speaking, and challenges.

Core philosophy:

> Everything feeds one intelligence system.

---

## 2. Core Learning Loop

```txt
Practice
   ↓
Analyze
   ↓
Remember
   ↓
Improve
   ↓
Repeat
```

Everything in frontend + backend should support this loop.

---

## 3. Final Product Architecture

```txt
EnglishIQ
│
├── Dashboard
│
├── Writing
│   ├── Practice
│   ├── Memory
│   ├── Coach
│   ├── Reports
│   └── Rewrite
│
├── Games
│   ├── Spot The Slip
│   ├── Tone Shift
│   ├── Collocation Match
│   ├── Grammar Rush
│   └── Word Sprint
│
├── Playground
│   ├── Prompt of the Day
│   ├── Sandbox
│   └── Challenges
│
├── Progress
│   ├── XP & Levels
│   ├── Streaks
│   ├── Achievements
│   └── Weekly Reports
│
└── Profile
```

---

# Frontend Architecture

## Recommended Stack

- Next.js
- TypeScript
- Tailwind CSS
- Shadcn UI
- Tanstack Query
- Zustand
- React Hook Form
- Recharts

---

## Frontend Folder Structure

```txt
src/
│
├── app/
│
├── components/
│   ├── dashboard/
│   ├── writing/
│   ├── games/
│   ├── progress/
│   ├── charts/
│   └── ui/
│
├── features/
│   ├── auth/
│   ├── dashboard/
│   ├── writing/
│   ├── games/
│   ├── progress/
│   └── profile/
│
├── services/
│   ├── api/
│   └── queries/
│
├── store/
│
├── hooks/
│
├── types/
│
└── lib/
```

---

# Sidebar Structure

```txt
🏠 Dashboard

✍️ Writing
   • Practice
   • Memory
   • Coach
   • Reports
   • Rewrite

🎮 Games
   • Spot The Slip
   • Tone Shift
   • Collocation Match
   • Grammar Rush
   • Word Sprint

🧪 Playground
   • Prompt of the Day
   • Sandbox
   • Challenges

📈 Progress
   • XP & Levels
   • Streaks
   • Weekly Review
   • Achievements

👤 Profile
   • Preferences
   • Goals
   • Settings
```

---

# Dashboard Structure

The dashboard should answer:

> What should I do next?

## Sections

### Today Focus

```txt
🔥 7 Day Streak

Today's Focus:
Prepositions + Clarity

Recommended:
15 minute Writing Session

[ Start Practice ]
```

### Quick Progress

- XP
- Level
- Current Streak
- Weekly Goal

### Weak Areas

- Articles
- Verb tense consistency
- Comma splices

### Recent Activity

- Last submission
- Last game
- Last rewrite improvement

### Playground

- Prompt of the day
- Quick challenge
- Sandbox

---

# Backend Architecture

## Recommended Stack

- Node.js
- Express
- Prisma
- PostgreSQL
- Redis
- BullMQ
- Gemini/OpenAI

---

## Backend Folder Structure

```txt
src/
│
├── modules/
│   ├── auth/
│   ├── dashboard/
│   ├── writing/
│   ├── games/
│   ├── analytics/
│   ├── xp/
│   ├── reports/
│   └── profile/
│
├── services/
│   ├── ai/
│   ├── analytics/
│   ├── xp/
│   ├── streak/
│   └── recommendation/
│
├── queues/
│
├── workers/
│
├── lib/
│
├── utils/
│
└── prisma/
```

---

# Backend Philosophy

Do NOT build feature-centric architecture.

Build event-centric architecture.

Everything becomes:
- activity
- mistake
- XP event

---

# Core Database Design

## Enums

```prisma
enum GameType {
  WRITING
  SPOT_THE_SLIP
  TONE_SHIFT
  COLLOCATION_MATCH
  GRAMMAR_RUSH
  WORD_SPRINT
}

enum ActivityType {
  WRITING_SUBMISSION
  GAME_SESSION
  REWRITE_SESSION
  CHALLENGE
}
```

---

## Activity Model

```prisma
model Activity {
  id String @id @default(cuid())

  userId String
  user User @relation(fields: [userId], references: [id])

  activityType ActivityType
  gameType GameType

  xpEarned Int @default(0)

  durationSeconds Int?

  metadata Json?

  createdAt DateTime @default(now())
}
```

---

## Mistake Model

```prisma
model Mistake {
  id String @id @default(cuid())

  userId String

  submissionId String?

  activityId String?

  pillar PillarCode

  subtype String

  severity MistakeSeverity

  message String

  suggestion String?

  startOffset Int
  endOffset Int

  confidence Float?

  createdAt DateTime @default(now())
}
```

---

## XP Event Model

```prisma
model XpEvent {
  id String @id @default(cuid())

  userId String

  gameType GameType

  eventType String

  xpDelta Int

  metadata Json?

  createdAt DateTime @default(now())
}
```

---

# AI Architecture

AI should return:

```json
{
  "mistakes": [],
  "feedback": "",
  "score": 82
}
```

Backend should:
- normalize mistakes
- store relationally
- calculate analytics independently

---

# Analytics System

## Important Metrics

- Average score
- Error density
- Weakest pillar
- Most recurring subtype
- Fix rate
- Rewrite improvement
- Consistency score

---

# Rewrite Metrics

Track:
- Initial error density
- Second pass density
- Improvement %
- Fix rate

---

# XP System

## XP Formula

```txt
Base XP
+ Accuracy Bonus
+ Difficulty Bonus
+ Rewrite Bonus
+ Streak Bonus
```

## Anti-Gaming Rules

- Daily XP cap
- Reduced XP for repeated easy drills
- Difficulty scaling

---

# Streak System

Use ONE GLOBAL STREAK.

If user practices anything:
- streak continues

---

# Games Architecture

Games are not separate systems.

Games are:
> different practice inputs feeding mistakes, XP, and analytics.

---

# Playground System

## Modes

- Prompt of the Day
- Sandbox
- Challenge
- Micro Lessons

---

# Recommendation Engine

Recommendations should use:
- weakest pillar
- recurrence
- recent trend
- interests

Example:

> You struggle with prepositions in professional writing. Today's challenge: Write a 120-word project update email.

---

# Weekly Reports

Include:
- XP earned
- Streak maintained
- Most improved pillar
- Most recurring mistake
- Best submission
- Improvement graph

---

# API Structure

## Dashboard

```txt
GET /dashboard/home
```

## Writing

```txt
POST /writing/submit
GET  /writing/submissions
GET  /writing/submissions/:id

GET  /writing/analytics
GET  /writing/memory
GET  /writing/reports

POST /writing/rewrite
```

## Games

```txt
POST /games/spot-the-slip/submit
POST /games/tone-shift/submit
```

---

# Redis Usage

Use Redis for:
- Dashboard cache
- Leaderboard cache
- Recommendation cache
- Session cache

---

# BullMQ Jobs

Use BullMQ for:
- AI analysis
- Weekly reports
- Recommendation generation
- Email digests
- Challenge generation

---

# MVP Build Order

## Phase 1

- Auth
- Profile onboarding
- Writing submission
- AI analysis
- Mistake storage
- Dashboard
- XP + streak
- One game
- Rewrite loop

---

## Phase 2

- Weekly reports
- Playground
- Recommendations
- More games
- Micro lessons

---

## Phase 3

- Speaking
- Adaptive learning
- Certificates
- Social features
- Leaderboard
- Teacher mode

---

# Final Product Philosophy

EnglishIQ should feel like:

> A coach that remembers me, understands my weaknesses, and adapts my learning journey over time.

NOT:

> A chatbot that grades essays.
