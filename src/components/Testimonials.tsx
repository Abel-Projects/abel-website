import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Abel's partnership strategies didn't just meet our expectations—they redefined what we thought was possible. The $100M+ revenue impact speaks for itself.",
      author: "Sarah Chen",
      title: "Chief Strategy Officer",
      company: "Fortune 100 Technology Company",
      rating: 5,
      avatar: "SC"
    },
    {
      quote: "Working with Abel was transformational. He doesn't create partnerships; he architects entire ecosystems that drive exponential growth.",
      author: "Michael Rodriguez",
      title: "VP of Strategic Alliances",
      company: "Global Healthcare Leader",
      rating: 5,
      avatar: "MR"
    },
    {
      quote: "Abel's methodology generated $200M+ in new partnership value. His approach is both visionary and deeply practical.",
      author: "Jennifer Park",
      title: "Head of Business Development",
      company: "Fortune 500 Investment Firm",
      rating: 5,
      avatar: "JP"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-accent/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Apple iOS Header */}
        <div className="text-center space-y-12 mb-24 animate-fade-up">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-primary font-semibold text-lg bg-primary/10 px-6 py-3 rounded-full">
                Client Success Stories
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-heading leading-tight tracking-tight">
              Trusted by the
              <span className="text-primary block">world's best</span>
            </h2>
            
            <p className="text-2xl text-body-text max-w-4xl mx-auto leading-relaxed font-light">
              Fortune 500 executives choose my strategic partnership expertise for transformational results.
            </p>
          </div>
        </div>

        {/* Apple-style Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="bg-card/80 backdrop-blur-xl rounded-[2rem] p-10 border border-card-border hover:shadow-primary/10 hover:shadow-2xl transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-8">
                {/* Rating */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="space-y-6">
                  <Quote className="h-10 w-10 text-primary/20" />
                  <blockquote className="text-lg text-body-text leading-relaxed font-light">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-card-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{testimonial.avatar}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-heading">{testimonial.author}</div>
                    <div className="text-sm text-muted-text">{testimonial.title}</div>
                    <div className="text-sm text-muted-text font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apple-style CTA Section */}
        <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-[3rem] p-16 border border-card-border text-center animate-fade-up">
          <div className="space-y-8 max-w-4xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-bold text-heading tracking-tight">
              Ready to join them?
            </h3>
            
            <p className="text-xl text-body-text leading-relaxed font-light">
              Limited consulting spots available for Fortune 500 strategic partnership development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-semibold rounded-full shadow-primary">
                Apply for Consulting
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-border text-body-text hover:bg-accent/50 px-12 py-6 text-xl font-semibold rounded-full">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;