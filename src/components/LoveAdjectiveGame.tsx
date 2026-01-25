import { useState, useEffect, useCallback } from "react";
import { Heart, Trophy, Timer, RefreshCw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const allAdjectives = [
  "Beautiful", "Gorgeous", "Stunning", "Radiant", "Charming",
  "Lovely", "Adorable", "Enchanting", "Captivating", "Alluring",
  "Graceful", "Elegant", "Exquisite", "Dazzling", "Mesmerizing",
  "Angelic", "Divine", "Heavenly", "Irresistible", "Magnetic",
  "Attractive", "Pretty", "Cute", "Sweet", "Delightful",
  "Wonderful", "Amazing", "Fantastic", "Spectacular", "Magnificent"
];

const LoveAdjectiveGame = () => {
  const [gameState, setGameState] = useState<"idle" | "playing" | "ended">("idle");
  const [currentWord, setCurrentWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [streak, setStreak] = useState(0);
  const [usedWords, setUsedWords] = useState<string[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [feedback, setFeedback] = useState<"correct" | "wrong" | null>(null);

  const scrambleWord = (word: string): string => {
    const letters = word.split("");
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    const scrambled = letters.join("");
    return scrambled === word ? scrambleWord(word) : scrambled;
  };

  const getNewWord = useCallback(() => {
    const available = allAdjectives.filter((w) => !usedWords.includes(w));
    if (available.length === 0) {
      setUsedWords([]);
      return allAdjectives[Math.floor(Math.random() * allAdjectives.length)];
    }
    return available[Math.floor(Math.random() * available.length)];
  }, [usedWords]);

  const startGame = () => {
    setGameState("playing");
    setScore(0);
    setStreak(0);
    setTimeLeft(60);
    setUsedWords([]);
    setShowHint(false);
    const word = getNewWord();
    setCurrentWord(word);
    setScrambledWord(scrambleWord(word));
    setUserInput("");
  };

  const checkAnswer = () => {
    if (userInput.toLowerCase().trim() === currentWord.toLowerCase()) {
      setFeedback("correct");
      const points = showHint ? 5 : 10 + streak * 2;
      setScore((prev) => prev + points);
      setStreak((prev) => prev + 1);
      setUsedWords((prev) => [...prev, currentWord]);

      setTimeout(() => {
        setFeedback(null);
        const word = getNewWord();
        setCurrentWord(word);
        setScrambledWord(scrambleWord(word));
        setUserInput("");
        setShowHint(false);
      }, 500);
    } else {
      setFeedback("wrong");
      setStreak(0);
      setTimeout(() => setFeedback(null), 500);
    }
  };

  const skipWord = () => {
    setStreak(0);
    const word = getNewWord();
    setCurrentWord(word);
    setScrambledWord(scrambleWord(word));
    setUserInput("");
    setShowHint(false);
  };

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkAnswer();
    }
  };

  return (
    <section id="love-game" className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Word Game</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Love <span className="text-gradient">Adjective</span> Game
          </h2>
          <p className="text-muted-foreground">
            Unscramble beautiful love adjectives before time runs out! 💝
          </p>
        </div>

        <div className="card-romantic rounded-2xl p-6 md:p-8">
          {gameState === "idle" && (
            <div className="text-center py-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Heart className="w-12 h-12 text-primary fill-primary animate-pulse-heart" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Ready to Play?
              </h3>
              <p className="text-muted-foreground mb-6">
                Unscramble love adjectives like "Beautiful", "Gorgeous", and more!
                <br />
                You have 60 seconds. Build streaks for bonus points!
              </p>
              <Button
                onClick={startGame}
                className="btn-romantic text-primary-foreground font-semibold px-8 py-6 rounded-xl"
              >
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Start Game
              </Button>
            </div>
          )}

          {gameState === "playing" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <Trophy className="w-4 h-4 text-gold" />
                  <span className="font-semibold text-foreground">{score} pts</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
                  <Timer className="w-4 h-4 text-primary" />
                  <span className={`font-semibold ${timeLeft <= 10 ? "text-destructive" : "text-foreground"}`}>
                    {timeLeft}s
                  </span>
                </div>
              </div>

              {streak > 0 && (
                <div className="text-center">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                    🔥 {streak} Streak! +{streak * 2} bonus
                  </span>
                </div>
              )}

              <div className="text-center py-6">
                <p className="text-sm text-muted-foreground mb-2">Unscramble this word:</p>
                <div className="flex justify-center gap-2 flex-wrap mb-4">
                  {scrambledWord.split("").map((letter, i) => (
                    <span
                      key={i}
                      className="w-10 h-12 flex items-center justify-center rounded-lg bg-secondary border-2 border-border font-display text-xl font-bold text-foreground"
                    >
                      {letter.toUpperCase()}
                    </span>
                  ))}
                </div>

                {showHint && (
                  <p className="text-sm text-muted-foreground mb-4">
                    Hint: Starts with "{currentWord[0]}" and has {currentWord.length} letters
                  </p>
                )}
              </div>

              <div
                className={`relative transition-all ${
                  feedback === "correct"
                    ? "ring-2 ring-green-500 rounded-xl"
                    : feedback === "wrong"
                    ? "ring-2 ring-destructive rounded-xl animate-shake"
                    : ""
                }`}
              >
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your answer..."
                  className="w-full p-4 rounded-xl bg-background/50 border-2 border-border focus:border-primary focus:outline-none text-center text-xl font-medium text-foreground"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowHint(true)}
                  disabled={showHint}
                  className="py-5"
                >
                  💡 Hint
                </Button>
                <Button
                  onClick={checkAnswer}
                  className="btn-romantic text-primary-foreground py-5"
                >
                  Check ✓
                </Button>
                <Button variant="outline" onClick={skipWord} className="py-5">
                  Skip →
                </Button>
              </div>
            </div>
          )}

          {gameState === "ended" && (
            <div className="text-center py-8 animate-fade-in-up">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                <Trophy className="w-12 h-12 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Game Over!
              </h3>
              <p className="text-4xl font-display font-bold text-gradient mb-2">{score} Points</p>
              <p className="text-muted-foreground mb-6">
                You unscrambled {usedWords.length} love adjectives!
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {usedWords.slice(0, 10).map((word, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {word}
                  </span>
                ))}
              </div>

              <Button
                onClick={startGame}
                className="btn-romantic text-primary-foreground font-semibold px-8 py-6 rounded-xl"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Play Again
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveAdjectiveGame;
