import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, Bell } from "lucide-react";

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
  { to: "/about", label: "About" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-primary shadow-md safe-area-top">
      {/* Android-style Top App Bar */}
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-1.5 text-primary-foreground hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img
              src={logo}
              alt="Love Calculator Logo"
              className="w-8 h-8 object-contain"
            />
            <span className="font-display text-lg font-bold text-primary-foreground">
              Love Calculator
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden" 
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed top-0 left-0 w-72 h-full bg-background z-50 shadow-2xl md:hidden animate-in slide-in-from-left duration-300">
            <div className="p-4 border-b border-border bg-primary">
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                <span className="font-display text-lg font-bold text-primary-foreground">Love Calculator</span>
              </Link>
            </div>
            <div className="py-2 overflow-y-auto h-[calc(100%-72px)]">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center text-foreground hover:bg-accent transition-colors font-medium py-3.5 px-6 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
