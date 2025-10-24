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

  // Calculate opacity for first text set (fades in, then out)
  const getFirstTextOpacity = () => {
    if (scrollProgress < 0.15) return scrollProgress / 0.15; // Fade in
    if (scrollProgress < 0.3) return 1; // Stay visible
    if (scrollProgress < 0.4) return 1 - ((scrollProgress - 0.3) / 0.1); // Fade out
    return 0;
  };

  // Calculate opacity for second text set
  const getSecondTextOpacity = () => {
    if (scrollProgress < 0.45) return 0;
    if (scrollProgress < 0.55) return (scrollProgress - 0.45) / 0.1; // Fade in
    if (scrollProgress < 0.65) return 1; // Stay visible
    if (scrollProgress < 0.75) return 1 - ((scrollProgress - 0.65) / 0.1); // Fade out
    return 0;
  };

  // Calculate video opacity (fades to black)
  const getVideoOpacity = () => {
    if (scrollProgress < 0.75) return 1;
    if (scrollProgress < 0.85) return 1 - ((scrollProgress - 0.75) / 0.1);
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
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-relaxed text-left absolute"
            style={{
              opacity: getFirstTextOpacity(),
              transition: 'opacity 0.5s ease-out'
            }}
          >
            {firstTextSet.map((line, index) => (
              <span key={index} className="block mb-2">
                {line}
              </span>
            ))}
          </h2>

          {/* Second Text Set */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-relaxed text-left"
            style={{
              opacity: getSecondTextOpacity(),
              transition: 'opacity 0.5s ease-out'
            }}
          >
            {secondTextSet.map((line, index) => (
              <span key={index} className="block mb-2">
                {line}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
