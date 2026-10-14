"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import VerticalMarqueeDemo from "@/components/ui/marquee-03";
import { Info } from "lucide-react";

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
          <aside
            aria-label="About these testimonials"
            className="mx-auto mb-10 flex max-w-3xl gap-4 rounded-2xl border border-indigo bg-[#071F78]/20 p-5 shadow-[0_0_32px_rgba(8,104,219,0.08)] sm:mb-12 sm:p-6"
          >
            <Info
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-glacier"
            />
            <div>
              <p className="text-sm font-semibold text-white">
                Demo content — not real client reviews
              </p>
              <p className="mt-1.5 text-sm leading-6 text-ice/70">
                The reviews below are sample content created for this website
                and do not reflect real clients or customer experiences. As a
                new Startup, we look forward to sharing genuine client feedback
                as we grow.
              </p>
            </div>
          </aside>
        </Reveal>

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
