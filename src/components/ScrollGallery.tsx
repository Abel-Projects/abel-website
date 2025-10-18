import { useEffect, useState } from "react";

const ScrollGallery = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress (0 to 1)
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min(scrollY / maxScroll, 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate horizontal translation based on scroll
  // Move from right to left as user scrolls down
  const translateX = -scrollProgress * 50; // Adjust multiplier for speed

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div 
        className="flex gap-6 transition-transform duration-100 ease-out"
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <div
            key={num}
            className="flex-shrink-0 w-80 h-96 bg-muted rounded-lg flex items-center justify-center"
          >
            <span className="text-6xl font-bold text-muted-foreground">{num}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScrollGallery;
