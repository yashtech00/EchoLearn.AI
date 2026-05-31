# EnglishIQ

EnglishIQ is an AI-powered English learning platform that helps learners practice writing, get structured feedback, remember recurring mistakes, and track improvement over time.

The product is built around a simple learning loop:

```txt
Practice -> Analyze -> Remember -> Improve -> Repeat
```

## Features

- AI writing practice with personalized prompts
- Async writing analysis powered by Google Gemini
- Mistake memory that stores recurring grammar, clarity, tone, spelling, and structure issues
- Detailed writing reports with score, feedback, suggestions, and mistake breakdowns
- Rewrite flow for improving an existing submission
- User onboarding profile for personalized learning
- XP, levels, streaks, recent activity, and progress tracking
- Cookie-based authentication with refresh tokens
- Google OAuth login
- Admin audit-log endpoint
- CSRF protection, rate limiting, request sanitization, and security headers

## Tech Stack

**Frontend**

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- TanStack Query
- Axios
- Framer Motion
- Lucide React
- Radix UI / shadcn-style UI components

**Backend**

- Node.js
- Express 5
- Prisma
- PostgreSQL
- Redis
- BullMQ
- Google Gemini API
- JWT auth with HTTP-only cookies
- CSRF, Helmet, CORS, rate limiting, and request sanitization

## Project Structure

```txt
englishIQ/
├── backend/
│   ├── src/
│   │   ├── config/          # Database, Redis, and queue setup
│   │   ├── constants/       # Shared API messages/status helpers
│   │   ├── controller/      # Route controllers
│   │   ├── lib/             # Prisma client
│   │   ├── middleware/      # Auth and audit middleware
│   │   ├── routes/          # Express routes
│   │   ├── schema/          # Prisma schema, migrations, generated client
│   │   ├── services/        # Gemini and Google OAuth services
│   │   ├── validator/       # Zod validators
│   │   ├── worker/          # BullMQ writing analysis worker
│   │   └── index.js         # Express app entrypoint
│   └── package.json
├── frontend/
│   ├── app/                 # Next.js App Router pages and API clients
│   ├── components/          # UI and feature components
│   ├── lib/                 # Auth and utility helpers
│   ├── public/              # Static assets and PWA files
│   ├── types.ts             # Shared frontend types
│   └── package.json
├── ASYNC_JOB_ARCHITECTURE.md
├── EnglishIQ_Blueprint.md
├── SUBMISSION_RATE_LIMIT.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm
- PostgreSQL
- Redis
- Google Gemini API key
- Google OAuth credentials, if using Google sign-in

### 1. Clone the repository

```bash
git clone https://github.com/your-username/englishIQ.git
cd englishIQ
```

### 2. Install dependencies

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 3. Configure environment variables

Create `backend/.env`:

```env
NODE_ENV=development
PORT=8000

DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/englishiq"
REDIS_URL="redis://localhost:6379"

ACCESS_TOKEN_SECRET="replace-with-a-long-random-secret"
SESSION_SECRET="replace-with-a-long-random-secret"

GEMINI_API_KEY="your-google-gemini-api-key"

FRONTEND_URL="http://localhost:3000"
CORS_ORIGINS="http://localhost:3000"

GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
BACKEND_URL="http://localhost:8000"
GOOGLE_REDIRECT_URL="/api/v1/auth/google/callback"

ENABLE_WORKER=true
```

Create `backend/src/schema/.env` for Prisma CLI commands:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/englishiq"
```

Create `frontend/.env`:

```env
NEXT_PUBLIC_API_URL="http://localhost:8000/api/v1/"
```

### 4. Set up the database

From `backend/`:

```bash
npm run prisma:generate
npm run prisma:migrate
```

If you want to push the schema without creating a new migration:

```bash
npm run prisma:push
```

### 5. Run the app locally

Start the backend with the embedded worker:

```bash
cd backend
npm run dev:with-worker
```

Start the frontend in a second terminal:

```bash
cd frontend
npm run dev
```

Open:

```txt
http://localhost:3000
```

The backend runs on:

```txt
http://localhost:8000
```

Health check:

```txt
http://localhost:8000/health
```

## Available Scripts

### Backend

Run from `backend/`:

```bash
npm run dev                 # Start Express with nodemon
npm run dev:with-worker     # Start Express and embedded BullMQ worker
npm run start               # Start Express in normal Node mode
npm run start:with-worker   # Start Express and embedded worker in normal Node mode
npm run worker              # Run the BullMQ worker separately
npm run worker:dev          # Run the worker with nodemon
npm run prisma:generate     # Generate Prisma client
npm run prisma:migrate      # Run Prisma migrations
npm run prisma:push         # Push schema to database
npm run prisma:studio       # Open Prisma Studio
npm run prisma:reset        # Reset database migrations
```

### Frontend

Run from `frontend/`:

```bash
npm run dev       # Start Next.js dev server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## API Overview

Base URL:

```txt
/api/v1
```

### Auth

```txt
POST /auth/register
POST /auth/login
POST /auth/logout
POST /auth/refresh
GET  /auth/google
GET  /auth/google/callback
GET  /auth/me
```

### Profile

```txt
GET   /profile/me
GET   /profile/stats
POST  /profile/user-profile
GET   /profile/user-profile
PATCH /profile/me
PUT   /profile/me
```

### Writing Coach

```txt
POST  /writing/submissions
GET   /writing/submissions
GET   /writing/submissions/:id
GET   /writing/me/mistakes
GET   /writing/me/analytics/summary
GET   /writing/me/stats
GET   /writing/prompts
GET   /writing/get-topics
GET   /writing/current-topic
POST  /writing/new-topic
PATCH /writing/submission/:id/rewrite
```

### Admin

```txt
GET /admin/audit
```

## Response Format

Most backend controllers return a consistent JSON shape.

Success:

```json
{
  "success": true,
  "response": {
    "title": "Writing Submitted",
    "message": "Your writing has been submitted and is being analyzed."
  },
  "title": "Writing Submitted",
  "message": "Your writing has been submitted and is being analyzed.",
  "submissionId": "submission-id",
  "status": "PENDING"
}
```

Error:

```json
{
  "success": false,
  "error": {
    "title": "Profile Required",
    "message": "Please complete your learning profile before starting writing practice."
  },
  "title": "Profile Required",
  "message": "Please complete your learning profile before starting writing practice.",
  "requiresProfile": true
}
```

## Async Writing Analysis

Writing submissions are processed asynchronously:

1. The frontend submits writing to `POST /writing/submissions`.
2. The backend creates a `PENDING` submission.
3. A BullMQ job is added to Redis.
4. The worker sends the writing to Gemini for analysis.
5. The worker stores feedback, score, and mistakes in PostgreSQL.
6. The frontend polls `GET /writing/submissions/:id` until the status is `COMPLETED` or `FAILED`.

You can run the worker embedded with the API server:

```bash
npm run dev:with-worker
```

Or as a separate process:

```bash
npm run dev
npm run worker:dev
```

## Security Notes

- Auth tokens are stored in HTTP-only cookies.
- Mutating frontend requests fetch and send a CSRF token automatically.
- Backend includes Helmet, CORS allow-listing, rate limiting, slow-down protection, request sanitization, and HTTP parameter pollution protection.
- `SESSION_SECRET` is required in production.
- `FRONTEND_URL` and `CORS_ORIGINS` should be set to your production frontend domain.

## Deployment Notes

Frontend can be deployed to Vercel or any Next.js-compatible host.

Backend can be deployed to services such as Railway, Render, Fly.io, or a VPS. Make sure the backend has access to:

- PostgreSQL
- Redis
- Gemini API key
- Google OAuth credentials
- Production `FRONTEND_URL`
- Secure `ACCESS_TOKEN_SECRET` and `SESSION_SECRET`

For production Google OAuth, configure the callback URL in Google Cloud Console:

```txt
https://your-backend-domain.com/api/v1/auth/google/callback
```

## Documentation

Additional project docs:

- [Product blueprint](./EnglishIQ_Blueprint.md)
- [Async job architecture](./ASYNC_JOB_ARCHITECTURE.md)
- [Submission rate limit notes](./SUBMISSION_RATE_LIMIT.md)

## License

This project is currently licensed as ISC in the backend package metadata. Update this section if you choose a different repository license.
