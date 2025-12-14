import { useEffect } from "react";
import { Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSection from "@/components/SocialSection";
import amLogoBlack from "@/assets/am-logo-black-updated.png";
import amLogoWhite from "@/assets/am-logo-white-updated.png";

const MediaKit = () => {
  useEffect(() => {
    document.title = "Abel Mesfin | Media & Brand Kit";
    window.scrollTo(0, 0);
  }, []);

  const colorPalette = [
    { name: "Royal Blue", value: "hsl(225, 72%, 53%)", hex: "#305CDE", usage: "Primary actions, links, highlights" },
    { name: "Black", value: "hsl(0, 0%, 0%)", hex: "#000000", usage: "Main background, dark elements" },
    { name: "White", value: "hsl(0, 0%, 100%)", hex: "#FFFFFF", usage: "Main background, light elements" },
  ];


  return (
    <div className="min-h-screen bg-background">
      <Header variant="static" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        {/* Header */}
        <div className="mb-20 animate-fade-up">
          <h1 className="text-6xl lg:text-8xl font-bold text-heading mb-6 tracking-tighter">
            Media & Brand Kit
          </h1>
          <p className="text-xl lg:text-2xl text-body-text font-light max-w-3xl">
            Comprehensive guide to maintaining brand consistency across all touchpoints
          </p>
        </div>

        {/* Gallery Section */}
        <section className="mb-32 animate-fade-up" style={{ animationDelay: '0.05s' }}>
          <SocialSection />
        </section>

        {/* Logo Usage */}
        <section className="mb-32 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-4xl font-bold text-heading mb-12">Logo Usage</h2>
          
          <div className="bg-card rounded-2xl border border-card-border p-8 lg:p-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-8">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-background p-8 rounded-xl border border-card-border flex items-center justify-center">
                  <img src={amLogoBlack} alt="Abel Mesfin Logo Black" className="h-24 w-auto" />
                </div>
                <p className="text-sm text-muted-text text-center mb-2">Light Background</p>
                <a
                  href={amLogoBlack}
                  download="am-logo-black.png"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors text-sm font-semibold"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="bg-heading p-8 rounded-xl flex items-center justify-center">
                  <img src={amLogoWhite} alt="Abel Mesfin Logo White" className="h-24 w-auto" />
                </div>
                <p className="text-sm text-muted-text text-center mb-2">Dark Background</p>
                <a
                  href={amLogoWhite}
                  download="am-logo-white.png"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors text-sm font-semibold"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>
            </div>

            <div className="bg-card/50 rounded-2xl border border-card-border p-8">
              <h3 className="text-xl font-semibold text-heading mb-4">Logo Do's & Don'ts</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-heading mb-3">Do's</h4>
                  <ul className="space-y-3 text-body-text">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Primary logo for all official communications, website headers, and marketing materials.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Maintain minimum clear space equal to the height of the "A" in the logo on all sides.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      <span>Logo should never be smaller than 80px in height for digital use, 0.5" for print.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-heading mb-3">Don'ts</h4>
                  <ul className="space-y-3 text-body-text">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      <span>Never stretch, skew, or distort the logo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      <span>Never change the logo colors or add effects</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      <span>Never place logo on busy backgrounds without proper contrast</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      <span>Never use logo smaller than minimum size requirements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      <span>Never rotate or modify the logo orientation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-32 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl font-bold text-heading mb-12">Color Palette</h2>
          
          <div className="bg-card rounded-2xl border border-card-border p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {colorPalette.map((color, index) => (
                <div key={color.name} className="bg-card/50 rounded-2xl border border-card-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div 
                    className="h-32 w-full"
                    style={{ backgroundColor: color.value }}
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-heading mb-2">{color.name}</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-text">HSL:</span>
                        <span className="font-mono text-body-text">{color.value}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-text">HEX:</span>
                        <span className="font-mono text-body-text">{color.hex}</span>
                      </div>
                      <p className="text-body-text mt-3 text-xs">{color.usage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card/50 rounded-2xl border border-card-border p-8">
              <h3 className="text-xl font-semibold text-heading mb-4">Color Usage Guidelines</h3>
              <ul className="space-y-3 text-body-text">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Royal Blue:</strong> Use for primary CTAs, links, and key interactive elements. Maintains 4.5:1 contrast ratio for accessibility.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Black & White:</strong> Use for backgrounds, text, and creating contrast. Black provides depth and emphasis, white provides clean, minimal spaces.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Contrast:</strong> Always ensure text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-32 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-4xl font-bold text-heading mb-12">Typography</h2>
          
          <div className="bg-card rounded-2xl border border-card-border p-12 lg:p-16">
            <h3 className="text-2xl font-semibold text-heading mb-8">Font Families</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-heading mb-4">Gotham</h4>
                <p className="text-base text-body-text mb-6">Primary typeface for headings and display text. Available in Thin, Medium, Bold, and Black weights.</p>
                <div className="font-bold text-heading text-2xl" style={{ fontFamily: 'Gotham, sans-serif' }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-heading mb-4">Inter</h4>
                <p className="text-base text-body-text mb-6">Secondary typeface for body text and UI elements. Clean, modern, and highly readable.</p>
                <div className="text-heading text-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-card rounded-2xl border border-card-border p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-heading mb-4">Questions About Brand Guidelines?</h2>
            <p className="text-lg text-body-text mb-6 max-w-2xl mx-auto">
              For questions about logo usage, brand assets, or permission requests, please reach out.
            </p>
            <a 
              href="mailto:abelgmesfin@gmail.com" 
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Contact for Brand Assets
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MediaKit;
