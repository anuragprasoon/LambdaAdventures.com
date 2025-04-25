import React from "react";
import FeatureCard from "./FeatureCard";

interface FeaturesSectionProps {
  features: Array<{
    iconSrc: string;
    title: string;
    description: string;
  }>;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ features }) => {
  return (
    <div className="flex w-full  flex-col items-stretch mt-[60px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-[rgba(1,124,109,1)] text-4xl font-bold leading-none text-center max-md:max-w-full max-md:text-[28px]">
        Why Trek With Us?
      </h2>
      <div className="w-full mt-[40px] px-px max-md:max-w-full max-md:mt-8">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {features.map((feature, index) => (
            <div key={index} className="w-3/12 max-md:w-full max-md:ml-0">
              <FeatureCard
                iconSrc={feature.iconSrc}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
