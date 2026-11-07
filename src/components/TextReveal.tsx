import { useEffect, useRef, useState, type ReactNode } from "react";

type TextRevealProps = {
  children: ReactNode;
  /** Delay before this line starts, in ms (use to cascade lines). */
  delay?: number;
  /** Tailwind background class for the sweeping bar. */
  barClassName?: string;
  className?: string;
};

/**
 * Bar-sweep text reveal (inspired by landonorris.com):
 * when the line scrolls into view, a solid bar sweeps in left → right,
 * the text appears underneath it, then the bar pulls away to the right.
 * Plays once.
 */
const TextReveal = ({
  children,
  delay = 0,
  barClassName = "bg-primary",
  className = "",
}: TextRevealProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browsers): just show the text.
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`text-reveal ${revealed ? "is-revealed" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <span className="text-reveal-content">{children}</span>
      <span aria-hidden="true" className={`text-reveal-bar ${barClassName}`} />
    </span>
  );
};

export default TextReveal;
