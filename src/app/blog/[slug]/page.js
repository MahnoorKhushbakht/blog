import ProgressBar from "@/components/ProgressBar";
import Link from "next/link";

function parsePageParam(paramValue) {
    if (paramValue) {
        const page = parseInt(paramValue);
        if (isFinite(page) && page > 0) {
            return page;
        }
    }
    return 1;
}

// Static fallback data
const staticBlogs = {
    tech: [
        {
            id: 1,
            title: "AI Revolution",
            date: "2024-09-15",
            subtitle: "How AI is transforming everything",
            details: "From automation to deep learning, AI is at the core of the next big shift.",
            slug: "ai-revolution"
        },
        {
            id: 2,
            title: "Quantum Leap",
            date: "2024-08-20",
            subtitle: "Exploring quantum computing",
            details: "Quantum computing is no longer science fiction. Learn how it's shaping the future.",
            slug: "quantum-leap"
        }
    ],
    design: [
        {
            id: 1,
            title: "Minimalism Matters",
            date: "2024-09-10",
            subtitle: "Less is more in design",
            details: "Minimalism isn’t just a trend—it's a movement that leads to clarity and focus.",
            slug: "minimalism-matters"
        },
        {
            id: 2,
            title: "Color Theory 101",
            date: "2024-08-25",
            subtitle: "Mastering the color wheel",
            details: "Understanding colors can make or break your design—let's break it down.",
            slug: "color-theory-101"
        }
    ],
    marketing: [
        {
            id: 1,
            title: "SEO Hacks",
            date: "2024-09-05",
            subtitle: "Boost your site's visibility",
            details: "Learn the quick wins and deep strategies to climb search engine rankings.",
            slug: "seo-hacks"
        },
        {
            id: 2,
            title: "Social Media Psychology",
            date: "2024-08-18",
            subtitle: "The human side of marketing",
            details: "Understand how people think and behave on social platforms for better engagement.",
            slug: "social-psych"
        }
    ]
};

export default function Blog({ params: { slug }, searchParams }) {
    const page = parsePageParam(searchParams.page);
    const data = staticBlogs[slug] || [];

    const pageSize = 2;
    const totalCount = data.length;
    const pageCount = Math.ceil(totalCount / pageSize);

    const paginatedData = data.slice((page - 1) * pageSize, page * pageSize);

    return (
        <div className='bg-red-400 grid grid-cols-1 min-h-screen min-w-full md:p-0 p-10 place-content-center place-items-center'>
            <ProgressBar />
            {paginatedData.map((item) => (
                <section key={item.id} className="w-full sm:w-auto md:w-3/4 mx-0 h-auto text-gray-600 md:ml-20 ml-0 md:mr-10 mr-0 body-font overflow-hidden">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold title-font text-white uppercase">{item.title}</span>
                            <span className="text-sm text-red-200">{item.date}</span>
                        </div>
                        <div className="md:flex-grow">
                            <h2 className="text-2xl font-medium text-red-200 title-font mb-2">{item.subtitle}</h2>
                            <p className="leading-relaxed text-white line-clamp-2">{item.details}</p>
                            <Link href={`/details/${slug}/${item.slug}`} className="text-red-100 inline-flex items-center mt-4">
                                Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>
            ))}

            {pageCount > 1 && (
                <div className="flex justify-between items-center w-full mt-8">
                    <Link
                        href={`/blog/${slug}?page=${page - 1}`}
                        className={`flex items-center px-4 py-2 border rounded-md transition-colors duration-300 ${page > 1 ? 'bg-white text-red-600 hover:bg-red-100' : 'text-gray-300 cursor-not-allowed'}`}
                        aria-disabled={page <= 1}
                    >
                        <span>&lt;</span>
                        <span className="ml-1">Previous</span>
                    </Link>
                    <span className="text-white">Page {page} of {pageCount}</span>
                    <Link
                        href={`/blog/${slug}?page=${page + 1}`}
                        className={`flex items-center px-4 py-2 border rounded-md transition-colors duration-300 ${page < pageCount ? 'bg-white text-red-600 hover:bg-red-100' : 'text-gray-300 cursor-not-allowed'}`}
                        aria-disabled={page >= pageCount}
                    >
                        <span>Next</span>
                        <span className="ml-1">&gt;</span>
                    </Link>
                </div>
            )}
        </div>
    );
}
