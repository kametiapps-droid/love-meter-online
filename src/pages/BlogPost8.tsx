import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogInlineLinks from "@/components/BlogInlineLinks";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import BlogRelatedPosts from "@/components/BlogRelatedPosts";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Heart, Eye, Shield, MessageCircle, Star } from "lucide-react";
import blogImage from "@/assets/blog-signs-true-love.jpg";
import ResponsiveImage from "@/components/ResponsiveImage";

const BlogPost8 = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="15 Signs Your Partner Truly Loves You"
        description="Discover the genuine signs that your partner truly loves you. Learn to recognize real love through actions, behaviors, and emotional connection."
        path="/blog/signs-partner-truly-loves-you"
        type="article"
        articleSchema={true}
        dateModified="2026-05-24"
        datePublished="2026-02-24"
      />
      <FloatingHearts />
      <Header />

      <main className="flex-1 relative z-10">
        <article className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>

            <div className="card-romantic rounded-2xl overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <ResponsiveImage
                  src={blogImage}
                  alt="Couple holding hands at sunset showing true love"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="w-full h-full object-cover"
                  eager
                />
              </div>

              <div className="p-6 md:p-10">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">Love & Relationships</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> February 24, 2026</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min read</span>
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> Love Calculator Team</span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  15 Unmistakable Signs Your Partner Truly Loves You
                </h1>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <section className="mb-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Heart className="w-6 h-6 text-primary" /> Understanding True Love
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Love is one of the most powerful emotions humans experience, yet it can sometimes be difficult to distinguish genuine love from infatuation, attachment, or even codependency. True love goes beyond butterflies in your stomach or passionate declarations — it's shown through consistent actions, mutual respect, and a deep commitment to each other's well-being.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Psychologists have spent decades studying what constitutes authentic love. According to Robert Sternberg's <Link to="/blog/science-of-attraction" className="text-primary hover:underline font-medium">Triangular Theory of Love</Link>, consummate love — the most complete form — requires three components: intimacy (emotional closeness), passion (physical and emotional excitement), and commitment (the decision to maintain the relationship). When all three are present and sustained over time, you've found something truly special.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      But how do you know if your partner's love is genuine? While every relationship is unique, there are universal signs that indicate deep, authentic love. Here are 15 unmistakable signs that your partner truly loves you.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Eye className="w-6 h-6 text-primary" /> Emotional Signs of True Love
                    </h2>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">1. They Listen to You — Really Listen</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A partner who truly loves you doesn't just hear your words — <Link to="/blog/healthy-communication-relationships" className="text-primary hover:underline font-medium">they actively listen</Link>. They remember the small details you mentioned weeks ago, ask follow-up questions about things that matter to you, and make you feel heard and understood. Active listening is one of the strongest indicators of emotional investment in a relationship.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">2. They Respect Your Boundaries</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      True love never demands that you sacrifice your personal boundaries. A loving partner respects your need for space, understands your limits, and never pressures you into situations that make you uncomfortable. They see your boundaries not as obstacles but as important aspects of who you are.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">3. They Support Your Dreams</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      When someone genuinely loves you, your success doesn't threaten them — it excites them. They encourage your ambitions, celebrate your achievements (no matter how small), and help you work toward your goals. They're your biggest cheerleader, not your biggest competitor.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">4. They're Vulnerable With You</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Vulnerability is the cornerstone of intimate connection. A partner who truly loves you will share their fears, insecurities, and past wounds with you. They trust you enough to show their imperfect side because they know real love isn't about being perfect — it's about being real.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">5. They Make You Feel Safe</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Emotional safety is a hallmark of genuine love. You should feel comfortable expressing your feelings without fear of judgment, ridicule, or retaliation. A loving partner creates an environment where you can be your authentic self without anxiety about their reaction.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-primary" /> Behavioral Signs of True Love
                    </h2>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">6. They Show Up Consistently</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Love isn't just about grand gestures on special occasions — it's about showing up every day. A partner who loves you is reliable, keeps their promises, and is there for you during both the exciting moments and the mundane ones. Consistency is the true measure of commitment.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">7. They Make Sacrifices Without Keeping Score</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      In a loving relationship, both partners naturally make compromises and sacrifices for each other. The key difference is that a truly loving partner doesn't keep a mental tally of everything they've done for you. They give freely because seeing you happy genuinely makes them happy.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">8. They Include You in Their Future Plans</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      When your partner talks about the future and naturally includes you in those plans, it's a powerful sign of genuine love. Whether it's planning a vacation next year, discussing where to live, or talking about life goals, a loving partner sees their future with you in it.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">9. They Choose You Every Day</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Real love is a daily choice. A partner who truly loves you chooses to be with you not because they have to, but because they want to. Even during difficult times, arguments, or when the initial excitement fades, they continue choosing you and the relationship.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">10. They Apologize and Take Responsibility</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Nobody is perfect, and conflicts are inevitable in any relationship. What matters is how your partner handles mistakes. A loving partner takes responsibility for their actions, offers <Link to="/blog/how-to-apologize-relationship" className="text-primary hover:underline font-medium">sincere apologies</Link>, and actively works to avoid repeating the same mistakes. Their ego never outweighs their love for you.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <MessageCircle className="w-6 h-6 text-primary" /> Communication Signs
                    </h2>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">11. They Communicate Openly and Honestly</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Open communication is the lifeline of any healthy relationship. A partner who truly loves you doesn't hide important things, avoid difficult conversations, or give you the silent treatment. They express their thoughts and feelings honestly, even when it's uncomfortable, because they value the relationship more than their comfort.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">12. They Fight Fair</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Every couple argues, but how you argue reveals everything about the quality of your love. A loving partner fights to resolve issues, not to win. They avoid name-calling, bringing up past mistakes, or using your vulnerabilities against you. Their goal in any disagreement is to find a solution together.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">13. They Show Interest in Your World</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      A partner who loves you genuinely cares about the things that matter to you — even if they're not personally interested. They'll watch your favorite show, meet your friends, learn about your hobbies, and engage with your passions because they want to understand and connect with every part of your life.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Star className="w-6 h-6 text-primary" /> The Deeper Signs
                    </h2>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">14. They Love You at Your Worst</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      It's easy to love someone when everything is going well. The true test of love comes during the hard times — when you're stressed, sick, grieving, or going through personal challenges. A partner who genuinely loves you stands by you during your darkest moments without conditions or complaints. They don't love a perfect version of you; they love the real, complete you.
                    </p>

                    <h3 className="font-display text-xl font-bold text-foreground mb-3">15. They Make You a Better Person</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Perhaps the most beautiful sign of true love is that it inspires growth. A loving partner challenges you to be your best self — not through criticism or pressure, but through their own example and gentle encouragement. You find yourself becoming kinder, more patient, more ambitious, and more compassionate because of their influence in your life.
                    </p>
                  </section>

                  <section className="mb-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">Final Thoughts: Trust Your Heart and Your Eyes</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Recognizing true love isn't always easy, especially if you've experienced unhealthy relationships in the past. But when you find someone who consistently shows these signs, trust what you see. Actions will always speak louder than words, and genuine love reveals itself through consistent, caring behavior over time.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Remember that no relationship is perfect, and even the most loving partners won't exhibit all 15 signs 100% of the time. What matters is the overall pattern of behavior and the genuine effort both of you put into nurturing your connection. True love is a journey, not a destination — and the most beautiful part is growing together along the way.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      If you're curious about your romantic compatibility, try our <a href="/" className="text-primary hover:underline">Love Calculator</a> for a fun compatibility check, or explore your <a href="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</a> to see how the stars align for your relationship! 💕
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <BlogInlineLinks postId="signs-partner-truly-loves-you" />
        </article>
        <BlogRelatedPosts currentPostId="signs-partner-truly-loves-you" />
        <InternalLinks currentPage="/blog/signs-partner-truly-loves-you" />
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost8;
