import FeatureBadge from "@/components/shared/FeatureBadge";
import Link from "next/link";

export default function BFAbout() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <FeatureBadge label="About" text="BitsFactor" className="mb-8" />
          <h2 className="text-center z-10 text-lg md:text-5xl font-sans font-semibold mb-4">
            <span className="title-gradient">About BitsFactor</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We design practical, user-centric tools for the AI era—boosting efficiency, simplifying workflows, and unlocking new productivity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="rounded-xl border p-6">
            <p className="text-sm text-muted-foreground">Company</p>
            <p className="text-lg font-semibold">BitsFactor</p>
          </div>
          <div className="rounded-xl border p-6">
            <p className="text-sm text-muted-foreground">Website</p>
            <Link href="https://bitsfactor.com" target="_blank" rel="noopener noreferrer nofollow" className="text-lg font-semibold underline underline-offset-4">bitsfactor.com</Link>
          </div>
          <div className="rounded-xl border p-6">
            <p className="text-sm text-muted-foreground">Email</p>
            <Link href="mailto:support@bitsfactor.com" className="text-lg font-semibold">support@bitsfactor.com</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
