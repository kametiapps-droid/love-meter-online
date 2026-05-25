import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import BlogPreview from "@/components/BlogPreview";
import SEO from "@/components/SEO";
import heroImage from "@/assets/poetry-hero.jpg";
import { Heart, Feather, Sparkles, BookHeart, Copy, Check, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const urduPoems = [
  { line1: "تیری محبت میری روح میں اترتی چلی گئی،", line2: "ہر دھڑکن تیرے نام سے سنورتی چلی گئی۔" },
  { line1: "رات خاموش تھی مگر دل بولتا رہا،", line2: "تیرا ذکر میری سانسوں میں گھولتا رہا۔" },
  { line1: "چاند بھی تیرے حسن کا چراغ لگتا ہے،", line2: "ہر ستارہ تیرا کوئی خواب لگتا ہے۔" },
  { line1: "میں جب بھی تنہا راستوں پہ چلتا ہوں،", line2: "تیری یادوں کے سائے ساتھ رکھتا ہوں۔" },
  { line1: "تیری ہنسی دل کا سکون بن جاتی ہے،", line2: "اداس راتوں کی روشنی بن جاتی ہے۔" },
  { line1: "ہوا جب تیرے شہر سے گزر کر آتی ہے،", line2: "میرے دل میں عجیب خوشبو بسا جاتی ہے۔" },
  { line1: "میں نے ہر دعا میں تیرا نام لکھا ہے،", line2: "اپنی محبت کو تیرے نام کیا ہے۔" },
  { line1: "تیری آنکھوں میں عجیب سا جادو رہتا ہے،", line2: "میرا دل ہر وقت بے قابو رہتا ہے۔" },
  { line1: "محبت شاید ایسی ہی ہوتی ہے،", line2: "ایک شخص میں پوری دنیا ہوتی ہے۔" },
  { line1: "تیری آواز بارش جیسی لگتی ہے،", line2: "دل کے صحرا پر رحمت جیسی لگتی ہے۔" },
  { line1: "میں جب آئینہ دیکھتا ہوں،", line2: "تیرے عشق میں خود کو دیکھتا ہوں۔" },
  { line1: "تیری مسکان صبح جیسی لگتی ہے،", line2: "تیری خاموشی دعا جیسی لگتی ہے۔" },
  { line1: "دل ہر وقت تیرا انتظار کرتا ہے،", line2: "ہر خواب میں تیرا دیدار کرتا ہے۔" },
  { line1: "تیری یاد رات بھر جگاتی رہتی ہے،", line2: "میری تنہائی کو سجاتی رہتی ہے۔" },
  { line1: "میں لفظ ہوں تو معنی تم ہو،", line2: "میں راستہ ہوں تو منزل تم ہو۔" },
  { line1: "تیری محبت قسمت کا تحفہ لگتی ہے،", line2: "ہر دعا کی خوبصورت وجہ لگتی ہے۔" },
  { line1: "کبھی بارش میں تیرا عکس دکھائی دیتا ہے،", line2: "کبھی چاند میں تیرا چہرہ دکھائی دیتا ہے۔" },
  { line1: "تیری باتوں میں عجیب سا سکون ہے،", line2: "تیری چاہت میں مکمل جنون ہے۔" },
  { line1: "میرا دل صرف تیرا نام لیتا ہے،", line2: "ہر لمحہ تجھے ہی یاد کرتا ہے۔" },
  { line1: "تیری دوری بھی قریب لگتی ہے،", line2: "تیری خاموشی بھی عجیب لگتی ہے۔" },
  { line1: "میں جب بھی اداس ہوتا ہوں،", line2: "تیری یادوں کے قریب ہوتا ہوں۔" },
  { line1: "تیری محبت نے بدل دیا مجھے،", line2: "پہلے سے زیادہ مکمل کر دیا مجھے۔" },
  { line1: "چاہت وہ نہیں جو سب کو دکھائی دے،", line2: "چاہت وہ ہے جو دل میں چھپی رہے۔" },
  { line1: "تیری آنکھیں محبت کی کتاب لگتی ہیں،", line2: "ہر نظر ایک جواب لگتی ہے۔" },
  { line1: "میں وقت روکنا چاہتا ہوں،", line2: "صرف تیرے ساتھ جینا چاہتا ہوں۔" },
  { line1: "تیرا ذکر میری عادت بن گیا،", line2: "تیرا عشق میری عبادت بن گیا۔" },
  { line1: "رات کے آخری پہر جب چاند نکلتا ہے،", line2: "میرا دل صرف تیرا نام پڑھتا ہے۔" },
  { line1: "تیری خوشبو ہواؤں میں بسی رہتی ہے،", line2: "میری ہر دعا تجھ پہ رکی رہتی ہے۔" },
  { line1: "محبت کی یہ حد بھی عجیب ہوتی ہے،", line2: "ایک شخص پوری زندگی ہوتا ہے۔" },
  { line1: "میں اگر دریا ہوں تو ساحل تم ہو،", line2: "میں اگر مسافر ہوں تو منزل تم ہو۔" },
  { line1: "تیری ہنسی میری جان لگتی ہے،", line2: "یہ دنیا تیرے بغیر ویران لگتی ہے۔" },
  { line1: "تیری ایک جھلک کافی لگتی ہے،", line2: "پوری دنیا ہلکی لگتی ہے۔" },
  { line1: "دل کو اب کسی اور کی طلب نہیں،", line2: "تیری محبت سے بڑی کوئی وجہ نہیں۔" },
  { line1: "تیری یادوں کا چراغ جلتا رہتا ہے،", line2: "میرا دل رات بھر دھڑکتا رہتا ہے۔" },
  { line1: "ہر ستارہ تیری بات کرتا لگتا ہے،", line2: "یہ چاند بھی تیرا ساتھ دیتا لگتا ہے۔" },
  { line1: "تیری محبت خواب جیسی لگتی ہے،", line2: "ہر دعا کے جواب جیسی لگتی ہے۔" },
  { line1: "تیری چاہت میری طاقت بن گئی،", line2: "میری خاموش زندگی کی آواز بن گئی۔" },
  { line1: "تیری باتیں دل میں گھر کر جاتی ہیں،", line2: "اداس روح کو ہنسا جاتی ہیں۔" },
  { line1: "تیری مسکراہٹ بہار بن جاتی ہے،", line2: "میری ہر رات سنوار جاتی ہے۔" },
  { line1: "تیری یاد کبھی پرانی نہیں ہوتی،", line2: "محبت کبھی کہانی نہیں ہوتی۔" },
  { line1: "دل ہر پل تیرا نام لیتا ہے،", line2: "تیری چاہت میں جیتا مرتا ہے۔" },
  { line1: "تیری آنکھوں میں چاند اترتا لگتا ہے،", line2: "میرا دل وہیں ٹھہرتا لگتا ہے۔" },
  { line1: "محبت لفظوں میں کہاں مکمل ہوتی ہے،", line2: "یہ تو خاموش دلوں میں زندہ رہتی ہے۔" },
  { line1: "میں جب بھی دعا کے لئے ہاتھ اٹھاتا ہوں،", line2: "سب سے پہلے تیرا نام لاتا ہوں۔" },
  { line1: "تیری محبت زندگی لگتی ہے،", line2: "ہر خوشی کی روشنی لگتی ہے۔" },
  { line1: "تیرا ساتھ میرا سکون بن جائے،", line2: "میری زندگی کا قانون بن جائے۔" },
  { line1: "تیری یادیں میرا سرمایہ ہیں،", line2: "تیری باتیں میرا سہارا ہیں۔" },
  { line1: "میری دنیا تیرے گرد گھومتی ہے،", line2: "ہر خوشی تجھ سے شروع ہوتی ہے۔" },
  { line1: "تیری آنکھوں میں کھو جانا چاہتا ہوں،", line2: "ہمیشہ تیرا ہو جانا چاہتا ہوں۔" },
  { line1: "چاندنی راتوں میں تیرا ذکر رہتا ہے،", line2: "میری دھڑکن میں تیرا اثر رہتا ہے۔" },
  { line1: "تیری محبت کا رنگ الگ لگتا ہے،", line2: "ہر موسم تجھ سے خوبصورت لگتا ہے۔" },
  { line1: "تیری آواز دل کو چھو جاتی ہے،", line2: "خاموش روح کو جگا جاتی ہے۔" },
  { line1: "تیری محبت دعا بن کر ملی ہے،", line2: "میری قسمت تجھ سے جا ملی ہے۔" },
  { line1: "یہ عشق شاید کبھی ختم نہ ہو،", line2: "تیرا نام دل سے کبھی کم نہ ہو۔" },
  { line1: "ہر راستہ تیرے پاس آتا لگتا ہے،", line2: "میرا دل صرف تجھے چاہتا لگتا ہے۔" },
  { line1: "تیری محبت میری پہچان بن گئی،", line2: "میری ادھوری دنیا کی جان بن گئی۔" },
  { line1: "تیری یادوں کا ہر لمحہ دل میں اتر جاتا ہے،", line2: "خاموش راتوں میں تیرا نام بکھر جاتا ہے۔" },
  { line1: "چاندنی جب بھی میرے آنگن میں ٹھہرتی ہے،", line2: "تیرا چہرہ میری آنکھوں میں سنور جاتا ہے۔" },
  { line1: "تیری ہنسی دل کے زخم بھلا دیتی ہے،", line2: "تیری ایک نظر روح کو سکون دے جاتی ہے۔" },
  { line1: "تیری آنکھوں میں ایک الگ جہاں لگتا ہے،", line2: "جیسے خوابوں کا کوئی آسمان لگتا ہے۔" },
  { line1: "میں نے محبت کو تجھ میں مکمل دیکھا ہے،", line2: "ہر احساس کو تیرے دل میں روشن دیکھا ہے۔" },
  { line1: "تیری خاموشی بھی باتیں کرتی لگتی ہے،", line2: "تیری دوری بھی قریب سی لگتی ہے۔" },
  { line1: "دل کی دھڑکن میں تیرا نام رہتا ہے،", line2: "ہر خواب میں تیرا سلام رہتا ہے۔" },
  { line1: "چاہت وہ نہیں جو لفظوں میں بیان ہو،", line2: "چاہت وہ ہے جو خاموشی میں محسوس ہو۔" },
  { line1: "تیری خوشبو میری سانسوں میں بستی ہے،", line2: "تیری یاد میری راتوں میں جگتی ہے۔" },
  { line1: "میں نے ہر دعا میں تیرا نام لکھا ہے،", line2: "اپنی محبت کو تیرے نام کیا ہے۔" },
  { line1: "تیری مسکراہٹ بہار جیسی لگتی ہے،", line2: "تیری آواز ستار جیسی لگتی ہے۔" },
  { line1: "زندگی کی ہر خوشی تیرے ساتھ اچھی لگتی ہے،", line2: "تیری موجودگی ہر کمی پوری کرتی ہے۔" },
  { line1: "تیری ایک جھلک دن بنا دیتی ہے،", line2: "تیری یاد رات سجا دیتی ہے۔" },
  { line1: "محبت اگر عبادت ہے تو تو دعا لگتی ہے،", line2: "میرے دل کی سب سے حسین صدا لگتی ہے۔" },
  { line1: "تیری محبت نے دل کو بدل دیا ہے،", line2: "ہر درد کو خوبصورت بنا دیا ہے۔" },
  { line1: "خاموش لمحوں میں تیرا ذکر رہتا ہے،", line2: "میری ہر سوچ میں تیرا عکس رہتا ہے۔" },
  { line1: "کبھی دور جا کر بھی قریب لگتے ہو،", line2: "میری روح کے سب سے حسین نصیب لگتے ہو۔" },
  { line1: "تیری محبت قسمت کا تحفہ لگتی ہے،", line2: "میرے دل کی سب سے قیمتی دعا لگتی ہے۔" },
  { line1: "میں اگر شعر ہوں تو معنی تم ہو،", line2: "میں اگر خواب ہوں تو تعبیر تم ہو۔" },
  { line1: "دل کی دنیا تیرے نام سے روشن ہے،", line2: "میری ہر خوشی تیرے ہونے سے روشن ہے۔" },
  { line1: "تیری چاہت نے مجھے جینا سکھایا ہے،", line2: "ہر اندھیرے میں امید جگایا ہے۔" },
  { line1: "محبت کا سفر تیرے ساتھ خوبصورت ہے،", line2: "ہر لمحہ تیرے نام سے جنت ہے۔" },
  { line1: "تیرا نام لبوں پر دعا بن کر رہتا ہے،", line2: "میرا دل صرف تیرا پتہ کہتا ہے۔" },
  { line1: "تیری یادیں میری سب سے بڑی دولت ہیں،", line2: "تیری باتیں میری سب سے خوبصورت عادت ہیں۔" },
  { line1: "کبھی چاند، کبھی پھول، کبھی بارش لگتے ہو،", line2: "ہر موسم میں تم صرف محبت لگتے ہو۔" },
];


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
      <div className="pr-16 pl-4">
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
        title="Love Poetry - Beautiful Romantic Poems & Verses"
        description="Read beautiful love poems and romantic verses. Explore collections of poetry about eternal love, heartbreak, devotion, and passion."
        path="/love-poetry"
        keywords="love poetry, romantic poems, love poems, short love poems, beautiful poetry, two line poems, love verses"
        dateModified="2026-05-25"
        faqSchema={[
          { question: "Can I share these love poems?", answer: "Absolutely! These poems are meant to be shared with your loved ones. Copy them into a text message, write them in a greeting card, post them on social media, or whisper them to someone special. Love is meant to be expressed and shared freely." },
          { question: "What makes two-line poems special?", answer: "Two-line poems, or couplets, are powerful because they distill complex emotions into their purest essence. Every word must earn its place, making each line impactful and memorable. They're perfect for quick emotional connections and easy to remember and share." },
          { question: "Are these poems original?", answer: "Yes, all the love poems in this collection are original compositions created specifically for Love Calculator. They draw inspiration from classical poetry traditions while expressing timeless themes of love, passion, devotion, and longing in a fresh and contemporary voice." },
          { question: "How can I use these poems for my partner?", answer: "You can write them inside a love letter, include them in a Valentine's Day card, send them as a good morning text, post them on social media dedicated to your partner, engrave them on a gift, or simply read them aloud during a romantic dinner." },
          { question: "What are the best occasions for love poetry?", answer: "Love poetry is perfect for Valentine's Day, anniversaries, birthdays, weddings, engagement celebrations, date nights, or simply any ordinary day when you want to make someone feel extraordinarily loved and appreciated." },
        ]}
      />
      <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
        <Header />

        <main className="flex-1 relative z-10">
          {/* Hero */}
          <section className="relative py-16 md:py-24 px-4">
            <div className="absolute inset-0 z-0">
              <img src={heroImage} alt="Love Poetry" loading="lazy" className="w-full h-full object-cover opacity-30" />
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
                    {section.verses.map((poem, idx) => {
                      const id = `${sectionIdx}-${idx}`;
                      const fullText = `${poem.line1}\n${poem.line2}`;
                      const isCopied = copiedId === id;
                      return (
                        <div
                          key={idx}
                          className="card-romantic rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 border-l-4 border-primary/40 relative"
                        >
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
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="text-3xl">🌹</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    اردو محبت کے اشعار
                  </h2>
                  <span className="text-3xl">🌹</span>
                </div>
                <p className="text-muted-foreground text-base max-w-2xl mx-auto" dir="rtl">
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

          <BlogPreview />

          <InternalLinks currentPage="/love-poetry" />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LovePoetryPage;
