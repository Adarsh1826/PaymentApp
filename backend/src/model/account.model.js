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
    const users = await User.find(); 

    const accountPromises = users.map(async (user) => {
      let account = await Account.findOne({ userId: user._id });
      if (!account) {
        const randomBalance = Math.floor(Math.random() * 10000) + 1;
        account = new Account({
          userId: user._id,
          balance: randomBalance,
        });
        return account.save();
      }
      return Promise.resolve();
    });

    await Promise.all(accountPromises);
    //console.log("Balances assigned successfully for new users!");
  } catch (error) {
    console.error("Error assigning balances:", error);
  }
};

setInterval(assignRandomBalances,5000)
export { Account };
