"use client";

import { usePathname } from "next/navigation";
import Particles from "@/components/Particles";
import ElasticCursor from "@/components/ui/ElasticCursor";
import MotionNudge from "@/components/motion-nudge";
import { usePerfProfile } from "@/hooks/use-perf-profile";

export default function AppOverlays() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { particleCount, maxDpr, disableDecorative } = usePerfProfile();

  return (
    <>
      {particleCount > 0 && (
        <Particles
          className="fixed inset-0 -z-10 animate-fade-in"
          quantity={particleCount}
          maxDpr={maxDpr}
        />
      )}
      {!disableDecorative && <ElasticCursor />}
      {isHome && <MotionNudge />}
    </>
  );
}
