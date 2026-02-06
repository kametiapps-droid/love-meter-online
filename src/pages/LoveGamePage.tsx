import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveHeartsCatchGame from "@/components/LoveHeartsCatchGame";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const LoveGamePage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Gamepad2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Fun Love Game
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Catch the <span className="text-gradient">Hearts</span> Game
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Play our fun love-themed game and catch as many hearts as you can! 🎮💕
            </p>
          </div>
        </section>

        <LoveHeartsCatchGame />

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About Love Hearts Game
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How to Play the Love Hearts Game?</h3>
                <p className="text-muted-foreground text-sm">
                  Click or tap on the falling hearts to catch them before they disappear! The faster you catch them, the higher your score. Each heart you catch adds to your love points. Challenge yourself to beat your high score and become the ultimate love catcher! It's simple, addictive, and perfect for quick fun breaks.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Tips for High Scores</h3>
                <p className="text-muted-foreground text-sm">
                  Focus on the center of the screen where hearts appear most frequently. Use quick taps and try to catch hearts as soon as they appear for bonus points. The game gets faster as your score increases, so stay sharp! Challenge your friends and partner to a love hearts competition.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Why Play Love Games?</h3>
                <p className="text-muted-foreground text-sm">
                  Love-themed games are a fun way to relax and enjoy some romantic vibes. Whether you're waiting for a date, taking a break at work, or just want some light entertainment, our Love Hearts Game brings joy. After playing, check your <Link to="/love-calculator" className="text-primary hover:underline">Love Calculator</Link> score or take the <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link>!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Play Together</h3>
                <p className="text-muted-foreground text-sm">
                  The Love Hearts Game is perfect for couples! Take turns and see who catches more hearts. The winner gets to choose the next date activity! For more couple fun, create a <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name</Link> together or check your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Discover More Love Tools</h3>
                <p className="text-muted-foreground text-sm">
                  We have a full collection of love and romance tools! Read your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Love Horoscope</Link>, ask the <Link to="/love-fortune-ball" className="text-primary hover:underline">Fortune Ball</Link> about your love life, find <Link to="/kids-name-generator" className="text-primary hover:underline">Baby Name</Link> inspiration, or read our <Link to="/blog" className="text-primary hover:underline">Love & Relationship Blog</Link> for expert advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/love-game" />
      </main>
      
      <Footer />
    </div>
  );
};

export default LoveGamePage;
