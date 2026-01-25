import { useState } from "react";
import { Heart, Sparkles, Copy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const CoupleNameGenerator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [coupleNames, setCoupleNames] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateCoupleNames = (n1: string, n2: string): string[] => {
    const names: string[] = [];
    const name1Lower = n1.toLowerCase().trim();
    const name2Lower = n2.toLowerCase().trim();

    if (name1Lower.length < 2 || name2Lower.length < 2) return names;

    // First half of name1 + second half of name2
    const half1 = Math.ceil(name1Lower.length / 2);
    const half2 = Math.floor(name2Lower.length / 2);
    names.push(capitalize(name1Lower.slice(0, half1) + name2Lower.slice(half2)));

    // First half of name2 + second half of name1
    const half3 = Math.ceil(name2Lower.length / 2);
    const half4 = Math.floor(name1Lower.length / 2);
    names.push(capitalize(name2Lower.slice(0, half3) + name1Lower.slice(half4)));

    // First 2-3 letters of name1 + last 2-3 letters of name2
    const start1 = name1Lower.slice(0, Math.min(3, name1Lower.length));
    const end2 = name2Lower.slice(-Math.min(3, name2Lower.length));
    names.push(capitalize(start1 + end2));

    // First 2-3 letters of name2 + last 2-3 letters of name1
    const start2 = name2Lower.slice(0, Math.min(3, name2Lower.length));
    const end1 = name1Lower.slice(-Math.min(3, name1Lower.length));
    names.push(capitalize(start2 + end1));

    // Blend middle portions
    const mid1 = name1Lower.slice(1, -1) || name1Lower;
    const mid2 = name2Lower.slice(1, -1) || name2Lower;
    names.push(capitalize(name1Lower[0] + mid2 + name1Lower.slice(-1)));

    return [...new Set(names)].slice(0, 5);
  };

  const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleGenerate = () => {
    if (!name1.trim() || !name2.trim()) {
      toast({
        title: "Enter both names",
        description: "Please enter both names to generate couple names!",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setTimeout(() => {
      const names = generateCoupleNames(name1, name2);
      setCoupleNames(names);
      setIsGenerating(false);
    }, 800);
  };

  const copyToClipboard = (name: string) => {
    navigator.clipboard.writeText(name);
    toast({
      title: "Copied! 💕",
      description: `"${name}" copied to clipboard`,
    });
  };

  return (
    <section id="couple-names" className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Celebrity Style Names</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Couple Name <span className="text-gradient">Generator</span>
          </h2>
          <p className="text-muted-foreground">
            Create fun celebrity-style couple names like "Brangelina"! 💑
          </p>
        </div>

        <div className="card-romantic rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
              <Input
                type="text"
                placeholder="Enter first name"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="bg-background/50 border-border focus:border-primary"
                maxLength={20}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Second Name</label>
              <Input
                type="text"
                placeholder="Enter second name"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="bg-background/50 border-border focus:border-primary"
                maxLength={20}
              />
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
              <Heart className="w-5 h-5 mr-2 fill-current" />
            )}
            {isGenerating ? "Creating Magic..." : "Generate Couple Names"}
          </Button>

          {coupleNames.length > 0 && (
            <div className="mt-8 animate-fade-in-up">
              <h3 className="text-center font-display text-xl font-semibold text-foreground mb-4">
                Your Couple Names 💕
              </h3>
              <div className="grid gap-3">
                {coupleNames.map((name, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors group"
                  >
                    <span className="font-display text-xl font-semibold text-gradient">
                      {name}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(name)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
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

export default CoupleNameGenerator;
