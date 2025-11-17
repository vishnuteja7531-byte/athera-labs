
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
    <div className={`relative p-8 rounded-2xl glass-morphism border ${isFeatured ? 'border-cyan-400 shadow-2xl shadow-cyan-500/20' : 'border-gray-700/50'}`}>
      {isFeatured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-black font-bold text-sm px-4 py-1 rounded-full uppercase tracking-widest font-orbitron">
          Popular
        </div>
      )}
      <h3 className="font-orbitron text-2xl font-bold text-glow">{tier} Tier</h3>
      <p className="text-4xl font-bold mt-4">
        {price}
        {tier !== 'Free' && <span className="text-lg font-normal text-gray-400">/ month</span>}
      </p>
      <ul className="mt-8 space-y-3 text-gray-300">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full mt-10 font-orbitron font-bold py-3 rounded-lg transition-all duration-300 ${isFeatured ? 'bg-cyan-400 text-black hover:bg-white' : 'bg-gray-700/50 text-white hover:bg-cyan-400 hover:text-black'}`}>
        Get Started
      </button>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-center text-glow mb-16">
            Access Athera
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              tier="Free"
              price="Free"
              features={['Basic AI Access', '100 Queries/Day', 'Standard Support']}
            />
            <PricingCard 
              tier="Student"
              price="$9.99"
              features={['Advanced AI Access', 'Unlimited Queries', 'Priority Support', 'Learning Tools']}
              isFeatured={true}
            />
            <PricingCard 
              tier="Pro"
              price="$29.99"
              features={['Full AI Suite', 'API Access', 'Dedicated Support', 'Developer Tools']}
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;
