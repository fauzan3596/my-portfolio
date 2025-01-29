import React from "react";
import BallCanvas from "./canvas/BallCanvas";
import { technologies } from "@/constants";

interface Technology {
  name: string;
  icon: string;
}

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center lg:gap-4 md:gap-2 gap-5">
      {technologies.map((technology: Technology) => (
        <div className="lg:w-10 lg:h-10 md:h-7 md:w-7 w-10 h-10" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
