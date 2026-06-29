type Props = {
  filename: string;
  code: string;
};

export default function EditorialCode({ filename, code }: Props) {
  const lines = code.split("\n");

  return (
    <section className="border-y border-foreground/10 py-10">
      <div className="mb-8 flex items-center gap-6">
        <div className="h-px flex-1 bg-foreground/10" />

        <span className="font-mono text-xs uppercase tracking-[0.35em] text-foreground/40">
          {filename}
        </span>

        <div className="h-px flex-1 bg-foreground/10" />
      </div>

      <div className="font-mono text-[15px] leading-8">
        {lines.map((line, index) => (
          <div key={index} className="grid grid-cols-[40px_1fr]">
            <span className="select-none text-foreground/30">{index + 1}</span>

            <span className="whitespace-pre">{line}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
