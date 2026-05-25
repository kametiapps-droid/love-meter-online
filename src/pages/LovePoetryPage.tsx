import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import BlogPreview from "@/components/BlogPreview";
import ShareButtons from "@/components/ShareButtons";
import SEO from "@/components/SEO";
import { Heart, Feather, Sparkles, BookHeart, Copy, Check, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const urduPoems = [
  { line1: "تیری محبت میری روح میں اترتی چلی گئی،", line2: "ہر دھڑکن تیرے نام سے سنورتی چلی گئی۔" },
  { line1: "رات خاموش تھی مگر دل بولتا رہا،", line2: "تیرا ذکر میری سانسوں میں گھولتا رہا۔" },
  { line1: "چاند بھی تیرے حسن کا چراغ لگتا ہے،", line2: "ہر ستارہ تیرا کوئی خواب لگتا ہے۔" },
  { line1: "تیری ہنسی دل کا سکون بن جاتی ہے،", line2: "اداس راتوں کی روشنی بن جاتی ہے۔" },
  { line1: "میں نے ہر دعا میں تیرا نام لکھا ہے،", line2: "اپنی محبت کو تیرے نام کیا ہے۔" },
  { line1: "محبت شاید ایسی ہی ہوتی ہے،", line2: "ایک شخص میں پوری دنیا ہوتی ہے۔" },
  { line1: "میں لفظ ہوں تو معنی تم ہو،", line2: "میں راستہ ہوں تو منزل تم ہو۔" },
  { line1: "تیرا ذکر میری عادت بن گیا،", line2: "تیرا عشق میری عبادت بن گیا۔" },
  { line1: "چاہت وہ نہیں جو سب کو دکھائی دے،", line2: "چاہت وہ ہے جو دل میں چھپی رہے۔" },
  { line1: "تیری یاد کبھی پرانی نہیں ہوتی،", line2: "محبت کبھی کہانی نہیں ہوتی۔" },
  { line1: "میں اگر دریا ہوں تو ساحل تم ہو،", line2: "میں اگر مسافر ہوں تو منزل تم ہو۔" },
  { line1: "محبت لفظوں میں کہاں مکمل ہوتی ہے،", line2: "یہ تو خاموش دلوں میں زندہ رہتی ہے۔" },
];

const poems = [
  {
    category: "Eternal Love",
    icon: Heart,
    verses: [
      { line1: "In the garden of my heart, your love blooms like an everlasting rose,", line2: "Each petal whispers secrets that only a devoted lover truly knows." },
      { line1: "You are the sunrise that paints my mornings with golden streams of light,", line2: "And the tender moonbeam that cradles my soul through every silent night." },
      { line1: "My love for you is an ocean without a shore, deep beyond all measure,", line2: "Every wave that crashes speaks your name, my heart's eternal treasure." },
      { line1: "If love were written in the stars, ours would be the brightest verse,", line2: "A timeless poem etched in light across the endless universe." },
    ],
  },
  {
    category: "Passion & Desire",
    icon: Sparkles,
    verses: [
      { line1: "Your touch is like a symphony that sets my very soul ablaze,", line2: "A melody of passion echoing through an infinite maze." },
      { line1: "Your eyes hold galaxies of wonder, deep and beautifully wild,", line2: "In them I lose myself completely, enchanted and beguiled." },
      { line1: "Your voice is honey dripping slow on a warm midsummer day,", line2: "It wraps around my longing heart and carries me away." },
      { line1: "Every glance you cast my way sends shivers down my spine,", line2: "A thousand electric butterflies remind me you are mine." },
    ],
  },
  {
    category: "Soulmates & Destiny",
    icon: Feather,
    verses: [
      { line1: "Before the universe was born, our souls had made a vow,", line2: "To find each other lifetime after lifetime, then and now." },
      { line1: "Two souls entwined like ancient vines beneath a starlit dome,", line2: "In you I've found not just my love, but my forever home." },
      { line1: "The red thread of destiny connects your heart to mine,", line2: "An invisible bond unbreakable, transcending space and time." },
      { line1: "In every life I've lived before, my heart has called your name,", line2: "And in every life to come, my love will burn the same." },
    ],
  },
  {
    category: "Promise & Devotion",
    icon: BookHeart,
    verses: [
      { line1: "I promise you the moon and stars, though I cannot pluck them free,", line2: "But I can love you endlessly, as deep as any sea." },
      { line1: "I choose you today, tomorrow, and for all eternity,", line2: "You are the greatest blessing life has ever given me." },
      { line1: "In sickness and in health, in joy and sorrow's pain,", line2: "I'll hold your hand and walk with you through sunshine and through rain." },
      { line1: "You are my first thought at dawn and my last prayer at night,", line2: "The compass of my wandering soul, my everlasting light." },
    ],
  },
];

const UrduPoetryCard = ({ poem, index }: { poem: { line1: string; line2: string }; index: number }) => {
  const [copied, setCopied] = useState(false);
  const text = `${poem.line1}\n${poem.line2}`;
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /* ignore */ }
    setCopied(true); toast.success("شعر کاپی ہو گیا! 📋"); setTimeout(() => setCopied(false), 2000);
  };
  const shareWA = () => window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  const colors = ["#be123c","#7c3aed","#d97706","#0891b2","#059669","#9333ea","#dc2626"];
  const accent = colors[index % colors.length];
  return (
    <div className="relative rounded-2xl p-5 transition-all duration-200 hover:scale-[1.01]"
      style={{ background: "rgba(255,255,255,0.9)", border: `1.5px solid ${accent}22`, boxShadow: `0 4px 20px ${accent}18` }}>
      <div className="absolute top-2 left-2 w-1.5 h-8 rounded-full" style={{ background: accent }} />
      <div className="pr-20 pl-4">
        <p className="text-base leading-relaxed text-gray-800 font-medium text-right" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: "2.2" }}>
          {poem.line1}
        </p>
        <p className="text-base leading-relaxed text-gray-800 font-medium text-right mt-1" dir="rtl" style={{ fontFamily: "'Noto Nastaliq Urdu', serif", lineHeight: "2.2" }}>
          {poem.line2}
        </p>
      </div>
      <div className="absolute top-3 right-3 flex gap-1.5">
        <button onClick={shareWA} title="Share on WhatsApp"
          className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          style={{ background: "#25D366", color: "#fff" }}>
          <Share2 className="w-3.5 h-3.5" />
        </button>
        <button onClick={copy} title="Copy"
          className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          style={{ background: copied ? accent : "#f3f4f6", color: copied ? "#fff" : accent }}>
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      <div className="mt-3 flex items-center gap-1 pl-4">
        <Heart className="w-3 h-3 fill-current" style={{ color: accent }} />
        <Heart className="w-3 h-3 fill-current opacity-50" style={{ color: accent }} />
        <Heart className="w-3 h-3 fill-current opacity-25" style={{ color: accent }} />
      </div>
    </div>
  );
};

const LovePoetryPage = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      toast.success("Poem copied! 💕");
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      toast.error("Could not copy");
    }
  };

  return (
    <>
      <SEO
        title="Love Poetry — Beautiful Romantic Poems & Urdu Shayari"
        description="Read beautiful love poems and Urdu shayari. Curated two-line romantic verses about eternal love, passion, soulmates, and devotion. Copy & share freely."
        path="/love-poetry"
        keywords="love poetry, romantic poems, urdu shayari, love shayari, two line poems, love verses, romantic shayari"
        dateModified="2026-05-25"
        faqSchema={[
          { question: "Can I share these love poems?", answer: "Absolutely! These poems are meant to be shared with your loved ones. Copy them into a text message, write them in a greeting card, post them on social media, or whisper them to someone special." },
          { question: "What makes two-line poems special?", answer: "Two-line poems, or couplets, are powerful because they distill complex emotions into their purest essence. Every word must earn its place, making each line impactful and memorable." },
          { question: "Are these poems original?", answer: "Yes, all poems in this collection are original compositions created specifically for Love Calculator, drawing inspiration from classical poetry traditions." },
          { question: "How can I use these poems for my partner?", answer: "Write them inside a love letter, send as a good morning text, post on social media, include in a Valentine's Day card, or read them aloud on a romantic date night." },
          { question: "What are the best occasions for love poetry?", answer: "Valentine's Day, anniversaries, birthdays, weddings, engagement celebrations, or simply any day you want to make someone feel extraordinarily loved." },
        ]}
      />
      <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
        <Header />

        <main className="flex-1 relative z-10">
          {/* Hero */}
          <section className="py-12 md:py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
                <Feather className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Beautiful Love Poetry</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Words That Make the
                <span className="text-gradient"> Heart Sing </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                A curated collection of beautiful two-line love poems and Urdu shayari — copy any verse and share it with someone you love. 💕
              </p>
            </div>
          </section>

          {/* English Poetry Sections */}
          {poems.map((section, sectionIdx) => {
            const Icon = section.icon;
            return (
              <section key={section.category} className={`py-10 px-4 ${sectionIdx % 2 === 0 ? "" : "bg-secondary/30"}`}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Icon className="w-5 h-5 text-primary" />
                    <h2 className="font-display text-2xl font-bold text-foreground text-center">
                      {section.category}
                    </h2>
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {section.verses.map((poem, idx) => {
                      const id = `${sectionIdx}-${idx}`;
                      const fullText = `${poem.line1}\n${poem.line2}`;
                      const isCopied = copiedId === id;
                      return (
                        <div key={idx} className="card-romantic rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 border-l-4 border-primary/40 relative">
                          <button
                            onClick={() => handleCopy(fullText, id)}
                            aria-label="Copy poem"
                            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-colors"
                          >
                            {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                          <p className="text-foreground italic leading-relaxed mb-2 pr-8">"{poem.line1}</p>
                          <p className="text-foreground italic leading-relaxed">{poem.line2}"</p>
                          <div className="mt-3 flex items-center gap-1">
                            <Heart className="w-3 h-3 text-primary fill-primary" />
                            <Heart className="w-3 h-3 text-primary/60 fill-primary/60" />
                            <Heart className="w-3 h-3 text-primary/30 fill-primary/30" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            );
          })}

          {/* Urdu Poetry Section */}
          <section className="py-12 px-4 bg-secondary/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="text-3xl">🌹</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    اردو محبت کے اشعار
                  </h2>
                  <span className="text-3xl">🌹</span>
                </div>
                <p className="text-muted-foreground text-base max-w-xl mx-auto" dir="rtl">
                  محبت کی خوبصورت دو لائنوں میں — کاپی کریں اور اپنے چاہنے والے کو بھیجیں
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {urduPoems.map((poem, i) => (
                  <UrduPoetryCard key={i} poem={poem} index={i} />
                ))}
              </div>
            </div>
          </section>

          {/* Why Poetry Matters */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-6">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-2">
                  Why Love Poetry Matters ✨
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Love poetry has been the language of the heart for thousands of years. From Rumi and Hafiz to Shakespeare and Pablo Neruda, poets have always tried to capture the indescribable magic of love in words. These two-line poems — also known as couplets — distill the deepest emotions of the human experience into their purest form. Brief, beautiful, and breathtakingly powerful.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are celebrating a new relationship, remembering a love that once was, or simply appreciating the beauty of romantic expression, poetry gives us the vocabulary to say what our hearts feel. Share these poems with your partner, write them in a card, or read them to yourself when you need a reminder that love is everywhere. After reading, why not write a personal <Link to="/love-letter-generator" className="text-primary hover:underline">Love Letter</Link> or check your <Link to="/zodiac-compatibility" className="text-primary hover:underline">Zodiac Compatibility</Link>?
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 px-4 bg-secondary/30">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Can I share these love poems?</h3>
                  <p className="text-muted-foreground text-sm">Absolutely! These poems are meant to be shared. Copy them into a text message, write them in a greeting card, post them on social media, or whisper them to someone special. Love is meant to be expressed.</p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">What makes two-line poems special?</h3>
                  <p className="text-muted-foreground text-sm">Two-line poems, or couplets, are powerful because they distill complex emotions into their purest essence. Every word must earn its place, making each line impactful and easy to remember and share.</p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">How can I use these poems for my partner?</h3>
                  <p className="text-muted-foreground text-sm">Write them inside a love letter, send as a good morning text, include in a Valentine's Day card, engrave on a gift, or simply read them aloud during a romantic dinner.</p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Are these poems original?</h3>
                  <p className="text-muted-foreground text-sm">Yes! All poems are original compositions created specifically for Love Calculator, drawing inspiration from classical poetry traditions to express timeless themes in a contemporary voice.</p>
                </div>
              </div>
            </div>
          </section>

          <ShareButtons title="Love Poetry" description="Beautiful romantic poems and Urdu shayari to share with your loved one" />
          <BlogPreview />
          <InternalLinks currentPage="/love-poetry" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LovePoetryPage;
