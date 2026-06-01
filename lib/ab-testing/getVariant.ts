import { cookies } from "next/headers";

export async function getVariant() {
  const cookieStore = await cookies();

  return cookieStore.get("portfolio_variant")?.value ?? "A";
}
