import express from "express"
import dotenv from "dotenv"
import cookieparse from "cookie-parser"
import cors from "cors"
import userRoute from "./src/routes/user.route.js"
import connectDB from "./src/db/index.js"

import bodyParser from "body-parser"
dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173", // Your frontend URL
    credentials: true
}));
app.use(bodyParser.json())
app.use(cookieparse())
app.use(cors())
app.use('/api/v1/user',userRoute)
app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})
export default app