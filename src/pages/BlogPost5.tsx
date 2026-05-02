import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogInlineLinks from "@/components/BlogInlineLinks";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import BlogRelatedPosts from "@/components/BlogRelatedPosts";
import SEO from "@/components/SEO";
import { Calendar, Clock, Heart, MessageCircle, Gift, HandHeart, Timer } from "lucide-react";
import blogImage from "@/assets/blog-love-languages.jpg";
import ResponsiveImage from "@/components/ResponsiveImage";

const BlogPost5 = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="The 5 Love Languages Explained - Find Your Love Language"
        description="Learn about the 5 love languages and discover how you and your partner express love. Improve your relationship with this guide."
        path="/blog/five-love-languages"
        type="article"
        articleSchema={true}
        dateModified="2026-04-09"
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <article className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Relationships</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> February 12, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 10 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                The 5 Love Languages: Understanding How You Give and Receive Love
              </h1>
              <p className="text-lg text-muted-foreground">Master the art of expressing love in the way your partner truly understands and appreciates it.</p>
            </div>

            <div className="rounded-2xl overflow-hidden mb-10">
              <ResponsiveImage
                  src={blogImage}
                  alt="Five love languages hearts illustration"
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="w-full h-64 md:h-96 object-cover"
                  eager
                />
            </div>

            <div className="prose prose-lg max-w-none card-romantic rounded-2xl p-6 md:p-10">
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" /> What Are the Five Love Languages?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In 1992, Dr. Gary Chapman introduced a revolutionary concept that has since transformed how millions of people understand and navigate their relationships: the five love languages. The premise is elegantly simple yet profoundly impactful — each person has a primary way they prefer to give and receive love, and understanding these preferences is the key to deeper, more fulfilling connections.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The five love languages are Words of Affirmation, Acts of Service, Receiving Gifts, Quality Time, and Physical Touch. While most people appreciate all five to some degree, everyone has one or two primary love languages that resonate most deeply with them. When your partner expresses love in your primary language, it fills your "emotional love tank" and makes you feel truly loved and valued.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The challenge many couples face is that they often speak different love languages. You might show your love by doing household chores (Acts of Service), while your partner craves heartfelt compliments (Words of Affirmation). Neither person is wrong — they are simply speaking different emotional dialects. Learning to recognize and speak your partner's love language is one of the most powerful skills you can develop for a lasting, happy relationship.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" /> Words of Affirmation
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For people whose primary love language is Words of Affirmation, hearing "I love you," receiving genuine compliments, and getting verbal encouragement means the world. These individuals thrive on verbal expressions of love, appreciation, and recognition. A simple "You look beautiful today" or "I'm so proud of you" can light up their entire day.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Words of affirmation go beyond just saying "I love you." They include expressing appreciation for specific things your partner does, offering encouragement when they face challenges, and using kind, supportive language in everyday conversations. Writing love notes, sending sweet text messages throughout the day, and publicly acknowledging your partner's accomplishments are all powerful ways to speak this love language.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If your partner's love language is Words of Affirmation, be mindful that negative words can be especially hurtful. Harsh criticism, sarcasm, or dismissive comments can wound them deeply and take much longer to heal than they might for someone with a different primary love language. Choose your words carefully and make a conscious effort to build your partner up with genuine, heartfelt expressions of love and admiration.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <HandHeart className="w-6 h-6 text-primary" /> Acts of Service
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "Actions speak louder than words" is the motto of people whose primary love language is Acts of Service. For these individuals, nothing says "I love you" quite like having their partner cook dinner, fix something around the house, or take care of a task they have been dreading. These thoughtful actions communicate love through effort and consideration.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The key to speaking this love language effectively is paying attention to what your partner needs and taking initiative to help without being asked. It might be making their morning coffee, picking up groceries on the way home, organizing their workspace, or handling a stressful errand on their behalf. The specific act matters less than the intention behind it — showing your partner that you are willing to invest time and energy to make their life easier and more pleasant.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For those who value Acts of Service, broken promises and laziness can be deeply hurtful. If you say you will do something, follow through. Consistency in these small acts of love builds a foundation of trust and security that is essential for a healthy relationship. Remember, every act of service is a tangible demonstration of your love and commitment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Gift className="w-6 h-6 text-primary" /> Receiving Gifts
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  People whose love language is Receiving Gifts are not materialistic — they are deeply moved by the thoughtfulness and effort behind a gift. For them, a carefully chosen present, no matter how small or inexpensive, is a visible symbol of love. The gift represents that their partner was thinking about them, took the time to find something meaningful, and wanted to make them happy.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The most meaningful gifts are often the ones that show deep knowledge of the recipient. A book by their favorite author, a small trinket that reminds you of an inside joke, or a handmade card that expresses your feelings — these thoughtful gestures speak volumes to someone with this love language. The price tag is irrelevant; what matters is the thought, effort, and love behind the gesture.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  One of the most powerful gifts you can give is the gift of your presence during important moments. Showing up for your partner during times of crisis, celebration, or need is a gift that communicates your unwavering support and love. For people with this love language, your physical presence during meaningful moments is the greatest present of all.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Timer className="w-6 h-6 text-primary" /> Quality Time and Physical Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Quality Time is about giving your partner your undivided attention. In our digital age of constant notifications and distractions, truly being present with someone has become one of the most precious gifts you can offer. For people with this love language, nothing beats a deep conversation, a shared activity, or simply sitting together without the interference of phones, television, or other distractions.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Quality time does not require expensive outings or elaborate plans. It can be as simple as cooking dinner together, taking a walk in the park, or having a meaningful conversation before bed. The key is being fully present — making eye contact, actively listening, and showing genuine interest in your partner's thoughts and feelings. When you give someone your time, you are giving them a portion of your life that you can never get back, making it one of the most valuable expressions of love.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Physical Touch is perhaps the most instinctive love language. From the moment we are born, physical contact is essential for our emotional development and well-being. For adults whose primary love language is Physical Touch, nothing communicates love more clearly than a warm hug, a gentle hand on the shoulder, or sitting close together on the couch.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Understanding your own love language and your partner's can transform your relationship. Take our <a href="/love-quiz" className="text-primary hover:underline">Love Quiz</a> to discover more about your relationship style, check your <a href="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</a> for cosmic relationship insights, or use our <a href="/love-calculator" className="text-primary hover:underline">Love Calculator</a> for a fun compatibility check with your special someone.
                </p>
              </section>
            </div>
          </div>
          <BlogInlineLinks />
        </article>
        <BlogRelatedPosts currentPostId="five-love-languages" />
        <InternalLinks currentPage="/blog/five-love-languages" />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost5;
