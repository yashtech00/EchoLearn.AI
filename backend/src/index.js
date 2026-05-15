import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectionDb } from "./config/db.js";
import auth_router from "./routes/auth_routes.js";
import session from "express-session";
import user_profile_router from "./routes/user_profile_routes.js";
import mistake_memory_router from "./routes/mistake_memory_routes.js";
import cookieParser from "cookie-parser";
import { connectRedis, disconnectRedis } from "./config/redis.js";
import { closeQueue } from "./config/queue.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
app.use(
    session({
      secret: "your-secret-key",
      resave: false,
      saveUninitialized: true,
    })
  );

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options(/.*/, cors());
// Routes

app.use("/api/v1/auth", auth_router);
app.use("/api/v1/profile", user_profile_router);
app.use("/api/v1/writing", mistake_memory_router);
// Health check
app.get("/health", (_, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// Connect to Database and Redis then start server
ConnectionDb().then(() => {
    // Connect to Redis
    connectRedis()
        .then(() => {
            console.log("✅ Redis connected");
        })
        .catch((error) => {
            console.error("❌ Failed to connect to Redis:", error);
            console.warn("⚠️  Continuing without Redis - queue operations will fail");
        });

    const server = app.listen(process.env.PORT || 8000, () => {
        console.log(`🚀 Server running on port ${process.env.PORT || 8000}`);
    });

    // Graceful shutdown
    const shutdown = async () => {
        console.log("\n🛑 Shutting down gracefully...");
        
        // Close HTTP server
        server.close(() => {
            console.log("✅ HTTP server closed");
        });
        
        // Close queue
        await closeQueue();
        
        // Disconnect from Redis
        await disconnectRedis();
        
        console.log("✅ Shutdown complete");
        process.exit(0);
    };

    process.on("SIGTERM", shutdown);
    process.on("SIGINT", shutdown);
}).catch((err) => {
    console.error("❌ Failed to connect to Database:", err.message);
    process.exit(1);
});