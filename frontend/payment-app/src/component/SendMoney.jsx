import axios from "axios";
import React, { useState } from "react";

const SendMoney = ({ recipient, onClose }) => {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMoney = async () => {
    setMessage("");
    
    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage("Enter a valid amount.");
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem("token"); 
      const response = await axios.post(
        "http://localhost:3000/api/v1/account/send",
        { to: recipient, am: amount },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(response.data.message || "Money sent successfully!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Transaction failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
          Send Money
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
          Sending to <span className="font-bold">{recipient}</span>
        </p>

        <input
          type="number"
          placeholder="Enter amount"
          className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {message && <p className="mt-3 text-center text-sm text-green-500">{message}</p>}

        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSendMoney}
            className={`px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Processing..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
