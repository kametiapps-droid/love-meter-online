import { useState } from "react";
import { Baby, Stars, Sparkles, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const zodiacData = {
  Aries: { element: "Fire", traits: ["Bold", "Energetic", "Courageous"], boyNames: ["Aaron", "Aiden", "Marcus", "Victor", "Leo"], girlNames: ["Aurora", "Aria", "Victoria", "Scarlett", "Ruby"] },
  Taurus: { element: "Earth", traits: ["Reliable", "Patient", "Devoted"], boyNames: ["Theodore", "Oliver", "Benjamin", "Henry", "Charles"], girlNames: ["Rose", "Violet", "Daisy", "Ivy", "Hazel"] },
  Gemini: { element: "Air", traits: ["Curious", "Adaptable", "Witty"], boyNames: ["Felix", "Oscar", "Julian", "Miles", "Hugo"], girlNames: ["Gemma", "Luna", "Stella", "Iris", "Celeste"] },
  Cancer: { element: "Water", traits: ["Nurturing", "Intuitive", "Protective"], boyNames: ["Noah", "Sebastian", "Lucas", "Dylan", "River"], girlNames: ["Marina", "Pearl", "Luna", "Selene", "Coral"] },
  Leo: { element: "Fire", traits: ["Creative", "Passionate", "Generous"], boyNames: ["Leo", "Leonardo", "Lionel", "Rex", "King"], girlNames: ["Leona", "Regina", "Goldie", "Sunny", "Blaze"] },
  Virgo: { element: "Earth", traits: ["Analytical", "Practical", "Gentle"], boyNames: ["Vincent", "Victor", "Virgil", "Dean", "Grant"], girlNames: ["Virginia", "Vera", "Grace", "Hope", "Faith"] },
  Libra: { element: "Air", traits: ["Diplomatic", "Graceful", "Harmonious"], boyNames: ["Justice", "Jasper", "Lance", "Pierce", "Felix"], girlNames: ["Libra", "Harmony", "Serena", "Bella", "Grace"] },
  Scorpio: { element: "Water", traits: ["Intense", "Mysterious", "Passionate"], boyNames: ["Phoenix", "Drake", "Damien", "Jett", "Blade"], girlNames: ["Scarlett", "Raven", "Onyx", "Jade", "Ember"] },
  Sagittarius: { element: "Fire", traits: ["Adventurous", "Optimistic", "Freedom-loving"], boyNames: ["Archer", "Hunter", "Chase", "Journey", "Quest"], girlNames: ["Sage", "Meadow", "Willow", "Journey", "Phoenix"] },
  Capricorn: { element: "Earth", traits: ["Ambitious", "Disciplined", "Responsible"], boyNames: ["Alexander", "William", "Edward", "George", "James"], girlNames: ["Alexandra", "Elizabeth", "Victoria", "Charlotte", "Margaret"] },
  Aquarius: { element: "Air", traits: ["Innovative", "Independent", "Humanitarian"], boyNames: ["Orion", "Atlas", "Zephyr", "Storm", "River"], girlNames: ["Aqua", "Rain", "Sky", "Nova", "Luna"] },
  Pisces: { element: "Water", traits: ["Compassionate", "Artistic", "Intuitive"], boyNames: ["Ocean", "Dylan", "Finn", "Kai", "Neptune"], girlNames: ["Marina", "Coral", "Pearl", "Misty", "Azure"] }
};

const getZodiacSign = (day: number, month: number): string => {
  const dates: [string, number, number][] = [
    ["Capricorn", 1, 19], ["Aquarius", 2, 18], ["Pisces", 3, 20],
    ["Aries", 4, 19], ["Taurus", 5, 20], ["Gemini", 6, 20],
    ["Cancer", 7, 22], ["Leo", 8, 22], ["Virgo", 9, 22],
    ["Libra", 10, 22], ["Scorpio", 11, 21], ["Sagittarius", 12, 21], ["Capricorn", 12, 31]
  ];

  for (let i = 0; i < dates.length; i++) {
    if (month === dates[i][1] && day <= dates[i][2]) {
      return dates[i][0];
    }
    if (month < dates[i][1]) {
      return dates[i === 0 ? 0 : i - 1][0];
    }
  }
  return "Capricorn";
};

const KidsNameGenerator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState<"boy" | "girl" | "both">("both");
  const [result, setResult] = useState<{
    zodiac: string;
    element: string;
    traits: string[];
    names: string[];
  } | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!birthDate) {
      toast({
        title: "Select birth date",
        description: "Please select the expected birth date!",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      const date = new Date(birthDate);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const zodiac = getZodiacSign(day, month);
      const data = zodiacData[zodiac as keyof typeof zodiacData];

      let names: string[] = [];
      if (gender === "boy") {
        names = data.boyNames;
      } else if (gender === "girl") {
        names = data.girlNames;
      } else {
        names = [...data.boyNames.slice(0, 3), ...data.girlNames.slice(0, 3)];
      }

      setResult({
        zodiac,
        element: data.element,
        traits: data.traits,
        names: names.sort(() => Math.random() - 0.5).slice(0, 6),
      });
      setIsGenerating(false);
    }, 1000);
  };

  const elementColors: Record<string, string> = {
    Fire: "text-orange-500",
    Earth: "text-green-600",
    Air: "text-sky-500",
    Water: "text-blue-500",
  };

  return (
    <section id="kids-names" className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <Baby className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Astrology Based</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Kids Name <span className="text-gradient">Generator</span>
          </h2>
          <p className="text-muted-foreground">
            Find perfect baby names based on zodiac sign and astrology! 🌟
          </p>
        </div>

        <div className="card-romantic rounded-2xl p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Expected Birth Date
              </label>
              <Input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Gender</label>
              <div className="grid grid-cols-3 gap-3">
                {(["boy", "girl", "both"] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`p-3 rounded-xl border-2 transition-all font-medium capitalize ${
                      gender === g
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-background/50 text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    {g === "both" ? "Both" : g === "boy" ? "👦 Boy" : "👧 Girl"}
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full btn-romantic text-primary-foreground font-semibold py-6 rounded-xl"
            >
              {isGenerating ? (
                <RefreshCw className="w-5 h-5 animate-spin mr-2" />
              ) : (
                <Stars className="w-5 h-5 mr-2" />
              )}
              {isGenerating ? "Consulting Stars..." : "Generate Names"}
            </Button>
          </div>

          {result && (
            <div className="mt-8 animate-fade-in-up">
              <div className="text-center mb-6 p-4 rounded-xl bg-secondary/50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className={`w-5 h-5 ${elementColors[result.element]}`} />
                  <span className="font-display text-2xl font-bold text-foreground">
                    {result.zodiac}
                  </span>
                </div>
                <p className={`text-sm font-medium ${elementColors[result.element]}`}>
                  {result.element} Sign
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {result.traits.map((trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-center font-display text-xl font-semibold text-foreground mb-4">
                Suggested Names ✨
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {result.names.map((name, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-secondary/50 border border-border text-center hover:border-primary/50 transition-colors"
                  >
                    <span className="font-display text-lg font-semibold text-gradient">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KidsNameGenerator;
