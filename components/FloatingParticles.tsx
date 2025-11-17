import React, { useEffect, useRef } from 'react';

const FloatingParticles: React.FC = () => {
  const particleLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particleLayerRef.current) return;

    const particleCount = 80;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      
      // Random position
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      particle.style.left = `${left}%`;
      particle.style.top = `${top}%`;
      
      // Random size
      const size = Math.random() * 4 + 4;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random opacity
      const opacity = Math.random() * 0.3 + 0.3;
      particle.style.opacity = `${opacity}`;
      
      particleLayerRef.current.appendChild(particle);
      particles.push({
        element: particle,
        x: left,
        y: top,
        xOffset: 0,
        yOffset: 0
      });
    }

    // Mouse move handler for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      particles.forEach(particle => {
        const parallaxX = (mouseX - 0.5) * 20;
        const parallaxY = (mouseY - 0.5) * 20;
        
        particle.xOffset = parallaxX;
        particle.yOffset = parallaxY;
        
        particle.element.style.transform = `translate(${particle.xOffset}px, ${particle.yOffset}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => {
        if (particle.element.parentNode) {
          particle.element.parentNode.removeChild(particle.element);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={particleLayerRef}
      className="particle-layer fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default FloatingParticles;