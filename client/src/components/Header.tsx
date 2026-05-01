import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo — desktop: horizontal master, mobile: falcon icon */}
        <Link href="/">
          <div className="flex items-center hover:opacity-90 transition cursor-pointer">
            {/* Desktop: horizontal wordmark */}
            <img
              src="/brand/ttm-horizontal-master.png"
              alt="Tech Tradie Media"
              className="hidden md:block h-14 w-auto"
            />
            {/* Mobile: falcon icon only */}
            <img
              src="/brand/falcon-icon-master.png"
              alt="Tech Tradie Media"
              className="block md:hidden h-12 w-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-accent transition font-medium">
            Home
          </Link>
          <Link href="/services" className="text-foreground hover:text-accent transition font-medium">
            Services
          </Link>
          <Link href="/social-media" className="text-foreground hover:text-accent transition font-medium">
            Content
          </Link>
          <Link href="/about" className="text-foreground hover:text-accent transition font-medium">
            About
          </Link>
          <Link href="/contact" className="text-foreground hover:text-accent transition font-medium">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/447432754561"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            Message Us
          </a>
          <Link href="/audit">
            <Button className="bg-accent hover:bg-orange-600 text-white font-bold px-6 py-2" asChild>
              Free Audit
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-secondary">
          <div className="container max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-foreground hover:text-accent transition font-medium py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-accent transition font-medium py-2" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/social-media" className="text-foreground hover:text-accent transition font-medium py-2" onClick={() => setIsOpen(false)}>
              Content
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition font-medium py-2" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition font-medium py-2" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <a
              href="https://wa.me/447432754561"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-full text-sm font-bold text-white text-center transition-opacity hover:opacity-90"
              style={{ background: "#25D366" }}
              onClick={() => setIsOpen(false)}
            >
              Message Us on WhatsApp
            </a>
            <Link href="/audit">
              <Button className="w-full bg-accent hover:bg-orange-600 text-white font-bold" asChild onClick={() => setIsOpen(false)}>
                Free Audit
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
