const MuseumHeader = () => {
  return (
    <header className="relative py-24 md:py-32 px-6 text-center overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(350,65%,25%)] via-[hsl(350,70%,28%)] to-[hsl(350,65%,30%)]" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient-gold leading-[1.2] tracking-tight pb-2">
          Welcome to the Princess Museum
        </h1>
        
        <div className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent mx-auto mb-8 opacity-60" />
        
        <p className="font-serif text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
          A curated collection celebrating her elegance, grace, and eternal beauty
          <span className="text-[hsl(var(--gold))] italic font-medium"> - worthy of the finest Roman gallery</span>
        </p>
      </div>
    </header>
  );
};

export default MuseumHeader;
