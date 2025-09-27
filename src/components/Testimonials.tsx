import { Star, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Abel's content strategy transformed our brand presence. His authentic storytelling approach drove incredible engagement and real business results.",
      author: "Marketing Director",
      title: "Brand Strategy Lead",
      company: "Fortune 500 Retail Company",
      rating: 5,
      avatar: "MD"
    },
    {
      quote: "Working with Abel was game-changing. He doesn't just create content; he crafts narratives that truly connect with audiences and drive action.",
      author: "Creative Director",
      title: "Head of Content",
      company: "Global Technology Brand",
      rating: 5,
      avatar: "CD"
    },
    {
      quote: "Abel's content marketing expertise generated amazing results. His approach is both creative and strategically sound.",
      author: "Brand Manager",
      title: "Digital Marketing Lead",
      company: "Enterprise Software Company",
      rating: 5,
      avatar: "BM"
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
              What clients say about
              <span className="text-primary block">working with me</span>
            </h2>
            
            <p className="text-2xl text-body-text max-w-4xl mx-auto leading-relaxed font-light">
              Real feedback from brands who've experienced the power of strategic content marketing.
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
              Ready to create something amazing?
            </h3>
            
            <p className="text-xl text-body-text leading-relaxed font-light">
              Let's discuss how strategic content can transform your brand's story and drive real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-semibold rounded-full shadow-primary">
                Start a Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-border text-body-text hover:bg-accent/50 px-12 py-6 text-xl font-semibold rounded-full">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;