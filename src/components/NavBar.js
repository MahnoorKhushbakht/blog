'use client';
import Image from "next/image";

export default function App() {
  return (
    <header className="text-gray-600 body-font bg-red-300">
      <div className="container mx-auto flex justify-center items-center p-5">
        <a className="flex title-font font-medium items-center" href="/">
          <Image
            src="/images/eot-logo.png"  
            alt="Your Alt Text"
            width={40}  
            height={40} 
            className="rounded-full bg-white"
          />
          <span className="ml-3 text-xl text-white">Echoes of Thought</span>
        </a>
      </div>
    </header>
  );
}
