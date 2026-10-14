import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Marquee } from "@/components/ui/marquee-03-utils/marquee";
import { cn } from "@/lib/utils";

export type Review = {
  name: string;
  username: string;
  body: string;
  profile: string;
};

export const reviews: Review[] = [
  {
    name: "Elena Rostova",
    username: "@elena_creative",
    body: "“AORÈN completely transformed our seasonal campaign. Cinematic fidelity with turnaround speeds we simply couldn’t achieve with traditional production shoots.”",
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Marcus Vance",
    username: "@marcusvance",
    body: "“The visual sophistication is unmatched. Our social video ad CTR jumped 42% in the first two weeks of running the generative video creative.”",
    profile:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Sophie Chen",
    username: "@sophiebrand",
    body: "“From creative direction to final multi-aspect ratio cutdowns, working with AORÈN was effortless. They truly understand high-end brand aesthetics.”",
    profile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Julian Thorne",
    username: "@julian_ecom",
    body: "“Testing 8 distinct creative hooks in parallel allowed us to scale our ad spend profitably without spending months in studio production.”",
    profile:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Camille Dubois",
    username: "@camille_d",
    body: "“A rare studio that marries bleeding-edge AI workflows with genuine editorial art direction. The lighting, motion, and texture work are breathtaking.”",
    profile:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "David K.",
    username: "@davidk_growth",
    body: "“Fast revisions, crystal-clear delivery timelines, and assets perfectly tailored for TikTok, Reels, and YouTube Shorts. Absolutely exceptional.”",
    profile:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
  },
  {
    name: "Amara Ndiaye",
    username: "@amara_mode",
    body: "“Our fashion launch visuals felt like high-fashion magazine editorials brought to life with surreal motion. Our community was in awe.”",
    profile:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
  },
];

export const ReviewCard = ({
  profile,
  name,
  username,
  body,
  className,
}: Review & { className?: string }) => {
  return (
    <Card className={cn("relative w-full max-w-sm cursor-pointer overflow-hidden rounded-2xl border border-indigo bg-black p-5 text-ice shadow-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#050B2B] hover:border-electric", className)}>
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-indigo transition-colors duration-300">
            <Image
              className="h-full w-full rounded-full object-cover aspect-square"
              width={40}
              height={40}
              alt={name}
              src={profile}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <p className="text-sm font-semibold text-white truncate">{name}</p>
            <p className="text-xs text-glacier/70 truncate">{username}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-ice/75">{body}</p>
      </CardContent>
    </Card>
  );
};

const VerticalMarqueeDemo = () => {
  return (
    <div className="relative w-full">
      <div className="relative grid h-[520px] grid-cols-2 gap-2 overflow-hidden md:hidden">
        <Marquee
          pauseOnHover
          vertical
          className="[--duration:24s] h-full min-w-0 [&>div]:w-full"
        >
          {reviews
            .filter((_, i) => i % 2 === 0)
            .map((review) => (
              <ReviewCard key={review.username} {...review} className="max-w-none p-3" />
            ))}
        </Marquee>
        <Marquee
          reverse
          pauseOnHover
          vertical
          className="[--duration:24s] h-full min-w-0 [&>div]:w-full"
        >
          {reviews
            .filter((_, i) => i % 2 === 1)
            .map((review) => (
              <ReviewCard key={review.username} {...review} className="max-w-none p-3" />
            ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-[#030407] via-[#030407]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-[#030407] via-[#030407]/80 to-transparent" />
      </div>

      <div className="relative hidden h-[580px] w-full flex-row items-center justify-center overflow-hidden md:flex">
        <div className="flex h-full w-full flex-row items-center justify-center gap-4 px-2">
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:24s] h-full flex-1"
          >
            {reviews
              .filter((_, i) => i % 3 === 0)
              .map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            vertical
            className="[--duration:24s] h-full flex-1"
          >
            {reviews
              .filter((_, i) => i % 3 === 1)
              .map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
          </Marquee>
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:24s] hidden h-full flex-1 lg:flex"
          >
            {reviews
              .filter((_, i) => i % 3 === 2)
              .map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#030407] via-[#030407]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#030407] via-[#030407]/80 to-transparent" />
      </div>
    </div>
  );
};

export default VerticalMarqueeDemo;
