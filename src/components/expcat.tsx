import React, { useState } from "react";

const ExpCategories = () => {

  const categories = {
    "Height/Altitude": [
      { label: "0-1000m", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1752374551/lambda-adventures/trip_thumb/AliandBedniBugyal.webp" },
      { label: "1000-3000m", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992130/lambda-adventures/bb7a2675-a0e2-40f4-9550-5df531932665.png" },
      { label: "3000m+", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992253/lambda-adventures/f0dba2af-34f4-4900-ad8a-5fd63fa651d8.png" },
      { label: "5000m+", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992253/lambda-adventures/f0dba2af-34f4-4900-ad8a-5fd63fa651d8.png" },
    ],
    "Difficulty": [
      { label: "Easy", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1752374551/lambda-adventures/trip_thumb/AliandBedniBugyal.webp" },
      { label: "Moderate", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992130/lambda-adventures/bb7a2675-a0e2-40f4-9550-5df531932665.png" },
      { label: "Difficult", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992253/lambda-adventures/f0dba2af-34f4-4900-ad8a-5fd63fa651d8.png" },
    ],
    "Season Wise": [
      { label: "Autumn", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746992697/lambda-adventures/d7ef9869-c5ec-4a51-adda-d0fe0661557d.png" },
      { label: "Spring", img: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746991649/lambda-adventures/df43c4ad-71f5-4ba0-a495-79a1cf76ad83.png" },
    ],
    "Region Wise": [
      { label: "Himachal Treks", img: "your-image-url-5" },
      { label: "Uttarakhand Treks", img: "your-image-url-6" },
    ]
  };

  const [activeTab, setActiveTab] = useState("Height/Altitude");

  return (
    <div className="sm:px-10">

      {/**<div className="w-full flex gap-5 overflow-x-auto content-center">
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

      <div className="flex gap-5 mt-3 overflow-x-auto hide-scrollbar">
  {Array.isArray(categories[activeTab]) && categories[activeTab].length > 0 ? (
    categories[activeTab].map((item, idx) => (
      <div key={idx} className="relative w-[200px] h-[100px] rounded">
        <img
          className="object-cover rounded w-[200px] h-[100px]"
          src={item.img}
          alt={item.label}
        />
        <span className="absolute top-[40%] text-white font-bold text-center w-full">
          {item.label}
        </span>
      </div>
    ))
  ) : (
    <div className="text-gray-500 italic">
    </div>
  )}
</div>
*/}
    </div>
  );
};

export default ExpCategories;
