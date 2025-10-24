import { useEffect, useState, useRef } from "react";

const MissionStatement = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through the section
      const scrollTop = -rect.top;
      const scrollRange = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / scrollRange));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const firstTextSet = [
    "Born in Denver, bred for hustle. Since college,",
    "I've had the privilege in leveling up the brands",
    "of top-level companies, celebrities, and CEOs"
  ];

  const secondTextSet = [
    "Lorem ipsum dolor sit amet, consectetur",
    "adipiscing elit, sed do eiusmod tempor",
    "incididunt ut labore et dolore magna aliqua"
  ];

  // Calculate opacity and transform for each line in first text set
  const getFirstTextLineStyle = (index: number) => {
    const baseProgress = scrollProgress;
    const lineDelay = index * 0.03; // Stagger each line
    
    // Fade in
    if (baseProgress < 0.05 + lineDelay) {
      const fadeIn = (baseProgress - lineDelay) / 0.05;
      return { 
        opacity: Math.max(0, fadeIn),
        transform: `translateY(${Math.max(0, (1 - fadeIn) * 20)}px)`
      };
    }
    // Stay visible
    if (baseProgress < 0.25) {
      return { opacity: 1, transform: 'translateY(0)' };
    }
    // Scroll up and fade out
    if (baseProgress < 0.35 + lineDelay) {
      const fadeProgress = (baseProgress - 0.25 - lineDelay) / 0.1;
      return { 
        opacity: Math.max(0, 1 - fadeProgress),
        transform: `translateY(-${fadeProgress * 60}px)`
      };
    }
    return { opacity: 0, transform: 'translateY(-60px)' };
  };

  // Calculate opacity and transform for each line in second text set
  const getSecondTextLineStyle = (index: number) => {
    const lineDelay = index * 0.03; // Stagger each line
    
    // Wait before starting
    if (scrollProgress < 0.30 + lineDelay) {
      return { opacity: 0, transform: 'translateY(40px)' };
    }
    // Fade in from bottom
    if (scrollProgress < 0.40 + lineDelay) {
      const fadeProgress = (scrollProgress - 0.30 - lineDelay) / 0.1;
      return { 
        opacity: fadeProgress,
        transform: `translateY(${(1 - fadeProgress) * 40}px)`
      };
    }
    // Stay visible
    if (scrollProgress < 0.60) {
      return { opacity: 1, transform: 'translateY(0)' };
    }
    // Scroll up and fade out
    if (scrollProgress < 0.70 + lineDelay) {
      const fadeProgress = (scrollProgress - 0.60 - lineDelay) / 0.1;
      return { 
        opacity: Math.max(0, 1 - fadeProgress),
        transform: `translateY(-${fadeProgress * 40}px)`
      };
    }
    return { opacity: 0, transform: 'translateY(-40px)' };
  };

  // Calculate video opacity (fades to black)
  const getVideoOpacity = () => {
    if (scrollProgress < 0.70) return 1;
    if (scrollProgress < 0.85) return 1 - ((scrollProgress - 0.70) / 0.15);
    return 0;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[400vh] bg-black"
    >
      <div className="sticky top-0 h-screen flex items-center justify-start px-6">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: getVideoOpacity() }}
        >
          <source src="/highlight-reel.webm" type="video/webm" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-12 w-full">
          {/* First Text Set */}
          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-relaxed text-left absolute">
            {firstTextSet.map((line, index) => {
              const style = getFirstTextLineStyle(index);
              return (
                <span 
                  key={index} 
                  className="block mb-2"
                  style={{
                    opacity: style.opacity,
                    transform: style.transform,
                    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
                  }}
                >
                  {line}
                </span>
              );
            })}
          </div>

          {/* Second Text Set */}
          <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-relaxed text-left">
            {secondTextSet.map((line, index) => {
              const style = getSecondTextLineStyle(index);
              return (
                <span 
                  key={index} 
                  className="block mb-2"
                  style={{
                    opacity: style.opacity,
                    transform: style.transform,
                    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
                  }}
                >
                  {line}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
