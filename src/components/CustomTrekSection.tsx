import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CustomTrekSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Personalized Itinerary",
      description: "Design your dream trek with flexible dates and destinations"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Private Groups",
      description: "Trek with your friends and family at your own pace"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Safety First",
      description: "Experienced guides and top-notch equipment for your safety"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#017c6d]/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-black">
                Create Your Own <br />
                <span className="text-[#017c6d]">Adventure</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Design a personalized trekking experience that matches your preferences, 
                skill level, and schedule. Our expert team will help bring your dream adventure to life.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 text-black">
                  <div className="p-2 bg-[#017c6d]/10 rounded-lg text-[#017c6d]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href="/customtrek" 
              className="inline-flex items-center px-6 py-3 bg-[#017c6d] text-white rounded-lg font-semibold hover:bg-[#015c4d] transition-colors duration-300"
            >
              Plan Your Custom Trek
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative lg:h-[600px]" data-aos="fade-left">
            <div className="relative h-[400px] lg:h-full rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg"
                alt="Custom Trek Adventure"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#017c6d]">100+</div>
                  <div className="text-sm text-gray-600">Custom Treks Organized</div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#017c6d]">95%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CustomTrekSection;