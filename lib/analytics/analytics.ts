export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number>,
) => {
  
  if (typeof window === "undefined") return;

  console.log("gtag:", window.gtag);

  console.log("Sending event", eventName, params);

  window.gtag?.("event", eventName, params);
};
