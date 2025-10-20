import { Download, X } from "lucide-react";
import { useState } from "react";

const SocialSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; id: number } | null>(null);
  const [displayCount, setDisplayCount] = useState(6);

  // Add new images to this array over time
  const galleryImages = [
    { id: 1, image: "/src/assets/gallery-1.jpg" },
    { id: 2, image: "/src/assets/gallery-2.jpg" },
    { id: 3, image: "/src/assets/gallery-3.jpg" },
    { id: 4, image: "/src/assets/gallery-4.jpg" },
    { id: 5, image: "/src/assets/gallery-5.jpg" },
    { id: 6, image: "/src/assets/gallery-6.jpg" },
    { id: 7, image: "/src/assets/gallery-7.jpg" },
    // Add more images here as needed
  ];

  const displayedImages = galleryImages.slice(0, displayCount);
  const hasMore = displayCount < galleryImages.length;

  const handleDownload = (imageUrl: string, imageId: number) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `abel-mesfin-${imageId}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 6, galleryImages.length));
  };

  const showLess = () => {
    setDisplayCount(6);
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
          {displayedImages.map((item, index) => (
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

        {(hasMore || displayCount > 6) && (
          <div className="flex justify-center gap-4 mt-8">
            {hasMore && (
              <button
                onClick={loadMore}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Load More
              </button>
            )}
            {displayCount > 6 && (
              <button
                onClick={showLess}
                className="px-8 py-3 bg-card border border-card-border text-heading rounded-lg hover:bg-card/80 transition-colors font-semibold"
              >
                Show Less
              </button>
            )}
          </div>
        )}
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
