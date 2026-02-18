import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <Cookie className="w-8 h-8 text-primary flex-shrink-0 mt-1 md:mt-0" />
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-sm mb-1">We value your privacy 🍪</h3>
          <p className="text-muted-foreground text-xs leading-relaxed">
            We use cookies and similar technologies to enhance your browsing experience, serve personalized ads, and analyze our traffic. By clicking "Accept All", you consent to the use of cookies. Read our{" "}
            <Link to="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            for more information.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0 w-full md:w-auto">
          <button
            onClick={decline}
            className="flex-1 md:flex-none px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
