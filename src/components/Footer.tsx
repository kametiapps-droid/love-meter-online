import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Heart, Stars, ClipboardList, Sun, Sparkles, Baby, Send, Calendar, Feather } from "lucide-react";
import SocialShareBar from "./SocialShareBar";

const toolLinks = [
  { to: "/love-calculator", label: "Love Calculator", icon: Heart },
  { to: "/zodiac-compatibility", label: "Zodiac Compatibility", icon: Stars },
  { to: "/love-quiz", label: "Love Quiz", icon: ClipboardList },
  { to: "/daily-horoscope", label: "Daily Horoscope", icon: Sun },
  { to: "/love-fortune-ball", label: "Fortune Ball", icon: Sparkles },
  { to: "/couple-name-generator", label: "Couple Names", icon: Heart },
  { to: "/kids-name-generator", label: "Kids Names", icon: Baby },
  { to: "/love-letter-generator", label: "Love Letters", icon: Send },
  { to: "/relationship-timeline", label: "Timeline", icon: Calendar },
  { to: "/love-poetry", label: "Poetry", icon: Feather },
];

const blogLinks = [
  { to: "/blog/trust-building-relationships", label: "Trust Building" },
  { to: "/blog/emotional-intelligence-love", label: "Emotional Intelligence" },
  { to: "/blog/self-love-guide", label: "Self-Love Guide" },
  { to: "/blog/first-date-tips", label: "First Date Tips" },
  { to: "/blog/healthy-communication-relationships", label: "Communication Tips" },
  { to: "/blog/beautiful-love-quotes", label: "Love Quotes" },
  { to: "/blog/signs-partner-truly-loves-you", label: "Signs of True Love" },
  { to: "/blog/science-of-attraction", label: "Science of Attraction" },
  { to: "/blog/five-love-languages", label: "Love Languages" },
  { to: "/blog/romantic-date-ideas", label: "Date Ideas" },
  { to: "/blog/zodiac-compatibility-guide", label: "Zodiac Guide" },
  { to: "/blog/keep-spark-alive-relationship", label: "Keep the Spark" },
];

const companyLinks = [
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Blog" },
];

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-of-service", label: "Terms of Service" },
  { to: "/disclaimer", label: "Disclaimer" },
];

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <SocialShareBar />
      <div className="max-w-6xl mx-auto py-10 px-4">
        <div className="border-t border-border pt-10">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src={logo} alt="Love Calculator Logo" className="w-10 h-10 object-contain" />
                <span className="font-display text-lg font-bold text-foreground">Love Calculator</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Your #1 destination for love compatibility tools, zodiac insights, relationship advice, and romantic inspiration. 💕
              </p>
            </div>

            {/* Love Tools Column */}
            <div>
              <h3 className="font-display text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Love Tools</h3>
              <ul className="space-y-2">
                {toolLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5">
                      <link.icon className="w-3 h-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog Column */}
            <div>
              <h3 className="font-display text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Popular Articles</h3>
              <ul className="space-y-2">
                {blogLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company & Legal Column */}
            <div>
              <h3 className="font-display text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Company</h3>
              <ul className="space-y-2 mb-6">
                {companyLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Love Calculator. All rights reserved.
            </span>
            <p className="text-xs text-muted-foreground/60 text-center md:text-right max-w-md">
              This love calculator is for entertainment purposes only. Results are generated randomly and should not be taken seriously.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
