import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Menu, X, ChevronDown,
  Heart, Stars, ClipboardList, Sun, BookOpen,
  Sparkles, Baby, Send, Calendar, Feather, Info,
} from "lucide-react";

const mainNavLinks = [
  { to: "/", label: "Calculator", icon: Heart },
  { to: "/zodiac-compatibility", label: "Zodiac", icon: Stars },
  { to: "/love-quiz", label: "Quiz", icon: ClipboardList },
  { to: "/daily-horoscope", label: "Horoscope", icon: Sun },
  { to: "/blog", label: "Blog", icon: BookOpen },
];

const moreLinks = [
  { to: "/love-fortune-ball", label: "Fortune Ball", icon: Sparkles },
  { to: "/couple-name-generator", label: "Couple Names", icon: Heart },
  { to: "/kids-name-generator", label: "Kids Names", icon: Baby },
  { to: "/love-letter-generator", label: "Love Letters", icon: Send },
  { to: "/relationship-timeline", label: "Timeline", icon: Calendar },
  { to: "/love-poetry", label: "Poetry", icon: Feather },
  { to: "/about", label: "About", icon: Info },
];

const allLinks = [...mainNavLinks, ...moreLinks];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  const isMoreActive = moreLinks.some(l => l.to === location.pathname);

  return (
    <header className="w-full sticky top-0 z-50 safe-area-top" style={{ background: "linear-gradient(135deg, #be123c 0%, #e11d48 40%, #f43f5e 100%)" }}>
      {/* subtle bottom highlight */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />

      <div className="flex items-center justify-between h-16 px-4 lg:px-8 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-1.5 text-white hover:bg-white/15 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setIsOpen(false)}>
            <div className="relative">
              <img src={logo} alt="Love Calculator Logo" className="w-9 h-9 object-contain drop-shadow-sm" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-base font-bold text-white tracking-tight">
                Love Calculator
              </span>
              <span className="text-white/60 text-[10px] font-medium tracking-wider uppercase hidden sm:block">
                Free Love Tools
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {mainNavLinks.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                  active
                    ? "bg-white text-rose-600 shadow-sm"
                    : "text-white/85 hover:text-white hover:bg-white/15"
                }`}
              >
                <link.icon size={13} />
                {link.label}
              </Link>
            );
          })}

          {/* More dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-200 ${
                isMoreActive
                  ? "bg-white text-rose-600 shadow-sm"
                  : "text-white/85 hover:text-white hover:bg-white/15"
              }`}
            >
              More
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-full pt-2 z-50">
                <div className="w-52 bg-white rounded-xl shadow-2xl border border-rose-100 overflow-hidden">
                  <div className="py-1.5">
                    {moreLinks.map((link) => {
                      const active = location.pathname === link.to;
                      return (
                        <Link
                          key={link.to}
                          to={link.to}
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                            active
                              ? "bg-rose-50 text-rose-600 font-semibold"
                              : "text-gray-700 hover:bg-rose-50 hover:text-rose-600"
                          }`}
                          onClick={() => setMoreOpen(false)}
                        >
                          <link.icon size={14} className="text-rose-400 flex-shrink-0" />
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-2xl md:hidden flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-rose-100" style={{ background: "linear-gradient(135deg, #be123c 0%, #f43f5e 100%)" }}>
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
                <div className="flex flex-col leading-none">
                  <span className="font-display text-base font-bold text-white">Love Calculator</span>
                  <span className="text-white/60 text-[10px] font-medium uppercase tracking-wider">Free Love Tools</span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-white/80 hover:text-white hover:bg-white/15 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer links */}
            <div className="flex-1 overflow-y-auto py-3">
              {allLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center gap-3.5 px-5 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-rose-50 text-rose-600 border-r-2 border-rose-500"
                        : "text-gray-700 hover:bg-rose-50 hover:text-rose-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      active ? "bg-rose-100" : "bg-gray-100"
                    }`}>
                      <link.icon size={14} className={active ? "text-rose-500" : "text-gray-500"} />
                    </div>
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Drawer footer */}
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
              <p className="text-xs text-gray-400 text-center">
                💕 Free love tools for everyone
              </p>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
