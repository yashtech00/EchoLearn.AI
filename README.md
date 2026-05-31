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

## License

This project is currently licensed as ISC in the backend package metadata. Update this section if you choose a different repository license.
