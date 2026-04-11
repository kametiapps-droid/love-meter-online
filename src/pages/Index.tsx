import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveCalculator from "@/components/LoveCalculator";
import FloatingHearts from "@/components/FloatingHearts";
import AboutSection from "@/components/AboutSection";
import ZodiacCompatibility from "@/components/ZodiacCompatibility";
import LoveQuiz from "@/components/LoveQuiz";
import DailyHoroscope from "@/components/DailyHoroscope";
import LoveFortuneBall from "@/components/LoveFortuneBall";
import CoupleNameGenerator from "@/components/CoupleNameGenerator";
import KidsNameGenerator from "@/components/KidsNameGenerator";
import LoveHeartsCatchGame from "@/components/LoveHeartsCatchGame";
import LoveLetterGenerator from "@/components/LoveLetterGenerator";
import RelationshipTimeline from "@/components/RelationshipTimeline";
import BlogPreview from "@/components/BlogPreview";
import SEO from "@/components/SEO";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Love Calculator - True Love Compatibility Test"
        description="Calculate your love compatibility with our free online Love Calculator. Enter two names and discover your love percentage instantly. Plus zodiac compatibility, love quiz, daily horoscope & more!"
        path="/"
        keywords="love calculator, love compatibility test, love percentage calculator, name love test, true love calculator, free love calculator online, zodiac love compatibility, relationship quiz"
        dateModified="2026-04-09"
        faqSchema={[
          { question: "How does the Love Calculator work?", answer: "Our love calculator uses a fun algorithm that analyzes the names you enter to generate a compatibility percentage. It's designed purely for entertainment and fun!" },
          { question: "Is the Love Calculator accurate?", answer: "The love calculator is meant for entertainment purposes only. Real love and relationships are complex and can't be measured by any algorithm. Use it to have fun with friends and loved ones!" },
          { question: "How does zodiac compatibility work?", answer: "Zodiac compatibility is based on traditional astrology that considers the elements (Fire, Earth, Air, Water) and qualities of each sign." },
          { question: "Which zodiac signs are most compatible?", answer: "Generally, signs of the same element pair well: Fire signs (Aries, Leo, Sagittarius), Earth signs (Taurus, Virgo, Capricorn), Air signs (Gemini, Libra, Aquarius), and Water signs (Cancer, Scorpio, Pisces)." },
          { question: "What is the Love Style Quiz?", answer: "Our Love Style Quiz helps you discover your unique approach to love and relationships through fun personality questions." },
          { question: "What is the Daily Love Horoscope?", answer: "Our daily love horoscope provides personalized romantic predictions based on your zodiac sign. Check back each day for new insights about your love life!" },
          { question: "How does the Love Fortune Ball work?", answer: "The Love Fortune Ball is like a mystical Magic 8 Ball for love! Ask any yes or no question about your love life, and the fortune ball will reveal your destiny." },
          { question: "Can I share my results?", answer: "Yes! After calculating your love percentage, you can easily share the results with friends, family, or your special someone using the share button." },
        ]}
      />
      <FloatingHearts />
      
      <Header />
      
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section id="calculator" className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Heart className="w-4 h-4 text-heart-red fill-heart-red animate-pulse-heart" />
              <span className="text-sm font-medium text-foreground">
                #1 Love Calculator Online
              </span>
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

        <AboutSection />

        <ZodiacCompatibility />

        <LoveQuiz />

        <DailyHoroscope />

        <LoveFortuneBall />

        <CoupleNameGenerator />

        <KidsNameGenerator />

        <LoveHeartsCatchGame />

        <LoveLetterGenerator />

        <RelationshipTimeline />

        {/* Blog Preview Section */}
        <BlogPreview />

        {/* FAQ Section for SEO */}
        <section className="py-12 px-4">
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
                <h3 className="font-semibold text-foreground mb-2">How does zodiac compatibility work?</h3>
                <p className="text-muted-foreground text-sm">
                  Zodiac compatibility is based on traditional astrology that considers the elements (Fire, Earth, Air, Water) and qualities of each sign. While fun and insightful, remember that real relationships depend on many factors beyond star signs!
                </p>
              </div>

              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Which zodiac signs are most compatible?</h3>
                <p className="text-muted-foreground text-sm">
                  Generally, signs of the same element pair well: Fire signs (Aries, Leo, Sagittarius), Earth signs (Taurus, Virgo, Capricorn), Air signs (Gemini, Libra, Aquarius), and Water signs (Cancer, Scorpio, Pisces). However, opposite signs often have strong attraction too!
                </p>
              </div>
              
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What is the Love Style Quiz?</h3>
                <p className="text-muted-foreground text-sm">
                  Our Love Style Quiz helps you discover your unique approach to love and relationships through fun personality questions. Find out if you're a Hopeless Romantic, Thrill Seeker, Caring Soul, Deep Thinker, or Intense Lover!
                </p>
              </div>
              
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What is the Daily Love Horoscope?</h3>
                <p className="text-muted-foreground text-sm">
                  Our daily love horoscope provides personalized romantic predictions based on your zodiac sign. Check back each day for new insights about your love life, lucky numbers, and best matches!
                </p>
              </div>
              
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How does the Love Fortune Ball work?</h3>
                <p className="text-muted-foreground text-sm">
                  The Love Fortune Ball is like a mystical Magic 8 Ball for love! Ask any yes or no question about your love life, and the fortune ball will reveal your destiny with a magical answer.
                </p>
              </div>
              
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can I share my results?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! After calculating your love percentage, you can easily share the results with friends, family, or your special someone using the share button.
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

export default Index;
