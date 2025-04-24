
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="bg-white flex w-full items-center gap-[40px_100px] overflow-hidden text-[19px] text-black font-medium leading-none justify-between flex-wrap pl-[78px] pr-20 py-5 mx-auto max-md:max-w-full max-md:mr-0.5 max-md:px-5">
      <Link href="/"><img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2fa7c30181431a02d611b8ae9935850086686e9?placeholderIfAbsent=true"
        alt="Company Logo"
        className="aspect-[3.38] object-contain w-[142px] self-stretch shrink-0 my-auto"
      /></Link>
      <div className="self-stretch flex min-w-60 items-center gap-[26px] flex-wrap my-auto max-md:max-w-full">
        <div className="self-stretch my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
          <Link  href={'/trek'}>Treks & Expeditions</Link>
        </div>
        <div className="self-stretch my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
          Yoga Retreat
        </div>
        <div className="self-stretch my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
        <Link  href={'/story'}>About Us</Link>
        </div>
        <div className="self-stretch whitespace-nowrap my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
          Blog
        </div>
        <div className="self-stretch my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
        <Link  href={'/contact'}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
