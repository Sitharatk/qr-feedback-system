import express from "express";
import { submitFeedback, getFeedbacks } from "../controllers/feedbackControllers.js";

const router = express.Router();

router.post("/submit", submitFeedback); // Submit feedback
router.get("/all", getFeedbacks); // Get all feedback

export default router;