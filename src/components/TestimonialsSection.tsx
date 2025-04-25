import React from "react";
import TestimonialCard from "./TestimonialCard";

interface TestimonialsSectionProps {
  testimonials: Array<{
    quote: string;
    imageSrc: string;
    name: string;
    location: string;
  }>;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  return (
    <div className="w-full mt-[60px] max-md:max-w-full max-md:mt-10 mb-[30px]">
      <h2 className="text-[rgba(1,124,109,1)] text-4xl font-bold leading-none text-center max-md:max-w-full max-md:text-[28px]  mb-[30px]">
        What People Say About Us{" "}
      </h2>
      <div className="flex w-full  overflow-x-auto [&::-webkit-scrollbar]:hidden items-center gap-[26px] justify-centermt-[41px] rounded-[20px] max-md:max-w-full max-md:mt-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            imageSrc={testimonial.imageSrc}
            name={testimonial.name}
            location={testimonial.location}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
