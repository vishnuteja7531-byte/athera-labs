import React, { useRef, useState, useEffect } from 'react';

// Lightweight mobile animation hook
export const useMobileAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
          // Unobserve after animation to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, threshold]);

  return [ref, isVisible];
};

// Simple mobile animation component
export const MobileAnimatedSection = ({ 
  children, 
  className = '',
  delay = 0,
  type = 'fade'
}) => {
  const [ref, isVisible] = useMobileAnimation(0.1);
  
  const getAnimationStyle = () => {
    if (!isVisible) {
      return {
        opacity: 0,
        transform: type === 'slide' ? 'translateY(30px)' : 'translateY(20px)',
      };
    }
    
    return {
      opacity: 1,
      transform: 'translateY(0)',
      transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
    };
  };

  return (
    <div
      ref={ref}
      className={className}
      style={getAnimationStyle()}
    >
      {children}
    </div>
  );
};

// Optimized feature card for mobile
export const MobileFeatureCard = ({ title, index }) => {
  const [ref, isVisible] = useMobileAnimation(0.1);
  
  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
    transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`,
  };

  return (
    <div 
      ref={ref}
      className="group p-3 rounded-xl bg-black/20 border border-cyan-400/20 transition-all duration-300 hover:border-cyan-400"
      style={style}
    >
      <div className="relative w-full h-24 flex items-center justify-center text-center p-3 rounded-lg bg-black/30">
        <div className="absolute inset-0 border border-cyan-400/30 rounded-lg group-hover:border-cyan-400 transition-colors duration-300"></div>
        <h3 className="font-orbitron text-sm font-bold text-white group-hover:text-cyan-400">{title}</h3>
      </div>
    </div>
  );
};

// Optimized pricing card for mobile
export const MobilePricingCard = ({ tier, price, features, isFeatured = false }) => {
  const [ref, isVisible] = useMobileAnimation(0.1);
  
  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
  };

  return (
    <div 
      ref={ref}
      className={`relative p-5 rounded-xl border transition-all duration-300 ${
        isFeatured 
          ? 'border-cyan-400 bg-cyan-900/20 shadow-lg shadow-cyan-500/20' 
          : 'border-gray-700/50 bg-black/30'
      }`}
      style={style}
    >
      {isFeatured && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-400 text-black font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider font-orbitron">
          Popular
        </div>
      )}
      <h3 className="font-orbitron text-lg font-bold text-glow mb-2">{tier}</h3>
      <p className="text-2xl font-bold mt-2 text-cyan-300">{price}</p>
      <ul className="mt-4 space-y-2 text-gray-300 text-sm">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 font-orbitron font-bold py-2.5 rounded-lg transition-all duration-300 text-sm ${
        isFeatured 
          ? 'bg-cyan-400 text-black hover:bg-white' 
          : 'bg-gray-700/50 text-white hover:bg-cyan-400 hover:text-black'
      }`}>
        Get Started
      </button>
    </div>
  );
};

// Optimized roadmap item for mobile
export const MobileRoadmapItem = ({ item, index }) => {
  const [ref, isVisible] = useMobileAnimation(0.1);
  
  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
    transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`,
  };

  return (
    <div ref={ref} className="relative flex items-start mb-8" style={style}>
      {/* Timeline node */}
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center">
        <div className={`w-3 h-3 rounded-full ${
          item.status === 'completed' ? 'bg-green-400' : 
          item.status === 'in-progress' ? 'bg-yellow-400 animate-pulse' : 'bg-gray-600'
        }`}></div>
      </div>
      
      {/* Content */}
      <div className="ml-10 flex-1">
        <div className="bg-black/30 p-4 rounded-xl border border-cyan-500/20">
          <span className="font-orbitron text-cyan-400 text-xs font-bold tracking-wider">{item.phase}</span>
          <h3 className="font-orbitron text-lg font-bold text-white mt-1">{item.title}</h3>
          <p className="text-gray-300 text-sm mt-2">{item.description}</p>
          <div className="mt-3">
            <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
              item.status === 'completed' ? 'bg-green-900/30 text-green-400' : 
              item.status === 'in-progress' ? 'bg-yellow-900/30 text-yellow-400' : 'bg-gray-800/30 text-gray-400'
            }`}>
              {item.status === 'completed' ? 'Completed' : 
               item.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Optimized hero animation for mobile
export const MobileHeroAnimation = ({ children }) => {
  const [ref, isVisible] = useMobileAnimation(0.1);
  
  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
    transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  return (
    <div ref={ref} style={style}>
      {children}
    </div>
  );
};