
import { Image } from "@nextui-org/react";
import Background from '@/components/Background';
import NextImage from "next/image";
import { Suspense } from 'react';
import ImgSuspense from "@/components/ImgSuspense";
import { getBlogs, getCategory } from "@/lib/blogs";
import { Button } from "@nextui-org/react";
import Link from 'next/link';

export default async function Blog({ params: { slug } }) {
    const data = await getCategory(slug);
    const name = slug;

    return (
        <div className='bg-red-400 grid grid-cols-1 grid-rows-3 min-h-svh min-w-svw md:p-0 p-10 place-content-center place-items-center'>
            {/* <Background /> */}

            {data.map((item, index) => (
                <section key={index} className="w-full sm:w-auto md:w-3/4 mx-0 h-auto text-gray-600 md:ml-20 ml-0 md:mr-10 mr-0 body-font overflow-hidden">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-white uppercase">{item.title}</span>
                            <span className="text-sm text-red-200">{item.date}</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-white title-font mb-2">{item.subtitle}</h2>
                            <p className="leading-relaxed text-white line-clamp-2">{item.details}</p>
                            <a className="text-white inline-flex items-center mt-4" href={`/details/${name}/${item.slug}`}>Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    {index < data.length - 1 && <hr className="border-red-200 my-4 mx-auto w-full sm:w-auto md:w-3/4" />}
                </section>
            ))}
        </div>
    );
}
