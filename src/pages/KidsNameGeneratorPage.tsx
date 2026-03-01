import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KidsNameGenerator from "@/components/KidsNameGenerator";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Baby } from "lucide-react";
import { Link } from "react-router-dom";

const KidsNameGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Kids Name Generator - Baby Name Ideas Based on Astrology"
        description="Find the perfect baby name with our Kids Name Generator. Get personalized name suggestions based on birth dates and zodiac astrology."
        path="/kids-name-generator"
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Baby className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Future Baby Names
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Kids Name <span className="text-gradient">Generator</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover perfect baby name suggestions inspired by both parents! 👶
            </p>
          </div>
        </section>

        <KidsNameGenerator />

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About Kids Name Generator
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How Does the Kids Name Generator Work?</h3>
                <p className="text-muted-foreground text-sm">
                  Our Kids Name Generator creates unique baby name suggestions by blending elements from both parents' names and considering zodiac influences. Enter both parents' names and birth dates to get personalized baby name ideas. It's a fun and creative way to explore naming options for your future family!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Choosing the Perfect Baby Name</h3>
                <p className="text-muted-foreground text-sm">
                  Choosing a baby name is one of the most exciting parts of expecting a child. Our generator gives you creative starting points by combining elements of both parents' names. While our suggestions are for fun, they might spark inspiration! For more couple fun, try creating a <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name</Link> first.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Names and Astrology</h3>
                <p className="text-muted-foreground text-sm">
                  Many cultures believe that a child's name can influence their personality and destiny. Our generator considers zodiac elements when suggesting names, adding an astrological twist to the naming process. Check your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> to see how the stars align for your family, or read your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Horoscope</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Popular Baby Name Trends</h3>
                <p className="text-muted-foreground text-sm">
                  Baby name trends change every year. Some parents prefer classic, timeless names while others love unique, modern options. Our generator creates both types! Whether you're seriously planning or just dreaming about the future, it's always fun to explore possibilities. Test your love compatibility first with our <Link to="/love-calculator" className="text-primary hover:underline">Love Calculator</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">More Love & Relationship Tools</h3>
                <p className="text-muted-foreground text-sm">
                  Explore our complete collection of love tools! Discover your romantic personality with the <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link>, ask the <Link to="/love-fortune-ball" className="text-primary hover:underline">Fortune Ball</Link> about your future, play our <Link to="/love-game" className="text-primary hover:underline">Love Hearts Game</Link>, or read our <Link to="/blog" className="text-primary hover:underline">Love Blog</Link> for expert relationship advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/kids-name-generator" />
      </main>
      
      <Footer />
    </div>
  );
};

export default KidsNameGeneratorPage;
