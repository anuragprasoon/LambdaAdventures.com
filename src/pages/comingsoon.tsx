import Head from "next/head"
import StoryHero from "@/components/Story/Hero"
export default function Info() {
    return(
        <>
        <Head>
        <title>Lambda Adventures - Info </title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-[6%] mt-[100px] mb-[140px]">
       <h1 className="text-center text-[#017c6d] text-[40px] font-bold">Coming Soon</h1>
      </div>
        </>
    )
}