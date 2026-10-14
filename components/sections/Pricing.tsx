"use client";

import { Pricing, type PricingPlan } from "@/components/ui/pricing";

export const aorenPricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "199",
    period: "package",
    whatsappMessage:
      "Hi AORÈN! I'm interested in the Basic package ($199): 8 static ads + 4 video ads. I'd like to schedule a meeting to discuss my brand and campaign.",
    features: [
      "8 premium static ads",
      "4 high-quality video ads (9:16)",
      "Platform-specific CTAs",
      "Platform-ready cutdown delivery",
      "Priority production timeline",
      "2 focused revision rounds",
      "Commercial usage rights",
    ],
    description: "Ideal for early-stage brands launching a focused campaign.",
    buttonText: "Schedule a Meeting",
    isPopular: false,
  },
  {
    name: "Pro",
    price: "399",
    period: "package",
    whatsappMessage:
      "Hi AORÈN! I'm interested in the Pro package ($399): 15 static ads + 6 video ads. I'd like to schedule a meeting to discuss my brand and campaign.",
    features: [
      "15 premium static ads",
      "6 high-quality video ads (9:16)",
      "Comprehensive campaign concept & narrative",
      "Platform-specific hooks & CTAs",
      "Platform-ready cutdown delivery",
      "Priority production timeline",
      "3 focused revision rounds",
      "Commercial usage rights",
    ],
    description: "Designed for ambitious growth brands running multi-channel ads.",
    buttonText: "Schedule a Meeting",
    isPopular: false,
  },
  {
    name: "MAX",
    price: "599",
    period: "package",
    whatsappMessage:
      "Hi AORÈN! I'm interested in the Max package ($599): 30 static ads + 14 video ads across multiple aspect ratios. I'd like to schedule a meeting to discuss my brand and campaign.",
    features: [
      "30 premium static ads",
      "14 high-quality video ads",
      "Multiple social aspect ratios (9:16, 16:9, 1:1)",
      "Comprehensive campaign concept & narrative",
      "Platform-specific hooks, storytelling & CTAs",
      "Platform-ready cutdown delivery",
      "Priority production timeline",
      "4 focused revision rounds",
      "Commercial usage rights",
    ],
    description: "Our highest output partnership for scale-ready campaigns.",
    buttonText: "Schedule a Meeting",
    isPopular: true,
    popularLabel: "Best Value",
  },
  {
    name: "Custom",
    price: "0",
    period: "custom",
    whatsappMessage:
      "Hi AORÈN! I'm interested in a Custom package. I'd like to schedule a meeting to discuss a tailored scope and deliverables for my brand.",
    features: [
      "Amount of ADs customization",
      "Custom agreements",
      "Tailored production scope",
      "Ongoing packages content systems",
      "Custom ads fine-tuning & brand styling",
      "Direct creative director partnership",
    ],
    description: "Enterprise and bespoke solutions tailored to your brand roadmap.",
    buttonText: "Schedule a Meeting",
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
