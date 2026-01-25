import { useState, useEffect, useCallback, useRef } from "react";
import { Heart, Trophy, Timer, RefreshCw, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FallingHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  points: number;
}

const heartColors = [
  { color: "text-heart-red fill-heart-red", points: 1 },
  { color: "text-heart-pink fill-heart-pink", points: 2 },
  { color: "text-gold fill-gold", points: 5 },
  { color: "text-primary fill-primary", points: 3 },
];

const LoveHeartsCatchGame = () => {
  const [gameState, setGameState] = useState<"idle" | "playing" | "ended">("idle");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("loveGameHighScore");
    return saved ? parseInt(saved) : 0;
  });
  const [timeLeft, setTimeLeft] = useState(30);
  const [hearts, setHearts] = useState<FallingHeart[]>([]);
  const [combo, setCombo] = useState(0);
  const [showCombo, setShowCombo] = useState(false);
  const [missedHearts, setMissedHearts] = useState(0);
  const [clickEffects, setClickEffects] = useState<{ id: number; x: number; y: number; points: number }[]>([]);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const heartIdRef = useRef(0);

  const spawnHeart = useCallback(() => {
    const colorData = heartColors[Math.floor(Math.random() * heartColors.length)];
    const size = 24 + Math.random() * 24;
    const newHeart: FallingHeart = {
      id: heartIdRef.current++,
      x: 10 + Math.random() * 80,
      y: -10,
      size,
      speed: 1 + Math.random() * 2 + (score > 50 ? 1 : 0) + (score > 100 ? 1 : 0),
      color: colorData.color,
      points: colorData.points,
    };
    setHearts((prev) => [...prev, newHeart]);
  }, [score]);

  const catchHeart = (heartId: number, e: React.MouseEvent | React.TouchEvent) => {
    const heart = hearts.find((h) => h.id === heartId);
    if (!heart) return;

    const rect = gameAreaRef.current?.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0]?.clientX || 0 : e.clientX;
    const clientY = "touches" in e ? e.touches[0]?.clientY || 0 : e.clientY;
    const x = rect ? clientX - rect.left : 0;
    const y = rect ? clientY - rect.top : 0;

    const comboMultiplier = Math.min(combo + 1, 5);
    const points = heart.points * comboMultiplier;
    
    setScore((prev) => prev + points);
    setCombo((prev) => prev + 1);
    setShowCombo(true);
    setTimeout(() => setShowCombo(false), 300);

    setClickEffects((prev) => [...prev, { id: heartId, x, y, points }]);
    setTimeout(() => {
      setClickEffects((prev) => prev.filter((e) => e.id !== heartId));
    }, 600);

    setHearts((prev) => prev.filter((h) => h.id !== heartId));
  };

  const startGame = () => {
    setGameState("playing");
    setScore(0);
    setTimeLeft(30);
    setHearts([]);
    setCombo(0);
    setMissedHearts(0);
    heartIdRef.current = 0;
  };

  // Spawn hearts
  useEffect(() => {
    if (gameState !== "playing") return;
    const spawnRate = Math.max(300, 800 - score * 5);
    const interval = setInterval(spawnHeart, spawnRate);
    return () => clearInterval(interval);
  }, [gameState, spawnHeart, score]);

  // Move hearts
  useEffect(() => {
    if (gameState !== "playing") return;
    const interval = setInterval(() => {
      setHearts((prev) => {
        const updated = prev.map((h) => ({ ...h, y: h.y + h.speed }));
        const missed = updated.filter((h) => h.y > 110);
        if (missed.length > 0) {
          setMissedHearts((m) => m + missed.length);
          setCombo(0);
        }
        return updated.filter((h) => h.y <= 110);
      });
    }, 50);
    return () => clearInterval(interval);
  }, [gameState]);

  // Timer
  useEffect(() => {
    if (gameState !== "playing") return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameState("ended");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [gameState]);

  // Save high score
  useEffect(() => {
    if (gameState === "ended" && score > highScore) {
      setHighScore(score);
      localStorage.setItem("loveGameHighScore", score.toString());
    }
  }, [gameState, score, highScore]);

  return (
    <section id="love-game" className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Addictive Game</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Catch the <span className="text-gradient">Hearts</span>
          </h2>
          <p className="text-muted-foreground">
            Tap the falling hearts before they disappear! Build combos for bonus points! 💕
          </p>
        </div>

        <div className="card-romantic rounded-2xl p-4 md:p-6 overflow-hidden">
          {gameState === "idle" && (
            <div className="text-center py-12">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center relative">
                <Heart className="w-14 h-14 text-primary fill-primary animate-pulse-heart" />
                <Heart className="w-6 h-6 text-heart-pink fill-heart-pink absolute top-2 right-2 animate-float-heart" />
                <Heart className="w-5 h-5 text-gold fill-gold absolute bottom-3 left-1 animate-float-heart delay-300" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Ready to Catch Hearts?
              </h3>
              <p className="text-muted-foreground mb-2">
                Tap falling hearts to score points!
              </p>
              <div className="flex justify-center gap-4 mb-6 text-sm">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-heart-red fill-heart-red" /> +1
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-heart-pink fill-heart-pink" /> +2
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-primary fill-primary" /> +3
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-gold fill-gold" /> +5
                </span>
              </div>
              {highScore > 0 && (
                <p className="text-sm text-muted-foreground mb-4">
                  🏆 High Score: <span className="font-bold text-gold">{highScore}</span>
                </p>
              )}
              <Button
                onClick={startGame}
                className="btn-romantic text-primary-foreground font-semibold px-10 py-6 rounded-xl text-lg"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Play Now!
              </Button>
            </div>
          )}

          {gameState === "playing" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <Trophy className="w-4 h-4 text-gold" />
                  <span className="font-bold text-foreground text-lg">{score}</span>
                </div>
                {combo > 1 && showCombo && (
                  <div className="px-4 py-2 rounded-full bg-primary/20 animate-scale-in">
                    <span className="font-bold text-primary flex items-center gap-1">
                      <Zap className="w-4 h-4" /> x{Math.min(combo, 5)} Combo!
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <Timer className="w-4 h-4 text-primary" />
                  <span className={`font-bold text-lg ${timeLeft <= 10 ? "text-destructive animate-pulse" : "text-foreground"}`}>
                    {timeLeft}s
                  </span>
                </div>
              </div>

              <div
                ref={gameAreaRef}
                className="relative w-full h-[400px] md:h-[450px] rounded-xl bg-gradient-to-b from-secondary/30 to-secondary/60 overflow-hidden cursor-pointer select-none touch-none"
              >
                {hearts.map((heart) => (
                  <button
                    key={heart.id}
                    onClick={(e) => catchHeart(heart.id, e)}
                    onTouchStart={(e) => catchHeart(heart.id, e)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-125 active:scale-90 focus:outline-none"
                    style={{
                      left: `${heart.x}%`,
                      top: `${heart.y}%`,
                    }}
                  >
                    <Heart
                      className={`${heart.color} drop-shadow-lg`}
                      style={{ width: heart.size, height: heart.size }}
                    />
                  </button>
                ))}

                {clickEffects.map((effect) => (
                  <div
                    key={effect.id}
                    className="absolute pointer-events-none animate-fade-in"
                    style={{
                      left: effect.x,
                      top: effect.y,
                      animation: "floatUp 0.6s ease-out forwards",
                    }}
                  >
                    <span className="font-bold text-primary text-lg">+{effect.points}</span>
                  </div>
                ))}

                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-destructive/20 to-transparent" />
              </div>
            </div>
          )}

          {gameState === "ended" && (
            <div className="text-center py-10 animate-fade-in-up">
              <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Trophy className="w-14 h-14 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                {score > highScore ? "🎉 New High Score!" : "Game Over!"}
              </h3>
              <p className="text-5xl font-display font-bold text-gradient mb-2">{score}</p>
              <p className="text-muted-foreground mb-2">Points</p>
              
              {score > highScore && (
                <p className="text-sm text-primary font-medium mb-4 animate-pulse">
                  You beat your previous record of {highScore}! 🏆
                </p>
              )}

              <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-6">
                <span>❤️ Caught: {score > 0 ? "many" : "0"}</span>
                <span>💔 Missed: {missedHearts}</span>
              </div>

              <Button
                onClick={startGame}
                className="btn-romantic text-primary-foreground font-semibold px-10 py-6 rounded-xl text-lg"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Play Again!
              </Button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes floatUp {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-40px) scale(1.5); }
        }
      `}</style>
    </section>
  );
};

export default LoveHeartsCatchGame;
