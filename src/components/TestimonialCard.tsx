import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  imageSrc: string;
  name: string;
  location: string;
  reviewLink?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  imageSrc,
  name,
  location,
  reviewLink,
}) => {
  return (
    <div className="p-10 mt-10">
      <div className="urbanist w-[300px] bg-[#E8E8EB] text-center text-black p-10 border-[0px] rounded-xl border-[#2E524A]">
        <img
          className="ml-auto mr-auto mb-5 mt-[-80px] w-[80px] h-[80px] rounded-full object-cover"
          src={imageSrc}
          alt={name}
        />
        <p className="text-[#2E524A]">{quote}</p>
        {reviewLink && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <Image
              src="/google.svg"
              alt="Google"
              width={20}
              height={20}
            />
            <a
              href={reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2E524A] hover:text-[#017c6d] font-semibold transition-colors flex items-center gap-1"
            >
              Read on Google →
            </a>
          </div>
        )}
        <span className="text-[20px] text-[#2E524A] font-bold mt-3 block">
          {name}
        </span>
        <span className="text-[14px] text-[#2E524A] font-semibold">
          {location}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
