"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LandingHeader() {
  const t = useTranslations("Home");

  return (
    <header className="relative z-50 w-full">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/bitsfactor.svg"
            alt={siteConfig.name}
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-lg font-semibold tracking-tight text-white">
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
