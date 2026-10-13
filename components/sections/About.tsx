import Image from "next/image";
import { site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() { return <section id="about" className="py-20 sm:py-28"><Container><div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><Reveal><SectionHeading eyebrow="About AORÈN" title={site.about.title} /><p className="mt-6 max-w-md leading-7 text-ice/70">{site.about.text}</p></Reveal><div className="grid gap-5 sm:grid-cols-2">{site.founders.map((person, i) => <Reveal delay={i * .08} key={person.name + i}><article><div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-glacier/15 bg-navy"><Image src={person.image} alt={`Portrait placeholder for ${person.name}`} fill className="object-cover" sizes="(min-width: 640px) 25vw, 90vw" /></div><h3 className="mt-5 text-lg text-white">{person.name}</h3><p className="mt-1 text-sm text-glacier">{person.role}</p><p className="mt-3 text-sm leading-6 text-ice/65">{person.bio}</p></article></Reveal>)}</div></div></Container></section>; }
