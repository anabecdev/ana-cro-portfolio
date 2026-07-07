import { getUTMParams } from "./utm";

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number>,
) => {
  if (!window.gtag) return;

  window.gtag?.("event", eventName, {
    ...params,
    ...getUTMParams(),
  });
};
