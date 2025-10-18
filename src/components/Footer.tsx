import { Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-heading text-background" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Footer Content */}
        <div className="py-20">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
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
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/10 py-12">
          <div className="text-center text-background/60 font-medium">
            © 2025 Abel Mesfin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;