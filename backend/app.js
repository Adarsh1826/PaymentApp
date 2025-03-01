import express from "express"
import dotenv from "dotenv"
import userRoute from "./src/routes/user.route.js"
import connectDB from "./src/db/index.js"
import cors from "cors"
import bodyParser from "body-parser"
dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/api/v1/user',userRoute)
app.listen(3000,()=>{
    console.log("http://localhost:3000");
    
})
export default app