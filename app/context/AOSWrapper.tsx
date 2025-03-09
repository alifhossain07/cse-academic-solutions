"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animations happen only once
      offset: 200, // Offset from the trigger point
    });
  }, []);

  return <>{children}</>;
}