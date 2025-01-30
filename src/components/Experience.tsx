"use client";

import { myExperiences } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import ManCanvas from "./canvas/ManCanvas";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="py-20" id="experiences">
      <div className="w-full text-white-600">
        <h3 className="sm:text-4xl text-3xl font-semibold text-gray_gradient">
          My Experiences
        </h3>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div className="col-span-1 rounded-lg bg-black-200 border border-black-300">
            <ManCanvas animationName={animationName} />
          </div>

          <div className="col-span-2 rounded-lg bg-black-200 border border-black-300">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {myExperiences.map((item) => {
                const { id, name, pos, duration, title, icon, animation } =
                  item;
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
                        <Image src={icon} alt="logo" height={64} width={64} />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
