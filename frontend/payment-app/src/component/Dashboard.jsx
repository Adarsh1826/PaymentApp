import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    try {
      const token = localStorage.getItem("token");
  
      if (!token) {
        alert("No token found, user not authenticated");
        console.error("No token found, user not authenticated");
        return;
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
