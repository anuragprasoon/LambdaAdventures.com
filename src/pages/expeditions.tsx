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










export default function Expeditions() {
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
    (activeFilter === "bike" && trek.type === "Bike");

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
        <title>Lambda Adventures - All Treks & Expeditions </title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="px-[6%]">
      <HeroSection herotext="Move Mountains With Us" srcUrl="https://cdn.pixabay.com/video/2015/11/27/1408-147169812_medium.mp4" searchplaceholder="Search Expeditions" phrases={["Search Everest Base Camp", "Search Bali Pass", "Search Mt. Yunam Expedition"]}
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
/>
      <h2 className="text-4xl font-bold py-5 sm:px-10 text-black"> Discover</h2>
      {/**<ExpCategories/>
      <h2 className="text-2xl font-semibold mt-5 sm:px-10 text-black"> Expeditions For You </h2>*/}
      <div className="flex w-full gap-[36px] justify-center mt-[20px] flex-wrap max-md:mt-5 pb-4 ml-auto mr-auto" >
      {filteredTreks.length > 0 ? (
          filteredTreks.map((trek, index) => (
            <TrekCard 
              key={index} 
              idkey={trek.id}
              imageSrc={trek.imageSrc} 
              title={trek.title} 
              location={trek.location} 
              duration={trek.duration} 
              distance={trek.distance} 
              difficulty={trek.difficulty}
            />
          ))
        ) : (
          <div className="w-full text-center py-8 text-gray-500">
            No adventures found for this category.
          </div>
        )}
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
       <div className="fixed bottom-2 right-2">
        <a href="https://api.whatsapp.com/send/?phone=919065550642&text=Hi%20Lambda%20Adventures,%20I%20want%20to%20plan%20a%20trip">
          <img src="https://res.cloudinary.com/dibrmj6nh/image/upload/v1747946474/Frame_1597884222_xnchxt.png" className="w-[50px]"/>
        </a>
      </div>
        </>
    )
}