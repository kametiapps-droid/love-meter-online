import { useState, useEffect, useRef } from "react";
import { Heart, Sparkles, Share2, RotateCcw, Download } from "lucide-react";
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

  const reset = () => { setName1(""); setName2(""); setResult(null); setShowResult(false); setConfetti(false); };

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
    const { rank, emoji, message } = getCompatibilityMessage(result);
    const ship = getShipName(name1, name2);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#be123c"/>
          <stop offset="100%" style="stop-color:#f43f5e"/>
        </linearGradient>
      </defs>
      <rect width="600" height="340" rx="24" fill="url(#bg)"/>
      <text x="300" y="54" font-family="Georgia,serif" font-size="22" fill="rgba(255,255,255,0.7)" text-anchor="middle">Love Compatibility</text>
      <text x="300" y="108" font-family="Georgia,serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">${result}%</text>
      <text x="300" y="148" font-family="Arial,sans-serif" font-size="18" fill="rgba(255,255,255,0.9)" text-anchor="middle">${name1} ❤ ${name2}</text>
      <text x="300" y="182" font-family="Arial,sans-serif" font-size="15" fill="rgba(255,255,255,0.75)" text-anchor="middle">${rank}</text>
      <text x="300" y="220" font-family="Arial,sans-serif" font-size="14" fill="rgba(255,255,255,0.7)" text-anchor="middle">Ship Name: ${ship}</text>
      <text x="300" y="268" font-family="Arial,sans-serif" font-size="13" fill="rgba(255,255,255,0.65)" text-anchor="middle">${message}</text>
      <text x="300" y="318" font-family="Arial,sans-serif" font-size="12" fill="rgba(255,255,255,0.45)" text-anchor="middle">lovecalculator.app</text>
    </svg>`;
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `${name1}-${name2}-love.svg`; a.click();
    URL.revokeObjectURL(url);
    toast.success("Card downloaded!");
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

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center pt-1">
                <Button
                  onClick={shareResult} disabled={isSharing}
                  className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Share2 className="w-4 h-4 mr-2" /> Share Result
                </Button>
                <Button
                  onClick={downloadCard}
                  variant="outline"
                  className="rounded-xl border-2 border-rose-200 hover:bg-rose-50 text-rose-600 font-semibold"
                >
                  <Download className="w-4 h-4 mr-2" /> Download Card
                </Button>
                <Button
                  onClick={reset} variant="outline"
                  className="rounded-xl border-2 border-muted-foreground/30 hover:bg-muted text-foreground"
                >
                  <RotateCcw className="w-4 h-4 mr-2" /> Try Again
                </Button>
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
