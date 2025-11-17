import React, { useEffect, useState } from 'react';
import '../styles/arrivalIntro.css';

const AtheraArrivalIntro = () => {
  // Desktop-only guard
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  if (!isDesktop) return null;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isDesktop) return;

    // Check if intro has already been played
    const hasPlayed = localStorage.getItem('atheraIntroPlayed');
    
    if (!hasPlayed) {
      setIsVisible(true);
      
      // Mark as played after the intro sequence
      setTimeout(() => {
        localStorage.setItem('atheraIntroPlayed', 'true');
      }, 5000);
    }
  }, [isDesktop]);

  useEffect(() => {
    if (!isVisible || !isDesktop) return;

    // Start animation sequence
    const timer1 = setTimeout(() => {
      document.querySelectorAll('.neon-line').forEach(line => {
        line.classList.add('active');
      });
    }, 500);

    const timer2 = setTimeout(() => {
      document.querySelector('.central-circle').classList.add('active');
    }, 1500);

    const timer3 = setTimeout(() => {
      document.querySelector('.intro-title').classList.add('active');
    }, 2500);

    const timer4 = setTimeout(() => {
      document.querySelector('.intro-subtitle').classList.add('active');
    }, 3500);

    const timer5 = setTimeout(() => {
      document.querySelector('.dissolve-transition').classList.add('active');
    }, 4500);

    const timer6 = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [isVisible, isDesktop]);

  if (!isVisible) return null;

  return (
    <div className="athera-arrival-intro">
      <div className="intro-content">
        {/* Neon border lines */}
        <div className="neon-line horizontal top neon-line"></div>
        <div className="neon-line vertical right neon-line"></div>
        <div className="neon-line horizontal bottom neon-line"></div>
        <div className="neon-line vertical left neon-line"></div>
        
        {/* Central circle */}
        <div className="central-circle"></div>
        
        {/* Title with glitch effect */}
        <h1 className="intro-title glitch">ATHERΛ AI</h1>
        
        {/* Subtitle */}
        <p className="intro-subtitle">The Emergence Begins</p>
      </div>
      
      {/* Dissolve transition */}
      <div className="dissolve-transition"></div>
    </div>
  );
};

export default AtheraArrivalIntro;