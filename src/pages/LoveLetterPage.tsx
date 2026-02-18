import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import LoveLetterGenerator from "@/components/LoveLetterGenerator";
import InternalLinks from "@/components/InternalLinks";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";

const LoveLetterPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />
      <Header />
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Creative Love Letters</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Love Letter <span className="text-gradient">Generator</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate beautiful, heartfelt love letters in seconds. Choose your style and share with someone special! 💌
            </p>
          </div>
        </section>

        <LoveLetterGenerator />

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About the Love Letter Generator
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What is the Love Letter Generator?</h3>
                <p className="text-muted-foreground text-sm">
                  Our Love Letter Generator creates beautiful, personalized love letters in five different styles: Romantic, Funny, Poetic, Passionate, and Sweet. Simply enter your name and your partner's name, choose a style, and instantly receive a heartfelt letter you can copy and share. It's the perfect tool when words fail you but your heart is full.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Why Write Love Letters?</h3>
                <p className="text-muted-foreground text-sm">
                  In the digital age, a heartfelt love letter stands out more than ever. Love letters are timeless expressions of devotion that your partner can treasure forever. Studies show that written expressions of love strengthen emotional bonds and increase relationship satisfaction. Whether handwritten or digital, a love letter tells someone they are deeply cherished.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How to Use Your Generated Letter</h3>
                <p className="text-muted-foreground text-sm">
                  Copy your generated letter and personalize it further with specific memories and details about your relationship. You can send it as a text, email, or print it on beautiful paper for a handwritten feel. Use it for Valentine's Day, anniversaries, birthdays, or any random day to surprise your partner. Pair it with a <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name</Link> for extra romance!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">The History of Love Letters</h3>
                <p className="text-muted-foreground text-sm">
                  Love letters have been exchanged for centuries. Famous historical love letters include those between Napoleon and Josephine, Beethoven's "Immortal Beloved" letter, and Elizabeth Barrett Browning's correspondence with Robert Browning. These timeless documents remind us that the desire to express love through words is a fundamental part of human nature.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Explore More Romantic Tools</h3>
                <p className="text-muted-foreground text-sm">
                  Love our Letter Generator? Explore our beautiful <Link to="/love-poetry" className="text-primary hover:underline">Love Poetry</Link> collection, create a <Link to="/relationship-timeline" className="text-primary hover:underline">Relationship Timeline</Link> of your love story, or check your <Link to="/love-calculator" className="text-primary hover:underline">Love Compatibility</Link>. Read your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Horoscope</Link> or take the <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link> for even more romantic fun!
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/love-letter-generator" />
      </main>
      <Footer />
    </div>
  );
};

export default LoveLetterPage;
