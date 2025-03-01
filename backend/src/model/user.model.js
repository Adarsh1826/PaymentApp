import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String

},{timestamps:true})
export default User = mongoose.model('User',userSchema)