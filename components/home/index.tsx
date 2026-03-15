import HeroSection, { AmbientBackground } from "./landing/HeroSection";
import LandingHeader from "./landing/LandingHeader";
import ProductsSection from "./landing/ProductsSection";
import Link from "next/link";

export default function HomeComponent() {
  return (
    <div
      className="dark relative w-full overflow-hidden"
      style={{ background: "#060B18" }}
    >
      {/* Full-page ambient animation background */}
      <AmbientBackground />

      {/* Header */}
      <LandingHeader />

      {/* Hero */}
      <HeroSection />

      {/* Products */}
      <ProductsSection />

      {/* Footer */}
      <footer className="relative border-t border-white/[0.06] py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <span className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} BitsFactor
          </span>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-slate-300"
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy
            </Link>
            <Link
              href="/refund-policy"
              className="transition-colors hover:text-slate-300"
            >
              Refund
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
