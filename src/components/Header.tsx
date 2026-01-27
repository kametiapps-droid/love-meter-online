import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="Love Calculator Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-display text-xl font-bold text-foreground hidden sm:block">
            Love Calculator
          </span>
        </Link>
        
        <nav className="flex items-center gap-2 md:gap-3 text-sm">
          <Link 
            to="/love-calculator" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Calculate
          </Link>
          <Link 
            to="/zodiac-compatibility" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Zodiac
          </Link>
          <Link 
            to="/love-quiz" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Quiz
          </Link>
          <Link 
            to="/daily-horoscope" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium hidden sm:block"
          >
            Horoscope
          </Link>
          <Link 
            to="/love-fortune-ball" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium hidden md:block"
          >
            Fortune
          </Link>
          <Link 
            to="/couple-name-generator" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium hidden lg:block"
          >
            Names
          </Link>
          <Link 
            to="/love-game" 
            className="text-muted-foreground hover:text-primary transition-colors font-medium hidden xl:block"
          >
            Game
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
