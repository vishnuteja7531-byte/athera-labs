
import React from 'react';
import AnimatedSection from './AnimatedSection';

const EnergySphere: React.FC = () => (
  <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] flex items-center justify-center">
    <div className="absolute w-40 h-40 md:w-64 md:h-64 bg-gradient-radial from-cyan-400 to-cyan-800 rounded-full filter blur-2xl animate-pulse-slow opacity-80"></div>
    <div className="absolute w-32 h-32 md:w-56 md:h-56 bg-white rounded-full filter blur-sm opacity-90"></div>

    {/* Rings */}
    <div className="absolute w-full h-full border-2 border-cyan-500/20 rounded-full animate-[spin_40s_linear_infinite] transform-gpu" style={{ transform: 'rotateX(70deg)' }}></div>
    <div className="absolute w-[90%] h-[90%] border-t-2 border-cyan-500/40 rounded-full animate-[spin_30s_linear_infinite_reverse] transform-gpu" style={{ transform: 'rotateX(70deg)' }}></div>
    <div className="absolute w-[80%] h-[80%] border-2 border-white/20 rounded-full animate-[spin_25s_linear_infinite] transform-gpu" style={{ transform: 'rotateY(70deg)' }}></div>
    <div className="absolute w-[70%] h-[70%] border-r-2 border-white/40 rounded-full animate-[spin_20s_linear_infinite_reverse] transform-gpu" style={{ transform: 'rotateY(70deg)' }}></div>
  </div>
);


const CoreSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-40 relative flex flex-col items-center justify-center text-center overflow-hidden">
        <AnimatedSection className="w-full">
            <div className="flex justify-center mb-12">
                <EnergySphere />
            </div>
            <h2 className="font-orbitron text-2xl md:text-4xl font-bold text-glow">
            The Athera Core
            </h2>
            <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto silver-glow">
            A glowing neural universe designed to think, respond, and evolve.
            </p>
        </AnimatedSection>
    </section>
  );
};

export default CoreSection;
