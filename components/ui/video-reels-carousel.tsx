/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import type { VideoAd } from "@/lib/content";

export interface VideoReelsCarouselProps {
  videos: VideoAd[];
  autoSwipe?: boolean;
  autoSwipeInterval?: number;
  className?: string;
}

/**
 * Normalizes video URLs to ensure they work in Next.js:
 * In Next.js, files placed in `public/` (e.g. `public/videos/shoes1.mp4`)
 * MUST be accessed via `/videos/shoes1.mp4` (without "public/").
 * This helper automatically handles both cases so either input works seamlessly.
 */
function formatVideoUrl(url?: string): string {
  if (!url) return "";
  const trimmed = url.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  if (trimmed.startsWith("public/")) return `/${trimmed.replace(/^public\//, "")}`;
  if (trimmed.startsWith("/public/")) return trimmed.replace(/^\/public/, "");
  if (!trimmed.startsWith("/")) return `/${trimmed}`;
  return trimmed;
}

export function VideoReelsCarousel({
  videos,
  autoSwipe = true,
  autoSwipeInterval = 4500,
  className = "",
}: VideoReelsCarouselProps) {
  // Track which video is actively playing (index or null)
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Video element refs and progress tracking
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [progressMap, setProgressMap] = useState<{ [index: number]: number }>({});

  const totalVideos = videos.length;
  const isCarousel = totalVideos > 3;

  // Responsive visible cards count
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1);
      } else if (width < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount, { passive: true });
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, totalVideos - visibleCount);

  // Clamp current index if visibleCount changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Navigate next / prev
  const handleNext = useCallback(() => {
    if (!isCarousel) return;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [isCarousel, maxIndex]);

  const handlePrev = useCallback(() => {
    if (!isCarousel) return;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [isCarousel, maxIndex]);

  // Auto-swipe functionality
  useEffect(() => {
    // Crucial rule: Do NOT auto-swipe if a video is actively playing or if user is hovering
    if (!autoSwipe || !isCarousel || isHovered || activeVideoIndex !== null) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoSwipeInterval);

    return () => clearInterval(timer);
  }, [autoSwipe, autoSwipeInterval, isCarousel, isHovered, activeVideoIndex, handleNext]);

  // Toggle video playback
  const togglePlay = (index: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    const videoEl = videoRefs.current[index];
    if (!videoEl) return;

    if (activeVideoIndex === index) {
      // Pause currently playing video
      videoEl.pause();
      setActiveVideoIndex(null);
    } else {
      // Pause any previously playing video
      if (activeVideoIndex !== null && videoRefs.current[activeVideoIndex]) {
        videoRefs.current[activeVideoIndex]?.pause();
      }

      // Start playing selected video
      setActiveVideoIndex(index);
      videoEl.muted = isMuted;
      videoEl.play().catch(() => {
        // If unmuted autoplay fails due to browser policy, fallback to muted
        videoEl.muted = true;
        setIsMuted(true);
        videoEl.play().catch((err) => {
          console.warn("Could not play video:", err);
        });
      });
    }
  };

  // Toggle mute
  const toggleMute = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    const videoEl = videoRefs.current[index];
    if (videoEl) {
      videoEl.muted = newMuted;
    }
  };

  // Update progress bar
  const handleTimeUpdate = (index: number) => {
    const videoEl = videoRefs.current[index];
    if (videoEl && videoEl.duration) {
      const progress = (videoEl.currentTime / videoEl.duration) * 100;
      setProgressMap((prev) => ({ ...prev, [index]: progress }));
    }
  };

  const handleVideoEnded = (index: number) => {
    setActiveVideoIndex(null);
    setProgressMap((prev) => ({ ...prev, [index]: 0 }));
  };

  // Reusable Single Reel Card Renderer
  const renderCard = (reel: VideoAd, idx: number) => {
    const isPlaying = activeVideoIndex === idx;
    const progress = progressMap[idx] || 0;
    const finalVideoUrl = formatVideoUrl(reel.videoUrl);

    return (
      <article
        key={`${reel.title}-${idx}`}
        className="group relative h-full w-full overflow-hidden rounded-2xl bg-navy/60 transition-all duration-300 hover:border-glacier/40 select-none cursor-pointer"
        onClick={() => togglePlay(idx)}
      >
        {/* 9:16 Aspect Ratio Container */}
        <div className="relative aspect-[9/15] w-full overflow-hidden bg-midnight">
          {/* Static Poster / Thumbnail */}
          {reel.thumbnail && (
            <img
              src={reel.thumbnail}
              alt={reel.title || "Reel thumbnail"}
              loading="lazy"
              className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            />
          )}

          {/* HTML5 Video Element */}
          <video
            ref={(el) => {
              videoRefs.current[idx] = el;
            }}
            src={finalVideoUrl}
            playsInline
            loop
            preload="metadata"
            onTimeUpdate={() => handleTimeUpdate(idx)}
            onEnded={() => handleVideoEnded(idx)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              isPlaying ? "opacity-100 z-10" : "opacity-0 pointer-events-none -z-10"
            }`}
          />

          {/* Dark gradient overlay */}
          <div
            className={`absolute inset-0 z-10 bg-gradient-to-t from-midnight/95 via-midnight/25 to-black/25 pointer-events-none transition-opacity duration-300 ${
              isPlaying ? "opacity-60" : "opacity-90 group-hover:opacity-75"
            }`}
          />

          {/* Top Bar: Category Pill & Controls */}
          <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-2">
              {/* Mute/Unmute toggle (visible when video is playing) */}
              {isPlaying && (
                <button
                  type="button"
                  onClick={(e) => toggleMute(idx, e)}
                  aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-midnight/85 text-ice hover:text-white hover:bg-electric/30 backdrop-blur-md border border-glacier/20 transition-all"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-glacier" />}
                </button>
              )}

              {/* Duration badge */}
              {reel.duration && (
                <span className="flex items-center gap-1 rounded-full bg-midnight/80 px-2.5 py-1 text-xs font-mono text-ice/90 backdrop-blur-md">
                  {reel.duration}
                </span>
              )}
            </div>
          </div>

          {/* Center Play / Pause Indicator */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            {!isPlaying ? (
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-electric/85 text-white backdrop-blur-md transition-all duration-300 group-hover:scale-110">
                <Play className="ml-1 h-6 w-6 fill-current text-white" />
              </div>
            ) : (
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-midnight/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Pause className="h-6 w-6 fill-current text-white" />
              </div>
            )}
          </div>

          {/* Bottom Scrubber Progress Bar */}
          {isPlaying && (
            <div className="absolute bottom-0 inset-x-0 h-1 bg-white/20 z-30 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-electric to-glacier transition-all duration-100 ease-linear shadow-[0_0_8px_rgba(139,201,247,0.8)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Bottom Metadata */}
        </div>
      </article>
    );
  };

  // CASE 1: 3 or fewer videos -> Render clean balanced grid
  if (!isCarousel) {
    return (
      <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto ${className}`}>
        {videos.map((reel, idx) => renderCard(reel, idx))}
      </div>
    );
  }

  // CASE 2: More than 3 videos -> Render auto-swiping carousel!
  return (
    <div
      className={`relative w-full max-w-6xl mx-auto px-2 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sliding Viewport */}
      <div className="overflow-hidden py-4 -my-4">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {videos.map((reel, idx) => (
            <div
              key={`${reel.title}-${idx}`}
              className="shrink-0 px-2 sm:px-3"
              style={{ width: `${100 / visibleCount}%` }}
            >
              {renderCard(reel, idx)}
            </div>
          ))}
        </div>
      </div>

      {/* Minimal Glassmorphic Controls Bar */}
      <div className="flex items-center justify-between mt-8 z-30 max-w-sm mx-auto">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous reel"
          className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-indigo bg-midnight/80 backdrop-blur-md text-ice/75 hover:text-white hover:border-glacier hover:bg-electric/25 hover:shadow-[0_0_20px_rgba(8,104,219,0.4)] active:scale-95 transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-midnight/80 backdrop-blur-md">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-5 bg-gradient-to-r from-electric to-glacier shadow-[0_0_8px_rgba(139,201,247,0.7)]"
                  : "w-1.5 bg-ice/20 hover:bg-ice/50"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next reel"
          className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-indigo bg-midnight/80 backdrop-blur-md text-ice/75 hover:text-white hover:border-glacier hover:bg-electric/25 hover:shadow-[0_0_20px_rgba(8,104,219,0.4)] active:scale-95 transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default VideoReelsCarousel;
