import React from 'react';
import Image from 'next/image';

const PhotoGallery: React.FC = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg",
      alt: "Snow Capped Mountains",
      className: "row-span-2 col-span-2"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg",
      alt: "Mountain Peak at Sunset",
      className: "col-span-1"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg",
      alt: "Mountain Lake View",
      className: "col-span-1"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg",
      alt: "Misty Mountain Range",
      className: "col-span-1"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg",
      alt: "Starlit Mountains",
      className: "col-span-1"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl text-black font-bold text-center mb-12" data-aos="fade-down">
        Our Adventures
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className={`group relative overflow-hidden rounded-2xl ${photo.className}`}
            data-aos="fade-up"
          >
            <div className="aspect-square w-full h-full relative">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">{photo.alt}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;