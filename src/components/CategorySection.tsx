import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategorySection: React.FC = () => {
  const categories = [
    {
      title: "Curated Experiences",
      description: "Handpicked adventures crafted for unforgettable moments",
      image: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg",
      link: "/experiences"
    },
    {
      title: "Mountain Adventures",
      description: "Scale new heights in the majestic Himalayas",
      image: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg",
      link: "/trekking"
    },
    {
      title: "Wildlife Expedition",
      description: "Explore India's diverse wildlife and landscapes",
      image: "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg",
      link: "/expeditions"
    },
    {
      title: "Winter Ladakh",
      description: "Experience the magic of the Himalayan winter",
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg",
      link: "/winter-treks"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-5xl font-bold mb-4 text-[rgba(1,124,109,1)]">Experiences</h2>
          <p className="text-gray-600 text-lg">
            A life without journeys is one not lived at all
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Link 
              href={category.link} 
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-2xl font-bold mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {category.description}
                </p>
                
                {/* Arrow indicator */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-20px] group-hover:translate-x-0">
                  <svg 
                    className="w-6 h-6" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;