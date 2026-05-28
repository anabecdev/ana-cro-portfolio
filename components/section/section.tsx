type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      className={`
        py-24
        border-b
        border-black/5
        ${className}
      `}
    >
      {children}
    </section>
  );
}