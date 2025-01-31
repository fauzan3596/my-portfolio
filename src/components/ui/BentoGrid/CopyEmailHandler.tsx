"use client";

import Image from "next/image";
import { useState } from "react";

export const CopyEmailHandler = () => {
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
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAAKwAALACAXQAAQUxQSFIAAAABBxARFxCQERERCQEBERERCQkREREREQkREREREREREREREQEREREREQEREREQEREQERERCAABVlA4TFEAAAAvCQACEG+gkG2kyR8R+T8i8n9E5P+IyP8Rkf8jIv9HRP6PiPwfEfk/IvJ/ROT/iMj/EZH/IyL/R0T+j4j8HxH5PyLyf0Tk/4jI/xGR/yMi/0dE/o+I/B8R+T8i8n9E5P+IyP8Rkf8D4QAAAw=="
        loading="lazy"
      />
      <p className="lg:text-2xl md:text-xl font-medium">
        {hasCopied ? "Copied!" : email}
      </p>
    </div>
  );
};
