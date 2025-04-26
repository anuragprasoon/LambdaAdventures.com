import React from "react";

interface TestimonialCardProps {
  quote: string;
  imageSrc: string;
  name: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  imageSrc,
  name,
  location,
}) => {
  return (
    <div className="bg-[rgba(1,124,109,1)] border self-stretch flex min-w-60 flex-col items-stretch w-[377px] my-auto pb-5 rounded-[20px] border-[rgba(1,124,109,1)] border-solid hover:shadow-lg transition-shadow">
      <div className="self-stretch flex-1 shrink basis-[0%] bg-white min-h-[100px] w-full gap-[7px] text-[14px] text-[rgba(67,67,67,1)] font-medium leading-[31px] px-[30px] py-8 rounded-[20px] max-md:px-5">
        {quote}
      </div>
      <div className="self-center flex min-h-[65px] items-center gap-[10px] text-white mt-5">
        <img
          src={imageSrc}
          alt={name}
          className="aspect-[1] object-contain w-[65px] self-stretch shrink-0 my-auto rounded-[50%]"
        />
        <div className="self-stretch w-[111px] my-auto">
          <div className="text-[14px] font-bold">{name}</div>
          <div className="text-[12px] font-medium mt-[5px]">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
