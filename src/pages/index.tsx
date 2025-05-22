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

const upcomingTreks = [    {
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909217/Chandrashila-Trek_cbwfkp.webp",
  "title": "Chandrashila Trek",
  "location": "Uttarakhand",
  "dates": "10 May - 13 May",
  "duration": "3 Days, 2 Nights",
  "distance": "9 km",
  "difficulty": "Easy-Moderate",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  "dateIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
  "distanceIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e",
  "difficultyIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
},
{
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909231/Chandratal-Trek_iudmmv.webp",
  "title": "Chandratal Trek",
  "location": "Himachal Pradesh",
  "dates": "10 May - 14 May",
  "duration": "4 Days",
  "distance": "80 km",
  "difficulty": "Moderate",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  "dateIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
  "distanceIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e",
  "difficultyIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
},
{
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909234/Deoriatal-Chandrashila-Trek_yjt3oi.webp",
  "title": "Deoriatal Chandrashila Trek",
  "location": "Uttarakhand",
  "dates": "10 May - 16 May",
  "duration": "6 Days",
  "distance": "32 km",
  "difficulty": "Easy to Moderate",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  "dateIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
  "distanceIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e",
  "difficultyIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
},
{
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905007/brahmatal_xh3yar.webp",
  "title": "Brahma Tal Trek",
  "location": "Uttarakhand",
  "dates": "10 May - 16 May",
  "duration": "6 Days",
  "distance": "30 km",
  "difficulty": "Easy to Moderate",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  "dateIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
  "distanceIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e",
  "difficultyIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
},
{
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905042/ali-bugyal_ipylmr.webp",
  "title": "Ali Bedni Bugyal Trek",
  "location": "Uttarakhand",
  "dates": "May to June & September to October",
  "duration": "6 Days",
  "distance": "35 km",
  "difficulty": "Easy to Moderate",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb1828659fa21ee1886a498b0ac8f906577ed0d2",
  distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e",
  difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cb7539d47c7cc3b499f95de1d8fabce29757f9c"
}
];

const popularTreks = [{
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905052/Everest-Base-Camp_exwewg.webp",
  "title": "Everest Base Camp Trek",
  "location": "Nepal",
  "dates": "10 May - 16 May",
  "duration": "16 Days",
  "distance": "130 km",
  "difficulty": "Difficult",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  "dateIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
  "distanceIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e",
  "difficultyIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
},
{
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905140/bali-pass_c7wakm.webp",
  "title": "Bali Pass",
  "location": "Uttarakhand",
  "dates": "10 May - 18 May",
  "duration": "8 Days",
  "distance": "66 km",
  "difficulty": "Difficult",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  "dateIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
  "distanceIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e",
  "difficultyIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
},
{
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905148/beas-kund_bbmw24.webp",
  "title": "Beas Kund",
  "location": "Himachal Pradesh",
  "dates": "10 May - 14 May",
  "duration": "4 Days",
  "distance": "15 km",
  "difficulty": "Easy to Moderate",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  "dateIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
  "distanceIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e",
  "difficultyIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
},
{
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905887/bhrigu-lake_lc3o4l.webp",
  "title": "Bhrigu Lake Trek",
  "location": "Himachal Pradesh",
  "dates": "10 May - 14 May",
  "duration": "4 Days",
  "distance": "10 km",
  "difficulty": "Moderate",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  "dateIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
  "distanceIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e",
  "difficultyIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
},
{
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909314/buran-ghati_laaalk.webp",
  "title": "Buran Ghati Trek",
  "location": "Himachal Pradesh",
  "dates": "10 May - 18 May",
  "duration": "8 Days",
  "distance": "65 Kms",
  "difficulty": "Moderate to Difficult",
  "locationIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  "dateIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
  "distanceIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff@30e5468f696d8",
  "difficultyIconSrc": "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
}];

const features = [{
  iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/35b29ad2017f182697e06c654cc76765ff7f857f",
  title: "Expertly Organized",
  description: "With years of experience, we plan every trek to perfection—ensuring a smooth, safe, and unforgettable adventure."
}, {
  iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9fde748476ec68c0fd7523185facd845b94e6d3",
  title: "Scenic & Safe Routes",
  description: "We choose the best and safest trails, prioritizing your security while showcasing nature's finest views."
}, {
  iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4fc371824c8eb26dccaf61c5b5e10b217943c420",
  title: "Local Expert Guides",
  description: "Our friendly, knowledgeable guides are locals who offer deep insight into the region's culture, wildlife, and terrain."
}, {
  iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b07c606800e261d8f5e2852dc83af300fc568a17",
  title: "Eco-Friendly Treks",
  description: "We trek responsibly—following sustainable practices to protect and preserve nature every step of the way."
}];

export default function Home() {
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
        <h1 className="text-[rgba(1,124,109,1)] text-4xl font-bold leading-none text-center max-md:max-w-full max-md:text-[28px] mt-10">
          Our Travel Stories
      </h1>
        <div className="flex py-[40px] w-full justify-between gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden max-md:max-w-full">
          <div className="relative w-full">
          <img src="https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909231/Chandratal-Trek_iudmmv.webp" className=" h-[400px] hidden"/>

          <iframe className=" rounded-lg h-[350px] w-full min-w-[280px]" src="https://www.youtube-nocookie.com/embed/u5orczW-tFk?si=WfNR0LPPxOBK2mCf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="relative w-full">
          <img src="https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909231/Chandratal-Trek_iudmmv.webp" className=" h-[400px] hidden "/>

          <iframe className="rounded-lg h-[350px] w-full min-w-[280px]" src="https://www.youtube-nocookie.com/embed/Ua4iV8uU-mA?si=D4fkAGoQ6TxBb5nu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="relative w-full">
          <img src="https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909231/Chandratal-Trek_iudmmv.webp" className=" h-[400px] hidden "/>

          <iframe className="rounded-lg  h-[350px] w-full min-w-[280px]" src="https://www.youtube-nocookie.com/embed/bNX8gD8L-_8?si=VAWS5PpFiRN5Nf1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>  
          
        </div>
      </div>
      <div className="max-sm:hidden">
      <Link href={'/contact'}><Image
  src="https://res.cloudinary.com/anuragprasoon/image/upload/v1745615313/adventurecallout_kdpc4k.png"
  alt="Adventure Callout"
  width={1200}
  height={800}
  layout="responsive"
  loader={({ src }) => src}/></Link>
      </div>
     

<div className="sm:hidden">
      <Link href={'/contact'}><Image
  src="https://res.cloudinary.com/anuragprasoon/image/upload/v1745647359/adventurecallout-md_peiee0.png"
  alt="Adventure Callout"
  width={1200} // Original width of the image
  height={800} // Original height of the image
  layout="responsive"
  loader={({ src }) => src} // Makes the image responsive and adjusts based on container width
/></Link>
</div>
      <FeaturesSection features={features}/>
      <TestimonialsSection testimonials={testimonials}/>
      </div>
      <section id="contact">
      <ContactForm/>
      </section>
      <div className="fixed bottom-2 right-2">
        <a href="https://api.whatsapp.com/send/?phone=919065550642&text=Hi%20Lambda%20Adventures,%20I%20want%20to%20plan%20a%20trip">
          <img src="https://res.cloudinary.com/dibrmj6nh/image/upload/v1747946474/Frame_1597884222_xnchxt.png" className="w-[50px]"/>
        </a>
      </div>
    </>
  );
}
