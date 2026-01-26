import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Love Calculator Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-display text-xl font-bold text-foreground hidden sm:block">
            Love Calculator
          </span>
        </a>
        
        <nav className="flex items-center gap-2 md:gap-3 text-sm">
          <a 
            href="#calculator" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Calculate
          </a>
          <a 
            href="#zodiac" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Zodiac
          </a>
          <a 
            href="#quiz" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Quiz
          </a>
          <a 
            href="#horoscope" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium hidden sm:block"
          >
            Horoscope
          </a>
          <a 
            href="#fortune" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium hidden md:block"
          >
            Fortune
          </a>
          <a 
            href="#couple-names" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium hidden lg:block"
          >
            Names
          </a>
          <a 
            href="#love-game" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium hidden xl:block"
          >
            Game
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
