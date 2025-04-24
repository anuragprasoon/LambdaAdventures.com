import React, { useState } from "react";

const TrekAbout: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const fullText = `At Lambda Adventures, every trek is more than just a journey—it's a path to growth, connection, and unforgettable memories. Born from a passion for the outdoors and driven by trust, care, and authenticity, we pride ourselves on crafting transformative adventures that stay true to our word. From the moment you book with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to with us, we become your trusted partner in exploration, prioritizing your safety, comfort, and satisfaction at every step. Our experienced guides don't just lead treks—they share knowledge, build relationships, and tailor each experience to`;

  const truncatedText = expanded
    ? fullText
    : fullText.substring(0, 500) + "...";

  return (
    <div className="flex w-full items-center gap-[40px_80px] justify-center flex-wrap max-md:max-w-full">
      <div className="self-stretch min-w-60 grow shrink w-[756px] my-auto max-md:max-w-full">
        <h2 className="w-full text-[32px] text-[rgba(1,124,109,1)] font-semibold whitespace-nowrap leading-[75px] max-md:max-w-full">
          About
        </h2>
        <p className="w-full text-base text-[rgba(67,67,67,1)] font-normal leading-[30px] max-md:max-w-full">
          {truncatedText}{" "}
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-bold text-[rgba(1,124,109,1)] hover:underline"
          >
            {expanded ? "Read Less" : "Read More ...."}
          </button>
        </p>
      </div>
      <div className="border self-stretch min-w-60 grow shrink w-[306px] my-auto p-[30px] rounded-[20px] border-[rgba(1,124,109,1)] border-solid max-md:px-5">
        <div className="w-full text-[#717171]">
          <div className="w-full">
            <div className="w-full text-[21px] font-medium leading-none">
              <div className="flex w-full items-center gap-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/714548f13ceb82ed6ebb309097fe01842e894f14?placeholderIfAbsent=true"
                  alt="Location icon"
                  className="aspect-[1] object-contain w-[21px] self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">Himachal Pradesh</div>
              </div>
              <div className="flex w-full items-center gap-3 mt-2.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/a8c91555696387239e09c00ee66e0da7dcabc052?placeholderIfAbsent=true"
                  alt="Calendar icon"
                  className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
                />
                <div className="self-stretch my-auto">22 Oct – 27 Oct</div>
              </div>
              <div className="self-stretch w-full gap-3 mt-2.5">
                5 Days, 4 Nights
              </div>
              <div className="flex w-full gap-[30px] mt-2.5">
                <div className="flex items-center gap-3 justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/e1dcc0aeec56a3e9c337a8d7277971b23ffdfda0?placeholderIfAbsent=true"
                    alt="Distance icon"
                    className="aspect-[1] object-contain w-[21px] self-stretch shrink-0 my-auto"
                  />
                  <div className="self-stretch my-auto">9 km</div>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/f4c0ddc1d52662209e7b8d1351441f023e4005f1?placeholderIfAbsent=true"
                    alt="Difficulty icon"
                    className="aspect-[1] object-contain w-[21px] self-stretch shrink-0 my-auto"
                  />
                  <div className="self-stretch my-auto">Moderate</div>
                </div>
              </div>
            </div>
            <div className="self-stretch w-full gap-3 text-2xl font-bold leading-none mt-[15px]">
              Rs. 20,000{" "}
              <span className="font-semibold text-decoration-line-through">
                Rs. 30,000
              </span>
            </div>
          </div>
        </div>
        <button className="self-stretch border min-h-[51px] w-full gap-[3px] text-[17px] text-[rgba(1,124,109,1)] font-bold whitespace-nowrap leading-none mt-5 px-6 py-3.5 rounded-[20px] border-[rgba(1,124,109,1)] border-solid max-md:px-5 hover:bg-[rgba(1,124,109,0.1)] transition-colors">
          Share
        </button>
        <button className="self-stretch bg-[rgba(1,124,109,1)] min-h-[51px] w-full gap-[3px] text-[17px] text-white font-bold leading-none mt-5 px-6 py-3.5 rounded-[20px] max-md:px-5 hover:bg-[rgba(1,124,109,0.9)] transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TrekAbout;
