import Head from "next/head"
import TrekSection from "@/components/TrekSection"
import AdventureCallout from "@/components/AdventureCallout";
import { HeroSection } from "@/components/Hero2";
import { FilterTabs } from "@/components/FilterTabs";
import TrekCard from "@/components/TrekCard";
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

const popularTreks = [
  {
    imageSrc: "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909217/Chandrashila-Trek_cbwfkp.webp",
    title: "Chandrashila Trek",
    location: "Uttarakhand",
    dates: "Round the Year",
    duration: "3 Days, 2 Nights",
    distance: "9 km",
    difficulty: "Easy-Moderate",
    type: "trek",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },
  {
    imageSrc: "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909231/Chandratal-Trek_iudmmv.webp",
    title: "Chandratal Trek",
    location: "Himachal Pradesh",
    dates: "June to October",
    duration: "4 Days",
    distance: "80 km",
    difficulty: "Moderate",
    type: "trek",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },
  {
    imageSrc: "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909234/Deoriatal-Chandrashila-Trek_yjt3oi.webp",
    title: "Deoriatal Chandrashila Trek",
    location: "Uttarakhand",
    dates: "March to June & September to December",
    duration: "6 Days",
    distance: "32 km",
    difficulty: "Easy to Moderate",
    type: "trek",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },
  {
    imageSrc: "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905007/brahmatal_xh3yar.webp",
    title: "Brahma Tal Trek",
    location: "Uttarakhand",
    dates: "December to March",
    duration: "6 Days",
    distance: "30 km",
    difficulty: "Easy to Moderate",
    type: "trek",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },
  {
    imageSrc: "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905042/ali-bugyal_ipylmr.webp",
    title: "Ali Bedni Bugyal Trek",
    location: "Uttarakhand",
    dates: "May to June & September to October",
    duration: "6 Days",
    distance: "35 km",
    difficulty: "Easy to Moderate",
    type: "trek",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },
  {
    imageSrc: "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905052/Everest-Base-Camp_exwewg.webp",
    title: "Everest Base Camp Trek",
    location: "Nepal",
    dates: "March to May & September to November",
    duration: "16 Days",
    distance: "130 km",
    difficulty: "Difficult",
    type: "trek",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },
  {
    imageSrc: "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905140/bali-pass_c7wakm.webp",
    title: "Bali Pass",
    location: "Uttarakhand",
    dates: "May to June & September to October",
    duration: "8 Days",
    distance: "66 km",
    difficulty: "Difficult",
    type: "expeditions",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },
  {
    imageSrc: "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905148/beas-kund_bbmw24.webp",
    title: "Beas Kund",
    location: "Himachal Pradesh",
    dates: "May to October",
    duration: "4 Days",
    distance: "15 km",
    difficulty: "Easy to Moderate",
    type: "expeditions",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },
  {
    imageSrc: "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905887/bhrigu-lake_lc3o4l.webp",
    title: "Bhrigu Lake Trek",
    location: "Himachal Pradesh",
    dates: "May to October",
    duration: "4 Days",
    distance: "10 km",
    difficulty: "Moderate",
    type: "trek",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },
  {
    imageSrc: "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909314/buran-ghati_laaalk.webp",
    title: "Buran Ghati Trek",
    location: "Himachal Pradesh",
    dates: "Round the Year",
    duration: "8 Days",
    distance: "65 Kms",
    difficulty: "Moderate to Difficult",
    type: "trek",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  }
];


export default function Trek() {
  const [activeFilter, setActiveFilter] = useState("all");
    
    const filteredTreks = popularTreks.filter(trek => {
      if (activeFilter === "all") return true;
      if (activeFilter === "treks" && trek.type === "trek") return true;
      if (activeFilter === "expeditions" && trek.type === "expeditions") return true;
      if (activeFilter === "yoga" && trek.type === "yoga") return true;
      return false;
    });

    const handleFilterChange = (filter) => {
      setActiveFilter(filter);
    };

    return(
        <>
        <Head>
        <title>Lambda Adventures - All Treks & Expeditions </title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="px-[6%]">
      <HeroSection/>
      <FilterTabs onFilterChange={handleFilterChange}/>
      <div className="flex w-full gap-[36px] justify-start mt-[20px] flex-wrap max-md:mt-5 pb-4 ml-auto mr-auto">
      {filteredTreks.length > 0 ? (
          filteredTreks.map((trek, index) => (
            <TrekCard 
              key={index} 
              imageSrc={trek.imageSrc} 
              title={trek.title} 
              location={trek.location} 
              dates={trek.dates} 
              duration={trek.duration} 
              distance={trek.distance} 
              difficulty={trek.difficulty} 
              locationIconSrc={trek.locationIconSrc} 
              dateIconSrc={trek.dateIconSrc} 
              distanceIconSrc={trek.distanceIconSrc} 
              difficultyIconSrc={trek.difficultyIconSrc} 
            />
          ))
        ) : (
          <div className="w-full text-center py-8 text-gray-500">
            No adventures found for this category.
          </div>
        )}
      </div>
      
      <div className="mb-[100px] max-sm:hidden ">
      <Link href={'/contact'}><Image
  src="https://res.cloudinary.com/anuragprasoon/image/upload/v1745615313/adventurecallout_kdpc4k.png"
  alt="Adventure Callout"
  width={1200}
  height={800}
  layout="responsive"
  loader={({ src }) => src}
/></Link>
</div>

<div className="sm:hidden mb-[50px]">
      <Link href={'/contact'}><Image
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