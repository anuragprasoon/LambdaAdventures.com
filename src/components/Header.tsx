
import React , { useState }from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';




const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
    <div className=" urbanist bg-white flex w-full items-center gap-[40px_100px] overflow-hidden text-[16px] text-black font-medium leading-none justify-between flex-wrap pl-[78px] pr-20 py-5 mx-auto max-md:max-w-full max-md:mr-0.5 max-md:px-5">
      <Link href="/"><img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2fa7c30181431a02d611b8ae9935850086686e9?placeholderIfAbsent=true"
        alt="Company Logo"
        className="aspect-[3.38] object-contain w-[142px] self-stretch shrink-0 my-auto"
      /></Link>
      <div className="self-stretch flex items-center gap-[26px] flex-wrap my-auto max-md:max-w-full">
      <div className="max-md:hidden self-stretch my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
          <Link  href={'/'}>Home</Link>
        </div>
        <div className="max-md:hidden self-stretch my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
          <Link  href={'/trek'}>Treks</Link>
        </div>
        <div className="max-md:hidden self-stretch my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
        <Link  href={'/expeditions'}>Expeditions</Link>
        </div>
        <div className="max-md:hidden self-stretch my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
        <Link  href={'/bike'}>Bike Expeditions</Link>
        </div>
        <div className=" max-md:hidden self-stretch my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
          <Link href={'https://sacredpause.in'}>Yoga Retreat</Link>
        </div>
        <div className="max-md:hidden self-stretch my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
        <Link  href={'/contact'}>Contact Us</Link>
        </div>
        <div className="md:hidden self-stretch ml-auto my-auto cursor-pointer hover:text-[rgba(1,124,109,1)]">
        <MenuIcon className="text-2xl" onClick={() => setIsOpen(true)}/>
        </div>

      </div>
    </div>

    {isOpen && (
      <div
        className="fixed inset-0 z-40 bg-opacity-80"
        onClick={() => setIsOpen(false)}
      />
    )}

    <div className={`md:hidden ${isOpen ? "flex" : "hidden"} top-0 right-0 h-screen w-[200px] float-right bg-[rgba(1,124,109,1)] flex-col items-start justify-start space-y-10 p-6 fixed z-50`}>

    <div className=" cursor-pointer hover:text-black">
        <CloseIcon className="text-white text-2xl" onClick={() => setIsOpen(false)}/>
    </div>
    <div className="cursor-pointer hover:text-black">
          <Link  href={'/'} onClick={()=>setIsOpen(false)}>Home</Link>
        </div>
    <div className="cursor-pointer hover:text-black">
          <Link  href={'/trek'} onClick={()=>setIsOpen(false)}>Treks</Link>
        </div>
    <div className=" cursor-pointer hover:text-black">
          <Link href={'/expeditions'} onClick={()=>setIsOpen(false)}>Expeditions</Link>  
    </div>
    <div className=" cursor-pointer hover:text-black">
          <Link href={'/bike'} onClick={()=>setIsOpen(false)}>Bike Expedition</Link>  
    </div>
    <div className=" cursor-pointer hover:text-black">
          <Link href={'https://sacredpause.in'} onClick={()=>setIsOpen(false)}>Yoga Retreat</Link>  
    </div>
    <div className=" cursor-pointer hover:text-black">
         <Link  href={'/story'} onClick={()=>setIsOpen(false)}>About Us</Link>
    </div>
    <div className=" cursor-pointer hover:text-black">
        <Link  href={'/contact'} onClick={()=>setIsOpen(false)}>Contact Us</Link>
    </div>
    </div>
    </>
  );
};

export default Header;
