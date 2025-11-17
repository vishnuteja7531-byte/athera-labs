
import React from 'react';

const AICore: React.FC = () => (
  <div className="relative w-[150px] h-[150px] md:w-[260px] md:h-[260px] flex items-center justify-center">
    {/* Inner Glowing Core */}
    <div className="absolute w-16 h-16 md:w-32 md:h-32 bg-cyan-400 rounded-full filter blur-xl animate-pulse-slow"></div>
    <div className="absolute w-14 h-14 md:w-28 md:h-28 bg-cyan-200 rounded-full filter blur-sm"></div>

    {/* Rotating Rings */}
    <div className="absolute w-full h-full border-2 border-cyan-400/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
    <div className="absolute w-[85%] h-[85%] border-t-2 border-r-2 border-cyan-400/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
    <div className="absolute w-[70%] h-[70%] border-b-2 border-l-2 border-cyan-400/70 rounded-full animate-[spin_10s_linear_infinite]"></div>
    
    {/* HUD elements */}
    <div className="absolute top-0 left-0 w-12 h-12 md:w-16 md:h-16 border-l-2 border-t-2 border-cyan-500/50 rounded-tl-xl animate-[spin_30s_linear_infinite]"></div>
    <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 border-r-2 border-b-2 border-cyan-500/50 rounded-br-xl animate-[spin_30s_linear_infinite_reverse]"></div>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-8 w-full">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>
      
      <div className="relative z-10 w-full max-w-[90%] md:max-w-full mx-auto">
        <div className="flex justify-center mb-6 md:mb-8">
          <AICore />
        </div>
        
        <h1 className="font-orbitron text-3xl md:text-6xl lg:text-7xl font-bold text-glow tracking-widest uppercase">
          Athera AI
        </h1>
        <p className="coming-soon uppercase">COMING SOON</p>
        <p className="mt-3 md:mt-4 text-base md:text-2xl text-gray-300 max-w-full md:max-w-4xl mx-auto font-light leading-relaxed silver-glow px-4">
          The Future of Intelligence Begins Here.
        </p>
        <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-400 max-w-full md:max-w-3xl mx-auto font-rajdhani px-4">
          An advanced artificial intelligence engine built for students, developers, creators, and dreamers — combining intelligence, speed, precision, and futuristic design.
        </p>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4">
          <button className="font-orbitron text-base md:text-lg font-bold px-6 md:px-8 py-3 bg-[#0fe6ff] text-black rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_20px_#0fe6ff] transform hover:scale-105 w-full sm:w-auto">
            Access Platform
          </button>
          <button className="font-orbitron text-base md:text-lg font-bold px-6 md:px-8 py-3 bg-transparent border-2 border-white/50 text-white rounded-md transition-all duration-300 ease-in-out hover:bg-white/10 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:scale-105 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
