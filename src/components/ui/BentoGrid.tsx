import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { CopyEmailHandler } from "./BentoGrid/CopyEmailHandler";
import { SkeletonFive } from "./BentoGrid/SkeletonFive";
import { SkeletonFour } from "./BentoGrid/SkeletonFour";
import { SkeletonTwo } from "./BentoGrid/SkeletonTwo";
import { SkeletonOne } from "./BentoGrid/SkeletonOne";
import { SkeletonThree } from "./BentoGrid/SkeletonThree";

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

const items = [
  {
    title: "Hi, I'm Fauzan Ramadhan",
    description: (
      <span className="lg:text-sm text-xs">
        With a Computer Science degree and as a Hacktiv8 graduate, I&apos;m
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
    title: "I'm highly adaptable to different time zones and locations",
    description: (
      <span className="lg:text-sm text-xs">
        I&apos;m based in Jakarta, Indonesia, and open to remote work across the
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
        isn&apos;t just my profession—it&apos;s my passion. I enjoy exploring new
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
