import * as Icons from "lucide-react";
import { site } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() { return <section id="services" className="bg-navy/45 py-20 sm:py-28"><Container><Reveal><SectionHeading eyebrow="What we make" title="Creative built for the next frame." text="A flexible studio setup for campaign ideas and polished assets." /></Reveal><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{site.services.map((service, i) => { const Icon = Icons[service.icon as keyof typeof Icons] as Icons.LucideIcon; return <Reveal key={service.title} delay={i * .06}><Card className="h-full p-6"><Icon className="text-glacier" size={23} /><h3 className="mt-9 text-lg font-medium text-white">{service.title}</h3><p className="mt-3 text-sm leading-6 text-ice/65">{service.description}</p></Card></Reveal>; })}</div><div className="mt-16 grid gap-10 border-t border-glacier/15 pt-12 lg:grid-cols-2"><Reveal><h3 className="font-display text-3xl text-white">A simple, clear process.</h3><ul className="mt-6 space-y-3">{site.policies.map(policy => <li className="flex gap-3 text-sm text-ice/70" key={policy}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-glacier" />{policy}</li>)}</ul></Reveal><Reveal delay={.1}><p className="font-display text-3xl leading-snug text-ice sm:text-4xl">“{site.mission}”</p></Reveal></div></Container></section>; }
