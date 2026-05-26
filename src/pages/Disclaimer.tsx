import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Heart, AlertCircle, ArrowRight, Sparkles } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Disclaimer - Love Calculator"
        description="Read our disclaimer about Love Calculator tools. All love tests and compatibility results are for entertainment purposes only."
        path="/disclaimer"
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero CTA Section */}
          <div className="card-romantic rounded-2xl p-6 md:p-8 mb-8 text-center bg-gradient-to-br from-primary/10 to-secondary/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">For Entertainment Only</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Disclaimer
            </h1>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our love calculator and all tools are designed purely for fun and entertainment. Have a great time exploring! 💕
            </p>
            <Link to="/#calculator">
              <Button className="btn-romantic">
                <Heart className="w-4 h-4 mr-2 fill-current" />
                Try Love Calculator
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="card-romantic rounded-2xl p-8 md:p-12">
            <div className="prose prose-pink max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">
                Last updated: January 27, 2026
              </p>

              {/* Important Notice Box */}
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 flex gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Important Notice</p>
                  <p className="text-sm">All tools on this website are for entertainment purposes only. Results should not be used for real-life relationship decisions.</p>
                </div>
              </div>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Entertainment Purpose Only</h2>
                <p>
                  Love Calculator (lovecalculator.space) is an entertainment website. All tools, calculators, quizzes, games, and content provided on this website are intended solely for entertainment and amusement purposes.
                </p>
                <p className="mt-3 font-medium text-foreground">
                  NOTHING ON THIS WEBSITE SHOULD BE TAKEN SERIOUSLY OR USED AS A BASIS FOR MAKING REAL-LIFE DECISIONS ABOUT RELATIONSHIPS, MARRIAGE, OR ANY OTHER IMPORTANT MATTERS.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">No Scientific Basis</h2>
                <p>
                  The love calculator, zodiac compatibility, horoscopes, and other features on this website are NOT based on any scientific research or validated methodologies. The results are generated using algorithms designed for fun and should not be interpreted as factual predictions or advice.
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>Love compatibility percentages are randomly generated based on name inputs</li>
                  <li>Zodiac compatibility is based on traditional astrology beliefs, not science</li>
                  <li>Horoscopes and fortune readings are generic entertainment content</li>
                  <li>Quiz results are for fun self-reflection only</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Relationship Advice</h2>
                <p>
                  We do NOT provide relationship advice. If you are experiencing relationship difficulties or need guidance about love and relationships, please consult:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>Licensed relationship counselors</li>
                  <li>Certified therapists or psychologists</li>
                  <li>Marriage and family therapists</li>
                  <li>Other qualified professionals</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Astrology Disclaimer</h2>
                <p>
                  Our zodiac compatibility and horoscope features are based on traditional astrological beliefs. Astrology is not a science and has no proven ability to predict future events or determine personality traits. These features are provided purely for entertainment value.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Name Generators</h2>
                <p>
                  The couple name generator and kids name generator are creative tools for fun. The suggested names are automatically generated and:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>Should not be used as the sole basis for naming decisions</li>
                  <li>May not be appropriate or suitable in all cultures or contexts</li>
                  <li>Are randomly generated without consideration of personal circumstances</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">User Responsibility</h2>
                <p>
                  By using this website, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-3">
                  <li>All content is for entertainment only</li>
                  <li>You will not make important life decisions based on results from this website</li>
                  <li>You are responsible for your own decisions and actions</li>
                  <li>You use this website at your own risk</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Accuracy of Information</h2>
                <p>
                  While we strive to provide accurate and up-to-date information, we make no representations or warranties about the completeness, accuracy, reliability, or suitability of the information and content on this website. Any reliance you place on such information is strictly at your own risk.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">External Links</h2>
                <p>
                  This website may contain links to external websites. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
                <p>
                  In no event shall Love Calculator be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, arising from the use of this website or reliance on any information provided.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Disclaimer</h2>
                <p>
                  We may update this Disclaimer from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p>
                  If you have any questions about this Disclaimer, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong> iftechstudio@gmail.com<br />
                  <strong>Website:</strong> lovecalculator.space
                </p>
              </section>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Now that you understand it's for fun, why not try it?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/">
                <Button className="btn-romantic" size="lg">
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  Calculate Your Love
                </Button>
              </Link>
              <Link to="/#zodiac">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Check Zodiac Match
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;
