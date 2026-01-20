import { Heart, Sparkles, Users, Smile } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "True Love Test",
      description: "Our unique algorithm analyzes name compatibility to reveal your love potential."
    },
    {
      icon: Sparkles,
      title: "Instant Results",
      description: "Get your compatibility score in seconds with beautiful animated results."
    },
    {
      icon: Users,
      title: "Share the Love",
      description: "Easily share your results with friends and your special someone."
    },
    {
      icon: Smile,
      title: "Fun & Free",
      description: "100% free to use and designed to bring joy and smiles to everyone."
    }
  ];

  return (
    <section id="about" className="w-full py-12 md:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Use Our Love Calculator?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the magic of love compatibility with our fun and entertaining calculator.
            Perfect for couples, friends, and anyone curious about love!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-romantic rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
