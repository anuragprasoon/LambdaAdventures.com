import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is Lambda Adventures?",
      answer: "Lambda Adventures is India's leading trekking and expedition company, specializing in organizing high-altitude treks, mountain expeditions, and adventure activities across the Indian Himalayas. We focus on safety, sustainability, and creating unforgettable experiences."
    },
    {
      question: "How do I book a trek?",
      answer: "Booking a trek with us is simple. Choose your preferred trek, select your dates, and fill out our booking form. You can secure your spot with a 30% advance payment. Our team will then guide you through the preparation process and provide all necessary information."
    },
    {
      question: "What fitness level is required?",
      answer: "The required fitness level varies depending on the trek difficulty. Generally, we recommend being able to jog 5km in 30 minutes and walk for 6-7 hours with a light backpack. For high-altitude treks, prior trekking experience and additional fitness preparation may be necessary."
    },
    {
      question: "What equipment do I need?",
      answer: "We provide a detailed equipment list specific to each trek. Essential items typically include proper trekking shoes, warm layers, rain protection, and a backpack. Some technical equipment can be rented from us. A complete checklist will be shared after booking."
    },
    {
      question: "Do you provide transportation?",
      answer: "Yes, we arrange transportation from the nearest major city to the trek starting point and back. This is usually included in the trek package. We can also assist with booking transportation from other cities at an additional cost."
    },
    {
      question: "What about high-altitude sickness?",
      answer: "Our itineraries include proper acclimatization days. Our experienced guides are trained in high-altitude medicine and carry oxygen cylinders and first-aid kits. We follow strict protocols and monitor all participants throughout the trek to ensure safety."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl text-[rgba(1,124,109,1)] font-bold text-center mb-4" data-aos="fade-down">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Everything you need to know about trekking with Lambda Adventures
        </p>

        <div className="space-y-4" data-aos="fade-up">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="border-b border-gray-200 last:border-none">
                  <Disclosure.Button className="flex justify-between w-full py-6 text-left">
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <span className={`ml-6 flex-shrink-0 ${open ? 'rotate-180' : ''} transition-transform duration-200`}>
                      <svg 
                        className="h-6 w-6 text-[#017c6d]" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </span>
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="pb-6 pr-12">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;