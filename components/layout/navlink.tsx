"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        `
        relative
        text-sm
        transition-colors
        duration-300

        after:absolute
        after:left-0
        after:-bottom-1
        after:h-px
        after:transition-all
        after:duration-300

        hover:after:w-full
      `,
        isActive
          ? `
            text-[var(--accent)]

            after:w-full
            after:bg-[var(--accent)]
          `
          : `
            text-foreground/80
            hover:text-foreground

            after:w-0
            after:bg-current
          `,
      )}
    >
      {children}
    </Link>
  );
}
