import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveCalculator from "@/components/LoveCalculator";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const LoveCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Love Calculator - Test Your Love Compatibility Online Free"
        description="Use our free Love Calculator to find out your love compatibility. Enter two names and get your love percentage instantly. Fun and easy love test!"
        path="/love-calculator"
        keywords="love calculator, love test online, name compatibility calculator, love percentage, romantic compatibility test"
        dateModified="2026-04-09"
        faqSchema={[
          { question: "How does the Love Calculator work?", answer: "Our love calculator analyzes the names you enter using a fun algorithm to generate a compatibility percentage. Simply type in your name and your partner's name for instant results!" },
          { question: "Is the Love Calculator accurate?", answer: "The love calculator is for entertainment purposes only. Real relationships depend on many factors beyond names." },
          { question: "Can I try different name combinations?", answer: "Yes! Try full names, nicknames, or different spellings to see various fun results." },
          { question: "Can I share my love calculator results?", answer: "Absolutely! Use the share button to send your results to friends or your special someone." },
        ]}
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Heart className="w-4 h-4 text-heart-red fill-heart-red animate-pulse-heart" />
              <span className="text-sm font-medium text-foreground">
                #1 Love Calculator Online
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Love <span className="text-gradient">Calculator</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Enter your names below and let the magic reveal your love percentage. 
              Find out if you're meant to be together! 💕
            </p>
          </div>
          
          <LoveCalculator />
        </section>

        {/* Rich SEO Content */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What Is a Love Calculator? 💕
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A <strong>love calculator</strong> is a fun, interactive online tool that estimates romantic compatibility between two people using their names. Our free <strong>love compatibility test</strong> uses a playful algorithm to generate a <strong>love percentage</strong> — giving you an instant, entertaining snapshot of how well you and your partner (or crush!) might match. Whether you're at a party, on a first date, or just daydreaming about someone special, the love calculator delivers quick results that are perfect for sharing and sparking conversations.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  The idea of testing love through names has roots in ancient numerology, where people believed that names carry vibrational energy that influences relationships. While our tool is built purely for fun, it taps into that timeless human curiosity — "Are we meant to be?" Millions of people around the world use <strong>love calculators</strong> every day, making it one of the most popular online entertainment tools for couples and singles alike.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How Does Our Love Calculator Work? 🔮
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our <strong>love calculator</strong> works by analyzing the letters in both names you enter. The algorithm examines letter frequencies, matches common characters, and applies a mathematical formula to produce a unique <strong>love percentage</strong> between 0% and 100%. The beauty of this system is consistency — you and your partner will always get the same score, making it fun to show off or challenge friends.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Here's a pro tip: try entering different name variations! Your full name, nickname, or even a pet name can produce different (and sometimes surprising) results. Many couples find it hilarious to discover that their childhood nicknames score higher than their formal names. It's all part of the fun — and a great excuse to keep playing!
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Is the Love Percentage Real? 💯
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Let's keep it real — no online <strong>love calculator</strong> can truly measure the depth of human connection. Real love is built on trust, communication, shared experiences, vulnerability, and genuine care for each other. A <strong>love percentage</strong> is entertainment, not a relationship verdict. The couples with the strongest bonds aren't the ones with the highest algorithm scores — they're the ones who show up for each other every single day.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  That said, there's genuine joy in the playfulness of it all. Sharing your <strong>love compatibility</strong> results can lead to laughter, affection, and even deeper conversations about your relationship. Some couples make it a tradition to check their score on anniversaries — not because they believe the number, but because it reminds them of the fun they have together. And honestly, isn't that what love is really about?
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Choose Our Free Love Calculator? ✨
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  There are hundreds of <strong>love calculators</strong> online, but ours is designed to stand out. We offer instant results with beautiful animations, a clean and ad-free interface, and the ability to share your results with one click. Our calculator works perfectly on phones, tablets, and desktops — so you can check your <strong>love compatibility</strong> anytime, anywhere.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
                  <li><strong>Lightning Fast:</strong> Get your <strong>love percentage</strong> in under a second.</li>
                  <li><strong>Beautiful Design:</strong> Enjoy heart animations and a romantic interface.</li>
                  <li><strong>100% Private:</strong> We never store the names you enter.</li>
                  <li><strong>Easy Sharing:</strong> One-tap sharing to social media and messaging apps.</li>
                  <li><strong>Completely Free:</strong> No sign-ups, no fees, no hidden costs.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Fun Ways to Use the Love Calculator 🎉
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond simple name testing, our <strong>love calculator</strong> is perfect for parties, sleepovers, date nights, and social media challenges. Try testing celebrity couples, fictional characters, or even your parents' names for a good laugh. Host a "compatibility tournament" with friends where everyone tests their crushes and compares scores. The possibilities are endless!
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  After checking your <strong>love percentage</strong>, don't stop there — explore our full suite of romantic tools. Check your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link>, take the <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link>, read your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Love Horoscope</Link>, or create a celebrity-style <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name</Link>. Each tool adds another layer of fun to your romantic journey!
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/love-calculator" />
      </main>
      
      <Footer />
    </div>
  );
};

export default LoveCalculatorPage;
