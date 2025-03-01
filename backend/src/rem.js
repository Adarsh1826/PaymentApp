import mongoose from "mongoose";
import { User } from "./model/user.model.js"; // Adjust the path as needed
import dotenv from "dotenv";

dotenv.config();

const removeEmailIndex = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to MongoDB");

        // Check if the email index exists
        const indexes = await User.collection.indexes();
        const emailIndex = indexes.find(index => index.name === "email_1");

        if (emailIndex) {
            console.log("Dropping unique email index...");
            await User.collection.dropIndex("email_1");
            console.log("Index dropped successfully.");
        } else {
            console.log("No unique email index found.");
        }

        mongoose.connection.close();
    } catch (error) {
        console.error("Error removing index:", error);
        mongoose.connection.close();
    }
};

// Run the function
removeEmailIndex();
