import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["https://res.cloudinary.com/anuragprasoon/image/upload/v1745677813/carousel1_zb49us.png","https://res.cloudinary.com/anuragprasoon/image/upload/v1745677807/carousel2_ogw8bo.png", "https://res.cloudinary.com/anuragprasoon/image/upload/v1745677807/carousel3_f4saji.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);


  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  return <div className="flex items-center justify-center gap-[40px_52px] max-md:max-w-full">
      <div className="self-stretch min-w-60 w-[1361px] my-auto rounded-[19px]">
        <div className="flex flex-col relative w-full items-center pt-[147px] pb-[41px] px-20 rounded-[19px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
          <div className="carousel-container absolute inset-0 w-full h-full overflow-hidden rounded-[19px]">
            {images.map((src, index) => <Image key={index}  width={1200} height={800} layout="responsive" src={src} alt={`Hero Background ${index + 1}`} className={`absolute h-[600px] w-full object-cover object-center inset-0 transition-opacity rounded-[19px] duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
          </div>
          <div className="relative flex w-[773px] max-w-full flex-col items-center rounded-[19px]">
            <div className="w-full text-white text-left max-md:max-w-full">
              <h1 className="text-[73px] font-extrabold italic leading-[80px] max-md:max-w-full max-md:text-[40px] max-md:leading-[48px] max-sd:text-[20px] text-left">EXPLORE 
EXPERIENCE 
EVOLVE</h1>
              <p className="text-lg font-normal text-left">
                with India's Best Trekking Organization
              </p>
              <Link href={'/trek'}>
              <button className="mx-auto bg-[rgba(1,124,109,1)] min-h-[69px] max-w-full gap-1 text-md font-bold mt-[26px] px-[33px] py-[19px] rounded-[40px] max-md:px-5 hover:bg-[rgba(1,104,89,1)] transition-colors text-center">
                Book Now
              </button>
              </Link>
            </div>
            <div className="self-center flex items-center gap-[15px] mt-[46px] max-md:mt-10">
              {images.map((_, index) => <div key={index} onClick={() => goToImage(index)} className={`cursor-pointer ${index === currentImageIndex ? "bg-white" : "bg-[rgba(217,217,217,0.5)]"} self-stretch flex w-1.5 shrink-0 h-1.5 my-auto rounded-[50%]`} />)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;