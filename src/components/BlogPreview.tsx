import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import blogNameImage from "@/assets/blog-name-meanings.jpg";
import blogFactsImage from "@/assets/blog-love-facts.jpg";
import blogLanguagesImage from "@/assets/blog-love-languages.jpg";
import blogDistanceImage from "@/assets/blog-long-distance.jpg";

const blogPosts = [
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
    title: "Long Distance Relationships: Making Love Work Across Miles",
    excerpt: "Proven strategies, communication tips, and creative ideas to keep your long-distance love strong.",
    image: blogDistanceImage,
    date: "February 11, 2026",
    readTime: "10 min read",
    category: "Relationships"
  }
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group card-romantic rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
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

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            View All 7 Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
