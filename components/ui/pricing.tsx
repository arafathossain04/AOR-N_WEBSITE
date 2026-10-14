"use client";

import { ShinyButton } from "@/components/ui/shiny-button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  whatsappMessage: string;
  features: string[];
  description: string;
  buttonText: string;
  isPopular: boolean;
  popularLabel?: string;
  isCustom?: boolean;
  customPriceLabel?: string;
}

interface PricingProps {
  plans: PricingPlan[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  eyebrow = "Pricing",
  title = "Choose a starting point.",
  description = "Indicative studio packages for video and image advertising. Flexible retainers and custom scopes available.",
}: PricingProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.18em] text-glacier">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base leading-7 text-ice/70 whitespace-pre-line">
            {description}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {plans.map((plan, index) => {
          const isNumericPrice = !isNaN(Number(plan.price)) && !plan.isCustom;

          return (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={
                isDesktop
                  ? {
                      y: plan.isPopular ? -12 : 0,
                      opacity: 1,
                      scale: plan.isPopular ? 1.03 : 1.0,
                    }
                  : { y: 0, opacity: 1 }
              }
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 110,
                damping: 24,
                delay: index * 0.1,
              }}
              className={cn(
                "rounded-2xl border p-6 text-center flex flex-col justify-between relative transition-all duration-300",
                plan.isPopular
                  ? "border-electric bg-[#050B2B]/90 shadow-[0_0_35px_rgba(8,104,219,0.35)] ring-1 ring-electric"
                  : "border-indigo bg-black/90 hover:border-glacier/30 hover:bg-[#050B2B]/40"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-electric to-glacier py-1 px-3.5 rounded-full flex items-center shadow-lg shadow-electric/40">
                  <Star className="text-midnight h-3.5 w-3.5 fill-current" />
                  <span className="text-midnight ml-1.5 text-xs font-bold uppercase tracking-wider">
                    {plan.popularLabel || "Best Value"}
                  </span>
                </div>
              )}

              <div className="flex-1 flex flex-col">
                <p className="text-base font-semibold tracking-wide uppercase text-glacier">
                  {plan.name}
                </p>

                <div className="mt-6 min-h-[64px] flex items-center justify-center gap-x-2">
                  {isNumericPrice ? (
                    <>
                      <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                        <NumberFlow
                          value={Number(plan.price)}
                          format={{
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }}
                          transformTiming={{
                            duration: 450,
                            easing: "ease-out",
                          }}
                          willChange
                          className="font-variant-numeric: tabular-nums"
                        />
                      </span>
                      {plan.period !== "Next 3 months" && (
                        <span className="text-sm font-semibold leading-6 tracking-wide text-ice/60">
                          / {plan.period}
                        </span>
                      )}
                    </>
                  ) : (
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      {plan.customPriceLabel || plan.price}
                    </span>
                  )}
                </div>

                {plan.isCustom && (
                  <p className="text-xs leading-5 text-ice/50 mt-1">
                    tailored scope &amp; deliverables
                  </p>
                )}

                <ul className="mt-6 gap-3 flex flex-col flex-1 text-sm text-ice/80">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-glacier mt-0.5 flex-shrink-0" />
                      <span className="text-left text-xs sm:text-sm text-ice/85">{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="w-full my-6 border-indigo/60" />

                <ShinyButton
                  href={getWhatsAppLink(plan.whatsappMessage)}
                  label={plan.buttonText}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="default"
                  className="w-full text-sm sm:text-base font-semibold"
                  fillColor={plan.isPopular ? "#0868DB" : "#030407"}
                  accentColor={plan.isPopular ? "#8BC9F7" : "#0868DB"}
                  accentSoftColor="#C8E9FF"
                  labelColor={plan.isPopular ? "#030407" : "#ffffff"}
                />

                <p className="mt-4 text-xs leading-5 text-ice/50">
                  {plan.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
