import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveFortuneBall from "@/components/LoveFortuneBall";
import FloatingHearts from "@/components/FloatingHearts";
import { Sparkles } from "lucide-react";

const LoveFortuneBallPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Mystical Fortune Teller
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Love Fortune <span className="text-gradient">Ball</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ask the mystical fortune ball any yes or no question about your love life! 🔮
            </p>
          </div>
        </section>

        <LoveFortuneBall />

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About Love Fortune Ball
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How does the Love Fortune Ball work?</h3>
                <p className="text-muted-foreground text-sm">
                  The Love Fortune Ball is like a mystical Magic 8 Ball for love! Ask any yes or no question about your love life, and the fortune ball will reveal your destiny with a magical answer.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoveFortuneBallPage;
