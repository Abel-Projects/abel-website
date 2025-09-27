import { Briefcase, TrendingUp, Users, Target, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const featuredProjects = [
    {
      title: "Global Technology Alliance",
      company: "Fortune 100 Tech Giant",
      description: "Orchestrated a multi-billion dollar partnership ecosystem spanning 15 countries, revolutionizing market entry strategies.",
      impact: "$250M+ revenue impact",
      timeline: "18 months",
      icon: Globe,
      category: "Technology",
      color: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Healthcare Innovation Network",
      company: "Leading Healthcare Provider",
      description: "Built strategic alliances that transformed patient care delivery across North America's largest healthcare network.",
      impact: "500K+ patients impacted",
      timeline: "12 months",
      icon: Zap,
      category: "Healthcare",
      color: "from-green-500/10 to-teal-500/10"
    },
    {
      title: "Retail Transformation Hub",
      company: "Fortune 500 Retail Chain",
      description: "Created omnichannel partnership framework that redefined customer experience across 2,000+ locations.",
      impact: "$150M+ sales growth",
      timeline: "24 months",
      icon: TrendingUp,
      category: "Retail",
      color: "from-orange-500/10 to-red-500/10"
    }
  ];

  const metrics = [
    { value: "$500M+", label: "Total Campaign Value" },
    { value: "50+", label: "Fortune 500 Clients" },
    { value: "1B+", label: "Media Impressions" },
    { value: "98%", label: "Success Rate" }
  ];

  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Apple iOS Hero Section */}
        <div className="text-center space-y-12 mb-24 animate-fade-up">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-primary font-semibold text-lg bg-primary/10 px-6 py-3 rounded-full">
                Partnership Portfolio
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-heading leading-tight tracking-tight">
              Partnerships that
              <span className="text-primary block">transform industries</span>
            </h2>
            
            <p className="text-2xl text-body-text max-w-4xl mx-auto leading-relaxed font-light">
              Real partnerships. Real results. Real impact on Fortune 500 growth strategies.
            </p>
          </div>
        </div>

        {/* Featured Projects - Apple iOS Style */}
        <div className="space-y-20 mb-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              <div className={`space-y-8 animate-fade-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <project.icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-muted-text font-medium bg-accent px-4 py-2 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-4xl lg:text-5xl font-bold text-heading leading-tight tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xl font-semibold text-primary">
                      {project.company}
                    </p>
                  </div>
                  
                  <p className="text-xl text-body-text leading-relaxed font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-6 pt-4">
                    <div className="space-y-1">
                      <div className="text-sm text-muted-text font-medium">Impact</div>
                      <div className="text-lg font-bold text-heading">{project.impact}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-muted-text font-medium">Timeline</div>
                      <div className="text-lg font-bold text-heading">{project.timeline}</div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="border-2 border-border text-body-text hover:bg-accent/50 px-8 py-4 text-lg font-semibold rounded-full">
                    View Case Study
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className={`animate-scale-in ${index % 2 === 1 ? 'lg:col-start-1' : ''}`} style={{ animationDelay: "0.3s" }}>
                <div className={`bg-gradient-to-br ${project.color} rounded-[3rem] p-12 h-96 flex items-center justify-center border border-card-border`}>
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto">
                      <project.icon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-heading">{project.category}</div>
                      <div className="text-muted-text">Partnership Strategy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Section */}
        <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-[3rem] p-16 border border-card-border animate-fade-up">
          <div className="text-center space-y-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-heading tracking-tight">
              Partnership Impact by the Numbers
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {metrics.map((metric, index) => (
                <div 
                  key={metric.label}
                  className="text-center space-y-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl lg:text-6xl font-bold text-primary">{metric.value}</div>
                  <div className="text-muted-text font-medium">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;