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
import TrekCategories from "@/components/trekcat";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";






export default function Trek() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");
  const [popularTreks, setPopularTreks] = useState<any[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<
    | "all"
    | "famous"
    | "upcoming"
    | "easy"
    | "moderate"
    | "hard"
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

   const filteredTreks = popularTreks.filter(trek => {
  const matchesFilter =
    activeFilter === "all" ||
    (activeFilter === "treks" && trek.type === "Trek") ||
    (activeFilter === "expeditions" && trek.type === "Expeditions") ||
    (activeFilter === "bike" && trek.type === "Bike");

  const location = (trek.location || "").toLowerCase();
  const difficulty = (trek.difficulty || "").toLowerCase();
  const tags: string[] = Array.isArray(trek.tag) ? trek.tag : [];
  const status = (trek.status || "").toLowerCase();

  const matchesCategory = (() => {
    switch (categoryFilter) {
      case "famous":
        return tags.map((t) => String(t).toLowerCase()).includes("famous");
      case "upcoming":
        // Match either explicit status or "upcoming" tag
        return (
          status.includes("upcoming") ||
          tags.map((t) => String(t).toLowerCase()).includes("upcoming")
        );
      case "easy":
        return difficulty.includes("easy");
      case "moderate":
        return difficulty.includes("moderate");
      case "hard":
        return (
          difficulty.includes("hard") ||
          difficulty.includes("difficult") ||
          difficulty.includes("challenging")
        );
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
    trek.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trek.location.toLowerCase().includes(searchQuery.toLowerCase());

  return matchesFilter && matchesSearch && matchesCategory;
});


    const handleFilterChange = (filter: FilterOption) => {
      setActiveFilter(filter);
    };

    const categories = [
      {
        label: "Famous Treks of India",
        value: "famous" as const,
      },
      {
        label: "Upcoming",
        value: "upcoming" as const,
      },
      {
        label: "Easy",
        value: "easy" as const,
      },
      {
        label: "Moderate",
        value: "moderate" as const,
      },
      {
        label: "Hard",
        value: "hard" as const,
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

    return(
        <>
        <Head>
        <title>Lambda Adventures - All Treks & Expeditions </title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="px-[6%]">
      <HeroSection srcUrl="https://res.cloudinary.com/anuragprasoon/video/upload/v1752800626/trek_qkh3di.mp4"
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
/>
      <h2 className="text-4xl font-bold py-5 sm:px-10 text-black"> Discover </h2>

      {/* Premium minimal category section */}
      <section className="sm:px-10 mb-6">
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-sm px-4 py-4 sm:px-6 sm:py-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                Curated for you
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                Explore by category & region
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {/* Fame & difficulty */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategoryFilter("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                  categoryFilter === "all"
                    ? "bg-[rgba(1,124,109,1)] text-white border-transparent shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:border-[rgba(1,124,109,0.4)] hover:text-slate-900"
                }`}
              >
                All Treks
              </button>
              {categories.map((cat) => (
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
      {/**<TrekCategories/>
      <h2 className="text-2xl font-semibold mt-5 sm:px-10 text-black"> Treks For You </h2>*/}
      <div className="flex w-full gap-[36px] justify-center mt-[20px] flex-wrap max-md:mt-5 pb-4 ml-auto mr-auto">
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
            <DotLottieReact src="/Scene-1.json" width="200px" height="200px" autoplay loop />
            Hmmm... No treks found matching your criteria.
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