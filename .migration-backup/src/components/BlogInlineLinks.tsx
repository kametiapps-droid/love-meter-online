import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";

interface BlogInlineLinksProps {
  links?: { to: string; label: string }[];
}

const defaultLinks = [
  { to: "/blog/love-compatibility-name-date-birth", label: "Love Compatibility by Name and Date of Birth — Complete Guide" },
  { to: "/blog/true-love-test-signs", label: "True Love Test: 12 Signs You've Found The One" },
  { to: "/", label: "Try the Free Love Calculator" },
  { to: "/zodiac-compatibility", label: "Check Zodiac Compatibility by Birthdate" },
  { to: "/love-quiz", label: "Take the Love Style Quiz" },
  { to: "/daily-horoscope", label: "Read Your Daily Love Horoscope" },
  { to: "/love-letter-generator", label: "Write a Romantic Love Letter" },
  { to: "/love-poetry", label: "Browse Beautiful Love Poetry" },
];

const BlogInlineLinks = ({ links = defaultLinks }: BlogInlineLinksProps) => {
  return (
    <aside className="card-romantic rounded-xl p-6 my-8 border-l-4 border-primary">
      <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
        <Heart className="w-5 h-5 text-primary fill-primary" />
        Recommended for You
      </h3>
      <ul className="space-y-2">
        {links.map((l) => (
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
