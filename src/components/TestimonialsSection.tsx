import React from "react"
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect, useRef } from "react";

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
	<img className="ml-auto mr-auto mb-5 mt-[-80px] w-[80px] h-[80px] rounded-full object-cover" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1746543799/lamda_user_sjsw1t.png"/>
	<p className="text-[#2E524A]">
   Had an amazing experience volunteering with Yaswanth on the trek to Hari Hara Betta this Republic Day! The views were stunning, and the journey was truly unforgettable. Kudos to Lambda Adventures for organizing such a wonderful event!
    </p>
    <span className="text-[20px] text-[#2E524A] font-bold  mt-3"> Tony abinash  </span>
    <span className="text-[14px] text-[#2E524A] font-semibold"> Jharkhand,India </span>
</div>
</div>

<div className="p-10 mt-10">
<div className="urbanist w-[300px] bg-[#E8E8EB] text-center text-black p-10 border-[0px] rounded-xl border-[#2E524A]">
	<img className="ml-auto mr-auto mb-5 mt-[-80px] w-[80px] h-[80px] rounded-full object-cover" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1745677807/carousel2_ogw8bo.png"/>
	<p className="text-[#2E524A]">
    I did trekking in hampta pass with them,they are professional and it was a great experience for me.I also did rappelling with them in ranchi (heaven hills) recently.It was great experience with them,they are well-skilled they take special care of our safety.Overall it was a wonderful time.Thanks to the team.
    </p>
    <span className="text-[20px] text-[#2E524A] font-bold  mt-3"> Nik Kumar  </span><br/>
    <span className="text-[14px] text-[#2E524A] font-semibold"> Jharkhand,India </span>
</div>
</div>

<div className="p-10 mt-10">
<div className="urbanist w-[300px] bg-[#E8E8EB] text-center text-black p-10 border-[0px] rounded-xl border-[#2E524A]">
	<img className="ml-auto mr-auto mb-5 mt-[-80px] w-[80px] h-[80px] rounded-full object-cover" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1746543798/lamda_user2_owhmab.png"/>
	<p className="text-[#2E524A]">
    Trekking with Lambda Adventures means connecting with like-minded adventurers. Share stories, make friends, and create lasting memories. India's Best travel company. India's best trekking company. india's leading trekking and expedition company.
    </p>
    <span className="text-[20px] text-[#2E524A] font-bold  mt-3"> Manu</span><br/>
    <span className="text-[14px] text-[#2E524A] font-semibold"> Jharkhand,India </span>
</div>
</div>

</div>
</div>
    )
}

export default Testimonial;