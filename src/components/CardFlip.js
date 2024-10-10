'use client';
import ReactCardFlip from 'react-card-flip';
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Suspense } from 'react'
import ImgSuspense from "@/components/ImgSuspense";
import Link from 'next/link';

export default function CardFlip({ item, index }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);

    if (!isFlipped) {
      setTimeout(() => {
        setIsFlipped(false);
      }, 1000);
    }
  };

  return (
        <ReactCardFlip 
          flipSpeedFrontToBack={0.5} 
          flipSpeedBackToFront={0.5} 
          key={index} 
          isFlipped={isFlipped} 
          flipDirection="horizontal"
        >
   
          <Card 
            key={`${index}-front`}
            className="w-96 h-auto py-4"
            onMouseEnter={() => handleFlip(index)}
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny text-red-400 uppercase font-bold">{item.name}</p>
              <h4 className="font-bold text-red-400 text-large">{item.highlight}</h4>
            </CardHeader>
            <CardBody className="overflow-visible flex justify-center items-center py-2">
            <Suspense fallback={<ImgSuspense/>}>
              <Image
               isBlurred
                alt={item.Name}
                className="object-cover rounded-xl"
                src={item.image}
                width={270}
                height={180}
              />
              </Suspense>
            </CardBody>
          </Card>


          <Card 
            key={`${index}-back`} 
            className="w-96 h-80 py-4 bg-red-300"
          >
            <CardBody className="flex justify-center items-center py-2">
              <p className="text-3xl text-white uppercase font-bold">{item.name}</p>
              <Link href={`/blog/${item.slug}`} passHref>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</Link>
            </CardBody>
          </Card>
        </ReactCardFlip>
  );
}

