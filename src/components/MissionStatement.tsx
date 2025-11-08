import { useEffect, useState, useRef } from "react";

const MissionStatement = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Only calculate progress when section is sticky
      if (rect.top > 0) {
        setScrollProgress(0);
        setFadeOpacity(0);
        return;
      }
      
      // Calculate scroll progress through the section
      const scrollTop = -rect.top;
      const scrollRange = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, scrollTop / scrollRange));
      
      setScrollProgress(progress);
      
      // Calculate fade opacity based on when blocks exit viewport
      const viewportHeight = window.innerHeight;
      const baseTargetY = baseY;
      const blockSpacing = 20;
      
      // Count how many blocks are out of viewport (top of block above viewport)
      let blocksOutOfView = 0;
      const totalBlocks = textBlocks.length;
      
      for (let blockIndex = 0; blockIndex < totalBlocks; blockIndex++) {
        let blockY = 0;
        let blockHeight = 50; // Approximate text height
        
        // Calculate block position using same logic as getTextBlockStyle
        if (blockIndex === 0) {
          blockY = baseTargetY - scrollTop;
          blockHeight = 100; // Larger for first block
        } else if (blockIndex === 1) {
          const blockStart = 100;
          const firstBlockHeight = 200;
          const targetY = baseTargetY + firstBlockHeight + blockSpacing;
          
          if (scrollTop < blockStart) {
            blockY = viewportHeight; // Off screen
          } else if (scrollTop < blockStart + 200) {
            const scrollIn = (scrollTop - blockStart) / 200;
            const startY = viewportHeight;
            blockY = startY - (scrollIn * (startY - targetY));
          } else {
            const scrollUp = scrollTop - (blockStart + 200);
            blockY = targetY - scrollUp;
          }
        } else {
          const blockStart = 100 + (blockIndex - 1) * 100;
          let stackOffset = 200 + blockSpacing;
          for (let i = 1; i < blockIndex; i++) {
            const spacing = (i === 2 && blockIndex === 3) ? 30 : 40;
            stackOffset += spacing + blockSpacing;
          }
          const targetY = baseTargetY + stackOffset;
          
          if (scrollTop < blockStart) {
            blockY = viewportHeight; // Off screen
          } else if (scrollTop < blockStart + 150) {
            const scrollUp = Math.max(0, scrollTop - blockStart - 150);
            blockY = targetY - scrollUp;
          } else {
            const scrollUp = scrollTop - (blockStart + 150);
            blockY = targetY - scrollUp;
          }
        }
        
        // Convert translateY to viewport coordinates (from top)
        // baseTargetY is -60, so bottom is at viewportHeight - 60 + blockY
        const blockBottomY = viewportHeight - 60 + blockY;
        const blockTopY = blockBottomY - blockHeight;
        
        // Check if block top is above viewport (out of view)
        if (blockTopY < 0) {
          blocksOutOfView++;
        }
      }
      
      // Start fading when 40% of blocks are out of view (earlier start)
      // Complete fade when 95% are out (stretched end point for smoother transition)
      const fadeStartThreshold = Math.ceil(totalBlocks * 0.4);
      const fadeEndThreshold = Math.ceil(totalBlocks * 0.95);
      
      let opacity = 0;
      if (blocksOutOfView < fadeStartThreshold) {
        opacity = 0;
      } else if (blocksOutOfView >= fadeEndThreshold) {
        opacity = 1;
      } else {
        // Linear fade between thresholds
        opacity = (blocksOutOfView - fadeStartThreshold) / (fadeEndThreshold - fadeStartThreshold);
        opacity = Math.min(1, Math.max(0, opacity));
      }
      
      setFadeOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text blocks - each sentence appears sequentially
  const textBlocks = [
    ["Born in Denver,", "Bred for Hustle"],
    ["I've had the privilege in leveling up the brands of top-level companies, celebrities, and CEOs"],
    ["Transforming visions into viral moments."],
    ["Where storytelling meets strategy, and brands become unforgettable"],
    ["Building legacies through content that doesn't just perform, it transforms"]
  ];

  // Base position where text should appear (same for all blocks)
  const baseY = -60; // Starting position
  const baseX = 500; // Left padding

  // Calculate fade-to-black overlay opacity based on when blocks exit viewport
  const getFadeOverlayOpacity = () => {
    if (!sectionRef.current) return 0;
    
    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    
    if (rect.top > 0) return 0;
    
    const scrollTop = Math.max(0, -rect.top);
    const viewportHeight = window.innerHeight;
    const baseTargetY = baseY;
    const blockSpacing = 20;
    
    // Count how many blocks are out of viewport (top of block above viewport)
    let blocksOutOfView = 0;
    const totalBlocks = textBlocks.length;
    
    for (let blockIndex = 0; blockIndex < totalBlocks; blockIndex++) {
      let blockY = 0;
      let blockHeight = 50; // Approximate text height
      
      // Calculate block position using same logic as getTextBlockStyle
      if (blockIndex === 0) {
        blockY = baseTargetY - scrollTop;
        blockHeight = 100; // Larger for first block
      } else if (blockIndex === 1) {
        const blockStart = 100;
        const firstBlockHeight = 200;
        const targetY = baseTargetY + firstBlockHeight + blockSpacing;
        
        if (scrollTop < blockStart) {
          blockY = viewportHeight; // Off screen
        } else if (scrollTop < blockStart + 200) {
          const scrollIn = (scrollTop - blockStart) / 200;
          const startY = viewportHeight;
          blockY = startY - (scrollIn * (startY - targetY));
        } else {
          const scrollUp = scrollTop - (blockStart + 200);
          blockY = targetY - scrollUp;
        }
      } else {
        const blockStart = 100 + (blockIndex - 1) * 100;
        let stackOffset = 200 + blockSpacing;
        for (let i = 1; i < blockIndex; i++) {
          const spacing = (i === 2 && blockIndex === 3) ? 30 : 40;
          stackOffset += spacing + blockSpacing;
        }
        const targetY = baseTargetY + stackOffset;
        
        if (scrollTop < blockStart) {
          blockY = viewportHeight; // Off screen
        } else if (scrollTop < blockStart + 150) {
          const scrollUp = Math.max(0, scrollTop - blockStart - 150);
          blockY = targetY - scrollUp;
        } else {
          const scrollUp = scrollTop - (blockStart + 150);
          blockY = targetY - scrollUp;
        }
      }
      
      // Convert translateY to viewport coordinates (from top)
      // baseTargetY is -60, so bottom is at viewportHeight - 60 + blockY
      const blockBottomY = viewportHeight - 60 + blockY;
      const blockTopY = blockBottomY - blockHeight;
      
      // Check if block top is above viewport (out of view)
      if (blockTopY < 0) {
        blocksOutOfView++;
      }
    }
    
    // Start fading when most blocks (60%) are out of view
    // Complete fade when 80% are out
    const fadeStartThreshold = Math.ceil(totalBlocks * 0.6);
    const fadeEndThreshold = Math.ceil(totalBlocks * 0.8);
    
    if (blocksOutOfView < fadeStartThreshold) return 0;
    if (blocksOutOfView >= fadeEndThreshold) return 1;
    
    // Linear fade between thresholds
    const fadeProgress = (blocksOutOfView - fadeStartThreshold) / (fadeEndThreshold - fadeStartThreshold);
    return Math.min(1, Math.max(0, fadeProgress));
  };

  // Calculate position and opacity for each text block
  const getTextBlockStyle = (blockIndex: number) => {
    if (!sectionRef.current) return { transform: 'translateY(0)', opacity: 1 };
    
    const section = sectionRef.current;
    const rect = section.getBoundingClientRect();
    
    // Only animate when section is sticky
    if (rect.top > 0) {
      // Section not sticky yet - show first block only
      if (blockIndex === 0) {
        return {
          transform: `translateY(${baseY}px)`,
          opacity: 1
        };
      }
      return {
        transform: `translateY(${window.innerHeight}px)`,
        opacity: 0
      };
    }
    
    const scrollTop = Math.max(0, -rect.top);
    const viewportHeight = window.innerHeight;
    const baseTargetY = baseY;
    const blockSpacing = 20; // Very tight spacing
    
    if (blockIndex === 0) {
      // First block: scrolls up with page
      return {
        transform: `translateY(${baseTargetY - scrollTop}px)`,
        opacity: 1
      };
    } else if (blockIndex === 1) {
      // Second block: appears after 100px scroll
      const blockStart = 100;
      const firstBlockHeight = 200;
      const targetY = baseTargetY + firstBlockHeight + blockSpacing;
      
      if (scrollTop < blockStart) {
        return {
          transform: `translateY(${viewportHeight}px)`,
          opacity: 0
        };
      } else if (scrollTop < blockStart + 200) {
        const scrollIn = (scrollTop - blockStart) / 200;
        const startY = viewportHeight;
        const currentY = startY - (scrollIn * (startY - targetY));
        return {
          transform: `translateY(${currentY}px)`,
          opacity: scrollIn
        };
      } else {
        const scrollUp = scrollTop - (blockStart + 200);
        return {
          transform: `translateY(${targetY - scrollUp}px)`,
          opacity: 1
        };
      }
    } else {
      // Third block and beyond: simple fade in after previous
      const blockStart = 100 + (blockIndex - 1) * 100; // 100px intervals
      let stackOffset = 200 + blockSpacing;
      for (let i = 1; i < blockIndex; i++) {
        // Reduce spacing for block 4 (index 3) since it's shorter text
        const spacing = (i === 2 && blockIndex === 3) ? 30 : 40;
        stackOffset += spacing + blockSpacing; // Very tight spacing
      }
      const targetY = baseTargetY + stackOffset;
      
      if (scrollTop < blockStart) {
        return {
          transform: `translateY(${targetY}px)`,
          opacity: 0
        };
      } else if (scrollTop < blockStart + 150) {
        const fadeIn = (scrollTop - blockStart) / 150;
        const scrollUp = Math.max(0, scrollTop - blockStart - 150);
        return {
          transform: `translateY(${targetY - scrollUp}px)`,
          opacity: fadeIn
        };
      } else {
        const scrollUp = scrollTop - (blockStart + 150);
        return {
          transform: `translateY(${targetY - scrollUp}px)`,
          opacity: 1
        };
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[250vh] bg-black"
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
        
        {/* Fade to Black Overlay - increases as last block exits viewport */}
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{ 
            opacity: fadeOpacity,
            zIndex: 5
          }}
        />
        
        {/* Text Blocks */}
        <div className="relative z-10 w-full h-full flex items-end justify-start pb-32">
          {textBlocks.map((block, blockIndex) => {
            const style = getTextBlockStyle(blockIndex);
            return (
              <div
                key={blockIndex}
                className="absolute text-white"
                style={{
                  fontFamily: 'Gotham, sans-serif',
                  fontWeight: blockIndex === 0 ? 700 : 500, // Bold for first block, Medium for rest
                  fontSize: blockIndex === 0 
                    ? 'clamp(2.1rem, 5.6vw, 5.6rem)' 
                    : 'clamp(1.2075rem, 3.22vw, 3.22rem)', // Reduced size for first block to compensate for uppercase
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  textTransform: blockIndex === 0 ? 'uppercase' : 'none',
                  paddingLeft: `${baseX}px`,
                  paddingRight: '24px',
                  maxWidth: `calc(100vw - ${baseX}px - 48px)`,
                  transform: style.transform,
                  opacity: style.opacity,
                  willChange: 'transform, opacity',
                  pointerEvents: 'none'
                }}
              >
                {block.map((line, lineIndex) => (
                  <div 
                    key={lineIndex} 
                    style={{ 
                      margin: 0, 
                      padding: 0,
                      fontWeight: (blockIndex === 0 && lineIndex === 1) ? 500 : (blockIndex === 0 ? 700 : 500)
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
