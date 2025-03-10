import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './Header';
import Balance from './Balance';
import Users from './Users';

const Dashboard = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    } else {
      setLoading(false)
    }
  }, [token, navigate]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'token') {
        setToken(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Loading...</div>; 
  }

  return (
    <RecoilRoot>
      <Header />
      <Balance />
      <Users />
    </RecoilRoot>
  );
};

export default Dashboard;
