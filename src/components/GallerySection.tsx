import GalleryItem from "./GalleryItem";

interface GallerySectionProps {
  title: string;
  subtitle?: string;
  items: Array<{
    imageUrl: string;
    title: string;
    description?: string;
    detailedRomanDescription?: string;
  }>;
  onItemClick?: (item: { imageUrl: string; title: string; description?: string; detailedRomanDescription?: string }) => void;
}

const GallerySection = ({ title, subtitle, items, onItemClick }: GallerySectionProps) => {
  const isEmpressSection = title === "Aula Imperatricis" && items.length === 1;
  const isRoyalSection = title === "Aula Regalis" && items.length === 1;
  const isGrandSection = isEmpressSection || isRoyalSection;
  
  return (
    <section className={`${isGrandSection ? (isEmpressSection ? 'py-28 md:py-36 lg:py-40' : 'py-24 md:py-32') : 'py-20 md:py-24'} animate-fade-in`}>
      <div className="text-center mb-16">
        <h2 className={`font-display font-bold mb-4 text-foreground tracking-tight ${
          isEmpressSection 
            ? 'text-6xl md:text-7xl lg:text-8xl text-gradient-gold' 
            : isRoyalSection
            ? 'text-5xl md:text-6xl lg:text-7xl text-gradient-gold'
            : 'text-4xl md:text-5xl lg:text-6xl'
        }`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`font-serif text-muted-foreground italic mb-6 ${
            isEmpressSection ? 'text-2xl md:text-3xl lg:text-4xl' 
            : isRoyalSection ? 'text-xl md:text-2xl lg:text-3xl' 
            : 'text-lg md:text-xl'
          }`}>
            {subtitle}
          </p>
        )}
        <div className={`${isEmpressSection ? 'w-64' : isRoyalSection ? 'w-48' : 'w-32'} h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent mx-auto ${isEmpressSection ? 'opacity-90' : isRoyalSection ? 'opacity-80' : 'opacity-60'}`} />
      </div>
      
      {isGrandSection ? (
        <div className={`${isEmpressSection ? 'max-w-6xl' : 'max-w-5xl'} mx-auto`}>
          {items.map((item, index) => (
            <div key={index} className={`transform ${isEmpressSection ? 'scale-110 md:scale-125 lg:scale-115' : 'scale-105 md:scale-110'}`}>
              <GalleryItem
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                detailedRomanDescription={item.detailedRomanDescription}
                onItemClick={() => onItemClick?.(item)}
                isEmpressImage={isEmpressSection}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
          {items.map((item, index) => (
            <GalleryItem
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              description={item.description}
              detailedRomanDescription={item.detailedRomanDescription}
              onItemClick={() => onItemClick?.(item)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default GallerySection;
