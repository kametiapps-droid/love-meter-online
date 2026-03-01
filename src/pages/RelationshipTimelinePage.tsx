import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import RelationshipTimeline from "@/components/RelationshipTimeline";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const RelationshipTimelinePage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Relationship Timeline - Track Your Love Journey Together"
        description="Create and visualize your relationship timeline. Track milestones, anniversaries, and special moments in your love story."
        path="/relationship-timeline"
      />
      <FloatingHearts />
      <Header />
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Your Love Story</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Relationship <span className="text-gradient">Timeline</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Document your love story with a beautiful visual timeline of your most cherished milestones! 📅💕
            </p>
          </div>
        </section>

        <RelationshipTimeline />

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About the Relationship Timeline
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What is the Relationship Timeline Creator?</h3>
                <p className="text-muted-foreground text-sm">
                  Our Relationship Timeline Creator lets you build a beautiful visual timeline of your love story. Add important milestones — your first date, first kiss, engagement, wedding, or any moment that matters. Each milestone displays the date, a custom title, emoji, and how many days of love you've shared. It's a wonderful way to celebrate your journey together.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Why Document Your Relationship?</h3>
                <p className="text-muted-foreground text-sm">
                  Documenting relationship milestones strengthens emotional bonds by helping couples reflect on shared memories. Research shows that couples who actively recall positive shared experiences report higher relationship satisfaction. A visual timeline serves as a love diary — a tangible reminder of how far you've come and all the beautiful moments you've created together.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How to Create Your Timeline</h3>
                <p className="text-muted-foreground text-sm">
                  Enter both partners' names, then add milestones one by one. For each milestone, choose a date, write a title (like "Our First Kiss" or "Moved In Together"), and pick an emoji that captures the moment. The timeline automatically calculates the days between each event, creating a beautiful chronological story of your relationship.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Creative Ideas for Milestones</h3>
                <p className="text-muted-foreground text-sm">
                  Beyond the obvious dates, consider adding fun milestones like: your first road trip, meeting each other's parents, adopting a pet together, your first holiday, surviving your first argument, or cooking a meal together for the first time. Every memory counts! Generate a <Link to="/love-letter-generator" className="text-primary hover:underline">Love Letter</Link> to accompany your timeline.
                </p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">More Ways to Celebrate Your Love</h3>
                <p className="text-muted-foreground text-sm">
                  After creating your timeline, explore more of our love tools! Check your <Link to="/love-calculator" className="text-primary hover:underline">Love Compatibility</Link>, create a <Link to="/couple-name-generator" className="text-primary hover:underline">Couple Name</Link>, discover your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link>, or browse our <Link to="/love-poetry" className="text-primary hover:underline">Love Poetry</Link> collection for beautiful verses to share.
                </p>
              </div>
            </div>
          </div>
        </section>

        <InternalLinks currentPage="/relationship-timeline" />
      </main>
      <Footer />
    </div>
  );
};

export default RelationshipTimelinePage;
