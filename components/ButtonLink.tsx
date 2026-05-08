import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function ButtonLink({ href, children, variant = "primary", className = "" }: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-amber-400 text-stone-950 shadow-[0_18px_45px_rgba(245,158,11,0.2)] hover:bg-amber-300"
      : "border border-amber-200/30 bg-white/5 text-amber-50 hover:border-amber-200/70 hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
