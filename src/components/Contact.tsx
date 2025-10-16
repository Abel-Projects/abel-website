import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-background scroll-snap-section flex items-center py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* Minimal Header */}
        <div className="max-w-3xl mx-auto text-center mb-24 animate-fade-up">
          <h2 className="text-6xl lg:text-7xl font-bold text-heading mb-8 tracking-tighter">
            Let's Talk
          </h2>
          <p className="text-xl lg:text-2xl text-body-text font-light">
            Ready to create content that converts? Get in touch.
          </p>
        </div>

        {/* Minimal Contact Form */}
        <div className="max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <form className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-heading">Name</label>
                <Input 
                  placeholder="Your name" 
                  className="border-2 border-border bg-card focus:border-primary rounded-2xl py-6 px-6 text-lg transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-heading">Email</label>
                <Input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="border-2 border-border bg-card focus:border-primary rounded-2xl py-6 px-6 text-lg transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-semibold text-heading">Company</label>
              <Input 
                placeholder="Your company" 
                className="border-2 border-border bg-card focus:border-primary rounded-2xl py-6 px-6 text-lg transition-all"
              />
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-semibold text-heading">Message</label>
              <Textarea 
                placeholder="Tell me about your project..."
                className="border-2 border-border bg-card focus:border-primary rounded-2xl py-6 px-6 text-lg transition-all min-h-[200px] resize-none"
              />
            </div>
            
            <Button 
              size="lg" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-7 text-xl font-semibold rounded-2xl transition-transform hover:scale-[1.02]"
            >
              Send Message
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </form>
          
          {/* Minimal Contact Info */}
          <div className="mt-16 pt-16 border-t border-card-border text-center">
            <div className="flex items-center justify-center gap-3 text-body-text">
              <Mail className="h-5 w-5" />
              <a href="mailto:abelgmesfin@gmail.com" className="text-lg hover:text-primary transition-colors">
                abelgmesfin@gmail.com
              </a>
            </div>
            <p className="mt-6 text-muted-text">
              Denver, CO • Available for projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;