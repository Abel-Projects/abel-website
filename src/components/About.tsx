import { Award, Zap, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-background scroll-snap-section flex items-center py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Full-Screen Split Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left - Text Content */}
          <div className="space-y-12 animate-fade-up">
            <div className="space-y-8">
              <h2 className="text-6xl lg:text-7xl font-bold text-heading leading-[0.95] tracking-tighter">
                Content that<br />converts
              </h2>
              
              <p className="text-xl lg:text-2xl text-body-text font-light leading-relaxed max-w-xl">
                Born in Denver, bred for hustle. Since college, I've leveled up brands through lead-generating content and authentic stories.
              </p>
            </div>
            
            {/* Key Strengths - Minimal */}
            <div className="space-y-8 pt-8">
              {[
                { icon: Award, title: "Brand Storytelling", desc: "Authentic narratives that resonate" },
                { icon: Zap, title: "Content That Converts", desc: "Strategies that drive results" },
                { icon: Target, title: "Strategic Campaigns", desc: "Data-driven business alignment" }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex gap-6 items-start animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-body-text">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Large Image/Stats */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-[3rem] p-16 border border-card-border">
              <div className="space-y-16">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-12">
                  <div className="text-center space-y-3">
                    <div className="text-6xl font-bold text-heading">100+</div>
                    <div className="text-sm text-muted-text tracking-wide">Brand Campaigns</div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-6xl font-bold text-heading">5+</div>
                    <div className="text-sm text-muted-text tracking-wide">Years Experience</div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-6xl font-bold text-heading">10M+</div>
                    <div className="text-sm text-muted-text tracking-wide">Content Views</div>
                  </div>
                  <div className="text-center space-y-3">
                    <div className="text-6xl font-bold text-heading">Top</div>
                    <div className="text-sm text-muted-text tracking-wide">Content Creator</div>
                  </div>
                </div>
                
                {/* Quote or Tagline */}
                <div className="text-center space-y-4 pt-8 border-t border-card-border">
                  <p className="text-2xl font-light text-body-text italic">
                    "Content marketing that moves the needle"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;