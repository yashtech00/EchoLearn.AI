import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";
import mongoSanitize from "express-mongo-sanitize";
import { inHTMLData } from "xss-filters";
import hpp from "hpp";
import csrf from "csurf";
import toobusy from "toobusy-js";

import session from "express-session";
import cookieParser from "cookie-parser";

import { ConnectionDb } from "./config/db.js";
import { connectRedis, disconnectRedis } from "./config/redis.js";
import { closeQueue } from "./config/queue.js";

import auth_router from "./routes/auth_routes.js";
import user_profile_router from "./routes/user_profile_routes.js";
import mistake_memory_router from "./routes/mistake_memory_routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

/**
 * TRUST PROXY
 * Required when behind nginx, render, railway, vercel etc
 */
app.set("trust proxy", 1);

/**
 * HIDE EXPRESS
 */
app.disable("x-powered-by");

/**
 * SECURITY HEADERS
 */
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

/**
 * CORS
 */
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/**
 * BODY LIMIT
 * Prevent large payload attacks
 */
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

/**
 * COOKIE PARSER
 */
app.use(cookieParser());

/**
 * COMPRESSION
 */
app.use(compression());

/**
 * REQUEST LOGGER
 */
app.use(morgan("combined"));

/**
 * SANITIZE MONGO NOSQL INJECTION
 * express-mongo-sanitize assigns req.query/params directly, which breaks on Express 5
 * (those properties are read-only). Sanitize in-place for query/params; body can be reassigned.
 */
app.use((req, res, next) => {
  if (req.body && typeof req.body === "object") {
    req.body = mongoSanitize.sanitize(req.body);
  }
  if (req.params && typeof req.params === "object") {
    mongoSanitize.sanitize(req.params);
  }
  if (req.query && typeof req.query === "object") {
    mongoSanitize.sanitize(req.query);
  }
  next();
});

/**
 * XSS PROTECTION (Express 5 compatible — same logic as xss-clean, in-place for query/params)
 */
const cleanXss = (data = "") => {
  let isObject = false;
  let value = data;
  if (typeof value === "object" && value !== null) {
    value = JSON.stringify(value);
    isObject = true;
  }
  value = inHTMLData(value).trim();
  return isObject ? JSON.parse(value) : value;
};

const sanitizeStringsInPlace = (obj) => {
  if (!obj || typeof obj !== "object") return;
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (typeof val === "string") {
      obj[key] = inHTMLData(val).trim();
    } else if (val && typeof val === "object") {
      sanitizeStringsInPlace(val);
    }
  }
};

app.use((req, res, next) => {
  if (req.body) req.body = cleanXss(req.body);
  if (req.params) sanitizeStringsInPlace(req.params);
  if (req.query) sanitizeStringsInPlace(req.query);
  next();
});

/**
 * PREVENT HTTP PARAM POLLUTION
 */
app.use(hpp());

/**
 * SERVER OVERLOAD PROTECTION
 */
app.use((req, res, next) => {
  if (toobusy()) {
    return res.status(503).json({
      success: false,
      message: "Server too busy",
    });
  }

  next();
});

/**
 * GLOBAL RATE LIMITER
 */
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000, // 1000 requests per 15 mins per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests",
  },
});

app.use(limiter);

/**
 * SLOW DOWN BRUTE FORCE
 */
const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 100,
  delayMs: () => 500,
});

app.use(speedLimiter);

/**
 * SESSION SECURITY
 */
const sessionSecret =
  process.env.SESSION_SECRET ||
  (process.env.NODE_ENV !== "production" ? "dev-session-secret-change-me" : undefined);

if (!sessionSecret) {
  throw new Error("SESSION_SECRET is required in production");
}

app.use(
  session({
    secret: sessionSecret,
    name: "sid",
    resave: false,
    saveUninitialized: false,

    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

/**
 * CSRF PROTECTION
 * Only if using cookie/session auth
 */
app.use(csrf({ cookie: true }));

/**
 * CSRF TOKEN ROUTE
 */
app.get("/api/v1/csrf-token", (req, res) => {
  res.json({
    csrfToken: req.csrfToken(),
  });
});

/**
 * HEALTH CHECK
 */
app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

/**
 * REQUEST LOGGER
 */
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

/**
 * ROUTES
 */
app.use("/api/v1/auth", auth_router);
app.use("/api/v1/profile", user_profile_router);
app.use("/api/v1/writing", mistake_memory_router);

/**
 * 404 HANDLER
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/**
 * GLOBAL ERROR HANDLER
 */
app.use((err, req, res, next) => {
  console.error(err);

  // CSRF ERROR
  if (err.code === "EBADCSRFTOKEN") {
    return res.status(403).json({
      success: false,
      message: "Invalid CSRF token",
    });
  }

  res.status(err.status || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
});

/**
 * UNCAUGHT ERRORS
 */
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED REJECTION:", err);
});

/**
 * START SERVER
 */
ConnectionDb()
  .then(async () => {
    try {
      await connectRedis();
      console.log("✅ Redis connected");
    } catch (error) {
      console.error("❌ Redis connection failed:", error);
    }

    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

    /**
     * GRACEFUL SHUTDOWN
     */
    const shutdown = async () => {
      console.log("🛑 Graceful shutdown started");

      server.close(async () => {
        console.log("✅ HTTP server closed");

        await closeQueue();
        await disconnectRedis();

        console.log("✅ Resources closed");

        process.exit(0);
      });
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  });