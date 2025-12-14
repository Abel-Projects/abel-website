import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSection from "@/components/SocialSection";
import abelLogo from "@/assets/abel-logo.png";
import abelTransparent from "@/assets/abel-transparent.png";
import amLogoWhite from "@/assets/am-logo-white-updated.png";
import amLogoWhiteAlt from "@/assets/am-logo-white.png";

const MediaKit = () => {
  useEffect(() => {
    document.title = "Abel Mesfin | Media & Brand Kit";
    window.scrollTo(0, 0);
  }, []);

  const colorPalette = [
    { name: "Primary Blue", value: "hsl(220, 90%, 60%)", hex: "#4A90E2", usage: "Primary actions, links, highlights" },
    { name: "Background", value: "hsl(0, 0%, 98%)", hex: "#FAFAFA", usage: "Main background" },
    { name: "Heading", value: "hsl(0, 0%, 10%)", hex: "#1A1A1A", usage: "Headings, important text" },
    { name: "Body Text", value: "hsl(0, 0%, 35%)", hex: "#595959", usage: "Body copy, descriptions" },
    { name: "Muted Text", value: "hsl(0, 0%, 50%)", hex: "#808080", usage: "Secondary text, captions" },
    { name: "Card Background", value: "hsl(0, 0%, 100%)", hex: "#FFFFFF", usage: "Cards, containers" },
  ];

  const typographyScale = [
    { name: "Display", size: "4rem", weight: "700", usage: "Hero headlines" },
    { name: "Hero", size: "3rem", weight: "600", usage: "Section headlines" },
    { name: "Section", size: "2rem", weight: "600", usage: "Subsection titles" },
    { name: "Card Title", size: "1.25rem", weight: "500", usage: "Card headings" },
    { name: "Body", size: "1rem", weight: "400", usage: "Body text" },
    { name: "Small", size: "0.875rem", weight: "400", usage: "Captions, metadata" },
  ];

  const spacingScale = [
    { name: "XS", value: "0.25rem", pixels: "4px" },
    { name: "SM", value: "0.5rem", pixels: "8px" },
    { name: "MD", value: "1rem", pixels: "16px" },
    { name: "LG", value: "1.5rem", pixels: "24px" },
    { name: "XL", value: "2rem", pixels: "32px" },
    { name: "2XL", value: "3rem", pixels: "48px" },
    { name: "3XL", value: "4rem", pixels: "64px" },
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
          
          <div className="space-y-16">
            {/* Primary Logo */}
            <div>
              <h3 className="text-2xl font-semibold text-heading mb-6">Primary Logo</h3>
              <div className="bg-card rounded-2xl border border-card-border p-8 lg:p-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-background p-8 rounded-xl border border-card-border">
                      <img src={abelLogo} alt="Abel Mesfin Logo" className="h-24 w-auto" />
                    </div>
                    <p className="text-sm text-muted-text text-center">Light Background</p>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-heading p-8 rounded-xl">
                      <img src={amLogoWhite} alt="Abel Mesfin Logo White" className="h-24 w-auto" />
                    </div>
                    <p className="text-sm text-muted-text text-center">Dark Background</p>
                  </div>
                </div>
                <div className="space-y-4 text-body-text">
                  <p><strong className="text-heading">Usage:</strong> Primary logo for all official communications, website headers, and marketing materials.</p>
                  <p><strong className="text-heading">Clear Space:</strong> Maintain minimum clear space equal to the height of the "A" in the logo on all sides.</p>
                  <p><strong className="text-heading">Minimum Size:</strong> Logo should never be smaller than 80px in height for digital use, 0.5" for print.</p>
                </div>
              </div>
            </div>

            {/* Alternative Logos */}
            <div>
              <h3 className="text-2xl font-semibold text-heading mb-6">Alternative Variations</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card rounded-2xl border border-card-border p-8">
                  <div className="bg-background p-6 rounded-xl border border-card-border mb-4 flex items-center justify-center min-h-[120px]">
                    <img src={abelTransparent} alt="Abel Logo Transparent" className="h-20 w-auto" />
                  </div>
                  <h4 className="font-semibold text-heading mb-2">Transparent Background</h4>
                  <p className="text-sm text-body-text">Use when logo needs to overlay images or colored backgrounds.</p>
                </div>
                <div className="bg-card rounded-2xl border border-card-border p-8">
                  <div className="bg-heading p-6 rounded-xl mb-4 flex items-center justify-center min-h-[120px]">
                    <img src={amLogoWhiteAlt} alt="AM Logo White" className="h-16 w-auto" />
                  </div>
                  <h4 className="font-semibold text-heading mb-2">Monogram (AM)</h4>
                  <p className="text-sm text-body-text">Compact version for social media avatars and small spaces.</p>
                </div>
              </div>
            </div>

            {/* Logo Don'ts */}
            <div>
              <h3 className="text-2xl font-semibold text-heading mb-6">Logo Don'ts</h3>
              <div className="bg-card/50 rounded-2xl border border-card-border p-8">
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
        </section>

        {/* Color Palette */}
        <section className="mb-32 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-4xl font-bold text-heading mb-12">Color Palette</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {colorPalette.map((color, index) => (
              <div key={color.name} className="bg-card rounded-2xl border border-card-border overflow-hidden hover:shadow-lg transition-shadow">
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
                <span><strong className="text-heading">Primary Blue:</strong> Use for primary CTAs, links, and key interactive elements. Maintains 4.5:1 contrast ratio for accessibility.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><strong className="text-heading">Grayscale Palette:</strong> Creates depth and hierarchy. Use darker shades for emphasis, lighter for backgrounds.</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span><strong className="text-heading">Contrast:</strong> Always ensure text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text).</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-32 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-4xl font-bold text-heading mb-12">Typography</h2>
          
          <div className="space-y-8 mb-12">
            {typographyScale.map((type, index) => (
              <div key={type.name} className="bg-card rounded-2xl border border-card-border p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-heading mb-2">{type.name}</h3>
                    <p className="text-sm text-muted-text">{type.usage}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono text-body-text">{type.size} / {type.weight}</div>
                  </div>
                </div>
                <div 
                  className="text-heading"
                  style={{ 
                    fontSize: type.size, 
                    fontWeight: type.weight,
                    lineHeight: type.name === 'Display' ? '1.05' : type.name === 'Hero' ? '1.1' : '1.5'
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card/50 rounded-2xl border border-card-border p-8">
            <h3 className="text-xl font-semibold text-heading mb-4">Font Families</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-heading mb-2">Gotham</h4>
                <p className="text-sm text-body-text mb-3">Primary typeface for headings and display text. Available in Thin, Medium, Bold, and Black weights.</p>
                <div className="font-bold text-heading" style={{ fontFamily: 'Gotham, sans-serif' }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-heading mb-2">Inter</h4>
                <p className="text-sm text-body-text mb-3">Secondary typeface for body text and UI elements. Clean, modern, and highly readable.</p>
                <div className="text-heading" style={{ fontFamily: 'Inter, sans-serif' }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-32 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-4xl font-bold text-heading mb-12">Spacing System</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {spacingScale.map((space) => (
              <div key={space.name} className="bg-card rounded-2xl border border-card-border p-6">
                <div className="mb-4">
                  <div 
                    className="bg-primary rounded"
                    style={{ width: space.value, height: space.value }}
                  />
                </div>
                <h3 className="font-semibold text-heading mb-1">{space.name}</h3>
                <div className="text-sm text-body-text space-y-1">
                  <div>{space.value}</div>
                  <div className="text-muted-text">{space.pixels}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card/50 rounded-2xl border border-card-border p-8">
            <h3 className="text-xl font-semibold text-heading mb-4">Spacing Guidelines</h3>
            <ul className="space-y-3 text-body-text">
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Use consistent spacing multiples (4px base unit) throughout the design system</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Maintain visual rhythm by using spacing scale consistently across components</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 mt-1">•</span>
                <span>Larger spacing (XL, 2XL, 3XL) for section breaks and major content divisions</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Brand Voice */}
        <section className="mb-32 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-4xl font-bold text-heading mb-12">Brand Voice & Tone</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl border border-card-border p-8">
              <h3 className="text-2xl font-semibold text-heading mb-4">Voice Characteristics</h3>
              <ul className="space-y-3 text-body-text">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Authentic:</strong> Genuine, honest, and transparent in all communications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Strategic:</strong> Thoughtful, data-driven, and results-oriented</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Empowering:</strong> Uplifting, supportive, and focused on growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Professional:</strong> Polished, credible, and trustworthy</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl border border-card-border p-8">
              <h3 className="text-2xl font-semibold text-heading mb-4">Tone Guidelines</h3>
              <ul className="space-y-3 text-body-text">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Conversational:</strong> Approachable but not casual</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Confident:</strong> Assertive without being arrogant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Clear:</strong> Direct and easy to understand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span><strong className="text-heading">Inspiring:</strong> Motivating and forward-thinking</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-32 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-4xl font-bold text-heading mb-12">Usage Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl border border-card-border p-8">
              <h3 className="text-2xl font-semibold text-heading mb-4">✓ Correct Usage</h3>
              <div className="space-y-4">
                <div className="p-6 bg-background rounded-xl border border-card-border">
                  <img src={abelLogo} alt="Correct Logo Usage" className="h-16 w-auto mb-4" />
                  <p className="text-sm text-body-text">Logo with proper clear space and appropriate sizing</p>
                </div>
                <div className="p-6 bg-primary rounded-xl">
                  <p className="text-white font-semibold">Primary button with proper contrast</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-card-border p-8">
              <h3 className="text-2xl font-semibold text-heading mb-4">✗ Incorrect Usage</h3>
              <div className="space-y-4">
                <div className="p-6 bg-background rounded-xl border-2 border-red-200">
                  <div className="flex items-center gap-2 mb-4">
                    <img src={abelLogo} alt="Incorrect Logo" className="h-8 w-auto opacity-50" style={{ transform: 'skewX(-10deg)' }} />
                    <span className="text-xs text-red-500">Too small & distorted</span>
                  </div>
                  <p className="text-sm text-body-text">Logo stretched, too small, or placed without clear space</p>
                </div>
                <div className="p-6 rounded-xl" style={{ backgroundColor: '#E0E0E0' }}>
                  <p className="text-body-text font-semibold">Poor contrast on buttons</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="animate-fade-up" style={{ animationDelay: '0.7s' }}>
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
