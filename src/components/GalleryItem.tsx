import { useState } from "react";

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  description?: string;
}

const GalleryItem = ({ imageUrl, title, description }: GalleryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="transition-all duration-500 hover:scale-[1.02] animate-fade-in baroque-frame"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
                  isHovered ? "scale-110" : "scale-100"
                }`}
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
          
          {/* Baroque corner ornaments - curved flourishes */}
          <svg className="absolute -top-1 -left-1 w-12 h-12 text-gold-light" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
            <path d="M 2 12 Q 2 2 12 2 L 8 2 Q 4 2 4 6 L 4 10 Q 4 8 6 8 L 10 8 Q 8 8 8 10 L 8 12 Z" fill="currentColor"/>
          </svg>
          <svg className="absolute -top-1 -right-1 w-12 h-12 text-gold-light rotate-90" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
            <path d="M 2 12 Q 2 2 12 2 L 8 2 Q 4 2 4 6 L 4 10 Q 4 8 6 8 L 10 8 Q 8 8 8 10 L 8 12 Z" fill="currentColor"/>
          </svg>
          <svg className="absolute -bottom-1 -right-1 w-12 h-12 text-gold-light rotate-180" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
            <path d="M 2 12 Q 2 2 12 2 L 8 2 Q 4 2 4 6 L 4 10 Q 4 8 6 8 L 10 8 Q 8 8 8 10 L 8 12 Z" fill="currentColor"/>
          </svg>
          <svg className="absolute -bottom-1 -left-1 w-12 h-12 text-gold-light -rotate-90" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
            <path d="M 2 12 Q 2 2 12 2 L 8 2 Q 4 2 4 6 L 4 10 Q 4 8 6 8 L 10 8 Q 8 8 8 10 L 8 12 Z" fill="currentColor"/>
          </svg>
          
          {/* Side decorative elements - baroque scrollwork */}
          <svg className="absolute top-1/2 -left-2 w-8 h-16 -translate-y-1/2 text-gold" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
            <path d="M 6 2 Q 2 8 6 14 Q 4 8 6 2" fill="currentColor"/>
          </svg>
          <svg className="absolute top-1/2 -right-2 w-8 h-16 -translate-y-1/2 text-gold rotate-180" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>
            <path d="M 6 2 Q 2 8 6 14 Q 4 8 6 2" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
