// components/ga-analytics.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/gtag";

export default function GAAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = searchParams?.toString();
    const url = pathname + (params ? `?${params}` : "");
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
