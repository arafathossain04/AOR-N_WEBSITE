/* eslint-disable @next/next/no-img-element */
"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-midnight/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Brand Logo with Soft Glow */}
        <a
          href="#top"
          className="relative flex items-center group transition-transform duration-300 hover:scale-[1.02]"
          aria-label="AORÈN home"
        >
          {/* Subtle Ambient Micro-Glow */}
          <img
            src="/logo.png"
            alt="AORÈN"
            className="h-12 sm:h-13 w-auto object-contain brightness-110 transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {site.nav.map((item) => (
            <a
              className="text-sm text-ice/70 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <ShinyButton href="#contact" size="sm" label="Contact Us" className="ml-1" />
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="grid h-10 w-10 place-items-center lg:hidden text-ice hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="border-t border-glacier/10 bg-midnight/95 px-5 py-6 backdrop-blur-2xl lg:hidden shadow-2xl"
        >
          <nav className="mx-auto flex max-w-7xl flex-col items-start gap-4" aria-label="Mobile navigation">
            {site.nav.map((item) => (
              <a
                className="text-lg text-ice/80 hover:text-white transition-colors"
                href={item.href}
                onClick={() => setOpen(false)}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 w-full">
              <ShinyButton
                href="#contact"
                size="sm"
                label="Contact Us"
                className="w-full"
                onClick={() => setOpen(false)}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
