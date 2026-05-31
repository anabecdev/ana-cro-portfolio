import Link from "next/link";
import Container from "../container/container";
import NavLink from "./navlink";

export default function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-background/70
        backdrop-blur-md
      "
    >
      <Container className="flex items-center justify-between py-6">
        <Link
          href="/"
          className="
            text-2xl
            font-semibold
            tracking-tight
            transition-opacity
            duration-300
            hover:opacity-70
          "
        >
          Ana Becerril
        </Link>

        <nav className="flex gap-8">
          <NavLink href="/case-studies">
            Case Studies
          </NavLink>

          <NavLink href="/experiments">
            Experiments
          </NavLink>

          <NavLink href="/about">
            About
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}