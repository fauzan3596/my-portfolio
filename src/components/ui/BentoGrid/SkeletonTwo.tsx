"use client";

import Tech from "@/components/Tech";
import { motion } from "framer-motion";

export const SkeletonTwo = () => {
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
