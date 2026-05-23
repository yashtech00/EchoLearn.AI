
import express from "express";
import { Protect, authorizeRole } from "../middleware/authMiddleware.js";
import { auditLogs } from "../controller/admin.controller.js";

const admin_routes = express.Router();

admin_routes.get("/audit", Protect, authorizeRole("ADMIN"), auditLogs);

export default admin_routes;