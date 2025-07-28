import React from "react";
import TrekCard from "./TrekCard";
import Link from "next/link";
import { useIsMobile } from "@/hooks/useMobile";
interface TrekSectionProps {
  title: string;
  treks: Array<{
    id:number;
    imageSrc: string;
    title: string;
    location: string;
    duration: string;
    distance: string;
    difficulty: string;
  }>;
}
const TrekSection: React.FC<TrekSectionProps> = ({
  title,
  treks
}) => {
  const isMobile = useIsMobile();
  return <div className="w-full max-md:max-w-full  mb-[20px] mt-[30px]">
      <div className="flex items-center w-full gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
        <h2 className="text-[rgba(1,124,109,1)] text-[24px] font-bold leading-none">
          {title}
        </h2>
        <div className="text-[rgba(34,34,34,1)] text-[16px] md:font-semibold leading-none cursor-pointer hover:text-[rgba(1,124,109,1)]">
         <Link href={'/trek'}>View all</Link> 
        </div>
      </div>
      <div className="flex w-full gap-[34px] justify-between mt-[20px] overflow-x-auto [&::-webkit-scrollbar]:hidden max-md:max-w-full max-md:mt-5 pt-4 pb-4 overflow-y-clip">
        {treks.map((trek, index) => <TrekCard key={index} idkey={trek.id} imageSrc={trek.imageSrc} title={trek.title} location={trek.location} duration={trek.duration} distance={trek.distance} difficulty={trek.difficulty} />)}
      </div>
    </div>;
};
export default TrekSection;