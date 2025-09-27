import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.avif";
import abelLogo from "@/assets/abel-logo.png";
import { ArrowRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center px-6 lg:px-8 overflow-hidden h-[600px] lg:h-[800px] xl:h-[900px]" style={{ background: "var(--blue-gradient)" }}>
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full gap-12">
          
          {/* Text Content - Left Side */}
          <div className="flex-1 space-y-16 lg:pr-16 z-10">
            {/* Logo and Location */}
            <div className="space-y-8 animate-fade-up">
              <div className="flex flex-col items-start space-y-6">
                <img 
                  src={abelLogo} 
                  alt="Abel Mesfin Logo" 
                  className="h-32 lg:h-40 xl:h-48 w-auto"
                />
                
                {/* Location Bubble */}
                <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 shadow-card border border-white/20 flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">Denver, CO</span>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl text-white leading-relaxed font-light max-w-2xl">
                Creating lead-generating content and authentic brand stories for top companies and CEOs.
              </p>
            </div>
            
            {/* CTA Section */}
            <div className="flex justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 px-12 py-6 text-xl font-semibold rounded-full shadow-lg">
                View Portfolio
                <ArrowRight className="ml-3 h-6 w-6" />
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
              
              {/* Enhanced floating bubbles */}
              <div className="absolute top-16 -left-24 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-xl rounded-full p-8 shadow-2xl border-2 border-white/20 animate-bounce" style={{ animationDuration: "3s", animationDelay: "0s" }}>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-white">100+</div>
                    <div className="text-xs text-white/80 font-medium">Brand Campaigns</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-32 -right-20 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-xl rounded-full p-8 shadow-2xl border-2 border-white/20 animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-white">Top</div>
                    <div className="text-xs text-white/80 font-medium">Content Creator</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-24 -left-16 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-xl rounded-full p-8 shadow-2xl border-2 border-white/20 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-white">10M+</div>
                    <div className="text-xs text-white/80 font-medium">Content Views</div>
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