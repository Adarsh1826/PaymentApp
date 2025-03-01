import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const connectDB  = async()=>{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("DB connection done");
}
export default connectDB