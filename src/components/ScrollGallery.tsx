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
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

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
  // Account for new image sizes:
  // - Image 2 (Flavor Flav): 416px
  // - Image 3 (Daymond John): 287px  
  // - Image 4 (Black Entrepreneurs Day): 360px
  // - Image 5 (Waka Flocka): 307px
  // - Gaps: 200px between each
  // To center last image, move left by: (416 + 200 + 287 + 200 + 360 + 200) / viewport * 100
  // Approximate calculation: ~-48% to center the last image with new sizes
  const endPosition = -48; // Adjusted for new image sizes
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
          {boxes.map(({ num, size, offsetY, text, image }, index) => {
            const isTextAbove = num === 2 || num === 4; // Flavor Flav and Black Entrepreneurs Day
            
            // Calculate pan effect based on scroll progress and image position
            // Each image pans as it approaches and passes the center of the viewport
            // Distribute images across scroll progress: each image gets ~20% of scroll range
            const imageStartProgress = (index * 0.2);
            const imageEndProgress = ((index + 1) * 0.2);
            const imageProgress = Math.max(0, Math.min(1, (scrollProgress - imageStartProgress) / (imageEndProgress - imageStartProgress)));
            
            // Use a consistent pan range for all images (45% to 55%) to ensure same visual speed
            // This creates a subtle sliding effect that moves at the same rate regardless of image width
            const panAmount = 45 + (imageProgress * 10); // 45% to 55% (consistent 10% range for all)
            
            // Make CU Denver box 20% bigger (w-64 = 256px, 20% bigger = 307.2px)
            // Make Flavor Flav box 30% bigger (w-80 = 320px, 30% bigger = 416px)
            // Make Daymond John box 28% bigger (w-56 = 224px, 28% bigger = 286.72px)
            // Make Black Entrepreneurs Day box 25% bigger (w-72 = 288px, 25% bigger = 360px)
            // Make Waka Flocka box 28% bigger (w-60 = 240px, 28% bigger = 307.2px)
            const boxSize = num === 1 ? 'w-[307px] h-[307px]' 
              : (num === 2 ? 'w-[416px] h-[416px]' 
              : (num === 3 ? 'w-[287px] h-[287px]' 
              : (num === 4 ? 'w-[360px] h-[360px]' 
              : (num === 5 ? 'w-[307px] h-[307px]' 
              : size))));
            // Move CU Denver box down by 30px
            // Move Flavor Flav box down by 200px (mt-32 = 128px, so 128 + 200 = 328px total)
            // Move Black Entrepreneurs Day box down by 40px (mt-48 = 192px, so 192 + 40 = 232px total)
            const boxOffsetY = num === 1 ? 'mt-[30px]' : (num === 2 ? 'mt-[328px]' : (num === 4 ? 'mt-[232px]' : offsetY));
            
            return (
              <div key={num} className={`flex-shrink-0 ${boxOffsetY}`}>
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
                  className={`${boxSize} rounded-lg overflow-hidden ${isTextAbove ? '' : 'mb-2'} shadow-lg relative`}
                >
                  <img 
                    ref={(el) => { imageRefs.current[index] = el; }}
                    src={image} 
                    alt={Array.isArray(text) ? text.join(' ') : text}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: `${panAmount}% center`,
                      transition: 'object-position 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      // Scale up Flavor Flav image (index 1) to enable panning effect, and move it down
                      transform: num === 2 ? 'scale(1.3) translateY(30px)' : 'none',
                      transformOrigin: 'center center'
                    }}
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