import express from "express";
import { createUserProfile, getUserProfile, updateUserProfile, getUserStats } from "../controller/user_profile_controller.js";
import { Protect } from "../middleware/authMiddleware.js";
const user_profile_router = express.Router();


user_profile_router.post("/user-profile", Protect, createUserProfile);

user_profile_router.get("/user-profile/:id", Protect, getUserProfile);
user_profile_router.put("/user-profile/:id", Protect, updateUserProfile);

user_profile_router.get("/stats", Protect, getUserStats);

export default user_profile_router;