import { Button } from "@/components/ui/button";

interface GalleryNavigationProps {
  sections: Array<{
    id: string;
    name: string;
    icon?: string;
  }>;
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const GalleryNavigation = ({ sections, activeSection, onSectionChange }: GalleryNavigationProps) => {
  return (
    <nav className="sticky top-0 z-20 bg-background/98 backdrop-blur-md border-b border-border/50 py-8 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "outline"}
              className={`font-serif text-base transition-all duration-500 ease-out ${
                activeSection === section.id 
                  ? "bg-gradient-to-r from-gold to-gold-light text-primary-foreground shadow-[var(--shadow-elegant)] scale-105 border-gold" 
                  : "hover:border-gold/60 hover:text-gold hover:bg-gold/5 hover:scale-[1.02]"
              }`}
              onClick={() => {
                // Toggle: if already active, deselect; otherwise select
                onSectionChange(activeSection === section.id ? "" : section.id);
              }}
            >
              {section.icon && <span className="mr-2 text-lg">{section.icon}</span>}
              {section.name}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GalleryNavigation;
