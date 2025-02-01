"use client";

import React from "react";
import BallCanvas from "./canvas/BallCanvas";
import { technologies } from "@/constants";
import useDeviceType from "@/hooks/useDeviceType";
import Image from "next/image";

interface Technology {
  name: string;
  icon: string;
}

const Tech = () => {
  const deviceType = useDeviceType();
  
  return (
    <div className="flex flex-row flex-wrap justify-center md:gap-4 gap-5">
      {deviceType === "Desktop"
        ? technologies.map((technology: Technology) => (
            <div
              className="lg:w-10 lg:h-10 md:h-8 md:w-8 w-10 h-10"
              key={technology.name}
            >
              <BallCanvas icon={technology.icon} />
            </div>
          ))
        : technologies.map((technology: Technology) => (
            <div
              key={technology.name}
              className="w-10 h-10 rounded-full p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
            >
              <Image
                src={technology.icon}
                alt={technology.name}
                height={40}
                width={40}
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAAKwAALACAXQAAQUxQSFIAAAABBxARFxCQERERCQEBERERCQkREREREQkREREREREREREREQEREREREQEREREQEREQERERCAABVlA4TFEAAAAvCQACEG+gkG2kyR8R+T8i8n9E5P+IyP8Rkf8jIv9HRP6PiPwfEfk/IvJ/ROT/iMj/EZH/IyL/R0T+j4j8HxH5PyLyf0Tk/4jI/xGR/yMi/0dE/o+I/B8R+T8i8n9E5P+IyP8Rkf8D4QAAAw=="
                loading="lazy"
              />
            </div>
          ))}
    </div>
  );
};

export default Tech;
