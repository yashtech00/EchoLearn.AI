import express from "express"
import { register, login, logout, refresh, profile, googleAuth, googleAuthCallback } from "../controller/auth_controller.js";
import { Protect } from "../middleware/authMiddleware.js";


const auth_router = express.Router();

auth_router.post("/register", register);
auth_router.post("/login", login);
auth_router.post("/logout", logout);
auth_router.post("/refresh", refresh);

auth_router.get("/google", googleAuth);
auth_router.get("/google/callback", googleAuthCallback);

auth_router.get("/profile/:id", Protect, profile);


export default auth_router;




