import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connection successful!");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
     
    }
};

export default connectDB;
