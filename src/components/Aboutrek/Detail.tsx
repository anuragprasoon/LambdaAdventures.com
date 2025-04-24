import React, { useState } from "react";

const TrekDetails: React.FC = () => {
  const [openDay, setOpenDay] = useState<number | null>(1);

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="flex w-full gap-6 justify-between flex-wrap mt-[39px] max-md:max-w-full">
      <div className="min-w-60 w-[407px]">
        <h2 className="w-full text-[32px] text-[rgba(1,124,109,1)] font-semibold whitespace-nowrap leading-[75px]">
          Inclusions
        </h2>
        <div className="w-full text-base text-[rgba(67,67,67,1)] font-normal leading-[30px]">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Transport from Manali to Manali via Sumo taxi and Tempo
              Travellers.
            </li>
            <li>Forest Permit and entrance fee.</li>
            <li>Accommodation in a home stay on twin/three sharing basis.</li>
            <li>Accommodation in tents on twin/three sharing basis.</li>
            <li>
              All meals provided: Breakfast, Lunch, tea, coffee, snacks, soup,
              and Dinner.
            </li>
            <li>Radio Walkie Talkie for communication.</li>
            <li>High-quality Dome tents.</li>
            <li>Sleeping bags.</li>
            <li>Good comfortable mattress.</li>
            <li>Liner.</li>
            <li>Toilet tent.</li>
            <li>Dining tent.</li>
            <li>Dining table.</li>
            <li>Helper.</li>
            <li>Kitchen team.</li>
            <li>Experienced Trek Leader guide and Technical guide.</li>
            <li>Medical Kit.</li>
            <li>Oxygen Cylinders.</li>
            <li>Gaiters and Crampons.</li>
            <li>Technical Equipment for</li>
          </ol>
        </div>
      </div>
      <div className="min-w-60 w-[407px]">
        <h2 className="w-full text-[32px] text-[rgba(1,124,109,1)] font-semibold whitespace-nowrap leading-[75px]">
          Exclusions
        </h2>
        <div className="w-full text-base text-[rgba(67,67,67,1)] font-normal leading-[30px]">
          <ol className="list-decimal pl-5 space-y-1">
            <li>Personal Insurance</li>
            <li>Hotel stay is not included in Manali</li>
            <li>Personal toiletry items are not provided.</li>
            <li>
              Medical certificate is required only for individuals aged 50 and
              above
            </li>
            <li>
              Breakfast is not included on the first day en route to the base
              camp
            </li>
            <li>Dinner is not included on the last day en route.</li>
            <li>Porter costs are not included in the package</li>
          </ol>
        </div>
      </div>
      <div className="min-w-60 w-[435px] max-md:max-w-full">
        <h2 className="text-[rgba(1,124,109,1)] text-[32px] font-semibold leading-[75px] max-md:max-w-full">
          Itinerary
        </h2>
        <div className="border w-full mt-[13px] px-[22px] py-2.5 rounded-[10px] border-[rgba(1,124,109,1)] border-solid max-md:max-w-full max-md:px-5">
          <h3 className="text-[rgba(1,124,109,1)] text-xl font-semibold leading-[46px]">
            Day 1: Rishikesh to Chopta
          </h3>
          <div className="text-[rgba(67,67,67,1)] text-base font-normal leading-7 mt-2">
            Depart from Rishikesh in the morning.
            <br />
            Drive to Chopta (approximately 200 km, 7-8 hours).
            <br />
            Enjoy scenic views of the Garhwal Himalayas en route.
            <br />
            Reach Chopta by late afternoon.
            <br />
            Check into a guesthouse or campsite.
            <br />
            Explore the serene surroundings of Chopta.
            <br />
            Overnight stay in Chopta.
          </div>
        </div>
        <button
          onClick={() => toggleDay(2)}
          className="border flex w-full items-center overflow-hidden text-xl text-[rgba(1,124,109,1)] font-semibold leading-[30px] mt-[13px] px-[22px] py-2.5 rounded-[10px] border-[rgba(1,124,109,1)] border-solid max-md:max-w-full max-md:px-5"
        >
          <div className="self-stretch flex min-w-60 w-full items-center justify-between flex-1 shrink basis-[0%] my-auto">
            <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
              Day 2: Chopta to Chandrashila Summit and back to Chopta
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/2ffd46538df94110ded591f606ea12f6f5f5976d?placeholderIfAbsent=true"
              alt="Expand"
              className="aspect-[1.5] object-contain w-[15px] self-stretch shrink-0 my-auto"
            />
          </div>
        </button>
        {openDay === 2 && (
          <div className="border w-full mt-1 px-[22px] py-2.5 rounded-[10px] border-[rgba(1,124,109,1)] border-solid max-md:max-w-full max-md:px-5">
            <div className="text-[rgba(67,67,67,1)] text-base font-normal leading-7 mt-2">
              Early morning start (around 4-5 AM) for the trek.
              <br />
              Trek from Chopta to Tungnath Temple (3.5 km, 3-4 hours).
              <br />
              Visit the ancient Tungnath Temple, the highest Shiva temple in the
              world.
              <br />
              Continue the trek to Chandrashila Summit (1.5 km, 1-2 hours).
              <br />
              Enjoy panoramic views of the Himalayan peaks from the summit.
              <br />
              Descend back to Chopta by afternoon.
              <br />
              Rest and overnight stay in Chopta.
            </div>
          </div>
        )}
        <button
          onClick={() => toggleDay(3)}
          className="border flex w-full items-center overflow-hidden text-xl text-[rgba(1,124,109,1)] font-semibold leading-[46px] mt-[13px] px-[22px] py-2.5 rounded-[10px] border-[rgba(1,124,109,1)] border-solid max-md:max-w-full max-md:px-5"
        >
          <div className="self-stretch w-[141px] my-auto">
            Day 3: Chopta to Rishikesh
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/0844c112ad25a111c446115850ce68cdb7cec243?placeholderIfAbsent=true"
            alt="Expand"
            className="aspect-[1.5] object-contain w-[15px] self-stretch shrink-0 my-auto"
          />
        </button>
        {openDay === 3 && (
          <div className="border w-full mt-1 px-[22px] py-2.5 rounded-[10px] border-[rgba(1,124,109,1)] border-solid max-md:max-w-full max-md:px-5">
            <div className="text-[rgba(67,67,67,1)] text-base font-normal leading-7 mt-2">
              Morning breakfast at Chopta.
              <br />
              Check out from the accommodation.
              <br />
              Drive back to Rishikesh (approximately 200 km, 7-8 hours).
              <br />
              Arrive in Rishikesh by evening.
              <br />
              Tour concludes.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrekDetails;
