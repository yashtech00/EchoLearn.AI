import express from "express";
import {
  createUserProfile,
  getUserProfile,
  getProfileMe,
  updateUserProfile,
  getUserStats,
} from "../controller/user_profile_controller.js";
import { Protect } from "../middleware/authMiddleware.js";

const user_profile_router = express.Router();

// Combined dashboard payload (user + profile + stats + progress)
user_profile_router.get("/me", Protect, getProfileMe);

// Stats & progress (XP, streak, activity)
user_profile_router.get("/stats", Protect, getUserStats);

// Onboarding create
user_profile_router.post("/user-profile", Protect, createUserProfile);

// Legacy + current profile fetch/update
user_profile_router.get("/user-profile/:id", Protect, getUserProfile);
user_profile_router.get("/user-profile", Protect, getUserProfile);
user_profile_router.put("/user-profile/:id", Protect, updateUserProfile);
user_profile_router.put("/me", Protect, updateUserProfile);
user_profile_router.patch("/me", Protect, updateUserProfile);

export default user_profile_router;
