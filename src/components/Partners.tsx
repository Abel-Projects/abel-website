const Partners = () => {
  const partners = [
    { id: 1, logo: 'https://img.logo.dev/walmart.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Walmart' },
    { id: 2, logo: 'https://img.logo.dev/aflac.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Aflac' },
    { id: 3, logo: 'https://img.logo.dev/intuit.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Intuit' },
    { id: 4, logo: 'https://img.logo.dev/adobe.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Adobe' },
    { id: 5, logo: 'https://img.logo.dev/alibaba.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Alibaba' },
    { id: 6, logo: 'https://img.logo.dev/starkey.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true', name: 'Starkey' },
    { id: 7, logo: null, name: 'Partner 7' },
    { id: 8, logo: null, name: 'Partner 8' },
  ];

  return (
    <section className="relative py-32 bg-background overflow-hidden">
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
          <div className="overflow-hidden relative">
            <div className="flex items-center gap-8 md:gap-12 animate-scroll-right" style={{ width: 'max-content' }}>
              {/* First set */}
              {partners.map((partner) => (
                <div
                  key={`first-${partner.id}`}
                  className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-muted border-2 border-border rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 p-4"
                >
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-3xl md:text-4xl font-bold text-muted-foreground">
                      {partner.id}
                    </span>
                  )}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`second-${partner.id}`}
                  className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 bg-muted border-2 border-border rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 p-4"
                >
                  {partner.logo ? (
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-3xl md:text-4xl font-bold text-muted-foreground">
                      {partner.id}
                    </span>
                  )}
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