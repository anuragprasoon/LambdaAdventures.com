import React from "react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CallIcon from '@mui/icons-material/Call';

interface TrekCardProps {
  idkey: number;
  imageSrc: string;
  title: string;
  location: string;
  duration: string;
  distance: string;
  difficulty: string;
}
const TrekCard: React.FC<TrekCardProps> = ({
  idkey,
  imageSrc,
  title,
  location,
  duration,
  distance,
  difficulty,
}) => {

  const locationIconSrc= "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4"
  const distanceIconSrc= "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8"
  const difficultyIconSrc= "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"

  useEffect(()=>{
  AOS.init();
},[]);

  return <div className="min-w-60 w-[302px] rounded-lg will-change-scroll" data-aos="fade-up">
      <img src={imageSrc} alt={title} className="aspect-[1.06] w-[302px] max-w-full rounded-xl object-cover" />
      <div className="w-full text-sm text-[#717171] font-medium leading-none mt-3">
        <div className="flex w-full flex-col">
          <div className="self-stretch w-full gap-8 text-base text-[rgba(34,34,34,1)] font-bold leading-none">
            {title}
          </div>
          <div className="flex items-center gap-2  mt-[5px]">
            <img src={locationIconSrc} alt="Location" className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto" />
            <div className="self-stretch my-auto">{location}</div>
          </div>
          <div className="self-stretch flex w-full gap-5 mt-[5px]">
            <div className="flex items-center gap-2 justify-center">
              <img src={distanceIconSrc} alt="Distance" className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto" />
              <div className="self-stretch my-auto">{distance}</div>
            </div>
            <div className="flex items-center gap-[5px] whitespace-nowrap justify-center">
              <img src={difficultyIconSrc} alt="Difficulty" className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto" />
              <div className="self-stretch my-auto">{difficulty}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-3 p-[1px] gap-1">
        <Link href="tel:+919065550642" className="self-stretch h-full">
        <button className=" min-h-[49px] gap-[3px] text-base text-[rgba(1,104,89,1)] font-bold leading-loose mt-3 px-4 py-3  rounded-xl  hover:bg-[rgba(1,104,89,1)] outline-1 outline-[rgba(1,104,89,1)] hover:text-white transition-colors">
        <CallIcon/> </button>
      </Link>
      <Link href={`/trek/${idkey}`} className="self-stretch w-full">
      <button className="self-stretch bg-[rgba(1,124,109,1)] min-h-[49px] w-full gap-[3px] text-base text-white font-bold leading-loose mt-3 px-[26px] py-3 rounded-xl max-md:px-5 hover:bg-[rgba(1,104,89,1)] transition-colors">
        Book Now</button>
      </Link>
      </div>
    </div>;
};
export default TrekCard;