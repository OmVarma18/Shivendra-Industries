import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/236711/pexels-photo-236711.jpeg?auto=compress&cs=tinysrgb&w=1600')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-padding text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Durable FRP Lining, Chemical Tank Manufacturing & Restoration for{' '}
            <span className="text-[#E10000]">Industry Leaders</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Shivendra Industries delivers cost-effective, long-lasting, and compliant solutions 
            trusted by top industrial clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="bg-[#E10000] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105 inline-flex items-center group">
              Get a Quotation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a 
              href="mailto:info@shivendra.com" 
              className="bg-transparent border-2 border-[#E10000] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#E10000] transition duration-300 transform hover:scale-105 inline-flex items-center group"
            >
              <Mail className="mr-2" size={20} />
              Send an Email
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
