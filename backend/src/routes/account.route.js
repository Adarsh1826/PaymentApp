import { Router } from "express";
import { Account } from "../model/account.model.js";
import { isAuthenticated } from "../middleware/userAuth.js";
import mongoose from "mongoose";
const router = Router();

router.get("/getbalance", isAuthenticated,async (req, res) => {
  try {
    const accounts = await Account.findOne({userId:req.adarsh.userId});

    if(!accounts){
      return res.status(411).json({
        "message":"account not found"
      })
    }

    //const balances = accounts.map(account => account.balance); // Extract balances

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

    const account = await Account.findOne({ userId: req.user.userId });
    if (!account || account.balance < am) {
      return res.status(411).json({ message: "Insufficient balance" });
    }

    const toAccount = await Account.findOne({ userId: to });
    if (!toAccount) {
      return res.status(411).json({ message: "Account doesn't exist" });
    }
    await Account.updateOne({ userId: req.user.userId }, { $inc: { balance: -am } });
    await Account.updateOne({ userId: to }, { $inc: { balance: am } });

    res.json({ message: "Transfer successful" });
  } catch (error) {
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
});


export default router;
