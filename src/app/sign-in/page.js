'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, provider } from '@/components/googleSignIn/config';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import Alert from '@mui/material/Alert';

export default function SignIn() {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({ message: '', severity: '' });
  const router = useRouter();

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setAlert({ message: 'Login Successful!', severity: 'success' });
        setTimeout(() => {
          router.push('/');
        }, 2000); 
      })
      .catch((error) => {
        console.error('Error signing in:', error);
        setAlert({ message: 'Login failed. Please check your credentials.', severity: 'error' });
      });
  };

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem('email', data.user.email);
        setAlert({ message: 'Google Sign-In Successful!', severity: 'success' });
        setTimeout(() => {
          router.push('/');
        }, 2000); 
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
        setAlert({ message: 'Google Sign-In failed. Please try again.', severity: 'error' });
      });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setValue(storedEmail);
      router.push('/');
    }
  }, [router]);

  return (
    <div className="flex justify-center items-center bg-red-200 h-screen p-4">
      <div className="w-full max-w-md bg-red-300 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>

        {alert.message && (
          <Alert variant="filled" severity={alert.severity} className="mb-4">
            {alert.message}
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

        <button
          onClick={handleSubmit}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full mb-4"
          type="button"
        >
          Sign In
        </button>

        <div className="mt-4 text-center">
          <button
            onClick={handleClick}
            className="bg-white hover:bg-gray-100 text-red-500 font-bold py-2 px-4 rounded w-full"
          >
            Sign In with Google
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-white">
            Dont have an account?{' '}
            <a
              href="/sign-up"
              className="text-red-500 font-bold hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
