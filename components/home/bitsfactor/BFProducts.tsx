import FeatureBadge from "@/components/shared/FeatureBadge";
import { Button } from "@/components/ui/button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Link from "next/link";

type ProductCardProps = {
  name: string;
  description: string;
  priceText: string;
  primaryCta: { label: string; href: string; external?: boolean };
};

const ProductCard = ({ name, description, priceText, primaryCta }: ProductCardProps) => {
  return (
    <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-3xl md:p-3">
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-xs dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
        <div className="space-y-3">
          <h3 className="text-xl lg:text-2xl font-semibold font-sans">{name}</h3>
          <p className="font-sans text-sm md:text-base text-muted-foreground">{description}</p>
          <p className="text-sm font-medium">{priceText}</p>
        </div>
        <div className="flex gap-2">
          <Button asChild className="h-10 px-5">
            <Link href={primaryCta.href} target={primaryCta.external ? "_blank" : undefined} rel={primaryCta.external ? "noopener noreferrer nofollow" : undefined}>
              {primaryCta.label}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function BFProducts() {
  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <FeatureBadge label="Products" text="Practical tools for real scenarios" className="mb-8" />
          <h2 className="text-center z-10 text-lg md:text-5xl font-sans font-semibold mb-4">
            <span className="title-gradient">BitsFactor Products</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Simple, secure and reliable tools to help you get work done faster.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <ProductCard
            name="BitsFactor Community Donation"
            description="Support BitsFactor with a one-time $1 donation to sustain the community and ongoing development."
            priceText="$1 one-time"
            primaryCta={{ label: "Support", href: "#pricing" }}
          />
          <ProductCard
            name="ClipboardShare Pro Subscription"
            description="Use the cloud clipboard across 3+ devices with encrypted content for secure, seamless sharing."
            priceText="$3/month"
            primaryCta={{ label: "Visit ClipboardShare.com", href: "https://clipboardshare.com", external: true }}
          />
        </div>
      </div>
    </section>
  );
}
