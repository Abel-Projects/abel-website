import { useEffect, useState, useRef } from "react";

const ScrollGallery = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section has been scrolled through
      // Start when section enters viewport, end after scrolling past it
      const scrollStart = -sectionHeight;
      const scrollEnd = windowHeight;
      const scrollRange = scrollEnd - scrollStart;
      const currentScroll = -sectionTop;
      
      const progress = Math.max(0, Math.min(1, (currentScroll - scrollStart) / scrollRange));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Start with first photo centered, then scroll left
  // translateX starts at ~45% (centering first photo) and moves to -150%
  const startPosition = 45;
  const endPosition = -150;
  const translateX = startPosition + (scrollProgress * (endPosition - startPosition));

  // Define different sizes and vertical offsets for variety
  const boxes = [
    { num: 1, size: 'w-64 h-64', offsetY: 'mt-0' },
    { num: 2, size: 'w-80 h-80', offsetY: 'mt-20' },
    { num: 3, size: 'w-56 h-56', offsetY: 'mt-12' },
    { num: 4, size: 'w-72 h-72', offsetY: 'mt-32' },
    { num: 5, size: 'w-60 h-60', offsetY: 'mt-8' },
    { num: 6, size: 'w-96 h-96', offsetY: 'mt-24' },
    { num: 7, size: 'w-52 h-52', offsetY: 'mt-16' },
    { num: 8, size: 'w-88 h-88', offsetY: 'mt-40' },
  ];

  return (
    <section ref={sectionRef} className="h-screen bg-background overflow-hidden flex items-center">
      <div 
        className="flex gap-6 transition-transform duration-100 ease-out w-full"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {boxes.map(({ num, size, offsetY }) => (
          <div
            key={num}
            className={`flex-shrink-0 ${size} ${offsetY} bg-gray-800 border-2 border-gray-600 rounded-lg flex items-center justify-center`}
          >
            <span className="text-6xl font-bold text-gray-400">{num}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollGallery;