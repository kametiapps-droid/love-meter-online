import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-heart-red fill-heart-red" />
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Love Calculator. Made with love.
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Use
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
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
