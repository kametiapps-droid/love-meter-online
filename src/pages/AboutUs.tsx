import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Heart, Users, Target, Shield, Award, Globe, Sparkles, BookOpen, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="About Us - Love Calculator | Our Mission, Story & Team"
        description="Learn about Love Calculator, our passionate team, our mission to spread love, and the story behind your favorite free online love compatibility tools since 2024."
        path="/about"
      />
      <FloatingHearts />
      <Header />

      <main className="flex-1 relative z-10">
        {/* Hero */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">About Us</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              About <span className="text-gradient">Love Calculator</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to bring joy, fun, and a little bit of magic to love and relationships worldwide. 💕
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card-romantic rounded-xl p-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="w-7 h-7 text-primary fill-primary" />
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Love Calculator was born out of a simple yet powerful idea: love should be celebrated, explored, and enjoyed by everyone. What started as a small love compatibility calculator in 2024 has blossomed into one of the most comprehensive love and relationship platforms on the internet.
                </p>
                <p>
                  Our founder noticed that while there were countless tools for productivity, fitness, and finance, there were surprisingly few high-quality, free platforms dedicated to the most important aspect of human life — love and relationships. That gap inspired the creation of Love Calculator.
                </p>
                <p>
                  From our humble beginnings as a single-page love calculator, we've grown into a platform offering over a dozen interactive tools — from zodiac compatibility checks and love quizzes to couple name generators, romantic poetry collections, and a comprehensive relationship blog with 22+ in-depth articles.
                </p>
                <p>
                  Today, Love Calculator serves thousands of users from over 100 countries every month. Our growing global community of love enthusiasts inspires us to keep building new features, writing insightful content, and making the experience more delightful with every update. We're proud to be a go-to destination for anyone curious about love, compatibility, and romance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-12 px-4 bg-secondary/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-romantic rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm">
                  To make love fun, accessible, and celebratory for everyone, everywhere. We create free, high-quality entertainment and educational tools that help people explore love, understand relationships, and celebrate the connections that make life meaningful.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Privacy First</h3>
                <p className="text-muted-foreground text-sm">
                  Your privacy is sacred to us. We don't store any personal data you enter into our tools — no names, no dates, no results. Everything runs locally in your browser. We use only essential cookies for site functionality. Read our full <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Content</h3>
                <p className="text-muted-foreground text-sm">
                  Every tool, article, and poem on our site is carefully researched and crafted to provide genuine value and entertainment. We regularly update our content to keep it fresh, accurate, relevant, and enjoyable for our growing community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card-romantic rounded-xl p-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="w-7 h-7 text-primary" />
                Our Vision
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We envision a world where everyone has access to tools and knowledge that help them build healthier, happier, and more fulfilling relationships. Our long-term vision includes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Expanding our tool suite</strong> to cover every aspect of love and relationships — from first dates to golden anniversaries.</li>
                  <li><strong>Building a knowledge hub</strong> with 100+ expert-backed articles on relationship health, communication, and personal growth.</li>
                  <li><strong>Creating community features</strong> where users can share experiences, advice, and support for their relationship journeys.</li>
                  <li><strong>Supporting multiple languages</strong> to make our tools accessible to love seekers around the world, regardless of language barriers.</li>
                  <li><strong>Partnering with relationship experts</strong> to ensure our content is not only entertaining but also educational and evidence-based.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-12 px-4 bg-secondary/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              What We Offer
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-xl">🧮</span> Interactive Love Tools
                </h3>
                <p className="text-muted-foreground text-sm">
                  From our flagship <Link to="/" className="text-primary hover:underline">Love Calculator</Link> to the <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> checker, <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name Generator</Link>, <Link to="/love-fortune-ball" className="text-primary hover:underline">Love Fortune Ball</Link>, <Link to="/kids-name-generator" className="text-primary hover:underline">Kids Name Generator</Link>, and more — we offer over 12 unique interactive tools, all completely free to use with no registration required.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> Relationship Blog (22+ Articles)
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our <Link to="/blog" className="text-primary hover:underline">Love & Relationship Blog</Link> features 22+ in-depth, expert-quality articles on topics including trust building, emotional intelligence, self-love, love languages, zodiac compatibility, anniversary ideas, love across cultures, romantic date ideas, healthy communication, and much more. New articles are published regularly to keep our content library growing.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-primary" /> Creative Romance Tools
                </h3>
                <p className="text-muted-foreground text-sm">
                  Express your love creatively with our <Link to="/love-letter-generator" className="text-primary hover:underline">Love Letter Generator</Link>, browse our curated collection of 48+ <Link to="/love-poetry" className="text-primary hover:underline">Love Poems</Link>, or document your relationship milestones with the <Link to="/relationship-timeline" className="text-primary hover:underline">Relationship Timeline</Link> creator. These tools help you articulate your deepest feelings and celebrate your unique love story.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" /> Fun & Insights
                </h3>
                <p className="text-muted-foreground text-sm">
                  Take the <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link> to discover your romantic personality type, ask the <Link to="/love-fortune-ball" className="text-primary hover:underline">Love Fortune Ball</Link> for playful predictions, or read your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Love Horoscope</Link> for personalized romantic insights based on your zodiac sign.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card-romantic rounded-xl p-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Users className="w-7 h-7 text-primary" />
                Meet Our Team
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Behind Love Calculator is a small but passionate team of developers, writers, designers, and relationship enthusiasts who believe that technology can be a force for connection and joy. We come from diverse backgrounds but share a common belief: that love, in all its forms, deserves to be celebrated.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-1">💻 Development Team</h4>
                    <p className="text-sm">Our engineers build fast, responsive, and accessible tools that work beautifully on every device — from phones to desktops. We use modern web technologies to ensure a smooth, enjoyable experience for every user.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-1">✍️ Content Team</h4>
                    <p className="text-sm">Our writers research and craft every blog article, poem, and tool description with care. We draw on relationship psychology, cultural studies, and real-world experience to create content that's both informative and engaging.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-1">🎨 Design Team</h4>
                    <p className="text-sm">Our designers create the warm, romantic aesthetic that makes Love Calculator feel special. From color palettes to animations, every visual element is designed to evoke feelings of love, warmth, and joy.</p>
                  </div>
                  <div className="bg-secondary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-1">🌍 Community Team</h4>
                    <p className="text-sm">Our community managers listen to user feedback, respond to inquiries, and ensure that Love Calculator continues to evolve based on what our users want and need. Your voice matters to us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 px-4 bg-secondary/20">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              Why Choose Love Calculator?
            </h2>
            <div className="space-y-3">
              {[
                { emoji: "✅", title: "100% Free", desc: "All tools and content are completely free. No hidden fees, no premium tiers, no registration walls." },
                { emoji: "🔒", title: "Privacy Protected", desc: "We never store your personal data. No names, no results, no tracking of your inputs. Your love life stays private." },
                { emoji: "📱", title: "Works Everywhere", desc: "Fully responsive design that works perfectly on phones, tablets, laptops, and desktops. Use our tools anywhere, anytime." },
                { emoji: "🚀", title: "Fast & Reliable", desc: "Built with modern web technology for instant loading and smooth performance. No lag, no waiting, no frustration." },
                { emoji: "📚", title: "Expert Content", desc: "22+ in-depth articles backed by relationship research, psychology, and cultural studies. Real value, not clickbait." },
                { emoji: "🔄", title: "Regularly Updated", desc: "We continuously add new tools, articles, and features based on user feedback and trending topics in love and relationships." },
                { emoji: "🌐", title: "Global Community", desc: "Used by thousands of people from 100+ countries. Love truly knows no borders, and neither does Love Calculator." },
                { emoji: "♿", title: "Accessible to All", desc: "We build with accessibility in mind, ensuring our tools can be used by everyone regardless of ability." },
              ].map((item, i) => (
                <div key={i} className="card-romantic rounded-lg p-4 flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Loved Around the World
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-6">
              Love Calculator is used by thousands of people from every corner of the globe. Our tools are accessible on any device — desktop, tablet, or mobile — and are completely free to use, with no registration required.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
              <div className="card-romantic rounded-xl p-4">
                <p className="font-display text-2xl font-bold text-primary">12+</p>
                <p className="text-xs text-muted-foreground">Love Tools</p>
              </div>
              <div className="card-romantic rounded-xl p-4">
                <p className="font-display text-2xl font-bold text-primary">22+</p>
                <p className="text-xs text-muted-foreground">Blog Articles</p>
              </div>
              <div className="card-romantic rounded-xl p-4">
                <p className="font-display text-2xl font-bold text-primary">48+</p>
                <p className="text-xs text-muted-foreground">Love Poems</p>
              </div>
              <div className="card-romantic rounded-xl p-4">
                <p className="font-display text-2xl font-bold text-primary">100+</p>
                <p className="text-xs text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Editorial Standards */}
        <section className="py-12 px-4 bg-secondary/20">
          <div className="max-w-3xl mx-auto">
            <div className="card-romantic rounded-xl p-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Our Editorial Standards
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We take our content seriously. Every article published on Love Calculator goes through a rigorous editorial process to ensure quality, accuracy, and value for our readers:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Research-backed:</strong> Our articles draw on relationship psychology, peer-reviewed studies, and expert opinions to provide accurate, helpful information.</li>
                  <li><strong>Original content:</strong> Every piece is written from scratch by our team. We never copy, spin, or repurpose content from other sources.</li>
                  <li><strong>Inclusive language:</strong> We write for all relationship types — heterosexual, LGBTQ+, long-distance, multicultural, and more. Love is love.</li>
                  <li><strong>Regular updates:</strong> We periodically review and update older articles to ensure they remain accurate and relevant.</li>
                  <li><strong>Clear disclaimers:</strong> Our entertainment tools (like the Love Calculator) are clearly labeled as fun and not scientifically validated. Read our <Link to="/disclaimer" className="text-primary hover:underline">Disclaimer</Link> for more details.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Have a suggestion, question, partnership inquiry, or just want to say hello? We'd love to hear from you! Our team typically responds within 24-48 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/5 transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/about" />
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
