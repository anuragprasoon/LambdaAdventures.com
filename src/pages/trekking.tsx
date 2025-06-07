import Head from "next/head"
import TrekAbout from "@/components/About"
import Razorpay from "razorpay"
import { useEffect } from "react";


export default function trekking() {

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
        <title>Chandratal Trek with Hampta Pass | Lambda Adventures </title>
        <meta name="description" content="Experience the Chandratal Lake trek from Manali with LambdaAdventure.com, a popular trekking route in Himachal Pradesh. Starting from Jobra, the trek passes through Chika, Balu ka Ghera, and Hampta Pass, leading to Chandratal Lake at 14,100 feet. Enjoy river crossings, mountain views, and organized support from guides and staff for a safe and memorable trekking experience in the Himalayas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/f38bfb124d56e3ab1c6d7c6027988e0ecc4ebedc" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Chandratal Lake Trek from Manali in Himachal Pradesh with LambdaAdventure.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TrekAbout payFunc={ handlePayment }/>
    </>
    )
}