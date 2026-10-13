import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Works() { return <section id="work" className="py-20 sm:py-28"><Container><Reveal><SectionHeading eyebrow="Selected work" title="A few places to begin." text="Placeholder work to be replaced with your featured projects." /></Reveal><div className="mt-12 grid gap-5 md:grid-cols-3">{site.works.map((work, i) => <Reveal delay={i * .08} key={work}><article className="group overflow-hidden rounded-2xl border border-glacier/15 bg-navy"><div className="relative aspect-[4/3] overflow-hidden"><Image src="/work-placeholder.svg" alt="Abstract placeholder artwork" fill className={`object-cover transition duration-500 group-hover:scale-105 ${i === 1 ? "hue-rotate-45" : i === 2 ? "hue-rotate-90" : ""}`} sizes="(min-width: 768px) 33vw, 100vw" /></div><div className="flex items-center justify-between p-5"><h3 className="text-base text-white">{work}</h3><ArrowUpRight className="text-glacier" size={18} /></div></article></Reveal>)}</div></Container></section>; }
