import { useEffect, useState, useRef } from "react";

const textBlocks = [
  ["Born in Denver,", "Bred for Hustle"],
  ["I've had the privilege in leveling up the brands of top-level companies, celebrities, and CEOs"],
  ["Transforming visions into viral moments."],
  ["Where storytelling meets strategy, and brands become unforgettable"],
  ["Building legacies through content that doesn't just perform, it transforms"],
];

// Fast ease-in-out — most of the motion completes quickly, then settles
const easeInOutQuart = (t: number) =>
  t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

const getScrollRevealProgress = (elementTop: number, viewportHeight: number) => {
  const triggerStart = viewportHeight * 0.9;
  const triggerEnd = viewportHeight * 0.72;
  const range = triggerStart - triggerEnd;
  const raw = range > 0 ? (triggerStart - elementTop) / range : 1;
  const clamped = Math.max(0, Math.min(1, raw));
  return easeInOutQuart(clamped);
};

type TextBlockProps = {
  lines: string[];
  isHeadline?: boolean;
};

const ScrollTextBlock = ({ lines, isHeadline = false }: TextBlockProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      setProgress(getScrollRevealProgress(rect.top, window.innerHeight));
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const slideOffset = (1 - progress) * 48;

  return (
    <div
      ref={ref}
      className="w-full text-left text-white"
      style={{
        fontFamily: "Gotham, sans-serif",
        fontWeight: isHeadline ? 700 : 500,
        fontSize: isHeadline
          ? "clamp(2.75rem, 5.8vw, 4.875rem)"
          : "clamp(1.875rem, 3.5vw, 3.125rem)",
        lineHeight: 1.08,
        letterSpacing: isHeadline ? "-0.02em" : "0.01em",
        textTransform: isHeadline ? "uppercase" : "none",
        opacity: progress,
        transform: `translate3d(0, ${slideOffset}px, 0)`,
        willChange: "transform, opacity",
      }}
    >
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          style={{
            fontWeight: isHeadline && lineIndex === 1 ? 500 : isHeadline ? 700 : 500,
          }}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

const MissionStatement = () => {
  const [fadeOpacity, setFadeOpacity] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const scrollRange = section.offsetHeight - window.innerHeight;

      if (rect.top > 0 || scrollRange <= 0) {
        setFadeOpacity(0);
        return;
      }

      const scrollProgress = Math.max(0, Math.min(1, -rect.top / scrollRange));
      const fade = Math.max(0, Math.min(1, (scrollProgress - 0.72) / 0.2));
      setFadeOpacity(fade);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [headline, ...bodyBlocks] = textBlocks;

  return (
    <section ref={sectionRef} className="relative bg-black">
      <div className="grid">
        {/* Sticky video background */}
        <div className="sticky top-0 col-start-1 row-start-1 h-screen self-start overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/highlight-reel.webm" type="video/webm" />
          </video>

          <div className="absolute inset-0 bg-black/60" />

          <div
            className="absolute inset-0 bg-black transition-opacity duration-300"
            style={{ opacity: fadeOpacity }}
          />
        </div>

        {/* Scrolling text */}
        <div className="relative z-10 col-start-1 row-start-1 w-full px-6 md:px-10">
          <div className="mx-auto w-full max-w-7xl text-left">
            <div className="flex min-h-screen flex-col justify-end pb-16 md:pb-24">
              <ScrollTextBlock lines={headline} isHeadline />
            </div>

            {bodyBlocks.map((block, index) => (
              <div key={index} className="mt-8 md:mt-10">
                <ScrollTextBlock lines={block} />
              </div>
            ))}

            <div className="h-[55vh]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
