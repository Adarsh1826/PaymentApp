import mongoose, { Schema } from "mongoose";
const accountSchema = new Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    },
    balance:Number,
},{timestamps:true})
const Account = mongoose.model('Balance',balanceSchema)
export{
    Account
}