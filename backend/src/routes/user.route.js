import { Router } from "express";
import User from "../model/user.model.js"
const router = Router()
router.post('/register',async(req,res)=>{
    const {username,password,firstname,lastname} = req.body
})
router.post('/login',async()=>{

})
export default router