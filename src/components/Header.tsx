import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/love-calculator", label: "Calculate" },
  { to: "/zodiac-compatibility", label: "Zodiac" },
  { to: "/love-quiz", label: "Quiz" },
  { to: "/daily-horoscope", label: "Horoscope" },
  { to: "/love-fortune-ball", label: "Fortune" },
  { to: "/couple-name-generator", label: "Names" },
  { to: "/kids-name-generator", label: "Kids Names" },
  { to: "/love-game", label: "Game" },
  { to: "/love-letter-generator", label: "Letters" },
  { to: "/relationship-timeline", label: "Timeline" },
  { to: "/love-poetry", label: "Poetry" },
  { to: "/blog", label: "Blog" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-4 px-4 md:px-6 relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Love Calculator Logo"
            className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-display text-xl font-bold text-foreground hidden sm:block">
            Love Calculator
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-6xl mx-auto py-4 px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors font-medium py-3 px-4 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
