import React, { useState, useEffect } from 'react';
import { isMobileDevice, hasGood3DPerformance } from '../utils/device';
import Mobile3DCore from './Mobile3DCore';
import MobileNavbar from './MobileNavbar';

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
    // Enhanced action for mobile users
    window.location.href = 'https://athera.ai/platform'; // Replace with actual platform URL
  };

  const handleLearnMore = () => {
    // Scroll to features section or navigate to documentation
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

      {/* Hero Section with 3D Core */}
      <section className="mobile-hero relative z-10">
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

        {/* 3D Core Component */}
        {has3DSupport ? (
          <Mobile3DCore />
        ) : (
          <div className="py-8 px-4">
            <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-2xl p-6 text-center max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-orbitron text-xl font-bold text-cyan-400 mb-2">3D Experience Limited</h3>
              <p className="text-gray-300 text-sm mb-4">
                Your device may not support advanced 3D rendering. 
                For the full experience, try on a desktop or newer mobile device.
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
          </div>
        )}

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