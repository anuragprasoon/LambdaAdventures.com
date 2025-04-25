import React from "react";
const AdventureCallout: React.FC = () => {
  return <div className="w-full text-white leading-none mt-[60px] rounded-[0px_0px_0px_0px] max-md:mt-10">
      <div className="flex flex-col relative min-h-[439px] w-full pt-[111px] pb-[60px] px-[78px] rounded-[20px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/62b20ff1b68e87983436a4f74e07164d648e6a98" alt="Adventure Background" className="absolute  w-full object-cover inset-0" />
        <div className="relative w-[699px] max-w-full rounded-[19px]">
          <div className="w-full max-md:max-w-full">
            <h2 className="text-[56px] font-extrabold italic leading-[62px] max-md:max-w-full max-md:text-[40px] max-md:leading-[50px]">
              PLAN YOUR OWN{" "}
              <span className="text-[rgba(1,124,109,1)]">ADVENTURE</span> WITH
              US
            </h2>
            <p className="text-[23px] font-medium mt-5 max-md:max-w-full">
              You bring the crew, we bring the view. Let's gooo!
            </p>
            <button className="self-stretch bg-[rgba(1,124,109,1)] min-h-[72px] w-[353px] max-w-full gap-1 text-[25px] font-bold mt-5 px-[35px] py-5 rounded-[42px] max-md:px-5 hover:bg-[rgba(1,104,89,1)] transition-colors">
              Request A Quote
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default AdventureCallout;