import React from 'react';
import AnimatedSection from './AnimatedSection';

interface PricingCardProps {
  tier: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, price, features, isFeatured = false }) => {
  return (
    <div className={`relative p-6 md:p-8 rounded-2xl glass-morphism border transition-all duration-500 ease-in-out transform hover:scale-105 ${isFeatured ? 'border-cyan-400 shadow-2xl shadow-cyan-500/20' : 'border-gray-700/50'}`}>
      {isFeatured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-black font-bold text-xs md:text-sm px-3 md:px-4 py-1 rounded-full uppercase tracking-widest font-orbitron">
          Popular
        </div>
      )}
      <h3 className="font-orbitron text-xl md:text-2xl font-bold text-glow mb-4">{tier}</h3>
      <p className="text-3xl md:text-4xl font-bold mt-3 md:mt-4 text-cyan-300">
        {price}
      </p>
      <ul className="mt-6 md:mt-8 space-y-2 md:space-y-3 text-gray-300 text-sm md:text-base">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mr-2 md:mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-8 md:mt-10 font-orbitron font-bold py-3 rounded-lg transition-all duration-300 text-sm md:text-base ${isFeatured ? 'bg-cyan-400 text-black hover:bg-white' : 'bg-gray-700/50 text-white hover:bg-cyan-400 hover:text-black'}`}>
        Get Started
      </button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 w-full px-4" id="pricing">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-orbitron text-2xl md:text-5xl font-bold text-glow mb-4">
              Choose Your Access Tier
            </h2>
            <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible plans designed for everyone from students to enterprises
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-full md:max-w-6xl mx-auto">
            <PricingCard 
              tier="Free"
              price="Free"
              features={['Basic AI Access', '100 Queries/Day', 'Standard Support', 'Core Features']}
            />
            <PricingCard 
              tier="Pro"
              price="$9.99"
              features={['Advanced AI Access', 'Unlimited Queries', 'Priority Support', 'Learning Tools', 'Extended Context', 'Custom Prompts']}
              isFeatured={true}
            />
            <PricingCard 
              tier="Enterprise"
              price="$20"
              features={['Full AI Suite', 'Unlimited API Access', 'Dedicated Support', 'Developer Tools', 'Extended Team Management', 'SLA Guarantee']}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
