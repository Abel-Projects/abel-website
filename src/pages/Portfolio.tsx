import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import proclamationImg from "@/assets/bed-proclamation.png";
import webbyImg from "@/assets/bed-webby.png";
import anthemImg from "@/assets/bed-anthem.png";
import bedLogo from "@/assets/bed-logo.png";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Abel Mesfin | Portfolio";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const commercials = [
    {
      title: "Captain D's",
      description: "Captain D's teamed up with Daymond to create a new value proposition and product offering for the seafood giant including a new hand-breaded Chick-N-D's and a $5.99 Meal Deal offering. Captain D's saw a notable increase in brand awareness among the 25-44 age demographics and extended beyond digital, reaching audiences on linear TV across 20 key markets.",
      image: "from-primary/20 to-primary/30"
    },
    {
      title: "Aflac",
      description: "In collaboration with Daymond John, we supported Aflac's Make Your Mark Campaign for recruiting the next generation of agents. A recruitment campaign was birthed to find diverse Aflac brokers to jumpstart their new career as an insurance agent, gain more diverse customers, and better serve the existing Aflac community.",
      image: "from-orange-500/20 to-orange-600/20"
    },
    {
      title: "National Debt Relief",
      description: "In partnership with National Debt Relief, Daymond and NDR teamed up to help curate a story that authentically reaches individuals facing financial challenges. We crafted a campaign that not only educates but also empowers consumers to take control of their financial future.",
      image: "from-green-500/20 to-green-600/20"
    }
  ];

  const socialMediaBrands = [
    { name: "Black Entrepreneurs Day", image: "from-purple-500/20 to-purple-600/20" },
    { name: "Aroma360", image: "from-pink-500/20 to-pink-600/20" },
    { name: "Starkey Hearing Technologies", image: "from-blue-500/20 to-blue-600/20" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header variant="static" />
      
      {/* Full Viewport Section */}
      <div className="h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col gap-[0.5vh]">
            <div 
              className="text-[1.5vw] font-normal uppercase tracking-[-0.02em] text-black mb-0"
              style={{ marginLeft: 'calc(7.9em - 175px)', fontFamily: 'Gotham, sans-serif', fontWeight: 300 }}
            >
              BEST IN CLASS
            </div>
            <div 
              className="text-[9vw] font-black uppercase tracking-[-0.06em] leading-[0.8] text-black"
              style={{ marginLeft: 'calc(1.16em - 100px)', fontFamily: 'Gotham, sans-serif', fontWeight: 500 }}
            >
              MARKETER
            </div>
            <div 
              className="text-[9vw] font-black uppercase tracking-[-0.06em] leading-[0.8] text-black"
              style={{ marginLeft: 'calc(3em - 100px)', fontFamily: 'Gotham, sans-serif', fontWeight: 500 }}
            >
              STORYTELLER
            </div>
            <div 
              className="text-[9vw] font-black uppercase tracking-[-0.06em] leading-[0.8] text-black"
              style={{ marginLeft: 'calc(0.89em - 100px)', fontFamily: 'Gotham, sans-serif', fontWeight: 500 }}
            >
              BRAND PARTNER
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        {/* Commercials Section with Stagger Animation */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold text-heading mb-16 animate-fade-up hover:scale-105 transition-transform duration-300">
            Commercials
          </h2>
          <div className="space-y-20">
            {commercials.map((project, index) => (
              <div 
                key={project.title}
                className="grid lg:grid-cols-5 gap-8 items-center animate-fade-up group"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transform: `translateX(${index % 2 === 0 ? -scrollY * 0.02 : scrollY * 0.02}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="lg:col-span-2">
                  <div className={`bg-gradient-to-br ${project.image} rounded-3xl h-[300px] border border-card-border group-hover:scale-105 transition-transform duration-500`} />
                </div>
                <div className="lg:col-span-3 space-y-4">
                  <h3 className="text-3xl font-bold text-heading">
                    {project.title}
                  </h3>
                  <p className="text-lg text-body-text leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Black Entrepreneurs Day Section with Scroll Effects */}
        <div 
          className="mb-32 animate-fade-up"
          style={{
            transform: `scale(${1 + scrollY * 0.00005})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <img src={bedLogo} alt="Black Entrepreneurs Day" className="h-24 md:h-32 w-auto" />
            </div>
            <h2 className="text-5xl font-bold text-heading mb-6 transition-colors duration-300">
              BLACK ENTREPRENEURS DAY
            </h2>
            <p className="text-xl text-body-text italic max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
              The most impactful and buzzed about diversity, equity, and inclusion event of the year!
            </p>
          </div>
          
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg text-body-text leading-relaxed text-center">
              Daymond John's <strong>Black Entrepreneurs Day</strong> is an annual celebration of Black business and culture. In partnership with the event production team, Medium Rare, this award-winning event has brought together millions of viewers, iconic celebrity guests, and some of the most impactful conversations about entrepreneurship, featuring hard-hitting roundtables with top brand executives and unforgettable musical performances.
            </p>
          </div>

          {/* Awards/Recognition */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div 
              className="flex items-center justify-center animate-scale-in hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{ animationDelay: '0s' }}
            >
              <img src={proclamationImg} alt="2x Proclamation Official Day in NYC & ATL" className="w-full h-auto max-w-[250px]" />
            </div>
            <div 
              className="flex items-center justify-center animate-scale-in hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{ animationDelay: '0.1s' }}
            >
              <img src={webbyImg} alt="Webby Awards 4x Winner" className="w-full h-auto max-w-[250px]" />
            </div>
            <div 
              className="flex items-center justify-center animate-scale-in hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{ animationDelay: '0.2s' }}
            >
              <img src={anthemImg} alt="Anthem Awards 3x Winner" className="w-full h-auto max-w-[250px]" />
            </div>
          </div>

          {/* Event Images Grid with Stagger */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div 
                key={num} 
                className="bg-gradient-to-br from-purple-500/20 to-primary/30 rounded-2xl h-[250px] border border-card-border transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${num * 0.1}s` }}
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 mb-16">
            <div className="text-center p-8 bg-card/30 rounded-2xl border border-card-border hover:bg-card/40 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3 Billion</div>
              <div className="text-lg text-body-text">Impressions Last Year</div>
            </div>
            <div className="text-center p-8 bg-card/30 rounded-2xl border border-card-border hover:bg-card/40 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$1M</div>
              <div className="text-lg text-body-text">Given to Black Owned Businesses</div>
            </div>
            <div className="text-center p-8 bg-card/30 rounded-2xl border border-card-border hover:bg-card/40 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">30+</div>
              <div className="text-lg text-body-text">Celebrity Guests</div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-heading mb-8 text-center">
              Partners Have Included:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {["Apple", "T-Mobile", "Raising Cane's", "McDonald's", "Chase", "Salesforce", "Shopify", "Lowe's", "Hilton"].map((partner, index) => (
                <div 
                  key={partner} 
                  className="bg-card/50 rounded-xl border border-card-border p-6 flex items-center justify-center hover:bg-card hover:scale-110 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-sm font-semibold text-muted-text">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Branded Social Media Section */}
        <div className="mb-32 animate-fade-up">
          <h2 className="text-5xl font-bold text-heading mb-8 hover:scale-105 transition-transform duration-300">
            BRANDED SOCIAL MEDIA
          </h2>
          <p className="text-lg text-body-text mb-12 max-w-3xl">
            I've worked with top partners alongside Daymond John crafting compelling social media posts for top companies like Meta, Walmart, Aflac Insurance, National Debt Relief, Aroma360, and much, much more.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {socialMediaBrands.map((brand, index) => (
              <div 
                key={brand.name}
                className="group animate-fade-up"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  transform: `translateY(${Math.sin(scrollY * 0.01 + index) * 10}px)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className={`bg-gradient-to-br ${brand.image} rounded-3xl h-[400px] border border-card-border mb-4 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500 shadow-lg group-hover:shadow-2xl`} />
                <h3 className="text-xl font-semibold text-heading text-center">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* CEO Access Section */}
        <div className="mb-32 bg-card/30 rounded-3xl border border-card-border p-8 lg:p-16 animate-fade-up">
          <h2 className="text-5xl font-bold text-heading mb-8">
            CEO ACCESS
          </h2>
          <p className="text-lg text-body-text leading-relaxed mb-12 max-w-3xl">
            Today's CEOs aren't just running companies, they're building personal brands. CEO Access empowers you to become and be recognized as an industry influencer. Guided by Daymond John's expertise and network, I work directly with CEOs to develop brand assets, optimize their digital presence, and create strategic opportunities for their brand and legacy.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Brand Foundation",
                description: "Helping CEOs refine their industry positioning, from messaging to brand visuals, ensuring they stand out as thought leaders."
              },
              {
                title: "Influence & Visibility",
                description: "Coordinating high-impact opportunities like keynote appearances, media features, and networking events to expand their reach."
              },
              {
                title: "Social Positioning",
                description: "Crafting compelling social content that stretches their voice to the right audience."
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="p-6 bg-card/50 rounded-2xl border border-card-border hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-heading mb-3">
                  {service.title}
                </h3>
                <p className="text-body-text">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div 
                key={num} 
                className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl h-[200px] border border-card-border hover:scale-105 transition-transform duration-500"
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-32 border-t border-card-border">
          {[
            { number: "100+", label: "Brand Campaigns" },
            { number: "10M+", label: "Content Views" },
            { number: "50+", label: "Video Projects" },
            { number: "200+", label: "Written Pieces" }
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-up hover:scale-110 transition-transform duration-300" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl lg:text-6xl font-bold text-heading mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-text tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
