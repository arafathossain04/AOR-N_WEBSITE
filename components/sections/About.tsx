"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import TailwindImageAccordion from "@/components/ui/tailwind-image-accordion";
import { site } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(7,31,120,0.18)_0%,rgba(3,4,7,0)_70%)] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <SectionHeading
              eyebrow="Leadership & Vision"
              title={site.about.title}
              text={site.about.text}
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <TailwindImageAccordion />
        </Reveal>
      </Container>
    </section>
  );
}

