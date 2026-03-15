"use client";

import { useTranslations } from "next-intl";

const particles = [
  { x: 10, y: 15, s: 2, d: 0, t: 6, g: "129,140,248" },
  { x: 25, y: 70, s: 1.5, d: 1.5, t: 7, g: "34,211,238" },
  { x: 45, y: 22, s: 2.5, d: 0.8, t: 5, g: "167,139,250" },
  { x: 60, y: 55, s: 1, d: 2.3, t: 8, g: "129,140,248" },
  { x: 78, y: 35, s: 2, d: 3.1, t: 6, g: "34,211,238" },
  { x: 88, y: 78, s: 1.5, d: 0.5, t: 7, g: "167,139,250" },
  { x: 15, y: 48, s: 2, d: 4.2, t: 5.5, g: "129,140,248" },
  { x: 35, y: 85, s: 1, d: 1.8, t: 6.5, g: "34,211,238" },
  { x: 55, y: 8, s: 2.5, d: 2.7, t: 7.5, g: "167,139,250" },
  { x: 82, y: 62, s: 1.5, d: 0.3, t: 5, g: "129,140,248" },
  { x: 5, y: 88, s: 2, d: 3.5, t: 8, g: "34,211,238" },
  { x: 68, y: 12, s: 1, d: 1.1, t: 6, g: "167,139,250" },
  { x: 42, y: 42, s: 1.5, d: 2.0, t: 7, g: "129,140,248" },
  { x: 92, y: 45, s: 2, d: 4.0, t: 5.5, g: "34,211,238" },
];

export default function HeroSection() {
  const t = useTranslations("common.Home");

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden pb-20">
      {/* ── Ambient gradient orbs ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[32%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/25 blur-[100px] motion-safe:animate-[aurora_8s_ease-in-out_infinite]" />
        <div className="absolute left-[28%] top-[22%] h-[300px] w-[300px] rounded-full bg-violet-500/20 blur-[80px] motion-safe:animate-[aurora_12s_ease-in-out_infinite_reverse]" />
        <div className="absolute right-[22%] top-[28%] h-[350px] w-[350px] rounded-full bg-cyan-500/15 blur-[90px] motion-safe:animate-[aurora_10s_ease-in-out_infinite]" />
      </div>

      {/* ── Orbital system ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        {/* Core */}
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 shadow-[0_0_60px_15px_rgba(129,140,248,0.5),0_0_120px_40px_rgba(99,102,241,0.25)] motion-safe:animate-pulse" />

        {/* Ring 1 — 200 px */}
        <div className="absolute -inset-[100px] rounded-full border border-indigo-500/[0.15] motion-safe:animate-[spin_25s_linear_infinite]">
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-indigo-400/80 shadow-[0_0_10px_3px_rgba(129,140,248,0.6)]" />
        </div>

        {/* Ring 2 — 340 px */}
        <div className="absolute -inset-[170px] rounded-full border border-violet-500/[0.10] motion-safe:animate-[spin_40s_linear_infinite_reverse]">
          <div className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-violet-400/70 shadow-[0_0_8px_2px_rgba(167,139,250,0.5)]" />
          <div className="absolute -left-1 top-[30%] h-1 w-1 rounded-full bg-violet-400/40 shadow-[0_0_6px_2px_rgba(167,139,250,0.3)]" />
        </div>

        {/* Ring 3 — 500 px */}
        <div className="absolute -inset-[250px] rounded-full border border-cyan-500/[0.06] motion-safe:animate-[spin_55s_linear_infinite]">
          <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-400/50 shadow-[0_0_8px_2px_rgba(34,211,238,0.4)]" />
        </div>
      </div>

      {/* ── Perspective grid ── */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[50vh] overflow-hidden"
        style={{ perspective: "400px" }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 motion-safe:animate-[grid-scroll_4s_linear_infinite]"
          style={{
            transformOrigin: "bottom center",
            transform: "rotateX(65deg)",
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 65%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Floating particles ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full motion-safe:animate-float"
            style={{
              width: p.s,
              height: p.s,
              left: `${p.x}%`,
              top: `${p.y}%`,
              animationDelay: `${p.d}s`,
              animationDuration: `${p.t}s`,
              backgroundColor: `rgba(${p.g},0.5)`,
              boxShadow: `0 0 ${p.s * 4}px ${p.s}px rgba(${p.g},0.35)`,
            }}
          />
        ))}
      </div>

      {/* ── Text ── */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-b from-white via-white/90 to-slate-400 bg-clip-text text-transparent">
            {t("tagLine")}
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500 md:text-lg">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
