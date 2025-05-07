
import React, { useState } from "react";

export const HeroSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="self-center w-full text-white ">
      <div className="flex flex-col relative min-h-[329px] w-full items-center justify-center px-20 py-[59px]  max-md:max-w-full max-md:px-5">
        <img
          src="https://res.cloudinary.com/anuragprasoon/image/upload/v1745677807/carousel3_f4saji.png"
          alt="Adventure background"
          className="absolute h-full w-full object-cover inset-0 rounded-[19px]"
        />
        <div className="relative flex w-[777px] max-w-full flex-col items-stretch">
          <h1 className="text-[64px] font-bold leading-[60px] text-center max-md:max-w-full max-md:text-[40px] max-md:leading-[41px]">
            Your Next Great Adventure Starts Here
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
                  placeholder="Search Treks & Expeditions"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="self-stretch min-w-60 my-auto bg-transparent border-none outline-none text-white placeholder-white w-full"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
