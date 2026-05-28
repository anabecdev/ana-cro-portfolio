import Container from "../container/container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-10">
      <Container className="flex flex-col gap-2 text-sm">
        <p>Ana Becerril</p>
        <p>Frontend Developer · CRO · Experimentation</p>
      </Container>
    </footer>
  );
}