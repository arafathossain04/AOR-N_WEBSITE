/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Instagram, Linkedin, ArrowUp, Mail, ArrowRight } from "lucide-react";
import { site } from "@/lib/content";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @keyframes soft-float-glow {
          0%, 100% {
            transform: translate(-50%, 0) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -8px) scale(1.08);
            opacity: 0.85;
          }
        }
        .animate-soft-glow {
          animation: soft-float-glow 9s ease-in-out infinite;
        }
      `}</style>

      <footer className="relative bg-midnight overflow-hidden text-ice selection:bg-glacier/30 selection:text-white pt-20 pb-12">
        {/* Minimal Thin Hairline Separator from Contact Section */}
        <div className="absolute top-0 inset-x-0 h-px bg-glacier/15" />

        {/* Ambient Top Horizon Glow Light Bloom */}
        <div
          className="pointer-events-none absolute -top-32 left-1/2 w-[720px] max-w-[95vw] h-[300px] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(8,104,219,0.18)_0%,rgba(7,31,120,0.06)_45%,transparent_75%)] blur-3xl animate-soft-glow"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          {/* Main Footer Grid: Left Logo/Brand + 3 Minimal Link Columns */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 pb-16">
            {/* 1. LEFT COLUMN: Brand, Logo & Since 2026 */}
            <div className="lg:col-span-5 flex flex-col items-start">
              {/* Logo with Soft Radial Glow */}
              <div className="relative inline-block">
                {/* Subtle behind-logo glow */}
                <div
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-full blur-2xl"
                  aria-hidden="true"
                />
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  className="inline-block transition-transform duration-300 hover:scale-[1.02]"
                  aria-label="AORÈN Home"
                >
                  <img
                    src="/logo.png"
                    alt="AORÈN"
                    className="h-15 sm:h-16 w-auto object-contain brightness-110 "
                  />
                </a>
              </div>

              {/* since 2026 Badge */}
              <div className="mt-3.5 flex items-center gap-2">
                <span className="relative left-12 bottom-6 text-[11px] font-mono tracking-[0.22em] uppercase text-ice/45">
                  since 2026
                </span>
              </div>

              {/* Studio Tagline in Elegant Display Typography */}
              <p className="mt-5 text-sm sm:text-base font-display italic text-ice/70 max-w-sm leading-relaxed">
                {site.tagline}
              </p>

              <p className="mt-2 text-xs text-ice/45 max-w-sm leading-relaxed">
                Independent AI advertising studio crafting cinematic video reels & editorial image campaigns for ambitious brands.
              </p>
            </div>

            {/* 2. RIGHT/MIDDLE: 3 Minimal Link Columns with generous spacing */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 pt-2 lg:pt-0">
              {/* Column 1: Navigation */}
              <div>
                <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ice/40 mb-4">
                  Navigation
                </h4>
                <ul className="space-y-3">
                  {site.nav.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-xs sm:text-sm text-ice/65 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)] inline-block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#contact"
                      className="text-xs sm:text-sm text-glacier/90 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.7)] inline-flex items-center gap-1"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2: Capabilities */}
              <div>
                <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ice/40 mb-4">
                  Capabilities
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#work"
                      className="text-xs sm:text-sm text-ice/65 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)] inline-block"
                    >
                      Video Ads & Reels
                    </a>
                  </li>
                  <li>
                    <a
                      href="#work"
                      className="text-xs sm:text-sm text-ice/65 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)] inline-block"
                    >
                      Image Campaigns
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-xs sm:text-sm text-ice/65 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)] inline-block"
                    >
                      AI Creative Direction
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-xs sm:text-sm text-ice/65 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)] inline-block"
                    >
                      Motion Studies
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="text-xs sm:text-sm text-ice/65 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)] inline-block"
                    >
                      Studio Pricing
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Connect & Direct */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ice/40 mb-4">
                  Connect
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:collab@theaoren.com"
                      className="text-xs sm:text-sm text-ice/65 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)] inline-block break-all"
                    >
                      collab@theaoren.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/aoren001/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-ice/65 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)] inline-block"
                    >
                      Instagram (@aoren001)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/8801407002630"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-ice/65 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)] inline-block"
                    >
                      WhatsApp Direct
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/company/aoren-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-ice/65 transition-all duration-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(139,201,247,0.55)] inline-block"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hairline Separator Between Main Footer and Bottom Bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-glacier/15 to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-5 text-xs text-ice/50">
            {/* Left: Copyright & Legal */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>© 2026 AORÈN. All rights reserved.</span>
              <span className="hidden sm:inline text-ice/20">•</span>
              <a
                href="#top"
                className="transition-colors hover:text-white"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
              >
                Privacy & Usage
              </a>
              <span className="hidden sm:inline text-ice/20">•</span>
              <a
                href="#contact"
                className="transition-colors hover:text-white"
              >
                Inquiries
              </a>
            </div>

            {/* Right: Social Icons & Back to Top */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aoren001/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-electric bg-navy/50 text-ice/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:border-glacier/50 hover:bg-electric/20 hover:shadow-[0_0_15px_rgba(8,104,219,0.35)]"
              >
                <Instagram size={15} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/aoren-demo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-electric bg-navy/50 text-ice/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:border-glacier/50 hover:bg-electric/20 hover:shadow-[0_0_15px_rgba(8,104,219,0.35)]"
              >
                <Linkedin size={15} />
              </a>

              {/* Mail */}
              <a
                href="mailto:collab@theaoren.com"
                aria-label="Email studio"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-electric bg-navy/50 text-ice/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:border-glacier/50 hover:bg-electric/20 hover:shadow-[0_0_15px_rgba(8,104,219,0.35)]"
              >
                <Mail size={15} />
              </a>

              {/* Scroll To Top Button */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-electric bg-midnight/80 text-ice/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:border-glacier hover:bg-electric/25 hover:shadow-[0_0_18px_rgba(8,104,219,0.4)]"
              >
                <ArrowUp size={15} />
              </button>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
