import { useState } from "react";
import { Heart, Star, Sparkles, RotateCcw, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface Celebrity {
  name: string;
  category: string;
  emoji: string;
}

const celebrities: Celebrity[] = [
  // Actors & Actresses
  { name: "Timothée Chalamet", category: "Actor", emoji: "🎬" },
  { name: "Zendaya", category: "Actress", emoji: "🌟" },
  { name: "Tom Holland", category: "Actor", emoji: "🕷️" },
  { name: "Sydney Sweeney", category: "Actress", emoji: "💫" },
  { name: "Ryan Gosling", category: "Actor", emoji: "🎭" },
  { name: "Margot Robbie", category: "Actress", emoji: "💎" },
  { name: "Chris Hemsworth", category: "Actor", emoji: "⚡" },
  { name: "Ana de Armas", category: "Actress", emoji: "🌹" },
  { name: "Jacob Elordi", category: "Actor", emoji: "🎬" },
  { name: "Florence Pugh", category: "Actress", emoji: "✨" },
  
  // Musicians
  { name: "Taylor Swift", category: "Singer", emoji: "🎵" },
  { name: "Harry Styles", category: "Singer", emoji: "🎤" },
  { name: "Beyoncé", category: "Singer", emoji: "👑" },
  { name: "Bad Bunny", category: "Singer", emoji: "🐰" },
  { name: "Dua Lipa", category: "Singer", emoji: "💃" },
  { name: "The Weeknd", category: "Singer", emoji: "🌃" },
  { name: "Ariana Grande", category: "Singer", emoji: "☁️" },
  { name: "Bruno Mars", category: "Singer", emoji: "🎸" },
  { name: "Billie Eilish", category: "Singer", emoji: "🖤" },
  { name: "Shawn Mendes", category: "Singer", emoji: "🎶" },
  
  // Athletes
  { name: "Cristiano Ronaldo", category: "Athlete", emoji: "⚽" },
  { name: "Serena Williams", category: "Athlete", emoji: "🎾" },
  { name: "LeBron James", category: "Athlete", emoji: "🏀" },
  { name: "Simone Biles", category: "Athlete", emoji: "🤸" },
  { name: "Lionel Messi", category: "Athlete", emoji: "⚽" },
  
  // Influencers & Models
  { name: "Kendall Jenner", category: "Model", emoji: "📸" },
  { name: "Gigi Hadid", category: "Model", emoji: "👗" },
  { name: "Emma Chamberlain", category: "Influencer", emoji: "☕" },
  { name: "Charli D'Amelio", category: "Influencer", emoji: "💫" },
  
  // K-Pop Stars
  { name: "Jungkook (BTS)", category: "K-Pop", emoji: "💜" },
  { name: "Lisa (BLACKPINK)", category: "K-Pop", emoji: "🖤💗" },
  { name: "V (BTS)", category: "K-Pop", emoji: "💜" },
  { name: "Jennie (BLACKPINK)", category: "K-Pop", emoji: "🖤💗" },
];

const CelebrityLoveCalculator = () => {
  const [userName, setUserName] = useState("");
  const [selectedCelebrity, setSelectedCelebrity] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const getCelebrity = (name: string) => celebrities.find(c => c.name === name);

  const calculateLove = () => {
    if (!userName.trim() || !selectedCelebrity) {
      toast.error("Please enter your name and select a celebrity!");
      return;
    }

    setIsCalculating(true);
    setShowResult(false);

    // Fun algorithm
    const combined = (userName + selectedCelebrity).toLowerCase().replace(/\s/g, "");
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    
    // Generate percentage between 45-99 for fun results
    const percentage = Math.abs(hash % 55) + 45;

    setTimeout(() => {
      setResult(percentage);
      setIsCalculating(false);
      setTimeout(() => setShowResult(true), 100);
    }, 1500);
  };

  const getCompatibilityMessage = (percentage: number, celebrity: string) => {
    if (percentage >= 90) return `OMG! You and ${celebrity} are destined for the red carpet together! 🌟`;
    if (percentage >= 80) return `Amazing chemistry! ${celebrity} would definitely swipe right on you! 💕`;
    if (percentage >= 70) return `Great match! You'd make headlines as a power couple! 📸`;
    if (percentage >= 60) return `Solid connection! There's definitely a spark between you! ✨`;
    return `Keep dreaming! With some luck, you might catch ${celebrity}'s attention! 🍀`;
  };

  const shareResult = async () => {
    const celebrity = getCelebrity(selectedCelebrity);
    const text = `⭐ Celebrity Love Calculator ⭐\n${userName} ❤️ ${selectedCelebrity}\nCompatibility: ${result}%\n\nFind your celebrity match at lovecalculator.space`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: "Celebrity Love Calculator", text });
      } catch {
        copyToClipboard(text);
      }
    } else {
      copyToClipboard(text);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Result copied! Share your celebrity crush! ⭐");
  };

  const reset = () => {
    setUserName("");
    setSelectedCelebrity("");
    setResult(null);
    setShowResult(false);
  };

  // Group celebrities by category
  const groupedCelebrities = celebrities.reduce((acc, celeb) => {
    if (!acc[celeb.category]) acc[celeb.category] = [];
    acc[celeb.category].push(celeb);
    return acc;
  }, {} as Record<string, Celebrity[]>);

  return (
    <section id="celebrity" className="w-full py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm font-medium text-foreground">
              Celebrity Love Match
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Celebrity Love Calculator
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ever wondered if you're compatible with your favorite celebrity crush? 
            Find out your love percentage with famous stars! ⭐
          </p>
        </div>

        {/* Calculator Card */}
        <div className="card-romantic rounded-2xl p-8 md:p-10 max-w-xl mx-auto">
          <div className="space-y-6">
            {/* User Name Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Your Name</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="h-14 px-5 text-lg rounded-xl border-2 border-border focus:border-primary bg-background/50"
                  maxLength={30}
                />
                <Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-heart-pink/50" />
              </div>
            </div>

            {/* Sparkle Divider */}
            <div className="flex justify-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-primary flex items-center justify-center shadow-button">
                <Star className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
              </div>
            </div>

            {/* Celebrity Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Choose Your Celebrity Crush</label>
              <Select value={selectedCelebrity} onValueChange={setSelectedCelebrity}>
                <SelectTrigger className="h-14 rounded-xl border-2 border-border focus:border-primary bg-background/50">
                  <SelectValue placeholder="Select a celebrity" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {Object.entries(groupedCelebrities).map(([category, celebs]) => (
                    <div key={category}>
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50 sticky top-0">
                        {category}
                      </div>
                      {celebs.map((celeb) => (
                        <SelectItem key={celeb.name} value={celeb.name}>
                          <span className="flex items-center gap-2">
                            <span>{celeb.emoji}</span>
                            <span>{celeb.name}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Calculate Button */}
            <Button
              onClick={calculateLove}
              disabled={isCalculating}
              className="w-full h-14 text-lg font-semibold rounded-xl btn-romantic text-primary-foreground border-0"
            >
              {isCalculating ? (
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 animate-spin" />
                  <span>Finding Your Match...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Calculate Celebrity Match</span>
                </div>
              )}
            </Button>

            {/* Result Display */}
            {result !== null && showResult && (
              <div className="mt-6 animate-fade-in-up">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary to-muted">
                  {/* Celebrity Display */}
                  <div className="mb-4">
                    <span className="text-4xl">{getCelebrity(selectedCelebrity)?.emoji}</span>
                  </div>

                  {/* Names */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-lg font-medium text-foreground">{userName}</span>
                    <Heart className="w-5 h-5 text-heart-red fill-heart-red animate-pulse-heart" />
                    <span className="text-lg font-medium text-foreground">{selectedCelebrity}</span>
                  </div>

                  {/* Score */}
                  <div className="mb-4">
                    <span className="text-6xl md:text-7xl font-display font-bold text-gradient animate-count-up inline-block">
                      {result}%
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/50 text-xs text-muted-foreground">
                      <Star className="w-3 h-3" />
                      {getCelebrity(selectedCelebrity)?.category}
                    </span>
                  </div>

                  {/* Message */}
                  <p className="text-foreground">
                    {getCompatibilityMessage(result, selectedCelebrity)}
                  </p>

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
                      Try Another
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Popular Celebrities Grid */}
        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">
            Popular Celebrity Crushes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {celebrities.slice(0, 10).map((celeb) => (
              <button
                key={celeb.name}
                onClick={() => setSelectedCelebrity(celeb.name)}
                className={`text-center p-4 rounded-xl transition-all hover:scale-105 cursor-pointer ${
                  selectedCelebrity === celeb.name 
                    ? "bg-primary/20 border-2 border-primary" 
                    : "bg-card/50 hover:bg-card border-2 border-transparent"
                }`}
              >
                <span className="text-2xl block mb-2">{celeb.emoji}</span>
                <span className="text-xs font-medium text-foreground line-clamp-1">{celeb.name}</span>
                <span className="text-[10px] text-muted-foreground block">{celeb.category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityLoveCalculator;
