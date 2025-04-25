import React from "react";

const StoryHero: React.FC = () => {
  return (
    <section className="flex flex-col relative w-full items-stretch text-[19px] text-black font-medium leading-none pb-52 max-md:max-w-full max-md:pb-[100px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/f38bfb124d56e3ab1c6d7c6027988e0ecc4ebedc?placeholderIfAbsent=true"
        alt="Hero Background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/4b5665cbbffd4ab3b47a4640b783bd87/b8a5451e0e8dee936765555a8a990dfe1cb24f4e?placeholderIfAbsent=true"
        alt="Lambda Adventures Logo"
        className="aspect-[3.38] object-contain w-[213px] self-center mb-[-42px] max-w-full mt-[203px] max-md:mt-10 max-md:mb-2.5"
      />
    </section>
  );
};

export default StoryHero;
