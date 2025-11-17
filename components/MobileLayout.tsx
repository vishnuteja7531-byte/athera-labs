import React, { useState, useEffect } from 'react';
import { isMobileDevice } from '../utils/device';

const MobileLayout: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent SSR hydration issues
  if (!isClient) {
    return null;
  }

  const handleAccessPlatform = () => {
    // Simple action for mobile users
    alert('Athera AI is preparing for launch. Thank you for your interest!');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="mobile-hero">
        <div className="py-12 px-4 text-center">
          <h1 className="font-orbitron text-3xl font-bold mb-2 text-cyan-400">
            Athera AI
          </h1>
          <p className="mobile-tagline mb-8 text-gray-300">
            The Future of Intelligence
          </p>

          <div className="flex justify-center mb-8">
            <img 
              src="/assets/vishnu.jpeg" 
              alt="Vishnu Teja" 
              className="mobile-ceo w-40 h-40 rounded-full object-cover border-2 border-cyan-500 shadow-lg shadow-cyan-500/30"
            />
          </div>

          <p className="mobile-text text-gray-400 mb-8 px-4">
            Athera AI is preparing for launch. For the full 3D experience with advanced features, 
            please view on desktop. Stay tuned for our mobile app coming soon.
          </p>

          <button 
            onClick={handleAccessPlatform}
            className="mobile-btn font-orbitron px-6 py-3 bg-cyan-500 text-black rounded-lg font-bold transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_#0fe6ff]"
          >
            Access Platform
          </button>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-600 text-sm border-t border-gray-800">
        <p>© {new Date().getFullYear()} Athera AI. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MobileLayout;