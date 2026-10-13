import { Quote } from "lucide-react";
import { site } from "@/lib/content";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() { return <section className="py-20 sm:py-28"><Container><Reveal><SectionHeading eyebrow="Kind words" title="Built to make a mark." /></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2">{site.testimonials.map((testimonial, i) => <Reveal delay={i * .08} key={testimonial.quote}><Card className="p-7 sm:p-9"><Quote className="text-glacier" size={24} /><blockquote className="mt-6 font-display text-2xl leading-snug text-white">“{testimonial.quote}”</blockquote><footer className="mt-7 text-sm text-ice/65"><span className="text-ice">{testimonial.name}</span> · {testimonial.role}</footer></Card></Reveal>)}</div></Container></section>; }
