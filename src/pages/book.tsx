import Head from "next/head"
import StoryHero from "@/components/Story/Hero"
import Razorpay from "razorpay"
import { useEffect } from "react"

const razorpaykey=process.env.NEXT_PUBLIC_RAZORPAY_KEYID!

export default function Book() {
    useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay script loaded!");
    document.body.appendChild(script);
  }, []);

    const handlePayment = async () => {
        if (typeof window.Razorpay === "undefined") {
          console.error("Razorpay is not loaded!");
    return;
  }
    const price = 1000; 
    console.log(razorpaykey)
    const response = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: price, currency: "INR", receipt: 'r#1'}),
    });
    
     const data = await response.json()
     const orderID= data.id
     console.log(orderID)
     
     const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEYID,
    amount: price * 100,
    currency: "INR",
    order_id: orderID,
    handler: (response: RazorpayResponse) => {
      alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
    },
  };

  console.log("Creating Razorpay instance...");
  const pay = new window.Razorpay(options);
  pay.open();

    }
    return(
        <>
        <Head>
        <title>Lambda Adventures - Info </title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       </Head>
       <StoryHero/>
       <button onClick={handlePayment}>pay now</button>

    </>
    )
}