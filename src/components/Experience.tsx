"use client";

import React, { useState } from "react";
import ManCanvas from "./canvas/ManCanvas";
import DetailExperience from "./DetailExperience";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="my-20" id="experiences">
      <div className="w-full text-white-600">
        <h3 className="sm:text-4xl text-3xl font-semibold text-gray_gradient">
          My Experiences
        </h3>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-12">
          <div className="col-span-1 rounded-lg bg-black-200 border border-black-300">
            <ManCanvas animationName={animationName} />
          </div>

          <div className="col-span-2 rounded-lg bg-black-200 border border-black-300">
            <DetailExperience setAnimationName={setAnimationName} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
