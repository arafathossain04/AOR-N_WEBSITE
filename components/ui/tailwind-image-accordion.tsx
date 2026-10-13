"use client";

import Image from "next/image";
import React from "react";

export interface AccordionItem {
  id: string;
  url: string;
  title: string;
  description: string;
  tags?: string[];
}

const defaultItems: AccordionItem[] = [
  {
    id: "1",
    url: "/team/arafat.jpg",
    title: "Arafat Hossain Araf",
    description: "Founder & CEO",
  },
  {
    id: "2",
    url: "/team/faisal.jpg",
    title: "Faisal Islam Shaker",
    description: "COO & Co-Founder",
  },
];

export interface TailwindImageAccordionProps {
  items?: AccordionItem[];
  className?: string;
}

export function TailwindImageAccordion({
  items = defaultItems,
  className = "",
}: TailwindImageAccordionProps) {
  return (
    <div
      className={`group flex max-md:flex-col justify-center gap-3 w-full max-w-5xl mx-auto my-6 ${className}`}
    >
      {items.map((item) => {
        return (
          <article
            key={item?.id ?? item?.title}
            className="group/article relative w-full rounded-2xl overflow-hidden border border-0 shadow-2xl md:group-hover:[&:not(:hover)]:w-[25%] md:not-[&:hover]:group-hover:w-[25%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[25%] md:[&:not(:focus-within):not(:hover)]:group-focus-within:w-[25%] transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/2 before:bg-gradient-to-t before:bg-linear-to-t before:from-midnight/90 before:via-midnight/40 before:to-transparent before:transition-opacity before:z-10 md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:not-[&:hover]:group-hover:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 md:[&:not(:focus-within):not(:hover)]:group-focus-within:after:opacity-100 after:absolute after:inset-0 after:bg-midnight/40 after:backdrop-blur-xs after:transition-all focus-within:ring-2 focus-within:ring-glacier"
          >
            <div className="absolute inset-0 text-white z-20 p-6 flex flex-col justify-end pointer-events-none">
              <h3 className="font-display text-2xl font-bold tracking-wide text-white md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-3 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-200 group-focus-within/article:delay-200">
                {item?.title}
              </h3>
              <span className="text-base font-medium text-glacier md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-3 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                {item?.description}
              </span>
            </div>
            <Image
              className="object-cover object-top h-80 md:h-[480px] w-full transition-transform duration-700 ease-out group-hover/article:scale-105"
              src={item?.url}
              width={1024}
              height={650}
              alt={item?.title || "Team partner"}
              priority
            />
          </article>
        );
      })}
    </div>
  );
}

export default TailwindImageAccordion;

