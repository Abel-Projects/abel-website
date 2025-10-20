import { Download, X } from "lucide-react";
import { useState } from "react";

const SocialSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; id: number } | null>(null);

  const galleryImages = [
    {
      id: 1,
      image: "/src/assets/gallery-1.jpg",
    },
    {
      id: 2,
      image: "/src/assets/gallery-2.jpg",
    },
    {
      id: 3,
      image: "/src/assets/gallery-3.jpg",
    },
    {
      id: 4,
      image: "/src/assets/gallery-4.jpg",
    },
    {
      id: 5,
      image: "/src/assets/gallery-5.jpg",
    },
    {
      id: 6,
      image: "/src/assets/gallery-6.jpg",
    }
  ];

  const handleDownload = (imageUrl: string, imageId: number) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `abel-mesfin-${imageId}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="animate-fade-up">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-heading">
            Gallery
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-card-border bg-card/20 cursor-pointer"
              style={{
                animationDelay: `${index * 0.05}s`
              }}
            >
              <img 
                src={item.image}
                alt={`Gallery image ${item.id}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Image Preview Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.image}
              alt={`Gallery image ${selectedImage.id}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            
            <button
              onClick={() => handleDownload(selectedImage.image, selectedImage.id)}
              className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialSection;
