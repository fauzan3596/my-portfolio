"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const SkeletonOne = () => {
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
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAAKwAALACAXQAAQUxQSFIAAAABBxARFxCQERERCQEBERERCQkREREREQkREREREREREREREQEREREREQEREREQEREQERERCAABVlA4TFEAAAAvCQACEG+gkG2kyR8R+T8i8n9E5P+IyP8Rkf8jIv9HRP6PiPwfEfk/IvJ/ROT/iMj/EZH/IyL/R0T+j4j8HxH5PyLyf0Tk/4jI/xGR/yMi/0dE/o+I/B8R+T8i8n9E5P+IyP8Rkf8D4QAAAw=="
          loading="lazy"
        />
      </div>
    </motion.div>
  );
};
