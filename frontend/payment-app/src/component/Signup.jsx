import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [f, setF] = useState("");
  const [l, setL] = useState("");
  const [error, setError] = useState(""); // To handle errors
  const navigate= useNavigate()
  const auth = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/user/register",{
        username:username,
        password:pass,
        firstname:f,
        lastname:l
      })
      navigate('/dash')
    } catch (error) {
      alert(res.data.message)
    }
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Sign In</h1>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>} {/* Error message */}

        <div className="mb-4">
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mb-4">
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mb-4">
          <input
            onChange={(e) => setF(e.target.value)}
            type="text"
            placeholder="Enter firstname"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mb-6">
          <input
            onChange={(e) => setL(e.target.value)}
            type="text"
            placeholder="Enter lastname"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300"
          onClick={auth}
        >
          Sign Up
        </button>

        <p className="p-4 text-center text-gray-600">
          Have an account?{" "}
          <Link to="/" className="text-pink-500 hover:underline">
            Sign-in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
