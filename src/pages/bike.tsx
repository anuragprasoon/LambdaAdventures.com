import Head from "next/head"
import TrekSection from "@/components/TrekSection"
import AdventureCallout from "@/components/AdventureCallout";
import { HeroSection } from "@/components/Hero2";
import { FilterTabs } from "@/components/FilterTabs";
import TrekCard from "@/components/TrekCard";
import Link from "next/link";
import Image from "next/image";
import { useState,  useEffect } from 'react';
import { type FilterOption } from "@/components/FilterTabs";
import ExpCategories from "@/components/expcat";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Bike() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterOption>("expeditions");
  const [popularTreks, setPopularTreks] = useState<any[]>([]);

  useEffect(() => {
  async function fetchTreks() {
    try {
      const response = await fetch('/api/trips');
      const data = await response.json();
      setPopularTreks(data);
    } catch (error) {
      console.error("Failed to fetch treks:", error);
    }
  }

  fetchTreks();
}, []);

    
   const filteredTreks = popularTreks.filter(trek => {
  const matchesFilter =
    activeFilter === "all" ||
    (activeFilter === "treks" && trek.type === "Trek") ||
    (activeFilter === "expeditions" && trek.type === "Expeditions") ||
    (activeFilter === "yoga" && trek.type === "Yoga Retreat");

  const matchesSearch =
    trek.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trek.location.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesFilter && matchesSearch;
});


    const handleFilterChange = (filter: FilterOption) => {
      setActiveFilter(filter);
    };



useEffect(()=>{
  AOS.init();
},[]) 

    return(
        <>
        <Head>
        <title>Lambda Adventures - All Bikes </title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="px-[6%]">
      <HeroSection herotext="Explore Our Bike Expeditions" srcUrl="https://res.cloudinary.com/anuragprasoon/video/upload/v1752800511/lambda-adventures/bike-exp.mp4" searchplaceholder="Search Bike Trips"
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
/>
      <h2 className="sm:text-4xl text-2xl font-bold py-5 sm:px-10 text-black">All Our Bike Expeditions</h2>
      <div className="flex w-full gap-[36px] justify-center flex-wrap max-md:mt-5 pb-4 ml-auto mr-auto ">
        <TrekCard
        key={1}
        idkey={129}
        imageSrc="https://images.pexels.com/photos/3392154/pexels-photo-3392154.jpeg"
        title="Ladakh Bike Expedition"
        location="Ladakh"
        distance="500 km"
        duration="10 Days"
        difficulty="Moderate"
        />

        <TrekCard
        key={2}                   
        idkey={126}
        imageSrc="https://images.pexels.com/photos/30255571/pexels-photo-30255571.jpeg"
        title="Spiti Bike Expedition" 
        location="Spiti"
        distance="600 km"
        duration="12 Days"
        difficulty="Moderate"
        />
        <TrekCard
        key={3}
        idkey={124}
        imageSrc="https://images.pexels.com/photos/4625460/pexels-photo-4625460.jpeg"
        title="Jasalmair Bike Expedition"
        location="Jasalmair"
        distance="400 km"
        duration="8 Days"
        difficulty="Easy"
        />
        <TrekCard
        key={4}
        idkey={125}
        imageSrc="https://images.pexels.com/photos/18358076/pexels-photo-18358076.jpeg"
        title="North East (Tawang) Bike Expedition"
        location="North East India"
        distance="700 km"
        duration="14 Days"
        difficulty="Moderate"
        />
        <TrekCard
        key={5}
        idkey={128}
        imageSrc="https://images.pexels.com/photos/14094513/pexels-photo-14094513.jpeg"
        title="Nepal (Mustang) Bike Expedition"
        location="Nepal"
        distance="800 km"
        duration="15 Days"
        difficulty="Challenging"
        />
      </div>
    
      
      <div className="mb-[100px] max-sm:hidden ">
      <Link href={'/customtrek'}><Image
  src="https://res.cloudinary.com/anuragprasoon/image/upload/v1745615313/adventurecallout_kdpc4k.png"
  alt="Adventure Callout"
  width={1200}
  height={800}
  layout="responsive"
  loader={({ src }) => src}
/></Link>
</div>

<div className="sm:hidden mb-[50px]">
      <Link href={'//customtrek'}><Image
  src="https://res.cloudinary.com/anuragprasoon/image/upload/v1745647359/adventurecallout-md_peiee0.png"
  alt="Adventure Callout"
  width={1200} // Original width of the image
  height={800} // Original height of the image
  layout="responsive"
  loader={({ src }) => src} // Makes the image responsive and adjusts based on container width
/></Link>
</div>
      </div>
        </>
    )
}