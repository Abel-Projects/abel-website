import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OverviewDeck = () => {
  const [pdfUrl] = useState<string>("/Abel_Mesfin_Overview_Deck.pdf");

  return (
    <div className="min-h-screen bg-background">
      <Header variant="static" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <h1 className="text-6xl lg:text-8xl font-bold text-heading mb-6 tracking-tighter">
            Overview Deck
          </h1>
          <p className="text-xl lg:text-2xl text-body-text font-light max-w-2xl">
            Comprehensive overview of my work, expertise, and capabilities
          </p>
        </div>

        {/* PDF Viewer or Upload Area */}
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {pdfUrl ? (
            <div className="space-y-6">
              <div className="flex justify-end">
                <Button asChild variant="outline" className="gap-2">
                  <a href={pdfUrl} download>
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </div>
              <div className="bg-card rounded-3xl border border-card-border overflow-hidden">
                <iframe
                  src={pdfUrl}
                  className="w-full h-[800px]"
                  title="Overview Deck PDF"
                />
              </div>
            </div>
          ) : (
            <div className="bg-card/50 rounded-3xl border-2 border-dashed border-card-border p-20 text-center">
              <div className="space-y-4">
                <div className="text-6xl mb-4">📄</div>
                <h2 className="text-2xl font-bold text-heading">
                  No PDF uploaded yet
                </h2>
                <p className="text-body-text max-w-md mx-auto">
                  Upload your overview deck PDF to make it viewable and downloadable on this page.
                </p>
                <div className="text-sm text-muted-text mt-8">
                  Contact your developer to add the PDF file to this page
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Optional: Key Highlights */}
        <div className="mt-32 grid md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="p-8 bg-card/50 rounded-2xl border border-card-border text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-body-text">Brand Campaigns</div>
          </div>
          <div className="p-8 bg-card/50 rounded-2xl border border-card-border text-center">
            <div className="text-4xl font-bold text-primary mb-2">10M+</div>
            <div className="text-body-text">Content Views</div>
          </div>
          <div className="p-8 bg-card/50 rounded-2xl border border-card-border text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-body-text">Industries Served</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OverviewDeck;
