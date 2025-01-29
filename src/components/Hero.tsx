import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="py-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-[50rem] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[57vw] flex flex-col items-center justify-end ">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-96">
            Crafting Engaging Interfaces with React & Next.js
          </h2>

          <TextGenerateEffect
            className="text-center text-3xl md:text-4xl lg:text-5xl"
            words="Transforming Ideas into Seamless User Experiences"
          />

          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Fauzan, a Frontend Developer based in Jakarta
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow className="h-3 w-3" />}
              position="right"
            />
          </a>
        </div>
      </div>

      <div className="relative h-60 w-full z-50">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
