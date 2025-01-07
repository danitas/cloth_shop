import { useEffect, useState } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 976,
};

interface ScreenSize {
  isSmUp: boolean;
  isMdUp: boolean;
  isLgUp: boolean;
  isSmDown: boolean;
  isMdDown: boolean;
  isLgDown: boolean;
}

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isSmUp: false,
    isMdUp: false,
    isLgUp: false,
    isSmDown: false,
    isMdDown: false,
    isLgDown: false,
  });

  const handleResize = () => {
    setScreenSize({
      isSmUp: window.innerWidth >= breakpoints.sm,
      isMdUp: window.innerWidth >= breakpoints.md,
      isLgUp: window.innerWidth >= breakpoints.lg,
      isSmDown: window.innerWidth < breakpoints.sm,
      isMdDown: window.innerWidth < breakpoints.md,
      isLgDown: window.innerWidth < breakpoints.lg,
    });
  };

  useEffect(() => {
    // Initialize screen size on mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
