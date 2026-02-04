import React from 'react';
import { MobileAnimatedSection, MobileFeatureCard } from './MobileAnimations.jsx';

const features = [
  "Student Support Engine",
  "Smart Knowledge Reasoning",
  "Fast Multi-Layer Thinking",
  "Ultra Modern UI/UX",
  "Memory Powered Context",
  "Deep AI Analysis Modes",
  "Real-Time Study Assistant",
  "Voice + Text + Vision Support",
  "Developer Tools Integration",
  "Secure, Fast, Optimized Core",
];

const MobileFeaturesSection = () => {
  return (
    <section id="features" className="py-12 w-full px-4">
      <div className="container mx-auto px-4">
        <MobileAnimatedSection>
          <h2 className="font-orbitron text-2xl font-bold text-center text-glow mb-8">
            Core Features
          </h2>
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {features.map((feature, index) => (
              <MobileFeatureCard key={index} title={feature} index={index} />
            ))}
          </div>
        </MobileAnimatedSection>
      </div>
    </section>
  );
};

export default MobileFeaturesSection;