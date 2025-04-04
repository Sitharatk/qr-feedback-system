import express from "express";
import { submitFeedback, getFeedbacks } from "../controllers/feedbackControllers.js";
import { verifyAdminToken } from "../middlewares/authMiddleware.js";
import { adminLogin } from "../controllers/aminController.js";
const router = express.Router();

router.post("/submit", submitFeedback); // Submit feedback
router.get("/all",  verifyAdminToken,getFeedbacks); // Get all feedback
router.post("/login", adminLogin);
export default router;