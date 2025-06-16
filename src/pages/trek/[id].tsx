import Head from "next/head";
import TrekAbout from "@/components/About";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function DynamicTrek() {
  const router = useRouter();
  const { id } = router.query;

  const [trip, setTrip] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => console.log("Razorpay script loaded!");
    document.body.appendChild(script);

    // Fetch trip data
    const fetchTrip = async () => {
      const res = await fetch(`/api/trips/${id}`);
      if (res.ok) {
        const data = await res.json();
        setTrip(data);
      }
      setLoading(false);
    };

    fetchTrip();
  }, [id]);

  const handlePayment = async () => {
    const price = trip?.price || 1000;

    const response = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: price, currency: "INR", receipt: `trip-${id}` }),
    });

    const data = await response.json();
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEYID,
      amount: price * 100,
      currency: "INR",
      order_id: data.id,
      handler: (response: any) => {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
    };

    const pay = new (window as any).Razorpay(options);
    pay.open();
  };

  if (loading) return <div className="p-8 text-center">Loading trip...</div>;
  if (!trip) return <div className="p-8 text-center text-red-500">Trip not found.</div>;

  return (
    <>
      <Head>
        <title>{trip.title} | Lambda Adventures</title>
        <meta name="description" content={trip.description || "Join the adventure with Lambda Adventures!"} />
        <meta property="og:image" content={trip.imageSrc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TrekAbout payFunc={handlePayment} trip={trip} />

      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1yCZDSeqrxtbLSdFFVJ_fLb8ODkDxEOs&ehbc=2E312F&noprof=1"
        className="w-full p-10 h-[500px]"
      ></iframe>
    </>
  );
}
