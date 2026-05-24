import { Facebook, Twitter, Linkedin, MessageCircle, Send, Share2 } from "lucide-react";

const SITE_URL = "https://www.lovecalculator.space";
const SHARE_TEXT = "Check out Love Calculator — find your true love compatibility! 💕";

const SocialShareBar = () => {
  const url = encodeURIComponent(SITE_URL);
  const text = encodeURIComponent(SHARE_TEXT);

  const shares = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      color: "bg-[#1877F2] hover:bg-[#1877F2]/90",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      color: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/90",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: `https://api.whatsapp.com/send?text=${text}%20${url}`,
      color: "bg-[#25D366] hover:bg-[#25D366]/90",
    },
    {
      name: "Telegram",
      icon: Send,
      href: `https://t.me/share/url?url=${url}&text=${text}`,
      color: "bg-[#0088cc] hover:bg-[#0088cc]/90",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      color: "bg-[#0A66C2] hover:bg-[#0A66C2]/90",
    },
  ];

  const handleNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: "Love Calculator", text: SHARE_TEXT, url: SITE_URL });
      } catch (_e) { /* user cancelled share */ }
    } else {
      navigator.clipboard?.writeText(`${SHARE_TEXT} ${SITE_URL}`);
    }
  };

  return (
    <div className="w-full py-6 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3">
        <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider">
          Share the Love 💕
        </h3>
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {shares.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${s.name}`}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md ${s.color}`}
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
          <button
            onClick={handleNative}
            aria-label="Share"
            className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-primary hover:bg-primary/90 transition-transform hover:scale-110 shadow-md"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialShareBar;
