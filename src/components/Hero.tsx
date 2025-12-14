import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/hero-image.avif";
import SignatureAnimation from "@/components/SignatureAnimation";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    
    setMousePosition({ x, y });
  };

  // Three-stage scroll: shrink, buffer, then allow page scroll
  const shrinkThreshold = window.innerHeight * 1; // Shrink happens in first 100vh
  const bufferThreshold = window.innerHeight * 1.3; // 30vh buffer after shrink
  const shrinkProgress = Math.min(scrollY / shrinkThreshold, 1);
  
  // Only start fading/moving after buffer zone
  const fadeProgress = Math.max(0, (scrollY - bufferThreshold) / (window.innerHeight * 0.5));
  
  const imageScale = 1 - shrinkProgress * 0.65; // Shrinks to 35%
  const imageOpacity = scrollY < bufferThreshold ? 1 : 1 - fadeProgress; // Stay visible during shrink and buffer
  const imageY = 0; // No vertical movement
  const signatureOpacity = scrollY < bufferThreshold ? 1 - shrinkProgress * 0.2 : 1 - fadeProgress;
  const grayscaleFilter = shrinkProgress; // Gradually turns to grayscale as it shrinks (0 to 1)

  // Calculate 3D tilt based on mouse position
  const rotateX = isHovering ? mousePosition.y * 8 : 0;
  const rotateY = isHovering ? mousePosition.x * -8 : 0;

  const loremText = "CONTENT CREATOR • BRAND STORYTELLER • DIGITAL MARKETING • VIDEO PRODUCTION • ";

  return (
    <section className="relative h-[200vh] bg-background">
      {/* Fixed container for hero content */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Scrolling Background Text */}
        <div className="absolute inset-0 flex flex-col justify-center gap-12 pointer-events-none overflow-hidden opacity-50">
          {/* First line - scrolls left */}
          <div className="whitespace-nowrap">
            <div className="inline-block animate-scroll-left">
              <span className="text-8xl font-scroll font-black text-primary">
                {loremText.repeat(3)}
              </span>
              <span className="text-8xl font-scroll font-black text-primary">
                {loremText.repeat(3)}
              </span>
            </div>
          </div>
          
          {/* Second line - scrolls right */}
          <div className="whitespace-nowrap">
            <div className="inline-block animate-scroll-right">
              <span className="text-8xl font-scroll font-medium text-primary">
                {loremText.repeat(3)}
              </span>
              <span className="text-8xl font-scroll font-medium text-primary">
                {loremText.repeat(3)}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Image with Mouse Hover 3D Effect & Rectangle Outline */}
        <div 
          className="absolute inset-0 flex items-center justify-center z-10"
          style={{
            transform: `scale(${imageScale}) translateY(${imageY}px)`,
            opacity: imageOpacity,
            transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
          }}
        >
          <div 
            ref={imageContainerRef}
            className="relative w-full h-full flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setMousePosition({ x: 0, y: 0 });
            }}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
            }}
            >
              {/* White background container */}
              <div className="absolute inset-0 bg-background z-0 shadow-2xl rounded-2xl overflow-hidden" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }} />
              
              {/* Hero Image */}
              <img
                src={heroImage}
                alt="Abel Mesfin"
                className="w-full h-screen md:w-auto md:h-full md:max-h-screen object-cover md:object-contain mx-auto relative z-10"
                style={{
                  filter: `grayscale(${grayscaleFilter * 100}%)`,
                  transition: 'filter 0.1s ease-out',
                }}
              />
          </div>
        </div>

        {/* Signature Animation */}
        <div 
          className="absolute inset-0 pointer-events-none z-[15] overflow-visible"
          style={{
            opacity: 1,
          }}
        >
          <SignatureAnimation scrollProgress={shrinkProgress} />
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-0 right-0 flex justify-center text-white text-sm z-20 animate-bounce"
          style={{ opacity: 1 - shrinkProgress * 2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span 
              className="font-menu font-medium"
              style={{ 
                textShadow: '0 0 40px rgba(0, 0, 0, 0.15), 0 0 80px rgba(0, 0, 0, 0.1)' 
              }}
            >
              Scroll to explore
            </span>
            <ChevronDown 
              className="w-4 h-8 text-white animate-pulse" 
              strokeWidth={1.5}
              style={{ 
                filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 40px rgba(0, 0, 0, 0.1))'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;