import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Success message
    toast({
      title: "Message sent successfully!",
      description: "Abel will get back to you within 24 hours."
    });
    
    // Reset form
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                Let's Connect
              </div>
              
              <h2 className="text-section text-heading">
                Ready to build something amazing together?
              </h2>
              
              <p className="text-lg text-body-text leading-relaxed">
                Whether you're looking to launch a strategic campaign, build meaningful 
                partnerships, or scale your brand's influence, let's explore how we can 
                create impact together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-card-border hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-heading">Email</div>
                  <div className="text-body-text">hello@abelmesfin.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-card-border hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-heading">Location</div>
                  <div className="text-body-text">Denver, Colorado</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-card-border hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-heading">Response Time</div>
                  <div className="text-body-text">Within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-6 bg-gradient-subtle rounded-3xl border border-card-border">
              <h3 className="text-card-title text-heading mb-2">
                Prefer to schedule a call?
              </h3>
              <p className="text-body-text mb-4">
                Book a 30-minute strategy session to discuss your goals.
              </p>
              <Button variant="outline" className="w-full sm:w-auto">
                Schedule a Call
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Form Side */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-card-border rounded-3xl p-8 shadow-card">
              <div className="space-y-4">
                <h3 className="text-card-title text-heading">
                  Send a Message
                </h3>
                <p className="text-body-text">
                  Tell Abel about your project and goals.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-heading">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="h-12"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-heading">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-heading">
                  Company / Organization
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-heading">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell Abel about your project, goals, and how he can help..."
                  rows={5}
                  className="resize-none"
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                Let's Build Together
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;