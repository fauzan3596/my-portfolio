import React from "react";
import BallCanvas from "./canvas/BallCanvas";
import { technologies } from "@/constants";

interface Technology {
  name: string;
  icon: string;
}

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center md:gap-4 gap-5">
      {technologies.map((technology: Technology) => (
        <div className="lg:w-10 lg:h-10 md:h-8 md:w-8 w-10 h-10" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
