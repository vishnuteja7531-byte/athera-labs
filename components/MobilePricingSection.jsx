import React from 'react';
import { MobileAnimatedSection, MobilePricingCard } from './MobileAnimations.jsx';

const MobilePricingSection = () => {
  const pricingData = [
    {
      tier: "Free",
      price: "Free",
      features: ['Basic AI Access', '100 Queries/Day', 'Standard Support', 'Core Features']
    },
    {
      tier: "Pro",
      price: "$9.99",
      features: ['Advanced AI Access', 'Unlimited Queries', 'Priority Support', 'Learning Tools', 'Extended Context', 'Custom Prompts'],
      isFeatured: true
    },
    {
      tier: "Enterprise",
      price: "$20",
      features: ['Full AI Suite', 'Unlimited API Access', 'Dedicated Support', 'Developer Tools', 'Extended Team Management', 'SLA Guarantee']
    }
  ];

  return (
    <section className="py-12 w-full px-4" id="pricing">
      <div className="container mx-auto px-4">
        <MobileAnimatedSection>
          <div className="text-center mb-10">
            <h2 className="font-orbitron text-2xl font-bold text-glow mb-3">
              Choose Your Access Tier
            </h2>
            <p className="text-base text-gray-400 max-w-md mx-auto">
              Flexible plans designed for everyone from students to enterprises
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 max-w-md mx-auto">
            {pricingData.map((plan, index) => (
              <MobilePricingCard 
                key={index}
                tier={plan.tier}
                price={plan.price}
                features={plan.features}
                isFeatured={plan.isFeatured}
              />
            ))}
          </div>
        </MobileAnimatedSection>
      </div>
    </section>
  );
};

export default MobilePricingSection;