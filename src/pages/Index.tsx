import { useState } from "react";
import MuseumHeader from "@/components/MuseumHeader";
import GallerySection from "@/components/GallerySection";
import GalleryNavigation from "@/components/GalleryNavigation";
import romanBg from "@/assets/roman-fresco-bg.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dynasty");

  // Define gallery sections like museum rooms
  const gallerySections = [
    {
      id: "dynasty",
      name: "The Dynasty Hall",
      icon: "👑"
    },
    {
      id: "renaissance",
      name: "Renaissance Gallery",
      icon: "🎨"
    },
    {
      id: "eternal",
      name: "Hall of Eternal Grace",
      icon: "✨"
    }
  ];

  // Organize photos into different themed sections
  const galleryContent = {
    dynasty: {
      title: "The Dynasty Hall",
      subtitle: "Portraits of Regal Elegance",
      items: [
        {
          imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
          title: "Royal Portrait I",
          description: "Majestic grace befitting royalty"
        },
        {
          imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
          title: "Royal Portrait II",
          description: "Timeless beauty of the dynasty"
        }
      ]
    },
    renaissance: {
      title: "Renaissance Gallery",
      subtitle: "Masterpieces of Classical Beauty",
      items: [
        {
          imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
          title: "Renaissance Beauty I",
          description: "Like a Botticelli masterpiece"
        },
        {
          imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
          title: "Renaissance Beauty II",
          description: "Grace captured in the golden age"
        }
      ]
    },
    eternal: {
      title: "Hall of Eternal Grace",
      subtitle: "Immortalized in Time",
      items: [
        {
          imageUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80",
          title: "Eternal Moment I",
          description: "Beauty that transcends time"
        },
        {
          imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
          title: "Eternal Moment II",
          description: "Forever preserved in elegance"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Roman Fresco Background */}
      <div 
        className="fixed inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url(${romanBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="relative z-10">
        <MuseumHeader />
        
        {/* Gallery Navigation */}
        <GalleryNavigation 
          sections={gallerySections}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        
        {/* Gallery Content */}
        <div className="px-6 max-w-7xl mx-auto">
          <GallerySection 
            title={galleryContent[activeSection as keyof typeof galleryContent].title}
            subtitle={galleryContent[activeSection as keyof typeof galleryContent].subtitle}
            items={galleryContent[activeSection as keyof typeof galleryContent].items}
          />
        </div>
        
        {/* Museum Floor Indicator */}
        <div className="text-center py-8 px-6">
          <div className="inline-block museum-card px-8 py-4">
            <p className="font-serif text-sm text-muted-foreground">
              Currently viewing: <span className="text-gold font-semibold">
                {gallerySections.find(s => s.id === activeSection)?.name}
              </span>
            </p>
            <p className="font-serif text-xs text-muted-foreground mt-1 italic">
              Navigate between galleries using the sections above
            </p>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="py-12 px-6 text-center border-t border-border mt-12">
          <p className="font-serif text-muted-foreground italic">
            "True beauty, like art, is eternal"
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Curated with</span>
            <svg className="w-4 h-4 text-burgundy animate-float" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>in MMXXIV</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
