import { Link } from "react-router-dom";
import { Heart, Stars, ClipboardList, Sun, Sparkles, Baby, BookOpen, Send, Calendar } from "lucide-react";

const tools = [
  { path: "/zodiac-compatibility", label: "Zodiac Compatibility", icon: Stars, description: "Check your star sign love match", color: "from-purple-500 to-indigo-500" },
  { path: "/love-quiz", label: "Love Style Quiz", icon: ClipboardList, description: "Discover your love personality type", color: "from-rose-500 to-pink-500" },
  { path: "/daily-horoscope", label: "Daily Horoscope", icon: Sun, description: "Today's love prediction for your sign", color: "from-amber-500 to-orange-500" },
  { path: "/love-fortune-ball", label: "Love Fortune Ball", icon: Sparkles, description: "Ask the magic ball about your love", color: "from-violet-500 to-purple-500" },
  { path: "/couple-name-generator", label: "Couple Name Generator", icon: Heart, description: "Create your unique couple name", color: "from-pink-400 to-rose-400" },
  { path: "/kids-name-generator", label: "Kids Name Generator", icon: Baby, description: "Find perfect baby names for your family", color: "from-teal-500 to-cyan-500" },
  { path: "/love-letter-generator", label: "Love Letter Generator", icon: Send, description: "Write beautiful romantic letters", color: "from-pink-500 to-fuchsia-500" },
  { path: "/relationship-timeline", label: "Relationship Timeline", icon: Calendar, description: "Create your love story timeline", color: "from-blue-500 to-indigo-500" },
  { path: "/love-poetry", label: "Love Poetry", icon: BookOpen, description: "Read beautiful romantic poems", color: "from-rose-400 to-pink-500" },
];

const ToolCards = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
          Explore All Love Tools ❤️
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover our complete collection of free romantic tools and calculators
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.path}
              to={tool.path}
              className="card-romantic rounded-xl p-4 hover:scale-[1.03] transition-all duration-300 group text-center flex flex-col items-center gap-2"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-md`}>
                <tool.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors leading-tight">
                {tool.label}
              </h3>
              <p className="text-xs text-muted-foreground leading-snug hidden sm:block">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolCards;
