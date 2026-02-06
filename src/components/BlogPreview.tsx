import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import blogLoveImage from "@/assets/blog-love-relationships.jpg";
import blogZodiacImage from "@/assets/blog-zodiac-astrology.jpg";

const blogPosts = [
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

        <div className="grid md:grid-cols-2 gap-8">
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
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
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
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
