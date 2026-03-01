import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Heart, Users, Target, Shield, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="About Us - Love Calculator | Our Mission & Story"
        description="Learn about Love Calculator, our mission to spread love, and the team behind your favorite free online love compatibility tools."
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
                  Love Calculator was born out of a simple idea: love should be celebrated, explored, and enjoyed. What started as a small love compatibility calculator in 2024 has grown into a comprehensive platform offering over a dozen interactive love and relationship tools — from zodiac compatibility checks and love quizzes to couple name generators and romantic poetry collections.
                </p>
                <p>
                  We believe that everyone deserves moments of joy and connection. Whether you're in a long-term relationship, navigating a new crush, or simply curious about the mysteries of love, our tools are designed to bring a smile to your face and spark meaningful conversations with the people who matter most.
                </p>
                <p>
                  Today, Love Calculator serves thousands of users from around the world every month. Our growing community of love enthusiasts inspires us to keep building new features, writing insightful blog content, and making the experience more delightful with every update.
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
                  To make love fun, accessible, and celebratory for everyone. We create free, high-quality entertainment tools that help people explore and enjoy the lighter side of love and relationships.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Privacy First</h3>
                <p className="text-muted-foreground text-sm">
                  Your privacy matters to us deeply. We don't store any personal data you enter into our tools — no names, no dates, no results. Everything runs locally in your browser. Read our full <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Content</h3>
                <p className="text-muted-foreground text-sm">
                  Every tool, article, and poem on our site is carefully crafted to provide genuine value and entertainment. We regularly update our content to keep it fresh, relevant, and enjoyable for our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              What We Offer
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">🧮 Interactive Love Tools</h3>
                <p className="text-muted-foreground text-sm">
                  From our flagship <Link to="/love-calculator" className="text-primary hover:underline">Love Calculator</Link> to the <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> checker, <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name Generator</Link>, <Link to="/love-fortune-ball" className="text-primary hover:underline">Love Fortune Ball</Link>, and more — we offer over 10 unique interactive tools, all completely free to use.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">📝 Relationship Blog</h3>
                <p className="text-muted-foreground text-sm">
                  Our <Link to="/blog" className="text-primary hover:underline">Love & Relationship Blog</Link> features in-depth articles on topics like building stronger relationships, understanding love languages, zodiac compatibility guides, romantic date ideas, and much more. New articles are published regularly.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">💌 Creative Romance Tools</h3>
                <p className="text-muted-foreground text-sm">
                  Express your love creatively with our <Link to="/love-letter-generator" className="text-primary hover:underline">Love Letter Generator</Link>, browse our curated <Link to="/love-poetry" className="text-primary hover:underline">Love Poetry</Link> collection, or document your relationship milestones with the <Link to="/relationship-timeline" className="text-primary hover:underline">Relationship Timeline</Link> creator.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">🎮 Fun & Games</h3>
                <p className="text-muted-foreground text-sm">
                  Take the <Link to="/love-quiz" className="text-primary hover:underline">Love Style Quiz</Link> to discover your romantic personality, play the <Link to="/love-game" className="text-primary hover:underline">Love Hearts Catch Game</Link> for quick fun, or read your <Link to="/daily-horoscope" className="text-primary hover:underline">Daily Love Horoscope</Link> for romantic insights based on your zodiac sign.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-12 px-4 bg-secondary/20">
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
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="card-romantic rounded-xl p-4">
                <p className="font-display text-2xl font-bold text-primary">12+</p>
                <p className="text-xs text-muted-foreground">Love Tools</p>
              </div>
              <div className="card-romantic rounded-xl p-4">
                <p className="font-display text-2xl font-bold text-primary">7+</p>
                <p className="text-xs text-muted-foreground">Blog Articles</p>
              </div>
              <div className="card-romantic rounded-xl p-4">
                <p className="font-display text-2xl font-bold text-primary">48+</p>
                <p className="text-xs text-muted-foreground">Love Poems</p>
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
            <p className="text-muted-foreground mb-6">
              Have a suggestion, question, or just want to say hello? We'd love to hear from you!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <InternalLinks currentPage="/about" />
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
