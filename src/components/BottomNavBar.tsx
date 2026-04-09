import { Link, useLocation } from "react-router-dom";
import { Heart, Star, Gamepad2, BookOpen, Home } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/love-calculator", label: "Love", icon: Heart },
  { to: "/zodiac-compatibility", label: "Zodiac", icon: Star },
  { to: "/love-game", label: "Games", icon: Gamepad2 },
  { to: "/blog", label: "Blog", icon: BookOpen },
];

const BottomNavBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-2px_10px_rgba(0,0,0,0.1)] safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[56px] ${
                isActive
                  ? "text-primary scale-105"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className={`p-1 rounded-full transition-colors ${isActive ? "bg-primary/10" : ""}`}>
                <Icon className={`w-5 h-5 ${isActive ? "fill-primary/20" : ""}`} />
              </div>
              <span className={`text-[10px] font-medium leading-tight ${isActive ? "font-semibold" : ""}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavBar;
