import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-border pt-8">
          {/* Tools Links */}
          <div className="mb-8">
            <h3 className="font-display text-lg font-semibold text-foreground mb-4 text-center">
              Our Love Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link to="/love-calculator" className="text-muted-foreground hover:text-primary transition-colors">
                Love Calculator
              </Link>
              <span className="text-border">•</span>
              <Link to="/zodiac-compatibility" className="text-muted-foreground hover:text-primary transition-colors">
                Zodiac Compatibility
              </Link>
              <span className="text-border">•</span>
              <Link to="/love-quiz" className="text-muted-foreground hover:text-primary transition-colors">
                Love Quiz
              </Link>
              <span className="text-border">•</span>
              <Link to="/daily-horoscope" className="text-muted-foreground hover:text-primary transition-colors">
                Daily Horoscope
              </Link>
              <span className="text-border">•</span>
              <Link to="/love-fortune-ball" className="text-muted-foreground hover:text-primary transition-colors">
                Fortune Ball
              </Link>
              <span className="text-border">•</span>
              <Link to="/couple-name-generator" className="text-muted-foreground hover:text-primary transition-colors">
                Couple Names
              </Link>
              <span className="text-border">•</span>
              <Link to="/kids-name-generator" className="text-muted-foreground hover:text-primary transition-colors">
                Kids Names
              </Link>
              <span className="text-border">•</span>
              <Link to="/love-game" className="text-muted-foreground hover:text-primary transition-colors">
                Love Game
              </Link>
              <span className="text-border">•</span>
              <Link to="/love-letter-generator" className="text-muted-foreground hover:text-primary transition-colors">
                Love Letters
              </Link>
              <span className="text-border">•</span>
              <Link to="/relationship-timeline" className="text-muted-foreground hover:text-primary transition-colors">
                Timeline
              </Link>
              <span className="text-border">•</span>
              <Link to="/love-poetry" className="text-muted-foreground hover:text-primary transition-colors">
                Poetry
              </Link>
              <span className="text-border">•</span>
              <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Love Calculator Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Love Calculator. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="hover:text-primary transition-colors">
                Disclaimer
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground/60 text-center mt-6">
            This love calculator is for entertainment purposes only. Results are generated randomly and should not be taken seriously.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
