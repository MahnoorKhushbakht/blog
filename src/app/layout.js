import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { NextUIProvider } from '@nextui-org/react';
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Echoes of Thought",
  description: '"Echoes of Thought" is a platform where reflections, ideas, and stories come together to inspire and provoke curiosity.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextUIProvider>
          <header>
            <NavBar /> 
          </header>
          <main>{children}</main> 
          <footer>
            <Footer/>
          </footer>
        </NextUIProvider>

        {/* Chatbot Script */}
        <Script
          id="chatbot-config"
          strategy="beforeInteractive" 
          dangerouslySetInnerHTML={{
            __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "ag4drrJ3i6JOgI03LnD2g",
                domain: "www.chatbase.co",
              };
            `,
          }}
        />
        <Script
          src="https://www.chatbase.co/embed.min.js"
          strategy="lazyOnload" 
          chatbotId="ag4drrJ3i6JOgI03LnD2g"
          domain="www.chatbase.co"
          defer
        />
      </body>
    </html>
  );
}
