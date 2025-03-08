import React, { useEffect, useState } from 'react';
import Header from './Header';
import Balance from './Balance';
import Users from './Users';
import { RecoilRoot } from 'recoil';
const Dashboard = () => {

  return (
   <RecoilRoot>
    <Header />
    <Balance />
    <Users />
   </RecoilRoot>
  )
};

export default Dashboard;