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
  { to: "/love-fortune-ball", label: "Fortune Ball", desc: "Ask the magic ball", icon: Sparkles },
  { to: "/couple-name-generator", label: "Couple Names", desc: "Create your ship name", icon: Heart },
  { to: "/kids-name-generator", label: "Kids Names", desc: "Zodiac baby names", icon: Baby },
  { to: "/love-letter-generator", label: "Love Letters", desc: "Write romantic letters", icon: Send },
  { to: "/relationship-timeline", label: "Timeline", desc: "Your love story milestones", icon: Calendar },
  { to: "/love-poetry", label: "Love Poetry", desc: "Beautiful romantic poems", icon: Feather },
];

const aboutLink = { to: "/about", label: "About", desc: "Learn about us", icon: Info };
const allLinks = [...mainNavLinks, ...moreLinks, aboutLink];

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
              <div className="absolute right-0 top-full pt-3 z-50">
                <div className="w-[380px] bg-white rounded-2xl shadow-2xl border border-rose-100/80 overflow-hidden">
                  {/* Mega-menu header */}
                  <div className="px-5 py-3.5 flex items-center justify-between" style={{ background: "linear-gradient(135deg, #be123c 0%, #f43f5e 100%)" }}>
                    <div>
                      <p className="text-white font-bold text-sm">More Love Tools</p>
                      <p className="text-white/60 text-xs">Explore all our free tools</p>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-white/30" />
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                      <div className="w-2 h-2 rounded-full bg-white/80" />
                    </div>
                  </div>

                  {/* 2-column grid of tools */}
                  <div className="grid grid-cols-2 gap-1.5 p-3">
                    {moreLinks.map((link) => {
                      const active = location.pathname === link.to;
                      return (
                        <Link
                          key={link.to}
                          to={link.to}
                          className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-150 group ${
                            active
                              ? "bg-rose-50 ring-1 ring-rose-200"
                              : "hover:bg-rose-50/70"
                          }`}
                          onClick={() => setMoreOpen(false)}
                        >
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                            active
                              ? "bg-rose-500"
                              : "bg-rose-100 group-hover:bg-rose-200"
                          }`}>
                            <link.icon size={15} className={active ? "text-white" : "text-rose-500"} />
                          </div>
                          <div className="min-w-0">
                            <p className={`text-xs font-semibold leading-tight truncate ${active ? "text-rose-600" : "text-gray-800 group-hover:text-rose-600"}`}>
                              {link.label}
                            </p>
                            <p className="text-[10px] text-gray-400 truncate mt-0.5">{link.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Footer link */}
                  <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/80 flex items-center justify-between">
                    <Link
                      to="/about"
                      className="text-xs text-gray-500 hover:text-rose-600 transition-colors font-medium flex items-center gap-1"
                      onClick={() => setMoreOpen(false)}
                    >
                      <Info size={11} />
                      About Us
                    </Link>
                    <Link
                      to="/blog"
                      className="text-xs text-rose-500 hover:text-rose-700 font-semibold transition-colors flex items-center gap-1"
                      onClick={() => setMoreOpen(false)}
                    >
                      Visit Blog →
                    </Link>
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
