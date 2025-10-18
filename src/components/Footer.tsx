import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-heading text-background" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            
            {/* Navigation */}
            <div className="space-y-6">
              <h4 className="font-bold text-lg">Navigation</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-background/70 hover:text-background transition-colors font-medium">Home</Link></li>
                <li><Link to="/portfolio" className="text-background/70 hover:text-background transition-colors font-medium">Portfolio</Link></li>
                <li><Link to="/about" className="text-background/70 hover:text-background transition-colors font-medium">About</Link></li>
                <li><Link to="/overview-deck" className="text-background/70 hover:text-background transition-colors font-medium">Overview Deck</Link></li>
                <li><Link to="/contact" className="text-background/70 hover:text-background transition-colors font-medium">Contact</Link></li>
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