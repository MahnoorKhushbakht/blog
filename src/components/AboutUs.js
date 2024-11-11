import { Image } from "@nextui-org/react";
import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="min-h-svh body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-100">
                        Meet Our Team
                        <br className="hidden lg:inline-block " />
                    </h1>
                    <p className="mb-8 leading-relaxed text-red-100">
                        Our team is a passionate group of professionals committed to excellence and innovation. 
                        With a diverse set of skills and experiences, we collaborate to bring ideas to life, always 
                        putting our best foot forward to meet and exceed expectations.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/about" passHref>
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                               About Us
                            </button>
                        </Link>
                        <Link href="/contact" passHref>
                            <button className="ml-4 inline-flex text-red-500 bg-red-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full sm:w-[75%] md:w-[60%]">
                    <Image
                        isBlurred
                        alt="Our Team"
                        src="/images/Team.jpg"
                        width={500}
                        height={400}
                        className="rounded-md shadow-md object-cover object-center"
                    />
                </div>
            </div>
        </section>
    );
}
