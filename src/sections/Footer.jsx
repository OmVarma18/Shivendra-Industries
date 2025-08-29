import React from 'react';
import { Clock, MapPin, Phone, Mail, Linkedin, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text text-white" id="footer"> {/* Added id="footer" for smooth scrolling */}
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-[#E10000] text-white p-2 rounded-lg"> {/* Changed bg-primary to bg-[#E10000] */}
                <span className="font-bold text-lg">SI</span>
              </div>
              <span className="ml-3 font-bold text-xl">Shivendra Industries</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of FRP lining, chemical tank manufacturing, and industrial restoration services. 
              Trusted by industry leaders for over 15 years.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/shivendra-industries"
                target="_blank" // Open in new tab
                rel="noopener noreferrer" // Security best practice
                className="p-2 bg-gray-700 rounded-full hover:bg-[#E10000] transition-colors duration-200" // Changed hover:bg-primary to hover:bg-[#E10000]
              >
                <Linkedin size={20} />
              </a>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-green-400" />
                <span className="text-sm text-gray-300">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-blue-400" />
                <span className="text-sm text-gray-300">Warranty Backed</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-[#E10000]" /> {/* Changed text-primary to text-[#E10000] */}
                <span className="text-sm">Mon–Sat: 9 AM – 6 PM</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-[#E10000]" /> {/* Changed text-primary to text-[#E10000] */}
                <span className="text-sm">Sun: Closed</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 text-[#E10000] mt-1 flex-shrink-0" /> {/* Changed text-primary to text-[#E10000] */}
                <span className="text-sm">Industrial Area, City, Country</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-[#E10000]" /> {/* Changed text-primary to text-[#E10000] */}
                <a href="tel:+91-XXXXXXXXXX" className="relative text-sm group hover:underline-none"> {/* Added relative and group, removed hover:underline */}
                  +91-XXXXXXXXXX
                  <span className="absolute left-0 bottom-0 h-[2px] bg-[#E10000] w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-[#E10000]" /> {/* Changed text-primary to text-[#E10000] */}
                <a href="mailto:info@shivendra.com" className="relative text-sm group hover:underline-none"> {/* Added relative and group, removed hover:underline */}
                  info@shivendra.com
                  <span className="absolute left-0 bottom-0 h-[2px] bg-[#E10000] w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-[#E10000] to-[#FF3333] rounded-2xl p-8 text-center mb-12"> {/* Changed from-primary to from-[#E10000] and to-orange-600 to to-[#FF3333] */}
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get expert FRP solutions tailored to your industrial needs. 
            Our team is ready to deliver exceptional results for your next project.
          </p>
          <a href="#contact" className="bg-white text-[#E10000] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"> {/* Changed text-primary to text-[#E10000] */}
            Request a Quotation Now
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 1990 Shivendra Industries. All rights reserved. | 
            <span className="text-gray-400"> Professional FRP Solutions</span> | {/* Changed text-primary to text-[#E10000] */}
            ISO Certified & Warranty Backed
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
