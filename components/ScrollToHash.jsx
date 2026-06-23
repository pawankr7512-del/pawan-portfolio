"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/navigation";

export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const pending = sessionStorage.getItem("scrollTo");
    if (pending) {
      sessionStorage.removeItem("scrollTo");
      const timer = setTimeout(() => scrollToSection(pending), 120);
      return () => clearTimeout(timer);
    }

    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const timer = setTimeout(() => scrollToSection(hash), 120);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
