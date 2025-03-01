import { Router } from "express";
import {User} from "../model/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const router = Router()
router.post('/register',async(req,res)=>{
    const {username,password,firstname,lastname} = req.body
    const isValidUserName =  await User.findOne({username})
    if(isValidUserName){
        return res.status(411).json({
            "message":"Username is already taken"
        })
    }
    const hash = await bcrypt.hash(password,10);
    console.log(hash);
    
    const newUser = await User.create({
        username,
        password:hash,
        firstname,lastname
    })
    console.log(newUser);
    res.status(200).json({
        "message":"Registered Succeessfully"
    })
    
})
router.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    const isExist = await User.findOne({username})
    if(!isExist){
        return res.status(411).json({
            "message":"Register first"
        })
    }
    const isCorrect = await bcrypt.compare(password,isExist.password)
    if(!isCorrect){
        return res.status(411).json({
            "message":"Invalid credentials"
        })
    }
    const token = await jwt.sign({password},process.env.JWT_SEC)
    console.log("Token "+token);
    res.status(201).json({
        "message":"Logged in successfully"
    })
})
export default router