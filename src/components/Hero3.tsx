import React from "react";

const TrekHero: React.FC = () => {
  return (
    <section className="flex flex-col relative min-h-[542px] w-full pt-[323px] max-md:max-w-full max-md:pt-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/0f61f3051181863ff77e47c4ebbab73d17831723?placeholderIfAbsent=true"
        alt="Chandratal Trek with Hampta Pass"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative flex w-full flex-col items-center justify-center px-20 py-[35px] max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1029px] flex-col items-center max-md:max-w-full">
          <h1 className="text-white text-[56px] font-bold leading-[1.1] self-stretch max-md:max-w-full max-md:text-[40px]">
            Chandratal Trek with Hampta Pass
          </h1>
          <div className="flex gap-[26px] text-lg text-white font-medium leading-none flex-wrap mt-[23px] max-md:max-w-full">
            <div className="flex items-center gap-2.5 justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/dfa9476ee18c1f28c9c5c9d214486df0bf90ffee?placeholderIfAbsent=true"
                alt="Calendar icon"
                className="aspect-[0.94] object-contain w-[15px] self-stretch shrink-0 my-auto"
              />
              <span className="self-stretch my-auto">22 Oct – 27 Oct</span>
            </div>
            <div className="self-stretch gap-2.5">5 Days, 4 Nights</div>
            <div className="flex min-h-[26px] gap-[26px]">
              <div className="flex items-center gap-2.5 justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/400c8d13ad44b9d4f0884bf92a5b4fa5689462ad?placeholderIfAbsent=true"
                  alt="Distance icon"
                  className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
                />
                <span className="self-stretch my-auto">9 km</span>
              </div>
              <div className="flex items-center gap-[7px] whitespace-nowrap justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/6646612b06071b5ae5b3efcc63c245428204d0b9?placeholderIfAbsent=true"
                  alt="Difficulty icon"
                  className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
                />
                <span className="self-stretch my-auto">Moderate</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[15px] mt-[23px]">
            <div className="bg-white self-stretch flex w-3.5 shrink-0 h-3.5 my-auto rounded-[50%]" />
            <div className="bg-[rgba(217,217,217,0.5)] self-stretch flex w-[13px] shrink-0 h-3.5 my-auto rounded-[50%]" />
            <div className="bg-[rgba(217,217,217,0.5)] self-stretch flex w-3.5 shrink-0 h-3.5 my-auto rounded-[50%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrekHero;
