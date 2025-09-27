const Brands = () => {
  const brands = [
    "Walmart", "Meta", "Aflac", "Aroma360", "Captain D's", "ClickFunnels", 
    "Trainual", "RocketLawyer", "Alibaba", "Starkey", "Vari", "Medium Rare"
  ];

  return (
    <section className="py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-16 animate-fade-up">
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-muted-text tracking-wide uppercase">
              Trusted by Industry Leaders
            </h2>
            <p className="text-3xl lg:text-4xl font-bold text-heading tracking-tight max-w-4xl mx-auto">
              Creating content for brands that matter
            </p>
          </div>
          
          {/* Apple-style brand grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {brands.map((brand, index) => (
              <div 
                key={brand}
                className="flex items-center justify-center p-8 bg-card/50 rounded-3xl border border-card-border hover:bg-card transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xl font-semibold text-heading">{brand}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-card/80 backdrop-blur-xl rounded-[2rem] p-12 border border-card-border animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary">100+</div>
                <div className="text-muted-text font-medium">Brand Campaigns</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary">10M+</div>
                <div className="text-muted-text font-medium">Content Views</div>
              </div>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-muted-text font-medium">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;