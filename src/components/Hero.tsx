import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.avif";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-20 pb-24 gap-12">
          
          {/* Text Content - Left Side */}
          <div className="flex-1 space-y-16 lg:pr-16 z-10">
            {/* Apple iOS Style Hero Headline */}
            <div className="space-y-8 animate-fade-up">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-heading leading-[0.9] tracking-tight">
                I'm
                <br />
                <span className="text-primary font-black tracking-[0.2em] inline-block w-full text-center">ABEL</span>
                <br />
                <span className="text-primary font-light tracking-[0.4em] inline-block w-full text-center">MESFIN</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-body-text leading-relaxed font-light max-w-2xl">
                Creating lead-generating content and authentic brand stories for top companies and CEOs.
                <span className="block mt-4 text-lg text-muted-text">Content marketing that drives real results</span>
              </p>
            </div>
            
            {/* Apple-style CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-semibold rounded-full shadow-primary">
                View Portfolio
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-border text-body-text hover:bg-accent/50 px-12 py-6 text-xl font-semibold rounded-full">
                <Play className="mr-3 h-6 w-6" />
                See Work in Action
              </Button>
            </div>
          </div>
          
          {/* Apple-style Hero Image - Right Side with Overlap */}
          <div className="relative flex-1 flex justify-center lg:justify-end items-center animate-scale-in lg:-ml-32" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <img
                src={heroImage}
                alt="Abel Mesfin - Content Marketing Expert"
                className="h-[500px] lg:h-[700px] xl:h-[800px] w-auto object-contain"
              />
              
              {/* Apple-style floating elements */}
              <div className="absolute top-16 -left-24 hidden lg:block">
                <div className="bg-transparent rounded-3xl p-6 animate-float">
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">100+</div>
                    <div className="text-xs text-muted-text font-medium">Brand Campaigns</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-32 -right-20 hidden lg:block">
                <div className="bg-transparent rounded-3xl p-6 animate-float" style={{ animationDelay: "0.5s" }}>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">Top</div>
                    <div className="text-xs text-muted-text font-medium">Content Creator</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-24 -left-16 hidden lg:block">
                <div className="bg-transparent rounded-3xl p-6 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">10M+</div>
                    <div className="text-xs text-muted-text font-medium">Content Views</div>
                  </div>
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