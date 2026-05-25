import { useState } from "react";
import { Heart, Stars, ClipboardList, Sun, Sparkles, Baby, Send, Calendar, Feather, LayoutGrid, BookOpen, Info, ChevronDown, Menu, X } from "lucide-react";

const tools = [
  { label: "Love Calculator", icon: Heart, color: "#f43f5e" },
  { label: "Zodiac Match", icon: Stars, color: "#8b5cf6" },
  { label: "Love Quiz", icon: ClipboardList, color: "#ec4899" },
  { label: "Daily Horoscope", icon: Sun, color: "#f59e0b" },
  { label: "Fortune Ball", icon: Sparkles, color: "#6366f1" },
  { label: "Baby Names", icon: Baby, color: "#14b8a6" },
  { label: "Love Letters", icon: Send, color: "#0ea5e9" },
  { label: "Timeline", icon: Calendar, color: "#10b981" },
  { label: "Love Poetry", icon: Feather, color: "#d946ef" },
  { label: "Couple Names", icon: Heart, color: "#ef4444" },
];

export function DarkPremium() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div style={{ background: "#f8f4f0", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <header style={{
        background: "linear-gradient(135deg, #1a0a0e 0%, #2d1015 50%, #1a0a0e 100%)",
        borderBottom: "1px solid rgba(244,63,94,0.2)",
        position: "sticky", top: 0, zIndex: 50,
        boxShadow: "0 4px 30px rgba(0,0,0,0.5)"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 12,
              background: "linear-gradient(135deg, #f43f5e, #be123c)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 20px rgba(244,63,94,0.4)"
            }}>
              <Heart size={20} fill="white" color="white" />
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 17, letterSpacing: -0.5, lineHeight: 1 }}>Love Calculator</div>
              <div style={{ color: "#f43f5e", fontSize: 10, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginTop: 2 }}>Free Love Tools</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>

            {/* All Tools */}
            <div style={{ position: "relative" }}
              onMouseEnter={() => setToolsOpen(true)}
              onMouseLeave={() => setToolsOpen(false)}>
              <button style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 18px", borderRadius: 8,
                background: toolsOpen ? "rgba(244,63,94,0.15)" : "transparent",
                border: "1px solid rgba(244,63,94,0.3)",
                color: "#fff", fontSize: 14, fontWeight: 600, cursor: "pointer",
                transition: "all 0.2s"
              }}>
                <LayoutGrid size={15} color="#f43f5e" />
                All Tools
                <ChevronDown size={13} color="#f43f5e" style={{ transform: toolsOpen ? "rotate(180deg)" : "none", transition: "0.2s" }} />
              </button>

              {toolsOpen && (
                <div style={{
                  position: "absolute", top: "100%", left: 0, marginTop: 8,
                  width: 480, background: "#1a0a0e", borderRadius: 16,
                  border: "1px solid rgba(244,63,94,0.25)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.8)", overflow: "hidden"
                }}>
                  <div style={{ padding: "16px 20px", borderBottom: "1px solid rgba(244,63,94,0.15)", display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#f43f5e", boxShadow: "0 0 8px #f43f5e" }} />
                    <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>All Love Tools</span>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginLeft: "auto" }}>10 free tools</span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, padding: 8 }}>
                    {tools.map((t) => (
                      <div key={t.label} style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "12px 14px", borderRadius: 10, cursor: "pointer",
                        transition: "background 0.15s"
                      }}
                        onMouseEnter={e => (e.currentTarget.style.background = "rgba(244,63,94,0.1)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                      >
                        <div style={{ width: 32, height: 32, borderRadius: 8, background: `${t.color}20`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <t.icon size={15} color={t.color} />
                        </div>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, fontWeight: 500 }}>{t.label}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ padding: "12px 20px", borderTop: "1px solid rgba(244,63,94,0.15)", display: "flex", justifyContent: "flex-end" }}>
                    <span style={{ color: "#f43f5e", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Read our Blog →</span>
                  </div>
                </div>
              )}
            </div>

            {[{ icon: BookOpen, label: "Blog" }, { icon: Info, label: "About" }].map(item => (
              <button key={item.label} style={{
                display: "flex", alignItems: "center", gap: 7,
                padding: "10px 16px", borderRadius: 8, background: "transparent",
                border: "none", color: "rgba(255,255,255,0.7)", fontSize: 14,
                fontWeight: 500, cursor: "pointer", transition: "color 0.2s"
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                <item.icon size={14} />
                {item.label}
              </button>
            ))}

            <button style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 22px", borderRadius: 8, marginLeft: 8,
              background: "linear-gradient(135deg, #f43f5e, #be123c)",
              border: "none", color: "#fff", fontSize: 14,
              fontWeight: 700, cursor: "pointer",
              boxShadow: "0 4px 15px rgba(244,63,94,0.35)",
              transition: "all 0.2s"
            }}>
              <Heart size={13} fill="white" color="white" />
              Try Now
            </button>
          </nav>
        </div>
      </header>

      {/* Preview label */}
      <div style={{ textAlign: "center", padding: "60px 24px 0", color: "#666" }}>
        <div style={{ fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: 2, color: "#f43f5e", marginBottom: 8 }}>Variant A</div>
        <div style={{ fontSize: 28, fontWeight: 800, color: "#1a0a0e", marginBottom: 8 }}>Dark Premium</div>
        <div style={{ fontSize: 15, color: "#888" }}>Luxury dark background with glowing rose accents</div>
      </div>
    </div>
  );
}
