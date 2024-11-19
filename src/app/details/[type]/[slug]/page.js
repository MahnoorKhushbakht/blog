import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Suspense } from 'react';
import {user} from '@/components/googleSignIn/config'
import { ScrollShadow } from "@nextui-org/react";
import ImgSuspense from "@/components/ImgSuspense";
import { getBlog } from "@/lib/blogs";
import ShareButton from "@/components/ShareButton";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import ProgressBar from "@/components/ProgressBar";

export default async function Details({ params: { slug,type } }) {
  

  const data = await getBlog(slug,type);

  return (
    <div className="min-w-svw min-h-full bg-red-100 grid grid-cols-1 p-10">
      <ProgressBar/>
      {data.map((item, index) => (
        <div key={index}>
          <Suspense fallback={<ImgSuspense />}>
            <Image
              isBlurred
              isZoomed
              as={NextImage}
              width={500}
              height={300}
              src={item.image}
              alt="NextUI hero Image"
              className="md:mt-0 mt-3"
            />
          </Suspense>
          <h1 className="text-lg md:text-3xl mt-5 uppercase text-red-500 font-bold">
            {item.title}
            </h1>
          <div className="flex gap-1  items-center">
          <h1 className="text-lg uppercase text-red-500">
            {item.date}
            </h1>
            <ShareButton/>
          </div>
          <h1 className="text-base text-red-600 italic font-bold">
            {item.subtitle}
            </h1>
            <ScrollShadow hideScrollBar className="w-full md:h-40 sm:h-auto h-80 overflow-y-auto mb-3">
            <p className="text-red-400">{item.details}</p>
        </ScrollShadow>
          <div className="mt-10"> {user ? (
              // Show Comment Form if the user is logged in
              <CommentForm slug={slug} type={type} title={item.title} />
            ) : (
              <div className="bg-red-200  mb-10 rounded-md shadow-md w-full md:w-3/4">
              <h1 className="text-xl text-red-500 p-3 font-bold">
                <a href="/sign-in" className="text-red-300">Sign In</a> to Comment
              </h1>
              </div>
            )}  <CommentForm slug={slug} type={type} title={item.title}  />
      </div>
      <div className="mt-10">
          <CommentList slug={slug}/>
      </div>
        </div>
        
      ))}
  
    </div>
  );
}
