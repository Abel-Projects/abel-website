import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import ScrollGallery from "@/components/ScrollGallery";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen bg-background/80 backdrop-blur-sm relative z-0 scroll-smooth">
        <Header />
        <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
          <section className="snap-start snap-always min-h-screen">
            <Hero />
          </section>
          <section className="snap-start snap-always min-h-screen">
            <MissionStatement />
          </section>
          <section className="snap-start snap-always min-h-screen">
            <ScrollGallery />
          </section>
          <section className="snap-start snap-always min-h-screen">
            <Partners />
          </section>
          <section className="snap-start snap-always min-h-screen">
            <Contact />
          </section>
          <section className="snap-start snap-always">
            <Footer />
          </section>
        </main>
      </div>
      {isLoading && <Loading onLoadingComplete={() => setIsLoading(false)} />}
    </>
  );
};

export default Index;
