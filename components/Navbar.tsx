import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3 border-b border-cyan-500/20' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="font-orbitron text-xl font-bold text-glow tracking-wider">
              Athera AI
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://www.instagram.com/athera.labs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              Contact
            </a>
            <button className="font-orbitron text-sm font-bold px-4 py-2 bg-[#0fe6ff] text-black rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_#0fe6ff]">
              Access Platform
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="md:hidden mt-4 py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="https://www.instagram.com/athera.labs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <button className="font-orbitron text-sm font-bold px-4 py-2 bg-[#0fe6ff] text-black rounded-md transition-all duration-300 ease-in-out hover:bg-white hover:shadow-[0_0_15px_#0fe6ff] w-full mt-2">
                Access Platform
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
