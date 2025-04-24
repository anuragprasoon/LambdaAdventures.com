import React from "react";
import Link from "next/link";
interface TrekCardProps {
  imageSrc: string;
  title: string;
  location: string;
  dates: string;
  duration: string;
  distance: string;
  difficulty: string;
  locationIconSrc: string;
  dateIconSrc: string;
  distanceIconSrc: string;
  difficultyIconSrc: string;
}
const TrekCard: React.FC<TrekCardProps> = ({
  imageSrc,
  title,
  location,
  dates,
  duration,
  distance,
  difficulty,
  locationIconSrc,
  dateIconSrc,
  distanceIconSrc,
  difficultyIconSrc
}) => {
  return <div className="min-w-60 w-[302px]">
      <img src={imageSrc} alt={title} className="aspect-[1.06] object-contain w-[302px] max-w-full rounded-xl" />
      <div className="w-full text-sm text-[#717171] font-medium leading-none mt-3">
        <div className="flex w-full flex-col">
          <div className="self-stretch w-full gap-8 text-base text-[rgba(34,34,34,1)] font-bold leading-none">
            {title}
          </div>
          <div className="flex items-center gap-2  mt-[5px]">
            <img src={locationIconSrc} alt="Location" className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto" />
            <div className="self-stretch my-auto">{location}</div>
          </div>
          <div className="flex items-center gap-2 mt-[5px]">
            <img src={dateIconSrc} alt="Date" className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto" />
            <div className="self-stretch my-auto">{dates}</div>
          </div>
          <div className="self-stretch gap-2 mt-[5px]">{duration}</div>
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
      <button className="self-stretch bg-[rgba(1,124,109,1)] min-h-[49px] w-full gap-[3px] text-base text-white font-bold leading-loose mt-3 px-[26px] py-3 rounded-xl max-md:px-5 hover:bg-[rgba(1,104,89,1)] transition-colors">
        <Link href="/trekabout">Book Now</Link>
      </button>
    </div>;
};
export default TrekCard;