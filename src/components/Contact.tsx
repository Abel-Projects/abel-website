import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Calendar, ArrowRight, CheckCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "abelgmesfin@gmail.com",
      description: "For content & brand inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Direct consultation line"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Denver, CO",
      description: "Born and bred for hustle"
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Available for projects",
      description: "Content marketing & campaigns"
    }
  ];

  const benefits = [
    "Content strategy assessment",
    "Custom campaign roadmap", 
    "Brand storytelling framework",
    "Ongoing creative direction"
  ];

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Apple iOS Header */}
        <div className="text-center space-y-12 mb-24 animate-fade-up">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-primary font-semibold text-lg bg-primary/10 px-6 py-3 rounded-full">
                Ready to Scale?
              </span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold text-heading leading-tight tracking-tight">
              Let's create content
              <span className="text-primary block">that converts</span>
            </h2>
            
            <p className="text-2xl text-body-text max-w-4xl mx-auto leading-relaxed font-light">
              Ready to level up your brand with content that drives real results? Let's start the conversation.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Application Form - Apple Style */}
          <div className="space-y-12 animate-fade-up">
            <div className="space-y-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-heading tracking-tight">
                Let's Work Together
              </h3>
              
              <div className="space-y-6">
                <p className="text-xl text-body-text leading-relaxed font-light">
                  Tell me about your brand and content goals, and I'll show you how we can create something amazing together.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={benefit} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span className="text-body-text font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-heading tracking-wide uppercase">First Name</label>
                  <Input 
                    placeholder="Enter your first name" 
                    className="border-2 border-border bg-background focus:border-primary rounded-2xl py-4 px-6 text-lg transition-all"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-heading tracking-wide uppercase">Last Name</label>
                  <Input 
                    placeholder="Enter your last name" 
                    className="border-2 border-border bg-background focus:border-primary rounded-2xl py-4 px-6 text-lg transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-heading tracking-wide uppercase">Email</label>
                <Input 
                  type="email" 
                  placeholder="your.email@company.com" 
                  className="border-2 border-border bg-background focus:border-primary rounded-2xl py-4 px-6 text-lg transition-all"
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-heading tracking-wide uppercase">Company</label>
                <Input 
                  placeholder="Your company name" 
                  className="border-2 border-border bg-background focus:border-primary rounded-2xl py-4 px-6 text-lg transition-all"
                />
              </div>
              
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-heading tracking-wide uppercase">Project Goals</label>
                  <Textarea 
                    placeholder="Tell me about your brand, content goals, and what you're looking to achieve..."
                    className="border-2 border-border bg-background focus:border-primary rounded-2xl py-4 px-6 text-lg transition-all min-h-[150px]"
                  />
                </div>
              
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-xl font-semibold rounded-2xl shadow-primary">
                  Send Message
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
            </form>
          </div>

          {/* Contact Info - Apple Style */}
          <div className="space-y-12 animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-[3rem] p-12 border border-card-border">
              <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-3xl lg:text-4xl font-bold text-heading tracking-tight">
                    Get in Touch
                  </h3>
                  <p className="text-xl text-body-text leading-relaxed font-light">
                    Ready to unlock exponential growth through strategic partnerships? Let's start the conversation.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {contactMethods.map((method, index) => (
                    <div key={method.title} className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <method.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="font-bold text-heading text-lg">{method.title}</div>
                        <div className="text-body-text font-semibold">{method.value}</div>
                        <div className="text-muted-text">{method.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Quick CTA */}
            <div className="bg-card/80 backdrop-blur-xl rounded-[2rem] p-10 border border-card-border text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-heading tracking-tight">
                    Schedule Strategic Consultation
                  </h4>
                  <p className="text-body-text leading-relaxed">
                    Book a 45-minute deep-dive session to explore your partnership potential.
                  </p>
                </div>
                
                <Button variant="outline" size="lg" className="border-2 border-border text-body-text hover:bg-accent/50 px-8 py-4 text-lg font-semibold rounded-full">
                  Schedule Call
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;