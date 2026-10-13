"use client";

import { Pricing, type PricingPlan } from "@/components/ui/pricing";

export const aorenPricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "1200",
    yearlyPrice: "960",
    period: "month",
    features: [
      "Single creative direction",
      "1 finished high-res asset",
      "Platform-ready cutdown delivery",
      "2 focused revision rounds",
      "Commercial usage rights",
    ],
    description: "Ideal for early-stage brands launching a focused campaign.",
    buttonText: "Schedule a Meeting",
    href: "#contact",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "2800",
    yearlyPrice: "2240",
    period: "month",
    features: [
      "Expanded creative direction",
      "3 finished premium assets",
      "Multiple social aspect ratios (9:16, 16:9, 1:1)",
      "2 focused revision rounds",
      "Priority production timeline",
      "Dedicated Slack communication",
    ],
    description: "Designed for ambitious growth brands running multi-channel ads.",
    buttonText: "Schedule a Meeting",
    href: "#contact",
    isPopular: false,
  },
  {
    name: "MAX",
    price: "4900",
    yearlyPrice: "3920",
    period: "month",
    features: [
      "Comprehensive campaign concept & narrative",
      "6 finished multi-format video & image assets",
      "Full variation set for A/B creative testing",
      "Platform-specific hooks & CTAs",
      "Priority production timeline",
      "Dedicated creative partner",
    ],
    description: "Our highest output partnership for scale-ready campaigns.",
    buttonText: "Schedule a Meeting",
    href: "#contact",
    isPopular: true,
    popularLabel: "Best Value",
  },
  {
    name: "Custom",
    price: "0",
    yearlyPrice: "0",
    period: "custom",
    features: [
      "Tailored production scope",
      "Ongoing monthly content systems",
      "Custom AI model fine-tuning & brand styling",
      "Full omnichannel campaign rollout",
      "Direct creative director partnership",
    ],
    description: "Enterprise and bespoke solutions tailored to your brand roadmap.",
    buttonText: "Schedule a Meeting",
    href: "#contact",
    isPopular: false,
    isCustom: true,
    customPriceLabel: "Let’s talk",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative w-full bg-navy/45 py-20 sm:py-28 overflow-hidden">
      <Pricing
        plans={aorenPricingPlans}
        eyebrow="Pricing"
        title="Choose a starting point."
        description="Indicative studio packages for video and image advertising. Flexible retainers and custom scopes available."
      />
    </section>
  );
}

export { PricingSection as Pricing };
