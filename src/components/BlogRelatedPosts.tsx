import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import ResponsiveImage from "@/components/ResponsiveImage";
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

const allBlogPosts = [
  { id: "trust-building-relationships", title: "How to Build Trust in a Relationship", image: blogTrustImage, readTime: "14 min", category: "Trust & Bonding" },
  { id: "emotional-intelligence-love", title: "Emotional Intelligence in Love", image: blogEQImage, readTime: "13 min", category: "Emotional Intelligence" },
  { id: "self-love-guide", title: "The Power of Self-Love", image: blogSelfLoveImage, readTime: "12 min", category: "Self-Love" },
  { id: "anniversary-celebration-ideas", title: "50 Romantic Anniversary Ideas", image: blogAnniversaryImage, readTime: "14 min", category: "Anniversaries" },
  { id: "love-different-cultures", title: "Love Around the World", image: blogCulturesImage, readTime: "15 min", category: "Culture & Love" },
  { id: "first-date-tips", title: "25 First Date Tips That Work", image: blogFirstDateImage, readTime: "12 min", category: "Dating Tips" },
  { id: "healthy-communication-relationships", title: "Healthy Communication in Relationships", image: blogCommunicationImage, readTime: "12 min", category: "Communication" },
  { id: "beautiful-love-quotes", title: "100 Most Beautiful Love Quotes", image: blogQuotesImage, readTime: "15 min", category: "Love Quotes" },
  { id: "marriage-proposal-ideas", title: "20 Unforgettable Proposal Ideas", image: blogProposalImage, readTime: "13 min", category: "Proposals" },
  { id: "how-to-apologize-relationship", title: "The Art of Saying Sorry", image: blogApologizeImage, readTime: "11 min", category: "Relationships" },
  { id: "signs-partner-truly-loves-you", title: "15 Signs Your Partner Truly Loves You", image: blogSignsImage, readTime: "10 min", category: "Love & Relationships" },
  { id: "keep-spark-alive-relationship", title: "How to Keep the Spark Alive", image: blogSparkImage, readTime: "10 min", category: "Relationships" },
  { id: "science-of-attraction", title: "The Science of Attraction", image: blogScienceImage, readTime: "11 min", category: "Psychology" },
  { id: "relationship-goals-couples", title: "30 Meaningful Relationship Goals", image: blogGoalsImage, readTime: "10 min", category: "Couple Goals" },
  { id: "how-to-write-love-letter", title: "How to Write the Perfect Love Letter", image: blogLetterImage, readTime: "10 min", category: "Romance" },
  { id: "love-relationships-guide", title: "Complete Guide to Lasting Relationships", image: blogLoveImage, readTime: "8 min", category: "Love & Relationships" },
  { id: "zodiac-compatibility-guide", title: "Zodiac Compatibility Guide", image: blogZodiacImage, readTime: "9 min", category: "Zodiac & Astrology" },
  { id: "name-meanings-origins", title: "The World of Name Meanings", image: blogNameImage, readTime: "10 min", category: "Name Meanings" },
  { id: "love-facts-trivia", title: "50 Fascinating Love Facts", image: blogFactsImage, readTime: "9 min", category: "Fun Facts" },
  { id: "five-love-languages", title: "The 5 Love Languages", image: blogLanguagesImage, readTime: "10 min", category: "Relationships" },
  { id: "long-distance-relationships", title: "Long Distance Relationships Guide", image: blogDistanceImage, readTime: "10 min", category: "Relationships" },
  { id: "romantic-date-ideas", title: "75 Romantic Date Ideas", image: blogDateImage, readTime: "10 min", category: "Date Ideas" },
];

interface BlogRelatedPostsProps {
  currentPostId: string;
}

const BlogRelatedPosts = ({ currentPostId }: BlogRelatedPostsProps) => {
  // Get 4 related posts, excluding current
  const related = allBlogPosts
    .filter((p) => p.id !== currentPostId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          You Might Also Like 💕
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {related.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group card-romantic rounded-xl overflow-hidden flex gap-3 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                <ResponsiveImage
                  src={post.image}
                  alt={post.title}
                  sizes="96px"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="py-3 pr-3 flex flex-col justify-center">
                <span className="text-xs text-primary font-medium mb-1">{post.category}</span>
                <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <span className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogRelatedPosts;
