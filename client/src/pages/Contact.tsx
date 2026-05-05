import Layout from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const contactHeroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425723798/PkcYgtviR6pkuFobXP578T/ttm-contact-trust-professional-apvs7s5Y727KcBx4EnxmyH.webp";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fallbackEmail, setFallbackEmail] = useState<{ href: string; body: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    const body = [
      "Hi Tech Tradie Media,",
      "",
      "I'd like to send an enquiry.",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || "Not supplied"}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");
    const href = `mailto:techtradiemedia@gmail.com?subject=${encodeURIComponent(formData.subject || "Website enquiry")}&body=${encodeURIComponent(body)}`;

    setFallbackEmail({ href, body });
    window.location.assign(href);
    toast.success("Your email app should open with the message ready to send.");
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageMeta
        title="Contact — Tech Tradie Media"
        description="Get in touch with Tech Tradie Media. Start with a free digital audit or ask about founding partner pricing for UK trades."
      />

      {/* ── FOUNDER TRUST STRIP ── */}
      <a
        href="/services#founder-pricing"
        className="block w-full py-2.5 px-4 text-center hover:opacity-90 transition-opacity"
        style={{ background: "#1B3A6B" }}
      >
        <p className="text-sm font-bold tracking-wide" style={{ color: "#F47920" }}>
          Phase 1 Services Now Live —{" "}
          <span className="text-white">Founding Client Pricing Available · Limited 5 Slots</span>
        </p>
      </a>

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactHeroImage}
            alt="Professional workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get More Work — Start Here</h1>
          <p className="text-xl text-white/90">
            Choose your path: start with a free audit or get your first 10 posts ready.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">Reach Out Directly</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <Phone size={24} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Phone</h3>
                    <a href="tel:+447432754561" className="text-accent hover:text-orange-600 transition font-semibold">
                      07432 754561
                    </a>
                    <p className="text-foreground/70 text-sm mt-1">Mon-Fri, 9 AM - 5 PM UK time</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <Mail size={24} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Email</h3>
                    <a href="mailto:techtradiemedia@gmail.com" className="text-accent hover:text-orange-600 transition font-semibold">
                      techtradiemedia@gmail.com
                    </a>
                    <p className="text-foreground/70 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <MapPin size={24} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Location</h3>
                    <p className="text-foreground/70 font-semibold">Greater Glasgow · Central Scotland · UK-wide remote</p>
                    <p className="text-foreground/70 text-sm mt-1">Serving UK trades nationwide</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                      <Clock size={24} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-1">Business Hours</h3>
                    <p className="text-foreground/70 font-semibold">Monday - Friday</p>
                    <p className="text-foreground/70 text-sm">9:00 AM - 5:00 PM UK time</p>
                  </div>
                </div>
              </div>

              {/* Decision Path */}
              <div className="mt-12 space-y-4">
                <a href="/services#founder-pricing" className="block">
                  <div className="p-6 rounded-lg border-2 cursor-pointer hover:opacity-95 transition-opacity"
                    style={{ background: "#1B3A6B", borderColor: "#F47920" }}>
                    {/* Roundel brand seal + live indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#22C55E" }} />
                        <p className="text-xs font-black uppercase tracking-widest" style={{ color: "#F47920" }}>
                          Phase 1 Services Now Live
                        </p>
                      </div>
                      <img
                        src="/brand/ttm-roundel-master.png"
                        alt="Tech Tradie Media"
                        className="h-12 w-auto flex-shrink-0"
                        style={{ objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))" }}
                      />
                    </div>
                    <p className="font-bold text-sm mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Founding Client Pricing Available · Limited 5 Slots
                    </p>
                    <p className="text-white/75 text-sm mb-4 leading-relaxed">
                      Start with a free digital audit and secure founding pricing before Phase 1 fills.
                    </p>
                    <div className="w-full py-2.5 rounded-lg font-black text-sm text-center text-white"
                      style={{ background: "#F47920" }}>
                      View Founding Partner Pricing →
                    </div>
                  </div>
                </a>
                <div className="p-6 bg-secondary rounded-lg border-2 border-accent">
                  <h3 className="font-bold text-lg text-primary mb-3">Option 2: Get Your First 10 Posts</h3>
                  <p className="text-foreground/70 mb-4">
                    Ready to start building your social media presence? Get your first 10 posts ready to go.
                  </p>
                  <Link href="/social-media">
                    <Button className="w-full bg-accent hover:bg-orange-600 text-white font-bold">
                      Get Your First 10 Posts
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-secondary p-8 rounded-lg border-2 border-accent">
                <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-foreground font-semibold mb-2 block">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-border"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-foreground font-semibold mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-border"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-semibold mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="07432 123456"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-border"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject" className="text-foreground font-semibold mb-2 block">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-border"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-foreground font-semibold mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your business and what you're looking for..."
                      value={formData.message}
                      onChange={handleChange}
                      className="border-border min-h-32 resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 text-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-foreground/60 text-center">
                    We respect your privacy. We'll only use your information to respond to your message.
                  </p>

                  {fallbackEmail && (
                    <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 text-sm text-gray-700">
                      <p className="font-bold text-primary mb-2">
                        If your email app did not open
                      </p>
                      <p className="mb-3">
                        Tap the backup link below, or send the details shown here to techtradiemedia@gmail.com.
                      </p>
                      <a
                        href={fallbackEmail.href}
                        className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-white font-bold bg-accent hover:bg-orange-600"
                      >
                        Open Email Again
                      </a>
                      <Textarea
                        readOnly
                        value={fallbackEmail.body}
                        className="mt-4 w-full min-h-40 rounded-lg border border-orange-200 bg-white p-3 text-xs text-gray-600"
                      />
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Quick Answers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What's the best way to reach you?",
                a: "For urgent matters, give us a call. For general inquiries, email works great. We respond to all messages within 24 hours.",
              },
              {
                q: "Do you work with trades outside Central Scotland?",
                a: "We're based in Greater Glasgow and work across Central Scotland in person. We also take on UK-wide remote clients — if you're based elsewhere in the UK, get in touch and we'll let you know if we can help.",
              },
              {
                q: "Can I book a call directly?",
                a: "Absolutely! Give us a call on the number above, or fill out the contact form and we'll schedule a time that works for you.",
              },
              {
                q: "What's your response time?",
                a: "We aim to respond to all inquiries within 24 business hours. During business hours, we often respond much faster.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg text-primary mb-3">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
