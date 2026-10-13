import Image from "next/image";
import { Play } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return <section id="top" className="relative isolate flex min-h-screen items-center overflow-hidden bg-midnight pt-20">
    <Image src="/hero-aura.svg" alt="Abstract blue light forms" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,4,7,.94)_0%,rgba(3,4,7,.55)_48%,rgba(3,4,7,.72)_100%)]" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(3,4,7,.24)_0%,rgba(3,4,7,.05)_42%,#030407_100%)]" />
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(139,201,247,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,201,247,.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />

    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36">
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="inline-flex items-center gap-3 rounded-full border border-glacier/30 bg-navy/45 px-3 py-2 text-xs font-medium tracking-wide text-ice backdrop-blur-md sm:text-sm">
          <span className="rounded-full bg-glacier px-2 py-0.5 text-[10px] font-bold uppercase tracking-[.12em] text-midnight">AORÈN</span>
          {site.hero.eyebrow}
        </p>
        <h1 className="mt-7 font-display text-5xl leading-[.98] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">{site.hero.title}</h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-ice/80 sm:text-lg sm:leading-8">{site.hero.description}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button href="#contact" className="min-w-40">{site.hero.primaryCta}</Button>
          <a href="#work" className="inline-flex min-w-40 items-center justify-center gap-2 rounded-full border border-ice/25 bg-midnight/20 px-5 py-3 text-sm font-medium text-ice backdrop-blur-sm transition hover:border-glacier hover:bg-glacier/10 hover:text-white">
            <Play size={15} fill="currentColor" aria-hidden="true" />{site.hero.secondaryCta}
          </a>
        </div>
      </Reveal>
    </div>

    <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-medium uppercase tracking-[.2em] text-ice/50 sm:flex"><span className="h-px w-8 bg-glacier/45" />Scroll to explore<span className="h-px w-8 bg-glacier/45" /></div>
  </section>;
}
