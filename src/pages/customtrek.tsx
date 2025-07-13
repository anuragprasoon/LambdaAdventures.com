import Head from "next/head";
import ContactForm from "@/components/ContactForm";

export default function CustomTrek() {
    return(
        <>
        <Head>
        <title>Plan Trip with Us | Lambda Adventures</title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="urbanist p-10 text-center text-black bg-white">
<h3 className="text-[40px] text-[#017c6d] font-bold">Plan A Custom Trip</h3>
<p>Interested in Treks, Expeditions or Bike Trips? Plan a trip with us today.
</p>

<div className="mt-5">

<div className=" w-[360px] ml-auto mr-auto">
<h3 className=" font-bold text-[24px] mb-3">Custom Trip</h3>
  <form>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="text" placeholder="Name"/>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="Phone"/>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="email" placeholder="E-Mail"/>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="text" placeholder="Trip Location"/>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="No. of Passengers"/>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="text" placeholder="Trip Starting Date : mm/dd/yy"/>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="No. of Days"/>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="No. of Nights"/>
    
  <button className="bg-[#172525] text-white p-2 w-[150px] rounded"type="submit">Send A Enquiry</button>
  </form>
  
</div>


</div>

</div>
    <div className="flex mt-5 gap-2 overflow-x-auto hide-scrollbar bg-[#02070a] p-10 rounded">
                <img className="h-[300px] w-[400px] object-cover rounded" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1752405701/lambda-adventures/trip_thumb/Shivay-Rental-Sar-Pass-Trek.jpg"/>

                <img className="h-[300px] w-[400px] object-cover rounded" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1752405146/lambda-adventures/trip_thumb/har-ki-dun.jpg"/>

                <img className="h-[300px] w-[400px] object-cover rounded" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1752374904/lambda-adventures/trip_thumb/mtyun.webp"/>
            </div>
      </>
    )
}