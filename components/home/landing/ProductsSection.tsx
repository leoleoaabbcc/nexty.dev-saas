import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import { Brain, Clipboard } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import type { LucideIcon } from "lucide-react";

interface ProductCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  cta: { label: string; href: string };
}

function ProductCard({ icon: Icon, name, description, cta }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.05]">
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at 50% 50%, rgba(99,102,241,0.08), transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500/15">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-semibold text-white">{name}</h3>
          <p className="text-base leading-relaxed text-slate-400">
            {description}
          </p>
        </div>
        <div>
          <Button
            asChild
            className="h-10 cursor-pointer rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 text-white shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300 hover:from-indigo-500 hover:to-violet-500 hover:shadow-[0_0_28px_rgba(99,102,241,0.3)]"
          >
            <Link
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {cta.label}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default async function ProductsSection() {
  const t = await getTranslations("Landing.Products");

  return (
    <section id="products" className="relative py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badgeLabel={t("badge.label")}
          badgeText={t("badge.text")}
          title={t("title")}
          description={t("description")}
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ProductCard
            icon={Brain}
            name={t("aiGateway.name")}
            description={t("aiGateway.description")}
            cta={{
              label: t("aiGateway.cta"),
              href: "https://api.develop.cc/static/api.html",
            }}
          />
          <ProductCard
            icon={Clipboard}
            name={t("clipboardShare.name")}
            description={t("clipboardShare.description")}
            cta={{
              label: t("clipboardShare.cta"),
              href: "https://www.clipboardshare.com/",
            }}
          />
        </div>
      </div>
    </section>
  );
}
