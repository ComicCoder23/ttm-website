import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Globe, MapPin, Star, TrendingUp, Zap, ArrowRight, Share2 } from "lucide-react";

export default function Services() {
  const servicesHeroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425723798/PkcYgtviR6pkuFobXP578T/ttm-services-trades-tools-V8Co8rkD88bBpnmnB25uRM.webp";
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroImage}
            alt="Professional trade tools"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services for UK Trades</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Practical solutions to get your phone ringing and your business growing. Serving plumbers, electricians, builders, roofers and all UK trades.
          </p>
        </div>
      </section>

      {/* Service 1: Website Builds */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Globe size={24} className="text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Professional Websites Built for UK Trades
                </h2>
              </div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Your website is your online shopfront. We build fast, professional websites designed specifically for UK trades businesses—plumbers, electricians, builders, roofers, carpenters, and more. They're easy to navigate, look great on any device, and are built to convert visitors into enquiries. No tech jargon, just a solid website that works for you.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Mobile-responsive design for all devices",
                  "Fast loading speeds for better user experience",
                  "Clear calls-to-action to capture enquiries",
                  "Before-and-after portfolio sections",
                  "Built-in contact forms and enquiry systems",
                  "SEO-optimised for local search visibility",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg border-2 border-accent/20">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Looks Great on Every Device</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                    <div className="w-24 h-16 bg-white border-2 border-primary rounded flex items-center justify-center text-xs font-bold">Desktop</div>
                    <div className="w-16 h-20 bg-white border-2 border-primary rounded flex items-center justify-center text-xs font-bold">Mobile</div>
                    <div className="w-20 h-16 bg-white border-2 border-primary rounded flex items-center justify-center text-xs font-bold">Tablet</div>
                  </div>
                  <p className="text-center text-foreground/70 text-sm">Responsive design that works perfectly on all screens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Google Business Optimization */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white p-8 rounded-lg border-2 border-accent order-2 md:order-1">
              <div className="text-center">
                <MapPin size={64} className="text-accent mx-auto mb-4" />
                <p className="text-foreground/70">Dominate local search results</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <MapPin size={24} className="text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Get Found First on Google Maps & Search Across the UK
                </h2>
              </div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                When customers search for a "plumber near me" or "electrician near me," your Google Business Profile is often the first thing they see. We optimize your profile to improve local visibility and ranking, making sure you stand out from the competition and get those crucial local calls.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Complete Google Business Profile optimization",
                  "Local keyword research and targeting",
                  "Photo and video uploads for maximum impact",
                  "Review management and response strategies",
                  "Service area and location optimization",
                  "Local citation building and consistency",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Review Systems */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Star size={24} className="text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Build Trust with More 5-Star Reviews
                </h2>
              </div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Positive customer reviews are gold for trades businesses. Our automated review systems help you generate more genuine feedback from happy customers, boosting your reputation and convincing new clients to choose you. It's simple, effective, and builds instant credibility.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Automated review request system",
                  "Multi-platform review collection",
                  "Review monitoring and alerts",
                  "Response templates for quick replies",
                  "Reputation tracking and analytics",
                  "Competitive review analysis",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded-lg border-2 border-accent">
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={32} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/70">Build your reputation with real reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Local SEO */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-white p-8 rounded-lg border-2 border-accent order-2 md:order-1">
              <div className="text-center">
                <TrendingUp size={64} className="text-accent mx-auto mb-4" />
                <p className="text-foreground/70">Rank higher for local searches</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <TrendingUp size={24} className="text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Dominate Local Searches for Your Trade
                </h2>
              </div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                We make sure your business appears higher in local searches across the UK. This means when someone types "plumber near me," "electrician near me," "builder near me," or "roofers near me," your business is front and centre. Our local SEO strategies are tailored to your specific trade and service area, bringing you qualified leads directly.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Local keyword research and optimisation",
                  "On-page SEO improvements",
                  "Local link building strategies",
                  "Schema markup implementation",
                  "Local content creation",
                  "Monthly performance reporting",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Enquiry Funnel */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Zap size={24} className="text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Turn Website Visitors into Real Job Leads
                </h2>
              </div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                A great website isn't enough if it doesn't generate enquiries. We set up effective enquiry funnels that convert website visitors into real leads and quote requests. This includes clear calls to action, easy-to-use forms, and direct contact options, ensuring no potential job slips through the cracks.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed italic border-l-4 border-accent pl-4">
                Works alongside your social media to turn visibility into real enquiries.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Strategic CTA placement throughout site",
                  "Optimised contact forms",
                  "Click-to-call buttons for mobile",
                  "Lead capture automation",
                  "Email notification system",
                  "Lead follow-up workflows",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary p-8 rounded-lg border-2 border-accent">
              <div className="text-center">
                <Zap size={64} className="text-accent mx-auto mb-4" />
                <p className="text-foreground/70">Convert traffic into real business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 6: Social Media Content System */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Share2 size={24} className="text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                  Social Media That Brings You More Jobs
                </h2>
              </div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                We take the work you're already doing and turn it into consistent content that keeps your business visible and brings in more enquiries. No more worrying about what to post—we handle the content creation, captions, and strategy so you can focus on the work.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Turn your real jobs into structured posts",
                  "Captions written to attract enquiries",
                  "Keep your business active and visible",
                  "Help turn views into messages and quote requests",
                  "Optimised for Facebook, Instagram, and TikTok",
                  "Local keywords built into every post",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">✓</span>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/social-media">
                <Button className="bg-accent hover:bg-orange-600 text-white font-bold px-6 py-2" asChild>
                  Explore Social Media Packages
                </Button>
              </Link>
            </div>
            <div className="bg-secondary p-8 rounded-lg border-2 border-accent">
              <div className="text-center">
                <Share2 size={64} className="text-accent mx-auto mb-4" />
                <p className="text-foreground/70">Turn your work into consistent visibility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See Your Online Potential?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Let's take a look at your current digital presence and show you how we can help you get more jobs across the UK.
          </p>
          <div className="text-center">
            <Link href="/audit">
              <Button className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg mx-auto" asChild>
                <span className="flex items-center gap-2">
                  Get Your Free Digital Audit
                  <ArrowRight size={20} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}