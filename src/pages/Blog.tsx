 import Header from "@/components/Header";
 import Footer from "@/components/Footer";
 import FloatingHearts from "@/components/FloatingHearts";
 import { Link } from "react-router-dom";
 import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
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
 
 const Blog = () => {
   return (
     <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
       <FloatingHearts />
       <Header />
       
       <main className="flex-1 relative z-10">
         <section className="py-8 md:py-16 px-4">
           <div className="max-w-6xl mx-auto text-center mb-12">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
               <BookOpen className="w-4 h-4 text-primary" />
               <span className="text-sm font-medium text-foreground">
                 Love & Relationship Blog
               </span>
             </div>
             
             <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
               Explore Our <span className="text-gradient">Love Blog</span>
             </h1>
             
             <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
               Discover articles about love, relationships, zodiac compatibility, and more! 💕
             </p>
           </div>
 
           <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
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
                   <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                     {post.title}
                   </h2>
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
         </section>
       </main>
       
       <Footer />
     </div>
   );
 };
 
 export default Blog;