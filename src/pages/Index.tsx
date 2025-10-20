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
      <div className="min-h-screen bg-background relative z-0">
        <Header />
        <main>
          <Hero />
          <MissionStatement />
          <ScrollGallery />
          <Partners />
          <Contact />
        </main>
        <Footer />
      </div>
      {isLoading && <Loading onLoadingComplete={() => setIsLoading(false)} />}
    </>
  );
};

export default Index;
