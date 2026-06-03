import VariantCard from "./variant-card";
import { variants } from "../utils/variants";

export default function ExperimentMethodology() {
  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-2">
      {variants.map((variant) => (
        <VariantCard key={variant.variant} {...variant} />
      ))}
    </div>
  );
}
