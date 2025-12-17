import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SocialMediaSection: React.FC = () => {
  const socialLinks = [
    {
      platform: "Instagram",
      username: "@lambdaadventures",
      link: "https://instagram.com/lambdaadventures",
      followers: "10K+",
      description: "Follow our daily adventures and stunning mountain views",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-tr from-purple-600 to-pink-500"
    },
    {
      platform: "YouTube",
      username: "Lambda Adventures",
      link: "https://youtube.com/@lambdaadventures",
      followers: "50K+",
      description: "Watch our trek videos and adventure guides",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      bgColor: "bg-red-600"
    },
    {
      platform: "LinkedIn",
      username: "Lambda Adventures",
      link: "https://linkedin.com/company/lambda-adventures",
      followers: "5K+",
      description: "Connect with us professionally and plan your next office trip with us",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      bgColor: "bg-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 border-radius-[10px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl text-[rgba(1,124,109,1)] font-bold mb-4">Join Our Adventure Community</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Follow us on social media for daily doses of adventure, behind-the-scenes moments, and exclusive updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => (
            <Link
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative overflow-hidden rounded-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`${social.bgColor} p-8 text-white transform transition-transform duration-300 group-hover:scale-105`}>
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-white/10 rounded-lg">
                    {social.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold">{social.platform}</h3>
                    <p className="text-white/80">{social.username}</p>
                  </div>
                </div>

                <p className="mb-4 text-white/90">{social.description}</p>
                
                <div className="flex items-center justify-between">
                  {/*<span className="font-bold">{social.followers} Followers</span>*/}
                  <span className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Follow us 
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;