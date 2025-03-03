import { User } from "./user.model.js";
import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    balance: Number,
  },
  { timestamps: true }
);

const Account = mongoose.model("Balance", accountSchema);

const assignRandomBalances = async () => {
  try {
    const users = await User.find(); // Fetch all users

    const accountPromises = users.map(async (user) => {
      // Check if the user already has an account
      let account = await Account.findOne({ userId: user._id });
      if (!account) {
        // Only create a new account with a random balance if one doesn't exist
        const randomBalance = Math.floor(Math.random() * 10000) + 1;
        account = new Account({
          userId: user._id,
          balance: randomBalance,
        });
        return account.save();
      }
      // If an account already exists, do nothing.
      return Promise.resolve();
    });

    await Promise.all(accountPromises);
    console.log("Balances assigned successfully for new users!");
  } catch (error) {
    console.error("Error assigning balances:", error);
  }
};

assignRandomBalances();

export { Account };
