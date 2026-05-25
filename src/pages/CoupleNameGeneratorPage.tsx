import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoupleNameGenerator from "@/components/CoupleNameGenerator";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import BlogPreview from "@/components/BlogPreview";
import SEO from "@/components/SEO";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const CoupleNameGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Couple Name Generator - Create Fun Mashup Names for Couples"
        description="Generate fun celebrity-style couple names by combining two names. Create your unique relationship nickname with our free Couple Name Generator."
        path="/couple-name-generator"
        keywords="couple name generator, ship name generator, couple nickname, celebrity couple name, relationship name, mashup name"
        dateModified="2026-05-25"
        faqSchema={[
          { question: "How does the couple name generator work?", answer: "Enter both partners' names and the generator blends them together to create unique couple names — also known as ship names. It combines syllables, sounds, and letters from both names to produce creative and fun results." },
          { question: "What is a ship name?", answer: "A ship name (or couple name) is a portmanteau of two people's names merged into one — popularised by celebrity couples like 'Brangelina' (Brad + Angelina). It's a fun way for couples to have their own unique shared identity." },
          { question: "Can I generate multiple couple names?", answer: "Yes! The generator produces several name options from different blending styles. Pick your favourite or try different name combinations to find the one that feels most like 'you' as a couple." },
          { question: "Are the generated names unique?", answer: "The generated names are based on the specific combination of the two names you enter. The same names will always produce the same results, so you can always come back to find your couple name." },
          { question: "Is the couple name generator free?", answer: "100% free with no sign-up needed. Generate as many couple names as you like!" },
        ]}
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-medium text-foreground">
                Celebrity Style Names
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Couple Name <span className="text-gradient">Generator</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Create fun celebrity-style couple names like "Brangelina"! 💑
            </p>
          </div>
        </section>

        <CoupleNameGenerator />

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What Is a Couple Name Generator? 💑
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A <strong>couple name generator</strong> creates fun, celebrity-style mashup names by blending two partners' names into one catchy word. Think "Brangelina" (Brad + Angelina), "Bennifer" (Ben + Jennifer), or "TomKat" (Tom + Katie). Our free tool takes both names you enter and produces multiple creative combinations — giving you the perfect relationship nickname that's uniquely yours.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  <strong>Couple names</strong> started as a pop culture phenomenon in the early 2000s when entertainment media began combining celebrity couples' names for catchy headlines. What started as tabloid shorthand quickly became a worldwide trend. Today, millions of couples create their own mashup names for social media bios, wedding hashtags, matching usernames, and just plain fun. It's a small thing that makes a relationship feel extra special.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How Does Our Generator Work? ⚡
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our algorithm analyzes both names and tries multiple splitting strategies to find the most natural-sounding combinations. It takes the beginning of one name and blends it with the ending of the other, then reverses the process for additional options. The result is a list of unique <strong>couple names</strong> that sound fun, pronounceable, and sometimes surprisingly perfect.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  For the best results, try using your first names. But don't stop there — experiment with nicknames, middle names, or even last names for different combinations. Some couples discover that their nicknames create better mashups than their real names. That's the beauty of it — there are endless possibilities, and you'll know the right one when you see it!
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Creative Ways to Use Your Couple Name 🎨
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your <strong>couple name</strong> can become a meaningful part of your relationship identity. Use it as your joint social media handle, your Wi-Fi network name, a personalized hashtag for your wedding photos, or an inside joke that makes you both smile. Some couples even engrave their mashup name on jewelry, phone cases, or matching t-shirts — it's a modern love tradition.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Wedding planners love <strong>couple names</strong> because they make perfect hashtags (#JohnBecca, #Mikela) that help guests share and find photos. Even for non-married couples, having a unique name creates a sense of "us" that strengthens your bond. It's a playful declaration that says: "We're a team, and we have a name to prove it."
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Famous Couple Names Through History 🌟
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The hall of fame for <strong>celebrity couple names</strong> is long and entertaining. "Brangelina" arguably started it all, becoming so iconic that it appeared in dictionaries. "Kimye" (Kim and Kanye) dominated social media for years. "Hiddleswift" (Tom Hiddleston and Taylor Swift) trended globally despite their brief romance. And "Megxit" showed that couple name culture even extends to royalty!
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Now it's your turn to join the tradition! Generate your unique <strong>couple name</strong>, share it with friends, and see if it catches on. After creating your name, check how compatible you really are with our <Link to="/" className="text-primary hover:underline">Love Calculator</Link>, explore your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link>, or start planning your future with the <Link to="/kids-name-generator" className="text-primary hover:underline">Kids Name Generator</Link>!
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
                <h3 className="font-semibold text-foreground mb-2">How does the couple name generator work?</h3>
                <p className="text-muted-foreground text-sm">Enter both partners' names and the generator blends them together to create unique couple names — also known as ship names. It combines syllables, sounds, and letters from both names to produce creative and fun results.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What is a ship name?</h3>
                <p className="text-muted-foreground text-sm">A ship name (or couple name) is a portmanteau of two people's names merged into one — popularised by celebrity couples like "Brangelina" (Brad + Angelina). It's a fun way for couples to have their own unique shared identity.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can I generate multiple couple names?</h3>
                <p className="text-muted-foreground text-sm">Yes! The generator produces several name options from different blending styles. Pick your favourite or try different name combinations to find the one that feels most like "you" as a couple.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Are the names unique every time?</h3>
                <p className="text-muted-foreground text-sm">The generated names are based on the specific combination of the two names you enter. The same names will always produce the same results, so you can always come back to find your couple name.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is the couple name generator free?</h3>
                <p className="text-muted-foreground text-sm">100% free with no sign-up needed. Generate as many couple names as you like!</p>
              </div>
            </div>
          </div>
        </section>

        <BlogPreview />

        <InternalLinks currentPage="/couple-name-generator" />
      </main>
      
      <Footer />
    </div>
  );
};

export default CoupleNameGeneratorPage;
