import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveFortuneBall from "@/components/LoveFortuneBall";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const LoveFortuneBallPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Love Fortune Ball - Ask a Love Question & Get Your Answer"
        description="Shake the magic Love Fortune Ball and get instant answers to your love questions. A fun, mystical love prediction tool for entertainment."
        path="/love-fortune-ball"
      />
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
                <h3 className="font-semibold text-foreground mb-2">How Does the Love Fortune Ball Work?</h3>
                <p className="text-muted-foreground text-sm">
                  The Love Fortune Ball is like a mystical Magic 8 Ball designed specifically for love questions! Simply type any yes or no question about your love life, and the fortune ball will reveal your destiny with a magical, animated answer. It's the perfect tool when you need a quick, fun answer to your burning romantic questions.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What Questions Can I Ask?</h3>
                <p className="text-muted-foreground text-sm">
                  You can ask any yes or no question about love! Popular questions include: "Does my crush like me?", "Will I find love this year?", "Is my partner my soulmate?", "Should I make the first move?" The fortune ball provides mystical answers to guide your love journey. For a more detailed love analysis, try our <Link to="/love-calculator" className="text-primary hover:underline">Love Calculator</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">The Magic Behind Fortune Telling</h3>
                <p className="text-muted-foreground text-sm">
                  Fortune telling has fascinated people for centuries. From crystal balls to tarot cards, humans have always sought guidance about love and the future. Our Love Fortune Ball brings this ancient tradition into the digital age with a fun, modern twist. For astrological guidance, check your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Love Horoscope</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Fun Ways to Use the Fortune Ball</h3>
                <p className="text-muted-foreground text-sm">
                  Use the fortune ball at parties, sleepovers, or date nights for endless entertainment! Ask questions together with friends and compare your fortunes. It's also great for making fun decisions — "Should we go on a spontaneous date?" Pair it with our <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> checker for a complete love reading experience.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">More Love Tools to Explore</h3>
                <p className="text-muted-foreground text-sm">
                  Love the Fortune Ball? We have plenty more love tools! Discover your romantic personality with our <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link>, create a cute <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name</Link>, or find future <Link to="/kids-name-generator" className="text-primary hover:underline">Baby Names</Link>. For fun, try our <Link to="/love-game" className="text-primary hover:underline">Love Hearts Catch Game</Link> too!
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/love-fortune-ball" />
      </main>
      
      <Footer />
    </div>
  );
};

export default LoveFortuneBallPage;
