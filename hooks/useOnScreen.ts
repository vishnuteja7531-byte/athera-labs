
import { useState, useEffect, RefObject, useMemo } from 'react';

export const useOnScreen = (ref: RefObject<HTMLElement>, threshold: number = 0.1) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: '0px',
      threshold,
    };
  }, [threshold]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        // Unobserve after it becomes visible to prevent re-triggering
        observer.unobserve(entry.target);
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};
