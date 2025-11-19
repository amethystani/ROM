import { useState } from "react";

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  description?: string;
  detailedRomanDescription?: string;
  onItemClick?: () => void;
  isEmpressImage?: boolean;
}

const GalleryItem = ({ imageUrl, title, description, detailedRomanDescription, onItemClick, isEmpressImage }: GalleryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onItemClick && detailedRomanDescription) {
      onItemClick();
    }
  };

  return (
    <div 
      className={`transition-all duration-500 hover:scale-[1.02] animate-fade-in baroque-frame ${detailedRomanDescription ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Ornate Baroque Frame with curves and flourishes */}
      <div className="relative p-6 bg-gradient-to-br from-gold via-gold-light to-gold shadow-[var(--shadow-frame)]" 
           style={{
             borderRadius: '12px',
             boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2), 0 8px 24px rgba(0,0,0,0.3)'
           }}>
        
        {/* Outer decorative border with relief effect */}
        <div className="relative p-3 bg-gradient-to-br from-bronze to-gold-light"
             style={{
               borderRadius: '8px',
               boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.3)'
             }}>
          
          {/* Inner frame with carved effect */}
          <div className="relative p-5 bg-gradient-to-br from-marble to-cream border-4 border-gold/40"
               style={{
                 borderRadius: '4px',
                 boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)'
               }}>
            
            <div className="relative aspect-[3/4] overflow-hidden bg-black">
              <img
                src={imageUrl}
                alt={title}
                className={`w-full h-full object-cover transition-transform duration-700 ${
                  !isEmpressImage && (isHovered ? "scale-110" : "scale-100")
                }`}
                style={isEmpressImage ? {
                  objectPosition: '30% center',
                  transform: isHovered ? 'scale(1.35)' : 'scale(1.25)',
                  transition: 'transform 0.7s ease'
                } : {}}
              />
              
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-xl mb-2 text-gradient-gold">{title}</h3>
                  {description && (
                    <p className="text-sm font-serif text-marble opacity-90">{description}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
