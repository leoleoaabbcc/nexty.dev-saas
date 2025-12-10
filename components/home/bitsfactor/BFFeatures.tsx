import FeatureBadge from "@/components/shared/FeatureBadge";
import { Check } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  details?: { title: string; description: string }[];
};

const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="w-full py-4">
      <div className="container mx-auto">
        <div className="grid container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div className="flex gap-2 flex-col">
                <h3 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  {feature.description}
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              {feature.details?.map((detail) => (
                <div key={detail.title} className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p>{detail.title}</p>
                    <p className="text-muted-foreground text-sm">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg p-2 border">
            <div className="w-full h-[300px] lg:h-[400px] rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
              BitsFactor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function BFFeatures() {
  const features: Feature[] = [
    {
      title: "Efficiency-first",
      description:
        "User-centric tools that remove friction and make daily work faster.",
      details: [
        { title: "Ready to use", description: "Simple, intuitive, low learning curve." },
        { title: "Workflow optimized", description: "Designed around real tasks and flows." },
        { title: "Reliable", description: "Engineered for production and long-term maintenance." },
      ],
    },
    {
      title: "Cross-device",
      description:
        "Seamless collaboration across devices with secure cloud syncing.",
      details: [
        { title: "Cloud clipboard", description: "ClipboardShare supports 3+ devices." },
        { title: "Encryption", description: "Encrypted content to protect privacy." },
        { title: "Low-latency", description: "Faster cross-device sync." },
      ],
    },
    {
      title: "AI-powered",
      description:
        "Smarter tools and flows built for the AI era.",
      details: [
        { title: "Intelligent assistance", description: "Reduce repetitive steps and speed up work." },
        { title: "Extensible", description: "Room for more AI capabilities." },
        { title: "Evolving", description: "Iterate continuously and stay current." },
      ],
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <FeatureBadge label="Core Principles" text="Focus on efficiency" className="mb-8" />
          <h2 className="text-center z-10 text-lg md:text-5xl font-sans font-semibold mb-4">
            <span className="title-gradient">How BitsFactor improves productivity</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Built around real workflows and user mental models—useful, durable, and sustainable.
          </p>
        </div>
        <div>
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
