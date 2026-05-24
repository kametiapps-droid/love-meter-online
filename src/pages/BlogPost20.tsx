import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogInlineLinks from "@/components/BlogInlineLinks";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import BlogRelatedPosts from "@/components/BlogRelatedPosts";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import blogImage from "@/assets/blog-self-love.jpg";
import ResponsiveImage from "@/components/ResponsiveImage";

const BlogPost20 = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="The Power of Self-Love: Why It Changes Everything"
        description="Discover why self-love is the foundation of healthy relationships. Learn practical strategies for building self-worth, confidence, and inner peace."
        path="/blog/self-love-guide"
        type="article"
        articleSchema={true}
        dateModified="2026-05-24"
        datePublished="2026-04-21"
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
                  alt="Self-love and personal growth"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="w-full h-full object-cover"
                  eager
                />
              </div>
              
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6 flex-wrap">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">Self-Love</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> April 21, 2026</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min read</span>
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> Love Calculator Team</span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  The Power of Self-Love: Why It Changes Everything
                </h1>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p className="text-lg leading-relaxed">
                    "You can't pour from an empty cup." This popular saying captures a profound truth: the quality of your relationships with others is directly linked to the quality of your relationship with yourself. Self-love isn't selfish — it's the foundation upon which all healthy, authentic love is built.
                  </p>

                  <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">What Self-Love Really Means</h2>
                  <p>Self-love is often misunderstood as narcissism or excessive self-focus. In reality, genuine self-love is about treating yourself with the same kindness, respect, and compassion you'd offer to someone you care about deeply. It means recognizing your inherent worth — not because of what you achieve or how you look, but simply because you exist.</p>
                  <p>Self-love encompasses: setting healthy boundaries, honoring your needs and emotions, taking care of your physical and mental health, forgiving yourself for mistakes, pursuing growth without perfectionism, and choosing relationships that uplift rather than diminish you.</p>

                  <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Why Self-Love Matters for Romantic Relationships</h2>
                  <p>Research consistently shows that people with <Link to="/blog/emotional-intelligence-love" className="text-primary hover:underline font-medium">healthy self-esteem</Link> form more <Link to="/blog/love-relationships-guide" className="text-primary hover:underline font-medium">satisfying relationships</Link>. Here's why:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>You attract healthier partners:</strong> When you value yourself, you naturally gravitate toward people who treat you well and away from those who don't.</li>
                    <li><strong>You set better boundaries:</strong> Self-love gives you the confidence to say no to behaviors that harm you.</li>
                    <li><strong>You don't depend on your partner for validation:</strong> Instead of needing your partner to make you feel worthy, you bring your own sense of worth into the relationship.</li>
                    <li><strong>You communicate more authentically:</strong> When you know and accept yourself, you can express your needs clearly without fear of rejection.</li>
                    <li><strong>You love more freely:</strong> Paradoxically, loving yourself more allows you to love others more generously, because you're not operating from a place of deficit.</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">15 Practical Self-Love Strategies</h2>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mt-6 mb-3">Daily Practices</h3>
                  <ol className="list-decimal pl-6 space-y-3">
                    <li><strong>Morning affirmations:</strong> Start your day by affirming your worth. "I am enough as I am. I deserve love and respect."</li>
                    <li><strong>Mindful self-compassion:</strong> When you notice self-critical thoughts, pause and ask: "Would I say this to a friend?" Replace harsh self-talk with gentle encouragement.</li>
                    <li><strong>Physical care:</strong> Exercise not to punish your body but to celebrate what it can do. Eat nourishing foods. Get adequate sleep.</li>
                    <li><strong>Gratitude for yourself:</strong> List three things you appreciate about yourself each day — your qualities, efforts, or achievements.</li>
                    <li><strong>Digital detox:</strong> Reduce exposure to social media content that triggers comparison. Curate your feed to include uplifting, body-positive, and empowering content.</li>
                  </ol>

                  <h3 className="font-display text-xl font-bold text-foreground mt-6 mb-3">Weekly Practices</h3>
                  <ol className="list-decimal pl-6 space-y-3" start={6}>
                    <li><strong>Solo dates:</strong> Take yourself out — to a movie, restaurant, park, or museum. Enjoy your own company without the distraction of a phone.</li>
                    <li><strong>Journaling:</strong> Write about your feelings, goals, and growth. Journaling helps you process emotions and track your self-love journey.</li>
                    <li><strong>Boundary audit:</strong> Review your relationships and commitments. Are you saying yes out of obligation rather than genuine desire? Where do you need stronger boundaries?</li>
                    <li><strong>Creative expression:</strong> Paint, write, dance, cook, or make music. Creative activities connect you with your authentic self and provide joy independent of external validation.</li>
                    <li><strong>Nature connection:</strong> Spend time outdoors. Nature has been shown to reduce stress, improve mood, and foster a sense of connection and perspective.</li>
                  </ol>

                  <h3 className="font-display text-xl font-bold text-foreground mt-6 mb-3">Deeper Practices</h3>
                  <ol className="list-decimal pl-6 space-y-3" start={11}>
                    <li><strong>Inner child work:</strong> Many self-love challenges stem from childhood wounds. <Link to="/blog/emotional-intelligence-love" className="text-primary hover:underline font-medium">Therapy</Link> or guided meditation can help you reconnect with and heal your inner child.</li>
                    <li><strong>Forgive yourself:</strong> Let go of past mistakes and regrets. You made the best decisions you could with the information and resources you had at the time.</li>
                    <li><strong>Define your values:</strong> Know what matters most to you and align your life accordingly. Living in alignment with your values creates deep self-respect.</li>
                    <li><strong>Celebrate your wins:</strong> Don't wait for major accomplishments. Acknowledge daily victories, no matter how small.</li>
                    <li><strong>Invest in personal growth:</strong> Read, take courses, attend workshops, or work with a therapist or coach. Continuous growth demonstrates love for your future self.</li>
                  </ol>

                  <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Overcoming Common Self-Love Blocks</h2>
                  <p>If self-love feels difficult, you're not alone. Common blocks include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Childhood conditioning:</strong> If you grew up with criticism or neglect, self-love may feel unnatural. A therapist can help rewire these patterns.</li>
                    <li><strong>Perfectionism:</strong> The belief that you must be perfect to be worthy. Remember: you are a work in progress, and that's beautiful.</li>
                    <li><strong>Comparison:</strong> Social media amplifies comparison. Remember that you're comparing your behind-the-scenes to everyone else's highlight reel.</li>
                    <li><strong>Guilt:</strong> Some people feel guilty about prioritizing themselves. Self-love isn't selfish — it's necessary for being your best self in all your relationships.</li>
                  </ul>

                  <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-4">Self-Love Quotes to Inspire You</h2>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "To love oneself is the beginning of a lifelong romance." — Oscar Wilde
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "You yourself, as much as anybody in the entire universe, deserve your love and affection." — Buddha
                  </blockquote>
                  <blockquote className="border-l-4 border-primary pl-4 italic">
                    "Your relationship with yourself sets the tone for every other relationship you have." — Robert Holden
                  </blockquote>

                  <div className="bg-secondary/30 rounded-xl p-6 mt-8">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">💡 Key Takeaway</h3>
                    <p>Self-love is not a destination but a daily practice. It's the continuous choice to show up for yourself with kindness, to honor your needs, and to believe in your inherent worthiness of love. When you master self-love, you transform not only your relationship with yourself but every relationship in your life.</p>
                  </div>

                  <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">Express Your Love</h3>
                    <p>Write yourself a love letter using our <Link to="/love-letter-generator" className="text-primary hover:underline">Love Letter Generator</Link>, or explore our curated <Link to="/love-poetry" className="text-primary hover:underline">Love Poetry</Link> collection for inspiration. You deserve to receive beautiful words — even from yourself. 💕</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BlogInlineLinks postId="self-love-guide" />
        </article>
        <BlogRelatedPosts currentPostId="self-love-guide" />
        <InternalLinks currentPage="/blog/self-love-guide" />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost20;
