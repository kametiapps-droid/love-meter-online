import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Love Calculator Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Love Calculator. Made with love.
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
