import Layout from "@/components/Layout";
import { PageMeta } from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Target, Users, Zap } from "lucide-react";

export default function About() {
  const aboutHeroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425723798/PkcYgtviR6pkuFobXP578T/ttm-about-tradie-working-PaNNPFSzLutJVRHcEpy66f.webp";
  
  return (
    <Layout>
      <PageMeta
        title="About — Tech Tradie Media"
        description="Built to help UK trades get more enquiries and more work. Practical digital tools, honest advice — no corporate jargon."
      />

      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHeroImage}
            alt="Skilled tradesperson at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          {/* Horizontal master in hero overlay */}
          <img
            src="/brand/ttm-horizontal-master.png"
            alt="Tech Tradie Media"
            className="h-10 w-auto mb-5"
            style={{ objectFit: "contain" }}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Tech Tradie Media</h1>
          <p className="text-xl text-white/90">Built to help trades get more enquiries and more work.</p>
        </div>
      </section>

      {/* Why I Built This Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            {/* Founder credibility — roundel stamp beside heading */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Why I Built This</h2>
              <img
                src="/brand/ttm-roundel-master.png"
                alt="Tech Tradie Media"
                className="h-10 w-auto flex-shrink-0"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                I've spent time around trades and seen how hard people graft day in, day out.
              </p>
              <p>
                Good trades doing solid work — but still losing jobs simply because they're not visible online.
              </p>
              <p>
                At the same time, I've had to rebuild things in my own life and focus on what actually works.
              </p>
              <p>
                That pushed me to keep things simple and practical.
              </p>
              <p className="font-semibold text-primary">
                No fluff. No overcomplication.
              </p>
              <p>
                Just systems that help trades take the work they're already doing and turn it into more enquiries.
              </p>
              <p className="font-semibold text-primary">
                Built around real work. Designed to get results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Target size={48} className="text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">What We Do</h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              We help UK trades businesses get more enquiries, more quotes, and more work through practical digital systems that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">How We Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Practical",
                desc: "Solutions that just work. No corporate jargon, just straightforward systems that get results.",
              },
              {
                icon: Heart,
                title: "Honest",
                desc: "We tell you what's working and what isn't. Transparent advice, real results.",
              },
              {
                icon: Target,
                title: "Results-Focused",
                desc: "Our success is measured by your increased jobs and revenue. That's what matters.",
              },
              {
                icon: Users,
                title: "Trade-Focused",
                desc: "We speak your language. We understand your world and what it takes to grow.",
              },
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon size={32} className="text-accent" />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground/70">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">Why Choose Tech Tradie Media?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "We Understand Your World",
                desc: "We're not corporate marketers. We understand the trades, the challenges you face, and what it takes to run a successful trades business.",
              },
              {
                title: "Proven Results",
                desc: "Our clients see real results. On average, they get more enquiries and more work within the first few months of working with us.",
              },
              {
                title: "Practical Solutions",
                desc: "We don't overcomplicate things. Our solutions are straightforward, effective, and designed to work for your specific trade.",
              },
              {
                title: "Dedicated Support",
                desc: "You get a team that's invested in your success. We're here to help you grow your business.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden fees, no surprises. We're upfront about what things cost and what you can expect.",
              },
              {
                title: "Local Expertise",
                desc: "We specialise in local search and Google Business optimisation – the channels that actually bring trades businesses new customers.",
              },
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-accent text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">{reason.title}</h3>
                  <p className="text-foreground/70">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          {/* Roundel brand stamp above CTA */}
          <div className="flex justify-center mb-6">
            <img
              src="/brand/ttm-roundel-master.png"
              alt="Tech Tradie Media"
              className="h-16 w-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get More Work?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Start with a free digital audit. We'll show you exactly what's holding your business back online and how we can help.
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
