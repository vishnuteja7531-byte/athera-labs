import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HologramSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 'home', label: 'Home', href: '#hero' },
    { id: 'core', label: 'Athera Core', href: '#core' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'developers', label: 'Co-Developers', href: '#co-developers' },
    { id: 'founder', label: 'Founder', href: '#founder' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Floating Neon Orb Button */}
      <button
        className="fixed top-8 left-8 w-9 h-9 rounded-full bg-cyan-400 z-50 flex items-center justify-center cursor-pointer"
        onClick={toggleSidebar}
        style={{
          boxShadow: '0 0 20px #0FE6FF',
          animation: 'pulse 2s infinite ease-in-out',
        }}
      >
        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar */}
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 h-full w-64 z-40"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-full p-6 backdrop-blur-lg"
            style={{
              background: 'rgba(0, 20, 35, 0.45)',
              borderRight: '1px solid rgba(0,255,255,0.25)',
              boxShadow: '0 0 40px rgba(0,255,255,0.2)',
            }}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-orbitron text-xl font-bold text-cyan-300">Athera AI</h2>
              <button 
                onClick={toggleSidebar}
                className="text-cyan-300 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="block py-2 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500/10 transition-all duration-300"
                      style={{
                        border: '1px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.border = '1px solid #0FE6FF';
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(15, 230, 255, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.border = '1px solid transparent';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={toggleSidebar}
        />
      )}

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); box-shadow: 0 0 10px #0FE6FF; }
          50% { transform: scale(1.2); box-shadow: 0 0 25px #0FE6FF; }
          100% { transform: scale(1); box-shadow: 0 0 10px #0FE6FF; }
        }
      `}</style>
    </>
  );
};

export default HologramSidebar;