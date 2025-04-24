import React, { useState } from "react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const Faqs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What is Demo Day ?",
      answer:
        "Participate in Demo Day. Pitch Your Idea. Get Chance Connect and Collaborate with visionary founders . Participate in Demo Day. Pitch Your Idea. Get Chance Connect and Collaborate with visionary founders. Participate in Demo Day. Pitch Your Idea. Get Chance Connect and Collaborate with visionary founders . Participate in Demo Day. Pitch Your Idea. Get Chance Connect and Collaborate with visionary founders",
    },
    {
      id: 2,
      question: "What is Demo Day ?",
      answer:
        "Participate in Demo Day. Pitch Your Idea. Get Chance Connect and Collaborate with visionary founders . Participate in Demo Day. Pitch Your Idea. Get Chance Connect and Collaborate with visionary founders.",
    },
    {
      id: 3,
      question: "What is Demo Day ?",
      answer:
        "Participate in Demo Day. Pitch Your Idea. Get Chance Connect and Collaborate with visionary founders . Participate in Demo Day. Pitch Your Idea. Get Chance Connect and Collaborate with visionary founders.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="w-full mt-[39px] max-md:max-w-full">
      <h2 className="text-[rgba(1,124,109,1)] text-[45px] font-bold text-center max-md:max-w-full max-md:text-[40px]">
        FAQs
      </h2>
      <div className="w-full mt-[33px] space-y-[33px] max-md:max-w-full">
        {faqs.map((faq) => (
          <div key={faq.id} className="w-full max-md:max-w-full">
            <div
              className="bg-white border flex w-full flex-col justify-center p-[30px] rounded-[30px] border-[rgba(1,124,109,1)] border-solid max-md:max-w-full max-md:px-5 cursor-pointer"
              onClick={() => toggleFAQ(faq.id)}
            >
              <div className="flex w-[701px] max-w-full flex-col items-stretch justify-center">
                <div className="w-full flex justify-between items-center max-md:max-w-full">
                  <h3 className="text-2xl text-[rgba(1,124,109,1)] font-bold leading-[48px]">
                    {faq.question}
                  </h3>
                  <div className="text-2xl text-[rgba(1,124,109,1)] font-bold">
                    {openFAQ === faq.id ? "−" : "+"}
                  </div>
                </div>
              </div>
              {openFAQ === faq.id && (
                <div className="text-[rgba(62,62,62,1)] text-base font-normal mt-[15px] max-md:max-w-full">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
