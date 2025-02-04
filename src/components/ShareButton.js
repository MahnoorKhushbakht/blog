'use client'
import { useState } from "react";
import { Button } from "@nextui-org/react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.href; 

    navigator.clipboard.writeText(url) 
      .then(() => {
        setCopied(true); 
        setTimeout(() => setCopied(false), 2000); 
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div>
      <Button
        isIconOnly
        aria-label="Share"
        className="bg-transparent"
        onPress={handleShare} 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="text-red-500 size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
          />
        </svg>
      </Button>

      {copied && <span className="text-red-500 uppercase font-bold ml-2">Copied!</span>} 
    </div>
  );
}
