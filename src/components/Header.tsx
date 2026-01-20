import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-button group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground hidden sm:block">
            Love Calculator
          </span>
        </a>
        
        <nav className="flex items-center gap-4 text-sm">
          <a 
            href="#calculator" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Calculate
          </a>
          <a 
            href="#about" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
