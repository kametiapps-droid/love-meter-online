import { useState } from "react";
import { Heart, Copy, RefreshCw, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

type LetterStyle = "romantic" | "funny" | "poetic" | "passionate" | "sweet";

const letterTemplates: Record<LetterStyle, string[]> = {
  romantic: [
    `My Dearest {name},

Every moment I spend with you feels like a beautiful dream I never want to wake up from. Your smile lights up my world in ways the sun never could, and your laughter is the sweetest melody my heart has ever known.

When I look into your eyes, I see a future filled with love, adventure, and endless happiness. You are not just the love of my life — you are my life itself. Every heartbeat whispers your name, every breath carries my love for you.

I promise to love you through every sunrise and sunset, through every storm and rainbow. You are my forever, my always, my everything.

With all my heart and soul,
Your one and only 💕`,

    `My Beloved {name},

Before you, I didn't know what love truly meant. You walked into my life like a gentle breeze on a summer evening, and suddenly everything made sense. Every love song, every poem, every fairy tale — they were all about us.

You make the ordinary extraordinary. A simple walk becomes an adventure, a quiet evening becomes a cherished memory. Your hand in mine is all I need to feel like I can conquer the world.

I love you more than words could ever express, more than the stars in the sky, more than the waves in the ocean. You are my greatest blessing.

Forever and always yours,
With undying love 🌹`,

    `Darling {name},

If I could bottle the feeling of falling in love with you, I'd share it with the world — but then again, what we have is too precious, too magical to share. It belongs only to us, in the sacred space between our hearts.

You are the answer to every prayer I've ever whispered, the dream I didn't dare to dream. With you, I've discovered that love isn't just an emotion — it's a universe, and you are its brightest star.

Every day with you is a gift I'll never take for granted. I love you yesterday, today, tomorrow, and for all the days that follow.

Eternally yours,
With all the love in my heart 💝`,
  ],
  funny: [
    `Dear {name},

I love you more than pizza, and that's saying A LOT because you know how I feel about pizza. 🍕

You're the WiFi to my phone — without you, I just wander around aimlessly looking confused. You're the "skip ad" button of my life — everything is better when you're around.

Sure, you steal the blankets, leave crumbs everywhere, and your jokes are terrible (sorry, but someone had to say it). But guess what? I'd choose your terrible jokes over anyone else's best ones, any day.

You make my heart do that weird fluttery thing that I'm pretty sure isn't a medical condition. I checked. Twice.

I love you to the fridge and back (which, as you know, is a very sacred journey for me).

Your favorite weirdo,
P.S. Please don't show this to anyone. My reputation can't handle it. 😂`,

    `Hey {name},

Fun fact: Scientists say it takes 4 minutes to fall in love. It took me approximately 0.3 seconds. I'm an overachiever like that. 🏆

You know that feeling when your food arrives at a restaurant? That's how I feel every time I see you. Except better. And with fewer calories.

Thank you for laughing at my jokes even when they're not funny, for pretending my cooking is edible, and for loving me even when I'm being a complete goofball.

If loving you was a job, I'd be the most dedicated employee ever. Employee of the month, every month. No vacation needed.

You're my favorite notification, my best "good morning" text, and the reason I smile at my phone like a weirdo.

Love you more than memes (and that's the highest compliment I can give),
Your personal comedian 🎭`,

    `To my favorite human, {name},

Roses are red, violets are blue, I'm not great at poetry, but I'm amazing at loving you! 

They say love is blind, but I see you perfectly — especially when you're trying to sneak the last cookie. Nice try, by the way. I saw that. 🍪

You're the cheese to my macaroni, the Netflix to my chill, the charger to my dying phone at 2%. Basically, you're essential.

I promise to always share my food with you (okay, most of my food), to laugh at your jokes (even the bad ones), and to love you even when you leave the toilet seat up.

Yours in love and laughter,
The luckiest goofball alive 💛`,
  ],
  poetic: [
    `Dearest {name},

In the garden of my heart, you bloom eternal,
A rose that knows no winter, no decay.
Your love, a poem written by the stars,
Each verse more beautiful than yesterday.

Like moonlight dancing on a silver lake,
Your presence fills the darkness with its glow.
A thousand sonnets could not capture half
The beauty that your gentle spirit shows.

You are the music in my silence,
The color in my monochrome world,
The warmth in winter's coldest hour,
The calm when storms have unfurled.

My love for you flows like an endless river,
Through valleys deep and mountains high,
A journey with no destination needed,
For you are my earth, my sea, my sky.

With a heart full of poetry and love,
Your devoted admirer ✨`,

    `My Darling {name},

If I were a poet, I would write your name
Across the canvas of the evening sky,
In letters made of starlight and of flame,
A testament to love that will not die.

Your voice — a symphony of tender grace,
Your touch — a verse of warmth upon my skin,
Your smile — the sunrise on my weary face,
Your love — the light that glows from deep within.

Between the lines of every love song sung,
Between the petals of each crimson rose,
Between the moments when the world is young,
That's where my love for you forever grows.

You are the metaphor for all things beautiful,
The simile to which all joy compares,
The rhythm in the heartbeat of my soul,
The answer to my whispered prayers.

In ink and love,
Your devoted heart 🖋️💕`,
  ],
  passionate: [
    `{name}, my fire, my desire,

You set my soul ablaze with a single glance. Every moment apart feels like an eternity, and every moment together is a supernova of emotion that lights up the darkest corners of my existence.

I crave your presence like the desert craves rain, like the night craves the dawn, like my heart craves its other half — YOU. You are the electricity in my veins, the thunder in my chest, the wildfire that consumes every rational thought.

When your lips meet mine, the world stops spinning. Time surrenders. Nothing exists but the fierce, untamed love that burns between us — a love that defies logic, transcends boundaries, and refuses to be contained.

I don't just love you — I am consumed by you, intoxicated by you, wholly and completely devoted to you. You are my obsession, my addiction, my beautiful chaos.

Burning for you, now and forever,
With a love that could set the ocean on fire 🔥`,

    `My Beloved {name},

There are no words fierce enough to capture what I feel for you. This love is a hurricane, a tidal wave, an earthquake — it shakes me to my very core and rebuilds me stronger with every tremor.

I want all of you — your light and your darkness, your strength and your vulnerability, your laughter and your tears. I want the messy, beautiful, complicated reality of loving you with every fiber of my being.

You are not just someone I love — you are someone I need, like oxygen, like gravity, like the very beat of my heart. Without you, I am incomplete. With you, I am unstoppable.

Let the world try to keep us apart. Let the storms rage and the fires burn. Nothing — NOTHING — will ever diminish this love. It is eternal, unbreakable, and absolutely, devastatingly real.

Yours completely, recklessly, and forever,
With a passion that knows no bounds 💋🔥`,
  ],
  sweet: [
    `Dear {name},

I just wanted you to know that you make my heart smile every single day. 😊

You're like a warm cup of cocoa on a cold winter night — comforting, sweet, and absolutely perfect. Being with you feels like coming home, no matter where we are.

Thank you for being my best friend, my partner in crime, and my favorite person in the whole wide world. Thank you for the little things — the good morning texts, the random hugs, the way you always know exactly what to say.

You don't need to move mountains for me. Your love in the little moments means everything — the way you remember my favorite songs, how you save the last bite of dessert for me, and how you hold my hand just a little tighter when I'm nervous.

You are my happy place, my safe space, my sunshine on cloudy days. I love you more than you'll ever know. 💛

With all the sweetness in my heart,
Your biggest fan and forever love 🌻`,

    `Sweet {name},

Do you know what my favorite part of every day is? It's the part where I get to love you. 💕

You make ordinary moments magical. Grocery shopping becomes an adventure, lazy Sundays become treasure, and even doing nothing feels like everything when I'm doing it with you.

I love the way your eyes crinkle when you laugh, the way you hum songs without realizing it, and the way you make everyone around you feel special. You have a heart made of pure gold, and I'm the luckiest person alive to call it mine.

I don't need grand gestures or fairy tale moments. All I need is you — your warmth, your kindness, your beautiful soul. You are more than enough. You are everything.

Sending you a million kisses and a heart full of love,
Your forever admirer 🌈💝`,
  ],
};

const styleLabels: Record<LetterStyle, { label: string; emoji: string; description: string }> = {
  romantic: { label: "Romantic", emoji: "🌹", description: "Classic heartfelt love" },
  funny: { label: "Funny", emoji: "😂", description: "Playful & humorous" },
  poetic: { label: "Poetic", emoji: "✨", description: "Lyrical & artistic" },
  passionate: { label: "Passionate", emoji: "🔥", description: "Intense & fiery" },
  sweet: { label: "Sweet", emoji: "🍯", description: "Warm & tender" },
};

const LoveLetterGenerator = () => {
  const [name, setName] = useState("");
  const [style, setStyle] = useState<LetterStyle>("romantic");
  const [letter, setLetter] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateLetter = () => {
    if (!name.trim()) {
      toast({ title: "Please enter a name", description: "We need a name to personalize your letter!", variant: "destructive" });
      return;
    }
    setIsGenerating(true);
    setTimeout(() => {
      const templates = letterTemplates[style];
      const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
      setLetter(randomTemplate.replace(/{name}/g, name.trim()));
      setIsGenerating(false);
    }, 1500);
  };

  const copyLetter = () => {
    navigator.clipboard.writeText(letter);
    toast({ title: "Copied! 💌", description: "Love letter copied to clipboard" });
  };

  return (
    <section id="love-letter" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Love Letter Generator</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Write a Beautiful <span className="text-gradient">Love Letter</span> 💌
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose a style, enter your loved one's name, and we'll create a heartfelt love letter you can share!
          </p>
        </div>

        <div className="card-romantic rounded-2xl p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Your loved one's name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter their name..."
                className="text-center text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Choose a style</label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {(Object.entries(styleLabels) as [LetterStyle, typeof styleLabels[LetterStyle]][]).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setStyle(key)}
                    className={`p-3 rounded-xl border-2 transition-all text-center ${
                      style === key
                        ? "border-primary bg-primary/10 scale-105"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="text-2xl block">{val.emoji}</span>
                    <span className="text-xs font-medium text-foreground">{val.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button
              onClick={generateLetter}
              disabled={isGenerating}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-xl"
            >
              {isGenerating ? (
                <span className="flex items-center gap-2">
                  <Heart className="w-5 h-5 animate-pulse" /> Writing with love...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="w-5 h-5" /> Generate Love Letter 💕
                </span>
              )}
            </Button>

            {letter && (
              <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
                <div className="bg-background/80 rounded-xl p-6 md:p-8 border border-border relative">
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button size="sm" variant="outline" onClick={copyLetter}>
                      <Copy className="w-4 h-4 mr-1" /> Copy
                    </Button>
                    <Button size="sm" variant="outline" onClick={generateLetter}>
                      <RefreshCw className="w-4 h-4 mr-1" /> New
                    </Button>
                  </div>
                  <pre className="whitespace-pre-wrap font-serif text-foreground text-sm md:text-base leading-relaxed mt-8">
                    {letter}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterGenerator;
