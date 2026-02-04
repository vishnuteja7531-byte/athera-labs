import React, { useState, useEffect } from 'react';
import { isMobileDevice, hasGood3DPerformance } from '../utils/device';
import { MobileHeroAnimation } from './MobileAnimations.jsx';
import MobilePricingSection from './MobilePricingSection.jsx';
import MobileFeaturesSection from './MobileFeaturesSection.jsx';
import MobileRoadmapSection from './MobileRoadmapSection.jsx';

// Simple 3D fallback component
const Mobile3DFallback = () => {
  return (
    <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-2xl p-6 text-center max-w-md mx-auto">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-2">Athera Intelligence Core</h3>
      <p className="text-gray-300 text-sm mb-4">
        Advanced neural architecture processing multi-layered reasoning and contextual awareness.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button className="font-orbitron px-4 py-2 bg-cyan-500 text-black rounded-lg font-bold transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_#0fe6ff] text-sm">
          Access Platform
        </button>
        <button className="font-orbitron px-4 py-2 bg-transparent border border-cyan-500/50 text-cyan-400 rounded-lg font-bold transition-all duration-300 hover:bg-cyan-500/10 text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
};

// Simple mobile navbar
const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 border-b border-cyan-500/20 bg-black/80 backdrop-blur-md' : 'py-3 bg-black/80 backdrop-blur-md'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="font-orbitron text-lg font-bold text-glow tracking-wider">
              Athera AI
            </a>
          </div>
          <div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mt-3 py-3 border-t border-cyan-500/20 bg-black/80 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2 px-4 rounded-md hover:bg-cyan-500/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-cyan-500/10">
                <button className="w-full font-orbitron text-sm font-bold px-4 py-2 bg-[#0fe6ff] text-black rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_#0fe6ff]">
                  Access Platform
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Main mobile layout component
const MobileLayout = () => {
  const [isClient, setIsClient] = useState(false);
  const [has3DSupport, setHas3DSupport] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    
    // Check 3D performance capabilities
    const timer = setTimeout(() => {
      const supports3D = hasGood3DPerformance();
      setHas3DSupport(supports3D);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Prevent SSR hydration issues
  if (!isClient || isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan-400 font-orbitron">Initializing Athera Core...</p>
        </div>
      </div>
    );
  }

  const handleAccessPlatform = () => {
    window.location.href = 'https://athera.ai/platform';
  };

  const handleLearnMore = () => {
    alert('Explore Athera AI features and capabilities on our desktop site!');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <MobileNavbar />
      
      {/* Animated background particles for mobile */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-mobile ${Math.random() * 8 + 6}s linear infinite`,
              animationDelay: `${Math.random() * -15}s`,
            }}
          ></div>
        ))}
        <style>{`
          @keyframes float-mobile {
            0% { transform: translate(0, 0); opacity: 0; }
            10% { opacity: 0.2; }
            90% { opacity: 0.2; }
            100% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * -100 - 50}px); opacity: 0; }
          }
        `}</style>
      </div>

      {/* Hero Section */}
      <section className="mobile-hero relative z-10 pt-16">
        <MobileHeroAnimation>
          <div className="py-8 px-4 text-center">
            <h1 className="font-orbitron text-3xl md:text-4xl font-bold mb-3 text-cyan-400 text-glow">
              Athera AI
            </h1>
            <p className="mobile-tagline mb-6 text-gray-300 text-lg">
              The Future of Intelligence
            </p>
            <p className="text-cyan-300 text-sm mb-8 max-w-md mx-auto">
              Advanced AI for students, developers, and creators - now available on mobile
            </p>
          </div>
        </MobileHeroAnimation>

        {/* 3D Experience Section */}
        <div className="py-8 px-4">
          <div className="max-w-md mx-auto">
            <h2 className="font-orbitron text-2xl font-bold text-center text-glow mb-6">
              Experience Athera Core
            </h2>
            {has3DSupport ? (
              <div className="bg-black/30 border border-cyan-500/20 rounded-2xl p-6 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center animate-pulse">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-2">3D Core Active</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Your device supports advanced 3D rendering. For the full interactive experience, visit on desktop.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button 
                    onClick={handleAccessPlatform}
                    className="font-orbitron px-4 py-2 bg-cyan-500 text-black rounded-lg font-bold transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_#0fe6ff] text-sm"
                  >
                    Access Platform
                  </button>
                  <button 
                    onClick={handleLearnMore}
                    className="font-orbitron px-4 py-2 bg-transparent border border-cyan-500/50 text-cyan-400 rounded-lg font-bold transition-all duration-300 hover:bg-cyan-500/10 text-sm"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ) : (
              <Mobile3DFallback />
            )}
          </div>
        </div>

        {/* Features Preview */}
        <div className="py-8 px-4">
          <h2 className="font-orbitron text-2xl font-bold text-center text-glow mb-6">
            Core Features
          </h2>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {[
              'Student Support',
              'Smart Reasoning',
              'Multi-Layer AI',
              'Voice + Text',
              'Real-Time Help',
              'Secure & Fast'
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-black/30 border border-cyan-500/20 rounded-xl p-4 text-center hover:bg-cyan-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-cyan-300 text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <MobileFeaturesSection />

        {/* Pricing Section */}
        <MobilePricingSection />

        {/* Roadmap Section */}
        <MobileRoadmapSection />

        {/* Founder Section */}
        <div className="py-8 px-4">
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-500/20 rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/assets/vishnu.jpeg" 
                alt="Vishnu Teja" 
                className="w-20 h-20 rounded-full object-cover border-2 border-cyan-500 shadow-lg shadow-cyan-500/30 mb-4"
              />
              <h3 className="font-orbitron text-xl font-bold text-glow mb-1">Vishnu Teja</h3>
              <p className="text-cyan-300 text-sm font-semibold mb-2">Founder & CEO</p>
              <p className="text-gray-400 text-xs">
                17-year-old visionary creating AI for everyone
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-8 px-4">
          <div className="max-w-md mx-auto text-center">
            <h2 className="font-orbitron text-2xl font-bold text-glow mb-4">
              Ready to Experience Athera?
            </h2>
            <p className="text-gray-300 mb-6 text-sm">
              Join thousands of students and creators already using Athera AI to enhance their learning and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleAccessPlatform}
                className="font-orbitron px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-300 text-black rounded-xl font-bold transition-all duration-300 hover:shadow-[0_0_25px_#0fe6ff] transform hover:scale-105 text-base"
              >
                Get Started Free
              </button>
              <button 
                onClick={handleLearnMore}
                className="font-orbitron px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-400 rounded-xl font-bold transition-all duration-300 hover:bg-cyan-500/10 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:scale-105 text-base"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800/50">
        <div className="max-w-md mx-auto px-4">
          <p className="mb-2">© {new Date().getFullYear()} Athera AI Labs</p>
          <p className="text-xs text-gray-600">
            Built with passion for the future of artificial intelligence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MobileLayout;