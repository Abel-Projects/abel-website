import { useEffect, useState, useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";

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
  // Calculate end position to perfectly center the last photo (5th image)
  // Images: w-64 (256px), w-80 (320px), w-56 (224px), w-72 (288px), w-60 (240px)
  // Gap between images: 200px
  // To center last image, move left by: (320 + 200 + 224 + 200 + 288 + 200) / viewport * 100
  // Approximate: ~52% to center the last image perfectly
  const endPosition = -52; // Adjusted to perfectly center the last image
  // Calculate translateX, but cap it at the end position
  const translateX = Math.max(endPosition, startPosition + (scrollProgress * (endPosition - startPosition)));

  // Define different sizes and vertical offsets for variety
  const boxes = [
    { num: 1, size: 'w-64 h-64', offsetY: 'mt-0', text: ['CU Denver', 'Celebration of Success, 2023'], image: gallery1 },
    { num: 2, size: 'w-80 h-80', offsetY: 'mt-32', text: 'Flavor Flav, 2024', image: gallery2 },
    { num: 3, size: 'w-56 h-56', offsetY: 'mt-16', text: 'Daymond John, 2024', image: gallery3 },
    { num: 4, size: 'w-72 h-72', offsetY: 'mt-48', text: 'Black Entrepreneurs Day, 2024', image: gallery4 },
    { num: 5, size: 'w-60 h-60', offsetY: '', text: 'Waka Flocka, 2024', image: gallery5 },
  ];

  return (
    // Container with extra height to create scroll distance - exclude from snap
    <div ref={containerRef} className="relative h-[400vh] bg-black no-snap">
      {/* Sticky container that pins to viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div 
          className="flex gap-[200px] transition-transform duration-100 ease-out w-full"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {boxes.map(({ num, size, offsetY, text, image }) => {
            const isTextAbove = num === 2 || num === 4; // Flavor Flav and Black Entrepreneurs Day
            return (
              <div key={num} className={`flex-shrink-0 ${offsetY}`}>
                {isTextAbove && (
                  <div 
                    className="text-left text-xs tracking-wide text-white mb-2"
                    style={{ fontFamily: 'Gotham, sans-serif', fontWeight: 100, lineHeight: '1.2' }}
                  >
                    {Array.isArray(text) ? (
                      text.map((line, index) => (
                        <div key={index}>{line}</div>
                      ))
                    ) : (
                      <div>{text}</div>
                    )}
                  </div>
                )}
                <div
                  className={`${size} rounded-lg overflow-hidden ${isTextAbove ? '' : 'mb-2'} shadow-lg`}
                >
                  <img 
                    src={image} 
                    alt={Array.isArray(text) ? text.join(' ') : text}
                    className="w-full h-full object-cover"
                  />
                </div>
                {!isTextAbove && (
                  <div 
                    className="text-left text-xs tracking-wide text-white"
                    style={{ fontFamily: 'Gotham, sans-serif', fontWeight: 100, lineHeight: '1.2' }}
                  >
                    {Array.isArray(text) ? (
                      text.map((line, index) => (
                        <div key={index}>{line}</div>
                      ))
                    ) : (
                      <div>{text}</div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollGallery;