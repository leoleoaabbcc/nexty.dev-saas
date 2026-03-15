import HeroSection from "./landing/HeroSection";
import ProductsSection from "./landing/ProductsSection";

export default function HomeComponent() {
  return (
    <div
      className="dark relative w-full overflow-hidden"
      style={{ background: "#060B18" }}
    >
      <HeroSection />
      <ProductsSection />
    </div>
  );
}
