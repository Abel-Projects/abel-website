import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "Campaign Strategy & Execution",
    "Strategic Partnerships & Alliances", 
    "Content Marketing & Storytelling",
    "Brand Positioning & Growth",
    "CEO & Executive Collaboration"
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-2xl opacity-20 transform scale-105"></div>
              <div className="relative bg-gradient-subtle rounded-3xl p-8 shadow-card">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-card-title text-heading mb-2">Trusted Partner</h3>
                    <p className="text-body-text">
                      Collaborating with global brands and visionary CEOs to scale influence and drive meaningful impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                About Abel
              </div>
              
              <h2 className="text-section text-heading">
                Denver-based strategist, storyteller, and brand partner
              </h2>
              
              <div className="space-y-4 text-lg text-body-text leading-relaxed">
                <p>
                  Abel Mesfin has collaborated with CEOs and Fortune 500 brands to scale their 
                  influence through strategic partnerships and compelling storytelling. Based in 
                  Denver, he specializes in creating campaigns that drive meaningful growth and impact.
                </p>
                
                <p>
                  With a track record of launching successful initiatives across diverse industries, 
                  Abel brings a unique perspective to brand partnerships, combining strategic thinking 
                  with authentic storytelling to create campaigns that resonate.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h3 className="text-card-title text-heading">Core Expertise</h3>
              <div className="grid gap-3">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-card border border-card-border hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body-text font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;