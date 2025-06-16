import { useState } from "react";
import React from "react"
interface CustomTripProp {
   closeFunc: () => void;
   tripid: number;  
}
const CustomTrip:React.FC<CustomTripProp> =({closeFunc, tripid})=>{
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
        let tripi=77
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
            tripid: tripid,
          })
      });
    
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

        closeFunc();
      };


    return(
        <div className="fixed inset-0 justify-center flex items-center border border-gray-500 backdrop-blur-md bg-white/30 rounded-lg p-5">

            <div className="card p-10 text-black bg-white border-1 w-[320px]">
                <span className="text-[24px] p-3 mb-10">Plan A Trip</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" onChange={handleChange} value={formData.name} className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 block "  placeholder="Name" required/>
                    <input type="tel" name="phone" onChange={handleChange} value={formData.phone} className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 block" placeholder="Phone No." required/>
                    <input type="e-mail" name="email" onChange={handleChange} value={formData.email} className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 block" placeholder="E-Mail" required/>
                    <input type="text"name="address" onChange={handleChange} value={formData.address} className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 block "  placeholder="City, State" required/>
                    
                    <input type="text" name="passengers" onChange={handleChange} value={formData.passengers} className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 block" placeholder="No. of Travellers" required/>
                    <div className="pt-3 pb-3">
                        <label className="text-[14px] block mb-2">Starting Date</label> 
                        <input type="date" name="startDate" onChange={handleChange} value={formData.startDate} className="outline-1 outline-[#017C6D] mb-3 p-2" placeholder="Trip Starting Date" required/>
                    </div>
                    <div className="flex gap-5">
                        <input type="number" name="day" onChange={handleChange} value={formData.day} className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 w-[120px] text-[14px]" placeholder="No. of Days" required/>
                        <input type="number" name="night" onChange={handleChange} value={formData.night} className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 w-[120px] text-[14px]"placeholder="No. of Nights" required/>
                    </div>
                    <button type="submit" className="btn block p-3 w-[200px] bg-[#017C6D] text-white">Plan A Trip </button>
                </form>
            </div>
        </div>
    )

}

export default CustomTrip;