import mongoose from 'mongoose';
const feedbackSchema = new mongoose.Schema({
    rating: Number,
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now
      }
    });
 
    
  
const Feedback = mongoose.model("Feedback", feedbackSchema);
export default Feedback;