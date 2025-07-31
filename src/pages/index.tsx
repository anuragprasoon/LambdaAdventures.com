import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ContactForm from "@/components/ContactForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdventureCallout from "@/components/AdventureCallout";
import TrekSection from "@/components/TrekSection";
import FeaturesSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import PopUp from "@/components/popup";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const testimonials = [{
  quote: '"Had an amazing experience volunteering with Yaswanth on the trek to Hari Hara Betta this Republic Day! The views were stunning, and the journey was truly unforgettable. Kudos to Lambda Adventures for organizing such a wonderful event!"',
  imageSrc: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746543799/lamda_user_sjsw1t.png",
  name: "Tony Abhinash",
  location: "Ranchi, India"
}, {
  quote: '"Best team. Lambda Adventures prioritizes responsible tourism, supporting local communities and minimizing environmental impact. India\'s Best travel company. India\'s best trekking company. India\'s leading trekking and expedition company."',
  imageSrc: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746543798/lamda_user2_owhmab.png",
  name: "Manu",
  location: "Ranchi, India"
}, {
  quote: '"Very good experience of a day trip to DHARAGIRI falls in Ghatshila with a group of 11 school students belonging to nature club. Lambda adventures made the experience pleasant and enjoyable. Thanks to Lambda Adventures"',
  imageSrc: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746543799/lamda_user3_xml73z.png",
  name: "Tania Mukhopadhyay",
  location: "Ranchi, India"
}];

const upcomingTreks = [{
    "id": 111,
    "created_at": "2025-05-16T18:26:59.463123+00:00",
    "title": "Chandrashila Trek",
    "type": "Trek",
    "status": null,
    "imageSrc": "https://lambdaadventures.com/wp-content/uploads/2024/03/Chandrashila-Trek-800x600.jpg",
    "location": "Uttarakhand",
    "duration": "3 Days",
    "difficulty": "Easy–Moderate",
    "altitude": "12100 Ft",
    "distance": "9Km",
    "price": "₹9500",
    "description": null,
    "itinerary": null,
    "inclusions": null,
    "exclusions": null,
    "images": null,
    "youtube": null,
    "mapurl": null,
    "slots": null
},
{
  "id":110,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909231/Chandratal-Trek_iudmmv.webp",
  "title": "Chandratal Trek",
  "location": "Himachal Pradesh",
  "dates": "10 May - 14 May",
  "duration": "4 Days",
  "distance": "80 km",
  "difficulty": "Moderate",

},
{
  "id":109,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909234/Deoriatal-Chandrashila-Trek_yjt3oi.webp",
  "title": "Deoriatal Chandrashila Trek",
  "location": "Uttarakhand",
  "dates": "10 May - 16 May",
  "duration": "6 Days",
  "distance": "32 km",
  "difficulty": "Easy to Moderate",

},
{
  "id":77,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905007/brahmatal_xh3yar.webp",
  "title": "Brahma Tal Trek",
  "location": "Uttarakhand",
  "dates": "10 May - 16 May",
  "duration": "6 Days",
  "distance": "30 km",
  "difficulty": "Easy to Moderate",

},
{
  "id":78,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905042/ali-bugyal_ipylmr.webp",
  "title": "Ali Bedni Bugyal Trek",
  "location": "Uttarakhand",
  "dates": "May to June & September to October",
  "duration": "6 Days",
  "distance": "35 km",
  "difficulty": "Easy to Moderate",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
}
];

const popularTreks = [{
  "id":79,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905052/Everest-Base-Camp_exwewg.webp",
  "title": "Everest Base Camp Trek",
  "location": "Nepal",
  "dates": "10 May - 16 May",
  "duration": "16 Days",
  "distance": "130 km",
  "difficulty": "Difficult",
},
{
  "id":80,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905140/bali-pass_c7wakm.webp",
  "title": "Bali Pass",
  "location": "Uttarakhand",
  "dates": "10 May - 18 May",
  "duration": "8 Days",
  "distance": "66 km",
  "difficulty": "Difficult",
},
{
  "id":81,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905148/beas-kund_bbmw24.webp",
  "title": "Beas Kund",
  "location": "Himachal Pradesh",
  "dates": "10 May - 14 May",
  "duration": "4 Days",
  "distance": "15 km",
  "difficulty": "Easy to Moderate",
},
{
  "id":82,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905887/bhrigu-lake_lc3o4l.webp",
  "title": "Bhrigu Lake Trek",
  "location": "Himachal Pradesh",
  "dates": "10 May - 14 May",
  "duration": "4 Days",
  "distance": "10 km",
  "difficulty": "Moderate",
},
{
  "id":83,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909314/buran-ghati_laaalk.webp",
  "title": "Buran Ghati Trek",
  "location": "Himachal Pradesh",
  "dates": "10 May - 18 May",
  "duration": "8 Days",
  "distance": "65 Kms",
  "difficulty": "Moderate to Difficult",
}];

const features = [{
  iconSrc: "/Note.json",
  title: "Expertly Organized",
  description: "With years of experience, we plan every trek to perfection—ensuring a smooth, safe, and unforgettable adventure."
}, {
  iconSrc: "/Shield.json",
  title: "Scenic & Safe Routes",
  description: "We choose the best and safest trails, prioritizing your security while showcasing nature's finest views."
}, {
  iconSrc: "/User.json",
  title: "Local Expert Guides",
  description: "Our friendly, knowledgeable guides are locals who offer deep insight into the region's culture, wildlife, and terrain."
}, {
  iconSrc: "/Leaf.json",
  title: "Eco-Friendly Treks",
  description: "We trek responsibly—following sustainable practices to protect and preserve nature every step of the way."
}];

export default function Home() {
  useEffect(()=>{
  AOS.init();
},[]) 

  return (
    <>
      <Head>
        <title>Lambda Adventures</title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        
      </Head>
      <div className="px-[6%]">
      <Hero/>
      <TrekSection title="Upcoming" treks={upcomingTreks} />
      <TrekSection title="Popular" treks={popularTreks} />
       <div>
        <h1 className="text-[rgba(1,124,109,1)] text-4xl font-bold leading-none text-center max-md:max-w-full max-md:text-[28px] mt-10" data-aos="slide-right">
          Our Travel Stories
      </h1>
        <div className="flex py-[40px] w-full justify-between gap-5 overflow-y-none overflow-x-auto [&::-webkit-scrollbar]:hidden max-md:max-w-full overflow-y-clip">
          <div className="relative w-full" data-aos="slide-right">
          <img src="https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909231/Chandratal-Trek_iudmmv.webp" className=" h-[400px] hidden"/>

          <iframe className=" rounded-lg h-[350px] w-full min-w-[280px]" src="https://www.youtube-nocookie.com/embed/u5orczW-tFk?si=WfNR0LPPxOBK2mCf" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true} loading="lazy"></iframe>
          </div>

          <div className="relative w-full" data-aos="slide-up">
          <img src="https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909231/Chandratal-Trek_iudmmv.webp" className=" h-[400px] hidden "/>

          <iframe className="rounded-lg h-[350px] w-full min-w-[280px]" src="https://www.youtube-nocookie.com/embed/Ua4iV8uU-mA?si=D4fkAGoQ6TxBb5nu" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true} loading="lazy"></iframe>
          </div>

          <div className="relative w-full" data-aos="slide-left">
          <img src="https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909231/Chandratal-Trek_iudmmv.webp" className=" h-[400px] hidden "/>

          <iframe className="rounded-lg  h-[350px] w-full min-w-[280px]" src="https://www.youtube-nocookie.com/embed/bNX8gD8L-_8?si=VAWS5PpFiRN5Nf1Q" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={true}  loading="lazy"></iframe>
          </div>  
          
        </div>
      </div>

      <div className=" rounded-lg  w-full sm:flex border relative">
         <video src="https://videos.pexels.com/video-files/32142741/13704724_2560_1440_60fps.mp4" data-aos="fade-up" 
         autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="none"
         className="w-full h-[350px] object-cover rounded-lg" />
         
        <div className="p-10 text-white text-[16px] font-normal absolute top-1/2 -translate-y-1/2 " data-aos="fade-up">
          <h3 className="text-white text-4xl font-bold leading-none mb-4" >
            Plan a Custom Trip with us
          </h3>
          <p>
           <text className="font-bold ">“Bag bharo, doston ko tag karo, aur chalo kahin door 🏔️…”</text><br/>
You drop the destination, we’ll handle the rest, <text className="font-bold">no Excel sheets, no chinta, just vibes.</text>
          </p><br/>
          <Link href="/customtrek" className=""><button className="bg-[rgb(1,124,109)] text-white max-sm:w-[300px] p-4 rounded-lg font-semibold">Plan a Trip</button></Link>
        </div>
       



      </div>
      





      <FeaturesSection features={features}/>
      <TestimonialsSection />
      </div>
      <div className="fixed bottom-2 right-2">
        <a href="https://api.whatsapp.com/send/?phone=919065550642&text=Hi%20Lambda%20Adventures,%20I%20want%20to%20plan%20a%20trip">
          <img src="https://res.cloudinary.com/dibrmj6nh/image/upload/v1747946474/Frame_1597884222_xnchxt.png" className="w-[50px]"/>
        </a>
      </div>
      <PopUp/>
    </>
  );
}
