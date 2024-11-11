import Image from 'next/image';
import Background from '@/components/Background'

export default function Quote() {
    const quotes = [
        {
            src: "/images/Stephen King.jpg",
            quote: "The scariest moment is always just before you start. Once you get started, the hardest part is over.",
            author: "Stephen King",
            profession: "American Author"
        },
        {
            src: "/images/Neil Gaiman.jpg",
            quote: "Writing is an act of faith, of hope, and of love. It is an act of believing that words have power, that stories matter, that the truth can be told, and that the truth can be heard.",
            author: "Neil Gaiman",
            profession: "English Writer"
        },
        {
            src: "/images/Thomas Mann.jpg",
            quote: "A writer is someone for whom writing is more difficult than it is for other people.",
            author: "Thomas Mann",
            profession: "German Novelist"
        }
    ];

    return (
        <div className='min-w-full min-h-svh flex items-center'>
        <Background/>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {quotes.map((item, index) => (
                        <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <Image
                                    alt={`Image of ${item.author}`}
                                    src={item.src}
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                />
                                <p className="leading-relaxed text-red-100">{item.quote}</p>
                                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                                <h2 className="text-red-600 font-medium title-font tracking-wider text-sm">{item.author}</h2>
                                <p className="text-red-200">{item.profession}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
}
