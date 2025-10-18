import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import abelLogo from "@/assets/abel-logo.png";

const Header = ({ variant = "dynamic" }: { variant?: "static" | "dynamic" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenuClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 400); // Match animation duration
  };

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
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Overview Deck", href: "/overview-deck" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          variant === "static" 
            ? 'bg-card/80 backdrop-blur-md border-b border-card-border' 
            : isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Always Visible */}
            <Link to="/" className="flex-shrink-0">
              <img 
                src={abelLogo} 
                alt="Abel Mesfin" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Menu Button - Large Square with Lines */}
            <button
              onClick={() => isMenuOpen ? handleMenuClose() : setIsMenuOpen(true)}
              className="w-14 h-14 flex flex-col items-center justify-center gap-2 bg-heading text-background hover:bg-primary hover:scale-110 transition-all duration-300 ease-out rounded-lg group"
            >
              {isMenuOpen ? (
                <X size={28} strokeWidth={2.5} className="transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <>
                  <div className="w-7 h-0.5 bg-current transition-all duration-300 group-hover:w-8" />
                  <div className="w-7 h-0.5 bg-current transition-all duration-300 group-hover:w-6" />
                  <div className="w-7 h-0.5 bg-current transition-all duration-300 group-hover:w-8" />
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Viewport Dropdown Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-[100] bg-background ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
          {/* Close Button */}
          <div className="absolute top-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex items-center justify-between h-20">
                <Link to="/">
                  <img 
                    src={abelLogo} 
                    alt="Abel Mesfin" 
                    className="h-8 w-auto"
                  />
                </Link>
                <button
                  onClick={handleMenuClose}
                  className="w-14 h-14 flex items-center justify-center bg-heading text-background hover:bg-primary hover:scale-110 transition-all duration-300 ease-out rounded-lg group"
                >
                  <X size={28} strokeWidth={2.5} className="transition-transform duration-300 group-hover:rotate-90" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="group text-6xl lg:text-8xl font-bold text-heading hover:text-primary transition-colors animate-fade-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={handleMenuClose}
              >
                {item.name}
                <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500 mt-2" />
              </Link>
            ))}
          </div>

          {/* Footer Info */}
          <div className="absolute bottom-12 left-0 right-0">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-muted-text text-sm">
                <p>Content Creator & Brand Storyteller</p>
                <div className="flex gap-8">
                  <a href="mailto:hello@abelmesfin.com" className="hover:text-primary transition-colors">
                    Email
                  </a>
                  <a href="https://linkedin.com" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://instagram.com" className="hover:text-primary transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;