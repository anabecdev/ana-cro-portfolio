import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({
  href,
  children,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className="
        relative
        text-sm
        text-foreground/80
        transition-colors
        duration-300
        hover:text-foreground

        after:absolute
        after:left-0
        after:-bottom-1
        after:h-px
        after:w-0
        after:bg-current
        after:transition-all
        after:duration-300

        hover:after:w-full
      "
    >
      {children}
    </Link>
  );
}