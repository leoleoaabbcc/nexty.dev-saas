import HeroSection, { AmbientBackground } from "./landing/HeroSection";
import LandingFooter from "./landing/LandingFooter";
import LandingHeader from "./landing/LandingHeader";
import ProductsSection from "./landing/ProductsSection";

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

      {/* Footer with policy dialogs */}
      <LandingFooter />
    </div>
  );
}
