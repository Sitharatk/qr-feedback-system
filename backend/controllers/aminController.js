// controllers/adminController.js
import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    console.log(`Login attempt for username: ${username}`);
    const admin = await Admin.findOne({ username });
    
    if (!admin) {
      console.log("Admin not found in database");
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    console.log("Admin found, comparing passwords");
    const isMatch = await bcrypt.compare(password, admin.password);
    
    if (!isMatch) {
      console.log("Password comparison failed");
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    console.log("Password matched, generating token");
    // rest of the function
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

