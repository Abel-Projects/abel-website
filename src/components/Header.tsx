import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import abelLogo from "@/assets/abel-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 opacity-0 animate-fade-in ${isScrolled ? 'bg-black/95 border-b border-gray-800' : 'bg-transparent'}`} style={{ animationDelay: "2s", animationFillMode: "forwards" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Apple-style Logo */}
          <div className="flex-shrink-0">
            <img 
              src={abelLogo} 
              alt="Abel Mesfin Logo" 
              className={`h-10 w-auto transition-all duration-700 ${isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            />
          </div>

          {/* Apple-style Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-500 font-medium text-sm ${isScrolled ? 'text-body-text hover:text-heading' : 'text-white/80 hover:text-white'}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Apple-style CTA Button */}
          <div className="hidden md:block">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${isScrolled ? 'text-body-text hover:text-heading' : 'text-white/80 hover:text-white'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-card-border bg-background/95 apple-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-body-text hover:text-heading transition-colors text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;