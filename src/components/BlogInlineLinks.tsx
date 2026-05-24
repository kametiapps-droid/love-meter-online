import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";

interface BlogInlineLinksProps {
  postId?: string;
  links?: { to: string; label: string }[];
}

const postLinks: Record<string, { to: string; label: string }[]> = {
  "love-relationships-guide": [
    { to: "/blog/trust-building-relationships", label: "How to Build Trust in a Relationship" },
    { to: "/blog/healthy-communication-relationships", label: "Healthy Communication in Relationships" },
    { to: "/blog/five-love-languages", label: "The 5 Love Languages Explained" },
    { to: "/blog/signs-partner-truly-loves-you", label: "15 Signs Your Partner Truly Loves You" },
    { to: "/", label: "Try the Free Love Calculator" },
    { to: "/love-quiz", label: "Take the Love Style Quiz" },
  ],
  "zodiac-compatibility-guide": [
    { to: "/zodiac-compatibility", label: "Check Your Zodiac Compatibility Now" },
    { to: "/daily-horoscope", label: "Read Your Daily Love Horoscope" },
    { to: "/blog/love-compatibility-name-date-birth", label: "Love Compatibility by Name & Date of Birth" },
    { to: "/blog/love-facts-trivia", label: "50 Fascinating Love Facts & Trivia" },
    { to: "/", label: "Try the Free Love Calculator" },
  ],
  "name-meanings-origins": [
    { to: "/couple-name-generator", label: "Generate Your Couple Name" },
    { to: "/kids-name-generator", label: "Find the Perfect Baby Name" },
    { to: "/blog/love-compatibility-name-date-birth", label: "Love Compatibility by Name & Date of Birth" },
    { to: "/blog/zodiac-compatibility-guide", label: "Understanding Zodiac Compatibility" },
    { to: "/", label: "Try the Free Love Calculator" },
  ],
  "love-facts-trivia": [
    { to: "/blog/science-of-attraction", label: "The Science of Attraction: Why We Fall in Love" },
    { to: "/blog/five-love-languages", label: "The 5 Love Languages Explained" },
    { to: "/blog/love-different-cultures", label: "How Different Cultures Express Love" },
    { to: "/", label: "Try the Free Love Calculator" },
    { to: "/zodiac-compatibility", label: "Check Zodiac Compatibility" },
  ],
  "five-love-languages": [
    { to: "/blog/healthy-communication-relationships", label: "Healthy Communication in Relationships" },
    { to: "/blog/trust-building-relationships", label: "How to Build Trust in a Relationship" },
    { to: "/blog/how-to-apologize-relationship", label: "How to Apologize in a Relationship" },
    { to: "/blog/signs-partner-truly-loves-you", label: "15 Signs Your Partner Truly Loves You" },
    { to: "/love-quiz", label: "Take the Love Style Quiz" },
  ],
  "long-distance-relationships": [
    { to: "/blog/keep-spark-alive-relationship", label: "How to Keep the Spark Alive" },
    { to: "/blog/healthy-communication-relationships", label: "Healthy Communication in Relationships" },
    { to: "/blog/trust-building-relationships", label: "How to Build Trust in a Relationship" },
    { to: "/love-letter-generator", label: "Write a Romantic Love Letter" },
    { to: "/love-poetry", label: "Browse Beautiful Love Poetry" },
  ],
  "romantic-date-ideas": [
    { to: "/blog/anniversary-celebration-ideas", label: "50 Romantic Anniversary Ideas" },
    { to: "/blog/keep-spark-alive-relationship", label: "How to Keep the Spark Alive" },
    { to: "/blog/how-to-write-love-letter", label: "How to Write the Perfect Love Letter" },
    { to: "/love-fortune-ball", label: "Ask the Love Fortune Ball" },
    { to: "/", label: "Try the Free Love Calculator" },
  ],
  "signs-partner-truly-loves-you": [
    { to: "/blog/true-love-test-signs", label: "True Love Test: 12 Signs You've Found The One" },
    { to: "/blog/science-of-attraction", label: "The Science of Attraction" },
    { to: "/blog/five-love-languages", label: "The 5 Love Languages Explained" },
    { to: "/", label: "Try the Free Love Calculator" },
    { to: "/love-quiz", label: "Take the Love Style Quiz" },
  ],
  "keep-spark-alive-relationship": [
    { to: "/blog/romantic-date-ideas", label: "75 Romantic Date Ideas for Every Budget" },
    { to: "/blog/anniversary-celebration-ideas", label: "50 Romantic Anniversary Ideas" },
    { to: "/blog/relationship-goals-couples", label: "30 Meaningful Relationship Goals" },
    { to: "/love-letter-generator", label: "Write a Romantic Love Letter" },
    { to: "/love-poetry", label: "Browse Beautiful Love Poetry" },
  ],
  "science-of-attraction": [
    { to: "/blog/true-love-test-signs", label: "True Love Test: 12 Signs You've Found The One" },
    { to: "/blog/signs-partner-truly-loves-you", label: "15 Signs Your Partner Truly Loves You" },
    { to: "/blog/five-love-languages", label: "The 5 Love Languages Explained" },
    { to: "/", label: "Try the Free Love Calculator" },
    { to: "/zodiac-compatibility", label: "Check Zodiac Compatibility" },
  ],
  "relationship-goals-couples": [
    { to: "/blog/anniversary-celebration-ideas", label: "50 Romantic Anniversary Ideas" },
    { to: "/blog/keep-spark-alive-relationship", label: "How to Keep the Spark Alive" },
    { to: "/blog/how-to-write-love-letter", label: "How to Write the Perfect Love Letter" },
    { to: "/relationship-timeline", label: "Create Your Relationship Timeline" },
    { to: "/", label: "Try the Free Love Calculator" },
  ],
  "how-to-write-love-letter": [
    { to: "/love-letter-generator", label: "Use the Free Love Letter Generator" },
    { to: "/love-poetry", label: "Browse Beautiful Love Poetry" },
    { to: "/blog/romantic-date-ideas", label: "75 Romantic Date Ideas" },
    { to: "/blog/anniversary-celebration-ideas", label: "50 Romantic Anniversary Ideas" },
    { to: "/blog/beautiful-love-quotes", label: "100 Most Beautiful Love Quotes" },
  ],
  "first-date-tips": [
    { to: "/blog/romantic-date-ideas", label: "75 Romantic Date Ideas for Every Budget" },
    { to: "/blog/love-compatibility-name-date-birth", label: "Love Compatibility by Name & Date of Birth" },
    { to: "/blog/zodiac-compatibility-guide", label: "Understanding Zodiac Compatibility" },
    { to: "/", label: "Try the Free Love Calculator" },
    { to: "/zodiac-compatibility", label: "Check Zodiac Compatibility" },
  ],
  "healthy-communication-relationships": [
    { to: "/blog/trust-building-relationships", label: "How to Build Trust in a Relationship" },
    { to: "/blog/how-to-apologize-relationship", label: "How to Apologize in a Relationship" },
    { to: "/blog/five-love-languages", label: "The 5 Love Languages Explained" },
    { to: "/blog/emotional-intelligence-love", label: "Emotional Intelligence in Love" },
    { to: "/love-quiz", label: "Take the Love Style Quiz" },
  ],
  "beautiful-love-quotes": [
    { to: "/love-poetry", label: "Browse Beautiful Love Poetry" },
    { to: "/love-letter-generator", label: "Write a Romantic Love Letter" },
    { to: "/blog/how-to-write-love-letter", label: "How to Write the Perfect Love Letter" },
    { to: "/blog/love-facts-trivia", label: "50 Fascinating Love Facts & Trivia" },
    { to: "/", label: "Try the Free Love Calculator" },
  ],
  "marriage-proposal-ideas": [
    { to: "/blog/anniversary-celebration-ideas", label: "50 Romantic Anniversary Ideas" },
    { to: "/blog/romantic-date-ideas", label: "75 Romantic Date Ideas" },
    { to: "/blog/how-to-write-love-letter", label: "How to Write the Perfect Love Letter" },
    { to: "/love-letter-generator", label: "Use the Free Love Letter Generator" },
    { to: "/couple-name-generator", label: "Generate Your Couple Name" },
  ],
  "how-to-apologize-relationship": [
    { to: "/blog/trust-building-relationships", label: "How to Build Trust in a Relationship" },
    { to: "/blog/healthy-communication-relationships", label: "Healthy Communication in Relationships" },
    { to: "/blog/emotional-intelligence-love", label: "Emotional Intelligence in Love" },
    { to: "/blog/five-love-languages", label: "The 5 Love Languages Explained" },
    { to: "/love-quiz", label: "Take the Love Style Quiz" },
  ],
  "trust-building-relationships": [
    { to: "/blog/healthy-communication-relationships", label: "Healthy Communication in Relationships" },
    { to: "/blog/emotional-intelligence-love", label: "Emotional Intelligence in Love" },
    { to: "/blog/how-to-apologize-relationship", label: "How to Apologize in a Relationship" },
    { to: "/blog/signs-partner-truly-loves-you", label: "15 Signs Your Partner Truly Loves You" },
    { to: "/love-quiz", label: "Take the Love Style Quiz" },
  ],
  "emotional-intelligence-love": [
    { to: "/blog/trust-building-relationships", label: "How to Build Trust in a Relationship" },
    { to: "/blog/healthy-communication-relationships", label: "Healthy Communication in Relationships" },
    { to: "/blog/five-love-languages", label: "The 5 Love Languages Explained" },
    { to: "/blog/self-love-guide", label: "The Power of Self-Love" },
    { to: "/love-quiz", label: "Take the Love Style Quiz" },
  ],
  "self-love-guide": [
    { to: "/blog/emotional-intelligence-love", label: "Emotional Intelligence in Love" },
    { to: "/blog/trust-building-relationships", label: "How to Build Trust in a Relationship" },
    { to: "/blog/signs-partner-truly-loves-you", label: "15 Signs Your Partner Truly Loves You" },
    { to: "/blog/true-love-test-signs", label: "True Love Test: 12 Signs You've Found The One" },
    { to: "/love-quiz", label: "Take the Love Style Quiz" },
  ],
  "anniversary-celebration-ideas": [
    { to: "/blog/romantic-date-ideas", label: "75 Romantic Date Ideas for Every Budget" },
    { to: "/blog/keep-spark-alive-relationship", label: "How to Keep the Spark Alive" },
    { to: "/blog/how-to-write-love-letter", label: "How to Write the Perfect Love Letter" },
    { to: "/love-letter-generator", label: "Use the Free Love Letter Generator" },
    { to: "/relationship-timeline", label: "Create Your Relationship Timeline" },
  ],
  "love-different-cultures": [
    { to: "/blog/zodiac-compatibility-guide", label: "Understanding Zodiac Compatibility" },
    { to: "/blog/five-love-languages", label: "The 5 Love Languages Explained" },
    { to: "/blog/love-facts-trivia", label: "50 Fascinating Love Facts & Trivia" },
    { to: "/zodiac-compatibility", label: "Check Zodiac Compatibility" },
    { to: "/", label: "Try the Free Love Calculator" },
  ],
  "love-compatibility-name-date-birth": [
    { to: "/", label: "Try the Free Love Calculator Now" },
    { to: "/zodiac-compatibility", label: "Check Your Zodiac Compatibility" },
    { to: "/blog/zodiac-compatibility-guide", label: "Understanding Zodiac Compatibility" },
    { to: "/blog/true-love-test-signs", label: "True Love Test: 12 Signs You've Found The One" },
    { to: "/daily-horoscope", label: "Read Your Daily Love Horoscope" },
  ],
  "true-love-test-signs": [
    { to: "/blog/love-compatibility-name-date-birth", label: "Love Compatibility by Name & Date of Birth" },
    { to: "/blog/signs-partner-truly-loves-you", label: "15 Signs Your Partner Truly Loves You" },
    { to: "/blog/science-of-attraction", label: "The Science of Attraction" },
    { to: "/", label: "Try the Free Love Calculator" },
    { to: "/love-quiz", label: "Take the Love Style Quiz" },
  ],
};

const defaultLinks = [
  { to: "/blog/love-compatibility-name-date-birth", label: "Love Compatibility by Name and Date of Birth" },
  { to: "/blog/true-love-test-signs", label: "True Love Test: 12 Signs You've Found The One" },
  { to: "/", label: "Try the Free Love Calculator" },
  { to: "/zodiac-compatibility", label: "Check Zodiac Compatibility by Birthdate" },
  { to: "/love-quiz", label: "Take the Love Style Quiz" },
  { to: "/daily-horoscope", label: "Read Your Daily Love Horoscope" },
  { to: "/love-letter-generator", label: "Write a Romantic Love Letter" },
  { to: "/love-poetry", label: "Browse Beautiful Love Poetry" },
];

const BlogInlineLinks = ({ postId, links }: BlogInlineLinksProps) => {
  const resolvedLinks = links ?? (postId ? postLinks[postId] : undefined) ?? defaultLinks;

  return (
    <aside className="card-romantic rounded-xl p-6 my-8 border-l-4 border-primary">
      <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
        <Heart className="w-5 h-5 text-primary fill-primary" />
        Recommended for You
      </h3>
      <ul className="space-y-2">
        {resolvedLinks.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-sm text-primary hover:text-primary/80 hover:underline inline-flex items-center gap-1.5 font-medium"
            >
              <ArrowRight className="w-3 h-3" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default BlogInlineLinks;
