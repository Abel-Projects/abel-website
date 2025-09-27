import { useEffect, useState } from 'react';
import abelLogo from "@/assets/abel-logo.png";

const AnimatedLogo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      const heroHeight = window.innerHeight;
      const shouldAnimate = currentScrollY > heroHeight * 0.3 && currentScrollY < heroHeight * 0.9;
      setIsAnimating(shouldAnimate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroHeight = window.innerHeight;
  const progress = Math.min(Math.max((scrollY - heroHeight * 0.3) / (heroHeight * 0.6), 0), 1);
  
  // Calculate positions
  const startX = window.innerWidth <= 768 ? window.innerWidth / 2 : window.innerWidth * 0.25;
  const startY = heroHeight * 0.4;
  const endX = 100; // Navbar logo position
  const endY = 32; // Navbar height center
  
  // Calculate current position
  const currentX = startX + (endX - startX) * progress;
  const currentY = startY + (endY - startY) * progress;
  
  // Calculate scale (from large to small)
  const startScale = window.innerWidth <= 768 ? 0.8 : 1;
  const endScale = 0.3;
  const currentScale = startScale + (endScale - startScale) * progress;

  if (!isAnimating) return null;

  return (
    <img
      src={abelLogo}
      alt="Abel Mesfin Logo"
      className="fixed z-[100] pointer-events-none transition-all duration-100 ease-out"
      style={{
        left: `${currentX}px`,
        top: `${currentY}px`,
        transform: `scale(${currentScale}) translate(-50%, -50%)`,
        opacity: 1
      }}
    />
  );
};

export default AnimatedLogo;