import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoupleNameGenerator from "@/components/CoupleNameGenerator";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const CoupleNameGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-foreground">
                Celebrity Style Names
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Couple Name <span className="text-gradient">Generator</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Create fun celebrity-style couple names like "Brangelina"! 💑
            </p>
          </div>
        </section>

        <CoupleNameGenerator />

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About Couple Name Generator
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How Does the Couple Name Generator Work?</h3>
                <p className="text-muted-foreground text-sm">
                  Our generator combines parts of both names to create unique, celebrity-style couple names — just like "Brangelina" (Brad + Angelina) or "Bennifer" (Ben + Jennifer)! Simply enter both names and get multiple creative mashup suggestions instantly. It's a fun way to celebrate your relationship!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Why Create a Couple Name?</h3>
                <p className="text-muted-foreground text-sm">
                  Couple names have become a huge trend, from celebrity culture to social media. Having a unique couple name makes your relationship feel special and gives you a fun identity as a pair. Use it as your social media handle, inside joke, or even for wedding hashtags! First, test your compatibility with our <Link to="/love-calculator" className="text-primary hover:underline">Love Calculator</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Famous Celebrity Couple Names</h3>
                <p className="text-muted-foreground text-sm">
                  The trend started with Hollywood — "TomKat" (Tom Cruise + Katie Holmes), "Kimye" (Kim + Kanye), and many more. Now everyone wants their own mashup name! Our generator creates multiple options so you can pick your favorite. For more couple fun, check out our <Link to="/kids-name-generator" className="text-primary hover:underline">Kids Name Generator</Link> for future baby name ideas.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Share Your Couple Name</h3>
                <p className="text-muted-foreground text-sm">
                  Found the perfect couple name? Share it with your partner and friends! It makes a great social media bio, profile name, or even a personalized gift idea. Pair your couple name with your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> results for the ultimate relationship profile.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">More Romantic Tools</h3>
                <p className="text-muted-foreground text-sm">
                  Explore our full suite of love tools! Take the <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link>, read your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Horoscope</Link>, ask the <Link to="/love-fortune-ball" className="text-primary hover:underline">Fortune Ball</Link> a question, or read our <Link to="/blog" className="text-primary hover:underline">Love Blog</Link> for relationship tips and zodiac guides.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/couple-name-generator" />
      </main>
      
      <Footer />
    </div>
  );
};

export default CoupleNameGeneratorPage;
