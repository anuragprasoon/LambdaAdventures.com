import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

const Hero: React.FC = () => {

  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["https://cdn.pixabay.com/video/2025/02/16/258656_large.mp4"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  
    useEffect(()=>{
    AOS.init();
  },[]);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  return <div className="flex items-center justify-center gap-[40px_52px] max-md:max-w-full">
      <div className="self-stretch min-w-60 w-[1361px] my-auto rounded-[19px]">
        <div className="t-0 flex flex-col relative w-full items-center pt-[147px] pb-[41px] px-20 rounded-[19px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
          <div className="carousel-container absolute inset-0 w-full h-full overflow-hidden rounded-[19px]">
            {images.map((src, index) => <video key={index} width={1311} height={600} src={src} className={`absolute h-[500px] w-full object-cover object-center inset-0 transition-opacity rounded-[19px] duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} autoPlay loop muted
          playsInline
          disablePictureInPicture
          preload="auto"/>)}
          </div>
          <div className="z-0 flex w-[773px] max-w-full flex-col mt-[-70px] max-md:mt-[-30px] rounded-[19px]">
            <div className="w-full text-white text-left max-md:max-w-full">
              <h1 className="text-[73px]  drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] font-extrabold urbanist leading-[80px] max-md:max-w-full max-md:text-[40px] max-md:leading-[48px] max-sd:text-[20px] text-center"><text className={poppins.className}>EXPLORE<br/>
EXPERIENCE<br/> 
EVOLVE</text></h1>
              <p className="text-lg font-bold max-sm:text-black text-center">
                with India's Best Trekking Organization
              </p>
              <div className="w-full flex justify-center items-center">
              <Link href={'/trek'}>
              <button className=" bg-[rgba(1,124,109,1)] min-h-[69px] max-w-full gap-1 text-md font-bold mt-[26px] px-[33px] py-[19px] rounded-[40px] max-md:px-5 hover:bg-[rgba(1,104,89,1)] transition-colors text-center">
                Book Now
              </button>
              </Link></div>
            </div>
            <div className="self-center flex items-center gap-[15px] mt-[20px] max-md:mt-10">
              {images.map((_, index) => <div key={index} onClick={() => goToImage(index)} className={`cursor-pointer ${index === currentImageIndex ? "bg-white" : "bg-[rgba(217,217,217,0.5)]"} self-stretch flex w-1.5 shrink-0 h-1.5 my-auto rounded-[50%]`} />)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;