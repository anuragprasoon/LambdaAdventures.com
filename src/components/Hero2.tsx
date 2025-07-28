import React, { useState, useEffect } from "react";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  herotext?: string;
  searchplaceholder?: string;
  srcUrl?: string;
  phrases?: string[];
}

export const HeroSection: React.FC<HeroProps> = ({ searchQuery, setSearchQuery, herotext, searchplaceholder, srcUrl, phrases }) => {
  const [placeholder, setPlaceholder] = useState(searchplaceholder || "Search Treks & Expeditions");

  const phrase = phrases || [
    "Search Weekend Treks",
    "Search Himalayan Peaks",
    "Search Chandrashila Trek"
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setPlaceholder(phrase[index % phrase.length]);
      index++;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };
  return (
    <div className="self-center w-full text-white ">
      <div className="flex flex-col relative min-h-[329px] w-full items-center justify-center px-20 py-[59px] max-md:max-w-full max-md:px-5">
        <video
          src={srcUrl || "https://res.cloudinary.com/anuragprasoon/video/upload/v1752800626/trek_qkh3di.mp4"}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="auto"
          className="absolute h-full w-full object-cover inset-0 rounded-[19px]"
        />
        <div className="relative flex w-[777px] max-w-full flex-col items-stretch">
          <h1 className="text-[64px] font-bold leading-[60px] text-center max-md:max-w-full max-md:text-[40px] max-md:leading-[41px]">
            {herotext || 'Your Next Great Adventure Starts Here'}
          </h1>
          <form
            onSubmit={handleSearch}
            className="self-center flex w-[558px] max-w-full gap-2 text-base font-normal tracking-[0.32px] leading-none flex-wrap mt-9 rounded-[10px]"
          >
            <div className="bg-[rgba(255,255,255,0.01)] border flex min-w-60 min-h-14 w-full items-center gap-0.5 flex-1 shrink basis-[0%] px-3 py-[18px] rounded-lg border-white border-solid max-md:max-w-full backdrop-blur-[10px]">
              <div className="self-stretch flex min-w-60 items-center gap-4 my-auto w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/afd61f49e242be832f8f845a8b263a98d6eba015"
                  alt="Search icon"
                  className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
                />
                <input
                  type="text"
                  placeholder={placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="self-stretch min-w-60 my-auto bg-transparent border-none outline-none text-white placeholder-white w-full transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
