import { Clapperboard, Lightbulb, type LucideIcon, Sparkles } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  steps: Step[];
}

export function HowItWorks({ title, description, steps, className, ...props }: HowItWorksProps) {
  return (
    <section id="services" className={cn("w-full bg-navy/45 py-16 sm:py-24", className)} {...props}>
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2>
          <p className="mt-4 text-lg text-ice/70">{description}</p>
        </div>

        <div className="relative mx-auto mb-8 w-full max-w-6xl">
          <div aria-hidden="true" className="absolute left-[16.6667%] top-1/2 h-px w-[66.6667%] -translate-y-1/2 bg-electric" />
          <div className="relative grid grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-indigo font-semibold text-glacier ring-4 ring-indigo">
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title: stepTitle, description: stepDescription, benefits }) => (
            <div key={stepTitle} className="relative rounded-2xl border border-indigo bg-[black] p-6 text-ice transition-all duration-300 ease-in-out hover:scale-105 hover:bg-#050B2B hover:border-electric w-full">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-electric/15 text-glacier"><Icon className="h-6 w-6" /></div>
              <h3 className="mb-2 text-xl font-semibold text-white">{stepTitle}</h3>
              <p className="mb-6 text-ice/65">{stepDescription}</p>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-electric/20"><span className="h-2 w-2 rounded-full bg-glacier" /></span>
                    <span className="text-sm text-ice/70">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const serviceSteps: Step[] = [
  {
    icon: Lightbulb,
    title: "Campaign concepts",
    description: "Distinct creative territories built around the feeling your brand needs to own.",
    benefits: ["Strategic creative direction", "Art direction with a point of view", "Ideas shaped for your audience"],
  },
  {
    icon: Clapperboard,
    title: "Video ads",
    description: "Cinematic, scroll-stopping motion created for the pace of culture and launch calendars.",
    benefits: ["Short-form spots and social cuts", "Platform-ready aspect ratios", "Polished AI-assisted production"],
  },
  {
    icon: Sparkles,
    title: "Image ads",
    description: "Premium campaign imagery that makes products, people and worlds feel worth a second look.",
    benefits: ["Product-on-model visuals", "Flexible creative variations", "Assets for every channel"],
  },
];
