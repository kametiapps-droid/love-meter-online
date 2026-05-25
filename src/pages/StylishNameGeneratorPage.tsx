import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Wand2, Copy, Check, Heart } from "lucide-react";
import { toast } from "sonner";

const convertFont = (text: string, ucBase: number, lcBase: number, dgBase = 0): string =>
  text.split("").map(ch => {
    const c = ch.charCodeAt(0);
    if (c >= 65 && c <= 90) return String.fromCodePoint(ucBase + c - 65);
    if (c >= 97 && c <= 122) return String.fromCodePoint(lcBase + c - 97);
    if (dgBase && c >= 48 && c <= 57) return String.fromCodePoint(dgBase + c - 48);
    return ch;
  }).join("");

const SMALL_CAPS: Record<string, string> = {
  a:"ᴀ",b:"ʙ",c:"ᴄ",d:"ᴅ",e:"ᴇ",f:"ғ",g:"ɢ",h:"ʜ",i:"ɪ",j:"ᴊ",k:"ᴋ",l:"ʟ",m:"ᴍ",
  n:"ɴ",o:"ᴏ",p:"ᴘ",q:"Q",r:"ʀ",s:"ꜱ",t:"ᴛ",u:"ᴜ",v:"ᴠ",w:"ᴡ",x:"x",y:"ʏ",z:"ᴢ",
};
const CIRCLED: Record<string, string> = {
  a:"Ⓐ",b:"Ⓑ",c:"Ⓒ",d:"Ⓓ",e:"Ⓔ",f:"Ⓕ",g:"Ⓖ",h:"Ⓗ",i:"Ⓘ",j:"Ⓙ",k:"Ⓚ",l:"Ⓛ",m:"Ⓜ",
  n:"Ⓝ",o:"Ⓞ",p:"Ⓟ",q:"Ⓠ",r:"Ⓡ",s:"Ⓢ",t:"Ⓣ",u:"Ⓤ",v:"Ⓥ",w:"Ⓦ",x:"Ⓧ",y:"Ⓨ",z:"Ⓩ",
  A:"Ⓐ",B:"Ⓑ",C:"Ⓒ",D:"Ⓓ",E:"Ⓔ",F:"Ⓕ",G:"Ⓖ",H:"Ⓗ",I:"Ⓘ",J:"Ⓙ",K:"Ⓚ",L:"Ⓛ",M:"Ⓜ",
  N:"Ⓝ",O:"Ⓞ",P:"Ⓟ",Q:"Ⓠ",R:"Ⓡ",S:"Ⓢ",T:"Ⓣ",U:"Ⓤ",V:"Ⓥ",W:"Ⓦ",X:"Ⓧ",Y:"Ⓨ",Z:"Ⓩ",
};
const SQUARED: Record<string, string> = {
  a:"🅐",b:"🅑",c:"🅒",d:"🅓",e:"🅔",f:"🅕",g:"🅖",h:"🅗",i:"🅘",j:"🅙",k:"🅚",l:"🅛",m:"🅜",
  n:"🅝",o:"🅞",p:"🅟",q:"🅠",r:"🅡",s:"🅢",t:"🅣",u:"🅤",v:"🅥",w:"🅦",x:"🅧",y:"🅨",z:"🅩",
  A:"🅐",B:"🅑",C:"🅒",D:"🅓",E:"🅔",F:"🅕",G:"🅖",H:"🅗",I:"🅘",J:"🅙",K:"🅚",L:"🅛",M:"🅜",
  N:"🅝",O:"🅞",P:"🅟",Q:"🅠",R:"🅡",S:"🅢",T:"🅣",U:"🅤",V:"🅥",W:"🅦",X:"🅧",Y:"🅨",Z:"🅩",
};
const BUBBLE: Record<string, string> = {
  a:"ⓐ",b:"ⓑ",c:"ⓒ",d:"ⓓ",e:"ⓔ",f:"ⓕ",g:"ⓖ",h:"ⓗ",i:"ⓘ",j:"ⓙ",k:"ⓚ",l:"ⓛ",m:"ⓜ",
  n:"ⓝ",o:"ⓞ",p:"ⓟ",q:"ⓠ",r:"ⓡ",s:"ⓢ",t:"ⓣ",u:"ⓤ",v:"ⓥ",w:"ⓦ",x:"ⓧ",y:"ⓨ",z:"ⓩ",
  A:"Ⓐ",B:"Ⓑ",C:"Ⓒ",D:"Ⓓ",E:"Ⓔ",F:"Ⓕ",G:"Ⓖ",H:"Ⓗ",I:"Ⓘ",J:"Ⓙ",K:"Ⓚ",L:"Ⓛ",M:"Ⓜ",
  N:"Ⓝ",O:"Ⓞ",P:"Ⓟ",Q:"Ⓠ",R:"Ⓡ",S:"Ⓢ",T:"Ⓣ",U:"Ⓤ",V:"Ⓥ",W:"Ⓦ",X:"Ⓧ",Y:"Ⓨ",Z:"Ⓩ",
};

const mapChars = (text: string, map: Record<string, string>) =>
  text.split("").map(c => map[c] ?? c).join("");

const generateStyles = (name: string): { label: string; value: string; color: string }[] => {
  if (!name.trim()) return [];
  const n = name.trim();
  return [
    { label: "Bold", value: convertFont(n, 0x1D400, 0x1D41A, 0x1D7CE), color: "#be123c" },
    { label: "Italic", value: convertFont(n, 0x1D434, 0x1D44E), color: "#7c3aed" },
    { label: "Bold Italic", value: convertFont(n, 0x1D468, 0x1D482), color: "#d97706" },
    { label: "Script", value: convertFont(n, 0x1D49C, 0x1D4B6), color: "#059669" },
    { label: "Bold Script", value: convertFont(n, 0x1D4D0, 0x1D4EA), color: "#e11d48" },
    { label: "Fraktur", value: convertFont(n, 0x1D504, 0x1D51E), color: "#6d28d9" },
    { label: "Double Struck", value: convertFont(n, 0x1D538, 0x1D552), color: "#0891b2" },
    { label: "Sans-Serif", value: convertFont(n, 0x1D5A0, 0x1D5BA), color: "#374151" },
    { label: "Sans Bold", value: convertFont(n, 0x1D5D4, 0x1D5EE), color: "#dc2626" },
    { label: "Sans Italic", value: convertFont(n, 0x1D608, 0x1D622), color: "#9333ea" },
    { label: "Monospace", value: convertFont(n, 0x1D670, 0x1D68A), color: "#065f46" },
    { label: "Small Caps", value: mapChars(n.toLowerCase(), SMALL_CAPS), color: "#b45309" },
    { label: "Bubble", value: mapChars(n, BUBBLE), color: "#0284c7" },
    { label: "Circled", value: mapChars(n.toUpperCase(), CIRCLED), color: "#7c3aed" },
    { label: "Squared", value: mapChars(n.toUpperCase(), SQUARED), color: "#991b1b" },
    { label: "Stars ✦", value: n.split("").join("✦"), color: "#ca8a04" },
    { label: "Hearts ❤", value: n.split("").join("❤"), color: "#be123c" },
    { label: "Dots ·", value: n.split("").join(" · "), color: "#64748b" },
    { label: "Sparkle ✨", value: `✨${n}✨`, color: "#d97706" },
    { label: "Love 💕", value: `💕 ${n} 💕`, color: "#db2777" },
    { label: "Royal 👑", value: `👑 ${n} 👑`, color: "#b45309" },
    { label: "Floral 🌸", value: `🌸 ${n} 🌸`, color: "#9d174d" },
    { label: "Fire 🔥", value: `🔥${n}🔥`, color: "#ea580c" },
  ];
};

const StylishNameGeneratorPage = () => {
  const [name, setName] = useState("");
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const styles = generateStyles(name);

  const copyStyle = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      toast.success("Copied! Paste anywhere 💕");
      setTimeout(() => setCopiedIdx(null), 2000);
    } catch {
      toast.error("Could not copy");
    }
  };

  return (
    <>
      <SEO
        title="Stylish Name Generator – Unicode Fancy Text Styles"
        description="Generate beautiful stylish name styles in 20+ Unicode fonts. Bold, italic, script, fraktur, double-struck, and more. Perfect for Instagram, WhatsApp bios!"
        path="/stylish-name-generator"
        keywords="stylish name generator, fancy text, unicode fonts, name styles, instagram bio, whatsapp name"
        dateModified="2026-05-25"
        faqSchema={[{ question: "Can I use these names on WhatsApp and Instagram?", answer: "Yes! All styles use Unicode characters that work in WhatsApp, Instagram, Facebook, Twitter bios and posts, and most messaging apps." }]}
      />
      <div className="min-h-screen flex flex-col romantic-gradient-bg">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="max-w-2xl mx-auto">

            {/* Hero */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Wand2 className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Stylish Name Generator
              </h1>
              <p className="text-muted-foreground text-base max-w-md mx-auto">
                Enter any name and get 20+ beautiful Unicode font styles for WhatsApp, Instagram, bios & more ✨
              </p>
            </div>

            {/* Input */}
            <div className="card-romantic rounded-2xl p-6 md:p-8 backdrop-blur-sm mb-6">
              <label className="block text-sm font-semibold text-foreground mb-3">✍️ Enter your name</label>
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="e.g. Sana, Ali, Love..."
                  maxLength={30}
                  className="w-full h-14 px-5 pr-14 text-lg rounded-xl border-2 border-border focus:border-primary bg-background/50 text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors"
                />
                <Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40" />
              </div>
              {name && (
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  {styles.length} styles generated for "<strong>{name}</strong>" — tap any to copy 👇
                </p>
              )}
            </div>

            {/* Style cards */}
            {styles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {styles.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => copyStyle(s.value, i)}
                    className="group relative text-left rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: `1.5px solid ${copiedIdx === i ? s.color : "#f0f0f0"}`,
                      boxShadow: copiedIdx === i ? `0 4px 16px ${s.color}33` : "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: s.color }}>
                          {s.label}
                        </span>
                        <p className="text-lg font-medium text-gray-800 mt-0.5 break-all leading-snug">
                          {s.value}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-1"
                        style={{ background: copiedIdx === i ? s.color : "#f3f4f6" }}>
                        {copiedIdx === i
                          ? <Check size={14} color="#fff" />
                          : <Copy size={14} color={s.color} />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {!name && (
              <div className="text-center py-16">
                <Wand2 className="w-12 h-12 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Type a name above to see all stylish versions ✨</p>
              </div>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default StylishNameGeneratorPage;
