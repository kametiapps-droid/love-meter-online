import { Heart } from "lucide-react";

const hearts = [
  { size: 24, left: "5%",  top: "10%", delay: "delay-100",  opacity: 0.4 },
  { size: 16, left: "85%", top: "15%", delay: "delay-300",  opacity: 0.35 },
  { size: 28, left: "8%",  top: "60%", delay: "delay-700",  opacity: 0.4 },
  { size: 18, left: "92%", top: "70%", delay: "delay-500",  opacity: 0.3 },
  { size: 22, left: "3%",  top: "80%", delay: "delay-1000", opacity: 0.35 },
  { size: 20, left: "75%", top: "5%",  delay: "delay-200",  opacity: 0.3 },
];

const FloatingHearts = () => (
  <div
    className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    style={{ contain: "layout style paint" }}
  >
    {hearts.map((heart, index) => (
      <Heart
        key={index}
        size={heart.size}
        className={`absolute animate-float-heart ${heart.delay} text-heart-pink fill-heart-pink`}
        style={{ left: heart.left, top: heart.top, opacity: heart.opacity }}
      />
    ))}
  </div>
);

export default FloatingHearts;
