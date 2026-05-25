import { useState, useEffect, useRef } from "react";
import { Heart, Sparkles, Share2, RotateCcw, Download, Copy, MessageCircle, Twitter, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { buildLoveCalculatorShareText, copyTextSafely } from "@/lib/loveCalculatorShare";

const cleanName = (value: string) => value.replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, " ").trim();

const getNameError = (value: string, label: string) => {
  const cleaned = cleanName(value);
  const lettersOnly = cleaned.replace(/\s/g, "");
  if (!cleaned) return `Please enter ${label}.`;
  if (lettersOnly.length < 2) return `${label} must be a real name, not a single letter.`;
  if (!/[aeiouy]/i.test(lettersOnly)) return `${label} must look like a real English name.`;
  if (/(.)\1{2,}/i.test(lettersOnly)) return `${label} must look like a real name.`;
  return "";
};

const LOVE_FACTS = [
  "Studies show couples who laugh together stay together longer.",
  "Holding hands with someone you love reduces stress hormones by up to 50%.",
  "The brain in love looks similar to the brain on cocaine — love is literally addictive.",
  "People tend to fall in love within the first 4 minutes of meeting someone.",
  "Couples who share new experiences together feel stronger romantic bonds.",
  "Looking into each other's eyes for 4 minutes can make strangers feel deeply connected.",
  "Love activates the same neural pathways as pain relief — partners truly ease suffering.",
  "Butterflies in your stomach are real — adrenaline causes that physical sensation.",
];

const PERSONALITY_TRAITS: Record<string, string[]> = {
  a: ["Ambitious", "Adventurous", "Assertive"],
  b: ["Balanced", "Brilliant", "Bold"],
  c: ["Caring", "Creative", "Charismatic"],
  d: ["Devoted", "Dependable", "Daring"],
  e: ["Empathetic", "Energetic", "Expressive"],
  f: ["Faithful", "Friendly", "Focused"],
  g: ["Generous", "Genuine", "Graceful"],
  h: ["Honest", "Harmonious", "Hopeful"],
  i: ["Intuitive", "Imaginative", "Inspiring"],
  j: ["Joyful", "Just", "Jubilant"],
  k: ["Kind", "Keen", "Knowledgeable"],
  l: ["Loving", "Loyal", "Lighthearted"],
  m: ["Magnetic", "Mindful", "Motivated"],
  n: ["Nurturing", "Noble", "Natural"],
  o: ["Open-hearted", "Optimistic", "Original"],
  p: ["Passionate", "Patient", "Playful"],
  q: ["Quirky", "Quick-witted", "Quiet strength"],
  r: ["Romantic", "Resilient", "Reliable"],
  s: ["Sensitive", "Strong", "Sincere"],
  t: ["Tender", "Thoughtful", "Trustworthy"],
  u: ["Understanding", "Unique", "Uplifting"],
  v: ["Vibrant", "Visionary", "Valiant"],
  w: ["Warm", "Wise", "Witty"],
  x: ["Xtraordinary", "Xciting"],
  y: ["Youthful", "Yearning"],
  z: ["Zealous", "Zestful"],
};

const getTraits = (name: string): string[] => {
  const letters = name.toLowerCase().replace(/\s/g, "").split("");
  const seen = new Set<string>();
  const traits: string[] = [];
  for (const l of letters) {
    if (traits.length >= 3) break;
    const pool = PERSONALITY_TRAITS[l];
    if (pool) {
      for (const t of pool) {
        if (!seen.has(t)) { seen.add(t); traits.push(t); break; }
      }
    }
  }
  while (traits.length < 3) traits.push("Wonderful");
  return traits.slice(0, 3);
};

const getShipName = (n1: string, n2: string): string => {
  const a = n1.replace(/\s.*/g, "").trim();
  const b = n2.replace(/\s.*/g, "").trim();
  const half1 = a.slice(0, Math.ceil(a.length / 2));
  const half2 = b.slice(Math.floor(b.length / 2));
  return (half1 + half2).charAt(0).toUpperCase() + (half1 + half2).slice(1).toLowerCase();
};

const getDimensions = (name1: string, name2: string, overall: number) => {
  const seed = (name1 + name2).toLowerCase().split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const vary = (base: number, offset: number) => Math.min(99, Math.max(40, base + ((seed * offset) % 15) - 7));
  return [
    { label: "Emotional", icon: "💞", value: vary(overall, 3), desc: "Emotional understanding & empathy" },
    { label: "Passion", icon: "🔥", value: vary(overall, 7), desc: "Romantic chemistry & attraction" },
    { label: "Intellectual", icon: "🧠", value: vary(overall, 11), desc: "Mental connection & shared ideas" },
    { label: "Trust", icon: "🤝", value: vary(overall, 13), desc: "Reliability & long-term stability" },
  ];
};

const getCompatibilityMessage = (pct: number) => {
  if (pct >= 90) return { emoji: "💕", message: "Perfect Match! Your connection is rare and beautiful.", rank: "💎 Diamond Bond" };
  if (pct >= 80) return { emoji: "💖", message: "Amazing Chemistry! You bring out the best in each other.", rank: "🥇 Gold Bond" };
  if (pct >= 70) return { emoji: "💗", message: "Strong Connection! You have real potential together.", rank: "🥈 Silver Bond" };
  if (pct >= 60) return { emoji: "💓", message: "Sweet Spark! Love is definitely in the air between you.", rank: "🥉 Bronze Bond" };
  return { emoji: "💝", message: "Potential Grows! Every great love starts with a small spark.", rank: "✨ Spark Bond" };
};

const Confetti = ({ active }: { active: boolean }) => {
  if (!active) return null;
  const pieces = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    color: ["#f43f5e", "#ec4899", "#fb7185", "#fda4af", "#ff6b9d", "#c084fc", "#fbbf24"][i % 7],
    left: `${5 + (i * 3.5) % 90}%`,
    delay: `${(i * 0.07) % 1}s`,
    duration: `${0.8 + (i % 5) * 0.15}s`,
  }));
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map(p => (
        <div
          key={p.id}
          className="absolute top-0 w-2 h-2 rounded-sm opacity-0"
          style={{
            left: p.left,
            background: p.color,
            animation: `confettiFall ${p.duration} ${p.delay} ease-in forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const AnimatedBar = ({ value, color }: { value: number; color: string }) => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(value), 120);
    return () => clearTimeout(t);
  }, [value]);
  return (
    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%`, background: color }}
      />
    </div>
  );
};

const HeartMeter = ({ value, show }: { value: number; show: boolean }) => {
  const [animated, setAnimated] = useState(0);
  useEffect(() => {
    if (!show) { setAnimated(0); return; }
    let start = 0;
    const step = () => {
      start += 2;
      if (start <= value) { setAnimated(start); requestAnimationFrame(step); }
      else setAnimated(value);
    };
    requestAnimationFrame(step);
  }, [value, show]);

  const r = 54;
  const circ = 2 * Math.PI * r;
  const offset = circ - (animated / 100) * circ;
  const color = animated >= 80 ? "#f43f5e" : animated >= 60 ? "#fb7185" : "#fda4af";

  return (
    <div className="relative flex items-center justify-center mx-auto" style={{ width: 140, height: 140 }}>
      <svg width="140" height="140" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="70" cy="70" r={r} fill="none" stroke="#fce7f3" strokeWidth="10" />
        <circle
          cx="70" cy="70" r={r} fill="none"
          stroke={color} strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.03s linear, stroke 0.5s" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold" style={{ color }}>{animated}%</span>
        <Heart size={14} fill={color} color={color} className="mt-0.5" />
      </div>
    </div>
  );
};

const LoveCalculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [showSharePanel, setShowSharePanel] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const calculateLove = () => {
    const e1 = getNameError(name1, "your name");
    const e2 = getNameError(name2, "partner's name");
    if (e1 || e2) { toast.error(e1 || e2); return; }

    const c1 = cleanName(name1);
    const c2 = cleanName(name2);
    setName1(c1); setName2(c2);
    setIsCalculating(true);
    setShowResult(false);
    setConfetti(false);

    const combined = (c1 + c2).toLowerCase().replace(/\s/g, "");
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      hash = ((hash << 5) - hash) + combined.charCodeAt(i);
      hash = hash & hash;
    }
    const percentage = Math.abs(hash % 51) + 50;
    const fi = Math.abs(hash) % LOVE_FACTS.length;

    setTimeout(() => {
      setResult(percentage);
      setFactIndex(fi);
      setIsCalculating(false);
      setTimeout(() => {
        setShowResult(true);
        if (percentage >= 80) { setConfetti(true); setTimeout(() => setConfetti(false), 3500); }
      }, 100);
    }, 1500);
  };

  const reset = () => { setName1(""); setName2(""); setResult(null); setShowResult(false); setConfetti(false); setShowSharePanel(false); };

  const getShareText = () => {
    if (result === null) return "";
    const { message, rank } = getCompatibilityMessage(result);
    return buildLoveCalculatorShareText({ message, name1, name2, rank, result });
  };

  const shareWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(getShareText())}`, "_blank");
  };
  const shareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareText())}`, "_blank");
  };
  const shareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://lovecalculator.space")}&quote=${encodeURIComponent(getShareText())}`, "_blank");
  };
  const shareTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent("https://lovecalculator.space")}&text=${encodeURIComponent(getShareText())}`, "_blank");
  };
  const copyShareText = async () => {
    const copied = await copyTextSafely(getShareText());
    toast.success(copied ? "Copied to clipboard! 📋" : "Could not copy.");
  };

  const shareResult = async () => {
    if (result === null) return;
    const { message, rank } = getCompatibilityMessage(result);
    const shareText = buildLoveCalculatorShareText({ message, name1, name2, rank, result });
    setIsSharing(true);
    try {
      if (navigator.share) { await navigator.share({ title: "My Love Bond Result 💕", text: shareText }); toast.success("Shared!"); return; }
      const copied = await copyTextSafely(shareText);
      toast.success(copied ? "Copied to clipboard!" : "Sharing not supported.");
    } catch {
      const copied = await copyTextSafely(shareText);
      if (copied) toast.success("Copied to clipboard!");
    } finally { setIsSharing(false); }
  };

  const downloadCard = () => {
    if (!result) return;
    const { rank, message } = getCompatibilityMessage(result);
    const ship = getShipName(name1, name2);
    const dimData = getDimensions(name1, name2, result);
    const n1 = name1.split(" ")[0];
    const n2 = name2.split(" ")[0];

    const W = 1080, H = 1920;
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const c = canvas.getContext("2d")!;

    /* helpers */
    const drawHeartPath = (cx: number, cy: number, s: number) => {
      c.beginPath();
      c.moveTo(cx, cy + s * 0.35);
      c.bezierCurveTo(cx, cy, cx - s, cy, cx - s, cy - s * 0.42);
      c.bezierCurveTo(cx - s, cy - s * 0.92, cx, cy - s * 0.92, cx, cy - s * 0.42);
      c.bezierCurveTo(cx, cy - s * 0.92, cx + s, cy - s * 0.92, cx + s, cy - s * 0.42);
      c.bezierCurveTo(cx + s, cy, cx, cy, cx, cy + s * 0.35);
      c.closePath();
    };

    const wrapText = (text: string, maxW: number): string[] => {
      const words = text.split(" ");
      const lines: string[] = [];
      let line = "";
      for (const w of words) {
        const test = line ? line + " " + w : w;
        if (c.measureText(test).width > maxW) { lines.push(line); line = w; }
        else line = test;
      }
      if (line) lines.push(line);
      return lines;
    };

    /* ── BACKGROUND ── deep layered gradient */
    const bg = c.createLinearGradient(0, 0, W * 0.6, H);
    bg.addColorStop(0, "#1a0010");
    bg.addColorStop(0.3, "#6b0026");
    bg.addColorStop(0.65, "#c4173e");
    bg.addColorStop(1, "#ff4d82");
    c.fillStyle = bg;
    c.fillRect(0, 0, W, H);

    /* pink diagonal overlay for depth */
    const overlay = c.createLinearGradient(W, 0, 0, H);
    overlay.addColorStop(0, "rgba(255,100,140,0.18)");
    overlay.addColorStop(0.5, "rgba(0,0,0,0)");
    overlay.addColorStop(1, "rgba(80,0,30,0.25)");
    c.fillStyle = overlay;
    c.fillRect(0, 0, W, H);

    /* ── big blurred bokeh circles ── */
    const bokeh = [
      { x: 180, y: 200, r: 280, a: 0.08 },
      { x: 900, y: 350, r: 220, a: 0.07 },
      { x: 80, y: 1100, r: 320, a: 0.06 },
      { x: 980, y: 1400, r: 260, a: 0.08 },
      { x: 540, y: 960, r: 200, a: 0.05 },
    ];
    bokeh.forEach(({ x, y, r, a }) => {
      const g = c.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(255,180,210,${a * 2})`);
      g.addColorStop(1, "rgba(255,120,160,0)");
      c.fillStyle = g;
      c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill();
    });

    /* ── scattered small hearts ── */
    const miniHearts = [
      [60, 80, 16, 0.18], [1010, 110, 12, 0.14], [30, 500, 10, 0.12],
      [1050, 620, 14, 0.15], [90, 1300, 9, 0.11], [1000, 1200, 11, 0.13],
      [540, 80, 8, 0.1], [220, 300, 7, 0.09], [850, 1700, 10, 0.12],
      [150, 1700, 8, 0.1], [950, 250, 6, 0.08],
    ];
    miniHearts.forEach(([x, y, s, a]) => {
      c.save();
      c.globalAlpha = a;
      c.fillStyle = "#fff";
      drawHeartPath(x, y, s);
      c.fill();
      c.restore();
    });

    /* ── sparkle stars ── */
    const stars = [
      [110, 160], [970, 200], [55, 900], [1030, 800],
      [300, 1750], [780, 1750], [540, 1800],
    ];
    stars.forEach(([sx, sy]) => {
      c.save();
      c.globalAlpha = 0.35;
      c.fillStyle = "#fff";
      c.font = "28px serif";
      c.textAlign = "center";
      c.fillText("✦", sx, sy);
      c.restore();
    });

    /* ═══════════════════════════════════
       SECTION 1 — TOP TITLE
    ═══════════════════════════════════ */
    c.textAlign = "center";
    /* decorative side lines */
    c.strokeStyle = "rgba(255,255,255,0.25)";
    c.lineWidth = 1.5;
    c.beginPath(); c.moveTo(60, 115); c.lineTo(340, 115); c.stroke();
    c.beginPath(); c.moveTo(740, 115); c.lineTo(1020, 115); c.stroke();

    c.font = "400 30px Georgia, serif";
    c.fillStyle = "rgba(255,255,255,0.6)";
    c.fillText("L O V E   C O M P A T I B I L I T Y", W / 2, 124);

    /* ═══════════════════════════════════
       SECTION 2 — BIG HEART + NAMES
    ═══════════════════════════════════ */
    const hcx = W / 2, hcy = 480, hs = 240;

    /* outer glow */
    const glowGrad = c.createRadialGradient(hcx, hcy, 0, hcx, hcy, hs * 1.8);
    glowGrad.addColorStop(0, "rgba(255,80,120,0.35)");
    glowGrad.addColorStop(1, "rgba(255,80,120,0)");
    c.fillStyle = glowGrad;
    c.beginPath(); c.arc(hcx, hcy, hs * 1.8, 0, Math.PI * 2); c.fill();

    /* main heart — solid gradient fill */
    const heartFill = c.createLinearGradient(hcx - hs, hcy - hs, hcx + hs, hcy + hs * 0.5);
    heartFill.addColorStop(0, "#ff6b9d");
    heartFill.addColorStop(0.5, "#e8194a");
    heartFill.addColorStop(1, "#8b0030");
    c.save();
    c.shadowColor = "rgba(180,0,60,0.7)";
    c.shadowBlur = 60;
    drawHeartPath(hcx, hcy, hs);
    c.fillStyle = heartFill;
    c.fill();
    c.restore();

    /* heart inner highlight (top shine) */
    const shine = c.createRadialGradient(hcx - hs * 0.3, hcy - hs * 0.55, 0, hcx - hs * 0.1, hcy - hs * 0.35, hs * 0.65);
    shine.addColorStop(0, "rgba(255,255,255,0.3)");
    shine.addColorStop(1, "rgba(255,255,255,0)");
    drawHeartPath(hcx, hcy, hs);
    c.fillStyle = shine;
    c.fill();

    /* heart border */
    drawHeartPath(hcx, hcy, hs);
    c.strokeStyle = "rgba(255,255,255,0.45)";
    c.lineWidth = 3;
    c.stroke();

    /* names BELOW heart */
    const nameFontSize = (n1.length + n2.length) > 18 ? 52 : 62;
    c.font = `bold ${nameFontSize}px Georgia, serif`;
    c.fillStyle = "#fff";
    c.shadowColor = "rgba(0,0,0,0.4)";
    c.shadowBlur = 16;
    c.textAlign = "center";
    c.fillText(`${n1}  ♥  ${n2}`, W / 2, 790);
    c.shadowBlur = 0;

    /* ship name */
    c.font = "italic 32px Georgia, serif";
    c.fillStyle = "rgba(255,210,230,0.85)";
    c.fillText(`${ship} — A Perfect Union`, W / 2, 845);

    /* ── ornamental divider ── */
    c.strokeStyle = "rgba(255,255,255,0.2)";
    c.lineWidth = 1;
    c.beginPath(); c.moveTo(100, 890); c.lineTo(W - 100, 890); c.stroke();
    c.font = "24px serif";
    c.fillStyle = "rgba(255,255,255,0.35)";
    c.fillText("✦  ✦  ✦", W / 2, 918);
    c.beginPath(); c.moveTo(100, 938); c.lineTo(W - 100, 938); c.stroke();

    /* ═══════════════════════════════════
       SECTION 3 — BIG SCORE
    ═══════════════════════════════════ */
    /* score glow circle */
    const scoreGlow = c.createRadialGradient(W / 2, 1060, 0, W / 2, 1060, 200);
    scoreGlow.addColorStop(0, "rgba(255,200,220,0.2)");
    scoreGlow.addColorStop(1, "rgba(255,200,220,0)");
    c.fillStyle = scoreGlow;
    c.beginPath(); c.arc(W / 2, 1060, 200, 0, Math.PI * 2); c.fill();

    /* score number */
    c.font = "bold 200px Georgia, serif";
    c.textAlign = "center";
    const scoreGrad = c.createLinearGradient(W / 2 - 180, 960, W / 2 + 180, 1120);
    scoreGrad.addColorStop(0, "#ffe4ef");
    scoreGrad.addColorStop(0.4, "#ffffff");
    scoreGrad.addColorStop(1, "#ffb3cd");
    c.fillStyle = scoreGrad;
    c.shadowColor = "rgba(0,0,0,0.3)";
    c.shadowBlur = 30;
    c.fillText(`${result}%`, W / 2, 1140);
    c.shadowBlur = 0;

    /* rank badge pill */
    c.font = "bold 28px Arial, sans-serif";
    const rw2 = c.measureText(rank).width + 64;
    const rx2 = W / 2 - rw2 / 2, ry2 = 1162;
    const pillGrad = c.createLinearGradient(rx2, ry2, rx2 + rw2, ry2 + 50);
    pillGrad.addColorStop(0, "rgba(255,255,255,0.22)");
    pillGrad.addColorStop(1, "rgba(255,255,255,0.1)");
    c.fillStyle = pillGrad;
    c.strokeStyle = "rgba(255,255,255,0.5)";
    c.lineWidth = 2;
    c.beginPath(); c.roundRect(rx2, ry2, rw2, 52, 26); c.fill(); c.stroke();
    c.fillStyle = "#fff";
    c.textAlign = "center";
    c.fillText(rank, W / 2, ry2 + 35);

    /* ── divider ── */
    c.strokeStyle = "rgba(255,255,255,0.18)";
    c.lineWidth = 1;
    c.beginPath(); c.moveTo(100, 1244); c.lineTo(W - 100, 1244); c.stroke();

    /* ═══════════════════════════════════
       SECTION 4 — COMPATIBILITY BARS
    ═══════════════════════════════════ */
    const barDefs = [
      { label: "Emotional",    icon: "♡", color1: "#ff8fab", color2: "#ffb3c6" },
      { label: "Passion",      icon: "✦", color1: "#ff9a3c", color2: "#ffd6a5" },
      { label: "Intellectual", icon: "◈", color1: "#a78bfa", color2: "#ddd6fe" },
      { label: "Trust",        icon: "◉", color1: "#34d399", color2: "#a7f3d0" },
    ];
    const bx = 100, bw = 880, bh = 20;
    dimData.forEach((d, i) => {
      const by = 1274 + i * 100;
      const { label, icon, color1, color2 } = barDefs[i];

      /* icon + label */
      c.font = "600 28px Arial, sans-serif";
      c.textAlign = "left";
      c.fillStyle = color2;
      c.fillText(`${icon}  ${label}`, bx, by + 20);

      /* percent */
      c.textAlign = "right";
      c.fillStyle = "#fff";
      c.font = "bold 28px Arial, sans-serif";
      c.fillText(`${d.value}%`, bx + bw, by + 20);

      /* track */
      c.fillStyle = "rgba(255,255,255,0.12)";
      c.beginPath(); c.roundRect(bx, by + 32, bw, bh, 10); c.fill();

      /* filled bar */
      const barG = c.createLinearGradient(bx, 0, bx + (d.value / 100) * bw, 0);
      barG.addColorStop(0, color1);
      barG.addColorStop(1, color2);
      c.fillStyle = barG;
      c.shadowColor = color1;
      c.shadowBlur = 10;
      c.beginPath(); c.roundRect(bx, by + 32, (d.value / 100) * bw, bh, 10); c.fill();
      c.shadowBlur = 0;
    });

    /* ── divider ── */
    c.strokeStyle = "rgba(255,255,255,0.18)";
    c.lineWidth = 1;
    c.beginPath(); c.moveTo(100, 1694); c.lineTo(W - 100, 1694); c.stroke();

    /* ═══════════════════════════════════
       SECTION 5 — MESSAGE
    ═══════════════════════════════════ */
    /* big quote mark */
    c.font = "bold 100px Georgia, serif";
    c.fillStyle = "rgba(255,255,255,0.15)";
    c.textAlign = "left";
    c.fillText("\u201C", 90, 1790);

    c.font = "italic 36px Georgia, serif";
    c.fillStyle = "rgba(255,230,240,0.92)";
    c.textAlign = "center";
    const msgLines = wrapText(message, 820);
    msgLines.forEach((l, i) => c.fillText(l, W / 2, 1775 + i * 46));

    /* closing quote */
    c.font = "bold 100px Georgia, serif";
    c.fillStyle = "rgba(255,255,255,0.15)";
    c.textAlign = "right";
    c.fillText("\u201D", W - 90, 1820);

    /* ── branding ── */
    c.font = "500 26px Arial, sans-serif";
    c.fillStyle = "rgba(255,255,255,0.3)";
    c.textAlign = "center";
    c.fillText("✦  lovecalculator.space  ✦", W / 2, 1888);

    canvas.toBlob(blob => {
      if (!blob) { toast.error("Could not generate card."); return; }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `${n1}-${n2}-love-card.png`; a.click();
      URL.revokeObjectURL(url);
      toast.success("Beautiful card downloaded! 💕");
    }, "image/png");
  };

  const compat = result !== null ? getCompatibilityMessage(result) : null;
  const dims = result !== null ? getDimensions(name1, name2, result) : [];
  const traits1 = showResult ? getTraits(name1) : [];
  const traits2 = showResult ? getTraits(name2) : [];
  const ship = showResult && result !== null ? getShipName(name1, name2) : "";
  const fact = LOVE_FACTS[factIndex];

  const dimColors = ["#f43f5e", "#fb923c", "#8b5cf6", "#10b981"];

  return (
    <>
      <Confetti active={confetti} />
      <div className="w-full max-w-lg mx-auto" ref={cardRef}>
        <div className="card-romantic rounded-2xl p-8 md:p-10 backdrop-blur-sm">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-heart" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Calculate Your Love</h2>
            <p className="text-muted-foreground text-sm md:text-base">Enter your names and discover your compatibility</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="relative">
              <Input
                type="text" placeholder="Your Name" aria-label="Your Name"
                value={name1} onChange={(e) => setName1(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                className="h-14 px-5 text-lg rounded-xl border-2 border-border focus:border-primary bg-background/50 placeholder:text-muted-foreground/60"
                maxLength={30}
              />
              <Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-heart-pink/50" />
            </div>
            <div className="flex justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-button">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div className="relative">
              <Input
                type="text" placeholder="Partner's Name" aria-label="Partner's Name"
                value={name2} onChange={(e) => setName2(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                className="h-14 px-5 text-lg rounded-xl border-2 border-border focus:border-primary bg-background/50 placeholder:text-muted-foreground/60"
                maxLength={30}
              />
              <Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-heart-pink/50" />
            </div>
          </div>

          <Button
            onClick={calculateLove} disabled={isCalculating}
            className="w-full h-14 text-lg font-semibold rounded-xl btn-romantic text-primary-foreground border-0 transition-all duration-300"
          >
            {isCalculating ? (
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 animate-pulse-heart" />
                <span>Calculating Love...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                <span>Calculate Love ✨</span>
              </div>
            )}
          </Button>

          {result !== null && showResult && compat && (
            <div className="mt-8 space-y-5 animate-fade-in-up">

              {/* Heart Meter */}
              <div className="text-center">
                <HeartMeter value={result} show={showResult} />
                <div className="mt-2">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                    {compat.rank}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="font-semibold text-foreground">{name1}</span>
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse-heart" />
                  <span className="font-semibold text-foreground">{name2}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">{compat.emoji} {compat.message}</p>
              </div>

              {/* Ship Name */}
              <div className="rounded-xl p-4 text-center" style={{ background: "linear-gradient(135deg, #fce7f3, #fff1f2)" }}>
                <p className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-1">Your Ship Name</p>
                <p className="text-2xl font-bold text-rose-600">💑 {ship}</p>
                <p className="text-xs text-rose-400 mt-1">The perfect blend of {name1.split(" ")[0]} & {name2.split(" ")[0]}</p>
              </div>

              {/* Multi-dimension compatibility */}
              <div className="rounded-xl p-4 space-y-3" style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Compatibility Breakdown</p>
                {dims.map((d, i) => (
                  <div key={d.label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 flex items-center gap-1.5">
                        <span>{d.icon}</span> {d.label}
                      </span>
                      <span className="text-sm font-bold" style={{ color: dimColors[i] }}>{d.value}%</span>
                    </div>
                    <AnimatedBar value={d.value} color={dimColors[i]} />
                    <p className="text-xs text-gray-400 mt-0.5">{d.desc}</p>
                  </div>
                ))}
              </div>

              {/* Love Traits */}
              <div className="grid grid-cols-2 gap-3">
                {[{ name: name1.split(" ")[0], traits: traits1, color: "#f43f5e" }, { name: name2.split(" ")[0], traits: traits2, color: "#8b5cf6" }].map(p => (
                  <div key={p.name} className="rounded-xl p-3.5" style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}>
                    <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: p.color }}>{p.name}</p>
                    <div className="space-y-1">
                      {p.traits.map(t => (
                        <div key={t} className="flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                          <span className="text-xs text-gray-600">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Love Fact */}
              <div className="rounded-xl p-4" style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "1px solid #bbf7d0" }}>
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1.5">💡 Did You Know?</p>
                <p className="text-sm text-emerald-800 leading-relaxed">{fact}</p>
              </div>

              {/* Share Button → opens social panel */}
              <div className="space-y-3 pt-1">
                <button
                  onClick={() => setShowSharePanel(p => !p)}
                  className="w-full flex items-center justify-center gap-2 h-12 rounded-xl font-semibold text-white transition-all duration-200"
                  style={{ background: "linear-gradient(135deg,#be123c,#f43f5e)", boxShadow: "0 4px 16px rgba(190,18,60,0.35)" }}
                >
                  <Share2 className="w-4 h-4" />
                  Share Result ↓
                </button>

                {showSharePanel && (
                  <div className="rounded-xl p-4 space-y-3 animate-fade-in-up" style={{ background: "linear-gradient(135deg,#fff0f3,#fff5f8)", border: "1px solid #ffd6e0" }}>
                    <p className="text-xs font-bold text-rose-500 uppercase tracking-widest text-center">Share on</p>
                    <div className="grid grid-cols-2 gap-2">
                      {/* WhatsApp */}
                      <button onClick={shareWhatsApp}
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-semibold text-white text-sm transition-all active:scale-95"
                        style={{ background: "#25D366" }}>
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                      </button>
                      {/* Facebook */}
                      <button onClick={shareFacebook}
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-semibold text-white text-sm transition-all active:scale-95"
                        style={{ background: "#1877F2" }}>
                        <Facebook className="w-4 h-4" /> Facebook
                      </button>
                      {/* Twitter / X */}
                      <button onClick={shareTwitter}
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-semibold text-white text-sm transition-all active:scale-95"
                        style={{ background: "#000" }}>
                        <Twitter className="w-4 h-4" /> Twitter / X
                      </button>
                      {/* Telegram */}
                      <button onClick={shareTelegram}
                        className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-semibold text-white text-sm transition-all active:scale-95"
                        style={{ background: "#229ED9" }}>
                        <Send className="w-4 h-4" /> Telegram
                      </button>
                    </div>
                    {/* Copy text */}
                    <button onClick={copyShareText}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-rose-600 text-sm transition-all active:scale-95"
                      style={{ background: "#fff", border: "1.5px solid #fda4af" }}>
                      <Copy className="w-4 h-4" /> Copy Result Text
                    </button>
                  </div>
                )}

                <div className="flex gap-3 justify-center">
                  <Button onClick={downloadCard} variant="outline"
                    className="rounded-xl border-2 border-rose-200 hover:bg-rose-50 text-rose-600 font-semibold flex-1">
                    <Download className="w-4 h-4 mr-2" /> Download Card
                  </Button>
                  <Button onClick={reset} variant="outline"
                    className="rounded-xl border-2 border-muted-foreground/30 hover:bg-muted text-foreground flex-1">
                    <RotateCcw className="w-4 h-4 mr-2" /> Try Again
                  </Button>
                </div>
              </div>

              <p className="text-xs text-muted-foreground/60 text-center">Share your love bond with friends! 🔥</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoveCalculator;
