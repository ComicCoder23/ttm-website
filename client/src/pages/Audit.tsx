import Layout from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { ArrowRight, CheckCircle, Clock, Search, Star, Globe, BarChart3, Zap, Shield } from "lucide-react";
import { useState } from "react";

const TTM_NAVY = "#1B3A6B";
const TTM_ORANGE = "#F47920";
const TTM_GREEN = "#22C55E";

export default function Audit() {
  const [fallbackEmail, setFallbackEmail] = useState<{ href: string; body: string } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const getValue = (field: string, fallback = "Not supplied") => {
      const value = data.get(field);
      return typeof value === "string" && value.trim() ? value.trim() : fallback;
    };

    const name = getValue("name");
    const email = getValue("email");
    const phone = getValue("phone");
    const trade = getValue("trade");
    const subTrade = getValue("subTrade");
    const location = getValue("location");
    const website = getValue("website", "None");
    const google = getValue("google");
    const reviews = getValue("reviews");
    const problem = getValue("problem");
    const goal = getValue("goal");

    const body = [
      "Hi Tech Tradie Media,",
      "",
      "I'd like a free digital audit.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Trade: ${trade}`,
      `Sub-trade / specialist work: ${subTrade}`,
      `Location: ${location}`,
      `Website: ${website}`,
      `Google Business set up: ${google}`,
      `Number of reviews: ${reviews}`,
      `Biggest challenge: ${problem}`,
      `Main goal: ${goal}`,
      "",
      "Looking forward to hearing from you.",
    ].join("\n");

    const href = `mailto:techtradiemedia@gmail.com?subject=${encodeURIComponent(`Free Digital Audit Request - ${trade}`)}&body=${encodeURIComponent(body)}`;
    setFallbackEmail({ href, body });
    window.location.assign(href);
  };

  return (
    <Layout>
      <PageMeta
        title="Free Digital Audit — Tech Tradie Media"
        description="Get a free, honest review of your website, Google Business profile, and local visibility. For UK trades businesses. Response within 24 hours."
        ogImage="/brand/ttm-horizontal-master.png"
      />

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
                  {/* Roundel trust seal */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/brand/ttm-roundel-master.png"
                      alt="Tech Tradie Media"
                      className="h-14 w-auto flex-shrink-0"
                      style={{ objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))" }}
                    />
                    <h3 className="font-black text-base" style={{ color: TTM_ORANGE }}>After your audit</h3>
                  </div>
                  <p className="text-white/75 text-sm leading-relaxed mb-4">
                    If we identify quick wins, we'll outline exactly what they are and what it would take to fix them. No pressure to buy anything.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Standard packages from</span>
                      <span className="font-bold text-white">£297</span>
                    </div>
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold" style={{ color: TTM_ORANGE }}>Founder 5 today</span>
                      <span className="font-black text-lg" style={{ color: TTM_ORANGE }}>£247 effective</span>
                    </div>
                    <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }} />
                    <div className="flex items-center gap-2 text-xs" style={{ color: "#22C55E" }}>
                      <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#22C55E" }} />
                      Locked while Phase 1 slots remain
                    </div>
                  </div>
                  <a href="/services#founder-pricing" className="block mt-4">
                    <div className="w-full py-2 rounded-lg text-center text-xs font-black text-white hover:opacity-90 transition-opacity"
                      style={{ background: TTM_ORANGE }}>
                      View Founder 5 Pricing →
                    </div>
                  </a>
                </div>

                <div className="rounded-xl p-6 border border-gray-200 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Falcon icon — official TTM compact mark */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                      style={{ background: "#1B3A6B" }}>
                      <img
                        src="/brand/falcon-icon-master.png"
                        alt="TTM"
                        className="w-10 h-10"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
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
                      <option>Joiner / Carpenter</option>
                      <option>Builder / General Contractor</option>
                      <option>Roofer</option>
                      <option>Plumber / Heating Engineer</option>
                      <option>Electrician</option>
                      <option>Gas Engineer</option>
                      <option>Bathroom Fitter</option>
                      <option>Kitchen Fitter</option>
                      <option>Painter / Decorator</option>
                      <option>Plasterer / Renderer</option>
                      <option>Tiler</option>
                      <option>Flooring Installer</option>
                      <option>Window / Door Installer</option>
                      <option>Garage Door / Roller Shutter Installer</option>
                      <option>Locksmith</option>
                      <option>Landscaper</option>
                      <option>Gardener</option>
                      <option>Tree Surgeon</option>
                      <option>Fencing / Decking</option>
                      <option>Driveways / Paving</option>
                      <option>Groundworks / Drainage</option>
                      <option>Pressure Washing / Exterior Cleaning</option>
                      <option>Gutter Cleaning / Fascias</option>
                      <option>Cleaning Services</option>
                      <option>Waste Removal / Man and Van</option>
                      <option>Appliance Repair</option>
                      <option>Security / CCTV / Alarms</option>
                      <option>Renewables / Solar / EV Charging</option>
                      <option>Other local service business</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                      Email address <span style={{ color: TTM_ORANGE }}>*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@business.co.uk"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                      Phone number <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="07432 123456"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                    Specialist services / sub-trades
                  </label>
                  <input
                    name="subTrade"
                    list="sub-trade-options"
                    placeholder="e.g. fire doors, kit builds, first fix, second fix, extensions"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                  />
                  <datalist id="sub-trade-options">
                    <option value="Joiner - fire doors" />
                    <option value="Joiner - kit builds" />
                    <option value="Joiner - first fix" />
                    <option value="Joiner - second fix" />
                    <option value="Joiner - kitchens" />
                    <option value="Joiner - fitted wardrobes" />
                    <option value="Builder - extensions" />
                    <option value="Builder - garage conversions" />
                    <option value="Roofer - flat roofs" />
                    <option value="Roofer - slate and tile repairs" />
                    <option value="Plumber - emergency leaks" />
                    <option value="Heating engineer - boiler installs" />
                    <option value="Electrician - rewires" />
                    <option value="Electrician - EV chargers" />
                    <option value="Landscaper - patios" />
                    <option value="Landscaper - artificial grass" />
                    <option value="Tree surgeon - removals" />
                    <option value="Exterior cleaning - driveways" />
                  </datalist>
                  <p className="text-xs text-gray-400 mt-2">
                    Add the work you most want to win. This helps us judge whether your site is attracting the right jobs.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: TTM_NAVY }}>
                    Town / city you work in <span style={{ color: TTM_ORANGE }}>*</span>
                  </label>
                  <input
                    name="location"
                    required
                    placeholder="e.g. Glasgow, Edinburgh, Stirling"
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

                {fallbackEmail && (
                  <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 text-sm text-gray-700">
                    <p className="font-bold mb-2" style={{ color: TTM_NAVY }}>
                      If your email app did not open
                    </p>
                    <p className="mb-3">
                      Tap the backup link below, or send the details shown here to techtradiemedia@gmail.com.
                    </p>
                    <a
                      href={fallbackEmail.href}
                      className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-white font-bold"
                      style={{ background: TTM_ORANGE }}
                    >
                      Open Email Again
                    </a>
                    <textarea
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

      {/* ── FOUNDER TRUST STRIP ── */}
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

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 md:py-20 text-white relative overflow-hidden" style={{ background: TTM_NAVY }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(244,121,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(244,121,32,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
        <div className="container max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Oswald', 'Impact', sans-serif" }}>
            Stop Losing Work to Competitors<br />
            <span style={{ color: TTM_ORANGE }}>Who Just Look Better Online</span>
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            It takes 2 minutes. You'll know exactly where you stand within 24 hours.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-10 py-4 rounded-lg font-black text-lg text-white inline-flex items-center gap-2 transition-opacity hover:opacity-90"
            style={{ background: TTM_ORANGE }}
          >
            Request My Free Audit
            <ArrowRight size={20} />
          </button>
          <p className="text-white/40 text-sm mt-6">techtradiemedia@gmail.com · @thetechtradiemedia · Greater Glasgow · Central Scotland · UK-wide remote</p>
        </div>
      </section>

    </Layout>
  );
}
