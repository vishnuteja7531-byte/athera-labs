export function isMobileDevice() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}

export function isTabletDevice() {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 768 && window.innerWidth < 1024;
}

export function getDeviceType() {
  if (typeof window === "undefined") return 'desktop';
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

// Check if device has good performance for 3D
export function hasGood3DPerformance() {
  if (typeof window === "undefined") return false;
  
  // Simple performance check based on device capabilities
  const hasWebGL = (() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(window as any).WebGLRenderingContext && 
             (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
    } catch (e) {
      return false;
    }
  })();
  
  // Basic device RAM check (approximate)
  // @ts-ignore
  const deviceRAM = (navigator as any).deviceMemory || 4; // fallback to 4GB
  
  return hasWebGL && deviceRAM >= 2; // Need at least 2GB RAM and WebGL support
}