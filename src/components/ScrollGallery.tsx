import { useEffect, useState, useRef } from "react";

const ScrollGallery = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      // Calculate progress through the container
      // Start when container reaches top of viewport
      const scrollStart = containerTop;
      const scrollEnd = containerTop + containerHeight - windowHeight;
      
      if (scrollY < scrollStart) {
        setScrollProgress(0);
      } else if (scrollY > scrollEnd) {
        setScrollProgress(1);
      } else {
        const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Start with first photo centered, then scroll left through all photos
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
    // Container with extra height to create scroll distance
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      {/* Sticky container that pins to viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
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
      </div>
    </div>
  );
};

export default ScrollGallery;