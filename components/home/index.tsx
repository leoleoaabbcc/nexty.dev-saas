import FAQ from "./FAQ";
import CTASection from "./landing/CTASection";
import FeaturesGrid from "./landing/FeaturesGrid";
import HeroSection from "./landing/HeroSection";
import Pricing from "./Pricing";
import { getTranslations } from "next-intl/server";

export default async function HomeComponent() {
  const t = await getTranslations("Landing.Pricing");

  return (
    <div
      className="dark relative w-full overflow-hidden"
      style={{ background: "#060B18" }}
    >
      <HeroSection />
      <FeaturesGrid />

      {/* Pricing Section */}
      <div className="relative pt-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-semibold tracking-wide text-indigo-300">
                {t("badge.label")}
              </span>
              <span className="text-xs text-slate-400">{t("badge.text")}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              {t("description")}
            </p>
          </div>
        </div>
        <Pricing />
      </div>

      <FAQ />
      <CTASection />
    </div>
  );
}
