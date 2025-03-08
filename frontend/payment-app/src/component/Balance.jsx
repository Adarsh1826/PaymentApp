import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate();

  const fetchBalance = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate('/');
        return;
      }

      const res = await axios.get("http://localhost:3000/api/v1/account/getbalance", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });

      setBalance(res.data.balance);
    } catch (error) {
      alert(error.response?.data?.message || "Error fetching balance");
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, [navigate]);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6">
      <div className="max-w-lg mx-auto ml-24 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Account Balance</h2>
        <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">{`Your balance is $${balance}`}</p>
      </div>
    </div>
  );
};

export default Balance;
