import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import blogSignsImage from "@/assets/blog-signs-true-love.jpg";
import blogSparkImage from "@/assets/blog-keep-spark-alive.jpg";
import blogScienceImage from "@/assets/blog-science-attraction.jpg";
import blogGoalsImage from "@/assets/blog-relationship-goals.jpg";

const blogPosts = [
  {
    id: "signs-partner-truly-loves-you",
    title: "15 Unmistakable Signs Your Partner Truly Loves You",
    excerpt: "Learn to recognize the genuine signs of true love beyond words — through actions and emotional connection.",
    image: blogSignsImage,
    date: "March 1, 2026",
    readTime: "10 min read",
    category: "Love & Relationships"
  },
  {
    id: "keep-spark-alive-relationship",
    title: "How to Keep the Spark Alive in Your Relationship",
    excerpt: "Proven strategies to maintain passion, excitement, and deep emotional connection.",
    image: blogSparkImage,
    date: "March 2, 2026",
    readTime: "10 min read",
    category: "Relationships"
  },
  {
    id: "science-of-attraction",
    title: "The Science of Attraction: Why We Fall in Love",
    excerpt: "Discover the fascinating psychology, biology, and chemistry behind attraction.",
    image: blogScienceImage,
    date: "March 3, 2026",
    readTime: "11 min read",
    category: "Psychology"
  },
  {
    id: "relationship-goals-couples",
    title: "30 Relationship Goals Every Couple Should Set",
    excerpt: "Beyond Instagram-perfect moments, real goals that build lasting love.",
    image: blogGoalsImage,
    date: "March 4, 2026",
    readTime: "10 min read",
    category: "Couple Goals"
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
