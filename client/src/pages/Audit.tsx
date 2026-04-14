import Layout from "@/components/Layout";
import { ArrowRight, CheckCircle, Clock, Search, Star, Globe, BarChart3, Zap, Shield } from "lucide-react";

const TTM_NAVY = "#1B3A6B";
const TTM_ORANGE = "#F47920";
const TTM_GREEN = "#22C55E";

export default function Audit() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = encodeURIComponent(data.get("name") as string);
    const trade = encodeURIComponent(data.get("trade") as string);
    const location = encodeURIComponent(data.get("location") as string);
    const website = encodeURIComponent(data.get("website") as string ?? "None");
    const google = encodeURIComponent(data.get("google") as string);
    const reviews = encodeURIComponent(data.get("reviews") as string);
    const problem = encodeURIComponent(data.get("problem") as string);
    const goal = encodeURIComponent(data.get("goal") as string);
    const body = `Hi Tech Tradie Media,%0A%0AI'd like a free digital audit.%0A%0AName: ${name}%0ATrade: ${trade}%0ALocation: ${location}%0AWebsite: ${website}%0AGoogle Business set up: ${google}%0ANumber of reviews: ${reviews}%0ABiggest challenge: ${problem}%0AMain goal: ${goal}%0A%0ALooking forward to hearing from you.`;
    window.location.href = `mailto:techtradiemedia@gmail.com?subject=Free Digital Audit Request — ${trade}&body=${body}`;
  };

  return (
    <Layout>

      {/* ── TOP BANNER ── */}
      <div style={{ background: TTM_GREEN }} className="w-full py-2 px-4 text-center">
        <p className="text-sm font-bold text-white tracking-wide">
          Free Audit — No obligation, no sales pressure. Just honest feedback on your online presence.
        </p>
      </div>

      {/* ── HERO ── */}
      <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: TTM_NAVY }}>
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(244,121,32,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(244,121,32,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-orange-400/30 bg-orange-500/10">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-orange-300 text-sm font-semibold tracking-wider uppercase">Founding Client Pricing Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              Find Out Exactly What's<br />
              <span style={{ color: TTM_ORANGE }}>Costing You Jobs Online</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              A free, honest review of your website, Google Business profile, and local visibility. We'll tell you what's working, what's leaking leads, and the fastest way to fix it.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Clock, label: "Response within 24 hours" },
                { icon: Shield, label: "No obligation whatsoever" },
                { icon: CheckCircle, label: "Specific, actionable findings" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon size={16} style={{ color: TTM_GREEN }} />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE CHECK ── */}
      <section className="py-16 md:py-20" style={{ background: "#F8F9FA" }}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
              What We Review in Your Audit
            </h2>
            <p className="text-gray-500">Five areas that directly affect how many enquiries you get.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: Globe,
                title: "Website",
                checks: ["Speed & mobile", "Trust signals", "CTA clarity", "Contact path"],
              },
              {
                icon: Search,
                title: "Google Business",
                checks: ["Profile completeness", "Categories set", "Photos & posts", "Q&A section"],
              },
              {
                icon: Star,
                title: "Reviews",
                checks: ["Review count", "Recent activity", "Response rate", "Trust score"],
              },
              {
                icon: BarChart3,
                title: "Local Visibility",
                checks: ["Map Pack presence", "Search ranking", "Competitor gap", "Service area"],
              },
              {
                icon: Zap,
                title: "Enquiry Path",
                checks: ["How easy to contact", "Form / CTA quality", "Response setup", "Lead leaks"],
              },
            ].map(({ icon: Icon, title, checks }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-orange-400 transition-colors">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: TTM_ORANGE }}>
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-bold text-sm mb-3" style={{ color: TTM_NAVY }}>{title}</h3>
                <ul className="space-y-1">
                  {checks.map((c) => (
                    <li key={c} className="text-xs text-gray-500 flex items-center gap-1.5">
                      <span style={{ color: TTM_GREEN }}>✓</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl border-l-4 bg-white" style={{ borderColor: TTM_ORANGE }}>
            <p className="text-sm text-gray-600">
              <span className="font-bold" style={{ color: TTM_NAVY }}>What you get back: </span>
              A clear summary of your 3 highest-priority fixes — specific, practical, and ranked by impact on enquiries. No waffle. No generic advice. Trades-specific findings only.
            </p>
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Sidebar */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="sticky top-8 space-y-6">

                <div className="rounded-xl p-6 border-2" style={{ borderColor: TTM_NAVY, background: "#F8F9FA" }}>
                  <h3 className="font-black text-lg mb-4" style={{ color: TTM_NAVY }}>Who this is for</h3>
                  <ul className="space-y-3">
                    {[
                      "Plumbers, electricians, roofers",
                      "Landscapers, tree surgeons, gardeners",
                      "Builders and local contractors",
                      "Any trade with inconsistent enquiries",
                      "Businesses with an outdated web presence",
                      "Owner-operators who want more local work",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={14} style={{ color: TTM_GREEN }} className="flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl p-6 text-white" style={{ background: TTM_NAVY }}>
                  <h3 className="font-black text-base mb-3" style={{ color: TTM_ORANGE }}>After your audit</h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">
                    If we identify quick wins, we'll outline exactly what they are and what it would take to fix them. No pressure to buy anything.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Starter from £297",
                      "Brand Launch Pack from £597",
                      "Full Growth System from £997",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-white/85">
                        <ArrowRight size={12} style={{ color: TTM_ORANGE }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="text-white/40 text-xs mt-4">Founding client pricing — limited availability</p>
                </div>

                <div className="rounded-xl p-6 border border-gray-200 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm" style={{ background: TTM_ORANGE }}>AG</div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: TTM_NAVY }}>Alan Gray</p>
                      <p className="text-xs text-gray-400">Founder, Tech Tradie Media</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed italic">
                    "I built TTM because I kept seeing good tradespeople losing work to weaker competitors who just looked better online. The audit shows you exactly where that's happening to you."
                  </p>
                </div>

              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black mb-3" style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
                  Request Your Free Audit
                </h2>
                <p className="text-gray-500 text-sm">Takes 2 minutes. We'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                      Your name <span style={{ color: TTM_ORANGE }}>*</span>
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="e.g. Alan Smith"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                      Your trade <span style={{ color: TTM_ORANGE }}>*</span>
                    </label>
                    <select
                      name="trade"
                      required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
                    >
                      <option value="">Select your trade...</option>
                      <option>Plumber</option>
                      <option>Electrician</option>
                      <option>Roofer</option>
                      <option>Landscaper</option>
                      <option>Tree Surgeon</option>
                      <option>Builder / General Contractor</option>
                      <option>Gardener</option>
                      <option>Pressure Washing / Exterior Cleaning</option>
                      <option>Painter / Decorator</option>
                      <option>Joiner / Carpenter</option>
                      <option>Other local service business</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                    Town / city you work in <span style={{ color: TTM_ORANGE }}>*</span>
                  </label>
                  <input
                    name="location"
                    required
                    placeholder="e.g. Leeds, Glasgow, Manchester"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                    Your website (if you have one)
                  </label>
                  <input
                    name="website"
                    placeholder="e.g. www.mybusiness.co.uk — leave blank if none"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                      Google Business set up? <span style={{ color: TTM_ORANGE }}>*</span>
                    </label>
                    <select
                      name="google"
                      required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
                    >
                      <option value="">Select...</option>
                      <option>Yes, fully set up</option>
                      <option>Yes but not fully filled in</option>
                      <option>Not sure</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                      Approx. number of Google reviews <span style={{ color: TTM_ORANGE }}>*</span>
                    </label>
                    <select
                      name="reviews"
                      required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
                    >
                      <option value="">Select...</option>
                      <option>0 — none yet</option>
                      <option>1–5</option>
                      <option>6–20</option>
                      <option>21–50</option>
                      <option>50+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                    Biggest challenge right now <span style={{ color: TTM_ORANGE }}>*</span>
                  </label>
                  <select
                    name="problem"
                    required
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
                  >
                    <option value="">Select one...</option>
                    <option>Not enough enquiries coming in</option>
                    <option>Can't be found on Google</option>
                    <option>Website looks outdated or unprofessional</option>
                    <option>No website at all</option>
                    <option>Not enough reviews or low trust signals</option>
                    <option>Inconsistent work — feast or famine</option>
                    <option>Losing jobs to competitors who look better online</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                    What would a win look like for you? <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="goal"
                    rows={3}
                    placeholder="e.g. 5 more enquiries a month, showing up on Google Maps, looking more professional than the competition..."
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg font-black text-lg text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{ background: TTM_ORANGE }}
                >
                  Send My Audit Request
                  <ArrowRight size={20} />
                </button>

                <p className="text-center text-xs text-gray-400">
                  We'll review your details and respond within 24 hours. No spam. No obligation. No hard sell.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT ── */}
      <section className="py-16 md:py-20" style={{ background: "#F8F9FA" }}>
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-12" style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            What Happens After You Submit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "We review your details", desc: "We look at your website, Google Business profile, local rankings, and contact journey." },
              { step: "02", title: "We identify your leaks", desc: "We find the 3 highest-priority things that are costing you enquiries right now." },
              { step: "03", title: "You get honest feedback", desc: "A clear, specific summary — what's wrong, why it matters, and how to fix it." },
              { step: "04", title: "You decide what's next", desc: "No pressure. If we can help, we'll say how. If you want to fix it yourself, that's fine too." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-white text-lg mx-auto mb-4" style={{ background: TTM_NAVY }}>
                  {step}
                </div>
                <h3 className="font-bold text-sm mb-2" style={{ color: TTM_NAVY }}>{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OBJECTION HANDLING ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-black text-center mb-10" style={{ color: TTM_NAVY, fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is this really free?",
                a: "Yes, completely. There's no catch, no credit card, no obligation. We review your online presence and give you honest feedback. Whether you work with us after that is entirely up to you.",
              },
              {
                q: "I already have a website — do I still need this?",
                a: "Probably yes. Most trades we speak to already have a website. The issue isn't usually having one — it's whether it's actually winning you work. We'll tell you honestly if yours is performing or leaking leads.",
              },
              {
                q: "How long does it take?",
                a: "Two minutes to fill in the form. We'll get back to you within 24 hours with findings. No lengthy calls required.",
              },
              {
                q: "What if I want to fix things myself?",
                a: "Absolutely fine. The audit findings are yours to do with as you like. We'll tell you what to fix and you can decide how.",
              },
              {
                q: "I'm not very tech-savvy — is this too complicated?",
                a: "That's exactly who this is built for. We explain everything in plain language. No jargon. No tech assumptions. Just clear, practical findings.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="rounded-xl border border-gray-200 p-6 hover:border-orange-400 transition-colors">
                <h3 className="font-bold text-sm mb-2" style={{ color: TTM_NAVY }}>{q}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 md:py-20 text-white" style={{ background: TTM_NAVY }}>
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(244,121,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,121,32,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            Stop Losing Work to Competitors<br />
            <span style={{ color: TTM_ORANGE }}>Who Just Look Better Online</span>
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            It takes 2 minutes. You'll know exactly where you stand within 24 hours.
          </p>
          <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <button
              className="px-10 py-4 rounded-lg font-black text-lg text-white inline-flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: TTM_ORANGE }}
            >
              Request My Free Audit
              <ArrowRight size={20} />
            </button>
          </a>
          <p className="text-white/40 text-sm mt-6">techtradiemedia@gmail.com · @thetechtradiemedia · Leeds, UK</p>
        </div>
      </section>

    </Layout>
  );
}
    </Layout>
  );
}
