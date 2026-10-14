"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import VerticalMarqueeDemo from "@/components/ui/marquee-03";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(7,31,120,0.18)_0%,rgba(3,4,7,0)_70%)] blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-16">
            <SectionHeading
              eyebrow="Client Stories"
              title="Built to make a lasting mark."
              text="See what innovative brands and creative leaders say about partnering with AORÈN for AI-powered advertising."
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-5xl">
            <VerticalMarqueeDemo />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
