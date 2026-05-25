import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import LoveLetterGenerator from "@/components/LoveLetterGenerator";
import InternalLinks from "@/components/InternalLinks";
import BlogPreview from "@/components/BlogPreview";
import ShareButtons from "@/components/ShareButtons";
import SEO from "@/components/SEO";
import { Send } from "lucide-react";
import { Link } from "react-router-dom";

const LoveLetterPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Love Letter Generator - Write Romantic Letters Instantly"
        description="Create beautiful, personalized love letters with our free Love Letter Generator. Express your feelings with romantic words crafted just for you."
        path="/love-letter-generator"
        keywords="love letter generator, write love letter, romantic letter, love message generator, free love letter, personalized love letter"
        dateModified="2026-05-25"
        faqSchema={[
          { question: "How do I generate a love letter?", answer: "Select your preferred tone (romantic, sweet, poetic, or passionate), enter the names, and click Generate. The tool creates a unique, heartfelt love letter for you instantly — ready to copy, share, or personalise further." },
          { question: "Is the love letter generator free?", answer: "Yes, completely free! Generate as many letters as you like with no account or payment required. Each one is uniquely crafted based on your selected settings." },
          { question: "Can I edit or personalise the letter?", answer: "Absolutely. The generated letter is a starting point — copy it and add your own personal memories, inside jokes, and specific details to make it truly one-of-a-kind. Adding your own touch always makes it more meaningful." },
          { question: "Can I save or print my love letter?", answer: "Yes! Use the copy button to save your letter to clipboard, then paste it into any app, email, or document. You can also print it directly from your browser for a handwritten-feel keepsake." },
          { question: "What occasions can I use the love letter for?", answer: "The generator works for any romantic occasion — Valentine's Day, anniversaries, birthdays, just because moments, long-distance relationship notes, proposals, or simply to tell someone how you feel." },
        ]}
      />
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
          <div className="max-w-4xl mx-auto">
            <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What Is the Love Letter Generator? 💌
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our <strong>Love Letter Generator</strong> creates beautiful, personalized love letters instantly. Choose from five distinct writing styles — Romantic, Funny, Poetic, Passionate, and Sweet — enter your name and your partner's name, and receive a heartfelt letter ready to copy, customize, and share. It's the perfect tool when your heart is full but words are hard to find.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  We built this tool because we believe everyone deserves to receive a <strong>love letter</strong>. Not everyone is a natural wordsmith, and that's okay. Sometimes the most loving thing you can do is seek help expressing what you feel. Our generator provides beautifully crafted starting points that you can personalize with your own memories, inside jokes, and specific details about your relationship.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Love Letters Still Matter ✍️
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  In the age of texting, emojis, and voice notes, a <strong>love letter</strong> stands out as something truly special. There's a reason love letters have survived for thousands of years — they represent effort, thoughtfulness, and vulnerability. Receiving a letter (even a digital one) tells your partner: "You are worth my time, my words, and my deepest feelings."
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Research in relationship psychology shows that written expressions of love significantly increase relationship satisfaction for both the writer and the recipient. The act of putting feelings into words forces you to reflect on what you love about your partner, while reading those words gives the recipient tangible proof of their partner's devotion. A <strong>love letter</strong> is an emotional gift that costs nothing but means everything.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  The Five Letter Styles Explained 📜
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Romantic:</strong> Classic, heartfelt expressions of love and devotion — perfect for anniversaries and special occasions. <strong>Funny:</strong> Light-hearted, witty letters that celebrate your relationship with humor and joy — ideal for partners who love to laugh together. <strong>Poetic:</strong> Lyrical, metaphor-rich letters inspired by the great poets — beautiful for those who appreciate literary expression.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  <strong>Passionate:</strong> Intense, emotionally charged letters that express deep desire and connection — perfect for long-distance couples or rekindling the spark. <strong>Sweet:</strong> Gentle, warm letters filled with tenderness and quiet affection — wonderful for everyday love notes and "just because" messages. Each style captures a different facet of love, and you can generate as many as you like until you find the one that feels perfect.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Famous Love Letters in History 📖
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Throughout history, the greatest love stories have been told through letters. Napoleon wrote passionately to Josephine from the battlefield. Beethoven's mysterious "Immortal Beloved" letter remains one of music's greatest romantic mysteries. Frida Kahlo's letters to Diego Rivera reveal a love as intense and colorful as her paintings. Johnny Cash's birthday letter to June Carter ("You still fascinate and inspire me") is considered one of the greatest love letters ever written.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  You don't need to be a famous artist or historical figure to write a meaningful letter. Our generator gives you the foundation — all you need to add is your genuine feeling. After writing your letter, pair it with beautiful <Link to="/love-poetry" className="text-primary hover:underline">Love Poetry</Link>, create a <Link to="/relationship-timeline" className="text-primary hover:underline">Relationship Timeline</Link> to include with it, or check your <Link to="/" className="text-primary hover:underline">Love Compatibility</Link> to add as a fun postscript!
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
                <h3 className="font-semibold text-foreground mb-2">How do I generate a love letter?</h3>
                <p className="text-muted-foreground text-sm">Select your preferred tone (romantic, sweet, poetic, or passionate), enter the names, and click Generate. The tool creates a unique, heartfelt love letter for you instantly — ready to copy, share, or personalise further.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is the love letter generator free?</h3>
                <p className="text-muted-foreground text-sm">Yes, completely free! Generate as many letters as you like with no account or payment required. Each one is uniquely crafted based on your selected settings.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can I edit or personalise the letter?</h3>
                <p className="text-muted-foreground text-sm">Absolutely. The generated letter is a starting point — copy it and add your own personal memories, inside jokes, and specific details to make it truly one-of-a-kind. Adding your own touch always makes it more meaningful.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can I save or print my love letter?</h3>
                <p className="text-muted-foreground text-sm">Yes! Use the copy button to save your letter to clipboard, then paste it into any app, email, or document. You can also print it directly from your browser for a handwritten-feel keepsake.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What occasions can I use the love letter for?</h3>
                <p className="text-muted-foreground text-sm">The generator works for any romantic occasion — Valentine's Day, anniversaries, birthdays, "just because" moments, long-distance relationship notes, proposals, or simply to tell someone how you feel.</p>
              </div>
            </div>
          </div>
        </section>

        <ShareButtons title="Love Letter Generator" description="Generate a beautiful love letter instantly for free!" />
        <BlogPreview />

        <InternalLinks currentPage="/love-letter-generator" />
      </main>
      <Footer />
    </div>
  );
};

export default LoveLetterPage;
