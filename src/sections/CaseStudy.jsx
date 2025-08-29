import React from 'react';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';

const CaseStudy = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6">
            Proven Results for <span className="text-[#E10000]">Industrial Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real case study demonstrating our ability to extend equipment life and reduce costs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tank Restoration Before and After"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
              BEFORE
            </div>
            <div className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
              AFTER
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-[#E10000] to-[#FF3333] text-white p-8 rounded-2xl">
              <h3 className="text-3xl font-bold mb-4">Outstanding Results</h3>
              <p className="text-xl leading-relaxed">
                Extended tank lifespan by <span className="font-bold">10+ years</span>,
                saving client <span className="font-bold">40%</span> compared to replacement cost.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-background p-6 rounded-xl text-center">
                <TrendingUp className="text-[#E10000] mx-auto mb-3" size={32} />
                <div className="text-2xl font-bold text-text">20+</div>
                <div className="text-gray-600">Years Extended</div>
              </div>
              <div className="bg-background p-6 rounded-xl text-center">
                <DollarSign className="text-[#E10000] mx-auto mb-3" size={32} />
                <div className="text-2xl font-bold text-text">40%</div>
                <div className="text-gray-600">Cost Savings</div>
              </div>
              <div className="bg-background p-6 rounded-xl text-center">
                <Clock className="text-[#E10000] mx-auto mb-3" size={32} />
                <div className="text-2xl font-bold text-text">0</div>
                <div className="text-gray-600">Downtime Days</div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-[#E10000]">
              <h4 className="font-semibold text-text mb-2">Project Details:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Complete FRP lining restoration of 50,000L chemical storage tank</li>
                <li>• Advanced corrosion-resistant coating application</li>
                <li>• Completed 2 weeks ahead of scheduled maintenance window</li>
                <li>• Full compliance with environmental safety standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
