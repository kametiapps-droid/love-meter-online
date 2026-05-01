import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import CookieConsent from "./components/CookieConsent";

// Lazy load all pages except Index for performance
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const Contact = lazy(() => import("./pages/Contact"));
const LoveCalculatorPage = lazy(() => import("./pages/LoveCalculatorPage"));
const ZodiacCompatibilityPage = lazy(() => import("./pages/ZodiacCompatibilityPage"));
const LoveQuizPage = lazy(() => import("./pages/LoveQuizPage"));
const DailyHoroscopePage = lazy(() => import("./pages/DailyHoroscopePage"));
const LoveFortuneBallPage = lazy(() => import("./pages/LoveFortuneBallPage"));
const CoupleNameGeneratorPage = lazy(() => import("./pages/CoupleNameGeneratorPage"));
const KidsNameGeneratorPage = lazy(() => import("./pages/KidsNameGeneratorPage"));

const Blog = lazy(() => import("./pages/Blog"));
const BlogPost1 = lazy(() => import("./pages/BlogPost1"));
const BlogPost2 = lazy(() => import("./pages/BlogPost2"));
const BlogPost3 = lazy(() => import("./pages/BlogPost3"));
const BlogPost4 = lazy(() => import("./pages/BlogPost4"));
const BlogPost5 = lazy(() => import("./pages/BlogPost5"));
const BlogPost6 = lazy(() => import("./pages/BlogPost6"));
const BlogPost7 = lazy(() => import("./pages/BlogPost7"));
const BlogPost8 = lazy(() => import("./pages/BlogPost8"));
const BlogPost9 = lazy(() => import("./pages/BlogPost9"));
const BlogPost10 = lazy(() => import("./pages/BlogPost10"));
const BlogPost11 = lazy(() => import("./pages/BlogPost11"));
const BlogPost12 = lazy(() => import("./pages/BlogPost12"));
const BlogPost13 = lazy(() => import("./pages/BlogPost13"));
const BlogPost14 = lazy(() => import("./pages/BlogPost14"));
const BlogPost15 = lazy(() => import("./pages/BlogPost15"));
const BlogPost16 = lazy(() => import("./pages/BlogPost16"));
const BlogPost17 = lazy(() => import("./pages/BlogPost17"));
const BlogPost18 = lazy(() => import("./pages/BlogPost18"));
const BlogPost19 = lazy(() => import("./pages/BlogPost19"));
const BlogPost20 = lazy(() => import("./pages/BlogPost20"));
const BlogPost21 = lazy(() => import("./pages/BlogPost21"));
const BlogPost22 = lazy(() => import("./pages/BlogPost22"));
const LovePoetryPage = lazy(() => import("./pages/LovePoetryPage"));
const LoveLetterPage = lazy(() => import("./pages/LoveLetterPage"));
const RelationshipTimelinePage = lazy(() => import("./pages/RelationshipTimelinePage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center romantic-gradient-bg">
    <div className="animate-pulse text-primary text-lg">Loading...</div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
