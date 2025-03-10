import React, { useEffect, useState } from 'react';
import {balanceDetails } from "../atoms/atom.js"
import { useRecoilValue } from 'recoil';
const Balance = () => {
  const balance = useRecoilValue(balanceDetails)
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6">
      <div className="max-w-lg mx-auto ml-24 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Account Balance</h2>
        <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">{`Your balance is ₹${balance}`}</p>
      </div>
    </div>
  );
};

export default Balance;
