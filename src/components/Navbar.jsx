import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      // Show floating button when scrolled past hero section (approximately 80vh)
      setShowFloatingButton(scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Clients', href: '#clients' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className={`ml-3 font-bold text-lg rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                Shivendra Industries
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative font-medium transition-colors duration-200 group ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 h-[2px] bg-[#E10000] w-0 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Right Items */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/shivendra-industries"
                className={`p-2 rounded-full transition-colors duration-200 hover:bg-[#E10000] hover:text-white ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#contact" 
                className="bg-[#E10000] text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
              >
                Get a Quotation
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block px-3 py-2 text-gray-800 hover:text-[#E10000] transition-colors rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="px-3 py-2">
                  <a href="#contact" className="w-full text-center block bg-[#E10000] text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-red-700 transition duration-300">
                    Get a Quotation
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Floating Quote Button with 3D Animation */}
      <div className={`fixed bottom-6 left-6 z-50 transition-all duration-700 ease-out transform ${
        showFloatingButton 
          ? 'translate-y-0 opacity-100 scale-100 rotate-0' 
          : 'translate-y-20 opacity-0 scale-75 rotate-12'
      }`}>
        <a 
          href="#contact" 
          className="bg-[#E10000] text-white font-bold py-3 px-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-rotate-2 transition-all duration-300 hover:animate-none relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #E10000 0%, #FF3333 100%)', // Red gradient
            boxShadow: '0 10px 30px rgba(225, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)', // Red shadow
          }}
        >
          <span className="relative z-10">Book a Quote</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </a>
      </div>
    </>
  );
};

export default Navbar;
