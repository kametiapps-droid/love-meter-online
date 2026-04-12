import { useState } from "react";
import { Heart, Sparkles, ArrowRight, RotateCcw, Share2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: { text: string; type: LoveStyle }[];
}

type LoveStyle = "romantic" | "adventurous" | "nurturing" | "intellectual" | "passionate";

interface LoveStyleResult {
  title: string;
  emoji: string;
  description: string;
  traits: string[];
  bestMatch: string;
  color: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your ideal first date?",
    options: [
      { text: "Candlelit dinner with roses and wine 🌹", type: "romantic" },
      { text: "Hiking adventure or trying something new 🏔️", type: "adventurous" },
      { text: "Cooking together at home 🍳", type: "nurturing" },
      { text: "Museum visit or bookstore browsing 📚", type: "intellectual" },
      { text: "Dancing the night away 💃", type: "passionate" },
    ],
  },
  {
    id: 2,
    question: "How do you express love?",
    options: [
      { text: "Love letters and sweet surprises 💌", type: "romantic" },
      { text: "Planning exciting trips together ✈️", type: "adventurous" },
      { text: "Taking care of their needs 🤗", type: "nurturing" },
      { text: "Deep conversations and sharing ideas 💭", type: "intellectual" },
      { text: "Physical affection and quality time 💕", type: "passionate" },
    ],
  },
  {
    id: 3,
    question: "What matters most in a relationship?",
    options: [
      { text: "Romance and constant spark ✨", type: "romantic" },
      { text: "Shared adventures and growth 🌟", type: "adventurous" },
      { text: "Emotional support and stability 🏠", type: "nurturing" },
      { text: "Mental connection and understanding 🧠", type: "intellectual" },
      { text: "Intense chemistry and attraction 🔥", type: "passionate" },
    ],
  },
  {
    id: 4,
    question: "Pick your dream vacation with your partner:",
    options: [
      { text: "Paris - the city of love 🗼", type: "romantic" },
      { text: "Backpacking through Southeast Asia 🎒", type: "adventurous" },
      { text: "Cozy cabin in the mountains 🏡", type: "nurturing" },
      { text: "Historical tour of ancient cities 🏛️", type: "intellectual" },
      { text: "Beach resort in the Maldives 🏝️", type: "passionate" },
    ],
  },
  {
    id: 5,
    question: "What's your biggest relationship deal-breaker?",
    options: [
      { text: "Lack of thoughtful gestures 💔", type: "romantic" },
      { text: "Being too predictable or boring 😴", type: "adventurous" },
      { text: "Not being there when needed 😢", type: "nurturing" },
      { text: "Shallow conversations 🤷", type: "intellectual" },
      { text: "No physical chemistry ❄️", type: "passionate" },
    ],
  },
  {
    id: 6,
    question: "How do you handle conflicts?",
    options: [
      { text: "Write a heartfelt letter to express feelings 📝", type: "romantic" },
      { text: "Take a break and do something fun together 🎢", type: "adventurous" },
      { text: "Talk it out with patience and care 🤝", type: "nurturing" },
      { text: "Analyze the situation logically 🔍", type: "intellectual" },
      { text: "Make up passionately 💋", type: "passionate" },
    ],
  },
  {
    id: 7,
    question: "What gift would make you happiest?",
    options: [
      { text: "Personalized jewelry with your initials 💎", type: "romantic" },
      { text: "Skydiving or bungee jumping experience 🪂", type: "adventurous" },
      { text: "A handmade gift from the heart 🎁", type: "nurturing" },
      { text: "First edition of your favorite book 📖", type: "intellectual" },
      { text: "Spa day for two 💆", type: "passionate" },
    ],
  },
];

const loveStyles: Record<LoveStyle, LoveStyleResult> = {
  romantic: {
    title: "The Hopeless Romantic",
    emoji: "💕",
    description: "You believe in fairy tale love! You're all about grand gestures, sweet surprises, and keeping the spark alive. You see love as the greatest adventure and believe everyone deserves their own love story.",
    traits: ["Thoughtful", "Expressive", "Dreamy", "Affectionate"],
    bestMatch: "Someone who appreciates romance and reciprocates your loving gestures",
    color: "from-pink-500 to-rose-500",
  },
  adventurous: {
    title: "The Thrill Seeker",
    emoji: "🌟",
    description: "You need excitement in love! Routine is your enemy, and you're always looking for the next adventure with your partner. You believe love should be an exciting journey, not a destination.",
    traits: ["Spontaneous", "Energetic", "Fun-loving", "Bold"],
    bestMatch: "Someone who loves exploring and trying new things together",
    color: "from-orange-500 to-amber-500",
  },
  nurturing: {
    title: "The Caring Soul",
    emoji: "🤗",
    description: "You show love through care and support! You're the one who remembers the little things and creates a warm, safe space for your partner. Your love language is acts of service and quality time.",
    traits: ["Supportive", "Patient", "Reliable", "Warm"],
    bestMatch: "Someone who appreciates your care and values emotional security",
    color: "from-green-500 to-emerald-500",
  },
  intellectual: {
    title: "The Deep Thinker",
    emoji: "💭",
    description: "You connect through the mind! For you, intellectual stimulation is as important as emotional connection. You need a partner who can challenge your thoughts and engage in meaningful conversations.",
    traits: ["Curious", "Analytical", "Thoughtful", "Witty"],
    bestMatch: "Someone who can match your intellectual curiosity and depth",
    color: "from-blue-500 to-indigo-500",
  },
  passionate: {
    title: "The Intense Lover",
    emoji: "🔥",
    description: "You love with intensity! When you fall, you fall hard. You believe in all-consuming love and need a partner who can match your passion. Every moment with you is memorable and meaningful.",
    traits: ["Intense", "Devoted", "Magnetic", "Expressive"],
    bestMatch: "Someone who can handle your intensity and match your passion",
    color: "from-red-500 to-pink-500",
  },
};

const LoveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<LoveStyle[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const progress = ((currentQuestion) / questions.length) * 100;

  const handleAnswer = (type: LoveStyle, optionIndex: number) => {
    setSelectedOption(optionIndex);
    setIsAnimating(true);
    
    setTimeout(() => {
      const newAnswers = [...answers, type];
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsAnimating(false);
      } else {
        setShowResult(true);
      }
    }, 500);
  };

  const calculateResult = (): LoveStyle => {
    const counts = answers.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<LoveStyle, number>);

    return Object.entries(counts).reduce((a, b) => 
      (counts[a[0] as LoveStyle] || 0) > (b[1] || 0) ? a : b
    )[0] as LoveStyle;
  };

  const result = showResult ? loveStyles[calculateResult()] : null;

  const shareResult = async () => {
    if (!result) return;
    const text = `💕 Love Quiz Result 💕\n\nI'm ${result.title} ${result.emoji}\n\n${result.description}\n\nFind your love style at lovecalculator.space`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: "My Love Style", text });
      } catch {
        navigator.clipboard.writeText(text);
        toast.success("Result copied! Share your love style! 💕");
      }
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Result copied! Share your love style! 💕");
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnimating(false);
  };

  return (
    <section id="quiz" className="w-full py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Discover Your Style
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Love Style Quiz
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Answer 7 fun questions to discover your unique love style and find out 
            what kind of partner is perfect for you! 💝
          </p>
        </div>

        {/* Quiz Card */}
        <div className="card-romantic rounded-2xl p-6 md:p-10 max-w-2xl mx-auto">
          {!showResult ? (
            <div className="space-y-6">
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <Progress value={progress} className="h-2" aria-label={`Quiz progress: ${Math.round(progress)}% complete`} />
              </div>

              {/* Question */}
              <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground text-center mb-6">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.type, index)}
                      disabled={selectedOption !== null}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                        selectedOption === index
                          ? "border-primary bg-primary/20 scale-[1.02]"
                          : "border-border hover:border-primary/50 hover:bg-secondary/50"
                      } ${selectedOption !== null && selectedOption !== index ? "opacity-50" : ""}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedOption === index 
                            ? "border-primary bg-primary" 
                            : "border-muted-foreground"
                        }`}>
                          {selectedOption === index && (
                            <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                          )}
                        </div>
                        <span className="text-foreground font-medium">{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : result && (
            <div className="animate-fade-in text-center space-y-6">
              {/* Result Emoji */}
              <div className="text-6xl md:text-7xl animate-bounce">
                {result.emoji}
              </div>

              {/* Title */}
              <div>
                <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${result.color} text-white font-semibold text-sm mb-3`}>
                  Your Love Style
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {result.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed">
                {result.description}
              </p>

              {/* Traits */}
              <div className="flex flex-wrap justify-center gap-2">
                {result.traits.map((trait, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              {/* Best Match */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-secondary to-muted">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-heart-red fill-heart-red" />
                  <span className="font-semibold text-foreground">Best Match</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {result.bestMatch}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 justify-center pt-4">
                <Button
                  onClick={shareResult}
                  className="rounded-xl btn-romantic text-primary-foreground"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Result
                </Button>
                <Button
                  onClick={reset}
                  variant="outline"
                  className="rounded-xl border-2 border-muted-foreground/30 hover:bg-muted text-foreground"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Love Style Preview */}
        {!showResult && (
          <div className="mt-12">
            <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">
              Possible Love Styles
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {Object.entries(loveStyles).map(([key, style]) => (
                <div
                  key={key}
                  className="text-center p-4 rounded-xl bg-card/50 hover:bg-card transition-colors"
                >
                  <span className="text-3xl block mb-2">{style.emoji}</span>
                  <span className="text-xs font-medium text-foreground line-clamp-2">{style.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoveQuiz;
