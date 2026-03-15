"use client";

import {
  BarChart3,
  Cloud,
  CreditCard,
  Database,
  FileText,
  Layers,
  LayoutDashboard,
  Mail,
  Settings2,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";

const featureIcons: LucideIcon[] = [
  Layers,          // 3 Powerful Boilerplates
  Shield,          // Authentication
  Database,        // Database
  CreditCard,      // Payment System
  Sparkles,        // AI Capabilities
  FileText,        // CMS
  Cloud,           // File Storage
  BarChart3,       // Visual Pricing Management
  Mail,            // Email System
  LayoutDashboard, // User Dashboard
  Settings2,       // Admin Dashboard
  TrendingUp,      // Marketing & Growth
];

// Cards that span 2 columns on lg screens (must align to fill 3-col grid)
const wideCards = new Set([0, 5, 10]);

export default function FeaturesGrid() {
  const t = useTranslations("Landing.Features");
  const features: { title: string; description: string }[] = t.raw("items");
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const handleMouseMove = (e: MouseEvent) => {
      const cards = grid.querySelectorAll<HTMLElement>("[data-feature-card]");
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      }
    };

    grid.addEventListener("mousemove", handleMouseMove);
    return () => grid.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
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

        {/* Bento grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = featureIcons[index] || Layers;
            const isWide = wideCards.has(index);

            return (
              <div
                key={feature.title}
                data-feature-card
                className={`group relative cursor-default overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] ${
                  isWide ? "lg:col-span-2" : ""
                }`}
              >
                {/* Mouse-tracking glow */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.07), transparent 40%)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
