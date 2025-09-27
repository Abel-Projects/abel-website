import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const navigation = {
    services: [
      { name: "Strategic Consulting", href: "#" },
      { name: "Partnership Development", href: "#" },
      { name: "Campaign Strategy", href: "#" },
      { name: "Executive Advisory", href: "#" }
    ],
    resources: [
      { name: "Partnership Playbook", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Strategy Blog", href: "#" },
      { name: "Media Kit", href: "#" }
    ],
    company: [
      { name: "About Abel", href: "#about" },
      { name: "Speaking", href: "#speaking" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" }
    ]
  };

  return (
    <footer className="bg-heading text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Apple-style CTA Section */}
        <div className="py-24 border-b border-background/10">
          <div className="text-center space-y-12 animate-fade-up">
            <div className="space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              Ready to tell your
              <span className="text-primary block">brand's story?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-background/80 max-w-4xl mx-auto leading-relaxed font-light">
              Let's create content that converts and stories that scale your business.
            </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-semibold rounded-full shadow-primary">
                Start a Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-background/20 text-background hover:bg-background/10 px-12 py-6 text-xl font-semibold rounded-full">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Abel Mesfin</h3>
                <p className="text-background/70 text-lg leading-relaxed font-light max-w-md">
                  Content marketing expert creating lead-generating campaigns and authentic brand stories for top companies and CEOs.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="text-sm font-semibold tracking-wide uppercase text-background/60">
                  Connect
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-background/60 hover:text-background hover:bg-background/20 transition-all">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center text-background/60 hover:text-background hover:bg-background/20 transition-all">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Services */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Content Strategy</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Brand Storytelling</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Campaign Development</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Creative Direction</a></li>
              </ul>
            </div>
            
            {/* Resources */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Portfolio</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Case Studies</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Brand Campaigns</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Content Examples</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Client Stories</a></li>
              </ul>
            </div>
            
            {/* Company */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg">About</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-background/70 hover:text-background transition-colors font-medium">About Abel</a></li>
                <li><a href="#portfolio" className="text-background/70 hover:text-background transition-colors font-medium">Portfolio</a></li>
                <li><a href="#contact" className="text-background/70 hover:text-background transition-colors font-medium">Contact</a></li>
                <li><a href="#" className="text-background/70 hover:text-background transition-colors font-medium">Process</a></li>
              </ul>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="bg-background/5 rounded-3xl p-12 mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Email</span>
                </div>
                <div className="text-background/80 font-medium">
                  abelgmesfin@gmail.com
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Phone</span>
                </div>
                <div className="text-background/80 font-medium">
                  +1 (555) 123-4567
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="font-semibold">Location</span>
                </div>
                <div className="text-background/80 font-medium">
                  Denver, CO
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/10 py-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-background/60 font-medium">
              © 2024 Abel Mesfin. All rights reserved.
            </div>
            
            <div className="flex space-x-8 text-background/60">
              <a href="#" className="hover:text-background transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors font-medium">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors font-medium">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;