import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Props = { href?: string; children: ReactNode; variant?: "primary" | "secondary"; className?: string } & ButtonHTMLAttributes<HTMLButtonElement>;
const styles = { primary: "bg-electric text-white hover:bg-glacier hover:text-midnight", secondary: "border border-glacier/40 text-ice hover:border-glacier hover:bg-glacier/10" };
export function Button({ href, children, variant = "primary", className = "", ...props }: Props) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300 ${styles[variant]} ${className}`;
  if (href) return <Link href={href} className={classes}>{children}<ArrowUpRight size={16} aria-hidden="true" /></Link>;
  return <button className={classes} {...props}>{children}</button>;
}
