import React, { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const TrekCategories = () => {
  const [activeTab, setActiveTab] = useState<any>("Trending");

  useEffect(()=>{
  AOS.init();
},[]) 

  const categories = {
    "Trending":[],
    "Weekend Treks": [
      { label: "3 Day Treks", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1752374551/lambda-adventures/trip_thumb/AliandBedniBugyal.webp" },
      { label: "5 Day Treks", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992130/lambda-adventures/bb7a2675-a0e2-40f4-9550-5df531932665.png" },
      { label: "Long Treks", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992253/lambda-adventures/f0dba2af-34f4-4900-ad8a-5fd63fa651d8.png" },
    ],
    "Season Wise Treks": [
      { label: "Summer Treks", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1752374551/lambda-adventures/trip_thumb/AliandBedniBugyal.webp" },
      { label: "Winter Treks", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992253/lambda-adventures/f0dba2af-34f4-4900-ad8a-5fd63fa651d8.png" },
    ],
    "Difficulty Wise Treks": [
      { label: "Easy Treks", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1752374551/lambda-adventures/trip_thumb/AliandBedniBugyal.webp" },
      { label: "Moderate Treks", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992130/lambda-adventures/bb7a2675-a0e2-40f4-9550-5df531932665.png" },
      { label: "Difficult Treks", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992253/lambda-adventures/f0dba2af-34f4-4900-ad8a-5fd63fa651d8.png" },
    ],
    "Location Wise Treks": [
      { label: "Himachal Treks", img: "your-image-url-5" },
      { label: "Uttarakhand Treks", img: "your-image-url-6" },
    ],
  };

  return (
    <div className="sm:px-10">
      {/* Tabs */}
      <div className="w-full flex gap-5 overflow-x-auto content-center">
        {Object.keys(categories).map((tab) => (
          <span
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 cursor-pointer ${
              activeTab === tab
                ? "font-bold text-[rgba(1,124,109,1)] border-b-2 border-[rgba(1,124,109,1)]"
                : "text-black hover:font-bold hover:text-[rgba(1,124,109,1)] hover:border-b-2 hover:border-[rgba(1,124,109,1)]"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Selected Category Content */}
      <div className="flex gap-5 mt-3 overflow-x-auto hide-scrollbar" >
        {categories[activeTab].map((item, idx) => (
          <div key={idx} className="relative w-[200px] h-[100px] rounded" data-aos="fade-down">
            <img
              className="object-cover rounded w-[200px] h-[100px]"
              src={item.img}
              alt={item.label}
            />
            <span className="absolute top-[40%] text-white font-bold text-center w-full">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekCategories;
