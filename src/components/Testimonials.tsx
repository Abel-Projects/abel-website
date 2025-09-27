import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Abel's strategic approach to partnerships transformed how we think about brand collaboration. His ability to connect authentic stories with business outcomes is unmatched.",
      author: "Sarah Johnson",
      title: "VP of Marketing, Fortune 500 Company",
      avatar: "testimonial-1",
      rating: 5
    },
    {
      quote: "Working with Abel was a game-changer for our campaign strategy. He brings both creative vision and analytical rigor to every partnership.",
      author: "Marcus Chen",
      title: "CEO, Tech Startup",
      avatar: "testimonial-2", 
      rating: 5
    },
    {
      quote: "Abel's expertise in building meaningful partnerships helped us reach audiences we never thought possible. His strategic insight is invaluable.",
      author: "Emily Rodriguez",
      title: "Brand Director, Consumer Goods",
      avatar: "testimonial-3",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            Client Testimonials
          </div>
          <h2 className="text-section text-heading">
            What partners say about working with Abel
          </h2>
          <p className="text-lg text-body-text max-w-3xl mx-auto">
            Real feedback from CEOs, marketing leaders, and brand partners who've 
            experienced the impact of strategic collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card border border-card-border rounded-3xl p-8 hover:shadow-card transition-all duration-500 hover:transform hover:scale-[1.02] animate-fade-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-2xl flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-body-text leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div>
                  <div className="font-semibold text-heading">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-text">
                    {testimonial.title}
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-text">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-text">Successful Campaigns</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">5+ Years</div>
              <div className="text-sm text-muted-text">Industry Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-text">Partner Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;