import { Link } from "react-router-dom";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import ResponsiveImage from "@/components/ResponsiveImage";
import blogSignsImage from "@/assets/blog-signs-true-love.jpg";
import blogScienceImage from "@/assets/blog-science-attraction.jpg";
import blogTrustImage from "@/assets/blog-trust-building.jpg";
import blogSelfLoveImage from "@/assets/blog-self-love.jpg";

const featuredPosts = [
  { id: "trust-building-relationships", title: "How to Build Trust in a Relationship: 15 Expert Strategies", image: blogTrustImage, readTime: "14 min", category: "Trust & Bonding" },
  { id: "self-love-guide", title: "The Power of Self-Love: Why Loving Yourself First Changes Everything", image: blogSelfLoveImage, readTime: "12 min", category: "Self-Love" },
  { id: "signs-partner-truly-loves-you", title: "15 Unmistakable Signs Your Partner Truly Loves You", image: blogSignsImage, readTime: "10 min", category: "Love & Relationships" },
  { id: "science-of-attraction", title: "The Science of Attraction: Why We Fall in Love", image: blogScienceImage, readTime: "11 min", category: "Psychology" },
];

const allBlogLinks = [
  { id: "trust-building-relationships", title: "How to Build Trust in a Relationship" },
  { id: "emotional-intelligence-love", title: "Emotional Intelligence in Love" },
  { id: "self-love-guide", title: "The Power of Self-Love" },
  { id: "anniversary-celebration-ideas", title: "50 Romantic Anniversary Ideas" },
  { id: "love-different-cultures", title: "Love Around the World" },
  { id: "first-date-tips", title: "25 First Date Tips That Work" },
  { id: "healthy-communication-relationships", title: "Healthy Communication Tips" },
  { id: "beautiful-love-quotes", title: "100 Most Beautiful Love Quotes" },
  { id: "marriage-proposal-ideas", title: "20 Unforgettable Proposal Ideas" },
  { id: "how-to-apologize-relationship", title: "The Art of Saying Sorry" },
  { id: "signs-partner-truly-loves-you", title: "15 Signs Your Partner Truly Loves You" },
  { id: "keep-spark-alive-relationship", title: "How to Keep the Spark Alive" },
  { id: "science-of-attraction", title: "The Science of Attraction" },
  { id: "relationship-goals-couples", title: "30 Meaningful Relationship Goals" },
  { id: "how-to-write-love-letter", title: "How to Write the Perfect Love Letter" },
  { id: "love-relationships-guide", title: "Complete Guide to Lasting Relationships" },
  { id: "zodiac-compatibility-guide", title: "Zodiac Compatibility Guide" },
  { id: "name-meanings-origins", title: "The World of Name Meanings" },
  { id: "love-facts-trivia", title: "50 Fascinating Love Facts" },
  { id: "five-love-languages", title: "The 5 Love Languages" },
  { id: "long-distance-relationships", title: "Long Distance Relationships Guide" },
  { id: "romantic-date-ideas", title: "75 Romantic Date Ideas" },
];

const BlogPreview = () => {
  return (
    <section className="py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">From Our Blog</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Love & Relationship Articles 💕
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read our expert articles on love, relationships, zodiac compatibility, and more to deepen your understanding of romance.
          </p>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group card-romantic rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <ResponsiveImage
                  src={post.image}
                  alt={post.title}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 flex-wrap">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-primary font-medium text-xs group-hover:gap-2 transition-all">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* All Blog Links */}
        <div className="card-romantic rounded-2xl p-6 md:p-8">
          <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
            Love Articles & Relationship Guides 💕
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {allBlogLinks.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 group"
              >
                <ArrowRight className="w-3 h-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="line-clamp-1">{post.title}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
