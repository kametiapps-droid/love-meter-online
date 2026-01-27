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
          <Route path="/zodiac-compatibility" element={<ZodiacCompatibilityPage />} />
          <Route path="/love-quiz" element={<LoveQuizPage />} />
          <Route path="/daily-horoscope" element={<DailyHoroscopePage />} />
          <Route path="/love-fortune-ball" element={<LoveFortuneBallPage />} />
          <Route path="/couple-name-generator" element={<CoupleNameGeneratorPage />} />
          <Route path="/kids-name-generator" element={<KidsNameGeneratorPage />} />
          <Route path="/love-game" element={<LoveGamePage />} />
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
