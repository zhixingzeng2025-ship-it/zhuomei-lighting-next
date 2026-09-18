"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(eventName: string, parameters: Record<string, string | number | boolean> = {}) {
  window.gtag?.("event", eventName, parameters);
}

export function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.includes("wa.me") || href.includes("whatsapp")) trackConversion("contact_whatsapp", { link_url: href });
      else if (href.startsWith("mailto:")) trackConversion("contact_email", { link_url: href });
      else if (href.startsWith("tel:")) trackConversion("contact_phone", { link_url: href });
      else if (href.includes("/contact")) trackConversion("contact_page_open", { link_url: href });
    };
    document.addEventListener("click", trackClick);
    const trackProjectEvent = (event: Event) => {
      const detail = (event as CustomEvent<{ name: string; payload?: Record<string, string | number | boolean> }>).detail;
      if (detail?.name) trackConversion(detail.name, detail.payload || {});
    };
    window.addEventListener("zomei_project_event", trackProjectEvent);
    return () => {
      document.removeEventListener("click", trackClick);
      window.removeEventListener("zomei_project_event", trackProjectEvent);
    };
  }, []);

  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
