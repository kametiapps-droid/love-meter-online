const logoWebP = "/logo.webp";
const logoPng = "/logo-56.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Heart, Stars, ClipboardList, Sun, BookOpen,
  Sparkles, Baby, Send, Calendar, Feather, Info, ChevronLeft, ChevronRight,
  CalendarDays, Wand2,
} from "lucide-react";

const allTools = [
  { to: "/", label: "Love Calculator", icon: Heart },
  { to: "/zodiac-compatibility", label: "Zodiac Match", icon: Stars },
  { to: "/love-quiz", label: "Love Quiz", icon: ClipboardList },
  { to: "/daily-horoscope", label: "Daily Horoscope", icon: Sun },
  { to: "/love-fortune-ball", label: "Fortune Ball", icon: Sparkles },
  { to: "/couple-name-generator", label: "Couple Names", icon: Heart },
  { to: "/kids-name-generator", label: "Baby Names", icon: Baby },
  { to: "/love-letter-generator", label: "Love Letters", icon: Send },
  { to: "/relationship-timeline", label: "Timeline", icon: Calendar },
  { to: "/love-poetry", label: "Love Poetry", icon: Feather },
  { to: "/date-calculator", label: "Date Calculator", icon: CalendarDays },
  { to: "/stylish-name-generator", label: "Stylish Names", icon: Wand2 },
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

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      if (isOpen) closeMenu();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 8);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -240 : 240, behavior: "smooth" });
  };

  return (
    <header
      className="w-full sticky top-0 z-50"
      style={{
        background: scrolled
          ? "rgba(190, 18, 60, 0.82)"
          : "linear-gradient(135deg, #be123c 0%, #e11d48 50%, #f43f5e 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: scrolled
          ? "0 8px 32px rgba(190,18,60,0.35)"
          : "0 4px 24px rgba(190,18,60,0.2)",
        transition: "all 0.3s ease",
      }}
    >
      {/* ── Top bar ── */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
        <div className="flex items-center h-16 px-4 lg:px-8 max-w-7xl mx-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5" onClick={closeMenu}>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(10px)",
                border: "1.5px solid rgba(255,255,255,0.35)",
                boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
              }}
            >
              <picture>
                <source srcSet={logoWebP} type="image/webp" />
                <img src={logoPng} alt="Love Calculator Logo" className="w-7 h-7 object-contain" width="28" height="28" fetchpriority="high" />
              </picture>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-white text-[15px] tracking-tight" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.15)" }}>
                Love Calculator
              </span>
              <span className="text-[10px] font-semibold tracking-wider uppercase hidden sm:block" style={{ color: "rgba(255,255,255,0.7)" }}>
                Free Love Tools
              </span>
            </div>
          </Link>

          <div className="flex-1" />

          {/* Mobile right side */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"
              style={{ background: "#fff", color: "#be123c", boxShadow: "0 2px 10px rgba(0,0,0,0.12)" }}
              onClick={closeMenu}
            >
              <Heart size={11} fill="#be123c" color="#be123c" />
              Try Now
            </Link>
            <button
              className="p-2 rounded-lg transition-colors"
              style={{ color: "rgba(255,255,255,0.9)", background: "rgba(255,255,255,0.12)" }}
              onClick={() => setIsOpen(prev => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Desktop right nav */}
          <nav className="hidden md:flex items-center gap-2">
            {[
              { to: "/blog", label: "Blog", icon: BookOpen },
              { to: "/about", label: "About", icon: Info },
            ].map((item) => {
              const active = location.pathname === item.to || (item.to === "/blog" && location.pathname.startsWith("/blog/"));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200"
                  style={{
                    background: active ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    color: "#fff",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
                  onMouseLeave={e => (e.currentTarget.style.background = active ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)")}
                >
                  <item.icon size={13} />
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/"
              className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200"
              style={{ background: "#fff", color: "#be123c", boxShadow: "0 4px 15px rgba(0,0,0,0.15)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#fef2f2")}
              onMouseLeave={e => (e.currentTarget.style.background = "#fff")}
            >
              <Heart size={13} fill="#be123c" color="#be123c" />
              Try Now
            </Link>
          </nav>
        </div>
      </div>

      {/* ── Tools scroll strip (desktop only) ── */}
      <div className="hidden md:block relative">
        {canScrollLeft && (
          <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center">
            <div className="w-12 h-full" style={{ background: "linear-gradient(to right, rgba(190,18,60,0.9), transparent)" }} />
            <button
              onClick={() => scrollBy("left")}
              className="absolute left-2 w-7 h-7 flex items-center justify-center rounded-full transition-all"
              style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}
            >
              <ChevronLeft size={14} />
            </button>
          </div>
        )}
        <div
          ref={scrollRef}
          className="flex items-center gap-1.5 px-4 lg:px-8 py-2.5 overflow-x-auto max-w-7xl mx-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {allTools.map((tool) => {
            const active = location.pathname === tool.to;
            return (
              <Link
                key={tool.to}
                to={tool.to}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full whitespace-nowrap text-xs font-semibold transition-all duration-150 flex-shrink-0"
                style={{
                  background: active ? "#fff" : "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                  border: active ? "none" : "1px solid rgba(255,255,255,0.25)",
                  color: active ? "#be123c" : "rgba(255,255,255,0.92)",
                  boxShadow: active ? "0 2px 12px rgba(0,0,0,0.12)" : "none",
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
              >
                <tool.icon size={11} />
                {tool.label}
              </Link>
            );
          })}
        </div>
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-end">
            <div className="w-12 h-full" style={{ background: "linear-gradient(to left, rgba(190,18,60,0.9), transparent)" }} />
            <button
              onClick={() => scrollBy("right")}
              className="absolute right-2 w-7 h-7 flex items-center justify-center rounded-full transition-all"
              style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>

      {/* ── Mobile Drawer ── */}
      {isOpen && (
        <>
          {/* Backdrop — handles both click and touch */}
          <div
            className="fixed inset-0 z-40 md:hidden cursor-pointer"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
            onClick={closeMenu}
            onTouchEnd={(e) => { e.preventDefault(); closeMenu(); }}
            aria-hidden="true"
          />
          <nav
            className="fixed top-0 right-0 w-72 h-screen bg-white z-50 shadow-2xl md:hidden flex flex-col"
            style={{ overflowY: "auto" }}
          >
            {/* Drawer header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b border-rose-100 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #be123c 0%, #f43f5e 100%)" }}
            >
              <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.2)", border: "1.5px solid rgba(255,255,255,0.35)" }}
                >
                  <picture>
                    <source srcSet={logoWebP} type="image/webp" />
                    <img src={logoPng} alt="Logo" className="w-7 h-7 object-contain" width="28" height="28" />
                  </picture>
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-bold text-white text-[15px]">Love Calculator</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Free Love Tools
                  </span>
                </div>
              </Link>
              <button
                onClick={closeMenu}
                className="p-1.5 rounded-lg transition-colors"
                style={{ color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.15)" }}
                aria-label="Close menu"
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
                        ? "bg-rose-50 text-rose-600 border-l-2 border-rose-500"
                        : "text-gray-700 hover:bg-rose-50 hover:text-rose-600"
                    }`}
                    onClick={closeMenu}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: active ? "#f43f5e" : "#fef2f2" }}
                    >
                      <tool.icon size={13} color={active ? "#fff" : "#f43f5e"} />
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
                        ? "bg-rose-50 text-rose-600 border-l-2 border-rose-500"
                        : "text-gray-700 hover:bg-rose-50 hover:text-rose-600"
                    }`}
                    onClick={closeMenu}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: active ? "#f43f5e" : "#f3f4f6" }}
                    >
                      <link.icon size={13} color={active ? "#fff" : "#6b7280"} />
                    </div>
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Drawer footer */}
            <div className="px-5 py-4 border-t border-gray-100 bg-gray-50 flex-shrink-0">
              <Link
                to="/"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-sm font-bold text-white shadow-sm"
                style={{ background: "linear-gradient(135deg, #be123c, #f43f5e)" }}
                onClick={closeMenu}
              >
                <Heart size={13} fill="white" color="white" />
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
