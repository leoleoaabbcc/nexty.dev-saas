import FeatureBadge from "@/components/shared/FeatureBadge";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Brain, Clipboard } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { LucideIcon } from "lucide-react";

type ProductCardProps = {
  icon: LucideIcon;
  name: string;
  description: string;
  primaryCta: { label: string; href: string; external?: boolean };
};

const ProductCard = ({ icon: Icon, name, description, primaryCta }: ProductCardProps) => (
  <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-3xl md:p-3">
    <GlowingEffect spread={40} glow disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-xs dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
      <div className="space-y-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl lg:text-2xl font-semibold font-sans">{name}</h3>
        <p className="font-sans text-sm md:text-base text-muted-foreground">{description}</p>
      </div>
      <div className="flex gap-2">
        <Button asChild className="h-10 px-5 cursor-pointer">
          <Link
            href={primaryCta.href}
            target={primaryCta.external ? "_blank" : undefined}
            rel={primaryCta.external ? "noopener noreferrer nofollow" : undefined}
          >
            {primaryCta.label}
          </Link>
        </Button>
      </div>
    </div>
  </div>
);

export default async function BFProducts() {
  const t = await getTranslations("Landing.Products");
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <FeatureBadge label={t("badge.label")} text={t("badge.text")} className="mb-8" />
          <h2 className="text-center z-10 text-lg md:text-5xl font-sans font-semibold mb-4">
            <span className="title-gradient">{t("title")}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <ProductCard
            icon={Brain}
            name={t("aiGateway.name")}
            description={t("aiGateway.description")}
            primaryCta={{ label: t("aiGateway.cta"), href: "https://api.develop.cc/static/api.html", external: true }}
          />
          <ProductCard
            icon={Clipboard}
            name={t("clipboardShare.name")}
            description={t("clipboardShare.description")}
            primaryCta={{ label: t("clipboardShare.cta"), href: "https://www.clipboardshare.com/", external: true }}
          />
        </div>
      </div>
    </section>
  );
}
