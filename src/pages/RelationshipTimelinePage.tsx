import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import RelationshipTimeline from "@/components/RelationshipTimeline";
import InternalLinks from "@/components/InternalLinks";

const RelationshipTimelinePage = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />
      <Header />
      <main className="flex-1 relative z-10">
        <RelationshipTimeline />
        <InternalLinks currentPage="/relationship-timeline" />
      </main>
      <Footer />
    </div>
  );
};

export default RelationshipTimelinePage;
