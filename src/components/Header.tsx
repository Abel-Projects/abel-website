import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import abelLogo from "@/assets/abel-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide only at the very top
      if (currentScrollY === 0) {
        setIsVisible(false);
      } 
      // Show when scrolling from top or in the first section
      else if (currentScrollY > 0 && currentScrollY < 300) {
        setIsVisible(true);
      }
      // After that, hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    // Initial check - hide at top
    setIsVisible(window.scrollY > 0);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navigation = [
    { name: "Work", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-card/80 backdrop-blur-xl border-b border-card-border shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Minimal Logo */}
          <div className="flex-shrink-0">
            <img 
              src={abelLogo} 
              alt="Abel Mesfin" 
              className={`h-8 w-auto transition-all duration-500 ${
                isScrolled ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>

          {/* Minimal Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-heading hover:text-primary transition-colors duration-300 font-medium text-sm tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Minimal CTA */}
          <div className="hidden md:block">
            <Button 
              size="sm" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium rounded-full px-6 transition-transform hover:scale-105"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-heading hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-20 bg-background/98 backdrop-blur-xl animate-fade-in">
            <div className="flex flex-col items-center justify-center h-full space-y-12 px-6">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-4xl font-bold text-heading hover:text-primary transition-colors animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-6 text-xl font-semibold rounded-full animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;