"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { GlobeMethods } from "react-globe.gl";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export const SkeletonThree = () => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);

  useEffect(() => {
    const globe = globeEl.current;
    if (typeof window !== "undefined") {
      if (globe) {
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.5;
      }
    }
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center absolute -top-10 -left-1">
        <Globe
          ref={globeEl}
          height={326}
          width={326}
          backgroundColor="rgba(0, 0, 0, 0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          htmlElementsData={[
            { lat: -6.2, lng: 106.816666, color: "red", size: 12 },
          ]}
          htmlElement={(d) => {
            const data = d as {
              lat: number;
              lng: number;
              color: string;
              size: number;
            };
            const el = document.createElement("div");
            el.style.color = data.color;
            el.style.width = `${data.size}px`;
            el.style.width = `${data.size}px`;
            return el;
          }}
        />
      </div>
    </motion.div>
  );
};
