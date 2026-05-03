import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectionDb } from "./config/db.js";
import auth_router from "./routes/auth_routes.js";
import session from "express-session";
import user_profile_router from "./routes/user_profile_routes.js";
import { Protect } from "./middleware/authMiddleware.js";
dotenv.config();

const app = express();

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options(/.*/, cors());
// Routes

app.use("/api/v1/auth", auth_router);
app.use("/api/v1/user-profile", user_profile_router);
// Health check
app.get("/health", (_, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});
// Connect to Database then start server + worker
ConnectionDb().then(() => {
    

    app.listen(process.env.PORT || 8000, () => {
        console.log(`🚀 Server running on port ${process.env.PORT || 8000}`);
    });
}).catch((err) => {
    console.error("❌ Failed to connect to Database:", err.message);
    process.exit(1);
});