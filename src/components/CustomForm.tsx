import React from "react"
const CustomTrip:React.FC =()=>{
    return(
        <>
            <div className="card p-10 text-black">
                <span className="text-[24px] p-3 mb-10">Plan A Custom Trip</span>
                <form>
                    <input type="text" className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 block "  placeholder="Name"/>
                    <input type="tel" className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 block" placeholder="Phone No."/>
                    <input type="e-mail"  className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 block" placeholder="E-Mail"/>
                    <input type="text" className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 block "  placeholder="City, State"/>
                    
                    <input type="text" className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 block" placeholder="No. of Travellers"/>
                    <div className="pt-3 pb-3">
                        <label className="text-[14px] block mb-2">Starting Date</label> 
                        <input type="date" className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2" placeholder="Trip Starting Date"/>
                    </div>
                    <div className="flex gap-5">
                        <input type="number" className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 w-[120px] text-[14px]" placeholder="No. of Days"/>
                        <input type="number" className="outline-none  border-b-1 border-b-[#017C6D] mb-3 p-2 w-[120px] text-[14px]"placeholder="No. of Nights"/>
                    </div>
                    <button type="submit" className="btn block p-3 w-[200px] bg-[#017C6D] text-white">Plan A Trip </button>
                </form>
            </div>
        </>
    )

}

export default CustomTrip;