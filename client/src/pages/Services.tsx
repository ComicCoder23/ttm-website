import Layout from "@/components/Layout";
import { Globe, MapPin, Star, TrendingUp, Zap, ArrowRight, CheckCircle } from "lucide-react";

const TTM_NAVY = "#1B3A6B";
const TTM_ORANGE = "#F47920";
const TTM_GREEN = "#22C55E";

export default function Services() {
  const servicesHeroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425723798/PkcYgtviR6pkuFobXP578T/ttm-services-trades-tools-V8Co8rkD88bBpnmnB25uRM.webp";

  return (
    <Layout>

      {/* ── PHASE 1 LAUNCH BANNER ── */}
      <div style={{ background: TTM_GREEN }} className="w-full py-2 px-4 text-center">
        <p className="text-sm font-bold text-white tracking-wide">
          Phase 1 Services Now Live — Founding Client Pricing Available · Limited Slots
        </p>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroImage}
            alt="Professional trade tools"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "rgba(27,58,107,0.82)" }} />
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(244,121,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,121,32,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
        </div>
        <div className="container max-w-5xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-orange-400/30 bg-orange-500/10">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: TTM_GREEN }} />
            <span className="text-orange-300 text-sm font-semibold tracking-wider uppercase">Phase 1 Services Now Live</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 text-white"
            style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            Practical Services for<br /><span style={{ color: TTM_ORANGE }}>UK Trades Businesses</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl">
            Five core services built to get your phone ringing. No jargon, no fluff — just practical digital tools that connect you with customers looking for your trade.
          </p>
        </div>
      </section>

      {/* ── PLATFORM STATUS BAR ── */}
      <section className="py-5 bg-white border-b border-gray-100">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: TTM_GREEN }} />
              <span className="font-bold text-sm" style={{ color: TTM_NAVY }}>Phase 1 Services — All Live</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {["Website Builds", "Google Business", "Review Systems", "Local SEO", "Enquiry Funnels"].map((s) => (
                <div key={s} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <CheckCircle size={12} style={{ color: TTM_GREEN }} />
                  {s}
                </div>
              ))}
            </div>
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border"
              style={{ borderColor: TTM_ORANGE, color: TTM_ORANGE }}
            >
              Platform Expansion in Progress
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 1: WEBSITE BUILDS ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: TTM_ORANGE }}>
                  <Globe size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: TTM_GREEN }}>Service 01</p>
                  <h2 className="text-2xl md:text-3xl font-black"
                    style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
                    Professional Websites for UK Trades
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your website is your online shopfront. We build fast, professional sites designed specifically for UK trades — plumbers, electricians, builders, roofers, landscapers, and more. Easy to navigate, great on mobile, and built to convert visitors into enquiries.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Mobile-responsive design for all devices",
                  "Fast loading speeds for better user experience",
                  "Clear calls-to-action to capture enquiries",
                  "Before-and-after portfolio sections",
                  "Built-in contact forms and click-to-call",
                  "SEO-optimised for local search visibility",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} style={{ color: TTM_GREEN }} className="flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/audit">
                <button
                  className="px-6 py-3 rounded-lg font-bold text-white text-sm inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ background: TTM_ORANGE }}
                >
                  Get a Free Audit First
                  <ArrowRight size={16} />
                </button>
              </a>
            </div>
            <div className="rounded-xl p-8 border-2" style={{ borderColor: TTM_NAVY, background: "#F8F9FA" }}>
              <h3 className="font-black text-lg mb-6 text-center" style={{ color: TTM_NAVY }}>Looks Great on Every Device</h3>
              <div className="flex items-end justify-center gap-3">
                <div className="w-28 h-20 bg-white border-2 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ borderColor: TTM_NAVY, color: TTM_NAVY }}>Desktop</div>
                <div className="w-14 h-24 bg-white border-2 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ borderColor: TTM_NAVY, color: TTM_NAVY }}>Mobile</div>
                <div className="w-20 h-20 bg-white border-2 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ borderColor: TTM_NAVY, color: TTM_NAVY }}>Tablet</div>
              </div>
              <p className="text-center text-xs text-gray-400 mt-4">Responsive across all screen sizes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 2: GOOGLE BUSINESS ── */}
      <section className="py-16 md:py-24" style={{ background: "#F8F9FA" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl p-8 border-2 flex flex-col items-center justify-center order-2 md:order-1"
              style={{ borderColor: TTM_ORANGE, background: "white" }}>
              <MapPin size={56} style={{ color: TTM_ORANGE }} className="mb-4" />
              <p className="font-black text-lg text-center" style={{ color: TTM_NAVY }}>Dominate Local Search</p>
              <p className="text-sm text-gray-400 text-center mt-2">Show up first when customers search for your trade in your area</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: TTM_ORANGE }}>
                  <MapPin size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: TTM_GREEN }}>Service 02</p>
                  <h2 className="text-2xl md:text-3xl font-black"
                    style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
                    Google Business Optimisation
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When customers search "plumber near me" or "electrician near me," your Google Business Profile is often the first thing they see. We optimise yours to improve local visibility, rank higher in Maps, and make sure you stand out from the competition.
              </p>
              <ul className="space-y-3">
                {[
                  "Complete Google Business Profile setup & optimisation",
                  "Local keyword research and targeting",
                  "Photo and post strategy for maximum visibility",
                  "Review management and response setup",
                  "Service area and location optimisation",
                  "Ongoing monitoring and adjustments",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} style={{ color: TTM_GREEN }} className="flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 3: REVIEW SYSTEMS ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: TTM_ORANGE }}>
                  <Star size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: TTM_GREEN }}>Service 03</p>
                  <h2 className="text-2xl md:text-3xl font-black"
                    style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
                    Review Systems
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Reviews are one of the most powerful trust signals for trades businesses. We set up automated follow-up systems that make it easy for happy customers to leave you a review — without you having to ask every single time.
              </p>
              <ul className="space-y-3">
                {[
                  "Automated review request system",
                  "Multi-platform collection (Google, Facebook, Checkatrade)",
                  "Review monitoring and alerts",
                  "Response templates for fast replies",
                  "Reputation tracking over time",
                  "Competitive benchmarking",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} style={{ color: TTM_GREEN }} className="flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-8 border-2 flex flex-col items-center justify-center"
              style={{ borderColor: TTM_ORANGE, background: "#FFF7F0" }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={28} className="fill-current" style={{ color: TTM_ORANGE }} />
                ))}
              </div>
              <p className="font-black text-lg text-center" style={{ color: TTM_NAVY }}>More Reviews, More Trust</p>
              <p className="text-sm text-gray-400 text-center mt-2">Automated follow-up that works even when you're on a job</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 4: LOCAL SEO ── */}
      <section className="py-16 md:py-24" style={{ background: "#F8F9FA" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl p-8 border-2 flex flex-col items-center justify-center order-2 md:order-1"
              style={{ borderColor: TTM_ORANGE, background: "white" }}>
              <TrendingUp size={56} style={{ color: TTM_ORANGE }} className="mb-4" />
              <p className="font-black text-lg text-center" style={{ color: TTM_NAVY }}>Rank Higher for Local Searches</p>
              <p className="text-sm text-gray-400 text-center mt-2">"Plumber near me" · "Electrician near me" · "Builder near me"</p>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: TTM_ORANGE }}>
                  <TrendingUp size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: TTM_GREEN }}>Service 04</p>
                  <h2 className="text-2xl md:text-3xl font-black"
                    style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
                    Local SEO
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We make sure your business appears higher in local searches across the UK. Trade-specific keyword targeting, on-page improvements, and local authority building — all tailored to your service area.
              </p>
              <ul className="space-y-3">
                {[
                  "Local keyword research and targeting",
                  "On-page SEO improvements",
                  "Local link building strategies",
                  "Schema markup for trades businesses",
                  "Location and service area pages",
                  "Monthly performance reporting",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} style={{ color: TTM_GREEN }} className="flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE 5: ENQUIRY FUNNELS ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: TTM_ORANGE }}>
                  <Zap size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: TTM_GREEN }}>Service 05</p>
                  <h2 className="text-2xl md:text-3xl font-black"
                    style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
                    Enquiry Funnel Setup
                  </h2>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A good website and strong Google presence still need a clear path for customers to contact you. We set up the calls-to-action, forms, and follow-up systems that turn traffic into actual job enquiries.
              </p>
              <ul className="space-y-3">
                {[
                  "Strategic CTA placement throughout the site",
                  "Optimised contact forms",
                  "Click-to-call buttons for mobile users",
                  "Lead capture and notification setup",
                  "Email response automation",
                  "Works alongside your social presence",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} style={{ color: TTM_GREEN }} className="flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl p-8 border-2 flex flex-col items-center justify-center"
              style={{ borderColor: TTM_ORANGE, background: "#FFF7F0" }}>
              <Zap size={56} style={{ color: TTM_ORANGE }} className="mb-4" />
              <p className="font-black text-lg text-center" style={{ color: TTM_NAVY }}>Turn Visitors into Leads</p>
              <p className="text-sm text-gray-400 text-center mt-2">Every visit should have a clear path to contact you</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 md:py-24" style={{ background: TTM_NAVY }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-green-400/30 bg-green-500/10">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: TTM_GREEN }} />
              <span className="text-green-300 text-sm font-semibold tracking-wider uppercase">Founding Client Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3"
              style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              Straightforward Pricing.<br />No Hidden Extras.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              These are founding client rates — locked in early for clients who come aboard while we're building our track record.
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
                highlight: false,
              },
            ].map(({ name, price, tagline, features, highlight }) => (
              <div
                key={name}
                className="rounded-xl p-6 border-2 flex flex-col relative"
                style={{
                  borderColor: highlight ? TTM_ORANGE : "rgba(255,255,255,0.1)",
                  background: highlight ? "white" : "rgba(255,255,255,0.05)",
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
                <div className="mb-5">
                  <h3 className="font-black text-lg mb-1"
                    style={{ color: highlight ? TTM_NAVY : "white" }}>{name}</h3>
                  <p className="text-sm mb-4"
                    style={{ color: highlight ? "#6B7280" : "rgba(255,255,255,0.55)" }}>{tagline}</p>
                  <div className="text-4xl font-black" style={{ color: TTM_ORANGE }}>{price}</div>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm"
                      style={{ color: highlight ? "#4B5563" : "rgba(255,255,255,0.75)" }}>
                      <CheckCircle size={14} style={{ color: TTM_GREEN }} className="flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/audit">
                  <button
                    className="w-full py-3 rounded-lg font-black text-sm text-white transition-opacity hover:opacity-90"
                    style={{
                      background: highlight ? TTM_ORANGE : "rgba(255,255,255,0.1)",
                      border: highlight ? "none" : "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    Start with a Free Audit
                  </button>
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-white/35 text-xs mt-6">
            Not sure which is right for you? The free audit will tell you. No obligation.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4"
            style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            Ready to See Your<br />Online Potential?
          </h2>
          <p className="text-gray-500 mb-10 text-lg max-w-xl mx-auto">
            Start with a free digital audit. We'll show you exactly what's holding your business back and how to fix it — no obligation, no hard sell.
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
          <p className="text-gray-400 text-sm mt-6">techtradiemedia@gmail.com · Leeds, UK</p>
        </div>
      </section>

    </Layout>
  );
}
