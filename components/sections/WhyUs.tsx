import * as Icons from "lucide-react";
import { site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() { return <section className="bg-gradient-to-br from-indigo/35 via-navy to-midnight py-20 sm:py-28"><Container><Reveal><SectionHeading eyebrow="Why AORÈN" title="A new kind of creative advantage." /></Reveal><div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">{site.benefits.map((benefit, i) => { const Icon = Icons[benefit.icon as keyof typeof Icons] as Icons.LucideIcon; return <Reveal delay={i * .05} key={benefit.title}><Icon className="text-glacier" size={25} /><h3 className="mt-5 text-lg font-medium text-white">{benefit.title}</h3><p className="mt-2 text-sm leading-6 text-ice/65">{benefit.text}</p></Reveal>; })}</div></Container></section>; }
