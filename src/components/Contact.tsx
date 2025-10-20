import { Mail, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-32 pt-64 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl lg:text-7xl font-bold text-heading mb-6 tracking-tighter">
            Let's Create Together
          </h2>
          <p className="text-xl lg:text-2xl text-body-text font-light max-w-3xl mx-auto">
            Ready to elevate your brand and tell stories that convert? 
            Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Email */}
          <div 
            className="p-8 bg-card/50 rounded-3xl border border-card-border hover:bg-card transition-all duration-300 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex flex-col items-center text-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-heading">Email</h3>
            </div>
            <p className="text-body-text mb-4 text-center">
              Drop me a line and let's start the conversation
            </p>
            <a 
              href="mailto:abelgmesfin@gmail.com" 
              className="text-primary font-semibold hover:underline block text-center"
            >
              abelgmesfin@gmail.com
            </a>
          </div>

          {/* Social */}
          <div 
            className="p-8 bg-card/50 rounded-3xl border border-card-border hover:bg-card transition-all duration-300 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-col items-center text-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-heading">Connect</h3>
            </div>
            <p className="text-body-text mb-4 text-center">
              Follow my work and connect on social media
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://linkedin.com/in/abelgmesfin" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                LinkedIn
              </a>
              <span className="text-muted-text">•</span>
              <a 
                href="https://instagram.com/abelmesfinofficial" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <Button 
            asChild
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-semibold rounded-full"
          >
            <a href="mailto:abelgmesfin@gmail.com">
              Start a Conversation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
