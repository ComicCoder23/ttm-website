import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center bg-white py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-accent mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Page Not Found</h2>
            <p className="text-lg text-foreground/70 max-w-md mx-auto mb-8">
              Sorry, we couldn't find the page you're looking for. Let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3" asChild>
                Back to Home
              </Button>
            </Link>
            <Link href="/audit">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white font-bold px-8 py-3" asChild>
                Get Free Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
