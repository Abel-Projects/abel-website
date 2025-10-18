import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionStatement from "@/components/MissionStatement";
import ScrollGallery from "@/components/ScrollGallery";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <MissionStatement />
          <ScrollGallery />
          <Partners />
        </main>
        <Footer />
      </div>
      {isLoading && <Loading onLoadingComplete={() => setIsLoading(false)} />}
    </>
  );
};

export default Index;
