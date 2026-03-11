import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Calendar, Clock, Heart, Quote, Sparkles, BookOpen } from "lucide-react";
import blogImage from "@/assets/blog-love-quotes.jpg";

const BlogPost15 = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="100 Most Beautiful Love Quotes of All Time - Romantic Collection"
        description="Discover 100 of the most beautiful, romantic, and inspiring love quotes from famous authors, poets, and thinkers. Perfect for cards, letters, and social media."
        path="/blog/beautiful-love-quotes"
        type="article"
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <article className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Love Quotes</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> March 7, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 15 min read</span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                100 Most Beautiful Love Quotes of All Time: Words That Touch the Heart
              </h1>
              <p className="text-lg text-muted-foreground">A curated collection of the world's most romantic, inspiring, and timeless love quotes.</p>
            </div>

            <div className="rounded-2xl overflow-hidden mb-10">
              <img src={blogImage} alt="Beautiful love quotes on vintage paper with rose petals" className="w-full h-64 md:h-96 object-cover" loading="lazy" />
            </div>

            <div className="prose prose-lg max-w-none card-romantic rounded-2xl p-6 md:p-10">
              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" /> The Power of Words in Love
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Throughout history, poets, writers, philosophers, and ordinary people have tried to capture the indescribable feeling of love in words. While no quote can fully express the depth of true love, the right words at the right moment can make a heart skip a beat, bring tears of joy, or remind us why love is the most powerful force in human existence.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether you're looking for the perfect words for a wedding speech, a love letter, an anniversary card, or simply want to express your feelings to someone special, this collection of 100 beautiful love quotes spans centuries and cultures, capturing every shade of romantic love.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Quote className="w-6 h-6 text-primary" /> Classic Love Quotes from Literature
                </h2>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love." — Gabriel García Márquez
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Whatever our souls are made of, his and mine are the same." — Emily Brontë, Wuthering Heights
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "You pierce my soul. I am half agony, half hope." — Jane Austen, Persuasion
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "I wish you to know that you have been the last dream of my soul." — Charles Dickens, A Tale of Two Cities
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "In case you ever foolishly forget: I am never not thinking of you." — Virginia Woolf
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be." — Charles Dickens, Great Expectations
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking." — Leo Tolstoy, Anna Karenina
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "I am who I am because of you. You are every reason, every hope, and every dream I've ever had." — Nicholas Sparks, The Notebook
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "So, I love you because the entire universe conspired to help me find you." — Paulo Coelho, The Alchemist
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "To love and be loved is to feel the sun from both sides." — David Viscott
                </blockquote>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" /> Timeless Love Quotes from Poets
                </h2>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "I carry your heart with me (I carry it in my heart)." — E.E. Cummings
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "How do I love thee? Let me count the ways. I love thee to the depth and breadth and height my soul can reach." — Elizabeth Barrett Browning
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "If I had a flower for every time I thought of you, I could walk through my garden forever." — Alfred Lord Tennyson
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Doubt thou the stars are fire; Doubt that the sun doth move; Doubt truth to be a liar; But never doubt I love." — William Shakespeare
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "I love you without knowing how, or when, or from where. I love you simply, without problems or pride." — Pablo Neruda
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Your love is better than ice cream, better than anything else that I've tried." — Sarah McLachlan
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Love is an endless mystery, for it has nothing else to explain it." — Rabindranath Tagore
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Come live in my heart, and pay no rent." — Samuel Lover
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Two souls with but a single thought, two hearts that beat as one." — Friedrich Halm
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope." — Maya Angelou
                </blockquote>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" /> Modern & Contemporary Love Quotes
                </h2>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "You don't love someone for their looks, or their clothes, or their fancy car, but because they sing a song only you can hear." — Oscar Wilde
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "The best thing to hold onto in life is each other." — Audrey Hepburn
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day." — Unknown
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine." — Maya Angelou
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more." — Angelita Lim
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "The greatest thing you'll ever learn is just to love and be loved in return." — Eden Ahbez
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Where there is love there is life." — Mahatma Gandhi
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Love is composed of a single soul inhabiting two bodies." — Aristotle
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage." — Lao Tzu
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "We loved with a love that was more than love." — Edgar Allan Poe
                </blockquote>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" /> Quotes About Soulmates & Deep Connection
                </h2>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "A soulmate is someone who has locks that fit our keys, and keys to fit our locks." — Richard Bach
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "I want all of you, forever, every day. You and me, every day." — Nicholas Sparks, The Notebook
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "You know you're in love when you can't fall asleep because reality is finally better than your dreams." — Dr. Seuss
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "I would rather share one lifetime with you than face all the ages of this world alone." — J.R.R. Tolkien
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "My soul and your soul are forever tangled." — N.R. Hart
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible." — When Harry Met Sally
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "True love is not the number of kisses, or how often you get them; true love is the feeling that still lingers long after the kiss is over." — Unknown
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "I fell in love the way you fall asleep: slowly, and then all at once." — John Green, The Fault in Our Stars
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "Love is when the other person's happiness is more important than your own." — H. Jackson Brown Jr.
                </blockquote>
                <blockquote className="border-l-4 border-primary pl-4 mb-4 italic text-muted-foreground">
                  "You are my today and all of my tomorrows." — Leo Christopher
                </blockquote>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" /> How to Use Love Quotes Meaningfully
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Love quotes are most powerful when they're paired with personal sentiments. Here are beautiful ways to incorporate them into your romantic life:
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>In a love letter:</strong> Open or close your letter with a quote that captures your feelings, then explain why it resonates with your relationship specifically. This adds literary beauty while keeping the letter deeply personal.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>As daily reminders:</strong> Leave sticky notes with love quotes around the house — on the bathroom mirror, in their lunch bag, on the car dashboard. These small surprises brighten ordinary days with romance.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>For special occasions:</strong> Engrave a quote on a piece of jewelry, frame it as art for your home, or include it in wedding vows. The right quote adds timelessness and elegance to any celebration of love.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>In digital communication:</strong> Send a beautiful quote as a good morning text, share it with a personal note on an anniversary, or use it as a caption for a couple's photo on social media.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Want to express your love in a creative way? Try our <a href="/love-letter-generator" className="text-primary hover:underline">Love Letter Generator</a> or explore our <a href="/love-poetry" className="text-primary hover:underline">Love Poetry Collection</a>! 💕
                </p>
              </section>
            </div>
          </div>
        </article>
        <BlogRelatedPosts currentPostId="beautiful-love-quotes" />
        <InternalLinks currentPage="/blog/beautiful-love-quotes" />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost15;
