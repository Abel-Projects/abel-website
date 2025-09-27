import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Aflac Commercial Campaign",
      partner: "Aflac Insurance",
      description: "Strategic partnership campaign targeting diverse markets with compelling storytelling.",
      outcomes: [
        "15M+ impressions across digital channels",
        "Featured in national advertising campaign",
        "25% increase in brand awareness"
      ],
      image: "campaign-1",
      category: "Brand Partnership"
    },
    {
      title: "Walmart Growth Initiative", 
      partner: "Walmart",
      description: "Multi-platform campaign strategy focused on community engagement and brand positioning.",
      outcomes: [
        "Reached 20M+ diverse audiences",
        "Generated 500+ media mentions",
        "Drove 40% engagement increase"
      ],
      image: "campaign-2",
      category: "Strategic Campaign"
    },
    {
      title: "Meta Creator Partnership",
      partner: "Meta",
      description: "Innovative content strategy connecting brands with authentic storytelling opportunities.",
      outcomes: [
        "Built network of 100+ creators",
        "Generated $2M+ in partnership value", 
        "Achieved 95% campaign success rate"
      ],
      image: "campaign-3",
      category: "Content Strategy"
    },
    {
      title: "Black Entrepreneurs Day",
      partner: "Daymond John",
      description: "National event series celebrating entrepreneurship and building business networks.",
      outcomes: [
        "Reached 10M+ entrepreneurs",
        "Featured on major media outlets",
        "Connected 1000+ business leaders"
      ],
      image: "campaign-4",
      category: "Event Strategy"
    }
  ];

  const getIcon = (index: number) => {
    const icons = [TrendingUp, Users, DollarSign, ExternalLink];
    const Icon = icons[index % icons.length];
    return <Icon className="w-6 h-6" />;
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
            Portfolio
          </div>
          <h2 className="text-section text-heading">
            Flagship campaigns and partnerships
          </h2>
          <p className="text-lg text-body-text max-w-3xl mx-auto">
            Explore successful collaborations that drove meaningful growth, 
            built lasting partnerships, and created measurable impact across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-card-border rounded-3xl p-8 hover:shadow-card transition-all duration-500 hover:transform hover:scale-[1.02] animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  {project.category}
                </span>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {getIcon(index)}
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-card-title text-heading mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary font-semibold">{project.partner}</p>
                </div>
                
                <p className="text-body-text leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Outcomes */}
              <div className="space-y-3 mb-6">
                <h4 className="font-semibold text-heading">Key Outcomes:</h4>
                <div className="space-y-2">
                  {project.outcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-body-text text-sm">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Button variant="ghost" className="group/btn w-full justify-between">
                <span>View Case Study</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <Button variant="outline" size="lg">
            View Complete Portfolio
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;