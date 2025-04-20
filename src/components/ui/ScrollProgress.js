import React, { useState, useEffect } from 'react';

export const ScrollProgress = ({ height = '4px', gradient = 'linear-gradient(to right, #333333, #555555)', glow = 'none' }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-50 w-full"
      style={{
        height,
      }}
    >
      <div
        className="h-full"
        style={{
          width: `${scrollProgress}%`,
          background: gradient,
          boxShadow: glow !== 'none' ? `0 0 10px ${glow}` : 'none',
          transition: 'width 0.1s ease-out',
        }}
      ></div>
    </div>
  );
};

export default ScrollProgress;