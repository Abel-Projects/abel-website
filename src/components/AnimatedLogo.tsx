import { useEffect, useState, useRef } from 'react';
import abelLogo from "@/assets/abel-logo.png";

const AnimatedLogo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [navbarRect, setNavbarRect] = useState({ x: 0, y: 0 });
  const [heroRect, setHeroRect] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePositions = () => {
      // Get navbar logo position
      const navbarLogo = document.querySelector('header img');
      if (navbarLogo) {
        const rect = navbarLogo.getBoundingClientRect();
        setNavbarRect({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }

      // Get hero logo position
      const heroLogo = document.querySelector('section img[alt="Abel Mesfin Logo"]');
      if (heroLogo) {
        const rect = heroLogo.getBoundingClientRect();
        setHeroRect({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 + window.scrollY });
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      const heroHeight = window.innerHeight;
      const shouldAnimate = currentScrollY > heroHeight * 0.2 && currentScrollY < heroHeight * 0.8;
      setIsAnimating(shouldAnimate);

      if (shouldAnimate) {
        updatePositions();
      }
    };

    // Initial position calculation
    updatePositions();
    window.addEventListener('resize', updatePositions);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', updatePositions);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isAnimating || !heroRect.x || !navbarRect.x) return null;

  const heroHeight = window.innerHeight;
  const progress = Math.min(Math.max((scrollY - heroHeight * 0.2) / (heroHeight * 0.6), 0), 1);
  
  // Calculate current position based on actual element positions
  const currentX = heroRect.x + (navbarRect.x - heroRect.x) * progress;
  const currentY = heroRect.y + (navbarRect.y - heroRect.y) * progress;
  
  // Calculate scale (from large to small)
  const startScale = 1;
  const endScale = 0.6;
  const currentScale = startScale + (endScale - startScale) * progress;

  return (
    <img
      src={abelLogo}
      alt="Abel Mesfin Logo Moving"
      className="fixed z-[100] pointer-events-none transition-all duration-100 ease-out"
      style={{
        left: `${currentX}px`,
        top: `${currentY - window.scrollY}px`,
        transform: `scale(${currentScale}) translate(-50%, -50%)`,
        opacity: 1
      }}
    />
  );
};

export default AnimatedLogo;