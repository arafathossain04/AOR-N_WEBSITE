import { site } from "@/lib/content";
import { Hero as HeroOne } from "@/components/ui/hero-1";

export function Hero() {
  return <HeroOne eyebrow={site.hero.eyebrow} title={site.hero.title} subtitle={site.hero.description} ctaLabel={site.hero.primaryCta} ctaHref="#contact" />;
}
