const Partners = () => {
  const partners = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="relative py-32 bg-background overflow-hidden">
      {/* Large handwritten-style "Collabs" text in background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
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
          <h2 className="text-5xl md:text-6xl font-bold text-heading mb-4">
            Partners & Campaigns
          </h2>
          <p className="text-lg font-thin text-muted-foreground max-w-2xl">
            Trusted by leading brands to create impactful content
          </p>
        </div>

        {/* Logo container with fade edges and infinite scroll */}
        <div className="relative px-12 md:px-24">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Partner logos - infinite scroll */}
          <div className="flex items-center overflow-hidden">
            <div className="flex items-center gap-8 md:gap-12 animate-scroll-left">
              {/* First set */}
              {partners.map((num) => (
                <div
                  key={`first-${num}`}
                  className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-muted border-2 border-border rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-3xl md:text-4xl font-bold text-muted-foreground">
                    {num}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((num) => (
                <div
                  key={`second-${num}`}
                  className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-muted border-2 border-border rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-3xl md:text-4xl font-bold text-muted-foreground">
                    {num}
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