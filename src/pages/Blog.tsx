import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import blogLoveImage from "@/assets/blog-love-relationships.jpg";
import blogZodiacImage from "@/assets/blog-zodiac-astrology.jpg";
import blogNameImage from "@/assets/blog-name-meanings.jpg";
import blogFactsImage from "@/assets/blog-love-facts.jpg";
import blogLanguagesImage from "@/assets/blog-love-languages.jpg";
import blogDistanceImage from "@/assets/blog-long-distance.jpg";
import blogDateImage from "@/assets/blog-date-ideas.jpg";

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
        title="Love Blog - Relationship Advice, Tips & Guides"
        description="Read our love blog for relationship advice, zodiac compatibility guides, romantic date ideas, and expert tips on building stronger relationships."
        path="/blog"
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
              Explore Our <span className="text-gradient">Love Blog</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover {blogPosts.length} articles about love, relationships, zodiac compatibility, and more! 💕
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
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
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
