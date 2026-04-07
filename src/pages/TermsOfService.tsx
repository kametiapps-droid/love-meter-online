import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Heart, FileText, ArrowRight } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Terms of Service - Love Calculator"
        description="Read the terms of service for using Love Calculator. Understand your rights and responsibilities when using our free love tools."
        path="/terms-of-service"
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero CTA Section */}
          <div className="card-romantic rounded-2xl p-6 md:p-8 mb-8 text-center bg-gradient-to-br from-primary/10 to-secondary/20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-4">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Our Terms</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Please read these terms carefully before using our love calculator and entertainment tools.
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
                <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Love Calculator (lovecalculator.space), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
                <p>
                  Love Calculator provides free online entertainment tools including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Love compatibility calculator</li>
                  <li>Zodiac compatibility checker</li>
                  <li>Love style quiz</li>
                  <li>Daily love horoscope</li>
                  <li>Love fortune ball</li>
                  <li>Couple name generator</li>
                  <li>Kids name generator</li>
                  <li>Love hearts catch game</li>
                </ul>
                <p className="mt-3">
                  All services are provided for entertainment purposes only and should not be used as a basis for real-life decisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Entertainment Disclaimer</h2>
                <p>
                  All results, predictions, and content provided by our tools are for entertainment purposes only. We make no claims about the accuracy or reliability of any results. Love, relationships, and compatibility cannot be accurately measured by any algorithm or tool.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. User Conduct</h2>
                <p>When using our website, you agree to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Use the services only for lawful purposes</li>
                  <li>Not attempt to disrupt or interfere with the website's functionality</li>
                  <li>Not use automated systems to access the website without permission</li>
                  <li>Not collect or harvest user information</li>
                  <li>Respect the intellectual property rights of others</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, icons, images, and software, is the property of Love Calculator or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Third-Party Advertisements</h2>
                <p>
                  Our website displays advertisements provided by third-party advertising networks. These advertisements may use cookies and tracking technologies. We are not responsible for the content or practices of these advertisers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or assume any responsibility for the content, privacy policies, or practices of any third-party websites.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Disclaimer of Warranties</h2>
                <p>
                  THE WEBSITE AND ALL CONTENT ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="mt-3">
                  We do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The website will be available at all times</li>
                  <li>The website will be error-free or secure</li>
                  <li>Any results or information provided will be accurate or reliable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Limitation of Liability</h2>
                <p>
                  IN NO EVENT SHALL LOVE CALCULATOR, ITS OWNERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE WEBSITE.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Love Calculator and its affiliates, officers, agents, and employees from any claim, demand, or damages, including reasonable attorneys' fees, arising out of your use of the website or violation of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">11. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after any changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">12. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which Love Calculator operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-3">13. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-2">
                  <strong>Email:</strong> terms@lovecalculator.space<br />
                  <strong>Website:</strong> lovecalculator.space
                </p>
              </section>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Ready to discover your love compatibility?</p>
            <Link to="/">
              <Button className="btn-romantic" size="lg">
                <Heart className="w-5 h-5 mr-2 fill-current" />
                Start Your Love Journey
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
