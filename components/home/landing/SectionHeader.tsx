import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badgeLabel: string;
  badgeText: string;
  title: string;
  description: string;
  className?: string;
}

export default function SectionHeader({
  badgeLabel,
  badgeText,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
        <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-semibold tracking-wide text-indigo-300">
          {badgeLabel}
        </span>
        <span className="text-xs text-slate-400">{badgeText}</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
        {description}
      </p>
    </div>
  );
}
