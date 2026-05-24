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
          <div className="max-w-4xl mx-auto">
            <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What Is the Daily Love Horoscope? 🌟
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our <strong>daily love horoscope</strong> delivers fresh, personalized romantic predictions based on your zodiac sign every single day. Whether you're an adventurous Aries, a loyal Taurus, or a mysterious Scorpio, your horoscope offers insights about your love energy, potential romantic encounters, and relationship guidance. It's your daily dose of cosmic wisdom for matters of the heart.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Each reading includes your love forecast, a lucky number for the day, your best zodiac match, and practical romantic advice. Millions of people start their day by checking their horoscope — and for good reason. Even if you don't take it literally, a <strong>daily horoscope</strong> encourages you to pause, reflect on your emotional state, and approach your relationships with intention and awareness.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How Are Love Horoscopes Created? ✍️
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional <strong>love horoscopes</strong> are inspired by the positions of celestial bodies — the Sun, Moon, Venus (the planet of love), and Mars (the planet of passion). Astrologers interpret how these planetary movements influence each zodiac sign's emotional energy and romantic prospects on any given day. Our horoscopes draw from these ancient principles to deliver meaningful, thoughtful readings.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  While our readings are designed for entertainment, the themes they explore — communication, vulnerability, patience, passion — are genuinely relevant to building healthy relationships. Think of your <strong>daily horoscope</strong> as a conversation starter with yourself about what you want and need in love. Sometimes the universe's "advice" is exactly the permission you needed to text that person back or plan a surprise date.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Understanding Your Zodiac Sign in Love 💫
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Each zodiac sign approaches love differently. <strong>Fire signs</strong> (Aries, Leo, Sagittarius) love with intensity and passion — they're bold, expressive, and always ready for adventure. <strong>Earth signs</strong> (Taurus, Virgo, Capricorn) build love slowly and steadily — they value loyalty, consistency, and tangible expressions of affection.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  <strong>Air signs</strong> (Gemini, Libra, Aquarius) connect through conversation and intellectual stimulation — they need a partner who keeps their mind engaged. <strong>Water signs</strong> (Cancer, Scorpio, Pisces) feel love deeply and intuitively — they crave emotional security and meaningful intimacy. Understanding your element helps you read your horoscope with greater personal insight.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Read Your Love Horoscope Daily? 📖
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reading your <strong>daily love horoscope</strong> is more than a habit — it's a moment of mindfulness. In our busy, screen-filled lives, taking 30 seconds to think about your emotional state and romantic intentions is genuinely valuable. Your horoscope acts as a gentle nudge to be present in your relationships, to express gratitude, and to stay open to love in all its forms.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Many couples read their horoscopes together over morning coffee — it's a sweet daily ritual that sparks conversation and connection. Even skeptics enjoy the playfulness of checking whether their "lucky number" comes up or if their predicted "best match" is someone they know. It's lighthearted, fun, and keeps the romantic energy flowing.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Explore More Cosmic Love Tools ✨
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your <strong>daily horoscope</strong> is just one piece of the astrological puzzle. For deeper insights, check your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> with your partner, take the <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link> to discover your romantic personality, or ask the <Link to="/love-fortune-ball" className="text-primary hover:underline">Love Fortune Ball</Link> a burning question about your love life. The stars have so much to tell you — all you have to do is listen.
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
