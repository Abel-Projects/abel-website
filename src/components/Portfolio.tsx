import { useEffect, useState, useRef } from "react";

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when section enters viewport, 1 when fully scrolled
      // Animation happens over ~100vh of scroll
      const scrollStart = windowHeight;
      const scrollEnd = -windowHeight;
      const scrollRange = scrollStart - scrollEnd;
      
      if (rect.top > scrollStart) {
        setScrollProgress(0);
      } else if (rect.top < scrollEnd) {
        setScrollProgress(1);
      } else {
        const progress = (scrollStart - rect.top) / scrollRange;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate split heights (0% to 50% each, meeting in middle)
  const topHeight = scrollProgress * 50; // 0% to 50%
  const bottomHeight = scrollProgress * 50; // 0% to 50%

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[200vh] bg-background"
    >
      {/* Sticky intro section */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Split screen overlays */}
        <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
          {/* Top overlay - grows downward */}
          <div 
            className="w-full bg-black transition-all duration-75 ease-out"
            style={{ height: `${topHeight}%` }}
          />
          {/* Bottom overlay - grows upward */}
          <div 
            className="w-full bg-black transition-all duration-75 ease-out"
            style={{ height: `${bottomHeight}%` }}
          />
        </div>
      </div>

      {/* Content that gets revealed underneath */}
      <div className="relative z-0 py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl lg:text-7xl font-bold text-heading mb-6 tracking-tighter text-center">
            Dream Big, I'll Handle The Execution
          </h2>
          {/* Rest of your portfolio content here */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
