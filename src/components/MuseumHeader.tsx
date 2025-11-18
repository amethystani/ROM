const MuseumHeader = () => {
  return (
    <header className="relative py-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-6 animate-float">
          <svg
            className="w-16 h-16 mx-auto text-gold"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.55c0 4.55-3.08 8.8-8 10.34-4.92-1.54-8-5.79-8-10.34v-8.55l8-3.6z"/>
          </svg>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 text-gradient-gold leading-tight">
          Museum of Timeless Beauty
        </h1>
        
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
        
        <p className="font-serif text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A curated collection celebrating elegance, grace, and eternal beauty—
          <span className="text-gold italic"> worthy of the finest Roman gallery</span>
        </p>
      </div>
    </header>
  );
};

export default MuseumHeader;
