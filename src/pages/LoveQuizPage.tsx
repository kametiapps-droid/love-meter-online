import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveQuiz from "@/components/LoveQuiz";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import BlogPreview from "@/components/BlogPreview";
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
        keywords="love quiz, relationship quiz, love style quiz, love personality test, how strong is your relationship, free love test"
        dateModified="2026-05-25"
        faqSchema={[
          { question: "What is the Love Style Quiz?", answer: "The Love Style Quiz is a fun personality test that helps you discover how you express and experience love in relationships. Based on your answers, it reveals your unique romantic style and what you need to feel loved and secure." },
          { question: "How many questions are in the quiz?", answer: "The quiz is short and fun — designed to be completed in just a few minutes. Each question is carefully crafted to reveal genuine insights about your approach to love without taking up too much of your time." },
          { question: "What are the different love styles?", answer: "The quiz identifies several romantic personalities — from passionate romantics and steady loyalists to independent adventurers and deep emotional connectors. Each style comes with strengths, needs, and tips for better relationships." },
          { question: "Can my partner and I take the quiz together?", answer: "Absolutely! Taking the quiz separately and then comparing your love styles can be a great conversation starter. Understanding each other's romantic needs leads to better communication and a stronger bond." },
          { question: "Is the Love Quiz free?", answer: "Yes, 100% free. Take it as many times as you like — no sign-up, no payment, no hidden fees." },
        ]}
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
          <div className="max-w-4xl mx-auto">
            <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What Is the Love Style Quiz? 💝
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The <strong>Love Style Quiz</strong> is a fun personality assessment that reveals your unique approach to romance and relationships. Based on how you answer a series of thoughtful questions about love, dating, and emotional connection, our quiz categorizes you into one of five distinct love styles: Hopeless Romantic, Thrill Seeker, Caring Soul, Deep Thinker, or Intense Lover.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Understanding your <strong>love style</strong> isn't just entertaining — it's genuinely insightful. Psychologists have long studied attachment styles and love languages, and our quiz draws inspiration from these research-backed concepts. Knowing how you naturally express and receive love helps you communicate better with your partner and understand why certain relationship dynamics feel effortless while others require more work.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How Does the Love Quiz Work? 📝
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The quiz presents you with a series of carefully crafted scenarios and questions about your romantic preferences, emotional reactions, and relationship values. There are no right or wrong answers — each choice simply reveals something about your personality. Based on the pattern of your responses, our algorithm identifies which <strong>love style</strong> resonates most strongly with you.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  The quiz takes just a few minutes to complete and provides instant results with a detailed description of your love personality. Many couples take it together and compare results — it's a wonderful way to spark meaningful conversations about what each partner needs and values in a relationship. You might discover surprising things about yourself and your partner!
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Five Love Styles Explained 🌟
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Hopeless Romantic:</strong> You believe in fairy-tale love, grand gestures, and soulmates. You wear your heart on your sleeve and love deeply and passionately. <strong>Thrill Seeker:</strong> You crave excitement, adventure, and spontaneity in love. Routine is your enemy — you want a partner who keeps things fresh and unpredictable.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  <strong>Caring Soul:</strong> You express love through acts of service and nurturing. Making your partner feel safe, comfortable, and cared for is your top priority. <strong>Deep Thinker:</strong> You approach love intellectually and value deep, meaningful conversations over surface-level romance. <strong>Intense Lover:</strong> Your love burns bright and powerful. You're all-in when you commit and bring unmatched passion and loyalty to your relationships.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Understanding Your Love Style Matters 💡
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Knowing your <strong>love style</strong> helps you recognize patterns in your relationships. If you're a Caring Soul dating a Thrill Seeker, understanding each other's core needs prevents misunderstandings. One partner craves stability; the other craves novelty. Neither is wrong — they're just different. The magic happens when both partners learn to meet each other halfway.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Relationship experts consistently emphasize that self-awareness is the foundation of healthy partnerships. When you understand your own emotional needs and communication preferences, you can articulate them clearly to your partner. This reduces conflict, builds trust, and creates a deeper emotional bond. Our quiz is a fun first step toward that kind of self-discovery.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Take the Quiz With Your Partner ✨
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The <strong>Love Style Quiz</strong> is even more fun when taken as a couple! Sit down together, answer the questions separately, then reveal your results at the same time. You'll laugh, learn, and probably discover things about each other you never expected. It's the perfect date-night activity — no reservations required.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  After discovering your love style, continue exploring with our other tools. Check your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> to see how the stars view your match, test your names in the <Link to="/" className="text-primary hover:underline">Love Calculator</Link>, or generate a cute <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name</Link> together. Love is an adventure — enjoy every moment of it!
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
                <h3 className="font-semibold text-foreground mb-2">What is the Love Style Quiz?</h3>
                <p className="text-muted-foreground text-sm">The Love Style Quiz is a fun personality test that helps you discover how you express and experience love in relationships. Based on your answers, it reveals your unique romantic style and what you need to feel loved and secure.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How many questions are in the quiz?</h3>
                <p className="text-muted-foreground text-sm">The quiz is short and fun — designed to be completed in just a few minutes. Each question is carefully crafted to reveal genuine insights about your approach to love without taking up too much of your time.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What are the different love styles?</h3>
                <p className="text-muted-foreground text-sm">The quiz identifies several romantic personalities — from passionate romantics and steady loyalists to independent adventurers and deep emotional connectors. Each style comes with strengths, needs, and tips for better relationships.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can my partner and I take the quiz together?</h3>
                <p className="text-muted-foreground text-sm">Absolutely! Taking the quiz separately and then comparing your love styles can be a great conversation starter. Understanding each other's romantic needs leads to better communication and a stronger bond.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is the Love Quiz free?</h3>
                <p className="text-muted-foreground text-sm">Yes, 100% free. Take it as many times as you like — no sign-up, no payment, no hidden fees.</p>
              </div>
            </div>
          </div>
        </section>

        <BlogPreview />

        <InternalLinks currentPage="/love-quiz" />
      </main>
      
      <Footer />
    </div>
  );
};

export default LoveQuizPage;
