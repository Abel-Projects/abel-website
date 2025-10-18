import { useEffect, useState, useRef } from "react";

const MissionStatement = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen bg-background flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-heading leading-tight transition-all duration-1500 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="block mb-4">Born in Denver, bred for hustle.</span>
          <span className="block">
            Since college, I've had the privilege in leveling up the brands of top-level companies, celebrities, and CEOs
          </span>
        </h2>
      </div>
    </section>
  );
};

export default MissionStatement;
