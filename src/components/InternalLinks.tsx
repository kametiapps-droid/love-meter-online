import { Link } from "react-router-dom";
import { Heart, Stars, ClipboardList, Sun, Sparkles, Baby, BookOpen, Send, Calendar, CalendarDays, Wand2 } from "lucide-react";

interface InternalLinksProps {
  currentPage?: string;
}

const allTools = [
  { path: "/", label: "Love Calculator", icon: Heart, description: "Test your love compatibility" },
  { path: "/zodiac-compatibility", label: "Zodiac Compatibility", icon: Stars, description: "Check your star sign match" },
  { path: "/love-quiz", label: "Love Style Quiz", icon: ClipboardList, description: "Discover your love personality" },
  { path: "/daily-horoscope", label: "Daily Horoscope", icon: Sun, description: "Read today's love prediction" },
  { path: "/love-fortune-ball", label: "Love Fortune Ball", icon: Sparkles, description: "Ask the magic fortune ball" },
  { path: "/couple-name-generator", label: "Couple Name Generator", icon: Heart, description: "Create your couple name" },
  { path: "/kids-name-generator", label: "Kids Name Generator", icon: Baby, description: "Find perfect baby names" },
  { path: "/love-letter-generator", label: "Love Letter Generator", icon: Send, description: "Write beautiful love letters" },
  { path: "/relationship-timeline", label: "Relationship Timeline", icon: Calendar, description: "Create your love story timeline" },
  { path: "/date-calculator", label: "Date Calculator", icon: CalendarDays, description: "Calculate your time together" },
  { path: "/stylish-name-generator", label: "Stylish Name Generator", icon: Wand2, description: "Create fancy Unicode name styles" },
  { path: "/love-poetry", label: "Love Poetry", icon: BookOpen, description: "Beautiful romantic love poems" },
  { path: "/blog", label: "Love Blog", icon: BookOpen, description: "Read love & relationship articles" },
];

const InternalLinks = ({ currentPage }: InternalLinksProps) => {
  const filteredTools = allTools.filter(tool => tool.path !== currentPage);

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          Explore More Love Tools ❤️
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="card-romantic rounded-xl p-4 hover:scale-[1.02] transition-all duration-300 group flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <tool.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {tool.label}
                </h3>
                <p className="text-xs text-muted-foreground">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
