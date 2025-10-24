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

  const textSets = [
    [
      "Born in Denver, bred for hustle. Since college,",
      "I've had the privilege in leveling up the brands",
      "of top-level companies, celebrities, and CEOs"
    ],
    [
      "Lorem ipsum dolor sit amet, consectetur",
      "adipiscing elit, sed do eiusmod tempor",
      "incididunt ut labore et dolore magna aliqua"
    ],
    [
      "Ut enim ad minim veniam, quis nostrud",
      "exercitation ullamco laboris nisi ut aliquip",
      "ex ea commodo consequat"
    ],
    [
      "Duis aute irure dolor in reprehenderit",
      "in voluptate velit esse cillum dolore",
      "eu fugiat nulla pariatur"
    ]
  ];

  // Calculate opacity and transform for each text set
  const getTextSetStyle = (setIndex: number, lineIndex: number) => {
    const baseStart = setIndex * 0.22; // Each set takes 22% of scroll progress
    const lineDelay = lineIndex * 0.02; // Stagger each line
    const progress = scrollProgress;
    
    // Fade in from bottom
    if (progress < baseStart + lineDelay) {
      return { opacity: 0, transform: 'translateY(60px)' };
    }
    if (progress < baseStart + 0.08 + lineDelay) {
      const fadeIn = (progress - baseStart - lineDelay) / 0.08;
      return { 
        opacity: fadeIn,
        transform: `translateY(${(1 - fadeIn) * 60}px)`
      };
    }
    // Stay visible and scroll up
    if (progress < baseStart + 0.18) {
      const scrollUp = (progress - baseStart - 0.08) / 0.1;
      return { 
        opacity: 1,
        transform: `translateY(-${scrollUp * 40}px)`
      };
    }
    // Continue scrolling up and fade out
    if (progress < baseStart + 0.22 + lineDelay) {
      const fadeOut = (progress - baseStart - 0.18 - lineDelay) / 0.04;
      return { 
        opacity: Math.max(0, 1 - fadeOut),
        transform: `translateY(-${40 + fadeOut * 60}px)`
      };
    }
    return { opacity: 0, transform: 'translateY(-100px)' };
  };

  // Calculate video opacity (fades to black after all text)
  const getVideoOpacity = () => {
    if (scrollProgress < 0.88) return 1;
    if (scrollProgress < 0.95) return 1 - ((scrollProgress - 0.88) / 0.07);
    return 0;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[500vh] bg-black"
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
          {textSets.map((textSet, setIndex) => (
            <div 
              key={setIndex}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-relaxed text-left absolute inset-0 flex items-center"
            >
              <div>
                {textSet.map((line, lineIndex) => {
                  const style = getTextSetStyle(setIndex, lineIndex);
                  return (
                    <span 
                      key={lineIndex} 
                      className="block mb-4"
                      style={{
                        opacity: style.opacity,
                        transform: style.transform,
                        transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'
                      }}
                    >
                      {line}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
