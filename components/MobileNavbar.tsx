import React, { useState, useEffect } from 'react';

const MobileNavbar: React.FC = () => {
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
    <nav className={`mobile-nav fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 border-b border-cyan-500/20' : 'py-3'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="font-orbitron text-lg font-bold text-glow tracking-wider">
              Athera AI
            </a>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
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

export default MobileNavbar;