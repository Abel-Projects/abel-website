import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-image.avif";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scroll-based transformations
  const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
  const imageScale = 1 - scrollProgress * 0.5; // Shrinks to 50%
  const imageOpacity = 1 - scrollProgress * 0.7; // Fades out
  const textOpacity = Math.min(scrollProgress * 2, 1); // Reveals text
  const imageY = scrollProgress * 100; // Moves up

  return (
    <section className="relative h-[200vh] bg-background">
      {/* Fixed container for hero content */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Background Image with 3D Parallax Effect */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `scale(${imageScale}) translateY(${imageY}px)`,
            opacity: imageOpacity,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transform: `perspective(1000px) rotateX(${scrollProgress * 5}deg) rotateY(${scrollProgress * 5}deg)`,
            }}
          >
            <img
              src={heroImage}
              alt="Abel Mesfin"
              className="w-auto h-[70vh] object-contain rounded-3xl shadow-hero"
            />
          </div>
        </div>

        {/* Scrolling Text Overlay */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            opacity: textOpacity,
          }}
        >
          <div className="text-center space-y-6 px-6">
            <h1 className="text-8xl lg:text-9xl font-bold text-heading tracking-tighter leading-[0.9]">
              Abel<br />Mesfin
            </h1>
            <p className="text-2xl lg:text-3xl text-body-text font-light max-w-2xl mx-auto">
              Creating content that converts for top brands and CEOs
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-text text-sm"
          style={{ opacity: 1 - scrollProgress * 2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span>Scroll to explore</span>
            <div className="w-px h-12 bg-muted-text animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;