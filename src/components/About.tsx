import React, { useState } from "react";
import CustomTrip from "./CustomForm";
interface TrekAboutProps {
  payFunc: () => void;
}
const TrekAbout: React.FC<TrekAboutProps> = ({ payFunc }) => {
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  console.log("hello",payFunc)
  const fullText = `At Lambda Adventures, every trek is more than just a journey—it's a path to growth, connection, and unforgettable memories. Born from a passion for the outdoors and driven by trust, care, and authenticity, we pride ourselves on crafting transformative adventures that stay true to our word. From the moment you book with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to`;

  const truncatedText = expanded
    ? fullText
    : fullText.substring(0, 500) + "...";

  return (<>

<div id="hero" className="relative">
    <img src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/f38bfb124d56e3ab1c6d7c6027988e0ecc4ebedc?placeholderIfAbsent=true" className="md:h-300px"/>
    <div className="sm:block hidden absolute w-full bottom-0 text-white justify-center p-5 bg-linear-to-t from-white/40 to-white/0 mix-blend-lighten">
    
    	<span className=" text-3xl text-center block pb-3">Chandratal Trek with Hampta Pass</span>
    	<div className="flex gap-5 justify-center">
    		<span className=" text-sm"><i className="fa-regular fa-clock"></i>  5 Days, 6 Nights</span>
    		<span className=" text-sm"><i className="fa-regular fa-compass"></i> 9 Km</span>
    		<span className=" text-sm"><i className="fa-regular fa-map"></i> Moderate</span>
    	</div>
    </div>
    
  </div>

{/*row*/}
<div className="sm:flex text-black">

{/*booking-card*/}
  <div className="sm:p-10 min-w-[300px]">
  <div className="p-5 sm:border-1 rounded-md">
      <div className="sm:hidden text-2xl font-semibold mb-3">Chandratal Trek with Hampta Pass</div>
      <div className=" sm:text-lg"><i className="fa-solid fa-location-dot"></i> Himachal Pradesh</div>
      <div className=" sm:text-lg"><i className="fa-regular fa-clock"></i>  5 Days, 6 Nights</div>
      <div className=" sm:text-lg"><i className="fa-regular fa-compass"></i> 9 Km</div>
      <div className=" sm:text-lg"><i className="fa-regular fa-map"></i> Moderate</div>
  <button className="block w-full rounded-sm p-2 bg-[#017C6D] mt-1 text-white font-bold" onClick={()=> setShowModal(true)}>Book Now</button>
  </div>
  </div>


{/*description*/}
  <div className="p-10 sm:order-first">
      <span className=" hidden sm:block text-2xl block pb-3 text-[#017C6D] font-semibold">Chandratal Trek with Hampta Pass</span>
      <span className=" block sm:hidden text-2xl block pb-3 text-[#017C6D] font-semibold">About</span>
      <p>At Lambda Adventures, every trek is more than just a journey—it’s a path to growth, connection, and unforgettable memories. Born from a passion for the outdoors and driven by trust, care, and authenticity, we pride ourselves on crafting transformative adventures that stay true to our word. From the moment you book with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don’t just lead treks—they share knowledge, build relationships, and tailor each experience to  with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don’t just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don’t just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don’t just lead treks—they share knowledge, build relationships, and tailor each experience to  Read More ....
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
{showModal && <CustomTrip closeFunc={()=>setShowModal(false)}/>}
  </>);
};

export default TrekAbout;
