import React from 'react';
import { Quote, Star } from 'lucide-react';

const Trust = () => {
  const logos = [
    { name: 'Jyoti Structures', url: `${import.meta.env.BASE_URL}assets/jyoti.png` }, // Assuming you'll add an image for Jyoti Structures
    { name: 'Revalyu Resources', url: `${import.meta.env.BASE_URL}assets/revalyu.png` },
    { name: 'Industrial Partner', url: `${import.meta.env.BASE_URL}assets/partner.png` }, // Assuming you'll add an image for Industrial Partner
  ];

  return (
    <section id="clients" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Trusted by <span className="text-[#E10000]">Leading Industrial Clients</span>
          </h2>
          <p className="text-xl text-gray-600">
            Join hundreds of satisfied industrial clients who rely on our expertise
          </p>
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0"
            >
              {logo.url ? ( // Conditionally render img if URL exists
                <img src={logo.url} alt={logo.name} className="max-h-16 object-contain w-full" />
              ) : (
                // Fallback for missing image, displays name
                <span className="text-gray-500 font-medium text-sm text-center">{logo.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg relative">
            <Quote className="absolute top-4 left-4 text-[#E10000] opacity-20" size={48} />
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-text mb-6 font-medium italic">
                "Shivendra Industries restored our tanks ahead of schedule—zero downtime, excellent durability."
              </blockquote>
              <cite className="text-[#E10000] font-semibold">
                Procurement Head, Revalyu Resources
              </cite>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex justify-center items-center mt-16 space-x-8">
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">ISO</span>
            </div>
            <span className="font-medium text-text">ISO Certified</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">W</span>
            </div>
            <span className="font-medium text-text">Warranty Backed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
