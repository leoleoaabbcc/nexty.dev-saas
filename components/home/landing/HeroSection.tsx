"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("common.Home");

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-16">
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

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="mx-auto text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-b from-white via-white/90 to-slate-400 bg-clip-text text-transparent">
            {t("tagLine")}
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
