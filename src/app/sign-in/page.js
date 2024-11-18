'use client'
import React, { useEffect, useState } from "react";
import {auth,provider} from "@/components/googleSignIn/config";
import {signInWithPopup} from "firebase/auth";
import Background from '@/components/Background'

export default function SignIn() {
  const [value,setValue] = useState('')
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
      });
  };
  useEffect(()=>{
    setValue(localStorage.getItem('email'))
},[])
  return (
    <div className="flex justify-center items-center bg-red-200 h-screen">
        
      <div className="w-96 bg-red-300 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white mb-6">Sign In</h2>

        <div className="mb-4">
          <label className="text-red-400 font-bold uppercase" htmlFor="email">
            Email
          </label>
          <input
            className="border border-red-400 text-white bg-red-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white placeholder-white transition duration-300 ease-in-out transform hover:scale-105 w-full"
            required
            maxLength={50}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label className="text-red-400 font-bold uppercase" htmlFor="password">
            Password
          </label>
          <input
            className="border border-red-400 text-white bg-red-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white placeholder-white transition duration-300 ease-in-out transform hover:scale-105 w-full"
            required
            maxLength={50}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full"
          type="submit"
        >
          Sign In
        </button>

        <div className="mt-4 text-center">
          <button onClick={handleClick}
            className="bg-white hover:bg-gray-100 text-red-500 font-bold py-2 px-4 rounded w-full"
          >
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
}