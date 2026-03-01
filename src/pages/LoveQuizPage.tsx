import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveQuiz from "@/components/LoveQuiz";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

const LoveQuizPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Love Quiz - How Strong Is Your Relationship? Take the Test"
        description="Take our fun Love Quiz to discover your relationship style and how strong your bond really is. Free personality-based love test with instant results."
        path="/love-quiz"
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <ClipboardList className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Personality Test
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Love Style <span className="text-gradient">Quiz</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover your unique approach to love and relationships through our fun personality quiz! 💝
            </p>
          </div>
        </section>

        <LoveQuiz />

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About the Love Style Quiz
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What is the Love Style Quiz?</h3>
                <p className="text-muted-foreground text-sm">
                  Our Love Style Quiz helps you discover your unique approach to love and relationships through fun personality questions. Answer honestly and find out if you're a Hopeless Romantic, Thrill Seeker, Caring Soul, Deep Thinker, or Intense Lover! Each love style reveals fascinating insights about how you connect with partners.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How Does the Quiz Work?</h3>
                <p className="text-muted-foreground text-sm">
                  The quiz presents you with a series of relationship scenarios and questions. Based on your answers, our algorithm determines which love style best matches your personality. It's completely free, takes just a few minutes, and provides entertaining insights about your romantic tendencies. Try it with your partner and compare results!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Understanding Your Love Language</h3>
                <p className="text-muted-foreground text-sm">
                  Understanding how you express and receive love is key to building strong relationships. Our quiz helps you identify patterns in your romantic behavior. For more relationship insights, check your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> or read our <Link to="/blog/love-relationships-guide" className="text-primary hover:underline">Guide to Building Strong Relationships</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Share Your Love Style</h3>
                <p className="text-muted-foreground text-sm">
                  Once you discover your love style, share your results with friends and see how your styles compare! Different love styles can complement each other beautifully. After taking the quiz, test your name compatibility with our <Link to="/love-calculator" className="text-primary hover:underline">Love Calculator</Link> or check your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Love Horoscope</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Why Take a Love Quiz?</h3>
                <p className="text-muted-foreground text-sm">
                  Love quizzes are a popular way to learn about yourself and have fun exploring your romantic side. Whether you take it seriously or just for laughs, our quiz offers a moment of self-reflection. For even more love fun, try our <Link to="/love-fortune-ball" className="text-primary hover:underline">Love Fortune Ball</Link> or play the <Link to="/love-game" className="text-primary hover:underline">Love Hearts Catch Game</Link>!
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/love-quiz" />
      </main>
      
      <Footer />
    </div>
  );
};

export default LoveQuizPage;
