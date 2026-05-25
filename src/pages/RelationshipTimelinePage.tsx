import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import RelationshipTimeline from "@/components/RelationshipTimeline";
import InternalLinks from "@/components/InternalLinks";
import BlogPreview from "@/components/BlogPreview";
import ShareButtons from "@/components/ShareButtons";
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
        keywords="relationship timeline, love milestones, couple timeline, anniversary tracker, relationship journey, love story timeline"
        dateModified="2026-05-25"
        faqSchema={[
          { question: "What is a relationship timeline?", answer: "A relationship timeline is a visual record of the key milestones in your love story — from your first date and first kiss to your anniversary, moving in together, and beyond. It's a beautiful way to celebrate how far you've come as a couple." },
          { question: "How do I create my relationship timeline?", answer: "Enter your relationship start date and the tool will automatically calculate your milestones. You can add custom events to personalise the timeline with your own special moments and memories." },
          { question: "Can I share my relationship timeline?", answer: "Yes! Once generated, you can share your timeline with your partner or on social media to celebrate your love story with friends and family." },
          { question: "Is the relationship timeline free?", answer: "Completely free. Create and explore as many timelines as you like with no sign-up required." },
          { question: "What milestones does the timeline include?", answer: "The timeline includes common milestones like your first date, first month, 100 days, six months, one year, and beyond. You can also mark personal milestones that are unique to your relationship." },
        ]}
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
          <div className="max-w-4xl mx-auto">
            <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  What Is the Relationship Timeline Creator? 📅
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  The <strong>Relationship Timeline Creator</strong> is a beautiful visual tool that lets you document your love story from the very beginning. Add milestones — your first date, first kiss, moving in together, engagement, wedding, or any moment that holds special meaning — and watch your relationship unfold as a stunning chronological timeline. Each milestone displays the date, a custom title, an emoji, and how many days of love you've shared.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Every love story is unique, and ours is the tool to capture yours. Unlike generic journaling apps, our <strong>relationship timeline</strong> is designed specifically for couples. It celebrates the progression of your partnership — from nervous first encounters to comfortable, deep-rooted love. Looking back at your timeline reminds you of how far you've come together and how many beautiful moments you've created.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Why Document Your Love Story? 💕
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Relationship psychologists have found that couples who regularly reflect on shared positive memories report higher satisfaction and stronger emotional bonds. Creating a <strong>relationship timeline</strong> isn't just sentimental — it's actually good for your partnership. When you take time to acknowledge what you've built together, you reinforce the foundation of your connection.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  A timeline also serves as a beautiful gift for anniversaries, weddings, or Valentine's Day. Imagine presenting your partner with a visual map of every important moment in your relationship — from the day you met to today. It's personal, thoughtful, and far more meaningful than anything you could buy in a store. Your love story, told through the milestones that made it extraordinary.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  How to Create Your Timeline ✨
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Getting started is simple. Enter both partners' names, then begin adding milestones one by one. For each milestone, select a date, write a title that captures the moment (like "Our First Road Trip" or "The Day You Said Yes"), and choose an emoji that brings it to life. The timeline automatically calculates the time between each event, creating a chronological story of your relationship.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Don't limit yourself to "big" moments. Some of the most meaningful milestones are the quiet ones — the first time you cooked dinner together, your first inside joke, the day you realized you were in love, or the night you stayed up talking until sunrise. These small moments are the threads that weave the fabric of your relationship.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Creative Milestone Ideas 🎨
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond the obvious dates like anniversaries and proposals, consider adding milestones like: meeting each other's families for the first time, your first vacation together, adopting a pet, surviving your first disagreement (and coming out stronger!), starting a new tradition, moving to a new city, or the moment you knew they were "the one."
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Every milestone tells a piece of your story, and together they create a narrative that's uniquely yours. After building your timeline, enhance your love celebration with our other tools — write a <Link to="/love-letter-generator" className="text-primary hover:underline">Love Letter</Link> to accompany it, browse our <Link to="/love-poetry" className="text-primary hover:underline">Love Poetry</Link> collection for verses to include, or check your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link> to add cosmic context to your love story!
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
                <h3 className="font-semibold text-foreground mb-2">What is a relationship timeline?</h3>
                <p className="text-muted-foreground text-sm">A relationship timeline is a visual record of the key milestones in your love story — from your first date and first kiss to your anniversary, moving in together, and beyond. It's a beautiful way to celebrate how far you've come as a couple.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">How do I create my relationship timeline?</h3>
                <p className="text-muted-foreground text-sm">Enter your relationship start date and the tool will automatically calculate your milestones. You can add custom events to personalise the timeline with your own special moments and memories.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Can I share my relationship timeline?</h3>
                <p className="text-muted-foreground text-sm">Yes! Once generated, you can share your timeline with your partner or on social media to celebrate your love story with friends and family.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Is the relationship timeline free?</h3>
                <p className="text-muted-foreground text-sm">Completely free. Create and explore as many timelines as you like with no sign-up required.</p>
              </div>
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What milestones does the timeline include?</h3>
                <p className="text-muted-foreground text-sm">The timeline includes common milestones like your first date, first month, 100 days, six months, one year, and beyond. You can also mark personal milestones that are unique to your relationship.</p>
              </div>
            </div>
          </div>
        </section>

        <ShareButtons title="Relationship Timeline" description="Create a beautiful visual timeline of your love story!" />
        <BlogPreview />

        <InternalLinks currentPage="/relationship-timeline" />
      </main>
      <Footer />
    </div>
  );
};

export default RelationshipTimelinePage;
