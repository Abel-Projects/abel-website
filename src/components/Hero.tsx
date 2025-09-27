import { Button } from "@/components/ui/button";
import abelTransparent from "@/assets/abel-transparent.png";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start px-6 lg:px-8 overflow-hidden pt-16">
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex items-center min-h-[calc(100vh-4rem)]">
          {/* Content - Left Side */}
          <div className="flex-1 max-w-2xl space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Strategic Partnerships That Build{" "}
                <span className="text-yellow-400">$100M+ Brands</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Learn the exact partnership strategies behind my Fortune 500 successes.
                <span className="block mt-2 text-lg text-yellow-300 font-semibold">Limited consulting spots available - Next cohort starts soon</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group bg-white text-gray-900 hover:bg-white/90">
                Apply for Strategic Partnership Consulting
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="group border-white text-white hover:bg-white/10">
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Download Partnership Playbook
              </Button>
            </div>
          </div>
          
          {/* Transparent Portrait - Right Side */}
          <div className="hidden lg:flex flex-1 justify-end items-end relative">
            <div className="relative">
              <img
                src={abelTransparent}
                alt="Abel Mesfin - Strategic Partnership Expert"
                className="h-[600px] w-auto object-contain animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              />
              
              {/* Floating Achievement Stats */}
              <div className="absolute top-16 -left-20 bg-white/90 backdrop-blur-lg text-gray-900 px-6 py-4 rounded-2xl font-semibold shadow-lg animate-float">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Fortune 500 Campaigns</div>
              </div>
              
              <div className="absolute top-40 -right-16 bg-white/90 backdrop-blur-lg text-gray-900 px-6 py-4 rounded-2xl font-semibold shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-2xl font-bold text-purple-600">1B+</div>
                <div className="text-sm text-gray-600">Media Impressions</div>
              </div>
              
              <div className="absolute bottom-32 -left-16 bg-white/90 backdrop-blur-lg text-gray-900 px-6 py-4 rounded-2xl font-semibold shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-bold text-orange-600">$500M+</div>
                <div className="text-sm text-gray-600">Campaign Value</div>
              </div>
              
              <div className="absolute bottom-16 right-4 bg-white/90 backdrop-blur-lg text-gray-900 px-6 py-4 rounded-2xl font-semibold shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-lg font-bold text-green-600">Top Partnership</div>
                <div className="text-sm text-gray-600">Strategist</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Stats */}
        <div className="lg:hidden flex flex-wrap gap-4 mt-8">
          <div className="bg-white/90 backdrop-blur-lg text-gray-900 px-4 py-3 rounded-xl font-semibold shadow-lg flex-1 min-w-[140px]">
            <div className="text-lg font-bold text-blue-600">50+</div>
            <div className="text-xs text-gray-600">Fortune 500 Campaigns</div>
          </div>
          <div className="bg-white/90 backdrop-blur-lg text-gray-900 px-4 py-3 rounded-xl font-semibold shadow-lg flex-1 min-w-[140px]">
            <div className="text-lg font-bold text-purple-600">1B+</div>
            <div className="text-xs text-gray-600">Media Impressions</div>
          </div>
          <div className="bg-white/90 backdrop-blur-lg text-gray-900 px-4 py-3 rounded-xl font-semibold shadow-lg flex-1 min-w-[140px]">
            <div className="text-lg font-bold text-orange-600">$500M+</div>
            <div className="text-xs text-gray-600">Campaign Value</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;