import { useState } from "react";
import { Heart, Stars, ClipboardList, Sun, Sparkles, Baby, Send, Calendar, Feather, LayoutGrid, BookOpen, Info, ChevronDown, Search } from "lucide-react";

const tools = [
  { label: "Love Calculator", icon: Heart, color: "bg-rose-100", iconColor: "#f43f5e" },
  { label: "Zodiac Match", icon: Stars, color: "bg-violet-100", iconColor: "#8b5cf6" },
  { label: "Love Quiz", icon: ClipboardList, color: "bg-pink-100", iconColor: "#ec4899" },
  { label: "Daily Horoscope", icon: Sun, color: "bg-amber-100", iconColor: "#f59e0b" },
  { label: "Fortune Ball", icon: Sparkles, color: "bg-indigo-100", iconColor: "#6366f1" },
  { label: "Baby Names", icon: Baby, color: "bg-teal-100", iconColor: "#14b8a6" },
  { label: "Love Letters", icon: Send, color: "bg-sky-100", iconColor: "#0ea5e9" },
  { label: "Timeline", icon: Calendar, color: "bg-emerald-100", iconColor: "#10b981" },
  { label: "Love Poetry", icon: Feather, color: "bg-fuchsia-100", iconColor: "#d946ef" },
  { label: "Couple Names", icon: Heart, color: "bg-red-100", iconColor: "#ef4444" },
];

export function ModernMinimal() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Thin top accent line */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #f43f5e, #ec4899, #8b5cf6, #f43f5e)", backgroundSize: "200% 100%", animation: "shimmer 3s linear infinite" }} />

      <header style={{ background: "#fff", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", gap: 32 }}>

          {/* Logo */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "2px solid #fce7f3",
              boxShadow: "0 2px 8px rgba(244,63,94,0.15)"
            }}>
              <Heart size={18} fill="#f43f5e" color="#f43f5e" />
            </div>
            <div>
              <span style={{ fontWeight: 800, fontSize: 16, color: "#111", letterSpacing: -0.5 }}>Love</span>
              <span style={{ fontWeight: 800, fontSize: 16, color: "#f43f5e", letterSpacing: -0.5 }}>Calc</span>
            </div>
          </a>

          {/* Search bar */}
          <div style={{
            flex: 1, maxWidth: 340, position: "relative"
          }}>
            <Search size={15} color="#aaa" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
            <input
              placeholder="Search tools..."
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              style={{
                width: "100%", padding: "9px 14px 9px 38px",
                border: searchFocused ? "1.5px solid #f43f5e" : "1.5px solid #e5e7eb",
                borderRadius: 100, fontSize: 13, color: "#333",
                background: "#f9fafb", outline: "none",
                transition: "all 0.2s", boxSizing: "border-box"
              }}
            />
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2, marginLeft: "auto" }}>
            {/* Tools dropdown */}
            <div style={{ position: "relative" }}
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}>
              <button style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 16px", borderRadius: 100,
                background: "#f9fafb", border: "1.5px solid #e5e7eb",
                color: "#333", fontSize: 13, fontWeight: 600, cursor: "pointer"
              }}>
                <LayoutGrid size={13} color="#f43f5e" />
                Tools
                <ChevronDown size={12} color="#999" style={{ transform: toolsOpen ? "rotate(180deg)" : "none", transition: "0.2s" }} />
              </button>

              {toolsOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", right: 0,
                  width: 440, background: "#fff", borderRadius: 20,
                  border: "1px solid #f0f0f0",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.08)", overflow: "hidden"
                }}>
                  <div style={{ padding: "14px 18px 10px", borderBottom: "1px solid #f5f5f5" }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase", letterSpacing: 1.5 }}>All Tools</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, padding: 8 }}>
                    {tools.map(t => (
                      <div key={t.label} style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "10px 12px", borderRadius: 12, cursor: "pointer",
                        transition: "background 0.15s"
                      }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#fef2f2")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        <div style={{ width: 30, height: 30, borderRadius: 8, background: "#fef2f2", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <t.icon size={14} color={t.iconColor} />
                        </div>
                        <span style={{ fontSize: 12.5, fontWeight: 500, color: "#333" }}>{t.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {[{ icon: BookOpen, label: "Blog" }, { icon: Info, label: "About" }].map(item => (
              <button key={item.label} style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 14px", borderRadius: 100, background: "transparent",
                border: "none", color: "#666", fontSize: 13, fontWeight: 500, cursor: "pointer"
              }}>
                <item.icon size={13} />
                {item.label}
              </button>
            ))}

            <button style={{
              display: "flex", alignItems: "center", gap: 7,
              padding: "9px 20px", borderRadius: 100, marginLeft: 6,
              background: "#111", border: "none",
              color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer"
            }}>
              <Heart size={12} fill="white" color="white" />
              Get Started
            </button>
          </nav>
        </div>
      </header>

      <div style={{ textAlign: "center", padding: "60px 24px 0", color: "#666" }}>
        <div style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: "#f43f5e", marginBottom: 8 }}>Variant B</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#111", marginBottom: 8 }}>Modern Minimal</div>
        <div style={{ fontSize: 15, color: "#888" }}>Clean white with search bar and rainbow accent line</div>
      </div>
    </div>
  );
}
