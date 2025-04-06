import { getCategories } from '@/lib/blogs';
import CardFlip from './CardFlip';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Suspense } from 'react';
import ImgSuspense from "@/components/ImgSuspense";
import Link from 'next/link';


export default function CardInfo() {
  // const cardData = await getCategories();

  const cardData = [
    {
      name: "Tech",
      slug: "tech",
      highlight: "Explore latest tech trends",
      image: "/images/tech.jpg"
    },
    {
      name: "Design",
      slug: "design",
      highlight: "Creative design insights",
      image: "/images/design.jpg"
    },
    {
      name: "Marketing",
      slug: "marketing",
      highlight: "Boost your marketing strategy",
      image: "/images/marketing.jpg"
    }
  ];
  
  return (
    <>
      <div className="w-auto md:h-80 h-auto md:grid hidden md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5 mt-20">
        {cardData.map((item, index) => (
          <CardFlip
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
      <div className="w-auto h-auto grid grid-cols-1 gap-5 mt-20 md:hidden">
        {cardData.map((item, index) => (
          <Card className="w-auto h-auto py-4" key={index}>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <div className="flex items-center space-x-2">
              <p className="text-tiny text-red-400 uppercase font-bold">{item.name}</p>
              <Link href={`/blog/${item.slug}`} passHref>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-red-400 size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</Link>
</div>
              <h4 className="font-bold text-red-400 text-large">{item.highlight}</h4>
            </CardHeader>
            <CardBody className="overflow-visible flex justify-center items-center py-2">
              <Suspense fallback={<ImgSuspense />}>
                <Image
                  isBlurred
                  alt={item.name}
                  className="object-cover rounded-xl md:p-0 p-5"
                  src={item.image}
                  width={270}
                  height={180}
                />
              </Suspense>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
