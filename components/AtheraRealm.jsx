import React, { useEffect } from 'react';
import '../styles/realm.css';

const AtheraRealm = () => {
  // Desktop-only guard
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  if (!isDesktop) return null;
  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      
      const layers = document.querySelectorAll('.realm-parallax');
      layers.forEach((layer, i) => {
        const speed = (i + 1) * 0.5;
        layer.style.setProperty('--x', `${x * speed}px`);
        layer.style.setProperty('--y', `${y * speed}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="athera-realm">
      {/* Deep space nebula */}
      <div className="realm-layer realm-nebula realm-parallax"></div>
      
      {/* Scattered neon atoms */}
      <div className="realm-layer realm-atoms realm-parallax">
        <div className="realm-atom realm-atom-1"></div>
        <div className="realm-atom realm-atom-2"></div>
        <div className="realm-atom realm-atom-3"></div>
        <div className="realm-atom realm-atom-4"></div>
      </div>
      
      {/* Holographic grid */}
      <div className="realm-layer realm-grid realm-parallax"></div>
      
      {/* Light rays */}
      <div className="realm-layer realm-rays realm-parallax"></div>
    </div>
  );
};

export default AtheraRealm;