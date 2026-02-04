import React, { useEffect, useRef, useState } from 'react';

// Optimized AI Core with reduced complexity
const OptimizedAICore = () => (
  <div className="relative w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex items-center justify-center">
    {/* Simplified Glowing Core */}
    <div className="absolute w-12 h-12 md:w-24 md:h-24 bg-cyan-400 rounded-full filter blur-lg animate-pulse"></div>
    
    {/* Reduced Rotating Rings */}
    <div className="absolute w-full h-full border border-cyan-400/30 rounded-full animate-[spin_25s_linear_infinite]"></div>
    <div className="absolute w-[80%] h-[80%] border-t border-r border-cyan-400/50 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
  </div>
);

// Optimized particle system with fewer particles
const OptimizedParticles = () => {
  const particleCount = 15; // Reduced from 30
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: particleCount }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-cyan-400/20"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-opt ${Math.random() * 8 + 8}s linear infinite`,
            animationDelay: `${Math.random() * -20}s`,
            opacity: Math.random() * 0.4 + 0.1,
          }}
        ></div>
      ))}
      <style>{`
        @keyframes float-opt {
          0% { transform: translate(0, 0); opacity: 0; }
          15% { opacity: ${Math.random() * 0.4 + 0.1}; }
          85% { opacity: ${Math.random() * 0.4 + 0.1}; }
          100% { transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * -150 - 80}px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const OptimizedHeroSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const phrases = [
    "The Future of Intelligence Begins Here...",
    "Advanced AI for Students & Creators...",
    "Powerful Tools for Developers..."
  ];
  
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];
      
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 30 : 150);
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-8 w-full overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
      
      {/* Optimized Particles */}
      <OptimizedParticles />
      
      <div className="relative z-10 w-full max-w-[90%] md:max-w-full mx-auto">
        <div className="flex justify-center mb-6 md:mb-8">
          <OptimizedAICore />
        </div>
        
        <h1 className="font-orbitron text-[clamp(1.8rem,5vw,3rem)] font-bold text-glow tracking-widest uppercase">
          Athera AI
        </h1>
        <p className="coming-soon uppercase">COMING SOON</p>
        <p className="mt-3 md:mt-4 text-[clamp(1rem,3.5vw,1.4rem)] text-gray-300 max-w-full md:max-w-4xl mx-auto font-light leading-relaxed silver-glow px-4 min-h-[3rem] md:min-h-[4rem]">
          {text}
          <span className="ml-1 inline-block w-2 h-6 md:h-8 bg-cyan-400 align-middle animate-pulse"></span>
        </p>
        <p className="mt-4 md:mt-6 text-sm md:text-lg text-gray-400 max-w-full md:max-w-3xl mx-auto font-rajdhani px-4">
          An advanced artificial intelligence engine built for students, developers, creators, and dreamers — combining intelligence, speed, precision, and futuristic design.
        </p>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 hero-buttons w-full">
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

export default OptimizedHeroSection;