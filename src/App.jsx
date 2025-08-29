import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Benefits from './sections/Benefits';
import Trust from './sections/Trust';
import CaseStudy from './sections/CaseStudy';
import Features from './sections/Features';
import ContactForm from './sections/ContactForm';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Trust />
      <CaseStudy />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;