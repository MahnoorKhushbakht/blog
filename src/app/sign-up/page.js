'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/components/googleSignIn/config';
import Alert from '@mui/material/Alert';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';

export default function SignIn() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      setAlertMessage('Passwords do not match!');
      setAlertSeverity('error');
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        sendEmailVerification(user)
          .then(() => {
            setAlertMessage('Sign-Up Successful! Please check your email to verify your account.');
            setAlertSeverity('success');
            router.push('/sign-in');
          })
          .catch((error) => {
            setAlertMessage('Error sending email verification:', error);
            setAlertSeverity('error');
          });
      })
      .catch((error) => {
        setAlertMessage('Error signing up:', error.message);
        setAlertSeverity('error');
      });
  };

  return (
    <div className="flex justify-center items-center bg-red-200 min-h-screen px-4">
      <div className="w-full max-w-md bg-red-300 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>
        {alertMessage && (
          <Alert variant="filled" severity={alertSeverity} className="mb-4">
            {alertMessage}
          </Alert>
        )}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-red-400 font-bold uppercase" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="border border-red-400 text-white bg-red-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white placeholder-white transition duration-300 ease-in-out transform hover:scale-105 w-full"
            required
            maxLength={50}
            type="Password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-type Password"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full"
          type="button"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
