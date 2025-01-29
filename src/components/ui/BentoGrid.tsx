"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { motion } from "framer-motion";
import Image from "next/image";
import Tech from "../Tech";
import Globe from "react-globe.gl";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 justify-center items-center w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <div className="border border-black-300 bg-black-200 rounded-xl sm:p-3 p-1 shadow-xl">
        <Image
          src="/assets/grid/grid1.png"
          alt="avatar"
          width={80}
          height={80}
          className="rounded-xl"
        />
      </div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <Tech />
    </motion.div>
  );
};
const SkeletonThree = () => {
  const globeEl = useRef<any>(null);

  useEffect(() => {
    const globe = globeEl.current;
    if (typeof window !== "undefined") {
      // Now it's safe to use window
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

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
          showAtmosphere
          showGraticules
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          htmlElementsData={[
            { lat: -6.2, lng: 106.816666, color: "red", size: 12 },
          ]}
          htmlElement={(d: any) => {
            const el = document.createElement("div");
            el.innerHTML = markerSvg;
            el.style.color = d.color;
            el.style.width = `${d.size}px`;
            return el;
          }}
        />
      </div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/assets/web.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Exploring the World of 3D
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Curious
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/assets/tech/tailwind.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is Life
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/assets/tech/redux.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          React, Redux, and the Future
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Visionary
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const CopyEmailHandler = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const email = "fauzan3596@gmail.com";

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText("fauzan3596@gmail.com").then(() => {
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
      });
    }
  };

  return (
    <div
      className="cursor-pointer flex justify-center items-center gap-2"
      onClick={handleCopy}
    >
      <Image
        src={hasCopied ? "/assets/grid/tick.svg" : "/assets/grid/copy.svg"}
        alt="copy"
        width={20}
        height={20}
      />
      <p className="lg:text-2xl md:text-xl font-medium">
        {hasCopied ? "Copied!" : email}
      </p>
    </div>
  );
};

const items = [
  {
    title: "Hi, I’m Fauzan Ramadhan",
    description: (
      <span className="lg:text-sm text-xs">
        With a Computer Science degree and as a Hacktiv8 graduate, I’m
        passionate about creating seamless, interactive user experiences
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },
  {
    title: "Tech Stack",
    description: (
      <span className="lg:text-sm text-xs">
        I work with a diverse range of technologies, frameworks, and tools to
        develop seamless, high-performance, and user-friendly applications.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
  },
  {
    title: "I’m highly adaptable to different time zones and locations",
    description: (
      <span className="lg:text-sm text-xs">
        I’m based in Jakarta, Indonesia, and open to remote work across the
        country and worldwide
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
  },
  {
    title: "My Passion for Coding",
    description: (
      <span className="lg:text-sm text-xs">
        I love solving problems and creating things through code. Programming
        isn't just my profession—it's my passion. I enjoy exploring new
        technologies, enhancing my skills, and diving into the world of 3D
        development.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
  },

  {
    title: <p className="!text-center">Contact Me</p>,
    description: <CopyEmailHandler />,
    header: <SkeletonFive />,
    className: "md:col-span-1",
  },
];
