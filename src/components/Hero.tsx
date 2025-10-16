import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.avif";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-background scroll-snap-section">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20">
          
          {/* Minimal Text Content - Left Side */}
          <div className="space-y-12 animate-fade-up">
            <div className="space-y-8">
              <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold text-heading leading-[0.9] tracking-tighter">
                Abel<br />Mesfin
              </h1>
              
              <p className="text-2xl lg:text-3xl text-body-text font-light max-w-xl leading-relaxed">
                Creating content that converts for top brands and CEOs
              </p>
            </div>
            
            {/* CTA */}
            <div className="flex gap-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg font-semibold rounded-full transition-transform hover:scale-105"
              >
                View Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-border text-heading hover:bg-accent px-10 py-7 text-lg font-semibold rounded-full transition-transform hover:scale-105"
              >
                Contact
              </Button>
            </div>
          </div>
          
          {/* Hero Image - Right Side with Parallax */}
          <div 
            className="relative flex justify-center lg:justify-end items-center animate-scale-in" 
            style={{ 
              animationDelay: "0.4s",
              transform: `translateY(${parallaxOffset}px)`
            }}
          >
            <div className="relative w-full max-w-lg">
              <img
                src={heroImage}
                alt="Abel Mesfin - Content Marketing Expert"
                className="w-full h-auto object-contain rounded-3xl"
              />
              
              {/* Minimal Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-card/90 backdrop-blur-xl rounded-2xl p-6 border border-card-border shadow-card">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-heading">100+</div>
                      <div className="text-xs text-muted-text">Campaigns</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-heading">10M+</div>
                      <div className="text-xs text-muted-text">Views</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-heading">Top</div>
                      <div className="text-xs text-muted-text">Creator</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-text" />
      </div>
    </section>
  );
};

export default Hero;