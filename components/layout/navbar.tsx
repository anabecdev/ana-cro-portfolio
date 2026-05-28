import Link from "next/link";
import Container from "../container/container";

export default function Navbar() {
  return (
    <header className="border-b border-black/10 bg-background">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-medium">
          Ana Becerril
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/experiments">Experiments</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </Container>
    </header>
  );
}