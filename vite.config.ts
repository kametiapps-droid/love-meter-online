import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        "love-calculator": path.resolve(__dirname, "love-calculator.html"),
        "zodiac-compatibility": path.resolve(__dirname, "zodiac-compatibility.html"),
        "love-quiz": path.resolve(__dirname, "love-quiz.html"),
        "daily-horoscope": path.resolve(__dirname, "daily-horoscope.html"),
        "love-fortune-ball": path.resolve(__dirname, "love-fortune-ball.html"),
        "couple-name-generator": path.resolve(__dirname, "couple-name-generator.html"),
        "kids-name-generator": path.resolve(__dirname, "kids-name-generator.html"),
        "love-game": path.resolve(__dirname, "love-game.html"),
        "love-letter-generator": path.resolve(__dirname, "love-letter-generator.html"),
        "relationship-timeline": path.resolve(__dirname, "relationship-timeline.html"),
        "love-poetry": path.resolve(__dirname, "love-poetry.html"),
        blog: path.resolve(__dirname, "blog.html"),
        "blog-love-relationships-guide": path.resolve(__dirname, "blog/love-relationships-guide.html"),
        "blog-zodiac-compatibility-guide": path.resolve(__dirname, "blog/zodiac-compatibility-guide.html"),
        "blog-name-meanings-origins": path.resolve(__dirname, "blog/name-meanings-origins.html"),
        "blog-love-facts-trivia": path.resolve(__dirname, "blog/love-facts-trivia.html"),
        "blog-five-love-languages": path.resolve(__dirname, "blog/five-love-languages.html"),
        "blog-long-distance-relationships": path.resolve(__dirname, "blog/long-distance-relationships.html"),
        "blog-romantic-date-ideas": path.resolve(__dirname, "blog/romantic-date-ideas.html"),
        "blog-signs-partner-truly-loves-you": path.resolve(__dirname, "blog/signs-partner-truly-loves-you.html"),
        "blog-keep-spark-alive-relationship": path.resolve(__dirname, "blog/keep-spark-alive-relationship.html"),
        "blog-science-of-attraction": path.resolve(__dirname, "blog/science-of-attraction.html"),
        "blog-relationship-goals-couples": path.resolve(__dirname, "blog/relationship-goals-couples.html"),
        "blog-how-to-write-love-letter": path.resolve(__dirname, "blog/how-to-write-love-letter.html"),
        "blog-first-date-tips": path.resolve(__dirname, "blog/first-date-tips.html"),
        "blog-healthy-communication": path.resolve(__dirname, "blog/healthy-communication-relationships.html"),
        "blog-beautiful-love-quotes": path.resolve(__dirname, "blog/beautiful-love-quotes.html"),
        "blog-marriage-proposal-ideas": path.resolve(__dirname, "blog/marriage-proposal-ideas.html"),
        "blog-how-to-apologize": path.resolve(__dirname, "blog/how-to-apologize-relationship.html"),
        "privacy-policy": path.resolve(__dirname, "privacy-policy.html"),
        "terms-of-service": path.resolve(__dirname, "terms-of-service.html"),
        disclaimer: path.resolve(__dirname, "disclaimer.html"),
        contact: path.resolve(__dirname, "contact.html"),
        about: path.resolve(__dirname, "about.html"),
      },
    },
  },
}));