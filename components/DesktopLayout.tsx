import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import FeaturesSection from './FeaturesSection';
import CoreSection from './CoreSection';
import CeoSection from './CeoSection';
import PricingSection from './PricingSection';
import Footer from './Footer';
import AtheraCore3D from './AtheraCore3D';
import RoadmapSection from './RoadmapSection';
import CoDevelopersSection from './CoDevelopersSection';
import DownloadAppSection from './DownloadAppSection';
import ContactSection from './ContactSection';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import IntroSequence from './IntroSequence';
import FloatingParticles from './FloatingParticles';

const ParticleBackground: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
    // Enhanced particle system with 100 particles
    const particles = Array.from({ length: 100 });
    
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
        
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
            {/* Slow background gradient - parallax layer 1 */}
            <div className="parallax-element absolute top-0 left-0 w-full h-full" data-depth="0.1">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-[#0fe6ff]/10 to-transparent rounded-full filter blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-[#0fe6ff]/5 to-transparent rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000"></div>
            </div>
            
            {/* Medium particles - parallax layer 2 with mouse interaction */}
            <div className="parallax-element absolute top-0 left-0 w-full h-full" data-depth="0.3">
                {particles.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-cyan-400/30"
                        style={{
                            width: `${Math.random() * 4 + 1}px`,
                            height: `${Math.random() * 4 + 1}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                            boxShadow: '0 0 10px rgba(15, 230, 255, 0.5)',
                        }}
                        animate={{
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, (Math.random() - 0.5) * 100],
                        }}
                        transition={{
                            duration: Math.random() * 20 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    />
                ))}
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
  const [showIntro, setShowIntro] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, .interactive')) {
        setCursorVariant('enlarge');
      }
    };
    
    const handleMouseOut = () => {
      setCursorVariant('default');
    };
    
    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);
  
  if (showIntro) {
    return <IntroSequence onComplete={() => setShowIntro(false)} />;
  }
  
  return (
    <div className="scroll-container bg-black text-white w-full relative">
      {/* Custom cursor */}
      <div 
        className={`custom-cursor ${cursorVariant === 'enlarge' ? 'cursor-enlarge' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transition: cursorVariant === 'enlarge' ? 'width 0.2s ease, height 0.2s ease' : 'transform 0.1s ease'
        }}
      />
      
      <FloatingParticles />
      <Navbar />
      <ParticleBackground />
      <main className="relative z-10 w-full pt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
          <AtheraCore3D />
          <AboutSection />
          <FeaturesSection />
          <CoreSection />
          <PricingSection />
          <RoadmapSection />
          <CoDevelopersSection />
          <DownloadAppSection />
          <CeoSection />
          <ContactSection />
          <Footer />
        </motion.div>
      </main>
    </div>
  );
};

export default DesktopLayout;