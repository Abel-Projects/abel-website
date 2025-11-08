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
  // To center the last image, we need to account for:
  // - The width of images 2, 3, 4 and their gaps
  // - Half the width of the last image to center it properly
  // Adjusted to center the image itself, not its edge
  const endPosition = -45; // Fine-tuned to center the last image perfectly
  // Calculate translateX, but cap it at the end position
  const translateX = Math.max(endPosition, startPosition + (scrollProgress * (endPosition - startPosition)));

  // Define different sizes and vertical offsets for variety
  // Waka Flocka is last and should be perfectly centered vertically
  const boxes = [
    { num: 1, size: 'w-64 h-64', offsetY: 'mt-0', text: ['CU Denver', 'Celebration of Success, 2023'], image: gallery1 },
    { num: 2, size: 'w-80 h-80', offsetY: 'mt-32', text: 'Flavor Flav, 2024', image: gallery2 },
    { num: 3, size: 'w-56 h-56', offsetY: 'mt-16', text: 'Daymond John, 2024', image: gallery3 },
    { num: 4, size: 'w-72 h-72', offsetY: 'mt-48', text: 'Black Entrepreneurs Day, 2024', image: gallery4 },
    { num: 5, size: 'w-60 h-60', offsetY: 'mt-0', text: 'Waka Flocka, 2024', image: gallery5 },
  ];

  return (
    // Container with extra height to create scroll distance - exclude from snap
    <div ref={containerRef} className="relative h-[400vh] bg-black no-snap">
      {/* Sticky container that pins to viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <div 
          className="flex gap-[200px] w-full"
          style={{ 
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
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