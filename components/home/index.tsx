import BFHero from "@/components/home/bitsfactor/BFHero";
import Pricing from "@/components/home/PricingAll";
import { getMessages } from "next-intl/server";

export default async function HomeComponent() {
  const messages = await getMessages();

  return (
    <div className="w-full">
      <BFHero />

      <Pricing />
    </div>
  );
}
