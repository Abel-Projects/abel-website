import { Instagram } from "lucide-react";

const SocialSection = () => {
  // Sample Instagram posts - replace with actual Instagram feed integration
  const instagramPosts = [
    {
      id: 1,
      image: "/src/assets/gallery-1.jpg",
      link: "https://instagram.com/abelmesfinofficial"
    },
    {
      id: 2,
      image: "/src/assets/gallery-2.jpg",
      link: "https://instagram.com/abelmesfinofficial"
    },
    {
      id: 3,
      image: "/src/assets/gallery-3.jpg",
      link: "https://instagram.com/abelmesfinofficial"
    },
    {
      id: 4,
      image: "/src/assets/gallery-4.jpg",
      link: "https://instagram.com/abelmesfinofficial"
    },
    {
      id: 5,
      image: "/src/assets/gallery-5.jpg",
      link: "https://instagram.com/abelmesfinofficial"
    },
    {
      id: 6,
      image: "/src/assets/gallery-6.jpg",
      link: "https://instagram.com/abelmesfinofficial"
    }
  ];

  return (
    <div className="animate-fade-up">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold text-heading">
          Social
        </h2>
        <a 
          href="https://instagram.com/abelmesfinofficial" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Instagram className="w-6 h-6" />
          <span className="font-semibold">@abelmesfinofficial</span>
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {instagramPosts.map((post, index) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-xl border border-card-border bg-card/20"
            style={{
              animationDelay: `${index * 0.05}s`
            }}
          >
            <img 
              src={post.image}
              alt={`Instagram post ${post.id}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSection;
