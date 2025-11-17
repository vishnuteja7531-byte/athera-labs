import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import CoreSection from './CoreSection';
import CeoSection from './CeoSection';
import TechnologySection from './TechnologySection';
import PricingSection from './PricingSection';
import Footer from './Footer';
import AtheraCore3D from './AtheraCore3D';
import RoadmapSection from './RoadmapSection';
import TestimonialsSection from './TestimonialsSection';
import MissionVisionSection from './MissionVisionSection';
import FounderSection from './FounderSection';
import DownloadAppSection from './DownloadAppSection';
import ContactSection from './ContactSection';
import Navbar from './Navbar';

const ParticleBackground: React.FC = () => {
    const particles = Array.from({ length: 50 });
    
    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const elements = document.querySelectorAll('.parallax-element');
            elements.forEach(element => {
                const depth = element.getAttribute('data-depth') || 0;
                // Slower movement on desktop for better effect
                const speed = parseFloat(depth as string) || 0.3;
                const yPos = -(scrolled * speed);
                (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            {/* Slow background gradient - parallax layer 1 */}
            <div className="parallax-element absolute top-0 left-0 w-full h-full" data-depth="0.1">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#0fe6ff]/10 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-[#0fe6ff]/5 to-transparent rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
            </div>
            
            {/* Medium particles - parallax layer 2 */}
            <div className="parallax-element absolute top-0 left-0 w-full h-full" data-depth="0.3">
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
            </div>
            
            {/* Fast foreground elements - parallax layer 3 */}
            <div className="parallax-element absolute top-0 left-0 w-full h-full" data-depth="0.6">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>
        </div>
    );
};

const DesktopLayout: React.FC = () => {
  return (
    <div className="scroll-container bg-black text-white w-full relative">
      <Navbar />
      <ParticleBackground />
      <main className="relative z-10 w-full pt-16">
        <HeroSection />
        <AtheraCore3D />
        <AboutSection />
        <FeaturesSection />
        <CoreSection />
        <PricingSection />
        <RoadmapSection />
        <TestimonialsSection />
        <MissionVisionSection />
        <FounderSection />
        <DownloadAppSection />
        <TechnologySection />
        <CeoSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};

export default DesktopLayout;