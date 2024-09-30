'use client';
import "@/styles/reset.css";
import "@/styles/globals.css";
import '@/styles/header.css';
import '@/styles/footer.css';
import '@/styles/map.css';
import '@/styles/staticPages.css';
import '@/styles/aside.css';

import { Sen } from 'next/font/google';
const sen = Sen({ subsets: ['latin-ext'] }) 

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sen.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
