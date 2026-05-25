import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KidsNameGenerator from "@/components/KidsNameGenerator";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import BlogPreview from "@/components/BlogPreview";
import ShareButtons from "@/components/ShareButtons";
import SEO from "@/components/SEO";
import { Baby } from "lucide-react";
import { Link } from "react-router-dom";

const KidsNameGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Kids Name Generator - Baby Name Ideas Based on Astrology"
        description="Find the perfect baby name with our Kids Name Generator. Get personalized name suggestions based on birth dates and zodiac astrology."
        path="/kids-name-generator"
        keywords="baby name generator, kids name generator, zodiac baby names, astrology baby names, unique baby names, name ideas for baby"
        dateModified="2026-05-25"
        faqSchema={[
          { question: "How does the baby name generator work?", answer: "Enter the parents' names and optionally select a zodiac sign or birth month preference. The generator suggests baby names that blend the parents' names and align with the chosen zodiac sign's traits and traditional meanings." },
          { question: "Are the names based on real astrology?", answer: "The suggestions are inspired by zodiac sign traits and traditional name meanings that align with each sign's characteristics. For example, Aries names tend to reflect boldness and leadership, while Pisces names evoke creativity and sensitivity." },
          { question: "How many baby names does it suggest?", answer: "The generator provides multiple name suggestions across different styles — traditional, modern, unique, and culturally diverse. Each suggestion includes the name's meaning for extra inspiration." },
          { question: "Can I use these names for my child?", answer: "Absolutely! All suggestions are real names suitable for use. They're presented as inspiration — the final choice is always yours. Consider the meaning, how it sounds with your surname, and whether it feels right for your family." },
          { question: "Is the kids name generator free?", answer: "Yes, completely free! Explore as many zodiac sign and name combinations as you like with no sign-up required." },
        ]}
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Baby className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Future Baby Names
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Kids Name <span className="text-gradient">Generator</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover perfect baby name suggestions inspired by both parents! 👶
            </p>
          </div>
        </section>

        <KidsNameGenerator />

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What Is the Kids Name Generator? 👶
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our <strong>Kids Name Generator</strong> is a creative tool that suggests unique baby names inspired by both parents' names and zodiac influences. Whether you're expecting a baby, planning for the future, or just dreaming about what your kids might be named, this generator combines elements from both parents to create beautiful, meaningful name suggestions that honor both sides of the family.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Choosing a <strong>baby name</strong> is one of the most important and exciting decisions parents face. It's a name your child will carry for a lifetime — their first identity, their introduction to the world. Our generator helps spark inspiration by blending the sounds, letters, and energy of both parents' names into fresh combinations you might never have considered on your own.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How Does the Generator Work? ✨
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Enter both parents' names and birth dates, and our algorithm goes to work. It analyzes the phonetic qualities of both names, identifies harmonious letter combinations, and considers the zodiac signs associated with the birth dates. The result is a curated list of <strong>baby name suggestions</strong> — both for boys and girls — that feel connected to the parents while standing beautifully on their own.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  The zodiac component adds an extra layer of meaning. Many cultures believe that a name aligned with a child's astrological energy can bring good fortune and a balanced temperament. While this is purely traditional and not scientific, it makes the naming process more fun and thoughtful. You might discover a name that perfectly captures the qualities you hope for in your child.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Tips for Choosing the Perfect Baby Name 💡
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A great <strong>baby name</strong> sounds good when spoken aloud, pairs well with your last name, and carries a meaning that resonates with your family values. Consider how the name will sound in different contexts — at a graduation ceremony, in a job interview, and whispered as a lullaby. The best names are versatile, timeless, and filled with love.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Don't rush the decision! Many parents create a shortlist and sit with the names for weeks before choosing. Say the name out loud repeatedly, write it down, imagine calling it across a playground. Our generator provides starting points — the final choice should come from your heart. And remember, there's no wrong answer when a name is chosen with love.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Baby Naming Traditions Around the World 🌍
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Every culture has its own beautiful naming traditions. In many Asian cultures, names are chosen based on the meaning of characters and how they relate to the child's birth date. In African traditions, names often reflect the circumstances of birth or the qualities parents wish for their child. In Western cultures, family names are frequently passed down through generations as a way of honoring ancestors.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Our generator respects this diversity by offering a wide range of name styles. Whether you prefer classic, modern, or culturally inspired names, you'll find inspiration here. After choosing a name, celebrate your partnership with our <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name Generator</Link>, check your family's <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link>, or create a <Link to="/relationship-timeline" className="text-primary hover:underline">Relationship Timeline</Link> to document this beautiful chapter of your love story!
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
                <h3 className="font-semibold text-foreground mb-2">How does the baby name generator work?</h3>
                <p className="text-muted-foreground text-sm">Enter the parents' names and optionally select a zodiac sign or birth month preference. The generator suggests baby names that blend the parents' names and align with the chosen zodiac sign's traits and traditional meanings.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Are the names based on real astrology?</h3>
                <p className="text-muted-foreground text-sm">The suggestions are inspired by zodiac sign traits and traditional name meanings that align with each sign's characteristics. For example, Aries names tend to reflect boldness and leadership, while Pisces names evoke creativity and sensitivity.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How many baby names does it suggest?</h3>
                <p className="text-muted-foreground text-sm">The generator provides multiple name suggestions across different styles — traditional, modern, unique, and culturally diverse. Each suggestion includes the name's meaning for extra inspiration.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can I use these names for my child?</h3>
                <p className="text-muted-foreground text-sm">Absolutely! All suggestions are real names suitable for use. They're presented as inspiration — the final choice is always yours. Consider the meaning, how it sounds with your surname, and whether it feels right for your family.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is the kids name generator free?</h3>
                <p className="text-muted-foreground text-sm">Yes, completely free! Explore as many zodiac sign and name combinations as you like with no sign-up required.</p>
              </div>
            </div>
          </div>
        </section>

        <ShareButtons title="Kids Name Generator" description="Find beautiful baby names inspired by astrology!" />
        <BlogPreview />

        <InternalLinks currentPage="/kids-name-generator" />
      </main>
      
      <Footer />
    </div>
  );
};

export default KidsNameGeneratorPage;
