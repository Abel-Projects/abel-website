import { Button } from "@/components/ui/button";
import abelHeadshot from "@/assets/abel-headshot.jpg";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-subtle overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h1 className="text-display text-heading leading-none">
                Strategic Partnerships & Campaigns that{" "}
                <span className="gradient-text">Drive Growth</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-body-text leading-relaxed max-w-2xl">
                Abel Mesfin helps brands and CEOs tell bigger stories, launch campaigns, 
                and grow impact through strategic partnerships and compelling narratives.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Work with Abel
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                View Portfolio
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-card-border">
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary">Fortune 500</div>
                <div className="text-muted-text">Brands Partnered</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary">$100M+</div>
                <div className="text-muted-text">Campaign Value</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold text-primary">50M+</div>
                <div className="text-muted-text">Total Reach</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-20 transform scale-105"></div>
              <img
                src={abelHeadshot}
                alt="Abel Mesfin - Strategic Partnership Expert"
                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-hero transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl font-semibold shadow-accent animate-float">
              Denver Based
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground px-4 py-2 rounded-xl font-semibold shadow-card animate-float" style={{ animationDelay: "1.5s" }}>
              Strategic Storyteller
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;