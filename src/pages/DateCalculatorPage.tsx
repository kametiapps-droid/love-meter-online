import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { CalendarDays, Heart, Clock, Gift, Diff } from "lucide-react";
import { toast } from "sonner";

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
        faqSchema={[{ question: "How do I calculate how long we've been together?", answer: "Just enter the date you started your relationship and the calculator will show you the exact years, months, days together, plus days until your next anniversary." }]}
      />
      <div className="min-h-screen flex flex-col romantic-gradient-bg">
        <Header />
        <main className="flex-1 py-12 px-4">
          <div className="max-w-2xl mx-auto">

            {/* Hero */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <CalendarDays className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Date & Time Calculator
              </h1>
              <p className="text-muted-foreground text-base max-w-md mx-auto">
                Calculate your time together, age, anniversary countdown, and more 💕
              </p>
            </div>

            {/* Tab switcher */}
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

            {/* Cards */}
            <div className="card-romantic rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">

              {/* Time Together */}
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

              {/* Age Calculator */}
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

              {/* Anniversary */}
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

              {/* Date Difference */}
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
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DateCalculatorPage;
