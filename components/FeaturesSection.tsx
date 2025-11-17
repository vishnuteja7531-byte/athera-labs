
import React from 'react';
import AnimatedSection from './AnimatedSection';

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

const FeatureCard: React.FC<{ title: string; index: number }> = ({ title, index }) => {
  return (
    <div 
      className="group p-3 md:p-4 rounded-xl glass-morphism transition-all duration-500 ease-out transform-gpu card"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="relative w-full h-32 md:h-40 flex items-center justify-center text-center p-3 md:p-4 rounded-lg transition-all duration-500 ease-out group-hover:scale-105 group-hover:-translate-z-4 bg-black/20 transform-gpu group-hover:[transform:translateZ(20px)_rotateX(5deg)]">
         <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-lg group-hover:border-cyan-400 transition-all duration-300"></div>
         <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <h3 className="font-orbitron text-sm md:text-lg font-bold text-white group-hover:text-glow">{title}</h3>
      </div>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-12 md:py-20 lg:py-32 w-full px-4">
      <div className="container mx-auto px-4">
        <AnimatedSection direction="up" delay={0.2} type="fade">
          <h2 className="font-orbitron text-2xl md:text-5xl font-bold text-center text-glow mb-8 md:mb-16">
            Core Features
          </h2>
          <div className="cards-group">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature} index={index}/>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
