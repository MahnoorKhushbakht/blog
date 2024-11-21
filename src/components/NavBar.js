"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { auth } from "./googleSignIn/config"; 
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function NavBar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
 
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
    });

   
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth); 
      setUser(null); 
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <header className="text-gray-600 body-font bg-red-300">
      <div className="container mx-auto flex justify-between items-center p-5">
        <a className="flex title-font font-medium items-center" href="/">
          <Image
            src="/images/eot-logo.png"
            alt="Echoes of Thought Logo"
            width={40}
            height={40}
            className="rounded-full bg-white"
          />
          <span className="ml-3 text-xl hidden md:block text-white">
            Echoes of Thought
          </span>
        </a>
        {user ? (
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
