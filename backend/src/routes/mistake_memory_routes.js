import express from "express";
import { Protect } from "../middleware/authMiddleware.js";
import { 
  createSubmission, 
  getSubmissions, 
  getMistakes, 
  getAnalyticsSummary,
  getUserStats,
  getWritingPrompts,
  getTopics,
  getSubmissionStatus,
  rewriteSubmission,
  getCurrentTopic,
  createNewTopic
} from "../controller/mistake_memory_controller.js";

const mistakeMemoryRouter = express.Router();

mistakeMemoryRouter.post("/submissions", Protect, createSubmission);
mistakeMemoryRouter.get("/submissions/:id", Protect, getSubmissionStatus);
mistakeMemoryRouter.get("/submissions", Protect, getSubmissions);

// Mistakes & analytics
mistakeMemoryRouter.get("/me/mistakes", Protect, getMistakes);
mistakeMemoryRouter.get("/me/analytics/summary", Protect, getAnalyticsSummary);

// Stats / XP
mistakeMemoryRouter.get("/me/stats", Protect, getUserStats);

// Writing prompts
mistakeMemoryRouter.get("/prompts", Protect, getWritingPrompts);

mistakeMemoryRouter.get("/get-topics", Protect, getTopics);
mistakeMemoryRouter.get("/current-topic", Protect, getCurrentTopic);
mistakeMemoryRouter.post("/new-topic", Protect, createNewTopic);

mistakeMemoryRouter.patch("/submission/:id/rewrite",Protect,rewriteSubmission)

export default mistakeMemoryRouter;