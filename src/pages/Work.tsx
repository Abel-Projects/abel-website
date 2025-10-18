import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Work = () => {
  const commercials = [
    {
      title: "Captain D's",
      description: "Captain D's teamed up with Daymond to create a new value proposition and product offering for the seafood giant including a new hand-breaded Chick-N-D's and a $5.99 Meal Deal offering. Captain D's saw a notable increase in brand awareness among the 25-44 age demographics and extended beyond digital, reaching audiences on linear TV across 20 key markets.",
      image: "from-blue-500/20 to-blue-600/20"
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
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        {/* Hero Section */}
        <div className="mb-32 text-center animate-fade-up">
          <p className="text-sm text-muted-text font-semibold tracking-wide uppercase mb-4">
            Best in Class
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-heading mb-8 leading-tight">
            MARKETER<br />
            Storyteller<br />
            BRAND PARTNER
          </h1>
          <p className="text-2xl lg:text-3xl text-body-text font-light">
            Dream Big, I'll Handle The Execution
          </p>
        </div>

        {/* Commercials Section */}
        <div className="mb-32">
          <h2 className="text-5xl font-bold text-heading mb-16 animate-fade-up">
            Commercials
          </h2>
          <div className="space-y-20">
            {commercials.map((project, index) => (
              <div 
                key={project.title}
                className="grid lg:grid-cols-5 gap-8 items-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="lg:col-span-2">
                  <div className={`bg-gradient-to-br ${project.image} rounded-3xl h-[300px] border border-card-border`} />
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

        {/* Black Entrepreneurs Day Section */}
        <div className="mb-32 animate-fade-up">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-heading mb-6">
              BLACK ENTREPRENEURS DAY
            </h2>
            <p className="text-xl text-body-text italic max-w-3xl mx-auto">
              The most impactful and buzzed about diversity, equity, and inclusion event of the year!
            </p>
          </div>
          
          <div className="bg-card/30 rounded-3xl border border-card-border p-8 lg:p-12 mb-12">
            <p className="text-lg text-body-text leading-relaxed">
              Daymond John's <strong>Black Entrepreneurs Day</strong> is an annual celebration of Black business and culture. In partnership with the event production team, Medium Rare, this award-winning event has brought together millions of viewers, iconic celebrity guests, and some of the most impactful conversations about entrepreneurship, featuring hard-hitting roundtables with top brand executives and unforgettable musical performances.
            </p>
          </div>

          {/* Awards/Recognition */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {["Webby Award", "Anthem Award", "Proc Award"].map((award) => (
              <div key={award} className="bg-card/50 rounded-2xl border border-card-border p-6 text-center">
                <div className="text-lg font-semibold text-primary">{award}</div>
              </div>
            ))}
          </div>

          {/* Event Images Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl h-[250px] border border-card-border" />
            ))}
          </div>

          {/* Partners */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-heading mb-8 text-center">
              Partners Have Included:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {["Apple", "T-Mobile", "Raising Cane's", "McDonald's", "Chase", "Salesforce", "Shopify", "Lowe's", "Hilton"].map((partner) => (
                <div key={partner} className="bg-card/50 rounded-xl border border-card-border p-6 flex items-center justify-center">
                  <span className="text-sm font-semibold text-muted-text">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Branded Social Media Section */}
        <div className="mb-32 animate-fade-up">
          <h2 className="text-5xl font-bold text-heading mb-8">
            BRANDED SOCIAL MEDIA
          </h2>
          <p className="text-lg text-body-text mb-12 max-w-3xl">
            I've worked with top partners alongside Daymond John crafting compelling social media posts for top companies like Meta, Walmart, Aflac Insurance, National Debt Relief, Aroma360, and much, much more.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {socialMediaBrands.map((brand, index) => (
              <div 
                key={brand.name}
                className="group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`bg-gradient-to-br ${brand.image} rounded-3xl h-[400px] border border-card-border mb-4 group-hover:scale-105 transition-transform duration-300`} />
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
                className="p-6 bg-card/50 rounded-2xl border border-card-border"
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
              <div key={num} className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl h-[200px] border border-card-border" />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-32 border-t border-card-border animate-fade-up">
          {[
            { number: "100+", label: "Brand Campaigns" },
            { number: "10M+", label: "Content Views" },
            { number: "50+", label: "Video Projects" },
            { number: "200+", label: "Written Pieces" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center" style={{ animationDelay: `${index * 0.1}s` }}>
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

export default Work;
