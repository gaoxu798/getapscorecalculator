import { HeroSection } from "@/components/sections/HeroSection";
import { SubjectsSection } from "@/components/sections/SubjectsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <SubjectsSection />
        <HowItWorksSection />
        <TrustSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
