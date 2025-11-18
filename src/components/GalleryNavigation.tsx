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
    <nav className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "outline"}
              onClick={() => onSectionChange(section.id)}
              className={`font-serif text-base transition-all duration-300 ${
                activeSection === section.id 
                  ? "bg-gradient-to-r from-gold to-gold-light text-primary-foreground shadow-[var(--shadow-elegant)] scale-105" 
                  : "hover:border-gold hover:text-gold"
              }`}
            >
              {section.icon && <span className="mr-2">{section.icon}</span>}
              {section.name}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default GalleryNavigation;
