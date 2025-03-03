import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [balance, setBalance] = useState(0);

  const fetchBalance = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/account/getbalance", {
        withCredentials: true, // send cookies/credentials
      });
      setBalance(res.data.balance); // set just the balance value
    } catch (error) {
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
