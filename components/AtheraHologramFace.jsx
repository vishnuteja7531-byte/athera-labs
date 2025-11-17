import React, { useEffect, useRef, useState } from 'react';
import '../styles/hologramFace.css';

const AtheraHologramFace = () => {
  // Desktop-only guard
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  if (!isDesktop) return null;

  const faceRef = useRef(null);
  const canvasRef = useRef(null);
  const [isBright, setIsBright] = useState(false);
  const [particles, setParticles] = useState([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const facePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isDesktop) return;

    // Create initial particles
    const initialParticles = [];
    for (let i = 0; i < 20; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 200,
        y: Math.random() * 200,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    setParticles(initialParticles);

    // Mouse tracking
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (faceRef.current) {
        const rect = faceRef.current.getBoundingClientRect();
        facePos.current = { 
          x: rect.left + rect.width / 2, 
          y: rect.top + rect.height / 2 
        };
      }
    };

    // Scroll brightening
    const handleScroll = () => {
      setIsBright(true);
      setTimeout(() => setIsBright(false), 300);
    };

    // Hover drifting
    const handleMouseEnter = () => {
      setParticles(prev => prev.map(p => ({
        ...p,
        drifting: true,
        dx: (Math.random() - 0.5) * 100,
        dy: (Math.random() - 0.5) * 100
      })));
      
      setTimeout(() => {
        setParticles(prev => prev.map(p => ({ ...p, drifting: false })));
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    if (faceRef.current) {
      faceRef.current.addEventListener('mouseenter', handleMouseEnter);
    }

    // Animation loop for face tracking
    let animationFrame;
    const animate = () => {
      if (faceRef.current) {
        const dx = mousePos.current.x - facePos.current.x;
        const dy = mousePos.current.y - facePos.current.y;
        
        // Slow tracking with delay
        const rotateX = dy * 0.1;
        const rotateY = -dx * 0.1;
        
        faceRef.current.style.transform = `translateY(-50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      
      if (faceRef.current) {
        faceRef.current.removeEventListener('mouseenter', handleMouseEnter);
      }
      
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isDesktop]);

  return (
    <div className="hologram-face-container">
      <div 
        ref={faceRef}
        className="hologram-face breathing"
      >
        {/* Canvas for particle points */}
        <canvas 
          ref={canvasRef}
          className="face-canvas"
          width="200"
          height="200"
        />
        
        {/* Eyes */}
        <div className={`eye left ${isBright ? 'bright' : ''}`}></div>
        <div className={`eye right ${isBright ? 'bright' : ''}`}></div>
        
        {/* Contour lines */}
        <div className="contour-line jaw-line"></div>
        <div className="contour-line cheek-line left"></div>
        <div className="contour-line cheek-line right"></div>
        
        {/* Scanlines */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="scanline"
            style={{ top: `${i * 5}%` }}
          ></div>
        ))}
        
        {/* Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`particle ${particle.drifting ? 'drifting' : ''}`}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              '--dx': particle.drifting ? `${particle.dx}px` : '0px',
              '--dy': particle.drifting ? `${particle.dy}px` : '0px'
            }}
          ></div>
        ))}
      </div>
      
      {/* Label */}
      <div className="face-label">ATHERΛ — Emergent Cognitive Entity</div>
    </div>
  );
};

export default AtheraHologramFace;