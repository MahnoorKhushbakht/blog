import { Image } from "@nextui-org/react";
import Background from '@/components/Background';
import NextImage from "next/image";
import { Suspense } from 'react';
import ImgSuspense from "@/components/ImgSuspense";
import { getBlogs, getCategory } from "@/lib/blogs";
import {Button} from "@nextui-org/react";
import Link from 'next/link';
   
export default async function Blog({ params: { slug } }) {
    const data = await getCategory(slug)
   const name =slug;
    return (
        <div className='bg-red-100 grid grid-cols-1 grid-rows-3 min-h-svh min-w-svw place-content-center place-items-center md:p-0 p-10'>
            <Background />
            
            {data.map((item, index) => (
                <div key={index} className="w-full sm:w-auto md:w-3/5 mx-0 sm:pl-5 sm:mr-5 h-auto border-2 border-red-400 rounded-md md:mt-10 mt-5 p-6 shadow-md grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center">
                    <Suspense fallback={<ImgSuspense />}>
                        <Image
                            as={NextImage}
                            width={300}
                            height={200}
                            src={item.image}
                            alt="NextUI hero Image"
                            className="md:mt-0 mt-3"
                        />
                    </Suspense>
                    <div className="w-auto h-auto justify-left">
                    <h1 className="text-red-500 text-lg mb-3">{item.subtitle}</h1>
                    <Button  className="bg-red-500 text-white">
                    <Link href={`/details/${name}/${item.slug}`} passHref>
        Read more
        </Link>
      </Button> 
      </div>
                </div>
            ))}
        </div>
    );
}
