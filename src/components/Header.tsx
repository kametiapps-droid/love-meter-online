import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu, X, ChevronDown,
  Heart, Stars, ClipboardList, Sun, BookOpen,
  Sparkles, Baby, Send, Calendar, Feather, Info, LayoutGrid,
} from "lucide-react";

const allTools = [
  { to: "/", label: "Love Calculator", desc: "Test your name compatibility", icon: Heart, color: "bg-rose-100", iconColor: "text-rose-500" },
  { to: "/zodiac-compatibility", label: "Zodiac Match", desc: "Check your star sign love", icon: Stars, color: "bg-violet-100", iconColor: "text-violet-500" },
  { to: "/love-quiz", label: "Love Quiz", desc: "Discover your love style", icon: ClipboardList, color: "bg-pink-100", iconColor: "text-pink-500" },
  { to: "/daily-horoscope", label: "Daily Horoscope", desc: "Today's love prediction", icon: Sun, color: "bg-amber-100", iconColor: "text-amber-500" },
  { to: "/love-fortune-ball", label: "Fortune Ball", desc: "Ask the magic ball", icon: Sparkles, color: "bg-indigo-100", iconColor: "text-indigo-500" },
  { to: "/couple-name-generator", label: "Couple Names", desc: "Create your ship name", icon: Heart, color: "bg-red-100", iconColor: "text-red-500" },
  { to: "/kids-name-generator", label: "Baby Names", desc: "Zodiac-inspired names", icon: Baby, color: "bg-teal-100", iconColor: "text-teal-500" },
  { to: "/love-letter-generator", label: "Love Letters", desc: "Write romantic letters", icon: Send, color: "bg-sky-100", iconColor: "text-sky-500" },
  { to: "/relationship-timeline", label: "Timeline", desc: "Your love milestones", icon: Calendar, color: "bg-emerald-100", iconColor: "text-emerald-500" },
  { to: "/love-poetry", label: "Love Poetry", desc: "Beautiful romantic poems", icon: Feather, color: "bg-fuchsia-100", iconColor: "text-fuchsia-500" },
];

const mobileOnlyLinks = [
  { to: "/blog", label: "Blog", desc: "Love & relationship articles", icon: BookOpen },
  { to: "/about", label: "About Us", desc: "Learn about us", icon: Info },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isToolActive = allTools.some(t => t.to === location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-rose-100"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 lg:px-8 max-w-7xl mx-auto">

        {/* Hamburger (mobile) */}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 ml-auto text-sm">

          {/* All Tools mega-menu */}
          <div
            className="relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 text-sm ${
                isToolActive
                  ? "bg-rose-600 text-white shadow-sm shadow-rose-200"
                  : "text-gray-700 hover:bg-rose-50 hover:text-rose-600 border border-gray-200 hover:border-rose-200"
              }`}
            >
              <LayoutGrid size={14} />
              All Tools
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {toolsOpen && (
              <div className="absolute left-0 top-full pt-2 z-50">
                <div className="w-[520px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

                  {/* Mega-menu header */}
                  <div className="px-5 py-3.5 flex items-center justify-between bg-gradient-to-r from-rose-50 to-pink-50 border-b border-rose-100">
                    <div>
                      <p className="text-gray-900 font-bold text-sm">All Love Tools</p>
                      <p className="text-gray-500 text-xs mt-0.5">10 free tools to explore your love life</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {["bg-rose-300", "bg-rose-400", "bg-rose-500"].map((c, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
                      ))}
                    </div>
                  </div>

                  {/* 2×5 tool grid */}
                  <div className="grid grid-cols-2 gap-1.5 p-3">
                    {allTools.map((tool) => {
                      const active = location.pathname === tool.to;
                      return (
                        <Link
                          key={tool.to}
                          to={tool.to}
                          className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all duration-150 group ${
                            active ? "bg-rose-50 ring-1 ring-rose-200" : "hover:bg-gray-50"
                          }`}
                          onClick={() => setToolsOpen(false)}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-150 ${
                            active ? "bg-rose-500" : `${tool.color} group-hover:scale-105`
                          }`}>
                            <tool.icon size={16} className={active ? "text-white" : tool.iconColor} />
                          </div>
                          <div className="min-w-0">
                            <p className={`text-xs font-semibold leading-tight ${
                              active ? "text-rose-600" : "text-gray-800 group-hover:text-rose-600"
                            } transition-colors`}>
                              {tool.label}
                            </p>
                            <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{tool.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Footer */}
                  <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/80 flex items-center justify-between">
                    <Link
                      to="/about"
                      className="text-xs text-gray-500 hover:text-rose-600 transition-colors font-medium flex items-center gap-1.5"
                      onClick={() => setToolsOpen(false)}
                    >
                      <Info size={11} /> About Us
                    </Link>
                    <span className="text-xs text-gray-200">|</span>
                    <Link
                      to="/blog"
                      className="text-xs font-semibold text-rose-500 hover:text-rose-700 transition-colors"
                      onClick={() => setToolsOpen(false)}
                    >
                      Read our Blog →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Blog link */}
          <Link
            to="/blog"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 text-sm ${
              location.pathname === "/blog" || location.pathname.startsWith("/blog/")
                ? "bg-rose-600 text-white shadow-sm shadow-rose-200"
                : "text-gray-700 hover:bg-rose-50 hover:text-rose-600"
            }`}
          >
            <BookOpen size={13} />
            Blog
          </Link>

          {/* About link */}
          <Link
            to="/about"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 text-sm ${
              location.pathname === "/about"
                ? "bg-rose-600 text-white shadow-sm shadow-rose-200"
                : "text-gray-700 hover:bg-rose-50 hover:text-rose-600"
            }`}
          >
            <Info size={13} />
            About
          </Link>

          {/* CTA */}
          <Link
            to="/"
            className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white text-sm font-semibold shadow-sm hover:shadow-rose-200 hover:from-rose-600 hover:to-rose-700 transition-all duration-200"
          >
            <Heart size={13} fill="white" />
            Try Now
          </Link>
        </nav>
      </div>

      {/* Mobile Drawer */}
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
