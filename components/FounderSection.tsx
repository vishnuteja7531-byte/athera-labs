import React from 'react';
import AnimatedSection from './AnimatedSection';

const FounderSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 w-full px-4" id="founder">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto glass-morphism rounded-2xl p-6 md:p-12 border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <img 
                  src="/assets/vishnu.jpeg" 
                  alt="Vishnu Teja" 
                  className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-cyan-500 shadow-lg shadow-cyan-500/30"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-glow">Vishnu Teja</h3>
                <p className="text-cyan-300 text-lg md:text-xl font-semibold mt-2">Founder & CEO, Athera AI</p>
                <p className="text-gray-400 text-base md:text-lg mt-1">Age: 17</p>
                
                <div className="mt-6 space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    A young visionary innovator from India, passionate about artificial intelligence, futuristic design, cognitive systems, and digital transformation.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Vishnu dreams of building AI that is accessible, powerful, and meaningful for everyone. He created Athera AI to revolutionize how students learn and how humans interact with intelligence.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">AI Research</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">Futuristic Design</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">Digital Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FounderSection;
