import { useState, useRef } from "react";
import { Heart, Sparkles, Share2, RotateCcw, Facebook, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import html2canvas from "html2canvas";

const LoveCalculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const calculateLove = () => {
    if (!name1.trim() || !name2.trim()) {
      toast.error("Please enter both names to calculate your love!");
      return;
    }

    setIsCalculating(true);
    setShowResult(false);

    const combined = (name1 + name2).toLowerCase().replace(/\s/g, "");
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    
    const percentage = Math.abs(hash % 51) + 50;

    setTimeout(() => {
      setResult(percentage);
      setIsCalculating(false);
      setTimeout(() => setShowResult(true), 100);
    }, 1500);
  };

  const getCompatibilityMessage = (percentage: number) => {
    if (percentage >= 90) return { emoji: "💕", message: "Perfect Match! You're soulmates destined to be together!", rank: "💎 Diamond Love Bond" };
    if (percentage >= 80) return { emoji: "💖", message: "Amazing Connection! Your love story is truly special!", rank: "🥇 Gold Love Bond" };
    if (percentage >= 70) return { emoji: "💗", message: "Great Chemistry! You have a beautiful bond!", rank: "🥈 Silver Love Bond" };
    if (percentage >= 60) return { emoji: "💓", message: "Sweet Connection! Love is definitely in the air!", rank: "🥉 Bronze Love Bond" };
    return { emoji: "💝", message: "Potential Sparks! Give it time and nurture your connection!", rank: "✨ Spark Love Bond" };
  };

  const resultRef = useRef<HTMLDivElement>(null);

  const captureScreenshot = async (): Promise<Blob | null> => {
    if (!resultRef.current) return null;
    try {
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: "#1a1a2e",
        scale: 2,
        useCORS: true,
      });
      return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), "image/png"));
    } catch {
      return null;
    }
  };

  const shareResult = async () => {
    if (!result) return;
    const { rank } = getCompatibilityMessage(result);
    const text = `${rank}\n\n💕 Love Calculator Result 💕\n${name1} ❤️ ${name2}\nCompatibility: ${result}%\n\n${getCompatibilityMessage(result).message}\n\n🔥 Check YOUR love bond too!\n👉 https://www.lovecalculator.space/love-calculator`;

    toast.loading("Preparing screenshot...");
    const blob = await captureScreenshot();
    toast.dismiss();

    if (blob && navigator.share && navigator.canShare?.({ files: [new File([blob], "love-bond.png", { type: "image/png" })] })) {
      const file = new File([blob], "love-bond.png", { type: "image/png" });
      try {
        await navigator.share({ title: "My Love Bond Result 💕", text, files: [file] });
        return;
      } catch { /* user cancelled */ }
    }
    
    // Fallback: download image + copy text
    if (blob) {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "love-bond-result.png";
      a.click();
      URL.revokeObjectURL(url);
    }
    navigator.clipboard.writeText(text);
    toast.success("Screenshot downloaded & text copied! Share on social media! 💕");
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent("https://www.lovecalculator.space/love-calculator");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank", "width=600,height=400");
  };

  const reset = () => {
    setName1("");
    setName2("");
    setResult(null);
    setShowResult(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="card-romantic rounded-2xl p-8 md:p-10 backdrop-blur-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-heart" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Calculate Your Love
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Enter your names and discover your compatibility
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              value={name1}
              onChange={(e) => setName1(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
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
              type="text"
              placeholder="Partner's Name"
              aria-label="Partner's Name"
              value={name2}
              onChange={(e) => setName2(e.target.value.replace(/[^a-zA-Z\s]/g, ''))}
              className="h-14 px-5 text-lg rounded-xl border-2 border-border focus:border-primary bg-background/50 placeholder:text-muted-foreground/60"
              maxLength={30}
            />
            <Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-heart-pink/50" />
          </div>
        </div>

        <Button
          onClick={calculateLove}
          disabled={isCalculating}
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
              <span>Calculate Love</span>
            </div>
          )}
        </Button>

        {result !== null && showResult && (
          <div className="mt-8 animate-fade-in-up">
            <div ref={resultRef} className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary to-muted">
              {/* Rank Badge */}
              <div className="mb-3">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 text-primary font-semibold text-sm">
                  {getCompatibilityMessage(result).rank}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-display font-bold text-gradient animate-count-up inline-block">
                  {result}%
                </span>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-lg font-medium text-foreground">{name1}</span>
                <Heart className="w-5 h-5 text-heart-red fill-heart-red animate-pulse-heart" />
                <span className="text-lg font-medium text-foreground">{name2}</span>
              </div>

              <div className="text-center">
                <span className="text-2xl mr-2">{getCompatibilityMessage(result).emoji}</span>
                <p className="text-muted-foreground inline">
                  {getCompatibilityMessage(result).message}
                </p>
              </div>

              <p className="text-xs text-muted-foreground/50 mt-3">
                lovecalculator.space
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              <Button
                onClick={shareResult}
                className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share with Screenshot
              </Button>
              <Button
                onClick={shareOnFacebook}
                className="rounded-xl bg-[#1877F2] hover:bg-[#1877F2]/90 text-white font-semibold"
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
              <Button
                onClick={reset}
                variant="outline"
                className="rounded-xl border-2 border-muted-foreground/30 hover:bg-muted text-foreground"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>

            <p className="text-xs text-muted-foreground/70 mt-4 text-center">
              Share your love bond rank and challenge your friends! 🔥
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveCalculator;
