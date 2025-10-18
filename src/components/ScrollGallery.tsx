import { useEffect, useState } from "react";

const ScrollGallery = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress (0 to 1)
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate horizontal translation based on scroll
  // Slower scroll speed - user needs to scroll more to see all photos
  const translateX = -scrollProgress * 150; // Higher multiplier = needs more scrolling

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
    <section className="py-20 bg-background overflow-hidden">
      <div 
        className="flex gap-6 transition-transform duration-100 ease-out pb-20"
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