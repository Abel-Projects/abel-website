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

  const lines = [
    "Born in Denver, bred for hustle. Since college,",
    "I've had the privilege in leveling up the brands",
    "of top-level companies, celebrities, and CEOs"
  ];

  // Calculate opacity for each line based on scroll progress
  const getLineOpacity = (index: number) => {
    const lineProgress = scrollProgress * (lines.length * 2);
    const lineStart = index * 2;
    const lineEnd = index * 2 + 1;
    
    if (lineProgress < lineStart) return 0;
    if (lineProgress > lineEnd) return 1;
    
    return lineProgress - lineStart;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[300vh] bg-muted"
    >
      <div className="sticky top-0 h-screen flex items-center justify-start px-6">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/highlight-reel.webm" type="video/webm" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-12 w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-relaxed text-left">
            {lines.map((line, index) => (
              <span
                key={index}
                className="block mb-2"
                style={{
                  opacity: getLineOpacity(index),
                  transition: 'opacity 0.3s ease-out'
                }}
              >
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
