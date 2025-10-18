import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Work = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Walmart",
      description: "Multi-channel content strategy",
      impact: "500K+ engagement",
      image: "from-blue-500/20 to-blue-600/20",
      year: "2024"
    },
    {
      title: "Meta",
      description: "Authentic brand storytelling",
      impact: "2M+ reach",
      image: "from-purple-500/20 to-purple-600/20",
      year: "2024"
    },
    {
      title: "Aflac",
      description: "Content marketing framework",
      impact: "150% lead increase",
      image: "from-orange-500/20 to-orange-600/20",
      year: "2023"
    },
    {
      title: "Aroma360",
      description: "Brand campaign strategy",
      impact: "300K+ impressions",
      image: "from-green-500/20 to-green-600/20",
      year: "2023"
    },
    {
      title: "Trainual",
      description: "Video content series",
      impact: "1M+ views",
      image: "from-red-500/20 to-red-600/20",
      year: "2023"
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
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        {/* Header */}
        <div className="mb-20 animate-fade-up">
          <h1 className="text-6xl lg:text-8xl font-bold text-heading mb-6 tracking-tighter">
            Selected Work
          </h1>
          <p className="text-xl lg:text-2xl text-body-text font-light max-w-2xl">
            Content that drives real results for leading brands
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="grid lg:grid-cols-2 gap-12 items-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className={`bg-gradient-to-br ${project.image} rounded-3xl h-[400px] border border-card-border`} />
              </div>
              
              <div className={`space-y-6 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="text-sm text-muted-text font-semibold tracking-wide">
                  {project.year}
                </div>
                <h2 className="text-5xl font-bold text-heading">
                  {project.title}
                </h2>
                <p className="text-xl text-body-text">
                  {project.description}
                </p>
                <div className="text-lg font-semibold text-primary">
                  {project.impact}
                </div>
                <button className="group flex items-center gap-2 text-heading font-semibold hover:gap-4 transition-all">
                  View Project
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-32 pt-32 border-t border-card-border animate-fade-up">
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
      <Footer />
    </div>
  );
};

export default Work;
