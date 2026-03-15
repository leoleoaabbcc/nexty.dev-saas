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

/* Ambient background animation — orbital system + grid + particles */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* ── Ambient gradient orbs ── */}
      <div className="absolute left-1/2 top-[28%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[100px] motion-safe:animate-[aurora_8s_ease-in-out_infinite]" />
      <div className="absolute left-[28%] top-[18%] h-[260px] w-[260px] rounded-full bg-violet-500/15 blur-[80px] motion-safe:animate-[aurora_12s_ease-in-out_infinite_reverse]" />
      <div className="absolute right-[22%] top-[24%] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[90px] motion-safe:animate-[aurora_10s_ease-in-out_infinite]" />

      {/* ── Orbital system ── */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2">
        {/* Core */}
        <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-[0_0_50px_12px_rgba(129,140,248,0.4),0_0_100px_30px_rgba(99,102,241,0.2)] motion-safe:animate-pulse" />

        {/* Ring 1 — 160 px */}
        <div className="absolute -inset-[80px] rounded-full border border-indigo-500/[0.12] motion-safe:animate-[spin_25s_linear_infinite]">
          <div className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-indigo-400/70 shadow-[0_0_8px_2px_rgba(129,140,248,0.5)]" />
        </div>

        {/* Ring 2 — 280 px */}
        <div className="absolute -inset-[140px] rounded-full border border-violet-500/[0.08] motion-safe:animate-[spin_40s_linear_infinite_reverse]">
          <div className="absolute -right-1 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-violet-400/60 shadow-[0_0_6px_2px_rgba(167,139,250,0.4)]" />
          <div className="absolute -left-1 top-[30%] h-1 w-1 rounded-full bg-violet-400/30 shadow-[0_0_5px_1px_rgba(167,139,250,0.2)]" />
        </div>

        {/* Ring 3 — 400 px */}
        <div className="absolute -inset-[200px] rounded-full border border-cyan-500/[0.05] motion-safe:animate-[spin_55s_linear_infinite]">
          <div className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400/40 shadow-[0_0_6px_2px_rgba(34,211,238,0.3)]" />
        </div>
      </div>

      {/* ── Perspective grid ── */}
      <div
        className="absolute inset-x-0 bottom-0 h-[40vh] overflow-hidden"
        style={{ perspective: "400px" }}
      >
        <div
          className="absolute inset-0 motion-safe:animate-[grid-scroll_4s_linear_infinite]"
          style={{
            transformOrigin: "bottom center",
            transform: "rotateX(65deg)",
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ── Floating particles ── */}
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
            backgroundColor: `rgba(${p.g},0.4)`,
            boxShadow: `0 0 ${p.s * 3}px ${p.s}px rgba(${p.g},0.25)`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const t = useTranslations("Home");

  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-4 pt-8 pb-16 sm:min-h-[50vh]">
      {/* Text */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
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
