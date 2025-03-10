import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const auth = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/user/login", {
        username: username,
        password: password
      });
      localStorage.setItem("token", res.data.token);
      navigate('/dash'); 
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-6">Sign In</h1>

        <div className="mb-4">
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter username"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300"
          onClick={auth}
        >
          Sign In
        </button>

        <p className="p-4 text-center text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
