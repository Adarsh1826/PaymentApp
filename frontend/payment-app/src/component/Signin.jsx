import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Signin = () => {

    const[username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()
    
    const auth = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/v1/user/login", {
                username: username,
                password: password
            });
            localStorage.setItem("token",res.data.token)
            
            navigate('/dash')
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message); 
            } else {
                alert(error);
            }
        }
    };
    
  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Sign In</h1>
        
        <div className="mb-4">
          <input
            onChange={(e)=>{
                setUsername(e.target.value)
            }}
            type="text"
            placeholder="Enter username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div className="mb-6">
          <input
             onChange={(e)=>{
                setPassword(e.target.value)
            }}
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition duration-300"
        onClick={auth}
        >
          Sign In
        </button>
        <p className='p-4'>Don't have an account?  <Link to="/sign-up" className="text-pink-500 hover:underline">
                    Sign-up
                  </Link></p>
      </div>
    </div>
  );
};

export default Signin;
