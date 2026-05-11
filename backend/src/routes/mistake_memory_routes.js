import express from "express";
import { Protect } from "../middleware/authMiddleware.js";
import { 
  createSubmission, 
  getSubmissions, 
  getMistakes, 
  getAnalyticsSummary,
  getUserStats,
  getWritingPrompts,
  getTopics
} from "../controller/mistake_memory_controller.js";

const mistakeMemoryRouter = express.Router();


mistakeMemoryRouter.get("/get-topics", Protect, getTopics);

// Submissions & analysis
mistakeMemoryRouter.post("/submissions", Protect, createSubmission);
mistakeMemoryRouter.get("/submissions", Protect, getSubmissions);

// Mistakes & analytics
mistakeMemoryRouter.get("/me/mistakes", Protect, getMistakes);
mistakeMemoryRouter.get("/me/analytics/summary", Protect, getAnalyticsSummary);

// Stats / XP
mistakeMemoryRouter.get("/me/stats", Protect, getUserStats);

// Writing prompts
mistakeMemoryRouter.get("/prompts", Protect, getWritingPrompts);

export default mistakeMemoryRouter;