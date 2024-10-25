import Background from '@/components/Background'
import CardInfo from '@/components/CardInfo';
export default function Home() {
  return (
    <div className="bg-red-400 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <Background/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  
        <h1 className="md:text-6xl text-3xl justify-items-center text-red-100 antialiased font-bold md:ml-10 ml-5 mr-5 md:mr-10">Echoes of Thought</h1>
        <h1 className="md:text-2xl underline underline-offset-2 hover:decoration-4 justify-items-center text-red-100 antialiased md:ml-10 ml-5 mr-5 md:mr-10 text-xl">It is a space for curious minds and thoughtful souls. We explore a range of topics, from personal reflections and lifestyle tips to travel stories and insightful observations. Join us as we share ideas, inspire conversations, and celebrate the beauty of everyday life.</h1>
      <CardInfo/>
      </main>
    </div>
  );
}
