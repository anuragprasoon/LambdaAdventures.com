import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function CustomTrek() {
  const [showAnimation, setShowAnimation] = useState(false);
  
    const [formData, setFormData] = useState({
            name: "",
            phone: "",
            email: "",
            triplocation:"",
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
            
            const res = await fetch("/api/customtrips", { 
              method: "POST", headers: {
              "Content-Type": "application/json"},
              body: JSON.stringify({
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                triplocation: formData.triplocation,
                passengers: formData.passengers,
                startDate: formData.startDate,
                day: formData.day,
                night: formData.night,
              })
          });
          
          
          setTimeout(() => setShowAnimation(false), 2500);
        
          console.log("Form submitted:", formData);
          alert("Thank You! Your Message has been sent");
        
            setFormData({
              name: "",
              phone: "",
              email: "",
              triplocation:"",
              passengers: "",
              startDate:"",
              day:"",
              night:"",
            });
            
    
          };
  
          
  
  
    return(
        <>
        <Head>
        <title>Plan Trip with Us | Lambda Adventures</title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showAnimation ? (
              <div className="flex justify-center items-center h-[250px]">
                <DotLottieReact src="/Scene-1.json" width="200px" height="200px" autoplay loop />
              </div>
            ) : (<div>

      <div className="urbanist p-10 text-center text-black bg-white">
<h3 className="text-[40px] text-[#017c6d] font-bold">Plan A Custom Trip</h3>
<p>Interested in Treks, Expeditions or Bike Trips? Plan a trip with us today.
</p>

<div className="mt-5">

<div className=" w-[360px] ml-auto mr-auto">
<h3 className=" font-bold text-[24px] mb-3">Custom Trip</h3>
  <form onSubmit={handleSubmit}>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} />
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="email" placeholder="E-Mail" name="email" value={formData.email} onChange={handleChange} />
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="text" placeholder="Trip Location" name="triplocation" value={formData.triplocation} onChange={handleChange} />
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="No. of Passengers" name="passengers" value={formData.passengers} onChange={handleChange} />
    <span className="urbanist rounded w-full text-[#7f878b] py-2 text-left block">Trip Starting Date</span>
    <input className="urbanist rounded p-2 w-full border-1 border-[#d7d7d9] mb-3"type="date" placeholder=" Start Date" name="startDate" value={formData.startDate} onChange={handleChange}/>
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="No. of Days" name="day" value={formData.day} onChange={handleChange} />
    <input className="urbanist rounded p-2 w-full outline-1 outline-black mb-3"type="number" placeholder="No. of Nights" name="night" value={formData.night} onChange={handleChange} />

  <button className="bg-[#172525] text-white p-2 w-[150px] rounded" type="submit">Send A Enquiry</button>
  </form>
  
</div>


</div>

</div>
    <div className="flex mt-5 gap-2 overflow-x-auto hide-scrollbar bg-[#02070a] p-10 rounded">
                <img className="h-[300px] w-[400px] object-cover rounded" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1752405701/lambda-adventures/trip_thumb/Shivay-Rental-Sar-Pass-Trek.jpg"/>

                <img className="h-[300px] w-[400px] object-cover rounded" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1752405146/lambda-adventures/trip_thumb/har-ki-dun.jpg"/>

                <img className="h-[300px] w-[400px] object-cover rounded" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1752374904/lambda-adventures/trip_thumb/mtyun.webp"/>
            </div>
          </div>
        )}
      </>
    )
}