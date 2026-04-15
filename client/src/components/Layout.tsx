import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />

      {/* ── STICKY MOBILE CTA BAR ── visible on mobile only, sits above browser chrome */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex items-center gap-3 px-4 py-3 shadow-2xl"
        style={{ background: "#1B3A6B", borderTop: "2px solid #F47920" }}
      >
        <img
          src="/brand/falcon-icon-master.png"
          alt="Tech Tradie Media"
          className="h-8 w-8 flex-shrink-0"
          style={{ objectFit: "contain" }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-white/70 leading-none">Free · No obligation</p>
          <p className="text-xs text-white/50 leading-none mt-0.5">Founding pricing available</p>
        </div>
        <a href="/audit" className="flex-shrink-0">
          <div
            className="px-4 py-2.5 rounded-lg font-black text-sm text-white"
            style={{ background: "#F47920" }}
          >
            Free Audit →
          </div>
        </a>
      </div>

      {/* Spacer so sticky bar doesn't cover page content on mobile */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
}
