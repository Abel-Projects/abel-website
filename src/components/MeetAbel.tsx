import abelIntro from "@/assets/abel-intro.jpg";

const MeetAbel = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Full-width background image */}
      <img 
        src={abelIntro}
        alt="Abel Mesfin at event"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      
      {/* Text overlay */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white animate-fade-in">
            Meet The Abel Mesfin
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MeetAbel;
