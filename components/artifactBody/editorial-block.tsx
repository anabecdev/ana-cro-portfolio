type Props = {
  number: string;
  title: string;
  children: React.ReactNode;
};

export default function EditorialBlock({ number, title, children }: Props) {
  return (
    <section>
      <div className="flex items-center gap-6">
        <span className="font-mono text-xs tracking-[0.2em] text-foreground/40">
          {number}
        </span>

        <div className="h-px flex-1 bg-foreground/10" />
      </div>

      <h3 className="mt-6 text-2xl font-medium tracking-tight">{title}</h3>

      <div className="mt-6">{children}</div>
    </section>
  );
}
