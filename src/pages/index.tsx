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
  quote: '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
  imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/db7574ae171e5572b7fce803dee7af46d2cf94b7",
  name: "Mike taylor",
  location: "Lahore, Pakistan"
}, {
  quote: '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
  imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/db7574ae171e5572b7fce803dee7af46d2cf94b7",
  name: "Mike taylor",
  location: "Lahore, Pakistan"
}, {
  quote: '"On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no."',
  imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/db7574ae171e5572b7fce803dee7af46d2cf94b7",
  name: "Mike taylor",
  location: "Lahore, Pakistan"
}];

const upcomingTreks = [{
  imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/45cebc0808498914db6f5f9e8ceb06fe989e8bb5",
  title: "Chandrashila Trek",
  location: "Himachal Pradesh",
  dates: "22 Oct – 27 Oct",
  duration: "5 Days, 4 Nights",
  distance: "9 km",
  difficulty: "Moderate",
  locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb1828659fa21ee1886a498b0ac8f906577ed0d2",
  distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/74c7088b1f87c965057e00756a224e5be800786f",
  difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cb7539d47c7cc3b499f95de1d8fabce29757f9c"
}, {
  imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffc78d0ccbb2717b7d8dc02bf897072ed4a1c3c5",
  title: "Chandrashila Trek",
  location: "Himachal Pradesh",
  dates: "22 Oct – 27 Oct",
  duration: "5 Days, 4 Nights",
  distance: "9 km",
  difficulty: "Moderate",
  locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ad45f075284efb48f18c6d16a98c7071ac6ed7e",
  dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc692e905e8970fcbb065c93d7a0fa691585954c",
  distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce20a86a5d70fec7e1b9446b8053f65ed5b7f647",
  difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a279ac1af07bfa6b5b4501ab04dea24ea08bd5b6"
}, {
  imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7763efce8d843787118ada5a9f6bbf42b9b51caa",
  title: "Chandrashila Trek",
  location: "Himachal Pradesh",
  dates: "22 Oct – 27 Oct",
  duration: "5 Days, 4 Nights",
  distance: "9 km",
  difficulty: "Moderate",
  locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4",
  dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00",
  distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dbf2ccd235260cadfc86bef85d7071ef15a0cec",
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
  distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/347615fbc4ad58d81ff446f856db4581ec0055ce",
  difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5acaed8ecbb741a86d3d609c6dc83902f76de8f"
}];

const popularTreks = [{
  imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/45cebc0808498914db6f5f9e8ceb06fe989e8bb5",
  title: "Chandrashila Trek",
  location: "Himachal Pradesh",
  dates: "22 Oct – 27 Oct",
  duration: "5 Days, 4 Nights",
  distance: "9 km",
  difficulty: "Moderate",
  locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd",
  dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb1828659fa21ee1886a498b0ac8f906577ed0d2",
  distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e",
  difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cb7539d47c7cc3b499f95de1d8fabce29757f9c"
}, {
  imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffc78d0ccbb2717b7d8dc02bf897072ed4a1c3c5",
  title: "Chandrashila Trek",
  location: "Himachal Pradesh",
  dates: "22 Oct – 27 Oct",
  duration: "5 Days, 4 Nights",
  distance: "9 km",
  difficulty: "Moderate",
  locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ad45f075284efb48f18c6d16a98c7071ac6ed7e",
  dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc692e905e8970fcbb065c93d7a0fa691585954c",
  distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d410b8104705dbebee10ea6bcb951199ae6f0e1",
  difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a279ac1af07bfa6b5b4501ab04dea24ea08bd5b6"
}, {
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
      <div className="max-sm:hidden">
      <Link href={'/contact'}><Image
  src="https://res.cloudinary.com/anuragprasoon/image/upload/v1745615313/adventurecallout_kdpc4k.png"
  alt="Adventure Callout"
  width={1200}
  height={800}
  layout="responsive"
  loader={({ src }) => src}
/></Link>
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
      
    </>
  );
}
