import { Button } from "@/components/ui/button";
import abelTransparent from "@/assets/abel-transparent.png";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-16 pt-20 pb-24">
          {/* Apple iOS Style Hero Headline */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="text-6xl lg:text-8xl font-bold text-heading leading-[0.9] tracking-tight max-w-6xl mx-auto">
              Strategic
              <br />
              <span className="text-primary">Partnerships</span>
              <br />
              That Scale
            </h1>
            
            <p className="text-2xl lg:text-3xl text-body-text leading-relaxed max-w-4xl mx-auto font-light">
              The proven system behind $500M+ in Fortune 500 campaign success.
              <span className="block mt-4 text-xl text-muted-text">Limited consulting spots available</span>
            </p>
          </div>
          
          {/* Apple-style CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-semibold rounded-full shadow-primary">
              Apply for Consulting
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <Button variant="outline" size="lg" className="border-2 border-border text-body-text hover:bg-accent/50 px-12 py-6 text-xl font-semibold rounded-full">
              <Play className="mr-3 h-6 w-6" />
              Watch Story
            </Button>
          </div>
        </div>
        
        {/* Apple-style Hero Image */}
        <div className="relative flex justify-center items-center animate-scale-in" style={{ animationDelay: "0.6s" }}>
          <div className="relative">
            <img
              src={abelTransparent}
              alt="Abel Mesfin - Strategic Partnership Expert"
              className="h-[600px] lg:h-[800px] w-auto object-contain"
            />
            
            {/* Apple-style floating elements */}
            <div className="absolute top-20 -left-32 hidden lg:block">
              <div className="bg-card/90 backdrop-blur-xl rounded-3xl p-8 shadow-card border border-card-border animate-float">
                <div className="text-center space-y-3">
                  <div className="text-4xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-text font-medium">Fortune 500 Campaigns</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-40 -right-32 hidden lg:block">
              <div className="bg-card/90 backdrop-blur-xl rounded-3xl p-8 shadow-card border border-card-border animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-center space-y-3">
                  <div className="text-4xl font-bold text-primary">$500M+</div>
                  <div className="text-sm text-muted-text font-medium">Campaign Value</div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-32 -left-24 hidden lg:block">
              <div className="bg-card/90 backdrop-blur-xl rounded-3xl p-8 shadow-card border border-card-border animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-center space-y-3">
                  <div className="text-4xl font-bold text-primary">1B+</div>
                  <div className="text-sm text-muted-text font-medium">Media Impressions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;