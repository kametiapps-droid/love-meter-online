import { useState } from "react";
import { Heart, Plus, Trash2, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  emoji: string;
}

const emojiOptions = ["💕", "💍", "🥰", "✈️", "🏠", "👶", "🎉", "💐", "🌹", "💋", "🎂", "📸", "🐾", "🌅", "🎄"];

const defaultEvents: TimelineEvent[] = [
  { id: "1", date: "", title: "First Met", description: "", emoji: "💕" },
  { id: "2", date: "", title: "First Date", description: "", emoji: "🌹" },
  { id: "3", date: "", title: "First Kiss", description: "", emoji: "💋" },
];

const RelationshipTimeline = () => {
  const [partnerA, setPartnerA] = useState("");
  const [partnerB, setPartnerB] = useState("");
  const [events, setEvents] = useState<TimelineEvent[]>(defaultEvents);
  const [showTimeline, setShowTimeline] = useState(false);
  const { toast } = useToast();

  const addEvent = () => {
    setEvents([...events, {
      id: Date.now().toString(),
      date: "",
      title: "",
      description: "",
      emoji: emojiOptions[Math.floor(Math.random() * emojiOptions.length)],
    }]);
  };

  const removeEvent = (id: string) => {
    if (events.length <= 1) return;
    setEvents(events.filter(e => e.id !== id));
  };

  const updateEvent = (id: string, field: keyof TimelineEvent, value: string) => {
    setEvents(events.map(e => e.id === id ? { ...e, [field]: value } : e));
  };

  const generateTimeline = () => {
    if (!partnerA.trim() || !partnerB.trim()) {
      toast({ title: "Enter both names!", description: "We need both names to create your timeline.", variant: "destructive" });
      return;
    }
    const filledEvents = events.filter(e => e.date && e.title);
    if (filledEvents.length < 1) {
      toast({ title: "Add at least one event!", description: "Fill in a date and title for at least one milestone.", variant: "destructive" });
      return;
    }
    setShowTimeline(true);
  };

  const sortedEvents = [...events]
    .filter(e => e.date && e.title)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const daysBetween = (d1: string, d2: string) => {
    return Math.abs(Math.floor((new Date(d2).getTime() - new Date(d1).getTime()) / (1000 * 60 * 60 * 24)));
  };

  const totalDays = sortedEvents.length >= 2
    ? daysBetween(sortedEvents[0].date, sortedEvents[sortedEvents.length - 1].date)
    : 0;

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  };

  return (
    <section id="timeline" className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Relationship Timeline</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Your <span className="text-gradient">Love Story</span> Timeline 📅
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Document your special moments and create a beautiful visual timeline of your relationship journey!
          </p>
        </div>

        <div className="card-romantic rounded-2xl p-6 md:p-8">
          {!showTimeline ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Partner 1</label>
                  <Input value={partnerA} onChange={(e) => setPartnerA(e.target.value)} placeholder="Your name..." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Partner 2</label>
                  <Input value={partnerB} onChange={(e) => setPartnerB(e.target.value)} placeholder="Their name..." />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-3">Your Milestones</label>
                <div className="space-y-3">
                  {events.map((event) => (
                    <div key={event.id} className="bg-background/60 rounded-xl p-4 border border-border">
                      <div className="flex items-center gap-2 mb-3">
                        <select
                          value={event.emoji}
                          onChange={(e) => updateEvent(event.id, "emoji", e.target.value)}
                          className="text-xl bg-transparent border-none cursor-pointer"
                        >
                          {emojiOptions.map(e => <option key={e} value={e}>{e}</option>)}
                        </select>
                        <Input
                          value={event.title}
                          onChange={(e) => updateEvent(event.id, "title", e.target.value)}
                          placeholder="Milestone title..."
                          className="flex-1"
                        />
                        <button onClick={() => removeEvent(event.id)} className="text-muted-foreground hover:text-destructive transition-colors p-1">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <Input
                          type="date"
                          value={event.date}
                          onChange={(e) => updateEvent(event.id, "date", e.target.value)}
                        />
                        <Input
                          value={event.description}
                          onChange={(e) => updateEvent(event.id, "description", e.target.value)}
                          placeholder="Optional description..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" onClick={addEvent} className="w-full mt-3">
                  <Plus className="w-4 h-4 mr-2" /> Add Another Milestone
                </Button>
              </div>

              <Button onClick={generateTimeline} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-xl">
                <Sparkles className="w-5 h-5 mr-2" /> Create Our Timeline ✨
              </Button>
            </div>
          ) : (
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {partnerA} <Heart className="w-6 h-6 inline text-primary fill-primary mx-1" /> {partnerB}
                </h3>
                {totalDays > 0 && (
                  <p className="text-muted-foreground mt-2">
                    {totalDays.toLocaleString()} days of love and counting! 💕
                  </p>
                )}
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

                <div className="space-y-8">
                  {sortedEvents.map((event, index) => (
                    <div key={event.id} className="relative pl-16 animate-in fade-in-0 slide-in-from-left-4" style={{ animationDelay: `${index * 150}ms` }}>
                      {/* Timeline dot */}
                      <div className="absolute left-3 w-7 h-7 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-sm">
                        {event.emoji}
                      </div>

                      <div className="bg-background/80 rounded-xl p-4 border border-border hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(event.date)}
                          {index > 0 && (
                            <span className="text-primary/70">
                              • {daysBetween(sortedEvents[index - 1].date, event.date)} days later
                            </span>
                          )}
                        </div>
                        <h4 className="font-semibold text-foreground">{event.emoji} {event.title}</h4>
                        {event.description && (
                          <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" onClick={() => setShowTimeline(false)} className="mr-3">
                  ✏️ Edit Timeline
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RelationshipTimeline;
