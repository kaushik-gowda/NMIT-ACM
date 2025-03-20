import React from 'react';
import { Award } from 'lucide-react';

const Sponsors = () => {
  const sponsors = [
    {
      name: "Microsoft",
      tier: "Platinum Sponsor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      description: "Leading technology solutions provider"
    },
    {
      name: "Google",
      tier: "Gold Sponsor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      description: "Innovation and research center"
    },
    {
      name: "Amazon",
      tier: "Silver Sponsor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      description: "Developer tools and services"
    },
    {
      name: "Intel",
      tier: "Gold Sponsor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
      description: "Semiconductor and computing technology"
    },
    {
      name: "IBM",
      tier: "Silver Sponsor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      description: "Enterprise technology and consulting"
    },
    {
      name: "Oracle",
      tier: "Platinum Sponsor",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      description: "Database and cloud solutions"
    }
  ];

  return (
    <div className="pt-8">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 text-black mx-auto mb-4" />
            <h2 className="text-6xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
            <p className="text-lg text-gray-500">Partners who help make our vision a reality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full bg-white shadow-lg p-8 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-xl">
                  <div className="w-40 h-40 flex items-center justify-center">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                <div className="mt-6 text-center space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{sponsor.name}</h3>
                  <p className="text-indigo-600 font-medium">{sponsor.tier}</p>
                  <p className="text-gray-600">{sponsor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;