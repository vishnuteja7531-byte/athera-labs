import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/cinematicIntro.css';

const AtheraCinematicIntro = ({ onComplete }) => {
  // Desktop-only guard
  if (typeof window !== "undefined" && window.innerWidth < 1024) return null;

  const introRef = useRef(null);

  // Check if intro has already been played
  const hasPlayed = localStorage.getItem('atheraCinematicPlayed');
  
  useEffect(() => {
    if (hasPlayed) {
      if (onComplete) onComplete();
      return;
    }

    const introElement = introRef.current;
    if (!introElement) return;

    // Create particle storm
    const createParticleStorm = () => {
      const particleStorm = document.createElement('div');
      particleStorm.className = 'particle-storm';
      
      // Create 100 particles
      for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = Math.random();
        particleStorm.appendChild(particle);
      }
      
      introElement.appendChild(particleStorm);
      
      // Animate particles
      gsap.to(particleStorm.children, {
        duration: 0.5,
        opacity: 0,
        stagger: 0.01,
        onComplete: () => {
          particleStorm.remove();
        }
      });
    };

    // Create light streaks for letters
    const createLightStreaks = () => {
      const letters = ['A', 'T', 'H', 'E', 'R', 'A'];
      const container = document.createElement('div');
      container.className = 'letter-container';
      
      letters.forEach((letter, index) => {
        const letterElement = document.createElement('div');
        letterElement.className = 'letter';
        letterElement.textContent = letter;
        letterElement.style.opacity = '0';
        container.appendChild(letterElement);
      });
      
      introElement.appendChild(container);
      
      // Get all letter elements
      const letterElements = container.querySelectorAll('.letter');
      
      // Animate light streaks and letters
      letterElements.forEach((letter, index) => {
        // Create light streak
        const streak = document.createElement('div');
        streak.className = 'light-streak';
        streak.style.top = `${50 + (index * 2)}%`;
        streak.style.width = '0';
        introElement.appendChild(streak);
        
        // Animate streak
        gsap.to(streak, {
          width: '100%',
          opacity: 1,
          duration: 0.3,
          delay: 0.5 + (index * 0.1),
          ease: 'power2.out',
          onComplete: () => {
            streak.remove();
          }
        });
        
        // Animate letter
        gsap.to(letter, {
          opacity: 1,
          duration: 0.3,
          delay: 0.7 + (index * 0.1),
          onComplete: () => {
            letter.classList.add('assembled');
            letter.classList.add('shine');
          }
        });
      });
    };

    // Create neon lines assembly
    const createNeonAssembly = () => {
      const lines = [];
      
      // Create horizontal lines
      for (let i = 0; i < 2; i++) {
        const line = document.createElement('div');
        line.className = 'neon-line horizontal';
        line.style.top = i === 0 ? '30%' : '70%';
        line.style.left = '0';
        line.style.width = '0';
        lines.push(line);
        introElement.appendChild(line);
      }
      
      // Create vertical lines
      for (let i = 0; i < 2; i++) {
        const line = document.createElement('div');
        line.className = 'neon-line vertical';
        line.style.left = i === 0 ? '20%' : '80%';
        line.style.top = '0';
        line.style.height = '0';
        lines.push(line);
        introElement.appendChild(line);
      }
      
      // Animate lines
      lines.forEach((line, index) => {
        if (line.classList.contains('horizontal')) {
          gsap.to(line, {
            width: '100%',
            opacity: 1,
            duration: 0.5,
            delay: 1.5 + (index * 0.1),
            ease: 'power2.out'
          });
        } else {
          gsap.to(line, {
            height: '100%',
            opacity: 1,
            duration: 0.5,
            delay: 1.5 + (index * 0.1),
            ease: 'power2.out'
          });
        }
      });
    };

    // Create effects
    const createEffects = () => {
      // Radial burst
      const burst = document.createElement('div');
      burst.className = 'radial-burst';
      introElement.appendChild(burst);
      
      gsap.to(burst, {
        width: '200%',
        height: '200%',
        opacity: 0.8,
        duration: 0.5,
        delay: 2.2,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(burst, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => burst.remove()
          });
        }
      });
      
      // Distortion ripple
      const ripple = document.createElement('div');
      ripple.className = 'distortion-ripple';
      introElement.appendChild(ripple);
      
      gsap.to(ripple, {
        width: '300%',
        height: '300%',
        opacity: 0.5,
        duration: 1,
        delay: 2.3,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(ripple, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => ripple.remove()
          });
        }
      });
      
      // Shockwave
      const shockwave = document.createElement('div');
      shockwave.className = 'shockwave';
      introElement.appendChild(shockwave);
      
      gsap.to(shockwave, {
        width: '400%',
        height: '400%',
        opacity: 0.7,
        duration: 1,
        delay: 2.4,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(shockwave, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => shockwave.remove()
          });
        }
      });
    };

    // Show final logo
    const showFinalLogo = () => {
      // Remove previous elements
      document.querySelectorAll('.letter-container, .light-streak, .neon-line, .radial-burst, .distortion-ripple, .shockwave').forEach(el => el.remove());
      
      // Create final logo container
      const finalContainer = document.createElement('div');
      finalContainer.className = 'final-logo-container';
      
      const title = document.createElement('div');
      title.className = 'final-title';
      title.textContent = 'ATHERΛ AI';
      finalContainer.appendChild(title);
      
      const subtitle = document.createElement('div');
      subtitle.className = 'final-subtitle';
      subtitle.textContent = 'The Future Awakens';
      finalContainer.appendChild(subtitle);
      
      introElement.appendChild(finalContainer);
      
      // Animate final logo
      gsap.to(finalContainer, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 2.8,
        ease: 'power2.out'
      });
      
      // Add glow effect to title
      gsap.to(title, {
        textShadow: '0 0 20px #0ff, 0 0 40px #0ff, 0 0 60px #0ff',
        duration: 1,
        delay: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    };

    // Start animation sequence
    const runAnimation = () => {
      // Black screen pause
      setTimeout(() => {
        createParticleStorm();
      }, 300);
      
      setTimeout(() => {
        createLightStreaks();
      }, 800);
      
      setTimeout(() => {
        createNeonAssembly();
      }, 1500);
      
      setTimeout(() => {
        createEffects();
      }, 2200);
      
      setTimeout(() => {
        showFinalLogo();
      }, 3000);
      
      // Fade out and complete
      setTimeout(() => {
        introElement.classList.add('fade-out');
        localStorage.setItem('atheraCinematicPlayed', 'true');
        document.body.classList.remove("athera-intro-active");
        window.dispatchEvent(new Event("athera:introCompleted"));
        
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 800);
      }, 3800);
    };

    runAnimation();
  }, [hasPlayed, onComplete]);

  if (hasPlayed) return null;

  return (
    <div ref={introRef} className="athera-cinematic-intro">
    </div>
  );
};

export default AtheraCinematicIntro;