import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import LoveCalculatorPage from "./pages/LoveCalculatorPage";
import ZodiacCompatibilityPage from "./pages/ZodiacCompatibilityPage";
import LoveQuizPage from "./pages/LoveQuizPage";
import DailyHoroscopePage from "./pages/DailyHoroscopePage";
import LoveFortuneBallPage from "./pages/LoveFortuneBallPage";
import CoupleNameGeneratorPage from "./pages/CoupleNameGeneratorPage";
import KidsNameGeneratorPage from "./pages/KidsNameGeneratorPage";
import LoveGamePage from "./pages/LoveGamePage";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import BlogPost7 from "./pages/BlogPost7";
import BlogPost8 from "./pages/BlogPost8";
import BlogPost9 from "./pages/BlogPost9";
import BlogPost10 from "./pages/BlogPost10";
import BlogPost11 from "./pages/BlogPost11";
import BlogPost12 from "./pages/BlogPost12";
import BlogPost13 from "./pages/BlogPost13";
import BlogPost14 from "./pages/BlogPost14";
import BlogPost15 from "./pages/BlogPost15";
import BlogPost16 from "./pages/BlogPost16";
import BlogPost17 from "./pages/BlogPost17";
import BlogPost18 from "./pages/BlogPost18";
import BlogPost19 from "./pages/BlogPost19";
import BlogPost20 from "./pages/BlogPost20";
import BlogPost21 from "./pages/BlogPost21";
import BlogPost22 from "./pages/BlogPost22";
import LovePoetryPage from "./pages/LovePoetryPage";
import LoveLetterPage from "./pages/LoveLetterPage";
import RelationshipTimelinePage from "./pages/RelationshipTimelinePage";
import AboutUs from "./pages/AboutUs";
import CookieConsent from "./components/CookieConsent";
import BottomNavBar from "./components/BottomNavBar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/love-calculator" element={<LoveCalculatorPage />} />
          <Route path="/love-poetry" element={<LovePoetryPage />} />
          <Route path="/zodiac-compatibility" element={<ZodiacCompatibilityPage />} />
          <Route path="/love-quiz" element={<LoveQuizPage />} />
          <Route path="/daily-horoscope" element={<DailyHoroscopePage />} />
          <Route path="/love-fortune-ball" element={<LoveFortuneBallPage />} />
          <Route path="/couple-name-generator" element={<CoupleNameGeneratorPage />} />
          <Route path="/kids-name-generator" element={<KidsNameGeneratorPage />} />
          <Route path="/love-game" element={<LoveGamePage />} />
          <Route path="/love-letter-generator" element={<LoveLetterPage />} />
          <Route path="/relationship-timeline" element={<RelationshipTimelinePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/love-relationships-guide" element={<BlogPost1 />} />
          <Route path="/blog/zodiac-compatibility-guide" element={<BlogPost2 />} />
          <Route path="/blog/name-meanings-origins" element={<BlogPost3 />} />
          <Route path="/blog/love-facts-trivia" element={<BlogPost4 />} />
          <Route path="/blog/five-love-languages" element={<BlogPost5 />} />
          <Route path="/blog/long-distance-relationships" element={<BlogPost6 />} />
          <Route path="/blog/romantic-date-ideas" element={<BlogPost7 />} />
          <Route path="/blog/signs-partner-truly-loves-you" element={<BlogPost8 />} />
          <Route path="/blog/keep-spark-alive-relationship" element={<BlogPost9 />} />
          <Route path="/blog/science-of-attraction" element={<BlogPost10 />} />
          <Route path="/blog/relationship-goals-couples" element={<BlogPost11 />} />
          <Route path="/blog/how-to-write-love-letter" element={<BlogPost12 />} />
          <Route path="/blog/first-date-tips" element={<BlogPost13 />} />
          <Route path="/blog/healthy-communication-relationships" element={<BlogPost14 />} />
          <Route path="/blog/beautiful-love-quotes" element={<BlogPost15 />} />
          <Route path="/blog/marriage-proposal-ideas" element={<BlogPost16 />} />
          <Route path="/blog/how-to-apologize-relationship" element={<BlogPost17 />} />
          <Route path="/blog/trust-building-relationships" element={<BlogPost18 />} />
          <Route path="/blog/emotional-intelligence-love" element={<BlogPost19 />} />
          <Route path="/blog/self-love-guide" element={<BlogPost20 />} />
          <Route path="/blog/anniversary-celebration-ideas" element={<BlogPost21 />} />
          <Route path="/blog/love-different-cultures" element={<BlogPost22 />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
