import GalleryItem from "./GalleryItem";

interface GallerySectionProps {
  title: string;
  subtitle?: string;
  items: Array<{
    imageUrl: string;
    title: string;
    description?: string;
  }>;
}

const GallerySection = ({ title, subtitle, items }: GallerySectionProps) => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="font-serif text-lg text-muted-foreground italic">
            {subtitle}
          </p>
        )}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {items.map((item, index) => (
          <GalleryItem
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
