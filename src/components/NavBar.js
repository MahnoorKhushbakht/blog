'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [value, setValue] = useState('');
  
  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('email');
    setValue(''); 
  };

  return (
    <header className="text-gray-600 body-font bg-red-300">
      <div className="container mx-auto flex justify-between items-center p-5">
        <a className="flex title-font font-medium items-center" href="/">
          <Image
            src="/images/eot-logo.png"
            alt="Your Alt Text"
            width={40}
            height={40}
            className="rounded-full bg-white"
          />
          <span className="ml-3 text-xl hidden md:block text-white">
            Echoes of Thought
          </span>
        </a>
        {value ? (
          <button
            onClick={handleSignOut}
            className="text-red-500 bg-red-100 hover:bg-red-500 hover:text-red-100 py-2 px-4 rounded-md text-lg"
          >
            Sign Out
          </button>
        ) : (
          <a
            href="/sign-in"
            className="text-red-500 bg-red-100 hover:bg-red-500 hover:text-red-100 py-2 px-4 rounded-md text-lg"
          >
            Sign In
          </a>
        )}
      </div>
    </header>
  );
}
