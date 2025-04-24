import Head from "next/head";
import TrekSection from "@/components/TrekSection";
import TrekHero from "@/components/Hero3";
import Faqs from "@/components/Faqs";
import TrekAbout from "@/components/Aboutrek/About";
import TrekDetails from "@/components/Aboutrek/Detail";

const popularTreks = [{
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/45cebc0808498914db6f5f9e8ceb06fe989e8bb5?placeholderIfAbsent=true",
    title: "Chandrashila Trek",
    location: "Himachal Pradesh",
    dates: "22 Oct – 27 Oct",
    duration: "5 Days, 4 Nights",
    distance: "9 km",
    difficulty: "Moderate",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c78b42c43ac18291961706e53a80daf2860c05cd?placeholderIfAbsent=true",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb1828659fa21ee1886a498b0ac8f906577ed0d2?placeholderIfAbsent=true",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a9a5f3e1e17750cac30fb8dedd1d89c542cf7c3e?placeholderIfAbsent=true",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1cb7539d47c7cc3b499f95de1d8fabce29757f9c?placeholderIfAbsent=true"
  }, {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffc78d0ccbb2717b7d8dc02bf897072ed4a1c3c5?placeholderIfAbsent=true",
    title: "Chandrashila Trek",
    location: "Himachal Pradesh",
    dates: "22 Oct – 27 Oct",
    duration: "5 Days, 4 Nights",
    distance: "9 km",
    difficulty: "Moderate",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ad45f075284efb48f18c6d16a98c7071ac6ed7e?placeholderIfAbsent=true",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc692e905e8970fcbb065c93d7a0fa691585954c?placeholderIfAbsent=true",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d410b8104705dbebee10ea6bcb951199ae6f0e1?placeholderIfAbsent=true",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/a279ac1af07bfa6b5b4501ab04dea24ea08bd5b6?placeholderIfAbsent=true"
  }, {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7763efce8d843787118ada5a9f6bbf42b9b51caa?placeholderIfAbsent=true",
    title: "Chandrashila Trek",
    location: "Himachal Pradesh",
    dates: "22 Oct – 27 Oct",
    duration: "5 Days, 4 Nights",
    distance: "9 km",
    difficulty: "Moderate",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/de023415d53ab049720a040eb55a9360db4799c4?placeholderIfAbsent=true",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/42e83d894df0ef448ab8a8c643e384428952fc00?placeholderIfAbsent=true",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/d63f0c5ce5909640a5c01e5dff030e5468f696d8?placeholderIfAbsent=true",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2182ab57bc4f0c3fb9f520096d2f2dcd6f8f1bec?placeholderIfAbsent=true"
  }, {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/45cebc0808498914db6f5f9e8ceb06fe989e8bb5?placeholderIfAbsent=true",
    title: "Chandrashila Trek",
    location: "Himachal Pradesh",
    dates: "22 Oct – 27 Oct",
    duration: "5 Days, 4 Nights",
    distance: "9 km",
    difficulty: "Moderate",
    locationIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/eacecd33b3e156b441471b5885bd65122973a3ba?placeholderIfAbsent=true",
    dateIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb1828659fa21ee1886a498b0ac8f906577ed0d2?placeholderIfAbsent=true",
    distanceIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/361b80f5d82207ab4e07902add203f2afe76ca9d?placeholderIfAbsent=true",
    difficultyIconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5acaed8ecbb741a86d3d609c6dc83902f76de8f?placeholderIfAbsent=true"
  }];

export default function Trekabout() {
    <>
     <Head>
        <title>Trek Name | Lambda Adventures</title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TrekHero/>
      <TrekAbout/>
      <TrekDetails/>
      <Faqs/>
      <TrekSection title="Recommendation for you" treks={popularTreks}/>
    </>
}