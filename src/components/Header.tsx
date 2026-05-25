import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Heart, Stars, ClipboardList, Sun, BookOpen,
  Sparkles, Baby, Send, Calendar, Feather, Info, ChevronLeft, ChevronRight,
} from "lucide-react";

const allTools = [
  { to: "/", label: "Love Calculator", icon: Heart, color: "bg-rose-100", iconColor: "text-rose-500" },
  { to: "/zodiac-compatibility", label: "Zodiac Match", icon: Stars, color: "bg-violet-100", iconColor: "text-violet-500" },
  { to: "/love-quiz", label: "Love Quiz", icon: ClipboardList, color: "bg-pink-100", iconColor: "text-pink-500" },
  { to: "/daily-horoscope", label: "Daily Horoscope", icon: Sun, color: "bg-amber-100", iconColor: "text-amber-500" },
  { to: "/love-fortune-ball", label: "Fortune Ball", icon: Sparkles, color: "bg-indigo-100", iconColor: "text-indigo-500" },
  { to: "/couple-name-generator", label: "Couple Names", icon: Heart, color: "bg-red-100", iconColor: "text-red-500" },
  { to: "/kids-name-generator", label: "Baby Names", icon: Baby, color: "bg-teal-100", iconColor: "text-teal-500" },
  { to: "/love-letter-generator", label: "Love Letters", icon: Send, color: "bg-sky-100", iconColor: "text-sky-500" },
  { to: "/relationship-timeline", label: "Timeline", icon: Calendar, color: "bg-emerald-100", iconColor: "text-emerald-500" },
  { to: "/love-poetry", label: "Love Poetry", icon: Feather, color: "bg-fuchsia-100", iconColor: "text-fuchsia-500" },
];

const mobileOnlyLinks = [
  { to: "/blog", label: "Blog", icon: BookOpen },
  { to: "/about", label: "About Us", icon: Info },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      {/* ── Top bar ── */}
      <div className="border-b border-gray-100">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8 max-w-7xl mx-auto">

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors mr-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setIsOpen(false)}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center shadow-sm overflow-hidden">
              <img src={logo} alt="Love Calculator Logo" className="w-7 h-7 object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-gray-900 text-[15px] tracking-tight">Love Calculator</span>
              <span className="text-rose-500 text-[10px] font-semibold tracking-wider uppercase hidden sm:block">Free Love Tools</span>
            </div>
          </Link>

          {/* Desktop right nav */}
          <nav className="hidden md:flex items-center gap-1 ml-auto text-sm">
            <Link
              to="/blog"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 text-sm ${
                location.pathname === "/blog" || location.pathname.startsWith("/blog/")
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-rose-50 hover:text-rose-600"
              }`}
            >
              <BookOpen size={13} />
              Blog
            </Link>

            <Link
              to="/about"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 text-sm ${
                location.pathname === "/about"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-rose-50 hover:text-rose-600"
              }`}
            >
              <Info size={13} />
              About
            </Link>

            <Link
              to="/"
              className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold shadow-sm hover:from-rose-600 hover:to-rose-700 transition-all duration-200"
            >
              <Heart size={13} fill="white" />
              Try Now
            </Link>
          </nav>
        </div>
      </div>

      {/* ── Tools scroll strip (desktop only) ── */}
      <div className="hidden md:block bg-white border-b border-gray-100 relative">
        {/* Left fade + arrow */}
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
            <div className="w-10 h-full bg-gradient-to-r from-white to-transparent" />
            <button
              onClick={() => scrollBy("left")}
              className="absolute left-1 bg-white border border-gray-200 rounded-full shadow-sm w-7 h-7 flex items-center justify-center text-gray-500 hover:text-rose-600 hover:border-rose-200 transition-all"
            >
              <ChevronLeft size={14} />
            </button>
          </div>
        )}

        {/* Scrollable tools row */}
        <div
          ref={scrollRef}
          className="flex items-center gap-1 px-4 lg:px-8 py-2 overflow-x-auto max-w-7xl mx-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {allTools.map((tool) => {
            const active = location.pathname === tool.to;
            return (
              <Link
                key={tool.to}
                to={tool.to}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap text-xs font-semibold transition-all duration-150 flex-shrink-0 ${
                  active
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-gray-600 hover:bg-rose-50 hover:text-rose-600 border border-gray-200 hover:border-rose-200"
                }`}
              >
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  active ? "bg-white/20" : tool.color
                }`}>
                  <tool.icon size={11} className={active ? "text-white" : tool.iconColor} />
                </div>
                {tool.label}
              </Link>
            );
          })}
        </div>

        {/* Right fade + arrow */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-end">
            <div className="w-10 h-full bg-gradient-to-l from-white to-transparent" />
            <button
              onClick={() => scrollBy("right")}
              className="absolute right-1 bg-white border border-gray-200 rounded-full shadow-sm w-7 h-7 flex items-center justify-center text-gray-500 hover:text-rose-600 hover:border-rose-200 transition-all"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>

      {/* ── Mobile Drawer ── */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-2xl md:hidden flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-rose-50 to-pink-50">
              <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-rose-700 flex items-center justify-center shadow-sm overflow-hidden">
                  <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-gray-900 text-[15px]">Love Calculator</span>
                  <span className="text-rose-500 text-[10px] font-semibold uppercase tracking-wider">Free Love Tools</span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-gray-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer links */}
            <div className="flex-1 overflow-y-auto py-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-5 pb-1 pt-2">Tools</p>
              {allTools.map((tool) => {
                const active = location.pathname === tool.to;
                return (
                  <Link
                    key={tool.to}
                    to={tool.to}
                    className={`flex items-center gap-3.5 px-5 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-rose-50 text-rose-600 border-r-2 border-rose-500"
                        : "text-gray-700 hover:bg-rose-50 hover:text-rose-600"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      active ? "bg-rose-500" : tool.color
                    }`}>
                      <tool.icon size={13} className={active ? "text-white" : tool.iconColor} />
                    </div>
                    {tool.label}
                  </Link>
                );
              })}

              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-5 pb-1 pt-4">More</p>
              {mobileOnlyLinks.map((link) => {
                const active = location.pathname === link.to || (link.to === "/blog" && location.pathname.startsWith("/blog"));
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
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      active ? "bg-rose-500" : "bg-gray-100"
                    }`}>
                      <link.icon size={13} className={active ? "text-white" : "text-gray-500"} />
                    </div>
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Drawer footer */}
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                <Heart size={13} fill="white" />
                Try Love Calculator
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
