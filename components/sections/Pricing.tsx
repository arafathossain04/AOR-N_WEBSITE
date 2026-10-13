import { Check } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pricing() { return <section id="pricing" className="bg-navy/45 py-20 sm:py-28"><Container><Reveal><SectionHeading eyebrow="Pricing" title="Choose a starting point." text="Indicative packages — replace these placeholders with your final offer." /></Reveal><div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{site.pricing.map((tier, i) => <Reveal delay={i * .06} key={tier.name}><Card className={`flex h-full flex-col p-6 ${tier.featured ? "border-electric bg-indigo/35 shadow-glow" : ""}`}><p className="text-sm text-glacier">{tier.name}</p><p className="mt-4 font-display text-3xl text-white">{tier.price}</p><ul className="my-8 flex-1 space-y-3">{tier.features.map(feature => <li className="flex gap-2 text-sm text-ice/70" key={feature}><Check size={16} className="mt-.5 shrink-0 text-glacier" />{feature}</li>)}</ul><Button href="#contact" variant={tier.featured ? "primary" : "secondary"} className="w-full">Enquire</Button></Card></Reveal>)}</div></Container></section>; }
