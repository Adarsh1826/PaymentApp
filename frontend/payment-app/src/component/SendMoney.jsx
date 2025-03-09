import axios from "axios";
import React, { useState } from "react";

const SendMoney = ({ recipient, onClose }) => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMoney = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/v1/account/send", {
        to: recipient,
        am: amount,
      });

      alert(`Amount sent: ${amount}`); // This will now always run
    } catch (error) {
      console.error("Error sending money:", error);
      alert("Transaction failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMoney();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Send Money
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Recipient: <strong>{recipient}</strong>
        </p>

        <form onSubmit={handleSubmit} className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Amount
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white py-1 px-3 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMoney;
