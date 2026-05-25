import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ZodiacCompatibility from "@/components/ZodiacCompatibility";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import BlogPreview from "@/components/BlogPreview";
import ShareButtons from "@/components/ShareButtons";
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
        keywords="zodiac compatibility, star sign compatibility, astrology love match, zodiac love, horoscope compatibility, zodiac signs love"
        dateModified="2026-05-25"
        faqSchema={[
          { question: "Which zodiac signs are most compatible?", answer: "Signs of the same element pair well: Fire (Aries, Leo, Sagittarius), Earth (Taurus, Virgo, Capricorn), Air (Gemini, Libra, Aquarius), and Water (Cancer, Scorpio, Pisces). Classic high-compatibility pairings include Aries & Leo, Taurus & Virgo, Gemini & Libra, and Scorpio & Pisces." },
          { question: "Is zodiac compatibility accurate?", answer: "Zodiac compatibility is based on traditional astrology and is intended for entertainment and self-reflection. Real relationship compatibility depends on communication, shared values, and mutual respect. Use it as a fun and insightful starting point!" },
          { question: "What are the 4 elements in astrology?", answer: "The four elements are Fire (bold & passionate), Earth (stable & practical), Air (intellectual & communicative), and Water (emotional & intuitive). Each element governs three zodiac signs and shapes how they approach love and relationships." },
          { question: "Can incompatible signs have a great relationship?", answer: "Absolutely. Astrology highlights tendencies, not destinies. Many couples with challenging sign combinations thrive because of strong communication, mutual respect, and genuine effort. Opposite signs often create powerful, balancing partnerships." },
          { question: "Is the zodiac compatibility checker free?", answer: "Yes, completely free! Simply select your zodiac sign and your partner's sign, and you'll instantly see your compatibility score and a detailed description. No sign-up or payment required." },
        ]}
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
          <div className="max-w-4xl mx-auto">
            <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What Is Zodiac Compatibility? ⭐
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Zodiac compatibility</strong> is the ancient art of determining how well two people connect based on their astrological signs. Each of the 12 zodiac signs belongs to one of four elements — Fire, Earth, Air, and Water — and these elements play a crucial role in determining relationship dynamics. Our free <strong>zodiac compatibility checker</strong> analyzes both signs and reveals how the stars align for your love life.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  For thousands of years, civilizations across the world have looked to the stars for guidance in matters of the heart. From the ancient Babylonians who first mapped the zodiac to modern astrologers who study planetary transits, the belief that celestial bodies influence human relationships has persisted across cultures and centuries. Whether you're a firm believer or simply curious, exploring your <strong>star sign compatibility</strong> offers a fascinating lens through which to view your relationships.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How Does Zodiac Compatibility Work? 🔮
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our <strong>zodiac compatibility</strong> tool evaluates the natural affinity between two signs based on their elemental qualities. Fire signs (Aries, Leo, Sagittarius) are passionate and energetic. Earth signs (Taurus, Virgo, Capricorn) are practical and grounded. Air signs (Gemini, Libra, Aquarius) are intellectual and communicative. Water signs (Cancer, Scorpio, Pisces) are emotional and intuitive.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Signs sharing the same element typically understand each other deeply, while complementary elements (Fire-Air, Earth-Water) often create dynamic and exciting partnerships. Even seemingly "incompatible" signs can build beautiful relationships — astrology simply highlights potential strengths and challenges. The key is always communication, respect, and genuine effort from both partners.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Which Zodiac Signs Are Most Compatible? 💑
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  While every combination has unique strengths, some pairings are naturally harmonious. <strong>Aries and Leo</strong> share a fiery passion that keeps things exciting. <strong>Taurus and Cancer</strong> create a nurturing, stable home together. <strong>Gemini and Libra</strong> never run out of things to talk about. <strong>Scorpio and Pisces</strong> share an emotional depth that creates an almost psychic connection.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Opposite signs on the zodiac wheel often experience powerful attraction too — think <strong>Aries and Libra</strong>, or <strong>Taurus and Scorpio</strong>. These pairings bring balance, with each partner offering qualities the other lacks. It's the cosmic principle of "opposites attract," and when it works, the results can be magical. Try our checker with your partner's sign and discover what the stars say about your unique connection!
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Beyond Sun Signs: The Full Picture 🌙
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your sun sign is just the beginning of your astrological profile. Your <strong>Moon sign</strong> reveals your emotional nature — how you process feelings and what you need to feel secure in a relationship. Your <strong>Venus sign</strong> shows how you express love and what you find attractive. And your <strong>Rising sign</strong> influences the first impression you make on potential partners.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  A complete <strong>compatibility analysis</strong> would consider all these factors, but even sun sign compatibility provides valuable insights. Many couples find that understanding their astrological differences helps them communicate better and appreciate each other's unique qualities. It's not about predicting the future — it's about understanding yourself and your partner on a deeper level.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Astrology and Modern Love ✨
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In today's world, astrology is more popular than ever. Dating apps now include zodiac signs in profiles, and millions check their horoscopes daily for romantic guidance. While science doesn't support astrological predictions, the self-reflection that astrology encourages is genuinely valuable. Thinking about your emotional patterns, communication style, and relationship needs — that's always worthwhile, stars or no stars.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  After checking your <strong>zodiac compatibility</strong>, explore more of our love tools! Read your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Love Horoscope</Link> for today's predictions, test your names with the <Link to="/" className="text-primary hover:underline">Love Calculator</Link>, or discover your romantic personality with the <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link>. Each tool offers a different perspective on your love life — and they're all completely free!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Which zodiac signs are most compatible?</h3>
                <p className="text-muted-foreground text-sm">Signs of the same element pair well: Fire (Aries, Leo, Sagittarius), Earth (Taurus, Virgo, Capricorn), Air (Gemini, Libra, Aquarius), and Water (Cancer, Scorpio, Pisces). Classic high-compatibility pairings include Aries & Leo, Taurus & Virgo, Gemini & Libra, and Scorpio & Pisces.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is zodiac compatibility accurate?</h3>
                <p className="text-muted-foreground text-sm">Zodiac compatibility is based on traditional astrology and is intended for entertainment and self-reflection. Real relationship compatibility depends on communication, shared values, and mutual respect. Use it as a fun and insightful starting point!</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What are the 4 elements in astrology?</h3>
                <p className="text-muted-foreground text-sm">The four elements are Fire (bold & passionate), Earth (stable & practical), Air (intellectual & communicative), and Water (emotional & intuitive). Each element governs three zodiac signs and shapes how they approach love and relationships.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can "incompatible" signs have a great relationship?</h3>
                <p className="text-muted-foreground text-sm">Absolutely. Astrology highlights tendencies, not destinies. Many couples with "challenging" sign combinations thrive because of strong communication, mutual respect, and genuine effort. Opposite signs often create powerful, balancing partnerships.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is this zodiac checker free to use?</h3>
                <p className="text-muted-foreground text-sm">Yes, completely free! Simply select your zodiac sign and your partner's sign, and you'll instantly see your compatibility score and a detailed description. No sign-up, no payment required.</p>
              </div>
            </div>
          </div>
        </section>

        <ShareButtons title="Zodiac Compatibility" description="Check your star sign love match for free!" />
        <BlogPreview />

        <InternalLinks currentPage="/zodiac-compatibility" />
      </main>
      
      <Footer />
    </div>
  );
};

export default ZodiacCompatibilityPage;
