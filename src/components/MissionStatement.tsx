import { useEffect, useState, useRef } from "react";

const MissionStatement = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    lineRefs.current.forEach((lineRef, index) => {
      if (lineRef) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleLines((prev) => 
                prev.includes(index) ? prev : [...prev, index]
              );
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(lineRef);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const lines = [
    "Born in Denver,",
    "bred for hustle.",
    "Since college, I've had the",
    "privilege in leveling up the",
    "brands of top-level companies,",
    "celebrities, and CEOs"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[150vh] bg-background flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-heading leading-tight">
          {lines.map((line, index) => (
            <span
              key={index}
              ref={(el) => (lineRefs.current[index] = el)}
              className={`block mb-4 transition-all duration-1000 ${
                visibleLines.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
            >
              {line}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};

export default MissionStatement;
