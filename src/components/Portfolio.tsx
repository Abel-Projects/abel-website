import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Walmart",
      description: "Multi-channel content strategy",
      impact: "500K+ engagement",
      image: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Meta",
      description: "Authentic brand storytelling",
      impact: "2M+ reach",
      image: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Aflac",
      description: "Content marketing framework",
      impact: "150% lead increase",
      image: "from-orange-500/20 to-orange-600/20"
    },
    {
      title: "Aroma360",
      description: "Brand campaign strategy",
      impact: "300K+ impressions",
      image: "from-green-500/20 to-green-600/20"
    },
    {
      title: "Trainual",
      description: "Video content series",
      impact: "1M+ views",
      image: "from-red-500/20 to-red-600/20"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-background scroll-snap-section min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Minimal Header */}
        <div className="mb-20 animate-fade-up">
          <h2 className="text-6xl lg:text-7xl font-bold text-heading mb-6 tracking-tighter">
            Selected Work
          </h2>
          <p className="text-xl lg:text-2xl text-body-text font-light max-w-2xl">
            Content that drives real results for leading brands
          </p>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="horizontal-scroll hide-scrollbar gap-8 pb-4"
          >
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="horizontal-scroll-item w-[500px] lg:w-[600px] animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="group cursor-pointer">
                  <div className={`bg-gradient-to-br ${project.image} rounded-3xl p-12 h-[500px] flex flex-col justify-end border border-card-border transition-transform duration-500 hover:scale-[1.02]`}>
                    <div className="space-y-4">
                      <h3 className="text-5xl font-bold text-heading">
                        {project.title}
                      </h3>
                      <p className="text-xl text-body-text">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between pt-4">
                        <span className="text-sm font-semibold text-primary">
                          {project.impact}
                        </span>
                        <ArrowRight className="h-6 w-6 text-heading opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Controls */}
          <div className="flex gap-4 mt-12 justify-center">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-heading" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-card border border-card-border flex items-center justify-center hover:bg-accent transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-heading" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-32 animate-fade-up">
          {[
            { number: "100+", label: "Brand Campaigns" },
            { number: "10M+", label: "Content Views" },
            { number: "50+", label: "Video Projects" },
            { number: "200+", label: "Written Pieces" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-5xl lg:text-6xl font-bold text-heading mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-text tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;