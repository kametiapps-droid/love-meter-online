import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveCalculator from "@/components/LoveCalculator";
import FloatingHearts from "@/components/FloatingHearts";
import HomeSEOContent from "@/components/HomeSEOContent";
import ToolCards from "@/components/ToolCards";
import BlogPreview from "@/components/BlogPreview";
import ShareButtons from "@/components/ShareButtons";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Heart, Stars, Sparkles, Shield, Zap, Users, CheckCircle, ArrowRight, Feather, Send, CalendarDays } from "lucide-react";

const stats = [
  { value: "12+", label: "Free Love Tools" },
  { value: "5M+", label: "Tests Taken" },
  { value: "100%", label: "Free Forever" },
  { value: "4.9★", label: "User Rating" },
];

const howItWorks = [
  { step: "1", icon: Heart, title: "Enter Your Names", desc: "Type your name and your partner's name into the love calculator above." },
  { step: "2", icon: Sparkles, title: "Click Calculate", desc: "Our algorithm instantly analyzes the names and generates a unique compatibility score." },
  { step: "3", icon: Stars, title: "Share the Results", desc: "Share your love percentage with your partner or friends — and explore our other tools!" },
];

const features = [
  { icon: Zap, title: "Instant Results", desc: "Get your love percentage in under a second — no waiting, no loading screens." },
  { icon: Shield, title: "100% Private", desc: "We never store the names you enter. Your romantic curiosity stays completely private." },
  { icon: Users, title: "12 Free Tools", desc: "Love calculator, zodiac match, quiz, horoscope, poetry, name generators & more." },
  { icon: CheckCircle, title: "Works Everywhere", desc: "Fully optimised for mobile, tablet, and desktop. Test love from any device." },
];

const loveTips = [
  { emoji: "💬", title: "Communicate Openly", tip: "Share your feelings and listen actively. Honest communication is the heart of every strong relationship." },
  { emoji: "⏰", title: "Quality Time Matters", tip: "Put your phone away and give your partner your full attention. Presence is the greatest gift you can give." },
  { emoji: "🙏", title: "Show Appreciation", tip: "Say 'thank you' and 'I love you' daily. Small gestures of gratitude keep the romance alive for years." },
  { emoji: "🌱", title: "Grow Together", tip: "Support each other's dreams and personal growth. Couples who evolve together stay together." },
  { emoji: "😂", title: "Laugh Together", tip: "Shared laughter is one of the strongest bonding forces. Find joy in the everyday moments you share." },
  { emoji: "❤️‍🩹", title: "Forgive Quickly", tip: "Let go of small grudges. Choosing peace over being right is the secret weapon of lasting love." },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Love Calculator - True Love Compatibility Test"
        description="Free Love Calculator — enter two names to get your love percentage instantly. Plus zodiac compatibility, love quiz, daily horoscope & 12 free romantic tools."
        path="/"
        keywords="love calculator, love percentage, compatibility test, love compatibility test, name love test, true love calculator, free love calculator online, zodiac love compatibility, relationship quiz"
        dateModified="2026-05-25"
        faqSchema={[
          { question: "How does the Love Calculator work?", answer: "Our love calculator uses a fun algorithm that analyzes the names you enter to generate a compatibility percentage. It's designed purely for entertainment and fun!" },
          { question: "Is the Love Calculator accurate?", answer: "The love calculator is meant for entertainment purposes only. Real love and relationships are complex and can't be measured by any algorithm. Use it to have fun with friends and loved ones!" },
          { question: "Is the love percentage real?", answer: "The love percentage is generated for entertainment only. Real love compatibility depends on communication, trust, shared values, and mutual respect — not a number." },
          { question: "How does zodiac compatibility work?", answer: "Zodiac compatibility is based on traditional astrology that considers the elements (Fire, Earth, Air, Water) and qualities of each sign." },
          { question: "Which zodiac signs are most compatible?", answer: "Generally, signs of the same element pair well: Fire signs (Aries, Leo, Sagittarius), Earth signs (Taurus, Virgo, Capricorn), Air signs (Gemini, Libra, Aquarius), and Water signs (Cancer, Scorpio, Pisces)." },
          { question: "What is the Love Style Quiz?", answer: "Our Love Style Quiz helps you discover your unique approach to love and relationships through fun personality questions." },
          { question: "What is the Daily Love Horoscope?", answer: "Our daily love horoscope provides personalized romantic predictions based on your zodiac sign. Check back each day for new insights about your love life!" },
          { question: "Can I share my results?", answer: "Yes! After calculating your love percentage, you can easily share the results with friends, family, or your special someone using the share button." },
        ]}
      />
      <FloatingHearts />
      <Header />

      <main className="flex-1 relative z-10">

        {/* ── Hero + Calculator ── */}
        <section id="calculator" className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Heart className="w-4 h-4 text-heart-red fill-heart-red animate-pulse-heart" />
              <span className="text-sm font-medium text-foreground">#1 Love Calculator Online</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Discover Your
              <span className="text-gradient"> True Love </span>
              Compatibility
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Enter your names below and let the magic reveal your love percentage.
              Find out if you're meant to be together! 💕
            </p>
          </div>
          <LoveCalculator />
        </section>

        {/* ── Stats Strip ── */}
        <section className="py-8 px-4 bg-secondary/40 border-y border-border/30">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</span>
                  <span className="text-sm text-muted-foreground font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-14 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
              How It Works ✨
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Three simple steps to discover your love compatibility
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {howItWorks.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="card-romantic rounded-2xl p-6 text-center relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SEO Content (What Is / How Works / Real / Why Us) ── */}
        <HomeSEOContent />

        {/* ── Features Grid ── */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
              Why Millions Love Us 💖
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
              Everything you need to explore love — all in one place, always free
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="card-romantic rounded-xl p-5 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Tool Cards ── */}
        <ToolCards />

        {/* ── Love Tips ── */}
        <section className="py-14 px-4 bg-secondary/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
              6 Secrets to Lasting Love 💝
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Beyond the love percentage — expert-backed tips for a stronger relationship
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {loveTips.map((tip) => (
                <div key={tip.title} className="card-romantic rounded-xl p-5 hover:scale-[1.02] transition-all duration-200">
                  <div className="text-3xl mb-3">{tip.emoji}</div>
                  <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quick Links to other tools ── */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              More Ways to Explore Love 🌹
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <Link to="/zodiac-compatibility" className="card-romantic rounded-2xl p-6 hover:scale-[1.02] transition-all duration-200 group">
                <Stars className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Zodiac Compatibility</h3>
                <p className="text-sm text-muted-foreground mb-3">See how your star signs align for love and romance.</p>
                <span className="text-xs text-primary font-semibold flex items-center gap-1">Try it free <ArrowRight className="w-3 h-3" /></span>
              </Link>
              <Link to="/love-letter-generator" className="card-romantic rounded-2xl p-6 hover:scale-[1.02] transition-all duration-200 group">
                <Send className="w-8 h-8 text-pink-500 mb-3" />
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Love Letter Generator</h3>
                <p className="text-sm text-muted-foreground mb-3">Create a beautiful romantic letter for your special someone.</p>
                <span className="text-xs text-primary font-semibold flex items-center gap-1">Write a letter <ArrowRight className="w-3 h-3" /></span>
              </Link>
              <Link to="/love-poetry" className="card-romantic rounded-2xl p-6 hover:scale-[1.02] transition-all duration-200 group">
                <Feather className="w-8 h-8 text-rose-500 mb-3" />
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Love Poetry</h3>
                <p className="text-sm text-muted-foreground mb-3">Read beautiful English & Urdu love poems to share.</p>
                <span className="text-xs text-primary font-semibold flex items-center gap-1">Read poems <ArrowRight className="w-3 h-3" /></span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── Share Buttons ── */}
        <ShareButtons title="Love Calculator" description="Free love compatibility test by name — try it now!" />

        {/* ── Blog Preview ── */}
        <BlogPreview />

        {/* ── FAQ ── */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How does the Love Calculator work?</h3>
                <p className="text-muted-foreground text-sm">
                  Our love calculator uses a fun algorithm that analyzes the names you enter to generate a compatibility percentage. It's designed purely for entertainment and fun!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is the Love Calculator accurate?</h3>
                <p className="text-muted-foreground text-sm">
                  The love calculator is meant for entertainment purposes only. Real love and relationships are complex and can't be measured by any algorithm. Use it to have fun with friends and loved ones!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is the love percentage real?</h3>
                <p className="text-muted-foreground text-sm">
                  The love percentage is generated for fun and entertainment only. Real love compatibility depends on communication, trust, shared values, and genuine mutual respect — not a number from an algorithm.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Which zodiac signs are most compatible?</h3>
                <p className="text-muted-foreground text-sm">
                  Generally, signs of the same element pair well: Fire signs (Aries, Leo, Sagittarius), Earth signs (Taurus, Virgo, Capricorn), Air signs (Gemini, Libra, Aquarius), and Water signs (Cancer, Scorpio, Pisces). However, opposite signs often have strong attraction too!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What other love tools are available?</h3>
                <p className="text-muted-foreground text-sm">
                  We offer 12 free love tools: Love Calculator, Zodiac Compatibility, Love Quiz, Daily Horoscope, Fortune Ball, Couple Name Generator, Baby Name Generator, Love Letter Generator, Relationship Timeline, Date Calculator, Stylish Name Generator, and Love Poetry. All completely free!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can I share my results?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! After calculating your love percentage, you can easily share the results with friends, family, or your special someone on WhatsApp, Facebook, Twitter, and more using the share buttons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Date Calculator CTA ── */}
        <section className="py-10 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card-romantic rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-br from-primary/5 to-secondary/30">
              <CalendarDays className="w-12 h-12 text-primary flex-shrink-0" />
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-xl font-bold text-foreground mb-1">How Long Have You Been Together?</h3>
                <p className="text-muted-foreground text-sm">Calculate the exact years, months, and days of your relationship with our free Date Calculator.</p>
              </div>
              <Link
                to="/date-calculator"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #be123c, #f43f5e)", color: "#fff" }}
              >
                Try it <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
