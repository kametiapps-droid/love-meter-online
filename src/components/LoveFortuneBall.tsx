import { useState } from "react";
import { Sparkles, RotateCcw, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const fortunes = [
  { answer: "Yes, love is definitely in the air! 💕", type: "positive" },
  { answer: "Absolutely! The stars align in your favor! ⭐", type: "positive" },
  { answer: "Without a doubt, your heart knows the answer! 💖", type: "positive" },
  { answer: "Signs point to YES! Follow your heart! 💝", type: "positive" },
  { answer: "It is certain - love awaits you! 🌟", type: "positive" },
  { answer: "Yes! Take the leap of faith! 💫", type: "positive" },
  { answer: "Most likely! Love is on your side! 💗", type: "positive" },
  { answer: "The universe says YES to love! ✨", type: "positive" },
  
  { answer: "The path is unclear, but keep hoping! 🌙", type: "neutral" },
  { answer: "Ask again when your heart is ready... 💭", type: "neutral" },
  { answer: "Concentrate and ask once more... 🔮", type: "neutral" },
  { answer: "The answer lies within you... 🦋", type: "neutral" },
  { answer: "Better not tell you now... mystery awaits! 🌌", type: "neutral" },
  { answer: "Cannot predict now, but stay hopeful! 🌈", type: "neutral" },
  
  { answer: "Don't count on it... but never say never! 🍀", type: "negative" },
  { answer: "My sources say no... but love surprises! 💫", type: "negative" },
  { answer: "Outlook not so good... patience is key! 🌺", type: "negative" },
  { answer: "Very doubtful... but miracles happen! ⭐", type: "negative" },
];

const sampleQuestions = [
  "Will I find true love this year?",
  "Is my crush thinking about me?",
  "Should I make the first move?",
  "Will my relationship last?",
  "Is there a soulmate waiting for me?",
  "Should I forgive and try again?",
  "Will I meet someone special soon?",
  "Is this the right person for me?",
];

const LoveFortuneBall = () => {
  const [question, setQuestion] = useState("");
  const [fortune, setFortune] = useState<typeof fortunes[0] | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const askFortune = () => {
    if (!question.trim()) {
      toast.error("Please ask a love question first! 💕");
      return;
    }

    setIsShaking(true);
    setShowResult(false);
    setFortune(null);

    // Shake animation
    setTimeout(() => {
      // Generate fortune based on question for consistency
      const seed = question.toLowerCase().split('').reduce((acc, char) => 
        acc + char.charCodeAt(0), 0);
      const fortuneIndex = seed % fortunes.length;
      
      setFortune(fortunes[fortuneIndex]);
      setIsShaking(false);
      setTimeout(() => setShowResult(true), 100);
    }, 1500);
  };

  const shareResult = async () => {
    if (!fortune) return;
    const text = `🔮 Love Fortune Ball 🔮\n\nQ: ${question}\nA: ${fortune.answer}\n\nAsk your love question at lovecalculator.space`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: "Love Fortune Ball", text });
      } catch {
        navigator.clipboard.writeText(text);
        toast.success("Fortune copied! Share the magic! 🔮");
      }
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Fortune copied! Share the magic! 🔮");
    }
  };

  const reset = () => {
    setQuestion("");
    setFortune(null);
    setShowResult(false);
  };

  const handleSampleQuestion = (q: string) => {
    setQuestion(q);
    setFortune(null);
    setShowResult(false);
  };

  return (
    <section id="fortune" className="w-full py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Fortune Ball Card */}
        <div className="card-romantic rounded-2xl p-6 md:p-10 max-w-xl mx-auto">
          <div className="space-y-6">
            {/* Question Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Your Love Question</label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Ask a yes/no love question..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && askFortune()}
                  className="h-14 px-5 text-lg rounded-xl border-2 border-border focus:border-primary bg-background/50 pr-12"
                  maxLength={100}
                />
                <Heart className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-heart-pink/50" />
              </div>
            </div>

            {/* Fortune Ball Visual */}
            <div className="flex justify-center py-4">
              <div 
                className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 flex items-center justify-center shadow-2xl ${
                  isShaking ? 'animate-[shake_0.5s_ease-in-out_infinite]' : ''
                }`}
                style={{
                  boxShadow: '0 0 60px rgba(147, 51, 234, 0.5), inset 0 0 60px rgba(0,0,0,0.5)',
                }}
              >
                {/* Inner glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400/20 to-transparent" />
                
                {/* Center triangle/answer area */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-purple-950 to-black flex items-center justify-center border-2 border-purple-400/30">
                  {isShaking ? (
                    <Sparkles className="w-8 h-8 text-purple-300 animate-pulse" />
                  ) : showResult && fortune ? (
                    <span className="text-3xl">
                      {fortune.type === 'positive' ? '💕' : fortune.type === 'neutral' ? '✨' : '🌙'}
                    </span>
                  ) : (
                    <span className="text-purple-300 text-2xl">8</span>
                  )}
                </div>
                
                {/* Sparkle effects */}
                <div className="absolute top-2 right-6 w-2 h-2 rounded-full bg-white/60 animate-pulse" />
                <div className="absolute top-8 left-4 w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse delay-300" />
              </div>
            </div>

            {/* Ask Button */}
            <Button
              onClick={askFortune}
              disabled={isShaking}
              className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            >
              {isShaking ? (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 animate-spin" />
                  <span>Revealing Your Fortune...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Ask the Fortune Ball</span>
                </div>
              )}
            </Button>

            {/* Fortune Result */}
            {showResult && fortune && (
              <div className="animate-fade-in">
                <div className={`text-center p-6 rounded-xl ${
                  fortune.type === 'positive' 
                    ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30'
                    : fortune.type === 'neutral'
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-500/30'
                    : 'bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30'
                }`}>
                  <p className="text-sm text-muted-foreground mb-2">Your question:</p>
                  <p className="text-foreground font-medium mb-4 italic">"{question}"</p>
                  
                  <div className="w-16 h-px bg-border mx-auto mb-4" />
                  
                  <p className="text-xl md:text-2xl font-display font-semibold text-foreground">
                    {fortune.answer}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4 justify-center">
                  <Button
                    onClick={shareResult}
                    variant="outline"
                    className="rounded-xl border-2 border-purple-500/30 hover:bg-purple-500/10 text-foreground"
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
                    Ask Again
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Sample Questions */}
        <div className="mt-10">
          <h3 className="font-display text-lg font-semibold text-foreground text-center mb-4">
            Try These Questions
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {sampleQuestions.slice(0, 6).map((q, index) => (
              <button
                key={index}
                onClick={() => handleSampleQuestion(q)}
                className="px-3 py-2 rounded-full bg-card/50 hover:bg-card text-xs text-foreground transition-colors hover:scale-105"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add shake keyframe */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px) rotate(-2deg); }
          20%, 40%, 60%, 80% { transform: translateX(5px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
};

export default LoveFortuneBall;
