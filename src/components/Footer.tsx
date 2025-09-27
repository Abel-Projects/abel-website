import { Mail, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-card-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-heading mb-2">Abel Mesfin</h3>
              <p className="text-body-text leading-relaxed">
                Strategic partnerships and campaigns that drive growth. 
                Helping brands and CEOs tell bigger stories and create lasting impact.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-body-text">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@abelmesfin.com</span>
              </div>
              <div className="flex items-center gap-3 text-body-text">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Denver, Colorado</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-heading">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-body-text hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-heading">Services</h4>
            <nav className="space-y-3">
              <div className="text-body-text">Campaign Strategy</div>
              <div className="text-body-text">Strategic Partnerships</div>
              <div className="text-body-text">Content Marketing</div>
              <div className="text-body-text">Brand Positioning</div>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-card-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-text text-sm">
              © {currentYear} Abel Mesfin. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-text hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-text hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;