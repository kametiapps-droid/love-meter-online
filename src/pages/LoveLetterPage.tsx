import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import LoveLetterGenerator from "@/components/LoveLetterGenerator";
import InternalLinks from "@/components/InternalLinks";

const LoveLetterPage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />
      <Header />
      <main className="flex-1 relative z-10">
        <LoveLetterGenerator />
        <InternalLinks currentPage="/love-letter-generator" />
      </main>
      <Footer />
    </div>
  );
};

export default LoveLetterPage;
