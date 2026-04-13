import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425723798/PkcYgtviR6pkuFobXP578T/ttm-home-hero-construction-6zKgpwfNVGMku7ibEewGKo.webp";
  const tradesImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425723798/PkcYgtviR6pkuFobXP578T/ttm-about-tradie-working-PaNNPFSzLutJVRHcEpy66f.webp";
  const servicesImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425723798/PkcYgtviR6pkuFobXP578T/ttm-services-trades-tools-V8Co8rkD88bBpnmnB25uRM.webp";

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Tradesperson with phone showing website"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Get More Calls, Quotes & Jobs From Your Online Presence
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              We help trades turn their website, Google profile, and real completed jobs into a steady flow of enquiries.
            </p>
            <Link href="/audit">
              <Button className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg" asChild>
                <span className="flex items-center gap-2">
                  Get Your Free Digital Audit
                  <ArrowRight size={20} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Tired of Missing Out on Jobs?
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              You're great at your trade, but if customers can't find you online, you're losing work to competitors. Many UK trades businesses—plumbers, electricians, builders, roofers, and more—struggle with no website, an outdated one, poor Google rankings, no social media presence, or not enough reviews. This means fewer calls, fewer enquiries, and less consistent work.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              We know your time is valuable, and dealing with online marketing can feel like another job you don't have time for.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🌐", title: "No Website", desc: "Customers can't find you online when searching for plumbers, electricians, builders, etc." },
              { icon: "📱", title: "Poor Website", desc: "Doesn't work on mobile or convert enquiries" },
              { icon: "⭐", title: "No Reviews", desc: "Low trust and credibility" },
              { icon: "🔍", title: "Hard to Find", desc: "Not ranking on Google for local UK searches" },
            ].map((problem, idx) => (
              <div key={idx} className="bg-secondary p-6 rounded-lg border border-border">
                <div className="text-4xl mb-3">{problem.icon}</div>
                <h3 className="font-bold text-lg text-primary mb-2">{problem.title}</h3>
                <p className="text-foreground/70">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                More Enquiries. More Work. More Consistent Income.
              </h2>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Tech Tradie Media takes the hassle out of online marketing. We help trades get more enquiries and more work by building practical, effective digital tools that connect you directly with customers looking for your services across the UK.
              </p>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                From getting your business visible on Google to turning website visitors into solid enquiries, we handle the tech so you can focus on your trade.
              </p>
              <div className="space-y-3">
                {[
                  "More direct calls and enquiries from qualified customers",
                  "Higher visibility on Google Maps and Search across the UK",
                  "Automated enquiry capture system",
                  "Professional online presence that builds trust",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent flex-shrink-0 mt-1" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={tradesImage}
                alt="Tradespeople working"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Simple Solutions for Real Results
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We offer a range of services designed specifically for trades. Each one is built to boost your online presence and bring in more work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              { title: "Trade Website Builds", desc: "Fast, professional websites that work hard for your business." },
              { title: "Google Business Optimisation", desc: "Get seen first when customers search for local services." },
              { title: "Review Systems", desc: "Build trust and a strong reputation with automated customer reviews." },
              { title: "Local SEO", desc: "Rank higher for searches like 'plumber near me' or 'electrician near me.'" },
              { title: "Enquiry Funnel Setup", desc: "Turn website visits into actual job leads and quote requests." },
            ].map((service, idx) => (
              <div key={idx} className="bg-secondary p-6 rounded-lg border border-border hover:border-accent transition">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-lg text-primary mb-3">{service.title}</h3>
                <p className="text-foreground/70 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-2" asChild>
                <span className="flex items-center gap-2">
                  Learn More About Our Services
                  <ArrowRight size={18} />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Illustration */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <img
            src={servicesImage}
            alt="Digital services for trades"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              More Calls. More Quotes. More Consistent Work.
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our clients see real results. By improving your online presence, you'll get more direct calls, more requests for quotes, and a steady stream of new jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, stat: "3x", label: "More Leads on Average" },
              { icon: Users, stat: "50+", label: "Trades Businesses Served" },
              { icon: Star, stat: "4.9/5", label: "Average Client Rating" },
            ].map((result, idx) => {
              const Icon = result.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon size={32} className="text-accent" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{result.stat}</div>
                  <p className="text-lg text-foreground/70">{result.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Within 3 months of launching our new website, we got 40% more calls. This has been a game-changer for our plumbing business.",
                author: "Client Testimonial",
                role: "Plumbing Business",
              },
              {
                quote: "The Google Business optimisation service alone has put us at the top of local search results. We're getting jobs we never would have found before.",
                author: "Client Testimonial",
                role: "Electrical Services",
              },
              {
                quote: "Tech Tradie Media understood our business immediately. No corporate jargon, just practical solutions that work. Highly recommend.",
                author: "Client Testimonial",
                role: "Landscaping Services",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 p-8 rounded-lg border border-white/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Offer Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Start With 10 Posts
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              A simple way to turn your existing work into consistent content that brings in enquiries. Perfect for trades who want to start building their social media presence without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/social-media">
                <Button className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg" asChild>
                  <span className="flex items-center gap-2">
                    Get Your First 10 Posts Ready
                    <ArrowRight size={20} />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Get More Work?
          </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              Start with a free digital audit. We'll show you exactly what's holding your business back online and how we can help you get more enquiries and more work.
            </p>
          <Link href="/audit">
            <Button className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg" asChild>
              Get Your Free Digital Audit
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
