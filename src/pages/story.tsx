import Head from "next/head"
import StoryHero from "@/components/Story/Hero"

export default function Story() {
    return(
        <>
        <Head>
        <title>Lambda Adventures - Our Story </title>
        <meta name="description" content=" Lambda Adventures - India's trusted trekking and trip planning company. Experience expertly guided treks, personalized service, and unforgettable adventures across India. Join us for safe, authentic, and value-packed journeys that inspire and connect. Your next adventure starts here!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div className="px-[6%] text-black bg-white">
            <img  data-aos="fade-up" className="mb-5 mt-5 object-cover h-[300px] w-full rounded anim" src="https://res.cloudinary.com/anuragprasoon/image/upload/v1752374904/lambda-adventures/trip_thumb/mtyun.webp"/> 
            <h2 className="urbanist text-4xl text-[rgba(1,124,109,1)] font-bold anim" data-aos="fade-up">Our Story</h2><br/>
            <p className="urbanist anim" data-aos="fade-right">
            <b>Lambda Adventures</b> is an India-based trekking and adventure travel company dedicated to creating unforgettable experiences for nature lovers and thrill-seekers across the country. Our philosophy centers on the belief that every journey is an opportunity for growth, connection, and self-discovery. Our core values are encapsulated in the motto: <b>Explore, Experience, Evolve—encouraging</b> participants to delve into the wilderness, enjoy personalized adventures, and return with renewed inspiration and purpose.
            </p><br/>
            <p className="urbanist" data-aos="fade-right">
            Lambda Adventures aims to bridge the gap between dreamers and the challenges of high-altitude expeditions, making adventure accessible, safe, and transformative for all participants. Our focus remains on fostering a spirit of exploration, responsible travel, and personal evolution through nature-based experiences.
            </p>
          </div>
          <div className="p-10">
      <h1 className="w-full mb-5 text-4xl text-[rgba(1,124,109,1)] font-bold text-center leading-loose max-md:max-w-full max-md:text-[28px] max-md:mt-[30px]">
        Our Team
      </h1>
      <div className="sm:flex gap-5 text-black">
        <div className="sm:flex ">
          <img src="https://lambdaadventures.com/wp-content/uploads/2024/03/t2.jpg" className="min-w-[180px] object-cover"/>
          <div className="p-5">
            <span className="text-[2vm] font-semibold">Shashi</span>
            <p className="mt-2">Shashi Shekhar is a seasoned mountaineer with certification in his craft, boasting a summit of Mt. Lobuche and an Everest attempt to his name. His professional journey is marked by daring expeditions and a relentless pursuit of alpine challenges. 
            </p>
          </div>
        </div>
  
        <div className="sm:flex ">
        <img src="https://lambdaadventures.com/wp-content/uploads/2024/03/t4.jpg" className="min-w-[180px] object-cover "/>
          <div className="p-5">
            <span className="text-[2vm] font-semibold">Rahul</span>
            <p className="mt-2">Rahul Kumar, certified in both mountaineering and yoga, embodies a unique blend of physical prowess and mental discipline, equipped to conquer both rugged peaks and inner serenity with equal finesse. 
            </p>
          </div>
        </div>
      </div>

      <div className="sm:flex gap-5 text-black mt-5">
        <div className="sm:flex">
          <img src="https://lambdaadventures.com/wp-content/uploads/2024/03/t6.jpg" className="min-w-[180px] object-cover"/>
          <div className="p-5">
            <span className="text-[2vm] font-semibold">Ankit</span>
            <p className="mt-2">Ankit is a highly regarded yoga instructor, certified in the art of yoga with a wealth of experience. Renowned for his expertise, he has conducted transformative yoga sessions for international students.
            </p>
          </div>
        </div>
  
        <div className="sm:flex">
        <img src="https://lambdaadventures.com/wp-content/uploads/2024/03/t3.jpg" className="min-w-[180px] object-cover "/>
          <div className="p-5">
            <span className="text-[2vm] font-semibold">Manoj
</span>
            <p className="mt-2">Manoj is a serene and gentle soul with a profound dedication to the art of mountaineering, complemented by his professional certification in the field. His quiet demeanor belies a steadfast commitment to conquering new summits and pushing the boundaries of exploration.
            </p>
          </div>
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