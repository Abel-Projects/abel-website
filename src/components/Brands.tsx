const Brands = () => {
  const brands = [
    { name: "Walmart", logo: "walmart" },
    { name: "Meta", logo: "meta" },
    { name: "Aflac", logo: "aflac" },
    { name: "Captain D's", logo: "captaind" },
    { name: "Daymond John", logo: "daymond" }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-4 animate-fade-up">
            <h2 className="text-section text-heading">
              Trusted by global brands and CEOs
            </h2>
            <p className="text-lg text-body-text max-w-2xl mx-auto">
              Partnering with industry leaders to create campaigns that drive growth, 
              build influence, and deliver measurable results.
            </p>
          </div>

          {/* Brand Logos Grid */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              {brands.map((brand, index) => (
                <div
                  key={brand.name}
                  className="group relative p-6 rounded-2xl bg-card hover:bg-gradient-subtle border border-card-border hover:shadow-card transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    {/* Placeholder for brand logos - using text for now */}
                    <div className="w-24 h-16 flex items-center justify-center">
                      <span className="text-lg font-bold text-body-text group-hover:text-primary transition-colors duration-300">
                        {brand.name}
                      </span>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting text */}
          <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-text italic">
              "Strategic partnerships that create lasting impact and drive meaningful growth."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;