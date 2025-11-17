
import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  type?: 'fade' | 'slide' | 'zoom';
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  type = 'fade'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref, 0.2);
  
  // Animation variants
  const getAnimationStyle = () => {
    if (!isVisible) {
      if (type === 'slide') {
        return {
          opacity: 0,
          transform: `translate3d(${
            direction === 'left' ? '-100%' : 
            direction === 'right' ? '100%' : 
            direction === 'up' ? '0' : '0'
          }, ${
            direction === 'up' ? '100px' : 
            direction === 'down' ? '-100px' : '0'
          }, 0)`,
        };
      } else if (type === 'zoom') {
        return {
          opacity: 0,
          transform: 'scale(0.8)',
        };
      } else {
        return {
          opacity: 0,
          transform: 'translate3d(0, 50px, 0)',
        };
      }
    }
    
    return {
      opacity: 1,
      transform: 'translate3d(0, 0, 0)',
      transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
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

export default AnimatedSection;
