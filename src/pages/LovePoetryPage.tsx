import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import heroImage from "@/assets/poetry-hero.jpg";
import { Heart, Feather, Sparkles, BookHeart } from "lucide-react";


const poems = [
  {
    category: "Eternal Love",
    verses: [
      { line1: "In the garden of my heart, your love blooms like an everlasting rose,", line2: "Each petal whispers secrets that only a devoted lover truly knows." },
      { line1: "You are the sunrise that paints my mornings with golden streams of light,", line2: "And the tender moonbeam that cradles my soul through every silent night." },
      { line1: "My love for you is an ocean without a shore, deep beyond all measure,", line2: "Every wave that crashes speaks your name, my heart's eternal treasure." },
      { line1: "When I close my eyes, your face appears like stars across the sky,", line2: "A constellation of devotion that time itself could never deny." },
      { line1: "You walked into my world and turned my shadows into radiant beams,", line2: "Now every breath I take is filled with you, the keeper of my dreams." },
      { line1: "Like a flame that dances softly in the gentle evening breeze,", line2: "Your love ignites a warmth within that puts my restless heart at ease." },
      { line1: "If love were written in the stars, ours would be the brightest verse,", line2: "A timeless poem etched in light across the endless universe." },
      { line1: "Through storms and sunshine, laughter and tears, my love remains the same,", line2: "A steady fire burning bright, an unextinguishable flame." },
    ],
  },
  {
    category: "Passion & Desire",
    verses: [
      { line1: "Your touch is like a symphony that sets my very soul ablaze,", line2: "A melody of passion echoing through an infinite maze." },
      { line1: "In the silence between heartbeats, I hear your whispered name,", line2: "A single spark of longing that ignites an untamed flame." },
      { line1: "Your eyes hold galaxies of wonder, deep and beautifully wild,", line2: "In them I lose myself completely, enchanted and beguiled." },
      { line1: "The way you smile could melt the winter snow on mountain peaks so high,", line2: "A warmth so fierce and beautiful, it makes the cold world sigh." },
      { line1: "I crave the sweetness of your lips like flowers crave the rain,", line2: "Without your kiss the world grows dim, and joy dissolves in pain." },
      { line1: "Your voice is honey dripping slow on a warm midsummer day,", line2: "It wraps around my longing heart and carries me away." },
      { line1: "Like magnets drawn by forces unseen, our souls forever meet,", line2: "In the dance of passion and desire, two hearts in rhythm beat." },
      { line1: "Every glance you cast my way sends shivers down my spine,", line2: "A thousand electric butterflies remind me you are mine." },
    ],
  },
  {
    category: "Soulmates & Destiny",
    verses: [
      { line1: "Before the universe was born, our souls had made a vow,", line2: "To find each other lifetime after lifetime, then and now." },
      { line1: "Fate wrote our love story long before we ever met,", line2: "A destiny so beautiful, the heavens won't forget." },
      { line1: "Across a thousand lifetimes, through every twist of fate,", line2: "My soul would search the cosmos just to find its perfect mate." },
      { line1: "You are the missing puzzle piece I've searched for all my years,", line2: "The answer to my prayers whispered softly through my tears." },
      { line1: "Two souls entwined like ancient vines beneath a starlit dome,", line2: "In you I've found not just my love, but my forever home." },
      { line1: "The red thread of destiny connects your heart to mine,", line2: "An invisible bond unbreakable, transcending space and time." },
      { line1: "We were written in the heavens long before the earth was made,", line2: "A love story so magnificent, it will never, ever fade." },
      { line1: "In every life I've lived before, my heart has called your name,", line2: "And in every life to come, my love will burn the same." },
    ],
  },
  {
    category: "Heartbreak & Longing",
    verses: [
      { line1: "The distance between us feels like oceans wide and deep,", line2: "Yet in my dreams you're always near, a promise I will keep." },
      { line1: "My tears are silent letters that I write upon the night,", line2: "Each one a plea for your return to make my world feel right." },
      { line1: "The echo of your laughter haunts the hallways of my mind,", line2: "A bittersweet reminder of the love I left behind." },
      { line1: "I wear your memory like a locket pressed against my chest,", line2: "A heavy golden treasure that won't let my heart find rest." },
      { line1: "Empty chairs and silent rooms speak louder than a scream,", line2: "Without you here beside me, life is just a fading dream." },
      { line1: "The rain outside my window falls like tears I cannot cry,", line2: "Each drop a tiny heartbreak falling softly from the sky." },
      { line1: "I search for you in crowded rooms, in faces passing by,", line2: "But none can fill the emptiness or silence this heart's cry." },
      { line1: "Love lost is not love wasted, for it taught me how to feel,", line2: "And even broken pieces of a heart have time to heal." },
    ],
  },
  {
    category: "Promise & Devotion",
    verses: [
      { line1: "I promise you the moon and stars, though I cannot pluck them free,", line2: "But I can love you endlessly, as deep as any sea." },
      { line1: "With every beat my heart makes, it whispers words of forever,", line2: "A sacred vow of devotion that nothing can sever." },
      { line1: "I will be your shelter when the storms of life are near,", line2: "Your unwavering protector, wiping away every tear." },
      { line1: "Through the seasons of our lives, in spring and winter's cold,", line2: "My love for you will only grow, more precious than fine gold." },
      { line1: "I choose you today, tomorrow, and for all eternity,", line2: "You are the greatest blessing life has ever given me." },
      { line1: "My devotion is a river that will never cease to flow,", line2: "Through valleys deep and mountains high, wherever we may go." },
      { line1: "In sickness and in health, in joy and sorrow's pain,", line2: "I'll hold your hand and walk with you through sunshine and through rain." },
      { line1: "You are my first thought at dawn and my last prayer at night,", line2: "The compass of my wandering soul, my everlasting light." },
    ],
  },
  {
    category: "Nature of Love",
    verses: [
      { line1: "Love is not a thunderstorm that shakes the world apart,", line2: "It is the gentle rainfall that nourishes the heart." },
      { line1: "True love doesn't shout or boast or seek to be adored,", line2: "It quietly sits beside you, a faithful, patient sword." },
      { line1: "Love is the language spoken when no words are left to say,", line2: "A silent understanding that brightens every day." },
      { line1: "It grows like wildflowers scattered by the wind across a field,", line2: "Untamed, unplanned, and beautiful, refusing to yield." },
      { line1: "Love is both the anchor and the sail upon life's sea,", line2: "It holds you safe yet sets you free to be all you can be." },
      { line1: "The truest love is not perfection, polished bright and new,", line2: "It's choosing someone every day, despite the flaws you view." },
      { line1: "Love is patient like the mountains standing through the years,", line2: "Unmoved by passing seasons, untouched by fleeting fears." },
      { line1: "In the arithmetic of love, one plus one equals infinity,", line2: "Two hearts combined create a bond of endless affinity." },
    ],
  },
];

const categoryIcons = [Heart, Feather, Sparkles, BookHeart, Heart, Feather];

const LovePoetryPage = () => {
  return (
    <>
      <SEO
        title="Love Poetry - Beautiful Romantic Poems & Verses"
        description="Read beautiful love poems and romantic verses. Explore collections of poetry about eternal love, heartbreak, devotion, and passion."
        path="/love-poetry"
      />
      <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
        <Header />

        <main className="flex-1 relative z-10">
          {/* Hero */}
          <section className="relative py-16 md:py-24 px-4">
            <div className="absolute inset-0 z-0">
              <img src={heroImage} alt="Love Poetry" className="w-full h-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
            </div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
                <Feather className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Beautiful Love Poetry</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Words That Make the
                <span className="text-gradient"> Heart Sing </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                A curated collection of beautiful two-line love poems that capture the essence of romance, passion, longing, and eternal devotion. Share these verses with someone you love. 💕
              </p>
            </div>
          </section>

          {/* Poetry Sections */}
          {poems.map((section, sectionIdx) => {
            const Icon = categoryIcons[sectionIdx % categoryIcons.length];
            return (
              <section key={section.category} className={`py-12 px-4 ${sectionIdx % 2 === 0 ? "" : "bg-secondary/30"}`}>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-3 mb-8">
                    <Icon className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center">
                      {section.category}
                    </h2>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.verses.map((poem, idx) => (
                      <div
                        key={idx}
                        className="card-romantic rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 border-l-4 border-primary/40"
                      >
                        <p className="text-foreground italic leading-relaxed mb-2">"{poem.line1}</p>
                        <p className="text-foreground italic leading-relaxed">{poem.line2}"</p>
                        <div className="mt-3 flex items-center gap-1">
                          <Heart className="w-3 h-3 text-primary fill-primary" />
                          <Heart className="w-3 h-3 text-primary/60 fill-primary/60" />
                          <Heart className="w-3 h-3 text-primary/30 fill-primary/30" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}

          {/* About Section */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
                Why Love Poetry Matters ✨
              </h2>
              <div className="card-romantic rounded-xl p-8 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Love poetry has been the language of the heart for thousands of years. From the ancient verses of Rumi and Hafiz to the romantic sonnets of Shakespeare and Pablo Neruda, poets have always tried to capture the indescribable magic of love in words. These two-line poems, also known as couplets, distill the deepest emotions of the human experience into their purest form — brief, beautiful, and breathtakingly powerful.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are celebrating a new relationship, remembering a love that once was, or simply appreciating the beauty of romantic expression, poetry gives us the vocabulary to say what our hearts feel but our minds struggle to articulate. Each couplet in this collection has been carefully crafted to evoke emotion, spark imagination, and remind you that love, in all its forms, is the most magnificent force in the universe.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Share these poems with your partner, write them in a card, whisper them under the stars, or simply read them to yourself when you need a reminder that love is everywhere — in the breeze, in the silence, in the beating of your heart. Love poetry is not just about romance; it is about connection, vulnerability, courage, and the beautiful risk of opening your heart to another soul.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The beauty of a two-line poem lies in its simplicity. Unlike longer forms of poetry, a couplet must convey an entire universe of emotion in just two lines. Every word carries weight, every syllable matters. This constraint forces the poet to choose only the most powerful, evocative language — resulting in verses that hit the reader with an almost physical intensity. A single couplet can make you smile, cry, or fall in love all over again.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Throughout history, love couplets have been exchanged between lovers as tokens of affection. In medieval times, knights would carry poems written by their beloved into battle. In Persian culture, the ghazal form perfected the art of the romantic couplet, with poets like Mirza Ghalib composing verses that are still recited at weddings and celebrations today. The tradition continues in modern times, with love poetry finding new life on social media, greeting cards, and personal messages.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Can I share these love poems?</h3>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! These poems are meant to be shared with your loved ones. Copy them into a text message, write them in a greeting card, post them on social media, or whisper them to someone special. Love is meant to be expressed and shared freely.
                  </p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">What makes two-line poems special?</h3>
                  <p className="text-muted-foreground text-sm">
                    Two-line poems, or couplets, are powerful because they distill complex emotions into their purest essence. Every word must earn its place, making each line impactful and memorable. They're perfect for quick emotional connections and easy to remember and share.
                  </p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Are these poems original?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, all the love poems in this collection are original compositions created specifically for Love Calculator. They draw inspiration from classical poetry traditions while expressing timeless themes of love, passion, devotion, and longing in a fresh and contemporary voice.
                  </p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">How can I use these poems for my partner?</h3>
                  <p className="text-muted-foreground text-sm">
                    You can write them inside a love letter, include them in a Valentine's Day card, send them as a good morning text, post them on social media dedicated to your partner, engrave them on a gift, or simply read them aloud during a romantic dinner. The possibilities are endless!
                  </p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">What are the best occasions for love poetry?</h3>
                  <p className="text-muted-foreground text-sm">
                    Love poetry is perfect for Valentine's Day, anniversaries, birthdays, weddings, engagement celebrations, date nights, or simply any ordinary day when you want to make someone feel extraordinarily loved and appreciated.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <InternalLinks currentPage="/love-poetry" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LovePoetryPage;
