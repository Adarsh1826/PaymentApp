import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String

},{timestamps:true})
const User = mongoose.model('User',userSchema)
export{
    User
}