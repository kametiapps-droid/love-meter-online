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
import LovePoetryPage from "./pages/LovePoetryPage";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/love-relationships-guide" element={<BlogPost1 />} />
          <Route path="/blog/zodiac-compatibility-guide" element={<BlogPost2 />} />
          <Route path="/blog/name-meanings-origins" element={<BlogPost3 />} />
          <Route path="/blog/love-facts-trivia" element={<BlogPost4 />} />
          <Route path="/blog/five-love-languages" element={<BlogPost5 />} />
          <Route path="/blog/long-distance-relationships" element={<BlogPost6 />} />
          <Route path="/blog/romantic-date-ideas" element={<BlogPost7 />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
