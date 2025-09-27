import walmartLogo from "@/assets/brands/walmart-logo.png";
import metaLogo from "@/assets/brands/meta-logo.png";
import aflacLogo from "@/assets/brands/aflac-logo.jpg";
import aroma360Logo from "@/assets/brands/aroma360-logo.png";
import captainsLogo from "@/assets/brands/captains-logo.png";
import clickfunnelsLogo from "@/assets/brands/clickfunnels-logo.png";
import trainualLogo from "@/assets/brands/trainual-logo.png";
import rocketlawyerLogo from "@/assets/brands/rocketlawyer-logo.png";
import alibabaLogo from "@/assets/brands/alibaba-logo.png";
import starkeyLogo from "@/assets/brands/starkey-logo.png";
import variLogo from "@/assets/brands/vari-logo.png";
import mediumrareLogo from "@/assets/brands/mediumrare-logo.png";

const Brands = () => {
  const brands = [
    { name: "Walmart", logo: walmartLogo },
    { name: "Meta", logo: metaLogo },
    { name: "Aflac", logo: aflacLogo },
    { name: "Aroma360", logo: aroma360Logo },
    { name: "Captain D's", logo: captainsLogo },
    { name: "ClickFunnels", logo: clickfunnelsLogo },
    { name: "Trainual", logo: trainualLogo },
    { name: "RocketLawyer", logo: rocketlawyerLogo },
    { name: "Alibaba", logo: alibabaLogo },
    { name: "Starkey", logo: starkeyLogo },
    { name: "Vari", logo: variLogo },
    { name: "Medium Rare", logo: mediumrareLogo }
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
                key={brand.name}
                className="flex items-center justify-center p-8 bg-card/50 rounded-3xl border border-card-border hover:bg-card transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-h-12 max-w-32 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
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