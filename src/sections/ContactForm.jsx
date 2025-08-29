import React, { useState, useEffect } from 'react';
import { Send, User, Building, Phone, ArrowRight, ArrowLeft } from 'lucide-react';

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '' 
  });

  const totalSteps = 3; 
  // progressWidth and its useEffect are still removed as the visual bar is not present

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    let isValid = true;
    switch (currentStep) {
      case 1:
        if (!formData.name || !formData.company || !formData.contact) isValid = false;
        break;
      case 2:
        if (!formData.projectType || !formData.timeline || !formData.budget) isValid = false;
        break;
      default:
        break;
    }

    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else if (!isValid) {
      alert('Please fill in all required fields for this step before proceeding.');
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quotation request submitted successfully! We will contact you within 24 hours.');
    console.log('Form Data to Send:', formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-text mb-4">Contact Information</h3>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E10000] focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E10000] focus:border-transparent transition-all duration-200"
                required
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="contact"
                placeholder="Phone Number / Email"
                value={formData.contact}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E10000] focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-text mb-4">Project Details</h3>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E10000] focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Select Service Type</option>
              <option value="frp-lining">FRP Lining</option>
              <option value="tank-manufacturing">Tank Manufacturing</option>
              <option value="restoration">Tank Restoration</option>
              <option value="maintenance">Maintenance & Repair</option>
              <option value="consultation">Technical Consultation</option>
            </select>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E10000] focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Project Timeline</option>
              <option value="urgent">Urgent (Within 1 week)</option>
              <option value="1-month">Within 1 month</option>
              <option value="3-months">Within 1 month</option>
              <option value="6-months">Within 6 months</option>
              <option value="planning">Planning phase</option>
            </select>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E10000] focus:border-transparent transition-all duration-200"
              required
            >
              <option value="">Budget Range</option>
              <option value="under-50k">Under ₹50,000</option>
              <option value="50k-2l">₹50,000 - ₹2,00,000</option>
              <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
              <option value="5l-10l">₹5,00,000 - ₹10,00,000</option>
              <option value="above-10l">Above ₹10,00,000</option>
            </select>
          </div>
        );
      case 3: // This is now the final message step
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-text mb-4">Final Message / Confirmation</h3>
            <textarea
              name="message"
              placeholder="Add any final comments or confirm your request details here..."
              value={formData.message}
              onChange={handleInputChange}
              rows={6} // Reverted to 6 rows for the final message
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E10000] focus:border-transparent transition-all duration-200 resize-none"
            />
            <div className="bg-[#E10000]/10 border-l-4 border-[#E10000] p-4 rounded">
              <p className="text-sm text-[#E10000]">
                <strong>What happens next?</strong> Our technical team will review your requirements and
                contact you within 24 hours to schedule a site visit and provide a detailed quotation.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Request a <span className="text-[#E10000]">Quote</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a customized solution for your industrial FRP requirements.
            Our experts will provide a detailed quotation within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Step Counter */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-500">Step {currentStep} of {totalSteps}</span>
            </div>
          </div>

          {/* Form */}
          <div 
            className="bg-background rounded-2xl p-8 shadow-xl relative
                       hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 ease-in-out
                       focus-within:shadow-2xl focus-within:scale-[1.01]"
          >
            <form onSubmit={handleSubmit}>
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="flex items-center px-6 py-3 text-gray-600 hover:text-text transition-colors duration-200"
                  >
                    <ArrowLeft className="mr-2" size={20} />
                    Previous
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="btn bg-[#E10000] text-white flex items-center ml-auto"
                  >
                    Next
                    <ArrowRight className="ml-2" size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn bg-[#E10000] text-white flex items-center ml-auto"
                  >
                    <Send className="mr-2" size={20} />
                    Get My Quote
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          {/* <div className="grid sm:grid-cols-2 gap-6 mt-12">
            <div 
              className="text-center p-6 bg-background rounded-xl
                         hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out
                         focus-within:shadow-lg focus-within:scale-[1.02]" // Added cursor-pointer
              tabIndex="0" // Make it focusable
            >
              <h4 className="font-semibold text-text mb-2">Quick Response</h4>
              <p className="text-gray-600">Within 24 hours</p>
            </div>
            <div 
              className="text-center p-6 bg-background rounded-xl
                         hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out
                         focus-within:shadow-lg focus-within:scale-[1.02] " // Added cursor-pointer
              tabIndex="0" // Make it focusable
            >
              <h4 className="font-semibold text-text mb-2">Free Consultation</h4>
              <p className="text-gray-600">No obligation quote</p>
            </div>
          </div> */}
        </div> 
      </div> 
    </section> 
  );
};

export default ContactForm;
