import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Urbanist } from "next/font/google";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
});


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isload, setLoad]=useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    const handleStart = () => {
      setLoad(true);
    };

    const handleComplete = () => {
      timeout = setTimeout(() => {
        setLoad(false);
      }, 3000);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    }

  },[router]);

  return( <main className={urbanist.className}>
    {isload && (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <DotLottieReact src="/Scene-1.json" autoplay loop />
      </div>
    )}
  <Header/>
  <Component {...pageProps}/>
  <Footer/>
  </main>);
}
