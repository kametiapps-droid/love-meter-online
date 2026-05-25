import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoveCalculator from "@/components/LoveCalculator";
import FloatingHearts from "@/components/FloatingHearts";
import SEO from "@/components/SEO";
import InternalLinks from "@/components/InternalLinks";
import ShareButtons from "@/components/ShareButtons";
import { Heart } from "lucide-react";

const LoveCalculatorPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Love Calculator - Calculate Love Percentage by Name"
        description="Use our free Love Calculator to find out your love compatibility percentage by name. Enter two names and discover your love score instantly!"
        path="/love-calculator"
        keywords="love calculator, love percentage, love compatibility by name, name love test, love score, calculate love, love meter, true love calculator"
        dateModified="2026-05-24"
        faqSchema={[
          { question: "How does the Love Calculator work?", answer: "Our love calculator uses a fun algorithm that analyzes the names you enter to generate a compatibility percentage. It's designed purely for entertainment and fun!" },
          { question: "Is the Love Calculator accurate?", answer: "The love calculator is meant for entertainment purposes only. Real love and relationships are complex and can't be measured by any algorithm." },
          { question: "Is the love percentage real?", answer: "The love percentage is generated for entertainment only. Real love compatibility depends on communication, trust, shared values, and mutual respect." },
          { question: "Can I share my love result?", answer: "Yes! After calculating your love percentage, you can easily share the result with friends or your special someone using the share button." },
          { question: "What does the love percentage mean?", answer: "A higher percentage suggests strong name compatibility in our fun algorithm. 90%+ is a Diamond Love Bond, 80%+ is Gold, 70%+ is Silver, and 60%+ is Bronze." },
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
                Free Love Compatibility Test
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Love <span className="text-gradient">Calculator</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Enter two names and discover your love compatibility percentage instantly. 
              Find out if you're truly meant to be! 💕
            </p>
          </div>

          <LoveCalculator />
        </section>

        <section className="py-10 px-4 bg-secondary/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
              How Does the Love Calculator Work?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="card-romantic rounded-xl p-6">
                <div className="text-3xl mb-3">✍️</div>
                <h3 className="font-semibold text-foreground mb-2">Step 1 — Enter Names</h3>
                <p className="text-sm text-muted-foreground">Type your name and your partner's name into the calculator fields.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <div className="text-3xl mb-3">💫</div>
                <h3 className="font-semibold text-foreground mb-2">Step 2 — Calculate</h3>
                <p className="text-sm text-muted-foreground">Our algorithm analyses the name combination and generates your love score.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <div className="text-3xl mb-3">💌</div>
                <h3 className="font-semibold text-foreground mb-2">Step 3 — Share</h3>
                <p className="text-sm text-muted-foreground">Share your result with friends or your special someone in one tap.</p>
              </div>
            </div>
          </div>
        </section>

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
                <h3 className="font-semibold text-foreground mb-2">What does the love percentage mean?</h3>
                <p className="text-muted-foreground text-sm">
                  A higher percentage suggests strong name compatibility in our fun algorithm. 90%+ means Diamond Love Bond (soulmates!), 80%+ is Gold, 70%+ is Silver, 60%+ is Bronze, and below that is a Spark Bond — with potential to grow!
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can I share my love result?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes! After calculating your love percentage, click the Share button to send your result to friends, family, or your special someone directly from the page.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is this the same as the homepage calculator?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes — this is the same Love Calculator tool, now on its own dedicated page so you can bookmark it and share it directly. The homepage also features the calculator alongside other tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ShareButtons title="Love Calculator" description="Calculate your love compatibility percentage by name!" />
        <InternalLinks />
      </main>

      <Footer />
    </div>
  );
};

export default LoveCalculatorPage;
