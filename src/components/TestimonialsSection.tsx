import React from "react"
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Testimonial: React.FC<{}>=()=>{
      useEffect(()=>{
  AOS.init();
},[]) 

    return(
        <div className="mt-10 bg-white">
        <h3 className="text-4xl font-bold text-black text-center" data-aos="fade-down">What our people says</h3>
    <div className="flex overflow-x-auto hide-scrollbar justify-center" data-aos="fade-up">

<div className="p-10 mt-10">
<div className="urbanist w-[300px] bg-[#E8E8EB] text-center text-black p-10 border-[0px] rounded-xl border-[#2E524A]">
	<img className="ml-auto mr-auto mb-5 mt-[-80px] w-[80px] h-[80px] rounded-full object-cover" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478606/sacred-pause-com/lo7gokokci9xmqb1drig.png"/>
	<p className="text-[#2E524A]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </p>
    <span className="text-[20px] text-[#2E524A] font-bold  mt-3"> Anurag Prasoon  </span>
    <span className="text-[14px] text-[#2E524A] font-semibold"> Jharkhand,India </span>
</div>
</div>

<div className="p-10 mt-10">
<div className="urbanist w-[300px] bg-[#E8E8EB] text-center text-black p-10 border-[0px] rounded-xl border-[#2E524A]">
	<img className="ml-auto mr-auto mb-5 mt-[-80px] w-[80px] h-[80px] rounded-full object-cover" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478606/sacred-pause-com/lo7gokokci9xmqb1drig.png"/>
	<p className="text-[#2E524A]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </p>
    <span className="text-[20px] text-[#2E524A] font-bold  mt-3"> Anurag Prasoon  </span>
    <span className="text-[14px] text-[#2E524A] font-semibold"> Jharkhand,India </span>
</div>
</div>

<div className="p-10 mt-10">
<div className="urbanist w-[300px] bg-[#E8E8EB] text-center text-black p-10 border-[0px] rounded-xl border-[#2E524A]">
	<img className="ml-auto mr-auto mb-5 mt-[-80px] w-[80px] h-[80px] rounded-full object-cover" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1750478606/sacred-pause-com/lo7gokokci9xmqb1drig.png"/>
	<p className="text-[#2E524A]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    </p>
    <span className="text-[20px] text-[#2E524A] font-bold  mt-3"> Anurag Prasoon  </span>
    <span className="text-[14px] text-[#2E524A] font-semibold"> Jharkhand,India </span>
</div>
</div>

</div>
</div>
    )
}

export default Testimonial;