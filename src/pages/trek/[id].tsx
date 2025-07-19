import Head from "next/head";
import TrekAbout from "@/components/About";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TrekSection from "@/components/TrekSection";
import CustomTrip from "@/components/CustomForm";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Block from "@mui/icons-material/Block";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MapIcon from '@mui/icons-material/Map';
import SpeedIcon from '@mui/icons-material/Speed';
import Link from "next/link";

export default function DynamicTrek() {
  const popularTreks = [{
  "id":79,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905052/Everest-Base-Camp_exwewg.webp",
  "title": "Everest Base Camp Trek",
  "location": "Nepal",
  "dates": "10 May - 16 May",
  "duration": "16 Days",
  "distance": "130 km",
  "difficulty": "Difficult",
},
{
  "id":80,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905140/bali-pass_c7wakm.webp",
  "title": "Bali Pass",
  "location": "Uttarakhand",
  "dates": "10 May - 18 May",
  "duration": "8 Days",
  "distance": "66 km",
  "difficulty": "Difficult",
},
{
  "id":81,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905148/beas-kund_bbmw24.webp",
  "title": "Beas Kund",
  "location": "Himachal Pradesh",
  "dates": "10 May - 14 May",
  "duration": "4 Days",
  "distance": "15 km",
  "difficulty": "Easy to Moderate",
},
{
  "id":82,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745905887/bhrigu-lake_lc3o4l.webp",
  "title": "Bhrigu Lake Trek",
  "location": "Himachal Pradesh",
  "dates": "10 May - 14 May",
  "duration": "4 Days",
  "distance": "10 km",
  "difficulty": "Moderate",
},
{
  "id":83,
  "imageSrc": "https://res.cloudinary.com/dibrmj6nh/image/upload/v1745909314/buran-ghati_laaalk.webp",
  "title": "Buran Ghati Trek",
  "location": "Himachal Pradesh",
  "dates": "10 May - 18 May",
  "duration": "8 Days",
  "distance": "65 Kms",
  "difficulty": "Moderate to Difficult",
}];
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

      <div className="sm:flex gap-5 px-10 text-black">

<div className="max-sm:hidden min-w-[300px] sm:w-[30%] ">
  <div className="p-5 border-1 rounded-md w-full">
      <div className="w-full text-2xl font-semibold mb-2">{trip.title}</div>
      <div className=" sm:text-lg flex item-center mb-2"><LocationOnIcon className="text-[#017C6D] mr-3" /> <text>{trip.location}</text></div>
      <div className="  sm:text-lg flex item-center mb-2"><DateRangeIcon className="text-[#017C6D] mr-3" />  <text>{trip.duration}</text></div>
      <div className=" sm:text-lg flex  item-center mb-2"><MapIcon className="text-[#017C6D] mr-3" /><text>{trip.distance}</text></div>
      <div className=" sm:text-lg flex  item-center mb-2"><SpeedIcon className="text-[#017C6D] mr-3" /> <text>{trip.difficulty}</text></div>
      <Link href="/customtrek"><button className="block w-full rounded-sm p-2 mb-2 border-1 border-[#017C6D] mt-1 text-[#017C6D] font-bold">Request A Custom Trip</button></Link>
      <Link href="#plan-trip"><button className="block w-full rounded-sm p-2 bg-[#017C6D] mt-1 text-white font-bold">Send A Enquiry</button></Link>

  </div>
  <div className="max-sm:hidden p-5 mt-5 border-1 rounded-md">
      <h3 className=" font-semibold text-[24px] mb-3" id="plan-trip">Plan A Trip with Us Now</h3>
      <form >
        <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="text" placeholder="Name"/>
        <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="Phone"/>
        <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="email" placeholder="E-Mail"/>
        <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="text" placeholder="Trip Location"/>
        <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="No. of Passengers"/>
        <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="text" placeholder="Trip Starting Date : mm/dd/yy"/>
        <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="No. of Days"/>
        <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="No. of Nights"/>
        <button className="bg-[#017C6D] text-white p-2 w-[150px] rounded w-full" type="submit">Send Enquiry</button>
     </form>
  </div>
  </div>

<div className="sm:w-[70%] order-first">
<img className="w-full h-[350px] object-cover rounded mb-4" src={trip.imageSrc} alt={trip.title} />

<h1 className="text-3xl font-bold py-4">{trip.title}</h1>
<div className="sm:hidden rounded-md w-full mb-5">
      <div className=" sm:text-lg flex item-center mb-2"><LocationOnIcon className="text-[#017C6D] mr-3" /> <text>{trip.location}</text></div>
      <div className="  sm:text-lg flex item-center mb-2"><DateRangeIcon className="text-[#017C6D] mr-3" />  <text>{trip.duration}</text></div>
      <div className=" sm:text-lg flex  item-center mb-2"><MapIcon className="text-[#017C6D] mr-3" /><text>{trip.distance}</text></div>
      <div className=" sm:text-lg flex  item-center mb-2"><SpeedIcon className="text-[#017C6D] mr-3" /> <text>{trip.difficulty}</text></div>
      <Link href="/customtrek"><button className="block w-full rounded-sm p-2 mb-2 border-1 border-[#017C6D] mt-1 text-[#017C6D] font-bold">Request A Custom Trip</button></Link>
      <button className="block w-full rounded-sm p-2 bg-[#017C6D] mt-1 text-white font-bold">Book Now</button>

  </div>
 <p>{trip.description}</p><br/>

<p>Aliquam erat volutpat. Integer ac felis at sem congue maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec congue tincidunt libero, nec posuere libero. Ut sed blandit nulla. Morbi eu tortor rhoncus, eleifend libero sit amet, congue nulla. Sed auctor imperdiet orci, a tristique lorem consequat a. Nunc suscipit ante a nisi placerat, in pretium sapien convallis.</p>

<h2 className="mt-4 text-3xl font-bold py-4">What's Inside the Package?</h2>
<div className="sm:flex mb-4  rounded gap-2">

	<div className=" p-5 rounded">
    	<h3 className="text-2xl font-bold mb-3">Inclusions</h3>
        <div className="flex items-center">
        	<CheckCircle className="text-[#175725] mr-3" /><text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>

        <div className="flex items-center">
        <CheckCircle className="text-[#175725] mr-3" /><text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>

        <div className="flex items-center">
        	<CheckCircle className="text-[#175725] mr-3" /><text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>

        <div className="flex items-center">
        	<CheckCircle className="text-[#175725] mr-3" /><text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>
        <div className="flex items-center">
        	<CheckCircle className="text-[#175725] mr-3" /><text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>
        <div className="flex items-center">
        	<CheckCircle className="text-[#175725] mr-3" /><text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>
        <div className="flex items-center">
        	<CheckCircle className="text-[#175725] mr-3" /><text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>
    </div>

    <div className="  p-5 rounded">
    	<h3 className="text-2xl font-bold mb-3">Exclusions</h3>
        <div className="flex items-center">
    <Block className="text-[#ff0000] mr-3" />
        	<text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>

        <div className="flex items-center">
        <Block className="text-[#ff0000] mr-3" />
        	<text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>

        <div className="flex items-center">
        	<Block className="text-[#ff0000] mr-3" /><text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>
        <div className="flex items-center">
        	<Block className="text-[#ff0000] mr-3" /><text>3 nights stay in Maldives with breakfast, lunch, and dinner</text>
        </div>
    </div>

</div>
<h2 className="text-3xl font-bold py-4">Know Before You Go</h2>
<ul className="px-5 list-disc">
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
</div>

</div>

     {/**  <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1yCZDSeqrxtbLSdFFVJ_fLb8ODkDxEOs&ehbc=2E312F&noprof=1"
        className="w-full p-10 h-[500px]"
      ></iframe>*/}

      <div className="pl-10 pr-10 pb-10">
        <TrekSection title="Trips You May Like" treks={popularTreks} />
      </div>
      <div className="fixed bottom-2 right-2">
        <a href="https://api.whatsapp.com/send/?phone=919065550642&text=Hi%20Lambda%20Adventures,%20I%20want%20to%20plan%20a%20trip">
          <img src="https://res.cloudinary.com/dibrmj6nh/image/upload/v1747946474/Frame_1597884222_xnchxt.png" className="w-[50px]"/>
        </a>
      </div>
    </>
  );
}
