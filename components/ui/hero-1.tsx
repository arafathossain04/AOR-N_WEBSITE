"use client";

import { ShinyButton } from "@/components/ui/shiny-button";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function Hero({
  eyebrow = "Innovate Without Limits",
  title,
  subtitle,
  ctaLabel = "Explore Now",
  ctaHref = "#",
}: HeroProps) {
  return (
    <section
      id="hero"
      className="relative isolate mx-auto min-h-[calc(100vh-40px)] w-full overflow-hidden rounded-b-xl bg-[linear-gradient(to_bottom,#030407,#050b2b_70%,#071f78_100%)] px-6 pt-40 text-center md:px-8"
    >
      <div className="hero-eclipse" aria-hidden="true" />
      <div className="hero-eclipse-bloom" aria-hidden="true" />
    <div className="flex flex-col items-center justify-center gap-4 px-6 text-center mt-20">
      {eyebrow && (
          <span className="mx-auto flex w-fit items-center justify-center bg-gradient-to-tr from-glacier/10 via-electric/10 to-transparent px-5 py-2 text-sm font-sans uppercase tracking-tight text-glacier">
            {eyebrow}
          </span>
      )}

      <h1 className="animate-fade-in relative z-10 -translate-y-4 bg-gradient-to-br from-white from-50% to-indigo bg-clip-text py-6 font-display text-5xl font-semibold leading-none tracking-tighter text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl">
        {title}
      </h1>
      <p className="animate-fade-in relative z-10 mb-12 -translate-y-4 text-balance text-lg tracking-tight text-ice/75 opacity-0 md:text-xl">
        {subtitle}
      </p>

      {ctaLabel && (
        <div className="relative z-20 flex justify-center mt-[-10px]">
          <ShinyButton
            href={ctaHref}
            label={ctaLabel}
            size="lg"
            className="w-fit text-center font-sans tracking-tight"
          />
        </div>
      )}
    </div>
      <div className="animate-fade-up relative z-10 mt-32 opacity-0 [perspective:2000px] after:absolute after:inset-0 after:z-50 after:bg-[linear-gradient(to_top,#071f78_10%,transparent)]" />
    </section>
  );
}
