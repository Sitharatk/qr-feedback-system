import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import feedbackRoutes from './routes/feedbackRoutes.js'

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

app.use(cookieParser());
app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true,
    allowedHeaders: ["Content-Type", "Authorization"]
}))

app.use("/api/feedback", feedbackRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
