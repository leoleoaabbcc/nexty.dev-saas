"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LandingHeader() {
  const t = useTranslations("Home");

  return (
    <header className="relative z-50 w-full">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo — gradient text */}
        <Link href="/" className="flex items-center">
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-xl font-bold tracking-tight text-transparent">
            {siteConfig.name}
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="#products"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            {t("productsNav")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
