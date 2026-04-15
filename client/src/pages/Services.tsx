import Layout from "@/components/Layout";
import { Globe, MapPin, Star, TrendingUp, Zap, ArrowRight, CheckCircle, Shield, MessageSquare, Camera, Calendar, FileText, UserPlus } from "lucide-react";

const TTM_NAVY = "#1B3A6B";
const TTM_ORANGE = "#F47920";
const TTM_GREEN = "#22C55E";

export default function Services() {
  const servicesHeroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425723798/PkcYgtviR6pkuFobXP578T/ttm-services-trades-tools-V8Co8rkD88bBpnmnB25uRM.webp";
  const FOUNDER_SLOTS_CLAIMED = 1; // Update manually as slots fill (max 5)

  return (
    <Layout>

      {/* ── PHASE 1 LAUNCH BANNER ── */}
      <a
        href="/services#founder-pricing"
        className="block w-full py-2.5 px-4 text-center hover:opacity-90 transition-opacity"
        style={{ background: TTM_NAVY }}
      >
        <p className="text-sm font-bold tracking-wide" style={{ color: TTM_ORANGE }}>
          Phase 1 Services Now Live —{" "}
          <span className="text-white">Founding Client Pricing Available · Limited 5 Slots</span>
        </p>
      </a>

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

      {/* ── FOUNDING PARTNER TRUST BANNER ── */}
      <section id="founder-pricing" className="py-0" style={{ background: TTM_NAVY }}>
        <div className="container max-w-5xl mx-auto px-4 pt-16">
          <div className="rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5"
            style={{ borderColor: "rgba(244,121,32,0.4)", background: "rgba(244,121,32,0.07)" }}>
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(244,121,32,0.15)", border: "1px solid rgba(244,121,32,0.3)" }}>
                <Shield size={22} style={{ color: TTM_ORANGE }} />
              </div>
            </div>
            <div>
              <p className="font-black text-sm uppercase tracking-widest mb-1" style={{ color: TTM_ORANGE }}>
                Founding Partner Pricing
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                The first 5 trade businesses receive a <span className="font-bold text-white">£50 launch partner credit</span> in exchange for honest feedback and proof participation. Standard investment prices remain visible as the long-term rate — this credit applies to founding partners only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="pb-16 md:pb-24 pt-10" style={{ background: TTM_NAVY }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3"
              style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              Straightforward Pricing.<br />No Hidden Extras.
            </h2>
            <p className="text-white/55 max-w-xl mx-auto text-sm">
              Phase 1 limited to 5 founding trade partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                standardPrice: "£297",
                founderPrice: "£247",
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
                standardPrice: "£597",
                founderPrice: "£547",
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
                standardPrice: "£997",
                founderPrice: "£947",
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
            ].map(({ name, standardPrice, founderPrice, tagline, features, highlight }) => (
              <div
                key={name}
                className="rounded-xl flex flex-col relative overflow-hidden"
                style={{
                  border: highlight ? `2px solid ${TTM_ORANGE}` : "2px solid rgba(255,255,255,0.1)",
                  background: highlight ? "white" : "rgba(255,255,255,0.04)",
                }}
              >
                {highlight && (
                  <div
                    className="absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-black text-white tracking-wider"
                    style={{ background: TTM_ORANGE }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div className={`p-6 flex-1 flex flex-col ${highlight ? "pt-10" : ""}`}>
                  {/* Package header */}
                  <div className="mb-6">
                    <h3 className="font-black text-lg mb-1"
                      style={{ color: highlight ? TTM_NAVY : "white" }}>{name}</h3>
                    <p className="text-sm"
                      style={{ color: highlight ? "#6B7280" : "rgba(255,255,255,0.5)" }}>{tagline}</p>
                  </div>

                  {/* 3-layer pricing breakdown */}
                  <div className="rounded-lg p-4 mb-6 space-y-2"
                    style={{ background: highlight ? "#F8F9FA" : "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>

                    {/* Standard Investment */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: highlight ? "#9CA3AF" : "rgba(255,255,255,0.4)" }}>
                        Standard Investment
                      </span>
                      <span className="text-sm font-bold"
                        style={{ color: highlight ? "#6B7280" : "rgba(255,255,255,0.5)" }}>
                        {standardPrice}
                      </span>
                    </div>

                    {/* Divider */}
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

                    {/* Launch Partner Credit */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: TTM_GREEN }}>
                        Launch Partner Credit
                      </span>
                      <span className="text-sm font-bold" style={{ color: TTM_GREEN }}>−£50</span>
                    </div>

                    {/* Divider */}
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />

                    {/* Today's Founder Price */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-black uppercase tracking-wider"
                        style={{ color: highlight ? TTM_NAVY : "rgba(255,255,255,0.9)" }}>
                        Today's Founder Price
                      </span>
                      <span className="text-2xl font-black" style={{ color: TTM_ORANGE }}>
                        {founderPrice}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-8 flex-1">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm"
                        style={{ color: highlight ? "#4B5563" : "rgba(255,255,255,0.7)" }}>
                        <CheckCircle size={14} style={{ color: TTM_GREEN }} className="flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href="/audit">
                    <button
                      className="w-full py-3 rounded-lg font-black text-sm text-white transition-opacity hover:opacity-90"
                      style={{
                        background: highlight ? TTM_ORANGE : "rgba(255,255,255,0.1)",
                        border: highlight ? "none" : "1px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      Claim Founder 5 Rate — Free Audit First
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/35 text-xs mt-6">
            Not sure which is right for you? The free audit will tell you exactly. No obligation.
          </p>

          {/* ── FOUNDER 5 PARTNER ADVANTAGE ── */}
          <div className="mt-10 rounded-2xl border-2 p-6 md:p-8" style={{ borderColor: TTM_ORANGE, background: "rgba(244,121,32,0.07)" }}>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: TTM_GREEN }} />
                  <p className="text-xs font-black uppercase tracking-widest" style={{ color: TTM_ORANGE }}>
                    Founder 5 Partner Advantage
                  </p>
                </div>
                <p className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.45)" }}>
                  Founder slots claimed: {FOUNDER_SLOTS_CLAIMED} / 5
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <div className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-xs font-semibold mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Standard from</p>
                <p className="text-2xl font-black text-white">£297</p>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Long-term anchor rate</p>
              </div>
              <div className="rounded-lg p-4" style={{ background: "rgba(244,121,32,0.12)", border: "1px solid rgba(244,121,32,0.3)" }}>
                <p className="text-xs font-semibold mb-1" style={{ color: TTM_ORANGE }}>Founder 5 today</p>
                <p className="text-2xl font-black" style={{ color: TTM_ORANGE }}>£247 effective</p>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>£50 credit applied</p>
              </div>
              <div className="rounded-lg p-4" style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
                <p className="text-xs font-semibold mb-1" style={{ color: TTM_GREEN }}>Rate locked</p>
                <p className="text-sm font-bold text-white leading-snug">While Phase 1 slots remain</p>
                <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Reverts to standard once full</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              The £50 credit is applied to your founding package — not a discount on a reduced offering. Priority turnaround applies to all Founder 5 partners during Phase 1. In return, we ask for honest participation: a review if you're genuinely happy, a short testimonial, and permission to use your results as a case study. No pressure, ever.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE ASK IN RETURN ── */}
      <section className="py-14 md:py-20" style={{ background: "#0F2547" }}>
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3"
              style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              What We Ask in Return
            </h2>
            <p className="text-white/55 text-sm max-w-xl mx-auto">
              The founder credit isn't a discount — it's a partnership. Here's what we're asking for in exchange. Everything on this list is optional if circumstances change; we're building a relationship, not enforcing a contract.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Star,
                title: "Honest Google Review",
                desc: "Only if you're genuinely happy with the results. We'd rather earn it than ask for it upfront.",
              },
              {
                icon: MessageSquare,
                title: "WhatsApp Testimonial",
                desc: "A short written note on what worked for you — in your own words, no polish required.",
              },
              {
                icon: Camera,
                title: "Before & After Screenshots",
                desc: "Permission to use comparison visuals of your online presence pre and post our work.",
              },
              {
                icon: Calendar,
                title: "30-Day Result Check-In",
                desc: "A brief catch-up at the one-month mark so we can document what's moved and what to tweak.",
              },
              {
                icon: FileText,
                title: "Case Study Permission",
                desc: "Allow us to write up your journey as an anonymised or named case study for future clients.",
              },
              {
                icon: UserPlus,
                title: "One Referral Intro",
                desc: "If you're happy, introduce us to one other trade business who could benefit. No pressure, ever.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl p-5 border"
                style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(244,121,32,0.15)" }}>
                    <Icon size={15} style={{ color: TTM_ORANGE }} />
                  </div>
                  <h3 className="font-bold text-sm text-white">{title}</h3>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl p-5 border text-center"
            style={{ borderColor: "rgba(34,197,94,0.25)", background: "rgba(34,197,94,0.06)" }}>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              <span className="font-bold" style={{ color: TTM_GREEN }}>Phase 1 limited to 5 founding trade partners.</span>
              {" "}Once those slots are filled, standard pricing applies and the credit is no longer available.
            </p>
          </div>
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
              className