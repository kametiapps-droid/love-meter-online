import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, User, Send, Heart } from "lucide-react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      
      const templateParams = {
        from_name: validatedData.name,
        from_email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
      };

      await emailjs.send(
        "service_g8fbeje",
        "template_5uca9dh",
        templateParams,
        "gmq5lCwIfK_nLsvnw"
      );
      
      toast({
        title: "Message Sent Successfully! 💕",
        description: "We'll get back to you within 24-48 hours.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactForm] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Please check your input",
          description: "Some fields have errors.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col romantic-gradient-bg relative overflow-hidden">
      <SEO
        title="Contact Us - Love Calculator"
        description="Get in touch with the Love Calculator team. Send us your feedback, questions, or suggestions. We'd love to hear from you!"
        path="/contact"
      />
      <FloatingHearts />
      <Header />
      
      <main className="flex-1 relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm mb-6">
              <Heart className="w-4 h-4 text-heart-red fill-heart-red animate-pulse-heart" />
              <span className="text-sm font-medium text-foreground">Get in Touch</span>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions, feedback, or suggestions? We'd love to hear from you! 💕
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="card-romantic rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-primary" />
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject" className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? "border-destructive" : ""}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full btn-romantic"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card-romantic rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:contact@lovecalculator.space" className="text-muted-foreground hover:text-primary transition-colors">
                        contact@lovecalculator.space
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-romantic rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Frequently Asked
                </h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Response Time</p>
                    <p>We typically respond within 24-48 hours.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Advertising Inquiries</p>
                    <p>For advertising opportunities, please include "Advertising" in your subject line.</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Feedback Welcome</p>
                    <p>We love hearing your suggestions for new features and improvements!</p>
                  </div>
                </div>
              </div>

              <div className="card-romantic rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-secondary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-heart-red fill-heart-red" />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    Spread the Love!
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Enjoying Love Calculator? Share it with your friends and help spread the love! 💕
                </p>
                <Link to="/">
                  <Button className="btn-romantic w-full">
                    <Heart className="w-4 h-4 mr-2 fill-current" />
                    Try Love Calculator
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">While you wait for our response, try our fun tools!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/#calculator">
                <Button className="btn-romantic" size="lg">
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  Love Calculator
                </Button>
              </Link>
              <Link to="/#zodiac">
                <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                  Zodiac Compatibility
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

export default Contact;
