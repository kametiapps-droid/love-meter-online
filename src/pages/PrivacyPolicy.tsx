import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import { Button } from "@/components/ui/button";
import { Heart, Shield, ArrowRight } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero CTA Section */}
          <div className="card-romantic rounded-2xl p-6 md:p-8 mb-8 text-center bg-gradient-to-br from-primary/10 to-secondary/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Your Privacy Matters</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're committed to protecting your privacy. Read our policy to understand how we handle your data.
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

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
                <p>
                  Welcome to Love Calculator ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website lovecalculator.space.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
                <h3 className="text-lg font-medium text-foreground mb-2">2.1 Information You Provide</h3>
                <p>
                  When you use our love calculator, zodiac compatibility, or other features, you may provide names, birth dates, or other information. This information is processed locally in your browser and is not stored on our servers.
                </p>
                
                <h3 className="text-lg font-medium text-foreground mb-2 mt-4">2.2 Automatically Collected Information</h3>
                <p>
                  We may automatically collect certain information when you visit our website, including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. These include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (Google Analytics)</li>
                  <li><strong>Advertising Cookies:</strong> Used by Google AdSense to display personalized advertisements</li>
                </ul>
                <p className="mt-3">
                  You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Google AdSense</h2>
                <p>
                  We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
                </p>
                <p className="mt-3">
                  You may opt out of personalized advertising by visiting{" "}
                  <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Ads Settings
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Google Analytics</h2>
                <p>
                  We use Google Analytics to analyze website traffic and usage patterns. Google Analytics collects information anonymously and reports website trends without identifying individual visitors. You can opt out of Google Analytics by installing the{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide and maintain our website and services</li>
                  <li>Improve user experience and website functionality</li>
                  <li>Analyze usage patterns and trends</li>
                  <li>Display relevant advertisements</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Children's Privacy</h2>
                <p>
                  Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Your Rights</h2>
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure of your data</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong> privacy@lovecalculator.space<br />
                  <strong>Website:</strong> lovecalculator.space
                </p>
              </section>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Ready to find your true love compatibility?</p>
            <Link to="/">
              <Button className="btn-romantic" size="lg">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Calculate Your Love Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
