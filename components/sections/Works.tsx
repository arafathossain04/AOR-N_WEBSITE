"use client";

import { Film, ImageIcon } from "lucide-react";
import { site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import SocialCards from "@/components/ui/card-fan-carousel";
import VideoReelsCarousel from "@/components/ui/video-reels-carousel";

export function Works() {
  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 h-[550px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(8,104,219,0.12)_0%,rgba(3,4,7,0)_70%)] blur-3xl"
        aria-hidden="true"
      />

      <Container>
        {/* Main Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <SectionHeading
              eyebrow="Portfolio & Case Studies"
              title="Work that commands attention."
              text="From editorial image campaigns that stop the feed, to high-retention cinematic video reels designed for organic and paid growth."
            />
          </div>
        </Reveal>

        {/* =========================================================================
            SUB-SECTION 1: IMAGE ADS (TOP)
           ========================================================================= */}
        <div className="mb-24 sm:mb-32">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-glacier/10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-electric/20 text-glacier">
                    <ImageIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs uppercase font-sans tracking-widest text-glacier">
                    01 / Image Advertising
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  High-Impact Stills & Editorial Campaigns
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ice/60 max-w-md sm:text-right">
                Swipe or hover across the fanned deck to explore curated ad concepts, lookbooks, and conversion visuals.
              </p>
            </div>
          </Reveal>

          {/* Card Fan Carousel with Auto-Swipe */}
          <Reveal delay={0.1}>
            <div className="w-full relative">
              <SocialCards
                cards={site.imageAds}
                autoSwipe={true}
                autoSwipeInterval={1500}
                className="my-2"
              />
            </div>
          </Reveal>
        </div>

        {/* =========================================================================
            SUB-SECTION 2: VIDEO ADS (REELS) (BELOW IMAGE ADS)
           ========================================================================= */}
        <div className="pt-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-glacier/10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-indigo/40 text-glacier">
                    <Film className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs uppercase font-sans tracking-widest text-glacier">
                    02 / Video Ads (Reels)
                  </span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Cinematic Motion & Vertical Reels
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-ice/60 max-w-md sm:text-right">
                Scroll-stopping 9:16 vertical video narratives designed for Instagram Reels, TikTok, and YouTube Shorts.
              </p>
            </div>
          </Reveal>

          {/* Video Ads (Reels) with Interactive Play & Auto-Swiping Carousel if >3 videos */}
          <Reveal delay={0.1}>
            <VideoReelsCarousel
              videos={site.videoAds}
              autoSwipe={true}
              autoSwipeInterval={2500}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Works;
