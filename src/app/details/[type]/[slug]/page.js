import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { Suspense } from 'react';
import { ScrollShadow } from "@nextui-org/react";
import ImgSuspense from "@/components/ImgSuspense";
import ShareButton from "@/components/ShareButton";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";
import ProgressBar from "@/components/ProgressBar";
import { Auth } from "@/lib/useAuth";
// import { getBlog } from "@/lib/blogs"; // Removed for static fallback

const staticDetails = {
  tech: {
    "ai-revolution": {
      title: "AI Revolution",
      date: "2024-09-15",
      subtitle: "How AI is transforming everything",
      details: "From automation to deep learning, AI is at the core of the next big shift.",
      image: "/images/ai.jpg",
    },
    "quantum-leap": {
      title: "Quantum Leap",
      date: "2024-08-20",
      subtitle: "Exploring quantum computing",
      details: "Quantum computing is no longer science fiction. Learn how it's shaping the future.",
      image: "/images/quantum.jpg",
    }
  },
  design: {
    "minimalism-matters": {
      title: "Minimalism Matters",
      date: "2024-09-10",
      subtitle: "Less is more in design",
      details: "Minimalism isn’t just a trend—it's a movement that leads to clarity and focus.",
      image: "/images/minimalism.jpg",
    },
    "color-theory-101": {
      title: "Color Theory 101",
      date: "2024-08-25",
      subtitle: "Mastering the color wheel",
      details: "Understanding colors can make or break your design—let's break it down.",
      image: "/images/color.jpg",
    }
  },
  marketing: {
    "seo-hacks": {
      title: "SEO Hacks",
      date: "2024-09-05",
      subtitle: "Boost your site's visibility",
      details: "Learn the quick wins and deep strategies to climb search engine rankings.",
      image: "/images/seo.jpg",
    },
    "social-psych": {
      title: "Social Media Psychology",
      date: "2024-08-18",
      subtitle: "The human side of marketing",
      details: "Understand how people think and behave on social platforms for better engagement.",
      image: "/images/social.jpg",
    }
  }
};

export default async function Details({ params: { slug, type } }) {
  // Fallback to static blog data
  const fallbackData = staticDetails[type]?.[slug];

  if (!fallbackData) {
    return <div className="text-center text-red-500 mt-20">No blog post found for this slug.</div>;
  }

  const item = fallbackData;

  return (
    <div className="min-w-svw min-h-full bg-red-100 grid grid-cols-1 p-10">
      <ProgressBar />
      <div>
        <Suspense fallback={<ImgSuspense />}>
          <Image
            isBlurred
            isZoomed
            as={NextImage}
            width={500}
            height={300}
            src={item.image}
            alt={item.title}
            className="md:mt-0 mt-3"
          />
        </Suspense>
        <h1 className="text-lg md:text-3xl mt-5 uppercase text-red-500 font-bold">
          {item.title}
        </h1>
        <div className="flex gap-1 items-center">
          <h1 className="text-lg uppercase text-red-500">{item.date}</h1>
          <ShareButton />
        </div>
        <h1 className="text-base text-red-600 italic font-bold">{item.subtitle}</h1>
        <ScrollShadow hideScrollBar className="w-full md:h-40 sm:h-auto h-80 overflow-y-auto mb-3">
          <p className="text-red-400">{item.details}</p>
        </ScrollShadow>
        <Auth>
          <CommentForm slug={slug} type={type} title={item.title} />
        </Auth>
      </div>
      <div>
        <CommentList slug={slug} />
      </div>
    </div>
  );
}
