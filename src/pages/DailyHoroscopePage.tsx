import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DailyHoroscope from "@/components/DailyHoroscope";
import FloatingHearts from "@/components/FloatingHearts";
import { Sun } from "lucide-react";

const DailyHoroscopePage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10">
        <section className="py-8 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Sun className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                Daily Predictions
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Daily Love <span className="text-gradient">Horoscope</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your personalized love predictions based on your zodiac sign! 🌟
            </p>
          </div>
        </section>

        <DailyHoroscope />

        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
              About Daily Love Horoscope
            </h2>
            <div className="space-y-4">
              <div className="card-romantic rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">What is the Daily Love Horoscope?</h3>
                <p className="text-muted-foreground text-sm">
                  Our daily love horoscope provides personalized romantic predictions based on your zodiac sign. Check back each day for new insights about your love life, lucky numbers, and best matches!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DailyHoroscopePage;
