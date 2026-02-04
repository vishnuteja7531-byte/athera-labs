import React, { useState, useEffect } from 'react';
import { isMobileDevice } from './utils/device';
import DesktopLayout from './components/DesktopLayout';
import MobileLayout from './components/MobileLayout';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const checkDevice = () => {
      setIsMobile(isMobileDevice());
    };
    
    checkDevice();
    
    const handleResize = () => {
      checkDevice();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevent SSR hydration issues
  if (!isClient) {
    return null;
  }

  if (isMobile) {
    return <MobileLayout />;
  } else {
    return <DesktopLayout />;
  }
};

export default App;