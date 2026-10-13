"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const handler = () => setScrolled(window.scrollY > 16); handler(); window.addEventListener("scroll", handler, { passive: true }); return () => window.removeEventListener("scroll", handler); }, []);
  return <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-glacier/10 bg-midnight/75 backdrop-blur-xl" : "bg-transparent"}`}>
    <Container className="flex h-20 items-center justify-between"><a href="#top" className="font-display text-2xl tracking-[.13em] text-white" aria-label="AORÈN home">{site.name}</a>
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{site.nav.map(item => <a className="text-sm text-ice/70 transition hover:text-glacier" href={item.href} key={item.href}>{item.label}</a>)}<Button href="#contact" className="ml-1 py-2.5">Get a Quote</Button></nav>
      <button className="grid h-10 w-10 place-items-center lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    </Container>
    {open && <div id="mobile-nav" className="border-t border-glacier/10 bg-midnight/95 px-5 py-5 backdrop-blur-xl lg:hidden"><nav className="mx-auto flex max-w-7xl flex-col items-start gap-4" aria-label="Mobile navigation">{site.nav.map(item => <a className="text-lg text-ice/80" href={item.href} onClick={() => setOpen(false)} key={item.href}>{item.label}</a>)}<Button href="#contact" onClick={() => setOpen(false)}>Get a Quote</Button></nav></div>}
  </header>;
}
