import React from 'react';
import AnimatedSection from './AnimatedSection';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 w-full px-4" id="mission">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Mission Card */}
              <div className="glass-morphism p-8 rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold text-glow ml-4">Mission</h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  "To transform human learning and intelligence through beautiful, powerful AI."
                </p>
              </div>
              
              {/* Vision Card */}
              <div className="glass-morphism p-8 rounded-2xl border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-orbitron text-2xl font-bold text-purple-glow ml-4">Vision</h3>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  "A world where intelligent tools evolve with you."
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default MissionVisionSection;
