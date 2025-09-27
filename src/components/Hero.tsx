import { Button } from "@/components/ui/button";
import abelTransparent from "@/assets/abel-transparent.png";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-subtle">
      {/* Apple-style clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center space-y-12 pt-20 pb-16">
          {/* Hero Headline - Apple Style */}
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-display text-heading leading-tight max-w-4xl mx-auto">
              Strategic Partnerships That Build{" "}
              <span className="gradient-text">$100M+ Brands</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-body-text leading-relaxed max-w-3xl mx-auto">
              Learn the exact partnership strategies behind my Fortune 500 successes.
              <span className="block mt-2 text-lg text-muted-text font-medium">Limited consulting spots available — Next cohort starts soon</span>
            </p>
          </div>
          
          {/* Apple-style CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg font-medium shadow-primary">
              Apply for Strategic Partnership Consulting
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-border text-body-text hover:bg-accent px-8 py-4 text-lg font-medium">
              <Play className="mr-2 h-5 w-5" />
              Download Partnership Playbook
            </Button>
          </div>
          
          {/* Apple-style Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-semibold text-heading mb-2">50+</div>
              <div className="text-sm text-muted-text">Fortune 500 Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-semibold text-heading mb-2">1B+</div>
              <div className="text-sm text-muted-text">Media Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-semibold text-heading mb-2">$500M+</div>
              <div className="text-sm text-muted-text">Campaign Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-semibold text-heading mb-2">#1</div>
              <div className="text-sm text-muted-text">Partnership Strategist</div>
            </div>
          </div>
        </div>
        
        {/* Apple-style Product Image */}
        <div className="flex justify-center items-center mt-8 animate-scale-in" style={{ animationDelay: "0.6s" }}>
          <div className="relative">
            <img
              src={abelTransparent}
              alt="Abel Mesfin - Strategic Partnership Expert"
              className="h-96 lg:h-[500px] w-auto object-contain filter drop-shadow-2xl"
            />
            
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;