// lib/gtag.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export const pageview = (url: string) => {
  if (!GA_ID) return;
  // @ts-ignore
  window.gtag?.("config", GA_ID, { page_path: url });
};

export const gaEvent = (action: string, params: Record<string, any> = {}) => {
  // @ts-ignore
  window.gtag?.("event", action, params);
};
