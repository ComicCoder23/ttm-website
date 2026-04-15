import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, Star, Globe, Search, TrendingUp, Zap } from "lucide-react";

const TTM_NAVY = "#1B3A6B";
const TTM_ORANGE = "#F47920";
const TTM_GREEN = "#22C55E";

export default function Home() {
  const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425723798/PkcYgtviR6pkuFobXP578T/ttm-home-hero-construction-6zKgpwfNVGMku7ibEewGKo.webp";

  return (
    <Layout>

      {/* ── FOUNDER TRUST STRIP ── */}
      <a
        href="/services#founder-pricing"
        className="block w-full py-2 px-4 text-center hover:opacity-90 transition-opacity"
        style={{ background: TTM_NAVY }}
      >
        <p className="text-sm font-bold tracking-wide" style={{ color: TTM_ORANGE }}>
          Phase 1 Services Now Live —{" "}
          <span className="text-white">Founding Client Pricing Available · Limited 5 Slots</span>
        </p>
      </a>

      {/* ── HERO ── */}
      <section className="relative min-h-[600px] md:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Tradesperson with phone showing website"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(27,58,107,0.78)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(244,121,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,121,32,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
        </div>

        <div className="container max-w-5xl mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-orange-400/30 bg-orange-500/10">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-orange-300 text-sm font-semibold tracking-wider uppercase">Founding Client Pricing Available</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            Get More Calls, Quotes & Jobs<br />
            <span style={{ color: TTM_ORANGE }}>From Your Online Presence</span>
          </h1>

          <p className="text-xl text-white/85 mb-10 max-w-2xl leading-relaxed">
            We help UK trades turn their website, Google profile, and completed jobs into a steady flow of enquiries. Practical digital tools — no jargon, no fluff.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/audit">
              <button
                className="px-8 py-4 rounded-lg font-black text-lg text-white flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ background: TTM_ORANGE }}
              >
                Get Your Free Digital Audit
                <ArrowRight size={20} />
              </button>
            </a>
            <a href="/services">
              <button
                className="px-8 py-4 rounded-lg font-bold text-lg text-white border-2 border-white/30 hover:border-white/60 transition-colors flex items-center gap-2"
              >
                See Phase 1 Services
                <ArrowRight size={18} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-6"
              style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              Tired of Missing Out on Jobs?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              You're great at your trade, but if customers can't find you online, you're losing work to competitors who just look better. Most UK trades businesses struggle with the same four things — and they're all fixable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🌐", title: "No Website", desc: "Customers can't find you when they search for plumbers, electricians, builders — they just call the next result." },
              { icon: "📱", title: "Poor Website", desc: "Doesn't work on mobile, loads slowly, or doesn't have a clear way to contact you." },
              { icon: "⭐", title: "Not Enough Reviews", desc: "Low review count means low trust. Customers pick the business with more visible credibility." },
              { icon: "🔍", title: "Hard to Find on Google", desc: "Not showing up in local searches or the Maps pack means invisible to ready-to-buy customers." },
            ].map((problem, idx) => (
              <div key={idx} className="p-6 rounded-xl border-2 border-gray-100 hover:border-orange-300 transition-colors">
                <div className="text-4xl mb-3">{problem.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: TTM_NAVY }}>{problem.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-16 md:py-24 text-white" style={{ background: TTM_NAVY }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              More Enquiries. More Work.<br />
              <span style={{ color: TTM_ORANGE }}>More Consistent Income.</span>
            </h2>
            <p className="text-white/75 max-w-2xl mx-auto text-lg">
              Tech Tradie Media handles the digital side so you can focus on your trade. Practical tools, honest advice, no corporate nonsense.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "More direct calls and enquiries from qualified customers",
              "Higher visibility on Google Maps and Search across the UK",
              "Professional online presence that builds immediate trust",
              "Automated systems that capture leads even when you're on a job",
              "Real content that shows off your completed work",
              "Honest, practical advice — no upselling, no lock-ins",
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: TTM_GREEN }} />
                <span className="text-white/85 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHASE 1 SERVICES ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border"
              style={{ borderColor: TTM_ORANGE, background: "#FFF7F0" }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: TTM_GREEN }} />
              <span className="text-sm font-bold" style={{ color: TTM_ORANGE }}>Phase 1 Services Now Live</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3"
              style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              Practical Solutions for UK Trades
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Five core services, built to get your phone ringing. More capabilities launching in Phase 2.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {[
              { icon: Globe, title: "Trade Website Builds", desc: "Fast, professional sites built to convert visitors into enquiries." },
              { icon: Search, title: "Google Business", desc: "Optimise your profile to dominate local Maps and search results." },
              { icon: Star, title: "Review Systems", desc: "Automated follow-up to collect genuine reviews from happy customers." },
              { icon: TrendingUp, title: "Local SEO", desc: "Rank higher for searches like 'plumber near me' in your area." },
              { icon: Zap, title: "Enquiry Funnels", desc: "Turn website visits into real job leads and quote requests." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-5 rounded-xl border-2 border-gray-100 hover:border-orange-300 transition-colors text-center">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                  style={{ background: TTM_ORANGE }}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: TTM_NAVY }}>{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/services">
              <button
                className="px-8 py-3 rounded-lg font-bold text-white inline-flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ background: TTM_NAVY }}
              >
                See Full Service Details
                <ArrowRight size={18} />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 md:py-24" style={{ background: "#F8F9FA" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border"
              style={{ borderColor: TTM_GREEN, background: "#F0FDF4" }}>
              <span className="text-sm font-bold" style={{ color: TTM_GREEN }}>Founding Client Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3"
              style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              Straightforward Pricing.<br />No Hidden Extras.
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Founding client rates are available now. These prices are locked in for early clients as we build our track record together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                price: "£297",
                tagline: "Get visible and professional",
                features: [
                  "Professional trade website",
                  "Google Business setup & optimisation",
                  "Basic enquiry form setup",
                  "Mobile-ready design",
                ],
                cta: "Start Here",
                highlight: false,
              },
              {
                name: "Brand Launch Pack",
                price: "£597",
                tagline: "Build trust and visibility fast",
                features: [
                  "Everything in Starter",
                  "Review collection system",
                  "Local SEO foundation",
                  "Enquiry funnel setup",
                  "10 social media posts",
                ],
                cta: "Most Popular",
                highlight: true,
              },
              {
                name: "Full Growth System",
                price: "£997",
                tagline: "The complete digital presence",
                features: [
                  "Everything in Brand Launch Pack",
                  "Full local SEO campaign",
                  "Ongoing content strategy",
                  "Monthly performance review",
                  "Priority support",
                ],
                cta: "Go Full System",
                highlight: false,
              },
            ].map(({ name, price, tagline, features, cta, highlight }) => (
              <div
                key={name}
                className="rounded-xl p-6 border-2 flex flex-col relative"
                style={{
                  borderColor: highlight ? TTM_ORANGE : "#E5E7EB",
                  background: highlight ? TTM_NAVY : "white",
                }}
              >
                {highlight && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black text-white"
                    style={{ background: TTM_ORANGE }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-black text-lg mb-1" style={{ color: highlight ? "white" : TTM_NAVY }}>{name}</h3>
                  <p className="text-sm mb-4" style={{ color: highlight ? "rgba(255,255,255,0.65)" : "#6B7280" }}>{tagline}</p>
                  <div className="text-4xl font-black" style={{ color: TTM_ORANGE }}>{price}</div>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm"
                      style={{ color: highlight ? "rgba(255,255,255,0.8)" : "#4B5563" }}>
                      <CheckCircle size={14} style={{ color: TTM_GREEN }} className="flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/audit">
                  <button
                    className="w-full py-3 rounded-lg font-black text-sm text-white transition-opacity hover:opacity-90"
                    style={{ background: highlight ? TTM_ORANGE : TTM_NAVY }}
                  >
                    {cta} — Start with a Free Audit
                  </button>
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            All prices are founding client rates. Not sure which is right for you? The free audit will tell you.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS (ILLUSTRATIVE) ── */}
      <section className="py-16 md:py-24 text-white" style={{ background: TTM_NAVY }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3"
              style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              The Kind of Results We're Building Toward
            </h2>
            <p className="text-white/55 text-sm max-w-xl mx-auto">
              These are illustrative examples based on typical outcomes in this space. We'll replace them with real TTM client results as we build our track record.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Within 3 months of launching the new site, we were getting noticeably more calls. It's been a proper game-changer for the business.",
                trade: "Plumbing Business",
                location: "Glasgow",
              },
              {
                quote: "The Google Business work alone put us in front of customers we'd never have reached before. We're showing up where it actually matters now.",
                trade: "Electrical Services",
                location: "Edinburgh",
              },
              {
                quote: "No jargon, no faff — they just fixed what was wrong and told us why. Our enquiries have been more consistent since the first month.",
                trade: "Landscaping Services",
                location: "Stirling",
              },
            ].map(({ quote, trade, location }) => (
              <div key={trade} className="rounded-xl p-6 border border-white/10 bg-white/5">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current" style={{ color: TTM_ORANGE }} />
                  ))}
                </div>
                <p className="text-white/85 text-sm leading-relaxed italic mb-5">"{quote}"</p>
                <div>
                  <p className="font-bold text-sm text-white">{trade}</p>
                  <p className="text-white/40 text-xs">{location} · Illustrative example</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM EXPANSION ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="rounded-2xl p-8 border-2" style={{ borderColor: TTM_ORANGE, background: "#FFF7F0" }}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div
                  className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-black text-white"
                  style={{ background: TTM_ORANGE }}
                >
                  Platform Expansion in Progress
                </div>
                <h3 className="text-xl font-black mb-2" style={{ color: TTM_NAVY }}>More capabilities coming in Phase 2</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We're actively building out the platform. Founding clients get early access and locked-in rates as new services launch. Jump in now and you grow with us.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a href="/services#founder-pricing">
                  <button
                    className="px-8 py-3 rounded-lg font-black text-white inline-flex items-center gap-2 transition-opacity hover:opacity-90"
                    style={{ background: TTM_ORANGE }}
                  >
                    Claim Founding Rate
                    <ArrowRight size={18} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 md:py-24 text-white relative overflow-hidden" style={{ background: TTM_NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(244,121,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,121,32,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="container max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4"
            style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            Stop Losing Work to Competitors<br />
            <span style={{ color: TTM_ORANGE }}>Who Just Look Better Online</span>
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Start with a free audit. We'll show you exactly what's holding your business back and the fastest fixes.
          </p>
          <a href="/audit">
            <button
              className="px-10 py-4 rounded-lg font-black text-lg text-white inline-flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: TTM_ORANGE }}
            >
              Get Your Free Digital Audit
              <ArrowRight size={20} />
            </button>
          </a>
          <p className="text-white/40 text-sm mt-6">techtradiemedia@gmail.com · @thetechtradiemedia · Greater Glasgow · Central Scotland · UK-wide remote</p>
        </div>
      </section>

    </Layout>
  );
}
