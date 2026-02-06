import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveCalculator from "@/components/LoveCalculator";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const LoveCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
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
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About Our Love Calculator
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How Does the Love Calculator Work?</h3>
                <p className="text-muted-foreground text-sm">
                  Our love calculator uses a fun algorithm that analyzes the names you enter to generate a compatibility percentage. Simply type in your name and your crush's name, and our tool will instantly calculate how compatible you are! It's designed purely for entertainment and fun — perfect for sharing laughs with friends and loved ones.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is the Love Calculator Accurate?</h3>
                <p className="text-muted-foreground text-sm">
                  The love calculator is meant for entertainment purposes only. Real love and relationships are complex and can't be measured by any algorithm. That said, it's a great way to break the ice or have fun at parties! For deeper insights into your romantic compatibility, try our <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> tool or take our <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Why Use a Love Calculator?</h3>
                <p className="text-muted-foreground text-sm">
                  Love calculators have been popular online for years because they're a fun, lighthearted way to explore romantic connections. Whether you're curious about a new crush, want to test your relationship with your partner, or just want to have fun with friends — our love calculator delivers instant results with beautiful animations. You can also explore your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Love Horoscope</Link> for more romantic insights!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Tips for Using the Love Calculator</h3>
                <p className="text-muted-foreground text-sm">
                  For the best experience, enter full first names for both you and your partner. Try different name combinations — sometimes using nicknames vs. full names can give different fun results! After getting your score, share it with your special someone and see their reaction. Don't forget to also try our <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name Generator</Link> to create a celebrity-style couple name!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Share Your Love Results</h3>
                <p className="text-muted-foreground text-sm">
                  Got a great score? Share it with the world! Our love calculator makes it easy to share your results on social media or via messaging apps. Challenge your friends to test their compatibility too. For more love-themed fun, check out our <Link to="/love-fortune-ball" className="text-primary hover:underline">Love Fortune Ball</Link> or play our <Link to="/love-game" className="text-primary hover:underline">Love Hearts Catch Game</Link>!
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
