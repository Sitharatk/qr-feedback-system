import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from './models/adminModel.js'; // Import the Admin model

dotenv.config();  // Load environment variables from .env file

const seedAdmin = async () => {
  try {
    // Ensure MONGO_URI is available
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined in the .env file.');
    }

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');

    // Check if an admin already exists
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (existingAdmin) {
      console.log('Admin already exists!');
      return;
    }

    // Create a new admin user
    const hashedPassword = await bcrypt.hash('123456', 10);  // Hash password

    const admin = new Admin({
      username: 'admin',
      password: hashedPassword,
    });

    // Save the admin user
    await admin.save();
    console.log('Admin user created successfully!');
  } catch (err) {
    console.error('Error seeding admin:', err.message);
  } finally {
    mongoose.connection.close();  // Close connection after seeding
  }
};

seedAdmin();
