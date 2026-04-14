import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveHeartsCatchGame from "@/components/LoveHeartsCatchGame";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const LoveGamePage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Love Hearts Catch Game - Fun Free Online Love Game"
        description="Play the Love Hearts Catch Game! Catch falling hearts in this fun, free online love-themed game. Test your reflexes and score high!"
        path="/love-game"
      />
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
          <div className="max-w-4xl mx-auto">
            <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What Is the Love Hearts Catch Game? 🎮
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The <strong>Love Hearts Catch Game</strong> is a fun, free online game where you catch falling hearts before they disappear. It's a love-themed arcade-style game designed for quick entertainment breaks — perfect for when you need a moment of joy. Tap or click on the hearts as they fall, rack up points, and try to beat your high score. Simple to learn, addictive to play, and guaranteed to put a smile on your face.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  In a world full of complex, time-consuming games, sometimes you just want something light, fun, and romantic. Our <strong>hearts catch game</strong> fills that niche perfectly. It requires no downloads, no sign-ups, and no commitments — just pure, instant fun. Whether you're waiting for a date, taking a study break, or unwinding before bed, this game delivers the perfect amount of entertainment.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How to Play and Win 🏆
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The rules are simple: hearts fall from the top of the screen, and you need to tap (on mobile) or click (on desktop) each heart before it reaches the bottom. Every caught heart earns you points. As your score increases, the hearts fall faster — testing your reflexes and focus. The game ends when you miss too many hearts, so stay sharp and keep those fingers ready!
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  <strong>Pro tips for high scores:</strong> Focus on the center of the screen first, as hearts tend to cluster there. Don't chase hearts at the edges — let them come to you. Stay calm as the speed increases — panicking leads to missed clicks. And most importantly, have fun! It's not about perfection; it's about enjoying the playful, romantic atmosphere.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Play Love-Themed Games? 💕
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Games have always been a part of human bonding. From childhood games of tag to sophisticated board games on date nights, playing together strengthens connections and creates shared memories. Love-themed games add a romantic twist to this universal activity. Playing our <strong>hearts catch game</strong> with your partner turns a simple game into a bonding experience — compete for the highest score and enjoy the playful rivalry!
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Studies show that couples who play together stay together — literally. Shared activities that involve laughter, mild competition, and teamwork increase relationship satisfaction. Even a quick game like catching hearts can become a meaningful ritual in your relationship. "Want to play the hearts game?" might just become your favorite phrase.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Challenge Your Friends and Partner 🎯
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The <strong>Love Hearts Game</strong> is perfect for friendly competitions. Take turns with your partner and see who catches more hearts — the loser has to plan the next date! Or challenge your friends to a hearts-catching tournament at a sleepover or party. Screenshot your scores and share them on social media to show off your reflexes (and your romantic side!).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  After gaming, continue the fun with our other love tools! Check your <Link to="/love-calculator" className="text-primary hover:underline">Love Calculator</Link> score, ask the <Link to="/love-fortune-ball" className="text-primary hover:underline">Love Fortune Ball</Link> if you'll beat your high score next time, or take the <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link> to discover your romantic personality. Love and games — the perfect combination!
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
