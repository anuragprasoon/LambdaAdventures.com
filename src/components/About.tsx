import React, { useState } from "react";
import CustomTrip from "./CustomForm";
interface TrekAboutProps {
  payFunc: () => void;
  trip: any;
}
const TrekAbout: React.FC<TrekAboutProps> = ({ payFunc, trip }) => {
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  console.log("hello",payFunc)
  const fullText = `At Lambda Adventures, every trek is more than just a journey—it's a path to growth, connection, and unforgettable memories. Born from a passion for the outdoors and driven by trust, care, and authenticity, we pride ourselves on crafting transformative adventures that stay true to our word. From the moment you book with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to`;

  const truncatedText = expanded
    ? fullText
    : fullText.substring(0, 500) + "...";

  return (<>

<div id="hero" className="relative">
    <img src={trip.imageSrc} className="w-full object-cover sm:h-[400px] md:h-300px"/>
    <div className="sm:block hidden absolute w-full bottom-0 text-white justify-center p-5 bg-linear-to-t from-white/40 to-white/0 mix-blend-lighten">
    
    	<span className=" text-3xl text-center block pb-3">{trip.title}</span>
    	<div className="flex gap-5 justify-center">
    		<span className=" text-sm"><i className="fa-regular fa-clock"></i> {trip.duration}</span>
    		<span className=" text-sm"><i className="fa-regular fa-compass"></i>{trip.distance}</span>
    		<span className=" text-sm"><i className="fa-regular fa-map"></i>{trip.difficulty}</span>
    	</div>
    </div>
    
  </div>

{/*row*/}
<div className="sm:flex text-black">

{/*booking-card*/}
  <div className="sm:p-10 min-w-[300px]">
  <div className="p-5 sm:border-1 rounded-md">
      <div className="sm:hidden text-2xl font-semibold mb-3">{trip.titles}</div>
      <div className=" sm:text-lg"><i className="fa-solid fa-location-dot"></i> {trip.location}</div>
      <div className=" sm:text-lg"><i className="fa-regular fa-clock"></i>  {trip.duration}</div>
      <div className=" sm:text-lg"><i className="fa-regular fa-compass"></i> {trip.distance}</div>
      <div className=" sm:text-lg"><i className="fa-regular fa-map"></i> {trip.difficulty}</div>
  <button className="block w-full rounded-sm p-2 bg-[#017C6D] mt-1 text-white font-bold" onClick={()=> setShowModal(true)}>Book Now</button>
  </div>
  </div>


{/*description*/}
  <div className="p-10 sm:order-first">
      <span className=" hidden sm:block text-2xl block pb-3 text-[#017C6D] font-semibold">{trip.title}</span>
      <span className=" block sm:hidden text-2xl block pb-3 text-[#017C6D] font-semibold">About</span>
      <p>{trip.description}
      </p>
  </div>

</div>

{/*row*/}
<div className="sm:flex text-black">
{/*inclusions*/}
  <div className="p-10 w-full">
      <span className="text-2xl block pb-3 text-[#017C6D] font-semibold">Inclusions</span>
      <ul>
          <li>1. High-quality Dome tents.</li>
          <li>2. Sleeping bags.</li>
          <li>3. High-quality Dome tents.</li>
          <li>5. High-quality Dome tents.</li>
          <li>6. High-quality Dome tents.</li>
          <li>7. Sleeping bags.</li>
          <li>8. High-quality Dome tents.</li>
          <li>9. High-quality Dome tents.</li>

      </ul>
  </div>
{/*exclusions*/}
  <div className="p-10 w-full">
      <span className="text-2xl block pb-3 text-[#017C6D] font-semibold">Exclusions</span>
      <ul>
          <li>1. High-quality Dome tents.</li>
          <li>2. Sleeping bags.</li>
          <li>3. High-quality Dome tents.</li>
          <li>5. High-quality Dome tents.</li>
          <li>6. High-quality Dome tents.</li>
          <li>7. Sleeping bags.</li>
          <li>8. High-quality Dome tents.</li>
          <li>9. High-quality Dome tents.</li>

      </ul>
  </div>

  {/*itinerary*/}
  <div className="p-10 w-full ">
      <span className="text-2xl block pb-3 text-[#017C6D] font-semibold">Itinerary</span>
      <div className="border-1 rounded-sm p-3 mb-1">
          <span className="text-xl block text-[#017C6D] font-semibold">Day 1: Title</span>
        <ul className="p-2 hidden ">
          <li>1. High-quality Dome tents.</li>
          <li>2. Sleeping bags.</li>
          <li>3. High-quality Dome tents.</li>
          <li>5. High-quality Dome tents.</li>
          <li>6. High-quality Dome tents.</li>
          <li>7. Sleeping bags.</li>
          <li>8. High-quality Dome tents.</li>
          <li>9. High-quality Dome tents.</li>

      </ul>

      </div>
      <div className="border-1 rounded-sm p-3 mb-1 justify-between">
          <span className="text-xl block text-[#017C6D] font-semibold">Day 2: Title  <i className="fa-solid fa-caret-down"></i></span>
        <ul className="p-2 hidden">
          <li>1. High-quality Dome tents.</li>
          <li>2. Sleeping bags.</li>
          <li>3. High-quality Dome tents.</li>
          <li>5. High-quality Dome tents.</li>
          <li>6. High-quality Dome tents.</li>
          <li>7. Sleeping bags.</li>
          <li>8. High-quality Dome tents.</li>
          <li>9. High-quality Dome tents.</li>

      </ul>

      </div>
  </div>

</div>
{showModal && <CustomTrip closeFunc={()=>setShowModal(false)} tripid={trip.id}/>}
  </>);
};

export default TrekAbout;
