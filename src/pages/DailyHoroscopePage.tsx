import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DailyHoroscope from "@/components/DailyHoroscope";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Sun } from "lucide-react";
import { Link } from "react-router-dom";

const DailyHoroscopePage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Daily Love Horoscope - Free Zodiac Reading for Today"
        description="Read your free daily love horoscope. Get personalized zodiac predictions for romance, relationships, and love life based on your star sign."
        path="/daily-horoscope"
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Sun className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Daily Predictions
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Daily Love <span className="text-gradient">Horoscope</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your personalized love predictions based on your zodiac sign! 🌟
            </p>
          </div>
        </section>

        <DailyHoroscope />

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About Daily Love Horoscope
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What is the Daily Love Horoscope?</h3>
                <p className="text-muted-foreground text-sm">
                  Our daily love horoscope provides personalized romantic predictions based on your zodiac sign. Each day brings fresh insights about your love life, including lucky numbers, best matches, and romantic advice. Check back daily for new predictions tailored to your astrological sign!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How Are Horoscopes Created?</h3>
                <p className="text-muted-foreground text-sm">
                  Our love horoscopes are inspired by traditional astrological principles, considering planetary positions and zodiac sign characteristics. While designed for entertainment, they offer thoughtful reflections on love and relationships. For deeper zodiac insights, explore our <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> checker.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Why Read Your Love Horoscope?</h3>
                <p className="text-muted-foreground text-sm">
                  Millions of people read their daily horoscope for guidance, inspiration, and fun. Love horoscopes can offer a fresh perspective on your romantic life and help you stay open to new possibilities. Combine your horoscope reading with our <Link to="/love-calculator" className="text-primary hover:underline">Love Calculator</Link> for extra romantic insights!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Understanding Your Zodiac Sign</h3>
                <p className="text-muted-foreground text-sm">
                  Each zodiac sign has unique traits that influence how you approach love. Fire signs are passionate, Earth signs are grounded, Air signs are intellectual, and Water signs are emotional. Learn more about how these elements affect your relationships in our <Link to="/blog/zodiac-compatibility-guide" className="text-primary hover:underline">Complete Zodiac Compatibility Guide</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">More Ways to Explore Love</h3>
                <p className="text-muted-foreground text-sm">
                  Beyond horoscopes, we offer many fun tools to explore your love life! Take our <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link> to discover your romantic personality, ask the <Link to="/love-fortune-ball" className="text-primary hover:underline">Love Fortune Ball</Link> a burning question, or create a fun <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name</Link> with your partner.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/daily-horoscope" />
      </main>
      
      <Footer />
    </div>
  );
};

export default DailyHoroscopePage;
