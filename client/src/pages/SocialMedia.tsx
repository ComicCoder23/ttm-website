import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Share2, Check, ArrowRight, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function SocialMedia() {
  const socialHeroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663425723798/PkcYgtviR6pkuFobXP578T/ttm-social-media-digital-dFTwpHsH9ZfwNeg9QTQVsN.webp";
  
  const packages = [
    {
      name: "Bronze",
      description: "Perfect for getting started",
      price: "£349",
      features: [
        "10 ready-to-post social media posts",
        "Captions written to attract enquiries",
        "Local keywords included in each post",
        "Calls to action in every post",
        "Ideal for first-time social media users",
      ],
      cta: "Get Started with Bronze",
      highlighted: false,
    },
    {
      name: "Silver",
      description: "Build your brand presence",
      price: "£549",
      features: [
        "Everything in Bronze",
        "Branded post templates",
        "Cover photo refresh",
        "Logo refresh or simple logo creation",
        "Professional brand consistency",
      ],
      cta: "Explore Silver Package",
      highlighted: false,
    },
    {
      name: "Gold",
      description: "Maximum visibility and reach",
      price: "£849",
      features: [
        "Everything in Silver",
        "Posting and scheduling support",
        "Optimal posting times for better reach",
        "Content calendar provided",
        "Rollout across Facebook and Instagram",
        "Monthly performance review",
      ],
      cta: "Choose Gold Package",
      highlighted: true,
    },
    {
      name: "Platinum",
      description: "Complete social media solution",
      price: "£1,249",
      features: [
        "Everything in Gold",
        "WhatsApp click-to-message setup",
        "Facebook Messenger auto-reply setup",
        "Review graphics and review funnel support",
        "Optional TikTok rollout",
        "Profile optimisation for lead generation",
        "Priority support",
      ],
      cta: "Get Full Platinum Suite",
      highlighted: false,
    },
  ];

  const addOns = [
    "Extra posts (per month)",
    "Branding pack",
    "Cover photo design",
    "Logo creation",
    "Instagram setup and optimisation",
    "TikTok setup and optimisation",
    "Review graphics pack",
    "Pinned post setup",
    "Facebook bio optimisation",
    "WhatsApp integration",
    "Monthly content management",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={socialHeroImage}
            alt="Tradesperson with smartphone showing digital presence"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="container max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Most Trades Don't Need More Work — They Need to Be Seen More</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            We turn your real work into consistent content that keeps your business visible and brings in more enquiries. No more guessing what to post—we handle it all.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Why Social Media Matters for Your Trade</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Too busy to post regularly",
              "Your work isn't being seen",
              "Inconsistent posting makes your business look inactive",
              "Missing out on local enquiries",
              "Competitors look more visible online",
              "Don't know what to post or how to write captions",
            ].map((problem, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100">
                    <span className="text-red-600 font-bold">×</span>
                  </div>
                </div>
                <p className="text-foreground/80 text-lg">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">How We Solve It</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "We turn your real jobs into structured posts",
              "We write captions designed to attract enquiries",
              "We keep your business active and visible",
              "We help turn views into messages and quote requests",
              "We handle the strategy so you focus on work",
              "We optimise for local searches and engagement",
            ].map((solution, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                    <Check size={20} className="text-green-600" />
                  </div>
                </div>
                <p className="text-foreground/80 text-lg">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* This Is For You If Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">This Is For You If</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              "You're a trades business with real work to show",
              "You want to be more visible on social media",
              "You don't have time to manage social media yourself",
              "You want consistent content that brings enquiries",
              "You want to build trust and credibility online",
              "You're ready to turn visibility into real jobs",
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/20">
                    <Check size={20} className="text-accent" />
                  </div>
                </div>
                <p className="text-foreground/80 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Send Your Photos",
                description: "Share photos of your work or we use content from your existing website",
              },
              {
                step: "2",
                title: "We Create Posts",
                description: "We turn your work into branded posts with captions designed to attract enquiries",
              },
              {
                step: "3",
                title: "You Get Visible",
                description: "You post them or we help schedule them—either way, your business stays visible",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Offer */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Start Simple</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-accent mb-6">10 Ready-to-Post Posts</h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
              A simple starter pack using your existing job photos to get your business visible quickly. Perfect for trades just getting started with social media.
            </p>
            <Link href="/audit">
              <Button className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg">
                Get Your First 10 Posts
              </Button>
            </Link>
            <p className="text-foreground/70 mt-4">Start simple. Get visible. Build from there.</p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Choose Your Package</h2>
          <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto mb-12">
            All packages include professional content creation, captions, and local keyword optimisation. Locked pricing, no surprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-lg overflow-hidden flex flex-col ${
                  pkg.highlighted
                    ? "bg-white border-4 border-accent shadow-xl transform md:scale-105"
                    : "bg-white border-2 border-border"
                }`}
              >
                {pkg.highlighted && (
                  <div className="bg-accent text-white py-2 text-center font-bold">Most Popular</div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{pkg.description}</p>
                  <p className="text-2xl font-bold text-accent mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/audit">
                    <Button
                      className={`w-full font-bold py-2 ${
                        pkg.highlighted
                          ? "bg-accent hover:bg-orange-600 text-white"
                          : "bg-primary hover:bg-blue-800 text-white"
                      }`}
                    >
                      {pkg.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Add-Ons & Extras</h2>
          <p className="text-lg text-foreground/80 text-center max-w-2xl mx-auto mb-12">
            Customise your package with these optional add-ons to get exactly what your business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-secondary rounded-lg border border-border">
                <Check size={20} className="text-accent flex-shrink-0" />
                <span className="text-foreground/80">{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Strategy */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Platform Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Facebook,
                name: "Facebook",
                description: "Your main platform for local enquiries. Where your customers are looking for local trades.",
              },
              {
                icon: Instagram,
                name: "Instagram",
                description: "Show your work and build trust. Before-and-after photos and project showcases work best.",
              },
              {
                icon: MessageCircle,
                name: "TikTok (Optional)",
                description: "Reach younger audiences and increase visibility. Optional but increasingly important for local reach.",
              },
            ].map((platform, idx) => {
              const Icon = platform.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg border-2 border-border text-center">
                  <Icon size={48} className="text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">{platform.name}</h3>
                  <p className="text-foreground/80">{platform.description}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-foreground/80 mt-8 text-lg">
            <strong>Key Point:</strong> Not every trade needs every platform. We help you focus on what works for your business.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get More Enquiries from Social Media?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Let's start with a free consultation to understand your business and show you exactly how social media can bring you more jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/audit">
              <Button className="bg-accent hover:bg-orange-600 text-white font-bold px-8 py-3 text-lg">
                <span className="flex items-center gap-2">
                  Get Your Free Consultation
                  <ArrowRight size={20} />
                </span>
              </Button>
            </Link>
            <a href="tel:07432754561" className="inline-block">
              <Button className="bg-white hover:bg-gray-100 text-primary font-bold px-8 py-3 text-lg">
                Call Us: 07432 754561
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
