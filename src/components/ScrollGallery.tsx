import { useEffect, useState, useRef, useCallback } from "react";
import abelCuDenverGala from "@/assets/abel-cu-denver-gala.jpg";
import abelFlavorFlav from "@/assets/abel-flavor-flav.jpg";
import abelDaymondJohn from "@/assets/abel-daymond-john.jpg";
import abelPortrait2 from "@/assets/abel-portrait-2.jpg";
import abelGraduation from "@/assets/abel-graduation.jpg";
import abelScrollGallery6 from "@/assets/abel-scroll-gallery-6.jpg";

type GalleryBox = {
  num: number;
  width: number;
  offsetY: number;
  text: string | string[];
  image: string;
  textAbove?: boolean;
  imageScale?: number;
  imageTranslateY?: number;
};

const boxes: GalleryBox[] = [
  { num: 1, width: 307, offsetY: 30, text: ["CU Denver", "Celebration of Success, 2023"], image: abelCuDenverGala },
  {
    num: 2,
    width: 416,
    offsetY: 328,
    text: "Flavor Flav, 2024",
    image: abelFlavorFlav,
    textAbove: true,
    imageScale: 1.3,
    imageTranslateY: 30,
  },
  { num: 3, width: 287, offsetY: 64, text: "Daymond John, 2024", image: abelDaymondJohn },
  { num: 4, width: 360, offsetY: 232, text: "Portrait, 2024", image: abelPortrait2, textAbove: true },
  { num: 5, width: 307, offsetY: 0, text: "Graduation, 2024", image: abelGraduation },
  {
    num: 6,
    width: 330,
    offsetY: 120,
    text: "Mark Cuban, 2026",
    image: abelScrollGallery6,
  },
];

const ScrollGallery = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateRange, setTranslateRange] = useState({ start: 0, end: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  const measureTranslateRange = useCallback(() => {
    const track = trackRef.current;
    const sticky = stickyRef.current;
    if (!track || !sticky || track.children.length === 0) return;

    const viewportWidth = sticky.clientWidth;
    const first = track.children[0] as HTMLElement;
    const last = track.children[track.children.length - 1] as HTMLElement;

    const firstCenter = first.offsetLeft + first.offsetWidth / 2;
    const lastCenter = last.offsetLeft + last.offsetWidth / 2;

    setTranslateRange({
      start: viewportWidth / 2 - firstCenter,
      end: viewportWidth / 2 - lastCenter,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const scrollStart = containerTop;
      const scrollEnd = containerTop + containerHeight - windowHeight;

      if (scrollY < scrollStart) {
        setScrollProgress(0);
      } else if (scrollY > scrollEnd) {
        setScrollProgress(1);
      } else {
        const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    measureTranslateRange();

    const track = trackRef.current;
    if (!track) return;

    const resizeObserver = new ResizeObserver(measureTranslateRange);
    resizeObserver.observe(track);
    if (stickyRef.current) resizeObserver.observe(stickyRef.current);

    window.addEventListener("resize", measureTranslateRange);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureTranslateRange);
    };
  }, [measureTranslateRange]);

  const translateX =
    translateRange.start + scrollProgress * (translateRange.end - translateRange.start);

  const panStep = 1 / boxes.length;

  return (
    <div ref={containerRef} className="relative h-[480vh] bg-black no-snap">
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden flex items-center"
      >
        <div
          ref={trackRef}
          className="flex gap-[200px] w-max min-w-full"
          style={{
            transform: `translate3d(${translateX}px, 0, 0)`,
            willChange: "transform",
          }}
        >
          {boxes.map(({ num, width, offsetY, text, image, textAbove, imageScale, imageTranslateY }, index) => {
            const imageStartProgress = index * panStep;
            const imageEndProgress = (index + 1) * panStep;
            const imageProgress = Math.max(
              0,
              Math.min(1, (scrollProgress - imageStartProgress) / (imageEndProgress - imageStartProgress))
            );
            const panAmount = 45 + imageProgress * 10;

            const imageTransform =
              imageScale || imageTranslateY
                ? `scale(${imageScale ?? 1}) translateY(${imageTranslateY ?? 0}px)`
                : undefined;

            return (
              <div
                key={num}
                className="flex-shrink-0"
                style={{ marginTop: offsetY }}
              >
                {textAbove && (
                  <div
                    className="text-left text-xs tracking-wide text-white mb-2"
                    style={{ fontFamily: "Gotham, sans-serif", fontWeight: 100, lineHeight: "1.2" }}
                  >
                    {Array.isArray(text) ? (
                      text.map((line, lineIndex) => <div key={lineIndex}>{line}</div>)
                    ) : (
                      <div>{text}</div>
                    )}
                  </div>
                )}
                <div
                  className={`rounded-lg overflow-hidden ${textAbove ? "" : "mb-2"} shadow-lg relative`}
                  style={{ width, height: width }}
                >
                  <img
                    src={image}
                    alt={Array.isArray(text) ? text.join(" ") : text}
                    className="w-full h-full object-cover"
                    onLoad={measureTranslateRange}
                    style={{
                      objectPosition: `${panAmount}% center`,
                      transform: imageTransform,
                      transformOrigin: "center center",
                    }}
                  />
                </div>
                {!textAbove && (
                  <div
                    className="text-left text-xs tracking-wide text-white"
                    style={{ fontFamily: "Gotham, sans-serif", fontWeight: 100, lineHeight: "1.2" }}
                  >
                    {Array.isArray(text) ? (
                      text.map((line, lineIndex) => <div key={lineIndex}>{line}</div>)
                    ) : (
                      <div>{text}</div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollGallery;
