import { Button } from "@/components/ui/button";
import { Link as I18nLink } from "@/i18n/routing";

export default function BFHero() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-6 py-16 lg:py-24 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col max-w-3xl">
            <h1 className="text-center z-10 text-4xl md:text-6xl font-sans font-bold">
              <span className="title-gradient">Tools for the AI era</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground text-center">
              BitsFactor builds practical, user-centric tools that streamline workflows and unlock productivity.
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Button asChild className="h-11 rounded-xl px-6 py-2">
              <I18nLink href="#pricing" className="flex items-center gap-2">
                View pricing
              </I18nLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
