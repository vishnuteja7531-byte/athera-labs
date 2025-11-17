
import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-glow mb-8">About Athera AI</h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              <p>
                Athera AI is an advanced cognitive engine designed to bring the next evolution of intelligence to the world. It is built with the purpose of helping students learn faster, developers build smarter tools, creators generate ideas instantly, and businesses operate efficiently.
              </p>
              <p>
                The architecture is inspired by next-gen AI modal thinking, deep problem-solving, contextual awareness, memory-enhanced logic, and adaptive intelligence.
              </p>
              <p className="font-semibold text-cyan-300">
                Athera AI is more than a tool — it is a vision of the future.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern opacity-5 z-0" style={{ backgroundSize: 'cover' }}></div>
    </section>
  );
};

export default AboutSection;
