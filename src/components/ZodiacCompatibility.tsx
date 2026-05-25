import { useState } from "react";
import { Star, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const zodiacSigns = [
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

const compatibilityMatrix: Record<string, Record<string, { score: number; description: string }>> = {
  Aries: {
    Aries: { score: 75, description: "Two Aries together create sparks! Your shared passion and energy make for an exciting but sometimes competitive relationship." },
    Taurus: { score: 65, description: "Aries' fire meets Taurus' earth. You'll need patience, but together you can build something lasting." },
    Gemini: { score: 85, description: "A dynamic and fun-loving pair! Your combined energy and curiosity keep the relationship fresh and exciting." },
    Cancer: { score: 60, description: "Opposites can attract. Aries' boldness and Cancer's nurturing nature create an interesting balance." },
    Leo: { score: 95, description: "A power couple! Both fire signs, your passion and loyalty create an unbreakable bond." },
    Virgo: { score: 55, description: "Different approaches to life, but you can learn a lot from each other's perspectives." },
    Libra: { score: 70, description: "Opposite signs that attract! Your differences can create beautiful harmony when balanced." },
    Scorpio: { score: 65, description: "Intense and passionate! Both strong-willed, you'll need to find middle ground." },
    Sagittarius: { score: 90, description: "Adventure awaits! Two fire signs ready to explore the world together." },
    Capricorn: { score: 60, description: "Aries inspires, Capricorn builds. Together you can achieve great things with patience." },
    Aquarius: { score: 80, description: "Independent spirits unite! You respect each other's freedom while sharing exciting ideas." },
    Pisces: { score: 65, description: "Fire meets water. With understanding, your differences become your greatest strength." },
  },
  Taurus: {
    Aries: { score: 65, description: "Patient Taurus can ground fiery Aries. A relationship that grows stronger over time." },
    Taurus: { score: 85, description: "Double the stability, double the sensuality. A deeply comfortable and loving match." },
    Gemini: { score: 60, description: "Different paces of life, but you can find balance through communication." },
    Cancer: { score: 95, description: "A beautiful match! Both value security, comfort, and deep emotional connection." },
    Leo: { score: 70, description: "Both love luxury and loyalty. Work on compromise and you'll thrive together." },
    Virgo: { score: 90, description: "Earth sign harmony! You share practical values and a love for life's finer things." },
    Libra: { score: 75, description: "Venus rules you both! Shared appreciation for beauty and romance creates magic." },
    Scorpio: { score: 85, description: "Opposite signs with magnetic attraction. Deep, passionate, and transformative love." },
    Sagittarius: { score: 55, description: "Freedom vs. stability. It takes work, but your differences can complement each other." },
    Capricorn: { score: 95, description: "A match made in earth sign heaven! Practical, loyal, and built to last." },
    Aquarius: { score: 50, description: "Very different worldviews, but with respect, you can learn from each other." },
    Pisces: { score: 85, description: "A dreamy, romantic pairing. You create a safe haven of love together." },
  },
  Gemini: {
    Aries: { score: 85, description: "Fast-paced and fun! You keep each other entertained and inspired." },
    Taurus: { score: 60, description: "Air and earth can find balance. Taurus grounds Gemini's restless energy." },
    Gemini: { score: 80, description: "Double the wit, double the fun! Never a dull moment together." },
    Cancer: { score: 65, description: "Gemini's logic meets Cancer's emotion. Communication is key to harmony." },
    Leo: { score: 90, description: "Creative and playful! You bring out each other's best qualities." },
    Virgo: { score: 70, description: "Mercury rules both! Intellectual connection runs deep between you." },
    Libra: { score: 95, description: "Air sign perfection! Your mental connection is unmatched." },
    Scorpio: { score: 55, description: "Challenging but intriguing. You're fascinated by each other's differences." },
    Sagittarius: { score: 85, description: "Opposite signs that click! Adventure and learning together forever." },
    Capricorn: { score: 60, description: "Different approaches, but Gemini adds fun while Capricorn adds structure." },
    Aquarius: { score: 95, description: "Intellectual soulmates! Your minds dance together beautifully." },
    Pisces: { score: 65, description: "Dreamers unite! You inspire each other's imagination." },
  },
  Cancer: {
    Aries: { score: 60, description: "Fire and water create steam! Passion exists, but requires understanding." },
    Taurus: { score: 95, description: "Home and heart align perfectly. A nurturing, lasting love." },
    Gemini: { score: 65, description: "Cancer provides emotional depth to Gemini's intellectual world." },
    Cancer: { score: 85, description: "Deep emotional understanding. You create a loving sanctuary together." },
    Leo: { score: 75, description: "Leo's warmth meets Cancer's nurturing. A protective, loving bond." },
    Virgo: { score: 90, description: "Caring and supportive. You anticipate and meet each other's needs." },
    Libra: { score: 65, description: "Both seek harmony. Finding your unique balance creates something special." },
    Scorpio: { score: 95, description: "Water sign magic! Emotional depth and passionate connection." },
    Sagittarius: { score: 55, description: "Freedom vs. security. Growth comes through understanding differences." },
    Capricorn: { score: 85, description: "Opposite signs, perfect balance. Cancer nurtures, Capricorn provides." },
    Aquarius: { score: 55, description: "Different emotional languages, but unique perspectives to share." },
    Pisces: { score: 95, description: "Soulmate potential! Two water signs swimming in deep love." },
  },
  Leo: {
    Aries: { score: 95, description: "Fire sign royalty! Passion, loyalty, and adventure await." },
    Taurus: { score: 70, description: "Both love luxury. Compromise on stubbornness, thrive on loyalty." },
    Gemini: { score: 90, description: "Fun and playful! You light up each other's worlds." },
    Cancer: { score: 75, description: "Leo protects, Cancer nurtures. A warm, loving home together." },
    Leo: { score: 80, description: "Two stars shining! Take turns in the spotlight for harmony." },
    Virgo: { score: 65, description: "Leo's confidence meets Virgo's care. You help each other grow." },
    Libra: { score: 90, description: "Glamour and harmony! You're the couple everyone admires." },
    Scorpio: { score: 70, description: "Intense and powerful. Both loyal to the core." },
    Sagittarius: { score: 95, description: "Fire sign adventure! Life is never boring together." },
    Capricorn: { score: 60, description: "Different paths to success, but mutual respect runs deep." },
    Aquarius: { score: 75, description: "Opposite signs with magnetic attraction. Creative and unique together." },
    Pisces: { score: 70, description: "Leo's strength and Pisces' dreams create beautiful magic." },
  },
  Virgo: {
    Aries: { score: 55, description: "Patience required. You can teach each other valuable lessons." },
    Taurus: { score: 90, description: "Practical perfection! Shared values create lasting harmony." },
    Gemini: { score: 70, description: "Mercury's children! Intellectual stimulation keeps you connected." },
    Cancer: { score: 90, description: "Caring and supportive. You nurture each other beautifully." },
    Leo: { score: 65, description: "Different styles, but you balance each other's strengths." },
    Virgo: { score: 80, description: "You understand each other deeply. A peaceful, organized love." },
    Libra: { score: 70, description: "Both appreciate beauty and balance. Harmony through effort." },
    Scorpio: { score: 90, description: "Deep and loyal. You share a love for truth and growth." },
    Sagittarius: { score: 60, description: "Different worldviews, but learning from each other is rewarding." },
    Capricorn: { score: 95, description: "Earth sign excellence! Practical, devoted, and strong together." },
    Aquarius: { score: 55, description: "Mind over emotion. You challenge each other to grow." },
    Pisces: { score: 80, description: "Opposite signs that complete each other. Dreams meet reality." },
  },
  Libra: {
    Aries: { score: 70, description: "Opposite attraction! You balance each other's extremes beautifully." },
    Taurus: { score: 75, description: "Venus-ruled romance! Beauty and pleasure abound." },
    Gemini: { score: 95, description: "Air sign harmony! Conversation and connection flow naturally." },
    Cancer: { score: 65, description: "Both seek peace. Finding your unique harmony creates magic." },
    Leo: { score: 90, description: "A glamorous pair! You adore and admire each other." },
    Virgo: { score: 70, description: "Balance through differences. You refine each other." },
    Libra: { score: 85, description: "Double the charm, double the diplomacy. A harmonious match." },
    Scorpio: { score: 75, description: "Intrigue and attraction. Depth meets social grace." },
    Sagittarius: { score: 85, description: "Fun and philosophical! Great conversations and adventures." },
    Capricorn: { score: 65, description: "Different priorities, but mutual respect creates understanding." },
    Aquarius: { score: 95, description: "Air sign perfection! Intellectually and socially aligned." },
    Pisces: { score: 75, description: "Dreamers in love. You create beauty together." },
  },
  Scorpio: {
    Aries: { score: 65, description: "Intense passion! Both strong-willed, requiring compromise." },
    Taurus: { score: 85, description: "Magnetic attraction of opposites. Deep, transformative love." },
    Gemini: { score: 55, description: "Mystery meets curiosity. Intriguing but challenging." },
    Cancer: { score: 95, description: "Water sign depth! Emotional understanding runs deep." },
    Leo: { score: 70, description: "Power couple potential. Loyalty is your strongest bond." },
    Virgo: { score: 90, description: "Trust and growth. You evolve beautifully together." },
    Libra: { score: 75, description: "Balance meets intensity. An interesting dynamic." },
    Scorpio: { score: 90, description: "Ultimate intensity! Deep understanding and passion." },
    Sagittarius: { score: 60, description: "Freedom vs. depth. Growth through understanding." },
    Capricorn: { score: 90, description: "Power and determination. You conquer the world together." },
    Aquarius: { score: 65, description: "Fixed signs clash. But unique perspectives attract." },
    Pisces: { score: 95, description: "Water sign magic! Intuitive, passionate, soulful love." },
  },
  Sagittarius: {
    Aries: { score: 90, description: "Fire sign adventure! Endless exploration together." },
    Taurus: { score: 55, description: "Different desires, but compromise brings growth." },
    Gemini: { score: 85, description: "Opposite signs that spark! Learning never stops." },
    Cancer: { score: 55, description: "Home vs. adventure. Balance creates understanding." },
    Leo: { score: 95, description: "Fire sign fun! Joy and passion overflow." },
    Virgo: { score: 60, description: "Different approaches. Patience reveals hidden connections." },
    Libra: { score: 85, description: "Adventure and elegance! You enjoy life together." },
    Scorpio: { score: 60, description: "Depth meets freedom. Respect builds bridges." },
    Sagittarius: { score: 90, description: "Double the adventure! The world is your playground." },
    Capricorn: { score: 65, description: "Fun meets focus. You achieve more together." },
    Aquarius: { score: 90, description: "Freedom and ideas! Progressive, exciting partnership." },
    Pisces: { score: 75, description: "Dreamers and explorers. Spiritual connection runs deep." },
  },
  Capricorn: {
    Aries: { score: 60, description: "Action meets strategy. Together you're unstoppable." },
    Taurus: { score: 95, description: "Earth sign excellence! Building an empire of love." },
    Gemini: { score: 60, description: "Structure meets spontaneity. Balance is possible." },
    Cancer: { score: 85, description: "Opposite signs, perfect fit. Security and nurturing align." },
    Leo: { score: 60, description: "Ambition meets confidence. Mutual respect is key." },
    Virgo: { score: 95, description: "Practical perfection! A reliable, devoted partnership." },
    Libra: { score: 65, description: "Business meets pleasure. You can have both." },
    Scorpio: { score: 90, description: "Power couple! Determination and loyalty united." },
    Sagittarius: { score: 65, description: "Teacher and student. You expand each other's worlds." },
    Capricorn: { score: 85, description: "Shared ambitions! Building a legacy together." },
    Aquarius: { score: 70, description: "Tradition meets innovation. Unique but workable." },
    Pisces: { score: 80, description: "Dreams meet reality. You make magic practical." },
  },
  Aquarius: {
    Aries: { score: 80, description: "Independent spirits! You respect each other's freedom." },
    Taurus: { score: 50, description: "Very different needs, but growth is possible." },
    Gemini: { score: 95, description: "Mental connection unmatched! Brilliant together." },
    Cancer: { score: 55, description: "Emotion vs. logic. Understanding bridges the gap." },
    Leo: { score: 75, description: "Opposite attraction! Creative and unique together." },
    Virgo: { score: 55, description: "Different approaches to life. Learning is mutual." },
    Libra: { score: 95, description: "Air sign perfection! Harmony of minds." },
    Scorpio: { score: 65, description: "Mystery attracts. Depth meets innovation." },
    Sagittarius: { score: 90, description: "Freedom lovers unite! Adventure and ideas flow." },
    Capricorn: { score: 70, description: "Innovation meets tradition. A unique partnership." },
    Aquarius: { score: 85, description: "Kindred spirits! You understand each other's quirks." },
    Pisces: { score: 70, description: "Dreamers and visionaries. You inspire each other." },
  },
  Pisces: {
    Aries: { score: 65, description: "Fire and water. Passion requires patience." },
    Taurus: { score: 85, description: "Romance and stability. A beautiful, gentle love." },
    Gemini: { score: 65, description: "Imagination meets intellect. Creative potential." },
    Cancer: { score: 95, description: "Water sign soulmates! Deep emotional connection." },
    Leo: { score: 70, description: "Dreams meet drama. Creative and passionate." },
    Virgo: { score: 80, description: "Opposite signs complete each other. Magical balance." },
    Libra: { score: 75, description: "Romance and beauty. You create art together." },
    Scorpio: { score: 95, description: "Intuitive and deep. Soulful, transformative love." },
    Sagittarius: { score: 75, description: "Spiritual seekers. Adventure in mind and soul." },
    Capricorn: { score: 80, description: "Dreams meet reality. You build magic together." },
    Aquarius: { score: 70, description: "Visionaries united. You see beyond the ordinary." },
    Pisces: { score: 90, description: "Two fish swimming in love. Deep, mystical connection." },
  },
};

const ZodiacCompatibility = () => {
  const [sign1, setSign1] = useState<string>("");
  const [sign2, setSign2] = useState<string>("");
  const [result, setResult] = useState<{ score: number; description: string } | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateCompatibility = () => {
    if (!sign1 || !sign2) return;
    
    setShowResult(false);
    const compatibility = compatibilityMatrix[sign1]?.[sign2];
    
    setTimeout(() => {
      setResult(compatibility || { score: 70, description: "A unique connection worth exploring!" });
      setShowResult(true);
    }, 500);
  };

  const getSign = (name: string) => zodiacSigns.find(s => s.name === name);

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 75) return "text-primary";
    if (score >= 60) return "text-gold";
    return "text-muted-foreground";
  };

  return (
    <section id="zodiac" className="w-full py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Calculator Card */}
        <div className="card-romantic rounded-2xl p-8 md:p-10 max-w-xl mx-auto">
          <div className="space-y-6">
            {/* Sign Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="sign1-select" className="text-sm font-medium text-foreground">Your Sign</label>
                <Select value={sign1} onValueChange={setSign1}>
                  <SelectTrigger className="h-14 rounded-xl border-2 border-border focus:border-primary bg-background/50" aria-label="Select your zodiac sign">
                    <SelectValue placeholder="Select your sign" />
                  </SelectTrigger>
                  <SelectContent>
                    {zodiacSigns.map((sign) => (
                      <SelectItem key={sign.name} value={sign.name}>
                        <span className="flex items-center gap-2">
                          <span className="text-xl">{sign.symbol}</span>
                          <span>{sign.name}</span>
                          <span className="text-xs text-muted-foreground">({sign.dates})</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="sign2-select" className="text-sm font-medium text-foreground">Partner's Sign</label>
                <Select value={sign2} onValueChange={setSign2}>
                  <SelectTrigger className="h-14 rounded-xl border-2 border-border focus:border-primary bg-background/50" aria-label="Select partner's zodiac sign">
                    <SelectValue placeholder="Select their sign" />
                  </SelectTrigger>
                  <SelectContent>
                    {zodiacSigns.map((sign) => (
                      <SelectItem key={sign.name} value={sign.name}>
                        <span className="flex items-center gap-2">
                          <span className="text-xl">{sign.symbol}</span>
                          <span>{sign.name}</span>
                          <span className="text-xs text-muted-foreground">({sign.dates})</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Calculate Button */}
            <Button
              onClick={calculateCompatibility}
              disabled={!sign1 || !sign2}
              className="w-full h-14 text-lg font-semibold rounded-xl btn-romantic text-primary-foreground border-0"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Check Cosmic Compatibility
            </Button>

            {/* Result Display */}
            {result && showResult && (
              <div className="mt-6 animate-fade-in-up">
                <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary to-muted">
                  {/* Signs Display */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="text-center">
                      <span className="text-4xl">{getSign(sign1)?.symbol}</span>
                      <p className="text-sm font-medium text-foreground mt-1">{sign1}</p>
                    </div>
                    <Heart className="w-6 h-6 text-heart-red fill-heart-red animate-pulse-heart" />
                    <div className="text-center">
                      <span className="text-4xl">{getSign(sign2)?.symbol}</span>
                      <p className="text-sm font-medium text-foreground mt-1">{sign2}</p>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="mb-4">
                    <span className={`text-5xl font-display font-bold ${getScoreColor(result.score)}`}>
                      {result.score}%
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">Compatibility Score</p>
                  </div>

                  {/* Elements */}
                  <div className="flex justify-center gap-4 mb-4 text-xs text-muted-foreground">
                    <span className="px-3 py-1 rounded-full bg-background/50">
                      {getSign(sign1)?.element} + {getSign(sign2)?.element}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-foreground">{result.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Zodiac Quick Reference */}
        <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {zodiacSigns.map((sign) => (
            <div
              key={sign.name}
              className="text-center p-4 rounded-xl bg-card/50 hover:bg-card transition-colors cursor-default"
            >
              <span className="text-2xl block mb-1">{sign.symbol}</span>
              <span className="text-xs font-medium text-foreground">{sign.name}</span>
              <span className="text-[10px] text-muted-foreground block">{sign.element}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacCompatibility;
