"use client";
 
import { AnchorHTMLAttributes } from "react";
import { trackEvent } from "@/lib/analytics/trackEvent";


type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  params?: Record<string, string | number>;
};

export default function TrackedLink({
  event,
  params,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackEvent(event, params);

    onClick?.(e);
  };

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}