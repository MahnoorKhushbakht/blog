import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Suspense } from 'react';
import { ScrollShadow } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import ImgSuspense from "@/components/ImgSuspense";
import { getBlog } from "@/lib/blogs";
import ShareButton from "@/components/ShareButton";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";

export default async function Details({ params: { slug,type } }) {
 
  const data = await getBlog(slug,type);

  return (
    <div className="min-w-svw min-h-full bg-red-100 grid grid-cols-1 p-10">
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
          <div className="flex flex-row w-auto items-center">
          <h1 className="text-lg md:text-2xl mt-5 mb-5 uppercase text-red-500 font-bold">
            {item.title}
            </h1>
            <ShareButton/>
          </div>
          <ScrollShadow hideScrollBar className="w-auto md:h-auto sm:h-[200px] mb-3">
            <p className="text-red-400">{item.details}</p>
          </ScrollShadow>
          <div className="mt-10">
          <CommentList slug={slug}/>
      </div>
          <div className="mt-10">
        <CommentForm slug={slug} type={type} title={item.title}  />
      </div>
        </div>
        
      ))}
  
    </div>
  );
}

            // {/* <Button isIconOnly aria-label="Share" className="ml-2 bg-red-300">
            //   <svg
            //     xmlns="http://www.w3.org/2000/svg"
            //     fill="none"
            //     viewBox="0 0 24 24"
            //     strokeWidth="1.5"
            //     stroke="currentColor"
            //     className="text-red-500 size-6"
            //   >
            //     <path
            //       strokeLinecap="round"
            //       strokeLinejoin="round"
            //       d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            //     />
            //   </svg>
            // </Button> */}