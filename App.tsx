
import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import CoreSection from './components/CoreSection';
import CeoSection from './components/CeoSection';
import TechnologySection from './components/TechnologySection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

const ParticleBackground: React.FC = () => {
    const particles = Array.from({ length: 50 });
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            {particles.map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-cyan-400/30"
                    style={{
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `move ${Math.random() * 20 + 10}s linear infinite`,
                        animationDelay: `${Math.random() * -30}s`,
                        opacity: Math.random() * 0.5 + 0.2,
                    }}
                ></div>
            ))}
            <style>{`
                @keyframes move {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px); }
                    100% { transform: translate(0, 0); }
                }
            `}</style>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#0fe6ff]/10 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-[#0fe6ff]/5 to-transparent rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>
    );
};

const App: React.FC = () => {
  return (
    <div className="scroll-container bg-black text-white">
      <ParticleBackground />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <CoreSection />
        <CeoSection />
        <TechnologySection />
        <PricingSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;
