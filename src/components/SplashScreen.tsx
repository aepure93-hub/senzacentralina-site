"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Phase = "splash" | "animating" | "done";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("done");

  useEffect(() => {
    if (!sessionStorage.getItem("splash_seen")) {
      setPhase("splash");
      sessionStorage.setItem("splash_seen", "1");

      const timer1 = setTimeout(() => setPhase("animating"), 4000);
      const timer2 = setTimeout(() => setPhase("done"), 5000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, []);

  if (phase === "done") return <>{children}</>;

  return (
    <>
      {/* Splash overlay */}
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-[1000ms] ease-out"
        style={{
          backgroundColor: "#d3d3d3",
          opacity: phase === "animating" ? 0 : 1,
        }}
      >
        <div
          className="transition-all duration-[1000ms] ease-in-out"
          style={
            phase === "splash"
              ? { transform: "scale(1)", opacity: 1 }
              : { transform: "scale(0)", opacity: 0 }
          }
        >
          <Image
            src="/images/logo-splash.png"
            alt="ReVint"
            width={220}
            height={220}
            priority
            className="w-[180px] h-[180px] md:w-[220px] md:h-[220px]"
          />
        </div>
      </div>

      {/* Page content - hidden during splash */}
      <div className="opacity-0">
        {children}
      </div>
    </>
  );
}
