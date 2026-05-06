import Layout from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ArrowRight, CheckCircle, Star, Globe, Search, TrendingUp, Zap, BarChart3, Shield, Clock } from "lucide-react";

const TTM_NAVY = "#1B3A6B";
const TTM_ORANGE = "#F47920";
const TTM_GREEN = "#22C55E";

export default function Home() {
  const heroImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80";
  const FOUNDER_SLOTS_CLAIMED = 1; // Update manually as slots fill (max 5)

  return (
    <Layout>
      <PageMeta
        title="Tech Tradie Media — Digital Tools for UK Trades"
        description="Get more calls, quotes, and jobs from your online presence. Practical digital tools for UK trades businesses. Website builds, Google Business, reviews, and local SEO."
      />

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
      <section className="relative min-h-[600px] md:min-h-screen flex items-start overflow-hidden">
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

        <div className="container max-w-5xl mx-auto px-4 pt-12 md:pt-16 pb-12 md:pb-16 relative z-10">
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
                Get Your Digital Audit — £49
                <ArrowRight size={20} />
              </button>
            </a>
            <a href="/services">
              <button
                className="px-8 py-4 rounded-lg font-bold text-lg text-white border-2 border-white/30 hover:border-white/60 transition-colors flex items-center gap-2"
              >
                See All Fix Tiers
                <ArrowRight size={18} />
              </button>
            </a>
          </div>
          <p className="text-white/40 text-xs mt-4">Bronze Diagnostic Audit: £49 · Results in 24 hours · No obligation</p>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16 md:py-20 bg-white">
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
              { icon: "🌍", title: "Hard to Find on Google", desc: "Not showing up in local searches or the Maps pack means invisible to ready-to-buy customers." },
              { icon: "📱", title: "Mobile Contact Issues", desc: "If a customer can't click-to-call or message you in one tap, they'll find someone who makes it easier." },
              { icon: "🛡️", title: "Missing Trust Signals", desc: "No reviews, old photos, or an outdated website makes serious customers think twice before calling." },
              { icon: "🚰", title: "Leaking Job Leads", desc: "People visit your site or Facebook but leave without enquiring because the path isn't clear." },
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

      {/* ── SOLUTION (Problem -> Solution -> Profit) ── */}
      <section className="py-16 md:py-24 text-white" style={{ background: TTM_NAVY }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4"
              style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              The Path to More Enquiries
            </h2>
            <p className="text-white/75 max-w-2xl mx-auto text-lg">
              We don't do corporate fluff. We find the leaks in your online presence and fix them in plain English.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Find the Leak", desc: "We audit your site and Google profile to see exactly where you're losing customers." },
              { step: "02", title: "Diagnose the Issue", desc: "We identify the high-impact fixes that will get your phone ringing fastest." },
              { step: "03", title: "Fix What Matters", desc: "We implement the quick wins — trust signals, contact routes, and local SEO." },
              { step: "04", title: "Build the System", desc: "We scale your presence into a lead machine that works while you're on site." },
            ].map((s) => (
              <div key={s.step} className="relative">
                <div className="text-5xl font-black mb-4 opacity-20" style={{ color: TTM_ORANGE }}>{s.step}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL LADDER V2 ── */}
      <section className="py-16 md:py-24 bg-white" id="pricing">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border"
              style={{ borderColor: TTM_ORANGE, background: "#FFF7F0" }}>
              <span className="text-sm font-bold" style={{ color: TTM_ORANGE }}>Straightforward Pricing</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4"
              style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              The Trade Trust Ladder
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Start with a fast £49 diagnostic, then move into the right fix tier depending on your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Bronze",
                price: "£49",
                role: "Diagnostic Audit",
                desc: "Find out exactly what's costing you jobs.",
                features: ["Website audit", "Google Business review", "Top 3 priority fixes", "Trust leak detection"],
                cta: "Get Audit",
                highlight: false,
              },
              {
                name: "Silver",
                price: "£149",
                role: "Fix Sprint",
                desc: "The most common starting point for trades.",
                features: ["Fast contact route fixes", "Google profile basic cleanup", "Essential trust signals", "Mobile-tap optimisation"],
                cta: "Recommended Fix",
                highlight: true,
                badge: "MOST COMMON",
              },
              {
                name: "Gold",
                price: "£349",
                role: "Trust & Lead Upgrade",
                desc: "For those ready to dominate local search.",
                features: ["Review system setup", "Local SEO foundation", "Quote form upgrade", "Google Business full tune-up"],
                cta: "Upgrade Trust",
                highlight: false,
              },
              {
                name: "Platinum",
                price: "£749+",
                role: "Full Growth System",
                desc: "The complete digital lead machine.",
                features: ["Full website build/refit", "Advanced local authority", "Branding & asset pack", "Lead automation system"],
                cta: "Go Platinum",
                highlight: false,
              },
            ].map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-6 border-2 flex flex-col relative transition-transform hover:scale-[1.02] ${
                  tier.highlight ? "shadow-xl z-10" : "shadow-sm"
                }`}
                style={{
                  borderColor: tier.highlight ? TTM_ORANGE : "#F3F4F6",
                  background: tier.highlight ? TTM_NAVY : "#FFFFFF",
                  paddingTop: tier.highlight ? "3rem" : "1.5rem",
                }}
              >
                {tier.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-[10px] font-black text-white tracking-widest uppercase"
                    style={{ background: TTM_ORANGE }}
                  >
                    {tier.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-black text-xl mb-1" style={{ color: tier.highlight ? "white" : TTM_NAVY }}>{tier.name}</h3>
                  <p className="text-xs font-bold mb-4 uppercase tracking-wider" style={{ color: tier.highlight ? TTM_ORANGE : "#9CA3AF" }}>{tier.role}</p>
                  <div className="text-4xl font-black mb-3" style={{ color: tier.highlight ? "white" : TTM_NAVY }}>{tier.price}</div>
                  <p className="text-sm leading-relaxed" style={{ color: tier.highlight ? "rgba(255,255,255,0.6)" : "#6B7280" }}>{tier.desc}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs"
                      style={{ color: tier.highlight ? "rgba(255,255,255,0.8)" : "#4B5563" }}>
                      <CheckCircle size={14} style={{ color: TTM_GREEN }} className="flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/audit">
                  <button
                    className="w-full py-3 rounded-xl font-black text-sm text-white transition-opacity hover:opacity-90"
                    style={{ background: TTM_ORANGE }}
                  >
                    {tier.cta}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POPULAR ADD-ONS ── */}
      <section className="py-12 md:py-16" style={{ background: "#F8F9FA" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black mb-3" style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
                Popular Add-Ons
              </h2>
              <p className="text-gray-500">Fast wins that make a big difference.</p>
            </div>
            <div className="text-sm font-bold text-gray-400">Natural upsells after Silver</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "WhatsApp Lead Button", price: "£29", desc: "Message faster with a clear WhatsApp button." },
              { title: "Google Review Booster", price: "£39", desc: "Easily collect and show strong reviews." },
              { title: "Quote Form Upgrade", price: "£49", desc: "A cleaner form for serious enquiries." },
              { title: "Before/After Gallery", price: "£59", desc: "Show your work and build trust faster." },
              { title: "After-Hours Auto Reply", price: "£79", desc: "Leads won't go cold when you're off-duty." },
              { title: "Missed Call Text Back", price: "£99", desc: "Send a quick text after missed calls automatically." },
            ].map((addon) => (
              <div key={addon.title} className="bg-white p-5 rounded-xl border border-gray-200 flex justify-between items-start gap-4">
                <div>
                  <h4 className="font-bold text-sm mb-1" style={{ color: TTM_NAVY }}>{addon.title}</h4>
                  <p className="text-xs text-gray-400">{addon.desc}</p>
                </div>
                <div className="text-sm font-black" style={{ color: TTM_ORANGE }}>{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-16" style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            What Happens Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Send Your Info", desc: "Share your website or Facebook page link." },
              { step: "02", title: "Get Your Audit", desc: "Receive your £49 Trade Trust Diagnostic." },
              { step: "03", title: "Choose Your Fix", desc: "Pick the best quick fixes from our ladder." },
              { step: "04", title: "Scale Your Leads", desc: "Grow into a full automated lead system." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-lg mx-auto mb-4" style={{ background: TTM_NAVY }}>
                  {s.step}
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: TTM_NAVY }}>{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS (ILLUSTRATIVE) ── */}
      <section className="py-16 md:py-20 text-white" style={{ background: TTM_NAVY }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3"
              style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              The Kind of Results We're Building Toward
            </h2>
            <p className="text-white/55 text-sm max-w-xl mx-auto">
              These are illustrative examples based on typical outcomes. We'll replace them with real TTM client results soon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Within 3 months of launching the new site, we were getting noticeably more calls. It's been a game-changer.", trade: "Plumbing Business", location: "Glasgow" },
              { quote: "The Google Business work alone put us in front of customers we'd never have reached before.", trade: "Electrical Services", location: "Edinburgh" },
              { quote: "No jargon, no faff — they just fixed what was wrong. Our enquiries have been consistent ever since.", trade: "Landscaping Services", location: "Stirling" },
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

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28 text-white relative overflow-hidden" style={{ background: TTM_NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(244,121,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,121,32,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="container max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            Stop Losing Work to Competitors<br />
            <span style={{ color: TTM_ORANGE }}>Who Just Look Better Online</span>
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Start with your £49 diagnostic audit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/audit">
              <button
                className="px-10 py-4 rounded-lg font-black text-lg text-white inline-flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ background: TTM_ORANGE }}
              >
                Get My Audit — £49
                <ArrowRight size={20} />
              </button>
            </a>
            <a
              href="https://wa.me/447432754561"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="px-10 py-4 rounded-lg font-black text-lg text-white inline-flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ background: "#25D366" }}
              >
                Message Us on WhatsApp
              </button>
            </a>
          </div>
          <p className="text-white/40 text-sm mt-8">techtradiemedia@gmail.com · @thetechtradiemedia · 07432 754561</p>
        </div>
      </section>

    </Layout>
  );
}
