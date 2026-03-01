import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZodiacCompatibility from "@/components/ZodiacCompatibility";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Stars } from "lucide-react";
import { Link } from "react-router-dom";

const ZodiacCompatibilityPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Zodiac Compatibility - Check Your Star Sign Love Match"
        description="Discover your zodiac love compatibility. Find out which star signs are your best match and explore astrological relationship insights for free."
        path="/zodiac-compatibility"
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Stars className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Astrology Love Match
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Zodiac <span className="text-gradient">Compatibility</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how the stars align for your love life. Check your zodiac compatibility now! ⭐
            </p>
          </div>
        </section>

        <ZodiacCompatibility />

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About Zodiac Compatibility
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How Does Zodiac Compatibility Work?</h3>
                <p className="text-muted-foreground text-sm">
                  Zodiac compatibility is based on traditional astrology that considers the elements (Fire, Earth, Air, Water) and qualities of each sign. Our tool analyzes your zodiac sign alongside your partner's to reveal your astrological compatibility. While fun and insightful, remember that real relationships depend on many factors beyond star signs!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Which Zodiac Signs Are Most Compatible?</h3>
                <p className="text-muted-foreground text-sm">
                  Generally, signs of the same element pair well: Fire signs (Aries, Leo, Sagittarius), Earth signs (Taurus, Virgo, Capricorn), Air signs (Gemini, Libra, Aquarius), and Water signs (Cancer, Scorpio, Pisces). However, opposite signs often have strong attraction too! Read our <Link to="/blog/zodiac-compatibility-guide" className="text-primary hover:underline">Complete Zodiac Compatibility Guide</Link> for in-depth insights.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Understanding Your Zodiac Element</h3>
                <p className="text-muted-foreground text-sm">
                  Each zodiac sign belongs to one of four elements: Fire (passionate and energetic), Earth (practical and grounded), Air (intellectual and communicative), and Water (emotional and intuitive). Understanding your element helps predict relationship dynamics. For daily romantic predictions based on your sign, check your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Love Horoscope</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Beyond Sun Signs</h3>
                <p className="text-muted-foreground text-sm">
                  While sun signs are the most popular, your moon sign reveals your emotional nature and your Venus sign shows how you express love. For a fun name-based compatibility test, try our <Link to="/love-calculator" className="text-primary hover:underline">Love Calculator</Link>. You can also discover your love personality type with our <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link>!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Astrology and Modern Relationships</h3>
                <p className="text-muted-foreground text-sm">
                  Astrology has been used for thousands of years to understand relationships. Today, millions of people check their horoscopes daily for love guidance. Whether you're a firm believer or just curious, our zodiac compatibility tool offers entertaining insights. For relationship building tips, read our <Link to="/blog/love-relationships-guide" className="text-primary hover:underline">Guide to Building Strong Relationships</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/zodiac-compatibility" />
      </main>
      
      <Footer />
    </div>
  );
};

export default ZodiacCompatibilityPage;
