import ComparisonCard from "./comparison-card";

type CardItem = {
  label: string;
  title: string;
  image: string;
  description: string[];
};

type ComparisonGridProps = {
  items: CardItem[];
  columns?: 2 | 3;
};

export default function ComparisonGrid({
  items,
  columns = 2,
}: ComparisonGridProps) {
  return (
    <div
      className={`
        mt-16
        grid
        gap-8
        ${columns === 2 ? "lg:grid-cols-2" : "lg:grid-cols-3"}
      `}
    >
      {items.map((item) => (
        <ComparisonCard key={item.title} {...item} />
      ))}
    </div>
  );
}
