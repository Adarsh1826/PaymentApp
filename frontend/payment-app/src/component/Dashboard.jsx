import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const [balance, setBalance] = useState(0);
  const navigate = useNavigate()
  const fetchBalance = async () => {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        navigate('/')
      }
  
      const res = await axios.get("http://localhost:3000/api/v1/account/getbalance", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
  
      setBalance(res.data.balance);
    } catch (error) {
      alert(res.data.message)
      console.error("Error fetching balance:", error);
    }
  };
  
  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div>
      {`Your balance is ${balance}`}
    </div>
  );
};

export default Dashboard;
