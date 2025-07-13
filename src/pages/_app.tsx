import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
});


export default function App({ Component, pageProps }: AppProps) {
  return( <main className={urbanist.className}>
  <Header/>
  <Component {...pageProps}/>
  <Footer/>
  </main>);
}
