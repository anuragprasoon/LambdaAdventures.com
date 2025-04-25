import Head from "next/head"
import StoryHero from "@/components/Story/Hero"

export default function Story() {
    return(
        <>
        <Head>
        <title>Lambda Adventures - Our Story </title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryHero/>
      <div className="px-[6%]">
      <section className="mb-60">
      <h1 className="w-full text-5xl text-[rgba(1,124,109,1)] font-bold text-center leading-loose max-md:max-w-full max-md:text-[40px]">
        About Us
      </h1>
      <p className="w-full text-base text-[rgba(67,67,67,1)] font-normal leading-[30px] mt-[10px] max-md:max-w-full">
        At Lambda Adventures, every trek is more than just a journey—it's a path
        to growth, connection, and unforgettable memories. Born from a passion
        for the outdoors and driven by trust, care, and authenticity, we pride
        ourselves on crafting transformative adventures that stay true to our
        word. From the moment you book with us, we become your trusted partner
        in exploration, prioritizing your safety, comfort, and satisfaction at
        every step. Our experienced guides don't just lead treks—they share
        knowledge, build relationships, and tailor each experience to your
        needs, whether you're a seasoned explorer or setting foot on a trail for
        the first time. With a promise of transparency and a commitment to
        value, we ensure every aspect of your journey is thoughtfully curated
        and genuinely rewarding. At Lambda, we believe that exploration isn't
        just about the destination—it's about the stories you collect, the
        limits you push, and the bonds you form. So, whether you're scaling
        mountains or wandering through serene valleys, join us to explore,
        experience, and evolve—because with Lambda Adventures, your next great
        story begins here.
      </p>
    </section>
    </div>
        </>
    )
}