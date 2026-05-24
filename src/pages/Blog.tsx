import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import blogLoveImage from "@/assets/blog-love-relationships.jpg";
import blogZodiacImage from "@/assets/blog-zodiac-astrology.jpg";
import blogNameImage from "@/assets/blog-name-meanings.jpg";
import blogFactsImage from "@/assets/blog-love-facts.jpg";
import blogLanguagesImage from "@/assets/blog-love-languages.jpg";
import blogDistanceImage from "@/assets/blog-long-distance.jpg";
import blogDateImage from "@/assets/blog-date-ideas.jpg";
import blogSignsImage from "@/assets/blog-signs-true-love.jpg";
import blogSparkImage from "@/assets/blog-keep-spark-alive.jpg";
import blogScienceImage from "@/assets/blog-science-attraction.jpg";
import blogGoalsImage from "@/assets/blog-relationship-goals.jpg";
import blogLetterImage from "@/assets/blog-write-love-letter.jpg";
import blogFirstDateImage from "@/assets/blog-first-date-tips.jpg";
import blogCommunicationImage from "@/assets/blog-healthy-communication.jpg";
import blogQuotesImage from "@/assets/blog-love-quotes.jpg";
import blogProposalImage from "@/assets/blog-proposal-ideas.jpg";
import blogApologizeImage from "@/assets/blog-apologize-relationship.jpg";
import blogTrustImage from "@/assets/blog-trust-building.jpg";
import blogEQImage from "@/assets/blog-emotional-intelligence.jpg";
import blogSelfLoveImage from "@/assets/blog-self-love.jpg";
import blogAnniversaryImage from "@/assets/blog-anniversary-ideas.jpg";
import blogCulturesImage from "@/assets/blog-love-cultures.jpg";

const blogPosts = [
  {
    id: "love-compatibility-name-date-birth",
    title: "Love Compatibility by Name and Date of Birth: Complete Guide",
    excerpt: "Learn how name + birthdate compatibility works using numerology, FLAMES, and zodiac matching to find your true love percentage.",
    image: blogLoveImage,
    date: "May 10, 2026",
    readTime: "9 min read",
    category: "Love Calculator"
  },
  {
    id: "true-love-test-signs",
    title: "True Love Test: 12 Signs You've Found The One",
    excerpt: "Discover 12 powerful, psychology-backed signs that prove you've found The One — the ultimate true love test for couples.",
    image: blogSignsImage,
    date: "May 10, 2026",
    readTime: "10 min read",
    category: "True Love"
  },
  {
    id: "trust-building-relationships",
    title: "How to Build Trust in a Relationship: 15 Expert Strategies",
    excerpt: "Learn proven strategies to build, rebuild, and maintain trust for a secure, lasting bond with your partner.",
    image: blogTrustImage,
    date: "March 9, 2026",
    readTime: "14 min read",
    category: "Trust & Bonding"
  },
  {
    id: "emotional-intelligence-love",
    title: "Emotional Intelligence in Love: How EQ Makes Better Relationships",
    excerpt: "Discover how emotional intelligence transforms your love life with deeper connection and better communication.",
    image: blogEQImage,
    date: "March 9, 2026",
    readTime: "13 min read",
    category: "Emotional Intelligence"
  },
  {
    id: "self-love-guide",
    title: "The Power of Self-Love: Why Loving Yourself First Changes Everything",
    excerpt: "Discover why self-love is the foundation of healthy relationships and learn practical strategies for self-worth.",
    image: blogSelfLoveImage,
    date: "March 10, 2026",
    readTime: "12 min read",
    category: "Self-Love"
  },
  {
    id: "anniversary-celebration-ideas",
    title: "50 Romantic Anniversary Ideas: Celebrate Your Love in Style",
    excerpt: "From budget-friendly to luxurious, discover 50 creative anniversary celebration ideas for every couple.",
    image: blogAnniversaryImage,
    date: "March 10, 2026",
    readTime: "14 min read",
    category: "Anniversaries"
  },
  {
    id: "love-different-cultures",
    title: "Love Around the World: How Different Cultures Express Romance",
    excerpt: "Explore fascinating love traditions, dating customs, and romantic expressions from cultures around the globe.",
    image: blogCulturesImage,
    date: "March 10, 2026",
    readTime: "15 min read",
    category: "Culture & Love"
  },
  {
    id: "first-date-tips",
    title: "25 First Date Tips That Actually Work: Expert Advice",
    excerpt: "Nervous about your first date? These proven tips will help you make a great impression and build genuine connection.",
    image: blogFirstDateImage,
    date: "March 6, 2026",
    readTime: "12 min read",
    category: "Dating Tips"
  },
  {
    id: "healthy-communication-relationships",
    title: "Healthy Communication in Relationships: 20 Expert Tips",
    excerpt: "Master active listening, conflict resolution, and emotional intelligence to strengthen your love.",
    image: blogCommunicationImage,
    date: "March 7, 2026",
    readTime: "12 min read",
    category: "Communication"
  },
  {
    id: "beautiful-love-quotes",
    title: "100 Most Beautiful Love Quotes of All Time",
    excerpt: "A curated collection of the world's most romantic, inspiring, and timeless love quotes.",
    image: blogQuotesImage,
    date: "March 7, 2026",
    readTime: "15 min read",
    category: "Love Quotes"
  },
  {
    id: "marriage-proposal-ideas",
    title: "20 Unforgettable Marriage Proposal Ideas",
    excerpt: "Creative, romantic, and deeply personal proposal ideas for every couple and every budget.",
    image: blogProposalImage,
    date: "March 7, 2026",
    readTime: "13 min read",
    category: "Proposals"
  },
  {
    id: "how-to-apologize-relationship",
    title: "How to Apologize in a Relationship: The Art of Saying Sorry",
    excerpt: "Learn how to give a sincere, meaningful apology that heals your relationship and rebuilds trust.",
    image: blogApologizeImage,
    date: "March 7, 2026",
    readTime: "11 min read",
    category: "Relationships"
  },
  {
    id: "signs-partner-truly-loves-you",
    title: "15 Unmistakable Signs Your Partner Truly Loves You",
    excerpt: "Learn to recognize the genuine signs of true love beyond words — through actions, consistency, and deep emotional connection.",
    image: blogSignsImage,
    date: "March 1, 2026",
    readTime: "10 min read",
    category: "Love & Relationships"
  },
  {
    id: "keep-spark-alive-relationship",
    title: "How to Keep the Spark Alive in Your Relationship: A Complete Guide",
    excerpt: "Proven strategies to maintain passion, excitement, and deep emotional connection in your long-term relationship.",
    image: blogSparkImage,
    date: "March 2, 2026",
    readTime: "10 min read",
    category: "Relationships"
  },
  {
    id: "science-of-attraction",
    title: "The Science of Attraction: Why We Fall in Love",
    excerpt: "Discover the fascinating psychology, biology, and chemistry behind why we're drawn to certain people.",
    image: blogScienceImage,
    date: "March 3, 2026",
    readTime: "11 min read",
    category: "Psychology"
  },
  {
    id: "relationship-goals-couples",
    title: "30 Meaningful Relationship Goals Every Couple Should Set",
    excerpt: "Beyond Instagram-perfect moments, these are the real relationship goals that build lasting love.",
    image: blogGoalsImage,
    date: "March 4, 2026",
    readTime: "10 min read",
    category: "Couple Goals"
  },
  {
    id: "how-to-write-love-letter",
    title: "How to Write the Perfect Love Letter: Tips & Examples",
    excerpt: "Master the timeless art of writing love letters that capture your deepest feelings and make hearts sing.",
    image: blogLetterImage,
    date: "March 5, 2026",
    readTime: "10 min read",
    category: "Romance"
  },
  {
    id: "love-relationships-guide",
    title: "The Complete Guide to Building Strong and Lasting Relationships",
    excerpt: "Discover the secrets to nurturing love, improving communication, and building a relationship that stands the test of time.",
    image: blogLoveImage,
    date: "February 5, 2026",
    readTime: "8 min read",
    category: "Love & Relationships"
  },
  {
    id: "zodiac-compatibility-guide",
    title: "Understanding Zodiac Compatibility: A Complete Astrology Guide",
    excerpt: "Learn how zodiac signs influence relationships and discover which signs are most compatible with yours.",
    image: blogZodiacImage,
    date: "February 4, 2026",
    readTime: "9 min read",
    category: "Zodiac & Astrology"
  },
  {
    id: "name-meanings-origins",
    title: "The Beautiful World of Name Meanings: Origins, History & Significance",
    excerpt: "Explore the fascinating stories behind popular names, their cultural origins, and how they shape our identity.",
    image: blogNameImage,
    date: "February 14, 2026",
    readTime: "10 min read",
    category: "Name Meanings"
  },
  {
    id: "love-facts-trivia",
    title: "50 Fascinating Love Facts & Trivia That Will Blow Your Mind",
    excerpt: "Discover surprising statistics, scientific findings, and cultural traditions about love from around the world.",
    image: blogFactsImage,
    date: "February 13, 2026",
    readTime: "9 min read",
    category: "Fun Facts"
  },
  {
    id: "five-love-languages",
    title: "The 5 Love Languages: Understanding How You Give and Receive Love",
    excerpt: "Master the art of expressing love in the way your partner truly understands and appreciates it.",
    image: blogLanguagesImage,
    date: "February 12, 2026",
    readTime: "10 min read",
    category: "Relationships"
  },
  {
    id: "long-distance-relationships",
    title: "Long Distance Relationships: The Ultimate Guide to Making Love Work Across Miles",
    excerpt: "Proven strategies, communication tips, and creative ideas to keep your long-distance love strong.",
    image: blogDistanceImage,
    date: "February 11, 2026",
    readTime: "10 min read",
    category: "Relationships"
  },
  {
    id: "romantic-date-ideas",
    title: "75 Romantic Date Ideas for Every Budget: From Free Adventures to Luxury Experiences",
    excerpt: "Never run out of date ideas again! Creative, romantic, and unforgettable ways to spend time together.",
    image: blogDateImage,
    date: "February 10, 2026",
    readTime: "10 min read",
    category: "Date Ideas"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Love Blog - Shadi, Rishta & Relationship Tips for Couples"
        description="Love, shadi & relationship advice — dating tips, zodiac compatibility, love languages & romantic shayari for Indian & Asian readers."
        path="/blog"
        keywords="love blog, shadi tips, rishta advice, relationship advice in english, indian love stories, pakistani couple tips, asian dating advice, romantic shayari, love marriage, arranged marriage tips, zodiac compatibility, long distance relationship"
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Love & Relationship Blog</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Love <span className="text-gradient">Articles & Stories</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Heartfelt love articles, shadi & rishta tips, dating advice, zodiac guides and romantic inspiration for couples everywhere. 💕
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group card-romantic rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <ResponsiveImage
                    src={post.image}
                    alt={post.title}
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3 flex-wrap">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <InternalLinks currentPage="/blog" />
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
