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
          { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
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
    "Born in Denver, bred for hustle.",
    "Since college, I've had the privilege in",
    "leveling up the brands of top-level companies,",
    "celebrities, and CEOs"
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[150vh] bg-background flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-heading leading-relaxed">
          {lines.map((line, index) => (
            <span
              key={index}
              ref={(el) => (lineRefs.current[index] = el)}
              className="block mb-6 relative overflow-hidden"
            >
              <span className="relative inline-block">
                <span className="relative z-0 pb-2 inline-block">{line}</span>
                {/* Blue reveal box */}
                <span 
                  className={`absolute inset-0 bg-primary z-10 transition-transform duration-1000 ease-out ${
                    visibleLines.includes(index)
                      ? 'translate-x-[110%]'
                      : '-translate-x-full'
                  }`}
                />
              </span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};

export default MissionStatement;
