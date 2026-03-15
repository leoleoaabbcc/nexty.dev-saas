"use client";

import { Button } from "@/components/ui/button";
import { Link as I18nLink } from "@/i18n/routing";
import { ArrowRight, Gift, Globe, Rocket, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import type { LucideIcon } from "lucide-react";

const featureIcons: LucideIcon[] = [Rocket, Zap, Gift, Globe];
const featureKeys = ["deploy", "production", "updates", "i18n"] as const;

export default function CTASection() {
  const t = useTranslations("Landing.CTA");

  return (
    <section className="relative py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-12 text-center md:p-16">
          {/* Background glow */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">
                {t("title")}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
              {t("description")}
            </p>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="h-12 cursor-pointer rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 text-white shadow-[0_0_32px_rgba(99,102,241,0.25)] transition-all duration-300 hover:from-indigo-500 hover:to-violet-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.35)]"
              >
                <I18nLink
                  href="/#pricing"
                  className="flex items-center gap-2"
                >
                  {t("button")}
                  <ArrowRight className="h-4 w-4" />
                </I18nLink>
              </Button>
            </div>

            <p className="mt-8 text-sm text-slate-500">{t("trustText")}</p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
              {featureKeys.map((key, i) => {
                const Icon = featureIcons[i];
                const text = t(`features.${key}`);
                // Strip leading emojis from i18n text
                const label = text.replace(
                  /^[\p{Emoji_Presentation}\p{Extended_Pictographic}\s]+/u,
                  ""
                );
                return (
                  <span
                    key={key}
                    className="flex items-center gap-1.5 text-sm text-slate-400"
                  >
                    <Icon className="h-3.5 w-3.5 text-indigo-400" />
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
