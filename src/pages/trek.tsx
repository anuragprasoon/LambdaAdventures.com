import Head from "next/head"
import TrekSection from "@/components/TrekSection"
import AdventureCallout from "@/components/AdventureCallout";
import { HeroSection } from "@/components/Hero2";
import { FilterTabs } from "@/components/FilterTabs";
import Link from "next/link";
import Image from "next/image";

const popularTreks = [{
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7763efce8d843787118ada5a9f6bbf42b9b51caa",
    title: "Chandrashila Trek",
    location: "Himachal Pradesh",
    dates: "22 Oct – 27 Oct",
    duration: "5 Days, 4 Nights",
    distance: "9 km",
    difficulty: "Moderate",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },{
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7763efce8d843787118ada5a9f6bbf42b9b51caa",
    title: "Chandrashila Trek",
    location: "Himachal Pradesh",
    dates: "22 Oct – 27 Oct",
    duration: "5 Days, 4 Nights",
    distance: "9 km",
    difficulty: "Moderate",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  },{
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7763efce8d843787118ada5a9f6bbf42b9b51caa",
    title: "Chandrashila Trek",
    location: "Himachal Pradesh",
    dates: "22 Oct – 27 Oct",
    duration: "5 Days, 4 Nights",
    distance: "9 km",
    difficulty: "Moderate",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec"
  }, {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/45cebc0808498914db6f5f9e8ceb06fe989e8bb5",
    title: "Chandrashila Trek",
    location: "Himachal Pradesh",
    dates: "22 Oct – 27 Oct",
    duration: "5 Days, 4 Nights",
    distance: "9 km",
    difficulty: "Moderate",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eacecd33b3e156b441471b5885bd65122973a3ba",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb1828659fa21ee1886a498b0ac8f906577ed0d2",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/361b80f5d82207ab4e07902add203f2afe76ca9d",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5acaed8ecbb741a86d3d609c6dc83902f76de8f"
  }];

export default function Trek() {
    return(
        <>
        <Head>
        <title>Lambda Adventures - All Treks & Expeditions </title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="px-[6%]">
      <HeroSection/>
      <FilterTabs/>
      
      
      <div className="mb-[100px] max-sm:hidden ">
      <Link href={'/contact'}><Image
  src="https://res.cloudinary.com/anuragprasoon/image/upload/v1745615313/adventurecallout_kdpc4k.png"
  alt="Adventure Callout"
  width={1200}
  height={800}
  layout="responsive"
  loader={({ src }) => src}
/></Link>
</div>

<div className="sm:hidden mb-[50px]">
      <Link href={'/contact'}><Image
  src="https://res.cloudinary.com/anuragprasoon/image/upload/v1745647359/adventurecallout-md_peiee0.png"
  alt="Adventure Callout"
  width={1200} // Original width of the image
  height={800} // Original height of the image
  layout="responsive"
  loader={({ src }) => src} // Makes the image responsive and adjusts based on container width
/></Link>
</div>
      </div>
        </>
    )
}