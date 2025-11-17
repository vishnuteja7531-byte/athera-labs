
import React from 'react';
import AnimatedSection from './AnimatedSection';

const EnergySphere: React.FC = () => (
  <div className="relative w-[150px] h-[150px] md:w-[320px] md:h-[320px] flex items-center justify-center">
    <div className="absolute w-24 h-24 md:w-48 md:h-48 bg-gradient-radial from-cyan-400 to-cyan-800 rounded-full filter blur-2xl animate-pulse-slow opacity-80"></div>
    <div className="absolute w-20 h-20 md:w-40 md:h-40 bg-white rounded-full filter blur-sm opacity-90"></div>

    {/* Rings */}
    <div className="absolute w-full h-full border-2 border-cyan-500/20 rounded-full animate-[spin_40s_linear_infinite] transform-gpu" style={{ transform: 'rotateX(70deg)' }}></div>
    <div className="absolute w-[90%] h-[90%] border-t-2 border-cyan-500/40 rounded-full animate-[spin_30s_linear_infinite_reverse] transform-gpu" style={{ transform: 'rotateX(70deg)' }}></div>
    <div className="absolute w-[80%] h-[80%] border-2 border-white/20 rounded-full animate-[spin_25s_linear_infinite] transform-gpu" style={{ transform: 'rotateY(70deg)' }}></div>
    <div className="absolute w-[70%] h-[70%] border-r-2 border-white/40 rounded-full animate-[spin_20s_linear_infinite_reverse] transform-gpu" style={{ transform: 'rotateY(70deg)' }}></div>
  </div>
);


const CoreSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-40 relative flex flex-col items-center justify-center text-center w-full px-4">
        <AnimatedSection className="w-full">
            <div className="flex justify-center mb-8 md:mb-12">
                <EnergySphere />
            </div>
            <h2 className="font-orbitron text-xl md:text-4xl font-bold text-glow px-4">
            The Athera Core
            </h2>
            <p className="mt-3 md:mt-4 text-base md:text-2xl text-gray-300 max-w-full md:max-w-3xl mx-auto silver-glow px-4">
            A glowing neural universe designed to think, respond, and evolve.
            </p>
        </AnimatedSection>
    </section>
  );
};

export default CoreSection;
