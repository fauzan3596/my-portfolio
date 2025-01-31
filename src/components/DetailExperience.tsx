import { myExperiences } from "@/constants";
import Image from "next/image";
import React from "react";

interface DetailExperienceProps {
  setAnimationName: (animation: string) => void;
}

const DetailExperience = ({ setAnimationName }: DetailExperienceProps) => {
  return (
    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
      {myExperiences.map((item) => {
        const { id, name, pos, duration, title, icon, animation } = item;
        return (
          <div
            key={id}
            className="grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-black-300 rounded-lg sm:px-5 px-2.5 group"
            onClick={() => setAnimationName(animation)}
            onPointerOver={() => setAnimationName(animation)}
            onPointerOut={() => setAnimationName("idle")}
          >
            <div className="flex flex-col h-full justify-start items-center py-2">
              <div className="rounded-3xl w-16 h-16 p-2 bg-black-600">
                <Image
                  src={icon}
                  alt="logo"
                  height={64}
                  width={64}
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAAQAAAAKwAALACAXQAAQUxQSFIAAAABBxARFxCQERERCQEBERERCQkREREREQkREREREREREREREQEREREREQEREREQEREQERERCAABVlA4TFEAAAAvCQACEG+gkG2kyR8R+T8i8n9E5P+IyP8Rkf8jIv9HRP6PiPwfEfk/IvJ/ROT/iMj/EZH/IyL/R0T+j4j8HxH5PyLyf0Tk/4jI/xGR/yMi/0dE/o+I/B8R+T8i8n9E5P+IyP8Rkf8D4QAAAw=="
                  loading="lazy"
                />
              </div>
              <div className="flex-1 w-0.5 mt-4 h-full bg-black-300 group-hover:bg-black-500 group-last:hidden" />
            </div>

            <div className="sm:p-5 px-2.5 py-5">
              <p className="font-bold text-white-800">{name}</p>
              <p className="text-sm mb-5">
                {pos} - {duration}
              </p>
              <p className="group-hover:text-white transition ease-in-out duration-500">
                {title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailExperience;
