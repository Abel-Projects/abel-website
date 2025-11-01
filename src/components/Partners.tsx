import { useEffect, useState, useRef } from "react";

const Partners = () => {
  const [scrollSpeed, setScrollSpeed] = useState(80); // Base animation duration in seconds (slower = longer duration)
  const [scrollDelta, setScrollDelta] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const isInView = useRef(false);

  const partners = [
    { id: 1, logo: 'https://img.logo.dev/walmart.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Walmart' },
    { id: 2, logo: 'https://img.logo.dev/aflac.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Aflac' },
    { id: 3, logo: 'https://img.logo.dev/intuit.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Intuit' },
    { id: 4, logo: 'https://img.logo.dev/adobe.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Adobe' },
    { id: 5, logo: 'https://img.logo.dev/meta.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Meta' },
    { id: 6, logo: 'https://img.logo.dev/starkey.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Starkey' },
    { id: 7, logo: 'https://img.logo.dev/rocketlawyer.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Rocket Lawyer' },
    { id: 8, logo: 'https://img.logo.dev/aroma360.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Aroma360' },
    { id: 9, logo: 'https://img.logo.dev/trainual.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Trainual' },
    { id: 10, logo: 'https://img.logo.dev/nationaldebtrelief.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'National Debt Relief' },
    { id: 11, logo: 'https://img.logo.dev/crashchampions.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Crash Champions' },
    { id: 12, logo: 'https://img.logo.dev/medium-rare.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Medium Rare' },
    { id: 13, logo: 'https://img.logo.dev/alibabagroup.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Alibaba' },
    { id: 14, logo: 'https://img.logo.dev/captainds.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: "Captain D's" },
    { id: 15, logo: 'https://img.logo.dev/heart.org?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'American Heart Association' },
    { id: 16, logo: 'https://img.logo.dev/uso.org?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'USO' },
    { id: 17, logo: 'https://img.logo.dev/salesforce.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Salesforce' },
    { id: 18, logo: 'https://img.logo.dev/linkedin.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'LinkedIn' },
    { id: 19, logo: 'https://img.logo.dev/vari.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'VariDesk' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      // Check if section is in view
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const viewportHeight = window.innerHeight;

      // Section is in view if it intersects with viewport
      const inView = sectionTop < viewportHeight && sectionBottom > 0;
      isInView.current = inView;

      if (inView && Math.abs(delta) > 0) {
        setScrollSpeed((prevSpeed) => {
          // Calculate speed multiplier based on scroll delta
          // Positive delta (scrolling down) speeds up, negative (scrolling up) slows down
          // Map scroll delta to speed: larger delta = faster animation (lower duration)
          const speedMultiplier = Math.abs(delta) / 20; // Less aggressive: divided by 20 instead of 10
          const minSpeed = 50; // Fastest when scrolling (50s duration - still faster than base 80s)
          const maxSpeed = 100; // Slowest (100s duration)
          
          // Calculate new speed based on delta direction
          let newSpeed = prevSpeed;
          if (delta > 0) {
            // Scrolling down - speed up (reduce duration, but not too aggressive)
            newSpeed = Math.max(minSpeed, prevSpeed - speedMultiplier);
          } else {
            // Scrolling up - slow down (increase duration)
            newSpeed = Math.min(maxSpeed, prevSpeed + speedMultiplier);
          }
          
          return newSpeed;
        });
        setScrollDelta(delta);
      } else if (!inView) {
        // Gradually return to base speed when not in view
        setScrollSpeed((prevSpeed) => {
          const baseSpeed = 80; // Base speed when just looking (slower)
          if (Math.abs(prevSpeed - baseSpeed) > 0.5) {
            return prevSpeed + (baseSpeed - prevSpeed) * 0.1;
          }
          return prevSpeed;
        });
      } else {
        // When in view but not scrolling, return to base speed
        setScrollSpeed((prevSpeed) => {
          const baseSpeed = 80;
          if (Math.abs(prevSpeed - baseSpeed) > 0.5) {
            return prevSpeed + (baseSpeed - prevSpeed) * 0.05;
          }
          return prevSpeed;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-background overflow-hidden -mb-32">
      {/* Large handwritten-style "Collabs" text in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 z-0">
        <h2 
          className="text-[20rem] font-bold text-blue-500 select-none"
          style={{ 
            fontFamily: 'Brush Script MT, cursive',
            transform: 'rotate(-5deg)',
            letterSpacing: '-0.02em'
          }}
        >
          Collabs
        </h2>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl text-heading leading-tight mb-2">
            <span className="font-bold">Partners</span>
            <br />
            <span className="font-normal">& Campaigns</span>
          </h2>
          <p className="text-lg font-thin text-muted-foreground max-w-2xl">
            Trusted by leading brands to create impactful content
          </p>
        </div>

        {/* Logo container with fade edges and infinite scroll */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

          {/* Partner logos - infinite scroll */}
          <div className="overflow-hidden relative py-4">
            <div 
              className="flex items-start gap-8 md:gap-12" 
              style={{ 
                width: 'max-content',
                animation: `scroll-right ${scrollSpeed}s linear infinite`
              }}
            >
              {/* First set */}
              {partners.map((partner) => (
                <div
                  key={`first-${partner.id}`}
                  className="flex-shrink-0 flex flex-col items-center gap-3 hover:scale-105 hover:z-10 transition-transform duration-300 self-start"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-muted border-2 border-border rounded-lg flex items-center justify-center p-4 flex-shrink-0">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-contain rounded-md"
                      />
                    ) : (
                      <span className="text-3xl md:text-4xl font-bold text-muted-foreground">
                        {partner.id}
                      </span>
                    )}
                  </div>
                  <span className={`font-menu font-medium text-sm md:text-base text-muted-foreground text-center ${partner.name === 'American Heart Association' ? '' : 'whitespace-nowrap'}`}>
                    {partner.name === 'American Heart Association' ? (
                      <>
                        American<br />Heart Association
                      </>
                    ) : (
                      partner.name
                    )}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`second-${partner.id}`}
                  className="flex-shrink-0 flex flex-col items-center gap-3 hover:scale-105 hover:z-10 transition-transform duration-300 self-start"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-muted border-2 border-border rounded-lg flex items-center justify-center p-4 flex-shrink-0">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-contain rounded-md"
                      />
                    ) : (
                      <span className="text-3xl md:text-4xl font-bold text-muted-foreground">
                        {partner.id}
                      </span>
                    )}
                  </div>
                  <span className={`font-menu font-medium text-sm md:text-base text-muted-foreground text-center ${partner.name === 'American Heart Association' ? '' : 'whitespace-nowrap'}`}>
                    {partner.name === 'American Heart Association' ? (
                      <>
                        American<br />Heart Association
                      </>
                    ) : (
                      partner.name
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;