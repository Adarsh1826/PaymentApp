import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { usersDetails } from '../atoms/atom.js';
import SendMoney from './SendMoney';

const Users = () => {
  const users = useRecoilValue(usersDetails).usernames; 
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="bg-gray-50 dark:bg-gray-800 min-h-screen p-6">
      <div className="max-w-screen-xl mx-auto p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Users List</h2>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Users</th>
                <th scope="col" className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((username, index) => (
                  <tr key={index} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{username}</td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                        onClick={() => setSelectedUser(username)}
                      >
                        Send
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="px-6 py-4 text-center text-gray-600">No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && <SendMoney recipient={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
};

export default Users;
