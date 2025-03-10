import { Router } from "express";
import { Account } from "../model/account.model.js";
import { isAuthenticated } from "../middleware/userAuth.js";
import mongoose from "mongoose";
const router = Router();

router.get("/getbalance", isAuthenticated,async (req, res) => {
  try {
    const accounts = await Account.findOne({userId:req.user.userId});

    if(!accounts){
      return res.status(411).json({
        "message":"account not found"
      })
    }


    res.json({ 
      balance:accounts.balance,
      "message":"Login first"
    });
  } catch (error) {
    console.error("Error fetching balances:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});
router.post('/send', isAuthenticated, async (req, res) => {

  try {
    const { to, am } = req.body;
    const amount = Number(am);

    if (!to || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: "Invalid recipient or amount" });
    }

    const senderAccount = await Account.findOne({ userId: req.user.userId });

    
    if (!senderAccount) {
      return res.status(404).json({ message: "Sender account not found" });
    }

    if (senderAccount.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    const recipientAccount = await Account.findOne({ userId: to });
    
    
    if (!recipientAccount) {
      return res.status(404).json({ message: "Recipient account not found" });
    }
    const senderUpdate = await Account.updateOne(
      { userId: req.user.userId },
      { $inc: { balance: -amount } }
    );

    const recipientUpdate = await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    );

    if (senderUpdate.modifiedCount === 0 || recipientUpdate.modifiedCount === 0) {
      return res.status(500).json({ message: "Failed to update balances" });
    }


    return res.status(200).json({ message: "Transfer successful" });

  } catch (error) {
    console.error("Error processing transaction:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});


export default router;
