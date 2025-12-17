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
  const [categoryFilter, setCategoryFilter] = useState<
    | "all"
    | "upto-4k"
    | "4k-5k"
    | "5k-6k"
    | "6k-plus"
    | "himachal"
    | "uttarakhand"
    | "kashmir"
    | "north-east"
    | "ladakh"
    | "south"
  >("all");

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

  const filteredTreks = popularTreks.filter((trek) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "treks" && trek.type === "Trek") ||
      (activeFilter === "expeditions" && trek.type === "Expeditions") ||
      (activeFilter === "bike" && trek.type === "Bike");

    const title = (trek.title || "").toLowerCase();
    const location = (trek.location || "").toLowerCase();
    const altitudeText = (trek.altitude || "").toLowerCase();

    const altitudeMatch = altitudeText.match(/(\d+(\.\d+)?)/);
    const altitude = altitudeMatch ? parseFloat(altitudeMatch[1]) : null;

    const matchesCategory = (() => {
      switch (categoryFilter) {
        case "upto-4k":
          return altitude !== null && altitude < 4000;
        case "4k-5k":
          return altitude !== null && altitude >= 4000 && altitude < 5000;
        case "5k-6k":
          return altitude !== null && altitude >= 5000 && altitude < 6000;
        case "6k-plus":
          return altitude !== null && altitude >= 6000;
        case "himachal":
          return location.includes("himachal");
        case "uttarakhand":
          return location.includes("uttarakhand");
        case "kashmir":
          return location.includes("kashmir");
        case "north-east":
          return (
            location.includes("sikkim") ||
            location.includes("arunachal") ||
            location.includes("north east") ||
            location.includes("meghalaya") ||
            location.includes("assam")
          );
        case "ladakh":
          return location.includes("ladakh");
        case "south":
          return (
            location.includes("karnataka") ||
            location.includes("tamil") ||
            location.includes("kerala") ||
            location.includes("south india")
          );
        case "all":
        default:
          return true;
      }
    })();

    const matchesSearch =
      title.includes(searchQuery.toLowerCase()) ||
      location.includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch && matchesCategory;
  });


  const handleFilterChange = (filter: FilterOption) => {
    setActiveFilter(filter);
  };

  const heightCategories = [
    {
      label: "Up to 4,000 m",
      value: "upto-4k" as const,
    },
    {
      label: "4,000 – 5,000 m",
      value: "4k-5k" as const,
    },
    {
      label: "5,000 – 6,000 m",
      value: "5k-6k" as const,
    },
    {
      label: "6,000 m+",
      value: "6k-plus" as const,
    },
  ];

  const regions = [
    { label: "Himachal", value: "himachal" as const },
    { label: "Uttarakhand", value: "uttarakhand" as const },
    { label: "Kashmir", value: "kashmir" as const },
    { label: "Ladakh", value: "ladakh" as const },
    { label: "North-East", value: "north-east" as const },
    { label: "South India", value: "south" as const },
  ];



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

      {/* Premium minimal category section (height & region) */}
      <section className="sm:px-10 mb-6">
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-sm px-4 py-4 sm:px-6 sm:py-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                Curated for climbers
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Explore by height & region
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {/* Height */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryFilter("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                  categoryFilter === "all"
                    ? "bg-[rgba(1,124,109,1)] text-white border-transparent shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[rgba(1,124,109,0.4)] hover:text-slate-900"
                }`}
              >
                All Expeditions
              </button>
              {heightCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setCategoryFilter(cat.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                    categoryFilter === cat.value
                      ? "bg-[rgba(1,124,109,1)] text-white border-transparent shadow-sm"
                      : "bg-white text-slate-600 border-slate-200 hover:border-[rgba(1,124,109,0.4)] hover:text-slate-900"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Regions */}
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region.value}
                  onClick={() => setCategoryFilter(region.value)}
                  className={`px-3 py-1.5 rounded-full text-[11px] sm:text-xs border transition-all ${
                    categoryFilter === region.value
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                  }`}
                >
                  {region.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
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

      </div>
      <div className="fixed bottom-2 right-2 ">
        <a href="https://api.whatsapp.com/send/?phone=919065550642&text=Hi%20Lambda%20Adventures,%20I%20want%20to%20plan%20a%20trip">
          <img src="/Whatsapp.webp" className="w-[50px] hover:w-[90px]"/>
        </a>
      </div>
        </>
    )
}