import React from 'react';
import { Shield, Wrench, Clock, Award, MapPin, CheckCircle } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Long-lasting FRP lining prevents corrosion',
      description: 'Advanced fiber-reinforced plastic technology for maximum durability'
    },
    {
      icon: Wrench,
      title: 'Custom chemical tank design & manufacturing',
      description: 'Tailored solutions engineered for your specific industrial requirements'
    },
    {
      icon: Clock,
      title: 'Rapid restoration & repairs to cut downtime',
      description: 'Minimize operational disruption with our efficient repair processes'
    },
    {
      icon: Award,
      title: 'Compliance-ready with certifications & warranties',
      description: 'Meet all industry standards with our certified solutions'
    },
    {
      icon: MapPin,
      title: 'On-site support with quick turnaround',
      description: 'Professional installation and maintenance at your facility'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Engineered to Solve <span className="text-[#E10000]">Industrial Challenges</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive FRP solutions address the most demanding industrial requirements
            with precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 bg-background rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#E10000]/10 rounded-lg group-hover:bg-[#E10000] group-hover:text-white transition-all duration-300">
                  <benefit.icon size={24} className="text-[#E10000] group-hover:text-white" />
                </div>
                <CheckCircle size={20} className="text-green-500 ml-auto" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-[#E10000] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn text-[#E10000] border-[#E10000]">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
