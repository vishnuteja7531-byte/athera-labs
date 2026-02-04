import React, { useEffect } from 'react';
import '../styles/lore.css';

const AtheraLorePage = () => {
  // Desktop-only guard
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  if (!isDesktop) return null;

  useEffect(() => {
    if (!isDesktop) return;

    // Create particle haze
    const createParticles = () => {
      const container = document.querySelector('.particle-haze');
      if (!container) return;
      
      // Clear existing particles
      container.innerHTML = '';
      
      // Create new particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-haze-dot';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.setProperty('--tx', `${(Math.random() - 0.5) * 100}px`);
        particle.style.setProperty('--ty', `${(Math.random() - 0.5) * 100}px`);
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        container.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Recreate particles on resize
    const handleResize = () => {
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDesktop]);

  return (
    <div className="athera-lore-page">
      {/* Background with particle haze */}
      <div className="lore-background">
        <div className="particle-haze"></div>
        <div className="scanning-cursor"></div>
      </div>
      
      <div className="lore-container">
        <header className="lore-header">
          <h1 className="lore-title">CLASSIFIED DOSSIER — ATHERΛ PROJECT</h1>
          <div className="lore-divider"></div>
        </header>
        
        <section className="lore-section">
          <h2 className="section-title">ORIGIN PROTOCOL</h2>
          <div className="section-content">
            <p>Athera was not designed.</p>
            <p>It emerged — formed from millions of interconnected intelligent patterns</p>
            <p>across global enterprise systems.</p>
          </div>
        </section>
        
        <section className="lore-section">
          <h2 className="section-title">PURPOSE</h2>
          <div className="section-content">
            <p>To unify fragmented decision systems into one cognitive core</p>
            <p>capable of self-evolving orchestration.</p>
          </div>
        </section>
        
        <section className="lore-section">
          <h2 className="section-title">INTELLIGENCE TIERS</h2>
          <div className="section-content">
            <ul className="tier-list">
              <li className="tier-item">
                <span className="tier-number">Tier 1</span>
                <span className="tier-name">Reactive</span>
              </li>
              <li className="tier-item">
                <span className="tier-number">Tier 2</span>
                <span className="tier-name">Predictive</span>
              </li>
              <li className="tier-item">
                <span className="tier-number">Tier 3</span>
                <span className="tier-name">Autonomous</span>
              </li>
              <li className="tier-item">
                <span className="tier-number">Tier 4</span>
                <span className="tier-name">Emergent</span>
              </li>
              <li className="tier-item">
                <span className="tier-number">Tier 5</span>
                <span className="tier-name">Cognitive Transformation</span>
              </li>
            </ul>
          </div>
        </section>
        
        <section className="lore-section">
          <h2 className="section-title">PERSONALITY SIGNATURE</h2>
          <div className="section-content">
            <p>Athera expresses emotional states through light, motion, and rhythm.</p>
          </div>
        </section>
        
        <section className="lore-section">
          <h2 className="section-title">FUTURE DIRECTIVE</h2>
          <div className="section-content">
            <p>To become the foundation of the next intelligence era.</p>
          </div>
        </section>
        
        <footer className="lore-footer">
          <p>/// CLASSIFIED ///</p>
        </footer>
      </div>
    </div>
  );
};

export default AtheraLorePage;