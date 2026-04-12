import { useState, useEffect } from "react";
import { Heart, Sparkles, Share2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

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

    // Fun algorithm based on names
    const combined = (name1 + name2).toLowerCase().replace(/\s/g, "");
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    
    // Generate percentage between 50-100 for more fun results
    const percentage = Math.abs(hash % 51) + 50;

    setTimeout(() => {
      setResult(percentage);
      setIsCalculating(false);
      setTimeout(() => setShowResult(true), 100);
    }, 1500);
  };

  const getCompatibilityMessage = (percentage: number) => {
    if (percentage >= 90) return { emoji: "💕", message: "Perfect Match! You're soulmates destined to be together!" };
    if (percentage >= 80) return { emoji: "💖", message: "Amazing Connection! Your love story is truly special!" };
    if (percentage >= 70) return { emoji: "💗", message: "Great Chemistry! You have a beautiful bond!" };
    if (percentage >= 60) return { emoji: "💓", message: "Sweet Connection! Love is definitely in the air!" };
    return { emoji: "💝", message: "Potential Sparks! Give it time and nurture your connection!" };
  };

  const shareResult = async () => {
    const text = `💕 Love Calculator Result 💕\n${name1} ❤️ ${name2}\nCompatibility: ${result}%\n\nCalculate your love at lovecalculator.space`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: "Love Calculator Result", text });
      } catch (err) {
        copyToClipboard(text);
      }
    } else {
      copyToClipboard(text);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Result copied to clipboard! Share the love! 💕");
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
        {/* Header */}
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

        {/* Input Fields */}
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

        {/* Calculate Button */}
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

        {/* Result Display */}
        {result !== null && showResult && (
          <div className="mt-8 animate-fade-in-up">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary to-muted">
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

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6 justify-center">
                <Button
                  onClick={shareResult}
                  variant="outline"
                  className="rounded-xl border-2 border-primary/30 hover:bg-primary/10 text-foreground"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveCalculator;
