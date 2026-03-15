import SectionHeader from "./SectionHeader";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Brain,
  Clipboard,
  Monitor,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

/* ── AI Gateway mock terminal ── */
function GatewayVisual() {
  return (
    <div className="relative h-52 overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-indigo-950/80 to-slate-900/80 p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.07] to-transparent" />

      {/* Terminal dots */}
      <div className="relative flex items-center gap-1.5 mb-3">
        <div className="h-2 w-2 rounded-full bg-red-400/50" />
        <div className="h-2 w-2 rounded-full bg-yellow-400/50" />
        <div className="h-2 w-2 rounded-full bg-green-400/50" />
        <span className="ml-2 font-mono text-[10px] text-slate-500">
          api.develop.cc
        </span>
      </div>

      {/* Code */}
      <div className="relative font-mono text-[11px] leading-5 select-none">
        <div className="text-green-400/80">
          POST <span className="text-slate-400">/v1/chat/completions</span>
        </div>
        <div className="mt-1.5 text-slate-500">{"{"}</div>
        <div className="ml-4 text-slate-400">
          &quot;model&quot;:{" "}
          <span className="text-cyan-400/80">&quot;gpt-4o&quot;</span>,
        </div>
        <div className="ml-4 text-slate-400">
          &quot;stream&quot;:{" "}
          <span className="text-amber-400/80">true</span>,
        </div>
        <div className="ml-4 text-slate-400">
          &quot;messages&quot;: <span className="text-slate-500">[...]</span>
        </div>
        <div className="text-slate-500">{"}"}</div>
      </div>

      {/* Model badges */}
      <div className="absolute bottom-3 right-3 flex flex-wrap justify-end gap-1.5">
        {["GPT", "Claude", "Gemini", "DeepSeek", "Grok"].map((m) => (
          <span
            key={m}
            className="rounded bg-white/[0.06] px-1.5 py-0.5 text-[9px] text-slate-400"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── ClipboardShare device sharing visual ── */
function ClipboardVisual() {
  return (
    <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-violet-950/80 to-slate-900/80 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.07] to-transparent" />

      <div className="relative flex items-center gap-5">
        {/* Laptop */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex h-16 w-22 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
            <Monitor className="h-6 w-6 text-slate-400/70" />
          </div>
          <span className="text-[10px] text-slate-500">Desktop</span>
        </div>

        {/* Connection */}
        <div className="flex flex-col items-center gap-1">
          <div className="h-px w-16 bg-gradient-to-r from-violet-400/40 via-cyan-400/30 to-violet-400/40" />
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1">
            <Clipboard className="h-3 w-3 text-violet-400/70" />
            <span className="font-mono text-[9px] text-slate-400">
              one URL
            </span>
          </div>
          <div className="h-px w-16 bg-gradient-to-r from-violet-400/40 via-cyan-400/30 to-violet-400/40" />
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex h-16 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
            <Smartphone className="h-6 w-6 text-slate-400/70" />
          </div>
          <span className="text-[10px] text-slate-500">Mobile</span>
        </div>
      </div>

      {/* Floating content blocks */}
      <div className="absolute left-4 top-4 flex gap-1">
        <div className="h-1.5 w-8 rounded-full bg-violet-400/20" />
        <div className="h-1.5 w-5 rounded-full bg-cyan-400/15" />
      </div>
      <div className="absolute bottom-4 right-4 flex gap-1">
        <div className="h-1.5 w-6 rounded-full bg-cyan-400/15" />
        <div className="h-1.5 w-10 rounded-full bg-violet-400/20" />
      </div>
    </div>
  );
}

/* ── Product card ── */
interface ProductCardProps {
  visual: React.ReactNode;
  name: string;
  description: string;
  cta: { label: string; href: string };
}

function ProductCard({ visual, name, description, cta }: ProductCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]">
      {/* Visual */}
      <div className="p-3 pb-0">{visual}</div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-5 p-6 pt-5">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-white">{name}</h3>
          <p className="text-sm leading-relaxed text-slate-400">
            {description}
          </p>
        </div>
        <Button
          asChild
          variant="outline"
          className="w-fit cursor-pointer rounded-lg border-white/10 bg-white/[0.04] text-slate-200 transition-all hover:border-white/20 hover:bg-white/[0.08]"
        >
          <Link href={cta.href} target="_blank" rel="noopener noreferrer">
            {cta.label}
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

/* ── Section ── */
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
            visual={<GatewayVisual />}
            name={t("aiGateway.name")}
            description={t("aiGateway.description")}
            cta={{
              label: t("aiGateway.cta"),
              href: "https://api.develop.cc",
            }}
          />
          <ProductCard
            visual={<ClipboardVisual />}
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
