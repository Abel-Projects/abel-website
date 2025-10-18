import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ScrollGallery from "@/components/ScrollGallery";
import About from "@/components/About";
import Brands from "@/components/Brands";
import Portfolio from "@/components/Portfolio";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loading onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ScrollGallery />
        <Partners />
        <About />
        <Brands />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
