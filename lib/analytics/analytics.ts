export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number>,
) => {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, params);
};
