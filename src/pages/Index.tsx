import { useState, useEffect, useRef } from "react";
import MuseumHeader from "@/components/MuseumHeader";
import GallerySection from "@/components/GallerySection";
import GalleryNavigation from "@/components/GalleryNavigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import romanBg from "@/assets/roman-fresco-bg.jpg";

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [selectedItem, setSelectedItem] = useState<{
    imageUrl: string;
    title: string;
    description?: string;
    detailedRomanDescription?: string;
  } | null>(null);
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  // Define gallery sections like museum rooms
  const gallerySections = [
    {
      id: "imperatrix",
      name: "Aula Imperatricis",
      icon: "👑"
    },
    {
      id: "regalis",
      name: "Aula Regalis",
      icon: "💑"
    },
    {
      id: "ethnic",
      name: "Aula Traditionis",
      icon: "🎨"
    },
    {
      id: "elegantiae",
      name: "Aula Elegantiae",
      icon: "✨"
    }
  ];

  // Organize photos into different themed sections
  const galleryContent = {
    imperatrix: {
      title: "Aula Imperatricis",
      subtitle: "The Empress in Rose - Divine Majesty in Pink Splendor",
      items: [
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/93de1691-a30e-4c0d-9b92-681b7c1f1e63.JPG",
          title: "Imperatrix Rosa",
          description: "The Empress in Pink Majesty",
          detailedRomanDescription: "Behold this magnificent portrait of the Empress, wherein she stands resplendent in the full radiance of her imperial majesty, adorned in the divine hue of rose - a color that speaks to the highest echelons of feminine power and grace. This grand portrait captures the essence of empress-like elegance and sovereign beauty, where every detail of her pink vestments reflects the dignity and magnificence befitting one who rules with both strength and grace. The composition, rendered with the precision of master artisans, presents the Empress in all her splendor - her countenance, radiant and commanding, embodies the very essence of imperial authority and feminine elegance. The delicate pink of her attire, like the petals of the most precious rose, frames her visage with unparalleled grace, while her regal bearing speaks to a power that transcends the boundaries of ordinary existence. Together, the color and her presence form a vision of perfect harmony, where beauty and authority, grace and power, converge in a single moment of eternal significance. The artist has masterfully captured not merely a woman in pink attire, but the very spirit of empress-like majesty-a presence that commands reverence and inspires awe. This work stands as a monument to the enduring power of feminine sovereignty, preserved for eternity in this hallowed gallery as a celebration of the Empress's eternal grace and imperial beauty, worthy of display in the most sacred halls of imperial Rome."
        }
      ]
    },
    regalis: {
      title: "Aula Regalis",
      subtitle: "The Royal Union - King and Queen in Eternal Glory",
      items: [
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/IMG_1208.jpg",
          title: "Reges in Gloria",
          description: "The Royal Couple in Eternal Splendor",
          detailedRomanDescription: "Behold this magnificent testament to the union of two souls, wherein the King and Queen stand together in the full radiance of their royal majesty. This grand portrait captures the essence of regal elegance and eternal devotion, where two noble hearts are united in a bond that transcends the boundaries of time itself. The composition, rendered with the precision of master artisans, presents the royal couple in all their splendor - the King, strong and noble, standing as protector and partner, while the Queen, radiant and graceful, embodies the very essence of feminine elegance and royal dignity. Together, they form a vision of perfect harmony, where strength and grace, power and beauty, converge in a single moment of eternal significance. The artist has masterfully captured not merely two individuals, but the very spirit of royal union - a bond that speaks to the highest ideals of love, devotion, and shared destiny. This work stands as a monument to the enduring power of royal love, preserved for eternity in this hallowed gallery as a celebration of the King and Queen's eternal bond, worthy of display in the most sacred halls of imperial Rome."
        }
      ]
    },
    ethnic: {
      title: "Aula Traditionis",
      subtitle: "Her Cultural Elegance Preserved in Time",
      items: [
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/57cd0af9-3b13-4b30-ae28-f74a0123fce4.JPG",
          title: "Rosa et Alba Regina",
          description: "The Princess in pink and white splendor",
          detailedRomanDescription: "In this resplendent portrait, we witness the Princess adorned in the magnificent vestments of rose and alabaster-the delicate pink and pristine white of her traditional attire creating a harmony of colors that speaks to the purity and grace of her ancestral heritage. The traditional garments, woven with threads of cultural significance and historical reverence, drape her form with the dignity befitting a queen of ancient lineage. Each fold of fabric, each intricate pattern in pink and white, speaks to a heritage that has been preserved through countless generations. Her countenance, radiant and composed, reflects the wisdom of her people and the grace that flows from deep cultural roots. The artist has captured not merely a woman in traditional dress, but the very essence of cultural pride and timeless elegance. This work stands as a testament to the enduring beauty of tradition, where the past and present converge in perfect harmony, worthy of display in the most sacred halls of imperial Rome."
        },
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/7001bfe1-be3c-465b-84e0-231dc326598a%202.JPG",
          title: "Aurora Rosa",
          description: "The glowing Princess in light pink radiance",
          detailedRomanDescription: "Behold this exquisite representation of ethereal magnificence, wherein the Princess embodies the very spirit of dawn itself, bathed in the soft luminescence of rose-colored light. The traditional garments, resplendent in the delicate hue of light pink, seem to emanate their own inner glow, framing her visage with unparalleled grace. Her features, illuminated by this celestial radiance, reveal a beauty that transcends mere physical appearance-a beauty that appears to glow from within, as if touched by the divine light of Aurora herself. The portrait captures the delicate balance between earthly elegance and otherworldly radiance, where the light pink attire becomes a canvas for her inner luminosity. This masterpiece serves as a window into a world where beauty and light are inextricably linked, preserved for eternity in this hallowed gallery as a celebration of the Princess's radiant grace."
        },
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/e316780d-f0a2-4fad-80e7-d61bb57108a7.JPG",
          title: "Regina Purpurea",
          description: "The Princess in maroon majesty",
          detailedRomanDescription: "This magnificent portrait captures the Princess in the full regalia of her cultural heritage, adorned in the deep, regal hue of maroon-a color that speaks to the nobility and strength of her ancestral traditions. The traditional garments, rich with the profound color of purple-red, envelop her form in a tapestry of tradition and elegance that commands reverence. Her expression, both serene and proud, reflects the deep connection to her roots-a connection that illuminates her countenance with an inner radiance that rivals the most precious jewels. The maroon attire, with its symbolic depth and cultural significance, creates a sense of majesty befitting the highest echelons of nobility. The composition, with its masterful attention to the intricate details of cultural dress in this regal color, creates a sense of reverence for the traditions that have shaped her identity. This work stands as a bridge between the ancient customs of her people and the eternal ideals of beauty, preserving for future generations a glimpse into the sublime elegance of cultural heritage."
        },
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/IMG_1767.HEIC",
          title: "Regina Multicolor",
          description: "The Princess in multicolored splendor",
          detailedRomanDescription: "In this splendid portrait, we witness the convergence of cultural tradition and artistic brilliance, where the Princess stands as a living testament to the vibrant beauty of her heritage. The traditional suit, resplendent with a magnificent array of colors woven together in perfect harmony, frames her visage with the dignity befitting the highest echelons of nobility. Each hue, each vibrant thread in this multicolored masterpiece, tells a story of cultural richness and artistic excellence. Her countenance, at once delicate and strong, embodies the paradox of cultural identity-the preservation of ancient traditions set against the backdrop of modern elegance. The artist has captured not only the outward magnificence of this multicolored traditional suit but the inner radiance that comes from deep cultural connection. This portrait serves as a monument to the human capacity to honor the past while embracing the present, preserving for eternity the beauty of cultural heritage as expressed through the Princess's timeless grace and the vibrant splendor of her multicolored attire."
        }
      ]
    },
    elegantiae: {
      title: "Aula Elegantiae",
      subtitle: "Her Grace in Contemporary Splendor",
      items: [
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/IMG_1198.HEIC",
          title: "Regina in Stola Longa",
          description: "The Princess in flowing elegance",
          detailedRomanDescription: "In this magnificent portrait, we behold the Princess adorned in the resplendent vestments of contemporary elegance-a flowing gown that cascades with the grace of a waterfall, capturing the essence of refined sophistication. The garment, crafted with the precision of master artisans, drapes her form in a symphony of fabric that speaks to the eternal ideals of feminine beauty. Her countenance, radiant and composed, reflects the confidence of one who understands the power of elegance. The artist has masterfully rendered every detail-from the delicate drapery that follows her graceful silhouette to the subtle play of light that illuminates her noble bearing. This work stands as a testament to the enduring power of elegance, where contemporary design meets timeless beauty, worthy of display in the most hallowed halls of imperial Rome."
        },
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/IMG_8906.HEIC",
          title: "Regina in Gloria",
          description: "The Princess in glorious attire",
          detailedRomanDescription: "Behold this exquisite representation of regal magnificence, wherein the Princess embodies the very spirit of contemporary grandeur. The elegant attire, resplendent with the sophistication of modern design, frames her visage with unparalleled grace. Her features, illuminated by the soft glow of confidence and poise, reveal a beauty that transcends mere physical appearance-a beauty that radiates from within, as if touched by the divine favor of the gods themselves. The portrait captures the delicate balance between contemporary elegance and timeless grace, where the modern gown becomes a canvas for her inner radiance. This masterpiece serves as a window into a world where beauty and sophistication are inextricably linked, preserved for eternity in this hallowed gallery as a celebration of the Princess's glorious elegance."
        },
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/IMG_8059.HEIC",
          title: "Regina in Splendore",
          description: "The Princess in splendid grace",
          detailedRomanDescription: "This magnificent portrait captures the Princess in the full radiance of contemporary elegance, where every element of her attire speaks to the refined artistry of modern fashion. The gown, rich with sophisticated design and crafted with meticulous attention to detail, envelops her form in a tapestry of elegance and grace. Her expression, both serene and commanding, reflects the deep confidence that comes from true beauty-a confidence that illuminates her countenance with an inner radiance that rivals the most precious jewels. The composition, with its masterful attention to the flowing lines and elegant silhouette, creates a sense of reverence for the timeless ideals of feminine grace. This work stands as a bridge between contemporary design and eternal beauty, preserving for future generations a glimpse into the sublime elegance of the Princess's splendid presence."
        },
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/IMG_5898.JPG",
          title: "Regina in Formositate",
          description: "The Princess in perfect beauty",
          detailedRomanDescription: "In this splendid portrait, we witness the convergence of contemporary elegance and timeless beauty, where the Princess stands as a living testament to the enduring power of refined grace. The elegant gown, resplendent with the sophistication of modern design, frames her visage with the dignity befitting the highest echelons of nobility. Her countenance, at once delicate and strong, embodies the paradox of true elegance-the effortless grace that comes from inner confidence set against the backdrop of exquisite attire. The artist has captured not only the outward magnificence of her contemporary vestments but the inner radiance that comes from genuine beauty. This portrait serves as a monument to the human capacity to embody elegance in its purest form, preserving for eternity the beauty of the Princess's perfect grace as expressed through her sophisticated and timeless presence."
        },
        {
          imageUrl: "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/0e94475f-1031-4364-9771-a52e4a782fce.JPG",
          title: "Regina in Pulchritudine",
          description: "The Princess in absolute beauty",
          detailedRomanDescription: "Behold this magnificent testament to the enduring power of elegance and beauty, wherein the Princess stands resplendent in the full glory of contemporary sophistication. The elegant attire, crafted with the artistry of master designers, envelops her form in a symphony of grace and refinement. Her features, rendered with the precision of a master sculptor, reveal a beauty that has been revered across cultures and epochs-grace, dignity, and an ineffable quality of inner light. The portrait's composition, with its masterful use of contemporary elegance and timeless ideals, creates a sense of depth that draws the viewer into a contemplative state, inviting reflection on the nature of true beauty. This work stands as a monument to the human capacity to embody perfection, preserving for future generations a glimpse into the sublime qualities that define the Princess's absolute beauty and eternal grace."
        }
      ]
    }
  };

  // Handle Enter key to enter museum
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !hasEntered) {
        setHasEntered(true);
        // Start music when entering
        if (audioRef.current) {
          audioRef.current.play().catch(err => console.log("Audio play failed:", err));
        }
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [hasEntered]);

  // Preload background image for faster loading
  useEffect(() => {
    const img = new Image();
    img.src = "https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/han-2.jpg";
    img.onload = () => setBgImageLoaded(true);
    img.onerror = () => {
      console.warn("Failed to load background image");
      setBgImageLoaded(true); // Still allow page to render
    };
  }, []);

  // Handle background music - only start after entry
  useEffect(() => {
    if (!hasEntered) return;
    
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Audio play failed:", error);
      }
    };

    playAudio();
  }, [hasEntered]);

  // Landing Page - Before Entering
  if (!hasEntered) {
    return (
      <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
            bgImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: bgImageLoaded 
              ? `url(https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/han-2.jpg)`
              : undefined,
          }}
        />
        
        {/* Red Overlay for better text readability - very subtle */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(350,65%,25%)]/15 via-[hsl(350,70%,28%)]/10 to-[hsl(350,65%,30%)]/15" />
        
        {/* Background Music */}
        <audio
          ref={audioRef}
          src="https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/Music%20for%20Ceremonial%20Occasion%20Royal%20Fanfare%20&%20National%20Anthem.mp3"
          loop
          preload="auto"
          style={{ display: 'none' }}
        />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-gradient-gold leading-tight tracking-tight">
            Welcome to the Princess Museum
          </h1>
          
          <div className="w-64 h-[3px] bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent mx-auto mb-12 opacity-80" />
          
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-16 leading-relaxed">
            A curated collection celebrating her elegance, grace, and eternal beauty
          </p>
          
          <div className="mt-20">
            <button
              onClick={() => {
                setHasEntered(true);
                if (audioRef.current) {
                  audioRef.current.play().catch(err => console.log("Audio play failed:", err));
                }
              }}
              className="px-12 py-6 bg-gradient-to-r from-gold to-gold-light text-primary-foreground font-display text-2xl md:text-3xl font-bold rounded-lg shadow-[var(--shadow-elegant)] border-2 border-gold/60 hover:border-gold hover:shadow-[var(--shadow-frame)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Enter the Museum
            </button>
          </div>
          
          {/* Animated pulse effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-96 h-96 border-2 border-gold/20 rounded-full animate-pulse" />
            <div className="absolute w-96 h-96 border border-gold/10 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="https://bsqtzfkjcoujtixnmmia.supabase.co/storage/v1/object/public/abcd/Music%20for%20Ceremonial%20Occasion%20Royal%20Fanfare%20&%20National%20Anthem.mp3"
        loop
        preload="auto"
        style={{ display: 'none' }}
      />
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
          activeSection={activeSection || ""}
          onSectionChange={(sectionId) => setActiveSection(sectionId || null)}
        />
        
        {/* Gallery Content - Only show when a section is selected */}
        {activeSection && (
          <div className="px-6 md:px-8 max-w-7xl mx-auto">
          <GallerySection 
            title={galleryContent[activeSection as keyof typeof galleryContent].title}
            subtitle={galleryContent[activeSection as keyof typeof galleryContent].subtitle}
            items={galleryContent[activeSection as keyof typeof galleryContent].items}
              onItemClick={setSelectedItem}
            />
          </div>
        )}
        
        {/* Welcome Message when no section is selected */}
        {!activeSection && (
          <div className="px-6 md:px-8 max-w-4xl mx-auto py-20 text-center">
            <div className="museum-card p-12 md:p-16 shadow-[var(--shadow-elegant)]">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gradient-gold mb-6">
                Welcome to the Princess Museum
              </h2>
              <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent mx-auto mb-8 opacity-60" />
              <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Select a gallery above to begin your journey through a curated collection celebrating her timeless beauty and eternal grace.
              </p>
            </div>
          </div>
        )}
        
        {/* Portrait Detail Dialog */}
        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-marble via-cream to-marble border-2 border-gold/40 shadow-[var(--shadow-elegant)] p-8 md:p-10 [&>button]:text-gold [&>button]:hover:text-gold-light [&>button]:hover:bg-gold/10 [&>button]:border-gold/30">
            <DialogHeader className="space-y-6">
              {selectedItem && (
                <>
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto mb-8 overflow-hidden rounded-lg border-4 border-gold/50 shadow-[var(--shadow-frame)] bg-black">
                    <img
                      src={selectedItem.imageUrl}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
          />
        </div>
                  <DialogTitle className="font-display text-3xl md:text-4xl lg:text-5xl text-gradient-gold text-center mb-3 tracking-tight">
                    {selectedItem.title}
                  </DialogTitle>
                  {selectedItem.description && (
                    <DialogDescription className="font-serif text-lg md:text-xl text-muted-foreground text-center italic mb-8">
                      {selectedItem.description}
                    </DialogDescription>
                  )}
                  <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent mx-auto mb-8 opacity-70" />
                  {selectedItem.detailedRomanDescription && (
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-background/50 to-background/30 p-6 md:p-8 rounded-lg border border-gold/20 shadow-sm">
                        <p className="font-serif text-base md:text-lg lg:text-xl leading-relaxed text-foreground text-justify indent-8">
                          {selectedItem.detailedRomanDescription}
                        </p>
                      </div>
                      <div className="text-center mt-8 pt-8 border-t border-gold/20">
                        <p className="font-serif text-sm md:text-base text-muted-foreground italic">
                          <span className="text-[hsl(var(--gold))] font-semibold text-lg">Museum Collection</span>
                          <span className="mx-2">-</span>
                          <span className="text-[hsl(var(--gold))]">Preserved for Eternity</span>
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </DialogHeader>
          </DialogContent>
        </Dialog>
        
        {/* Museum Floor Indicator - Only show when a section is selected */}
        {activeSection && (
          <div className="text-center py-12 px-6">
            <div className="inline-block museum-card px-10 py-5 shadow-[var(--shadow-elegant)]">
              <p className="font-serif text-base text-muted-foreground">
                Currently viewing: <span className="text-[hsl(var(--gold))] font-semibold">
                {gallerySections.find(s => s.id === activeSection)?.name}
              </span>
            </p>
              <p className="font-serif text-sm text-muted-foreground mt-2 italic opacity-80">
              Navigate between galleries using the sections above
            </p>
          </div>
        </div>
        )}
        
        {/* Footer */}
        <footer className="py-16 px-6 text-center border-t border-border/50 mt-16">
          <p className="font-serif text-lg md:text-xl text-muted-foreground italic mb-6">
            "Her beauty, like art, is eternal"
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Curated with</span>
            <svg className="w-4 h-4 text-burgundy animate-float" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>for the Princess in MMXXIV</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
