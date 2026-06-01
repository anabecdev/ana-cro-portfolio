import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const variant = request.cookies.get("portfolio_variant");

  if (variant) {
    return NextResponse.next();
  }

  const assignedVariant = Math.random() > 0.5 ? "A" : "B";

  const response = NextResponse.next();

  response.cookies.set("portfolio_variant", assignedVariant, {
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}

export const config = {
  matcher: "/",
};
