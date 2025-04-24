import Head from "next/head";
import ContactForm from "@/components/ContactForm";

export default function Info() {
    return(
        <>
        <Head>
        <title>Lambda Adventures - Info </title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm/>
      </>
    )
}