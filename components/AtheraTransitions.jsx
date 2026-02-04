import React, { useEffect, useRef } from 'react';
import '../styles/transitions.css';

const AtheraTransitions = () => {
  // Desktop-only guard
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  if (!isDesktop) return null;

  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isDesktop) return;

    // Handle custom transition events
    const handleTransition = (e) => {
      const type = e.detail;
      
      if (!overlayRef.current) return;
      
      // Reset classes
      overlayRef.current.className = 'athera-transition-overlay';
      
      // Apply transition based on type
      setTimeout(() => {
        overlayRef.current.classList.add('active');
        
        switch (type) {
          case 'wipe':
            overlayRef.current.innerHTML = '<div class="neon-wipe active"></div>';
            break;
          case 'distort':
            overlayRef.current.innerHTML = '<div class="digital-distortion active"></div>';
            break;
          case 'dissolve':
            overlayRef.current.innerHTML = '<div class="particle-dissolve active"></div>';
            break;
          case 'flash':
            overlayRef.current.innerHTML = '<div class="light-ray-flash active"></div>';
            break;
          default:
            overlayRef.current.innerHTML = '<div class="neon-wipe active"></div>';
        }
      }, 10);
      
      // Remove transition after animation completes
      setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.classList.remove('active');
          overlayRef.current.innerHTML = '';
        }
      }, 1500);
    };

    // Handle link clicks with .athera-link class
    const handleLinkClick = (e) => {
      if (e.target.classList.contains('athera-link') || e.target.closest('.athera-link')) {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("athera:transition", { detail: "wipe" }));
        
        // Navigate after transition
        setTimeout(() => {
          window.location = e.target.href || e.target.closest('a').href;
        }, 800);
      }
    };

    // Handle scroll-based transitions
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      
      // Trigger transition when scrolling significantly
      if (scrollDifference > 300) {
        window.dispatchEvent(new CustomEvent("athera:transition", { detail: "dissolve" }));
        lastScrollY = currentScrollY;
      }
    };

    // Add event listeners
    window.addEventListener("athera:transition", handleTransition);
    document.addEventListener("click", handleLinkClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("athera:transition", handleTransition);
      document.removeEventListener("click", handleLinkClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop]);

  return (
    <div ref={overlayRef} className="athera-transition-overlay"></div>
  );
};

export default AtheraTransitions;