import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Audit() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    trade: "",
    website: "",
    phone: "",
    email: "",
    serviceArea: "",
    employees: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTradeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, trade: value }));
  };

  const handleServiceAreaChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceArea: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.businessName || !formData.trade || !formData.phone || !formData.email || !formData.serviceArea) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Audit request submitted! We'll contact you within 24 hours.");
      setFormData({
        name: "",
        businessName: "",
        trade: "",
        website: "",
        phone: "",
        email: "",
        serviceArea: "",
        employees: "",
      });
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Digital Presence Audit</h1>
          <p className="text-xl text-white/90">
            Find out exactly what you need to do to get more customers online – no strings attached.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - What You Get */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">What's in the Audit?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Website Quality Check",
                    desc: "How fast, mobile-friendly, and effective is your current site?",
                  },
                  {
                    title: "Google Business Profile Review",
                    desc: "Is your profile optimized to attract local customers?",
                  },
                  {
                    title: "Reviews & Reputation Score",
                    desc: "How do you stack up against competitors? Are you getting enough positive feedback?",
                  },
                  {
                    title: "Search Visibility Analysis",
                    desc: "How easily do customers find you for key services in your area?",
                  },
                  {
                    title: "Lead Capture System Review",
                    desc: "Are your website visitors turning into actual enquiries?",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle size={24} className="text-accent mt-1" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-secondary rounded-lg border-2 border-accent">
                <h3 className="font-bold text-lg text-primary mb-3">What You'll Get</h3>
                <p className="text-foreground/80 mb-4">
                  You'll receive a straightforward, actionable improvement plan tailored to your business, showing you exactly how to get more jobs.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>✓ Detailed audit report</li>
                  <li>✓ Specific recommendations</li>
                  <li>✓ Priority action items</li>
                  <li>✓ No obligation to hire us</li>
                </ul>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-secondary p-8 rounded-lg border-2 border-accent">
                <h3 className="text-2xl font-bold text-primary mb-6">Get Your Free Audit Now</h3>
                <p className="text-foreground/70 mb-8">
                  Fill out the quick form below, and we'll get to work on your personalized digital audit. It's the first step to getting more work.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <Label htmlFor="name" className="text-foreground font-semibold mb-2 block">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-border"
                      required
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <Label htmlFor="businessName" className="text-foreground font-semibold mb-2 block">
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder="Your Plumbing Co"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="border-border"
                      required
                    />
                  </div>

                  {/* Trade */}
                  <div>
                    <Label htmlFor="trade" className="text-foreground font-semibold mb-2 block">
                      Trade *
                    </Label>
                    <Select value={formData.trade} onValueChange={handleTradeChange}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select your trade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="plumber">Plumber</SelectItem>
                        <SelectItem value="electrician">Electrician</SelectItem>
                        <SelectItem value="builder">Builder</SelectItem>
                        <SelectItem value="roofer">Roofer</SelectItem>
                        <SelectItem value="carpenter">Carpenter</SelectItem>
                        <SelectItem value="joiner">Joiner</SelectItem>
                        <SelectItem value="heating-engineer">Heating Engineer</SelectItem>
                        <SelectItem value="gas-engineer">Gas Engineer</SelectItem>
                        <SelectItem value="boiler-installer">Boiler Installer</SelectItem>
                        <SelectItem value="bathroom-fitter">Bathroom Fitter</SelectItem>
                        <SelectItem value="kitchen-fitter">Kitchen Fitter</SelectItem>
                        <SelectItem value="plasterer">Plasterer</SelectItem>
                        <SelectItem value="bricklayer">Bricklayer</SelectItem>
                        <SelectItem value="groundworker">Groundworker</SelectItem>
                        <SelectItem value="driveway-installer">Driveway Installer</SelectItem>
                        <SelectItem value="landscaper">Landscaper</SelectItem>
                        <SelectItem value="garden-maintenance">Garden Maintenance</SelectItem>
                        <SelectItem value="tree-surgeon">Tree Surgeon</SelectItem>
                        <SelectItem value="fencing-contractor">Fencing Contractor</SelectItem>
                        <SelectItem value="painter-decorator">Painter & Decorator</SelectItem>
                        <SelectItem value="flooring-installer">Flooring Installer</SelectItem>
                        <SelectItem value="tiler">Tiler</SelectItem>
                        <SelectItem value="handyman">Handyman</SelectItem>
                        <SelectItem value="window-installer">Window Installer</SelectItem>
                        <SelectItem value="door-installer">Door Installer</SelectItem>
                        <SelectItem value="solar-installer">Solar Panel Installer</SelectItem>
                        <SelectItem value="security-installer">Security System Installer</SelectItem>
                        <SelectItem value="locksmith">Locksmith</SelectItem>
                        <SelectItem value="drainage-specialist">Drainage Specialist</SelectItem>
                        <SelectItem value="pest-control">Pest Control Services</SelectItem>
                        <SelectItem value="property-maintenance">Property Maintenance</SelectItem>
                        <SelectItem value="cleaning-services">Cleaning Services</SelectItem>
                        <SelectItem value="commercial-cleaning">Commercial Cleaning</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Website */}
                  <div>
                    <Label htmlFor="website" className="text-foreground font-semibold mb-2 block">
                      Website (Optional)
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="www.yourwebsite.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="border-border"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-semibold mb-2 block">
                      Phone *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="07432 754561"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-border"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <Label htmlFor="email" className="text-foreground font-semibold mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@yourcompany.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-border"
                      required
                    />
                  </div>

                  {/* Service Area */}
                  <div>
                    <Label htmlFor="serviceArea" className="text-foreground font-semibold mb-2 block">
                      Service Area (UK Region) *
                    </Label>
                    <Select value={formData.serviceArea} onValueChange={handleServiceAreaChange}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select your service area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="london">London</SelectItem>
                        <SelectItem value="southeast">South East</SelectItem>
                        <SelectItem value="southwest">South West</SelectItem>
                        <SelectItem value="east">East Anglia</SelectItem>
                        <SelectItem value="midlands">Midlands</SelectItem>
                        <SelectItem value="northwest">North West</SelectItem>
                        <SelectItem value="northeast">North East</SelectItem>
                        <SelectItem value="yorkshire">Yorkshire</SelectItem>
                        <SelectItem value="wales">Wales</SelectItem>
                        <SelectItem value="scotland">Scotland</SelectItem>
                        <SelectItem value="northern-ireland">Northern Ireland</SelectItem>
                        <SelectItem value="multiple">Multiple Regions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Number of Employees */}
                  <div>
                    <Label htmlFor="employees" className="text-foreground font-semibold mb-2 block">
                      Number of Employees (Optional)
                    </Label>
                    <Select value={formData.employees} onValueChange={(value) => setFormData((prev) => ({ ...prev, employees: value }))}>
                      <SelectTrigger className="border-border">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solo">Solo (Just Me)</SelectItem>
                        <SelectItem value="2-5">2-5 Employees</SelectItem>
                        <SelectItem value="6-10">6-10 Employees</SelectItem>
                        <SelectItem value="11-20">11-20 Employees</SelectItem>
                        <SelectItem value="20plus">20+ Employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-3 text-lg"
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Audit"}
                  </Button>

                  <p className="text-xs text-foreground/60 text-center">
                    We respect your privacy. We'll only use your information to send you the audit.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How long does the audit take?",
                a: "The audit typically takes 3-5 business days. We'll contact you within 24 hours to confirm receipt of your request.",
              },
              {
                q: "Is there any cost?",
                a: "No! The audit is completely free. There's no obligation to work with us after receiving your report.",
              },
              {
                q: "What if I don't have a website?",
                a: "That's fine! We can still audit your Google Business Profile, reviews, and local search visibility. This helps us understand what you need.",
              },
              {
                q: "How will I receive the audit?",
                a: "We'll send you a detailed report via email with specific recommendations and an action plan tailored to your business.",
              },
              {
                q: "Can I get an audit for multiple locations?",
                a: "Absolutely! Just let us know in the form, and we'll discuss how we can help each location.",
              },
              {
                q: "What happens after the audit?",
                a: "You'll have a clear roadmap. If you'd like help implementing the recommendations, we can discuss our services with no pressure.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-border">
                <h3 className="font-bold text-lg text-primary mb-3">{item.q}</h3>
                <p className="text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
