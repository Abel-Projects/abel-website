import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FadeTransition from "@/components/FadeTransition";
import MissionStatement from "@/components/MissionStatement";
import ScrollGallery from "@/components/ScrollGallery";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="min-h-screen bg-background relative z-0">
        <Header />
        <main>
          <section className="snap-section min-h-screen">
            <Hero />
          </section>
          <section className="snap-section min-h-screen">
            <FadeTransition />
          </section>
          <section className="snap-section min-h-screen">
            <MissionStatement />
          </section>
          <ScrollGallery />
          <section className="snap-section">
            <Partners />
          </section>
          <section className="snap-section">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
      {isLoading && <Loading onLoadingComplete={() => setIsLoading(false)} />}
    </>
  );
};

export default Index;
