import React, { useEffect, useRef, useState } from 'react';
import '../styles/emotionEngine.css';

const AtheraEmotionEngine = () => {
  // Desktop-only guard
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  if (!isDesktop) return null;

  const [mode, setMode] = useState('neutral');
  const engineRef = useRef(null);
  const circleRef = useRef(null);
  const glyphRef = useRef(null);

  useEffect(() => {
    if (!isDesktop) return;

    // Handle emotion mode changes
    const handleModeChange = (e) => {
      const newMode = e.detail;
      setMode(newMode);
    };

    // Add event listener
    window.addEventListener("athera:mode", handleModeChange);

    // Periodic effects based on mode
    const interval = setInterval(() => {
      if (!engineRef.current) return;
      
      switch (mode) {
        case 'insight':
          // Create expanding circles
          if (circleRef.current) {
            circleRef.current.classList.remove('active');
            setTimeout(() => {
              if (circleRef.current) {
                circleRef.current.classList.add('active');
              }
            }, 10);
          }
          
          // Create glyph flashes
          if (glyphRef.current) {
            glyphRef.current.classList.remove('active');
            setTimeout(() => {
              if (glyphRef.current) {
                glyphRef.current.classList.add('active');
                glyphRef.current.textContent = ['◉', '◎', '◈', '◇'][Math.floor(Math.random() * 4)];
              }
            }, 10);
          }
          break;
          
        case 'processing':
          // Increase particle movement would go here if we had particles
          break;
          
        default:
          break;
      }
    }, 3000);

    return () => {
      window.removeEventListener("athera:mode", handleModeChange);
      clearInterval(interval);
    };
  }, [mode, isDesktop]);

  return (
    <div ref={engineRef} className="athera-emotion-engine">
      <div className={`emotion-overlay mode-${mode} active`}></div>
      <div ref={circleRef} className="expanding-circle"></div>
      <div ref={glyphRef} className="glyph-flash"></div>
    </div>
  );
};

export default AtheraEmotionEngine;