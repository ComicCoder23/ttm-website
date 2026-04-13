import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-lg">Tech Tradie Media</span>
            </div>
            <p className="text-white/80 text-sm">
              Digital tools for trades that work. Get found, get booked, get paid.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-accent transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-accent transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Trade Website Builds</li>
              <li className="text-white/80">Google Business Optimisation</li>
              <li className="text-white/80">Review Systems</li>
              <li className="text-white/80">Local SEO</li>
              <li className="text-white/80">Social Media Content</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-accent" />
                <a href="tel:07432754561" className="text-white/80 hover:text-accent transition">
                  07432 754561
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:techtradiemedia@gmail.com" className="text-white/80 hover:text-accent transition">
                  techtradiemedia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-white/80">United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>&copy; {currentYear} Tech Tradie Media. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
