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

  // Start with first photo centered, end with last photo centered
  const startPosition = 45;
  const endPosition = -100; // Adjusted so last photo is centered
  const translateX = startPosition + (scrollProgress * (endPosition - startPosition));

  // Define different sizes and vertical offsets for variety
  const boxes = [
    { num: 1, size: 'w-64 h-64', offsetY: 'mt-0', text: 'Creative Vision' },
    { num: 2, size: 'w-80 h-80', offsetY: 'mt-20', text: 'Brand Stories' },
    { num: 3, size: 'w-56 h-56', offsetY: 'mt-12', text: 'Digital Content' },
    { num: 4, size: 'w-72 h-72', offsetY: 'mt-32', text: 'Production Work' },
    { num: 5, size: 'w-60 h-60', offsetY: 'mt-8', text: 'Video Magic' },
    { num: 6, size: 'w-96 h-96', offsetY: 'mt-24', text: 'Marketing Impact' },
    { num: 7, size: 'w-52 h-52', offsetY: 'mt-16', text: 'Bold Ideas' },
    { num: 8, size: 'w-88 h-88', offsetY: 'mt-40', text: 'Visual Stories' },
  ];

  return (
    // Container with extra height to create scroll distance
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      {/* Sticky container that pins to viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div 
          className="flex gap-12 transition-transform duration-100 ease-out w-full"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {boxes.map(({ num, size, offsetY, text }) => (
            <div key={num} className={`flex-shrink-0 ${offsetY}`}>
              <div
                className={`${size} bg-gray-800 border-2 border-gray-600 rounded-lg flex items-center justify-center mb-4`}
              >
                <span className="text-6xl font-bold text-gray-400">{num}</span>
              </div>
              <p className="text-center text-sm font-thin tracking-wide text-gray-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollGallery;