'use client'
import { useState, useEffect } from 'react';
import { auth } from '@/components/googleSignIn/config';  // Adjust path if needed
import { onAuthStateChanged } from 'firebase/auth';

export const Auth = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="mt-10">
      {user ? (
        <>{children}</> 
      ) : (
        <div className="bg-red-200  mb-10 rounded-md shadow-md w-full md:w-3/4">
        <h1 className="text-xl text-red-500 p-3 font-bold">
          <a href="/sign-in" className="text-red-300">Sign In</a> to Comment
        </h1>
        </div>
      )} 
    </div>
  );
};
