import { Download, X } from "lucide-react";
import { useState, useEffect } from "react";
import abelCuDenverGala from "@/assets/abel-cu-denver-gala.jpg";
import abelFlavorFlav from "@/assets/abel-flavor-flav.jpg";
import abelDaymondJohn from "@/assets/abel-daymond-john.jpg";
import abelPortrait2 from "@/assets/abel-portrait-2.jpg";
import abelWakaFlocka from "@/assets/abel-waka-flocka.jpg";
import abelGraduation from "@/assets/abel-graduation.jpg";
import abelMediaKit1 from "@/assets/abel-media-kit-1.jpg";

const SocialSection = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; id: number } | null>(null);
  const [imageMetadata, setImageMetadata] = useState<{ width: number; height: number; fileName: string; fileType: string } | null>(null);
  const [displayCount, setDisplayCount] = useState(3);

  // Add new images to this array over time
  const galleryImages = [
    { id: 1, image: abelCuDenverGala },
    { id: 2, image: abelFlavorFlav },
    { id: 3, image: abelDaymondJohn },
    { id: 4, image: abelPortrait2 },
    { id: 5, image: abelGraduation },
    { id: 6, image: abelMediaKit1 },
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
    setDisplayCount(3);
  };

  useEffect(() => {
    if (selectedImage) {
      const img = new Image();
      img.onload = () => {
        // Extract filename from the image path
        const imagePath = selectedImage.image;
        const fileName = imagePath.split('/').pop() || `gallery-${selectedImage.id}.jpg`;
        
        // Determine file type from extension
        const extension = fileName.split('.').pop()?.toUpperCase() || 'JPG';
        const fileType = extension === 'JPG' || extension === 'JPEG' ? 'JPEG' : extension;
        
        setImageMetadata({
          width: img.naturalWidth,
          height: img.naturalHeight,
          fileName: fileName,
          fileType: fileType,
        });
      };
      img.onerror = () => {
        // Clear metadata if image fails to load
        setImageMetadata(null);
      };
      img.src = selectedImage.image;
    } else {
      setImageMetadata(null);
    }
  }, [selectedImage]);

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

        {(hasMore || displayCount > 3) && (
          <div className="flex justify-center gap-4 mt-8">
            {hasMore && (
              <button
                onClick={loadMore}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                Load More
              </button>
            )}
            {displayCount > 3 && (
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
          className="fixed inset-0 bg-black/90 z-[110] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage.image}
              alt={`Gallery image ${selectedImage.id}`}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            
            {/* Image Metadata and Download Button */}
            {imageMetadata && (
              <div className="mt-4 w-full flex items-center justify-between gap-4">
                <div className="text-left text-white/80 text-sm space-y-1">
                  <div className="font-medium">{imageMetadata.fileName}</div>
                  <div className="text-white/60">
                    {imageMetadata.width} × {imageMetadata.height}px • {imageMetadata.fileType}
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(selectedImage.image, selectedImage.id)}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors flex-shrink-0"
                >
                  <Download className="w-5 h-5" />
                  Download
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SocialSection;
