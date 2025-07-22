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
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function DynamicTrek() {

  const [showAnimation, setShowAnimation] = useState(false);
  const [popup, setPopup] = useState(false);

  const popOpen = () => {
    setPopup(true);
  };

  const [formData, setFormData] = useState({
          name: "",
          phone: "",
          email: "",
          address:"",
          passengers: "",
          startDate:"",
          day:"",
          night:"",
        });
  
  const handleChange = (
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
            ...prev,
            [name]: value,
          }));
        };
      
        const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();

          setShowAnimation(true);
          
          const res = await fetch("/api/query", { 
            method: "POST", headers: {
            "Content-Type": "application/json"},
            body: JSON.stringify({
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              address: formData.address,
              passengers: formData.passengers,
              startDate: formData.startDate,
              day: formData.day,
              night: formData.night,
              tripid: trip.id,
            })
        });
        
        
        setTimeout(() => setShowAnimation(false), 2500);
        setPopup(false);
        console.log("Form submitted:", formData);
        alert("Thank You! Your Message has been sent");
      
          setFormData({
            name: "",
            phone: "",
            email: "",
            address:"",
            passengers: "",
            startDate:"",
            day:"",
            night:"",
          });
          
  
        };

        


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
      {showAnimation ? (
              <div className="flex justify-center items-center h-[250px]">
                <DotLottieReact src="/Scene-1.json" width="200px" height="200px" autoplay loop />
              </div>
            ) : (
              <div>
      { Boolean(popup) && (
        <div className="absolute fixed z-[2] top-10  p-10 rounded w-[70%] left-0 right-0 mx-auto text-black bg-white w-full">
          <button className="bg-white rounded-full text-bold m-2 absolute top-10 right-10" onClick={e => setPopup(false)}>X</button>
      <h3 className=" font-semibold text-[24px] mb-3" id="plan-trip">Plan A Trip with Us Now</h3>
      <form onSubmit={handleSubmit}>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="number" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="email" placeholder="E-Mail" name="email" value={formData.email} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="text" placeholder="Trip Location" name="address" value={formData.address} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="number" placeholder="No. of Passengers" name="passengers" value={formData.passengers} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="text" placeholder="Trip Starting Date : mm/dd/yy" name="startDate" value={formData.startDate} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="number" placeholder="No. of Days" name="day" value={formData.day} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="number" placeholder="No. of Nights" name="night" value={formData.night} onChange={handleChange}/>
        <button className="bg-[#017C6D] font-bold text-white p-2 w-[150px] rounded w-full" type="submit">Send Enquiry</button>
     </form>
  </div>
            )}
      <div className="sm:flex gap-5 px-10 text-black">

<div className="max-sm:hidden min-w-[300px] sm:w-[30%] ">
  <div className="p-5 border-1 rounded-md border-[#d7d7d9] w-full">
      <div className="w-full text-2xl font-semibold mb-2">{trip.title}</div>
      <div className="w-full text-2xl font-bold mb-2">{trip.price}</div>
      <div className=" sm:text-lg flex item-center mb-2"><LocationOnIcon className="text-[#017C6D] mr-3" /> <text>{trip.location}</text></div>
      <div className="  sm:text-lg flex item-center mb-2"><DateRangeIcon className="text-[#017C6D] mr-3" />  <text>{trip.duration}</text></div>
      <div className=" sm:text-lg flex  item-center mb-2"><MapIcon className="text-[#017C6D] mr-3" /><text>{trip.distance}</text></div>
      <div className=" sm:text-lg flex  item-center mb-2"><SpeedIcon className="text-[#017C6D] mr-3" /> <text>{trip.difficulty}</text></div>
      <Link href="/customtrek"><button className="block w-full rounded-sm p-2 mb-2 border-1 border-[#017C6D] mt-1 text-[#017C6D] font-bold">Request A Custom Trip</button></Link>
      <Link href="#plan-trip"><button className="max-sm:hidden block w-full rounded-sm p-2 bg-[#017C6D] mt-1 text-white font-bold">Send A Enquiry</button></Link>
  </div>
  <div className="max-sm:hidden p-5 mt-5 border-1 border-[#d7d7d9] rounded-md">
      <h3 className=" font-semibold text-[24px] mb-3" id="plan-trip">Plan A Trip with Us Now</h3>
      <form onSubmit={handleSubmit}>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="number" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="email" placeholder="E-Mail" name="email" value={formData.email} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="number" placeholder="No. of Passengers" name="passengers" value={formData.passengers} onChange={handleChange}/>
        <span className="urbanist rounded w-full text-[#7f878b] py-10 mb-3">Trip Starting Date</span>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="date" placeholder=" Start Date" name="startDate" value={formData.startDate} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="number" placeholder="No. of Days" name="day" value={formData.day} onChange={handleChange}/>
        <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="number" placeholder="No. of Nights" name="night" value={formData.night} onChange={handleChange}/>
        <button className="bg-[#017C6D] font-bold text-white p-2 w-[150px] rounded w-full" type="submit">Send Enquiry</button>
     </form>
  </div>
  </div>

<div className="sm:w-[70%] order-first">
<img className="w-full h-[350px] object-cover rounded mb-4" src={trip.imageSrc} alt={trip.title} />

<h1 className="text-3xl font-bold py-4">{trip.title}</h1>
<div className="text-lg text-gray-700 mb-4 flex rounded">
  <Link className="hover:bg-[#017C6D] hover:text-white  border-1 border-[#d7d7d9] px-5 py-1" href="#description">Details</Link> <Link className="hover:text-white hover:bg-[#017C6D] border-1 border-[#d7d7d9] px-5 py-1" href="#inclusions">Inclusions</Link>
  <Link href="#exclusions" className="hover:bg-[#017C6D] hover:text-white border-1 border-[#d7d7d9] px-5 py-1">Exclusions</Link> <Link href="#faqs" className="hidden border-1 border-[#d7d7d9] px-5 py-1">FAQs</Link>
</div>
<div className="sm:hidden rounded-md w-full mb-5">
      <div className="w-full text-3xl font-bold mb-2">{trip.price}</div>
      <div className=" sm:text-lg flex item-center mb-2"><LocationOnIcon className="text-[#017C6D] mr-3" /> <text>{trip.location}</text></div>
      <div className="  sm:text-lg flex item-center mb-2"><DateRangeIcon className="text-[#017C6D] mr-3" />  <text>{trip.duration}</text></div>
      <div className=" sm:text-lg flex  item-center mb-2"><MapIcon className="text-[#017C6D] mr-3" /><text>{trip.distance}</text></div>
      <div className=" sm:text-lg flex  item-center mb-2"><SpeedIcon className="text-[#017C6D] mr-3" /> <text>{trip.difficulty}</text></div>
      <Link href="/customtrek"><button className="block w-full rounded-sm p-2 mb-2 border-1 border-[#017C6D] mt-1 text-[#017C6D] font-bold">Request A Custom Trip</button></Link>
      <button className="sm:hidden block w-full rounded-sm p-2 bg-[#017C6D] mt-1 text-white font-bold" onClick={popOpen}>Send A Enquiry</button>

  </div>
 <p id="description">{trip.description}</p><br/>
<h2 className="mt-4 text-3xl font-bold py-4">What's Inside the Package?</h2>
<div className="sm:flex mb-4  rounded gap-2">

	<div className=" p-5 rounded">
    	<h3 className="text-2xl font-bold mb-3" id="inclusions">Inclusions</h3>
      { trip.inclusions && trip.inclusions.map((inclusion: string, index: number) => (
        <div className="flex items-center" key={index}>
          <CheckCircle className="text-[#175725] mr-3" />
          <text>{inclusion}</text>
        </div>
      ))}
    </div>

    <div className="  p-5 rounded">
    	<h3 className="text-2xl font-bold mb-3" id="exclusions">Exclusions</h3>
      {trip.exclusions && trip.exclusions.map((exclusion:string, index:number)=>(
        <div className="flex items-center" key={index}>
        <Block className="text-[#ff0000] mr-3" />
        	<text>{exclusion}</text>
        </div>

      ))}
    </div>

</div>
<h2 className="text-3xl font-bold py-4" id="faqs">Know Before You Go</h2>
<ul className="px-5 list-disc">
  <li>Engage in regular cardiovascular exercises like hiking, jogging, or cycling to build stamina and endurance.</li>
  <li>Incorporate strength training exercises to strengthen leg muscles and core stability.</li>
  <li>Practice hiking with a loaded backpack to simulate trekking conditions.</li>
  <li>Plan for at least a day or two of acclimatization in Lukla or nearby areas before starting the trek.</li>
  <li>Stay hydrated and avoid alcohol and smoking to minimize the risk of altitude sickness.</li>
   <li>Ascend gradually and listen to your body’s signals to recognize symptoms of altitude sickness.</li>
  <li>Stay informed about weather forecasts and trail conditions before and during the trek.</li>
  <li>Follow the guidance of experienced trekking guides and adhere to safety protocols at all times.</li>
  <li>Stay together as a group, avoid straying off the designated trail, and be mindful of potential hazards like loose rocks, steep cliffs, or slippery surfaces.</li>
  <li>Keep emergency contact information handy and communicate regularly with your trekking companions and support staff.</li>
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
      </div>
            )}
            
    </>
  );
}
