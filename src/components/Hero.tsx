import { useEffect, useState, useRef } from "react";
import heroImage from "@/assets/hero-image.avif";
import SignatureAnimation from "@/components/SignatureAnimation";

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

  // Calculate scroll-based transformations
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  const imageScale = 1 - scrollProgress * 0.5; // Shrinks to 50%
  const imageOpacity = 1 - scrollProgress * 0.7; // Fades out
  const imageY = scrollProgress * 100; // Moves up
  const borderOpacity = 1 - scrollProgress * 0.3; // Border fades slightly

  // Calculate 3D tilt based on mouse position (reduced by 20%)
  const rotateX = isHovering ? mousePosition.y * 8 : 0;
  const rotateY = isHovering ? mousePosition.x * -8 : 0;

  const loremText = "CONTENT CREATOR • BRAND STORYTELLER • DIGITAL MARKETING • VIDEO PRODUCTION • ";

  return (
    <section className="relative h-[150vh] bg-background">
      {/* Fixed container for hero content */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Scrolling Background Text */}
        <div className="absolute inset-0 flex flex-col justify-center gap-12 pointer-events-none overflow-hidden opacity-10">
          {/* First line - scrolls left */}
          <div className="whitespace-nowrap">
            <div className="inline-block animate-scroll-left">
              <span className="text-8xl font-bold text-heading">
                {loremText.repeat(3)}
              </span>
              <span className="text-8xl font-bold text-heading">
                {loremText.repeat(3)}
              </span>
            </div>
          </div>
          
          {/* Second line - scrolls right */}
          <div className="whitespace-nowrap">
            <div className="inline-block animate-scroll-right">
              <span className="text-8xl font-bold text-heading">
                {loremText.repeat(3)}
              </span>
              <span className="text-8xl font-bold text-heading">
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
            {/* Hero Image */}
            <img
              src={heroImage}
              alt="Abel Mesfin"
              className="w-auto h-full max-h-screen object-contain mx-auto relative z-10"
            />
          </div>
        </div>

        {/* Signature Animation */}
        <SignatureAnimation scrollProgress={scrollProgress} />

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white text-sm z-20 animate-bounce"
          style={{ opacity: 1 - scrollProgress * 2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <div className="w-px h-12 bg-white animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;