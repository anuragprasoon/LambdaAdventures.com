import Head from "next/head"
import StoryHero from "@/components/Story/Hero"
import TrekAbout from "@/components/About"

export default function trekking() {
    return(
        <>
        <Head>
        <title>Chandratal Trek with Hampta Pass | Lambda Adventures </title>
        <meta name="description" content="Experience the Chandratal Lake trek from Manali with LambdaAdventure.com, a popular trekking route in Himachal Pradesh. Starting from Jobra, the trek passes through Chika, Balu ka Ghera, and Hampta Pass, leading to Chandratal Lake at 14,100 feet. Enjoy river crossings, mountain views, and organized support from guides and staff for a safe and memorable trekking experience in the Himalayas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/f38bfb124d56e3ab1c6d7c6027988e0ecc4ebedc" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Chandratal Lake Trek from Manali in Himachal Pradesh with LambdaAdventure.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TrekAbout/>
    </>
    )
}