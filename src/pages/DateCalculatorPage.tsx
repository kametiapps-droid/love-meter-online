import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import InternalLinks from "@/components/InternalLinks";
import BlogPreview from "@/components/BlogPreview";
import FloatingHearts from "@/components/FloatingHearts";
import { CalendarDays, Heart, Clock, Gift, Diff } from "lucide-react";
import { Link } from "react-router-dom";

const pad = (n: number) => String(n).padStart(2, "0");

const dateDiff = (from: Date, to: Date) => {
  let y = to.getFullYear() - from.getFullYear();
  let m = to.getMonth() - from.getMonth();
  let d = to.getDate() - from.getDate();
  if (d < 0) { m--; const prev = new Date(to.getFullYear(), to.getMonth(), 0); d += prev.getDate(); }
  if (m < 0) { y--; m += 12; }
  const totalDays = Math.floor((to.getTime() - from.getTime()) / 86400000);
  return { years: y, months: m, days: d, totalDays };
};

const ordinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

type Tab = "together" | "age" | "anniversary" | "difference";

const DateCalculatorPage = () => {
  const [tab, setTab] = useState<Tab>("together");

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

  const [startDate, setStartDate] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [anniversaryDate, setAnniversaryDate] = useState("");
  const [dateA, setDateA] = useState("");
  const [dateB, setDateB] = useState("");

  const tabs: { id: Tab; label: string; icon: React.ElementType; color: string }[] = [
    { id: "together", label: "Time Together", icon: Heart, color: "#f43f5e" },
    { id: "age", label: "Age Calculator", icon: Clock, color: "#8b5cf6" },
    { id: "anniversary", label: "Anniversary", icon: Gift, color: "#f59e0b" },
    { id: "difference", label: "Date Difference", icon: Diff, color: "#10b981" },
  ];

  const togetherResult = (() => {
    if (!startDate) return null;
    const from = new Date(startDate);
    if (isNaN(from.getTime()) || from > today) return null;
    const r = dateDiff(from, today);
    const nextAnniv = new Date(today.getFullYear(), from.getMonth(), from.getDate());
    if (nextAnniv < today) nextAnniv.setFullYear(nextAnniv.getFullYear() + 1);
    const daysToAnniv = Math.round((nextAnniv.getTime() - today.getTime()) / 86400000);
    return { ...r, daysToAnniv, anniversary: ordinal(r.years + 1) };
  })();

  const ageResult = (() => {
    if (!birthDate) return null;
    const from = new Date(birthDate);
    if (isNaN(from.getTime()) || from > today) return null;
    const r = dateDiff(from, today);
    const nextBday = new Date(today.getFullYear(), from.getMonth(), from.getDate());
    if (nextBday <= today) nextBday.setFullYear(nextBday.getFullYear() + 1);
    const daysToBday = Math.round((nextBday.getTime() - today.getTime()) / 86400000);
    return { ...r, daysToBday };
  })();

  const anniversaryResult = (() => {
    if (!anniversaryDate) return null;
    const from = new Date(anniversaryDate);
    if (isNaN(from.getTime())) return null;
    const isPast = from <= today;
    const nextAnniv = new Date(today.getFullYear(), from.getMonth(), from.getDate());
    if (nextAnniv <= today) nextAnniv.setFullYear(nextAnniv.getFullYear() + 1);
    const daysTo = Math.round((nextAnniv.getTime() - today.getTime()) / 86400000);
    const yearsCount = nextAnniv.getFullYear() - from.getFullYear();
    const daysSince = isPast ? Math.floor((today.getTime() - from.getTime()) / 86400000) : 0;
    return { daysTo, yearsCount, isPast, daysSince, ordinalYear: ordinal(yearsCount) };
  })();

  const diffResult = (() => {
    if (!dateA || !dateB) return null;
    const a = new Date(dateA), b = new Date(dateB);
    if (isNaN(a.getTime()) || isNaN(b.getTime())) return null;
    const from = a < b ? a : b;
    const to = a < b ? b : a;
    return dateDiff(from, to);
  })();

  const statBox = (label: string, value: string | number, sub?: string, color = "#f43f5e") => (
    <div className="rounded-2xl p-5 text-center flex-1" style={{ background: "linear-gradient(135deg,#fff0f3,#fff8fa)", border: "1px solid #ffd6e0" }}>
      <p className="text-3xl font-bold" style={{ color }}>{value}</p>
      <p className="text-sm font-semibold text-gray-700 mt-1">{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );

  return (
    <>
      <SEO
        title="Date & Time Calculator – Days Together, Age & Anniversary Counter"
        description="Calculate how long you've been together, your age, days until your anniversary, and date differences. Perfect for couples!"
        path="/date-calculator"
        keywords="date calculator, days together calculator, relationship anniversary, age calculator, date difference"
        dateModified="2026-05-25"
        faqSchema={[
          { question: "How do I calculate how long we've been together?", answer: "Just enter the date you started your relationship and the calculator will show you the exact years, months, and days together, plus days until your next anniversary." },
          { question: "Can I calculate my age in days?", answer: "Yes! Use the Age Calculator tab. Enter your date of birth and you'll see your exact age in years, months, and days — plus the total number of days you've been alive and a countdown to your next birthday." },
          { question: "How do I find days until my anniversary?", answer: "Use the Anniversary tab. Enter your anniversary date and the calculator will tell you exactly how many days remain until your next anniversary, and which anniversary number it will be." },
          { question: "Can I calculate the difference between any two dates?", answer: "Absolutely! The Date Difference tab lets you enter any two dates and calculates the exact gap in years, months, days, and total days between them." },
          { question: "Is the date calculator free?", answer: "Yes, completely free! All four calculators — Time Together, Age, Anniversary, and Date Difference — are available with no sign-up required." },
        ]}
      />
      <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
        <FloatingHearts />
        <Header />
        <main className="flex-1 relative z-10">

          {/* Hero */}
          <section className="py-8 md:py-16 px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
                <CalendarDays className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Love Date Tools</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Date & Time <span className="text-gradient">Calculator</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Calculate your time together, age, anniversary countdown, and more 💕
              </p>
            </div>
          </section>

          {/* Tool */}
          <section className="pb-12 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
                {tabs.map(t => (
                  <button key={t.id} onClick={() => setTab(t.id)}
                    className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl font-semibold text-xs transition-all duration-200"
                    style={{
                      background: tab === t.id ? t.color : "rgba(255,255,255,0.6)",
                      color: tab === t.id ? "#fff" : "#6b7280",
                      boxShadow: tab === t.id ? `0 4px 14px ${t.color}55` : "none",
                      border: `1.5px solid ${tab === t.id ? t.color : "#f0f0f0"}`,
                    }}>
                    <t.icon size={16} />
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="card-romantic rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
                {tab === "together" && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">📅 When did your relationship start?</label>
                      <input type="date" value={startDate} max={todayStr}
                        onChange={e => setStartDate(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary bg-background/50 text-foreground text-base outline-none" />
                    </div>
                    {togetherResult && (
                      <div className="space-y-4 animate-fade-in-up">
                        <div className="flex gap-3">
                          {statBox("Years", togetherResult.years, "together", "#f43f5e")}
                          {statBox("Months", togetherResult.months, "remaining", "#8b5cf6")}
                          {statBox("Days", togetherResult.days, "remaining", "#f59e0b")}
                        </div>
                        <div className="rounded-2xl p-4 text-center" style={{ background: "linear-gradient(135deg,#fce7f3,#fff1f2)", border: "1px solid #fecdd3" }}>
                          <p className="text-2xl font-bold text-rose-600">{togetherResult.totalDays.toLocaleString()}</p>
                          <p className="text-sm text-rose-500 font-medium">Total Days Together ❤️</p>
                        </div>
                        <div className="rounded-xl p-3 text-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                          <p className="text-sm text-emerald-700 font-semibold">🎉 Your {togetherResult.anniversary} anniversary is in <strong>{togetherResult.daysToAnniv} days</strong></p>
                        </div>
                      </div>
                    )}
                    {!togetherResult && startDate && <p className="text-sm text-rose-400 text-center">Please enter a valid past date.</p>}
                  </div>
                )}

                {tab === "age" && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">🎂 Your date of birth</label>
                      <input type="date" value={birthDate} max={todayStr}
                        onChange={e => setBirthDate(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary bg-background/50 text-foreground text-base outline-none" />
                    </div>
                    {ageResult && (
                      <div className="space-y-4 animate-fade-in-up">
                        <div className="flex gap-3">
                          {statBox("Years Old", ageResult.years, "age", "#8b5cf6")}
                          {statBox("Months", ageResult.months, "extra", "#f43f5e")}
                          {statBox("Days", ageResult.days, "extra", "#f59e0b")}
                        </div>
                        <div className="rounded-2xl p-4 text-center" style={{ background: "linear-gradient(135deg,#f5f3ff,#ede9fe)", border: "1px solid #c4b5fd" }}>
                          <p className="text-2xl font-bold text-violet-600">{ageResult.totalDays.toLocaleString()}</p>
                          <p className="text-sm text-violet-500 font-medium">Days you've been alive 🌟</p>
                        </div>
                        <div className="rounded-xl p-3 text-center" style={{ background: "#fff7ed", border: "1px solid #fed7aa" }}>
                          <p className="text-sm text-orange-700 font-semibold">🎂 Your next birthday is in <strong>{ageResult.daysToBday} days</strong></p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {tab === "anniversary" && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">💍 Your anniversary date</label>
                      <input type="date" value={anniversaryDate}
                        onChange={e => setAnniversaryDate(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary bg-background/50 text-foreground text-base outline-none" />
                    </div>
                    {anniversaryResult && (
                      <div className="space-y-4 animate-fade-in-up">
                        <div className="rounded-2xl p-5 text-center" style={{ background: "linear-gradient(135deg,#fef9c3,#fefce8)", border: "1px solid #fde047" }}>
                          <p className="text-4xl font-bold text-amber-600">{anniversaryResult.daysTo}</p>
                          <p className="text-sm font-semibold text-amber-700 mt-1">Days until your {anniversaryResult.ordinalYear} Anniversary 🎊</p>
                        </div>
                        {anniversaryResult.isPast && (
                          <div className="rounded-xl p-3 text-center" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
                            <p className="text-sm text-emerald-700 font-semibold">✨ {anniversaryResult.daysSince.toLocaleString()} days since your anniversary</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {tab === "difference" && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">📅 From date</label>
                        <input type="date" value={dateA} onChange={e => setDateA(e.target.value)}
                          className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary bg-background/50 text-foreground text-base outline-none" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">📅 To date</label>
                        <input type="date" value={dateB} onChange={e => setDateB(e.target.value)}
                          className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary bg-background/50 text-foreground text-base outline-none" />
                      </div>
                    </div>
                    {diffResult && (
                      <div className="space-y-4 animate-fade-in-up">
                        <div className="flex gap-3">
                          {statBox("Years", diffResult.years, "difference", "#10b981")}
                          {statBox("Months", diffResult.months, "remaining", "#f43f5e")}
                          {statBox("Days", diffResult.days, "remaining", "#8b5cf6")}
                        </div>
                        <div className="rounded-2xl p-4 text-center" style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", border: "1px solid #bbf7d0" }}>
                          <p className="text-2xl font-bold text-emerald-600">{diffResult.totalDays.toLocaleString()}</p>
                          <p className="text-sm text-emerald-500 font-medium">Total days between dates</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="card-romantic rounded-2xl p-6 md:p-10 space-y-8">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    What Is the Date & Time Calculator? 📅
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The <strong>Date & Time Calculator</strong> is a free tool designed for couples and individuals who want to track the meaningful numbers in their love story. Whether you want to know exactly how many days you've been together, how long until your next anniversary, or simply the difference between two important dates — this calculator gives you precise, instant answers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Relationships are built on moments, and moments have dates attached to them. Our calculator turns those dates into something meaningful — a number that represents real time you've shared, real milestones you've reached, and real memories you've created together. It's one thing to say "we've been together for two years" — it's another to know it's been <strong>730 days of love</strong>.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    How to Use Each Calculator Mode 💡
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Time Together:</strong> Enter the date your relationship began and instantly see your years, months, and days as a couple — plus a countdown to your next anniversary. <strong>Age Calculator:</strong> Enter your date of birth to see your exact age broken down by years, months, and days, along with the total number of days you've been on this earth and how many days until your next birthday.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    <strong>Anniversary Countdown:</strong> Enter any anniversary date — wedding, first date, engagement — and see exactly how many days remain until the next celebration and which year it marks. <strong>Date Difference:</strong> Enter any two dates and calculate the precise gap between them in years, months, days, and total days. Perfect for planning events or reflecting on time passed.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Why Track Your Love Milestones? 💑
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Relationship researchers have found that couples who celebrate milestones — big and small — report higher levels of relationship satisfaction and emotional connection. Knowing that you've shared <strong>500 days together</strong>, or that your anniversary is only <strong>12 days away</strong>, adds a layer of intentionality to your relationship. It's a reminder to cherish the time you have.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Many couples use our calculator to plan surprise celebrations — "100 days together" parties, "1000 days of love" photo albums, or anniversary date nights. These micro-celebrations strengthen bonds and create shared memories. Even just sharing the number with your partner — "Did you know we've been together for exactly 365 days today?" — can turn an ordinary Tuesday into something magical.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Anniversary Traditions by Year 🎊
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Each anniversary year carries a traditional gift theme. The <strong>1st anniversary</strong> is traditionally paper — symbolizing a blank page on which your story continues. The <strong>5th</strong> is wood, representing strength and growth. The <strong>10th</strong> is tin or aluminum — durable and flexible, like a long-lasting relationship. The romantic <strong>25th</strong> is silver, and the legendary <strong>50th</strong> is gold.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Use our anniversary countdown to plan your celebration well in advance! Once you know the date and the milestone, you can find the perfect traditional or modern gift, book a meaningful trip, or plan a surprise that honors your unique love story. After checking your anniversary, explore our <Link to="/relationship-timeline" className="text-primary hover:underline">Relationship Timeline</Link> to document all your special moments, or write a heartfelt <Link to="/love-letter-generator" className="text-primary hover:underline">Love Letter</Link> to accompany your gift.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 px-4 bg-secondary/30">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">How do I calculate how long we've been together?</h3>
                  <p className="text-muted-foreground text-sm">Use the "Time Together" tab. Enter the date your relationship started and the calculator will show you the exact years, months, and days together — plus a countdown to your next anniversary.</p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Can I calculate my age in days?</h3>
                  <p className="text-muted-foreground text-sm">Yes! Use the "Age Calculator" tab. Enter your date of birth and you'll see your exact age in years, months, and days — plus the total number of days you've been alive and a countdown to your next birthday.</p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">How do I find days until my anniversary?</h3>
                  <p className="text-muted-foreground text-sm">Use the "Anniversary" tab. Enter your anniversary date and the calculator will tell you exactly how many days remain until your next anniversary and which year it marks.</p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Can I calculate the difference between any two dates?</h3>
                  <p className="text-muted-foreground text-sm">Absolutely! The "Date Difference" tab lets you enter any two dates and calculates the exact gap in years, months, days, and total days between them.</p>
                </div>
                <div className="card-romantic rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Is the date calculator free?</h3>
                  <p className="text-muted-foreground text-sm">Yes, completely free! All four calculators — Time Together, Age, Anniversary, and Date Difference — are available with no sign-up required.</p>
                </div>
              </div>
            </div>
          </section>

          <BlogPreview />
          <InternalLinks currentPage="/date-calculator" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DateCalculatorPage;
