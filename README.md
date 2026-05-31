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

## License

This project is currently licensed as ISC in the backend package metadata. Update this section if you choose a different repository license.
