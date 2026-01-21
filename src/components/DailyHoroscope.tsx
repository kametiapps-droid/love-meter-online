import { useState } from "react";
import { Star, Sparkles, Heart, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ZodiacSign {
  name: string;
  symbol: string;
  dates: string;
  element: string;
}

const zodiacSigns: ZodiacSign[] = [
  { name: "Aries", symbol: "♈", dates: "Mar 21 - Apr 19", element: "Fire" },
  { name: "Taurus", symbol: "♉", dates: "Apr 20 - May 20", element: "Earth" },
  { name: "Gemini", symbol: "♊", dates: "May 21 - Jun 20", element: "Air" },
  { name: "Cancer", symbol: "♋", dates: "Jun 21 - Jul 22", element: "Water" },
  { name: "Leo", symbol: "♌", dates: "Jul 23 - Aug 22", element: "Fire" },
  { name: "Virgo", symbol: "♍", dates: "Aug 23 - Sep 22", element: "Earth" },
  { name: "Libra", symbol: "♎", dates: "Sep 23 - Oct 22", element: "Air" },
  { name: "Scorpio", symbol: "♏", dates: "Oct 23 - Nov 21", element: "Water" },
  { name: "Sagittarius", symbol: "♐", dates: "Nov 22 - Dec 21", element: "Fire" },
  { name: "Capricorn", symbol: "♑", dates: "Dec 22 - Jan 19", element: "Earth" },
  { name: "Aquarius", symbol: "♒", dates: "Jan 20 - Feb 18", element: "Air" },
  { name: "Pisces", symbol: "♓", dates: "Feb 19 - Mar 20", element: "Water" },
];

const loveHoroscopes = [
  "Romance blooms unexpectedly today! Keep your heart open to new connections. A simple gesture could spark something magical. ✨",
  "Your charm is irresistible today! Someone special is thinking about you right now. Trust your intuition in matters of love. 💕",
  "Communication is key today. Express your feelings openly and watch your relationships flourish. A meaningful conversation awaits. 💬",
  "The stars align for passion! If single, love could find you in unexpected places. If coupled, reignite the spark with a surprise. 🔥",
  "Today brings emotional depth to your connections. Vulnerability is your superpower. Let someone see the real you. 💖",
  "Adventure calls your romantic heart! Break the routine and try something new with your partner or on a date. 🌟",
  "Your magnetic energy attracts admirers today. Enjoy the attention but stay true to what your heart truly desires. 💫",
  "Patience in love pays off. Don't rush into decisions. The universe is aligning something beautiful for you. 🌙",
  "Today favors deep conversations and soul connections. Look beyond the surface - true love lies in understanding. 🦋",
  "Creativity enhances your love life today. Plan something unique and thoughtful. Your effort will be appreciated. 🎨",
  "Self-love is highlighted today. Treat yourself with kindness and watch how it transforms your relationships. 💝",
  "A surprise message or encounter could change everything. Stay open to the unexpected magic of love. ⭐",
];

const luckyActivities = [
  "Go for a romantic walk",
  "Write a love letter",
  "Plan a surprise date",
  "Watch the sunset together",
  "Cook a special meal",
  "Share your dreams",
  "Dance to your favorite song",
  "Stargaze together",
  "Take spontaneous photos",
  "Give a heartfelt compliment",
  "Try something new together",
  "Revisit your first date spot",
];

const DailyHoroscope = () => {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  // Generate consistent daily horoscope based on sign and date
  const getHoroscope = (signName: string) => {
    const dateKey = today.toDateString();
    const seed = signName.split('').reduce((acc, char, i) => 
      acc + char.charCodeAt(0) * (i + 1), 0) + dateKey.split('').reduce((acc, char) => 
      acc + char.charCodeAt(0), 0);
    
    const horoscopeIndex = seed % loveHoroscopes.length;
    const activityIndex = (seed + 7) % luckyActivities.length;
    const luckyNumber = (seed % 9) + 1;
    const compatibility = zodiacSigns[(seed + 3) % 12].name;
    
    return {
      message: loveHoroscopes[horoscopeIndex],
      activity: luckyActivities[activityIndex],
      luckyNumber,
      compatibility,
      loveScore: 70 + (seed % 30),
    };
  };

  const handleSelectSign = (signName: string) => {
    setIsLoading(true);
    setSelectedSign(null);
    
    setTimeout(() => {
      setSelectedSign(signName);
      setIsLoading(false);
    }, 800);
  };

  const selectedSignData = selectedSign ? zodiacSigns.find(s => s.name === selectedSign) : null;
  const horoscope = selectedSign ? getHoroscope(selectedSign) : null;

  return (
    <section id="horoscope" className="w-full py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm font-medium text-foreground">
              Daily Love Predictions
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Daily Love Horoscope
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover what the stars have in store for your love life today! 
            Select your zodiac sign for personalized romantic insights. 🌟
          </p>
          <p className="text-sm text-primary mt-2 font-medium">{dateString}</p>
        </div>

        {/* Zodiac Sign Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
          {zodiacSigns.map((sign) => (
            <button
              key={sign.name}
              onClick={() => handleSelectSign(sign.name)}
              className={`p-3 md:p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                selectedSign === sign.name
                  ? "bg-primary/20 border-2 border-primary shadow-lg"
                  : "bg-card/50 hover:bg-card border-2 border-transparent"
              }`}
            >
              <span className="text-2xl md:text-3xl block mb-1">{sign.symbol}</span>
              <span className="text-xs font-medium text-foreground">{sign.name}</span>
              <span className="text-[10px] text-muted-foreground block">{sign.dates.split(' - ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="card-romantic rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <RefreshCw className="w-8 h-8 text-primary mx-auto animate-spin mb-4" />
            <p className="text-muted-foreground">Reading the stars...</p>
          </div>
        )}

        {/* Horoscope Result */}
        {selectedSign && horoscope && !isLoading && selectedSignData && (
          <div className="card-romantic rounded-2xl p-6 md:p-8 max-w-2xl mx-auto animate-fade-in">
            {/* Sign Header */}
            <div className="text-center mb-6">
              <span className="text-5xl md:text-6xl block mb-2">{selectedSignData.symbol}</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {selectedSign}
              </h3>
              <span className="text-sm text-muted-foreground">{selectedSignData.dates}</span>
              <div className="mt-2">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  selectedSignData.element === "Fire" ? "bg-orange-500/20 text-orange-600" :
                  selectedSignData.element === "Earth" ? "bg-green-500/20 text-green-600" :
                  selectedSignData.element === "Air" ? "bg-blue-500/20 text-blue-600" :
                  "bg-cyan-500/20 text-cyan-600"
                }`}>
                  {selectedSignData.element} Sign
                </span>
              </div>
            </div>

            {/* Love Score */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-heart-pink/20 to-heart-red/20">
                <Heart className="w-5 h-5 text-heart-red fill-heart-red animate-pulse-heart" />
                <span className="font-bold text-foreground">Love Energy: {horoscope.loveScore}%</span>
              </div>
            </div>

            {/* Horoscope Message */}
            <div className="bg-secondary/50 rounded-xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <p className="text-foreground leading-relaxed">{horoscope.message}</p>
              </div>
            </div>

            {/* Lucky Stats */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-muted/50">
                <span className="text-xs text-muted-foreground block mb-1">Lucky Number</span>
                <span className="text-xl font-bold text-primary">{horoscope.luckyNumber}</span>
              </div>
              <div className="p-3 rounded-xl bg-muted/50">
                <span className="text-xs text-muted-foreground block mb-1">Best Match</span>
                <span className="text-sm font-bold text-foreground">{horoscope.compatibility}</span>
              </div>
              <div className="p-3 rounded-xl bg-muted/50">
                <span className="text-xs text-muted-foreground block mb-1">Lucky Activity</span>
                <span className="text-xs font-medium text-foreground">{horoscope.activity}</span>
              </div>
            </div>

            {/* Try Another */}
            <div className="text-center mt-6">
              <Button
                variant="outline"
                onClick={() => setSelectedSign(null)}
                className="rounded-xl border-2 border-muted-foreground/30 hover:bg-muted text-foreground"
              >
                <Star className="w-4 h-4 mr-2" />
                Check Another Sign
              </Button>
            </div>
          </div>
        )}

        {/* Prompt to Select */}
        {!selectedSign && !isLoading && (
          <div className="text-center p-8">
            <p className="text-muted-foreground">
              👆 Select your zodiac sign above to reveal today's love horoscope
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DailyHoroscope;
