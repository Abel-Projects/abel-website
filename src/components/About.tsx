import { CheckCircle, Award, Zap, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Fortune 500 Expertise",
      description: "Proven track record with the world's largest companies"
    },
    {
      icon: Zap,
      title: "Rapid Results",
      description: "Strategies that deliver measurable impact in months, not years"
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Data-driven partnerships that align with business objectives"
    }
  ];

  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Apple iOS Feature Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-12 animate-fade-up">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-primary font-semibold text-lg bg-primary/10 px-6 py-3 rounded-full">
                  Strategic Partnership Expert
                </span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold text-heading leading-tight tracking-tight">
                Building bridges to 
                <span className="text-primary block">exponential growth</span>
              </h2>
              
              <p className="text-xl text-body-text leading-relaxed font-light">
                I'm Abel Mesfin, the strategic mind behind some of the most successful 
                Fortune 500 partnerships. My proven methodology has generated over $500M 
                in campaign value and transformed how companies think about growth.
              </p>
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-[3rem] p-12 border border-card-border">
              <div className="space-y-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-heading">
                      Proven Partnership System
                    </h3>
                    <p className="text-body-text leading-relaxed">
                      A methodical approach to building strategic alliances that 
                      create lasting competitive advantages.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-card-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-heading">98%</div>
                    <div className="text-sm text-muted-text mt-1">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-heading">10+</div>
                    <div className="text-sm text-muted-text mt-1">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apple iOS Features Grid */}
        <div className="space-y-16">
          <div className="text-center space-y-6 animate-fade-up">
            <h3 className="text-4xl lg:text-5xl font-bold text-heading tracking-tight">
              Why Fortune 500 companies choose me
            </h3>
            <p className="text-xl text-body-text max-w-3xl mx-auto font-light">
              Three core strengths that set my partnership strategies apart
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center space-y-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto">
                  <feature.icon className="h-12 w-12 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-heading">
                    {feature.title}
                  </h4>
                  <p className="text-body-text leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;