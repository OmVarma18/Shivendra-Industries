import React from 'react';
import { Calendar, Award, Zap, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: '15+ years FRP expertise',
      description: 'Extensive experience in fiber-reinforced plastic solutions'
    },
    {
      icon: Award,
      title: 'Service warranties included',
      description: 'Comprehensive coverage for peace of mind'
    },
    {
      icon: Zap,
      title: 'Rapid on-site project delivery',
      description: 'Fast turnaround times to minimize disruption'
    },
    {
      icon: Shield,
      title: 'Full industrial safety compliance',
      description: 'Adherence to all safety and regulatory standards'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Why Choose <span className="text-[#E10000]">Shivendra Industries</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality, safety, and customer satisfaction sets us apart 
            in the industrial FRP solutions market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <feature.icon size={32} className="text-[#E10000]" />
              </div>
              <h3 className="text-xl font-semibold text-text mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-4">
              Ready to Transform Your Industrial Operations?
            </h3>
            <p className="text-gray-600 mb-6">
              Join the growing list of industrial leaders who trust Shivendra Industries 
              for their critical FRP solutions and tank restoration needs.
            </p>
            <a href="#contact" className="btn bg-[#E10000] text-white">
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
