import { useState } from "react";
import { Heart, Stars, ClipboardList, Sun, Sparkles, Baby, Send, Calendar, Feather, LayoutGrid, BookOpen, Info, ChevronDown, Menu, X } from "lucide-react";

const tools = [
  { label: "Love Calculator", icon: Heart, color: "#ff6b9d" },
  { label: "Zodiac Match", icon: Stars, color: "#c084fc" },
  { label: "Love Quiz", icon: ClipboardList, color: "#f472b6" },
  { label: "Daily Horoscope", icon: Sun, color: "#fbbf24" },
  { label: "Fortune Ball", icon: Sparkles, color: "#818cf8" },
  { label: "Baby Names", icon: Baby, color: "#2dd4bf" },
  { label: "Love Letters", icon: Send, color: "#38bdf8" },
  { label: "Timeline", icon: Calendar, color: "#34d399" },
  { label: "Love Poetry", icon: Feather, color: "#e879f9" },
  { label: "Couple Names", icon: Heart, color: "#f87171" },
];

export function BoldGradient() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div style={{ background: "#f5f0ff", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <header style={{
        background: "linear-gradient(135deg, #7c3aed 0%, #be185d 60%, #e11d48 100%)",
        position: "sticky", top: 0, zIndex: 50,
      }}>
        {/* Glassmorphism inner bar */}
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 14,
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1.5px solid rgba(255,255,255,0.3)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
            }}>
              <Heart size={22} fill="white" color="white" />
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 900, fontSize: 18, letterSpacing: -0.8, lineHeight: 1, textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>Love Calculator</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", marginTop: 2 }}>Free Love Tools</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {/* Tools dropdown */}
            <div style={{ position: "relative" }}
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}>
              <button style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 20px", borderRadius: 100,
                background: toolsOpen ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                border: "1.5px solid rgba(255,255,255,0.3)",
                color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer",
                transition: "all 0.2s", letterSpacing: 0.2
              }}>
                <LayoutGrid size={15} />
                All Tools
                <ChevronDown size={13} style={{ transform: toolsOpen ? "rotate(180deg)" : "none", transition: "0.2s" }} />
              </button>

              {toolsOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 10px)", left: "50%",
                  transform: "translateX(-50%)",
                  width: 500, background: "rgba(255,255,255,0.97)",
                  backdropFilter: "blur(20px)",
                  borderRadius: 20, border: "1.5px solid rgba(255,255,255,0.8)",
                  boxShadow: "0 25px 60px rgba(124,58,237,0.2)", overflow: "hidden"
                }}>
                  <div style={{
                    padding: "16px 20px 12px",
                    background: "linear-gradient(135deg, #7c3aed 0%, #be185d 100%)",
                    display: "flex", alignItems: "center", justifyContent: "space-between"
                  }}>
                    <div>
                      <div style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>All Love Tools</div>
                      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, marginTop: 2 }}>10 free tools for every couple</div>
                    </div>
                    <div style={{ display: "flex", gap: 5 }}>
                      {["rgba(255,255,255,0.3)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.8)"].map((c, i) => (
                        <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, padding: 10 }}>
                    {tools.map(t => (
                      <div key={t.label} style={{
                        display: "flex", alignItems: "center", gap: 11,
                        padding: "11px 14px", borderRadius: 12, cursor: "pointer",
                        transition: "background 0.15s"
                      }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#faf5ff")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        <div style={{
                          width: 34, height: 34, borderRadius: 10,
                          background: `${t.color}18`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0
                        }}>
                          <t.icon size={16} color={t.color} />
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#333" }}>{t.label}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "12px 20px", borderTop: "1px solid #f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 12, color: "#999" }}>About Us</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", cursor: "pointer" }}>Read our Blog →</span>
                  </div>
                </div>
              )}
            </div>

            {[{ icon: BookOpen, label: "Blog" }, { icon: Info, label: "About" }].map(item => (
              <button key={item.label} style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "10px 16px", borderRadius: 100,
                background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)",
                border: "1.5px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.9)", fontSize: 14, fontWeight: 600, cursor: "pointer",
                transition: "all 0.2s"
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              >
                <item.icon size={14} />
                {item.label}
              </button>
            ))}

            <button style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 22px", borderRadius: 100, marginLeft: 6,
              background: "#fff", border: "none",
              color: "#7c3aed", fontSize: 14, fontWeight: 800, cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              transition: "all 0.2s"
            }}>
              <Heart size={13} fill="#e11d48" color="#e11d48" />
              Try Now
            </button>
          </nav>
        </div>
      </header>

      <div style={{ textAlign: "center", padding: "60px 24px 0" }}>
        <div style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: "#7c3aed", marginBottom: 8 }}>Variant C</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#1a0035", marginBottom: 8 }}>Bold Gradient</div>
        <div style={{ fontSize: 15, color: "#888" }}>Purple-to-rose gradient with glassmorphism nav</div>
      </div>
    </div>
  );
}
