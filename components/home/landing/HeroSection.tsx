"use client";

import { Button } from "@/components/ui/button";
import { Link as I18nLink } from "@/i18n/routing";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("Landing.Hero");

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16">
      {/* Aurora gradient blobs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-[15%] -top-[30%] h-[600px] w-[600px] rounded-full bg-indigo-600/20 blur-[128px] motion-safe:animate-[aurora_8s_ease-in-out_infinite]" />
        <div className="absolute -bottom-[20%] -right-[15%] h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[128px] motion-safe:animate-[aurora_12s_ease-in-out_infinite_reverse]" />
        <div className="absolute right-[20%] top-[10%] h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[100px] motion-safe:animate-[aurora_10s_ease-in-out_infinite]" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <a
          href={t("badge.href")}
          className="group mb-8 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10"
        >
          <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-xs font-semibold tracking-wide text-indigo-300">
            {t("badge.label")}
          </span>
          <span className="text-sm text-slate-300">{t("badge.text")}</span>
          <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5" />
        </a>

        {/* Title */}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-b from-white via-white/90 to-slate-400 bg-clip-text text-transparent">
            {t("title")}
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
          {t("description")}
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 cursor-pointer rounded-xl border-0 bg-gradient-to-r from-indigo-600 to-violet-600 px-8 text-white shadow-[0_0_32px_rgba(99,102,241,0.25)] transition-all duration-300 hover:from-indigo-500 hover:to-violet-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]"
          >
            <I18nLink
              href={t("getStartedLink") || "#"}
              className="flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4" />
              {t("getStarted")}
            </I18nLink>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 cursor-pointer rounded-xl border-white/10 bg-white/5 px-8 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <I18nLink
              href={t("viewDocsLink") || "#"}
              className="flex items-center gap-2"
            >
              {t("viewDocs")}
              <ArrowRight className="h-4 w-4" />
            </I18nLink>
          </Button>
        </div>

        {/* Tech stack badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
          {[
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Stripe",
            "AI SDK",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/5 bg-white/[0.03] px-3 py-1 text-xs text-slate-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
