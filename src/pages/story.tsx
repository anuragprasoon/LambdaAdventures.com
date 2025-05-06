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
      <section className="mb-40 max-md:mb-[20px]">
      <h1 className="w-full text-4xl text-[rgba(1,124,109,1)] font-bold text-center leading-loose max-md:max-w-full max-md:text-[28px] max-md:mt-[30px]">
        About Us
      </h1>
      <p className="w-full text-base text-[rgba(67,67,67,1)] font-normal leading-[30px] mt-[10px] max-md:max-w-full">
      At Lambda Adventures, our journeys start with a simple idea: exploring together. When you sign up for a trek, mountain climb, or yoga retreat with us, you’re not just booking a trip-you’re joining a group of people who care about the outdoors and each other. We know what it’s like to feel both excited and a little unsure before heading into the mountains, so we make sure you always have someone to count on, from your first question to your last step.
      </p>
      <p className="w-full text-base text-[rgba(67,67,67,1)] font-normal leading-[30px] mt-[10px] max-md:max-w-full">
      Along the way, our guides are there to walk beside you. They’ll share stories from the trail, help you through tough moments, and make sure everyone feels included. We listen to what you want from your adventure, whether it’s reaching a summit, trying something new, or just enjoying a quiet moment in nature. Our trips are shaped by the people who join us, and we do our best to make everyone feel welcome.
      </p>
      <p className="w-full text-base text-[rgba(67,67,67,1)] font-normal leading-[30px] mt-[10px] max-md:max-w-full">
      When the journey ends, what stays with you isn’t just the view or the challenge-it’s the people you met and the moments you shared. At Lambda Adventures, we focus on honest connections and real experiences, helping you discover something new about the world and yourself, one step at a time.
      </p>
    </section>
    </div>
        </>
    )
}