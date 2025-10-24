const AppleTVSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/highlight-reel.webm" type="video/webm" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Highlight Reel
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Experience the moments that define excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppleTVSection;
