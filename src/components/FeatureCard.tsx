import React from "react";

interface FeatureCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="border flex min-h-[327px] grow flex-col overflow-hidden items-stretch text-center justify-center px-5 py-[50px] rounded-[20px] border-[rgba(1,124,109,1)] border-solid max-md:mt-[33px] hover:shadow-md transition-shadow">
      <img
        src={iconSrc}
        alt={title}
        className="aspect-[1] object-contain w-[63px] self-center"
      />
      <div className="w-full mt-2.5 px-2.5">
        <h3 className="text-[rgba(1,124,109,1)] text-2xl font-semibold leading-[31px]">
          {title}
        </h3>
        <p className="text-[rgba(67,67,67,1)] text-base font-normal mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
