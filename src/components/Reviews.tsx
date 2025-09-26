import React, { useEffect, useRef } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import TestimonialCard from "./TestimonialCard";

const Testimonial: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init();

    const scroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = 350; // Width of card + padding

        if (
          Math.ceil(container.scrollLeft) >=
          container.scrollWidth - container.offsetWidth - cardWidth
        ) {
          // When near end, smoothly scroll to first card
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Normal scroll to next card
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(scroll, 3000);
    return () => clearInterval(interval);
  }, []);

  const reviews = [
    {
      quote: "Had an amazing experience volunteering with Yaswanth on the trek to Hari Hara Betta this Republic Day! The views were stunning, and the journey was truly unforgettable. Kudos to Lambda Adventures for organizing such a wonderful event!",
      imageSrc: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746543799/lamda_user_sjsw1t.png",
      name: "Tony abinash",
      location: "Jharkhand, India",
      reviewLink: "https://g.co/kgs/mN7X2p"
    },
    {
      quote: "I did trekking in hampta pass with them,they are professional and it was a great experience for me. I also did rappelling with them in ranchi (heaven hills) recently. It was great experience with them,they are well-skilled they take special care of our safety.",
      imageSrc: "https://res.cloudinary.com/anuragprasoon/image/upload/v1745677807/carousel2_ogw8bo.png",
      name: "Nik Kumar",
      location: "Jharkhand, India",
      reviewLink: "https://g.co/kgs/J4W8Zo"
    },
    {
      quote: "Trekking with Lambda Adventures means connecting with like-minded adventurers. Share stories, make friends, and create lasting memories. India's Best travel company.",
      imageSrc: "https://res.cloudinary.com/anuragprasoon/image/upload/v1746543798/lamda_user2_owhmab.png",
      name: "Manu",
      location: "Jharkhand, India",
      reviewLink: "https://g.co/kgs/pK9X4s"
    },
  ];

  // Duplicate the reviews array for seamless looping
  const allReviews = [...reviews, ...reviews];

  return (
    <div className="mt-10 bg-white">
      <h3 className="text-4xl font-bold text-black text-center" data-aos="fade-down">
        What our people says
      </h3>
      <div className="relative w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto hide-scrollbar justify-start md:justify-start items-center px-4 snap-x snap-mandatory"
          data-aos="fade-up"
          style={{ 
            scrollBehavior: "smooth",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch"
          }}
        >
          {allReviews.map((review, index) => (
            <div 
              key={index} 
              className="snap-start flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <TestimonialCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;