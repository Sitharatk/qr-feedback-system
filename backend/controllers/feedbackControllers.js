import Feedback from "../models/feedbackModel.js";

export const submitFeedback = async (req, res) => {
    try {
      const { rating, comment } = req.body;
  
      if (!rating || !comment) {
        return res.status(400).json({ message: "Rating and comment are required" });
      }
  
      const feedback = new Feedback({ rating, comment });
      await feedback.save();
  
      res.status(201).json({ message: "Feedback submitted successfully", feedback });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  
  // Get All Feedbacks
  export const getFeedbacks = async (req, res) => {
    try {
      const feedbacks = await Feedback.find().sort({ createdAt: -1 });
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };