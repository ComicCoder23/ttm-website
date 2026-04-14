import Layout from "@/components/Layout";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Globe, Search, Star, BarChart3, Zap, MessageSquare, TrendingUp, Lock } from "lucide-react";

const TTM_NAVY = "#1B3A6B";
const TTM_ORANGE = "#F47920";
const TTM_GREEN = "#22C55E";

export default function Services() {
  return (
    <Layout>

      {/* ── TOP BANNER ── */}
      <div style={{ background: TTM_ORANGE }} className="w-full py-2 px-4 text-center">
        <p className="text-sm font-bold text-white tracking-wide">
          🚀 Phase 1 Services Now Live — Founding Client Pricing Available &nbsp;·&nbsp;{" "}
          <Link href="/audit">
            <span className="underline cursor-pointer hover:text-white/80">Get Your Free Audit →</span>
          </Link>
        </p>
      </div>

      {/* ── HERO ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: TTM_NAVY }}>
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(244,121,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,121,32,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-orange-400/30 bg-orange-500/10">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-orange-300 text-sm font-semibold tracking-wider uppercase">Phase 1 Services Live</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6"
            style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            Digital Services Built for<br />
            <span style={{ color: TTM_ORANGE }}>UK Trades</span>
          </h1>
          <p className="text-xl text-white/75 max-w-2xl mx-auto">
            No jargon. No generic packages. Practical systems that fix visibility, trust, and enquiry flow — built specifically for local trades businesses.
          </p>
        </div>
      </section>

      {/* ── PHASE 1 — LIVE SERVICES ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-6xl mx-auto px-4">

          <div className="flex items-center gap-3 mb-12">
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: TTM_GREEN }} />
            <h2 className="text-2xl md:text-3xl font-black" style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              Phase 1 — Foundation Services
            </h2>
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: TTM_GREEN }}>LIVE NOW</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Service 1 */}
            <div className="rounded-2xl border-2 border-gray-200 p-8 hover:border-orange-400 transition-colors group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: TTM_ORANGE }}>
                <Globe size={22} className="text-white" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-black" style={{ color: TTM_NAVY }}>Trade Website Build</h3>
                <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ background: TTM_GREEN }}>Live</span>
              </div>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                Fast, mobile-first websites designed specifically to convert local trade enquiries. Not pretty portfolios — working lead machines that build trust and make it easy to contact you.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Starter landing page or multi-page site",
                  "Mobile-optimised and fast loading",
                  "Lead capture form + click-to-call",
                  "Review / trust section built in",
                  "Google-ready from day one",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle size={13} style={{ color: TTM_GREEN }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-bold" style={{ color: TTM_NAVY }}>From £297</span>
                <Link href="/audit">
                  <span className="text-sm font-bold flex items-center gap-1 cursor-pointer group-hover:gap-2 transition-all" style={{ color: TTM_ORANGE }}>
                    Get started <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="rounded-2xl border-2 border-gray-200 p-8 hover:border-orange-400 transition-colors group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: TTM_ORANGE }}>
                <Search size={22} className="text-white" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-black" style={{ color: TTM_NAVY }}>Google Business Optimisation</h3>
                <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ background: TTM_GREEN }}>Live</span>
              </div>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                Most trades set up a Google Business profile and leave it half-empty. We optimise it properly so you appear in the Map Pack when customers search for your trade locally.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Full profile setup or clean-up",
                  "Categories, services, and hours",
                  "Photo strategy and uploads",
                  "Service area configuration",
                  "Review strategy included",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle size={13} style={{ color: TTM_GREEN }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-bold" style={{ color: TTM_NAVY }}>From £197</span>
                <Link href="/audit">
                  <span className="text-sm font-bold flex items-center gap-1 cursor-pointer group-hover:gap-2 transition-all" style={{ color: TTM_ORANGE }}>
                    Get started <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="rounded-2xl border-2 border-gray-200 p-8 hover:border-orange-400 transition-colors group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: TTM_ORANGE }}>
                <Zap size={22} className="text-white" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-black" style={{ color: TTM_NAVY }}>TTM Brand Launch Pack</h3>
                <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ background: TTM_GREEN }}>Live</span>
              </div>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                12 brand deliverables that turn a one-man-band into an established business people trust. Logo, social templates, van mockup, workwear, quote PDF, proposal cover — all done.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Logo refresh or creation",
                  "LinkedIn + Instagram templates",
                  "Van & workwear mockups",
                  "Quote PDF + proposal branding",
                  "Before/after promo templates",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle size={13} style={{ color: TTM_GREEN }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-bold" style={{ color: TTM_NAVY }}>£597 fixed price</span>
                <Link href="/audit">
                  <span className="text-sm font-bold flex items-center gap-1 cursor-pointer group-hover:gap-2 transition-all" style={{ color: TTM_ORANGE }}>
                    Get started <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="rounded-2xl border-2 border-gray-200 p-8 hover:border-orange-400 transition-colors group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: TTM_ORANGE }}>
                <BarChart3 size={22} className="text-white" />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-black" style={{ color: TTM_NAVY }}>Local SEO Foundations</h3>
                <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ background: TTM_GREEN }}>Live</span>
              </div>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                Get found when people search for your trade in your area. We set up the core local SEO foundations that make Google understand who you are, what you do, and where you work.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Keyword targeting for your trade + area",
                  "On-page SEO for your website",
                  "Local citation setup",
                  "Schema markup",
                  "Search Console setup",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle size={13} style={{ color: TTM_GREEN }} className="flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm font-bold" style={{ color: TTM_NAVY }}>From £297</span>
                <Link href="/audit">
                  <span className="text-sm font-bold flex items-center gap-1 cursor-pointer group-hover:gap-2 transition-all" style={{ color: TTM_ORANGE }}>
                    Get started <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3-TIER PACKAGES ── */}
      <section className="py-20 md:py-28" style={{ background: "#F8F9FA" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              Or Choose a Fixed Package
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Know exactly what you get and what you pay. No surprises, no scope creep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "£297",
                hook: "Get your brand basics sorted fast.",
                items: ["Logo refresh / creation", "Profile icon & favicon", "3 Instagram templates", "Colour & font guide"],
                cta: "Get Started",
                accent: TTM_NAVY,
                featured: false,
              },
              {
                name: "Brand Launch Pack",
                price: "£597",
                hook: "All 12 deliverables. Look established from day one.",
                items: ["Logo + website hero graphics", "LinkedIn + Instagram templates", "Van & workwear mockup", "Quote PDF + proposal cover", "Before/after templates", "Profile icon + favicon"],
                cta: "Claim Founding Price",
                accent: TTM_ORANGE,
                featured: true,
              },
              {
                name: "Full Growth System",
                price: "£997",
                hook: "Brand Pack + website + Google. Full launch.",
                items: ["Everything in Brand Launch Pack", "5-page trade website build", "Google Business optimisation", "Lead capture form setup", "Local SEO foundations", "30-day support"],
                cta: "Book a Call",
                accent: TTM_GREEN,
                featured: false,
              },
            ].map(({ name, price, hook, items, cta, accent, featured }) => (
              <div
                key={name}
                className={`rounded-2xl p-8 flex flex-col ${featured ? "shadow-2xl" : "border-2 border-gray-200 bg-white"}`}
                style={featured ? { background: TTM_NAVY } : {}}
              >
                {featured && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-black text-white" style={{ background: TTM_ORANGE }}>
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${featured ? "text-orange-400" : "text-gray-400"}`}>{name}</p>
                <div className="flex items-end gap-2 mb-2">
                  <span className={`text-4xl font-black ${featured ? "text-white" : ""}`} style={!featured ? { color: TTM_NAVY } : {}}>{price}</span>
                  <span className={`mb-1 text-sm ${featured ? "text-white/50" : "text-gray-400"}`}>one-off</span>
                </div>
                <p className={`text-sm mb-6 ${featured ? "text-white/60" : "text-gray-500"}`}>{hook}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {items.map((item) => (
                    <li key={item} className={`flex items-center gap-2 text-xs ${featured ? "text-white/80" : "text-gray-600"}`}>
                      <CheckCircle size={13} style={{ color: TTM_GREEN }} className="flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/audit">
                  <button
                    className="w-full py-3 rounded-lg font-black text-sm text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                    style={{ background: accent }}
                  >
                    {cta} <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROADMAP — COMING BLOCKS ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 text-white" style={{ background: TTM_NAVY }}>
              Platform Expansion in Progress
            </div>
            <h2 className="text-3xl font-black mb-4" style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              What's Coming Next
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              TTM is being built in structured phases. Each block is fully tested and proven before it opens. This protects quality — and means what you buy actually works.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                block: "Block 2",
                title: "Conversion Systems",
                desc: "Missed call text back, WhatsApp auto replies, quote funnels, lead qualification, CRM setup.",
                color: "#F59E0B",
                status: "Coming soon",
              },
              {
                block: "Block 3",
                title: "Visibility & Local Dominance",
                desc: "Monthly SEO, location landing pages, review systems, analytics dashboards, Map Pack ranking.",
                color: "#3B82F6",
                status: "Coming soon",
              },
              {
                block: "Block 4",
                title: "Retainer Stack",
                desc: "Monthly website care, content refresh, blog, social templates, growth reporting.",
                color: "#8B5CF6",
                status: "Coming soon",
              },
              {
                block: "Block 5",
                title: "Clone Engine",
                desc: "Trade website generator, niche template packs, white label, multi-location rollouts.",
                color: "#EC4899",
                status: "Coming soon",
              },
              {
                block: "Block 6",
                title: "Premium & Specialty",
                desc: "Drone media, AI receptionist, recruitment films, premium brand production, maintenance memberships.",
                color: "#10B981",
                status: "Coming soon",
              },
            ].map(({ block, title, desc, color, status }) => (
              <div key={block} className="flex items-start gap-5 p-6 rounded-xl border border-gray-200 bg-gray-50 opacity-75">
                <div className="flex-shrink-0">
                  <Lock size={16} className="text-gray-400 mt-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1 flex-wrap">
                    <span className="text-xs font-bold px-2 py-0.5 rounded text-white" style={{ background: color }}>{block}</span>
                    <h3 className="font-bold text-sm" style={{ color: TTM_NAVY }}>{title}</h3>
                    <span className="text-xs text-gray-400 italic">{status}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl border-l-4 bg-gray-50" style={{ borderColor: TTM_ORANGE }}>
            <p className="text-sm text-gray-600">
              <span className="font-bold" style={{ color: TTM_NAVY }}>Why phased? </span>
              Each block only opens once the previous one is proven to deliver measurable results and has reusable systems in place. This keeps quality high and prevents overpromising.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-24 text-white" style={{ background: TTM_NAVY }}>
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            Not Sure Where to Start?
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            The free audit tells you exactly which Phase 1 service will have the biggest impact on your enquiries. Takes 2 minutes to request.
          </p>
          <Link href="/audit">
            <button
              className="px-10 py-4 rounded-lg font-black text-lg text-white inline-flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: TTM_ORANGE }}
            >
              Get My Free Audit
              <ArrowRight size={20} />
            </button>
          </Link>
          <p className="text-white/30 text-sm mt-6">No obligation · Response within 24 hours · Founding client pricing available</p>
        </div>
      </section>

    </Layout>
  );
}
