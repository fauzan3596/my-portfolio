"use client";

import { myProjects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa6";
import ProjectCanvas from "./canvas/ProjectCanvas";

const projectCount = myProjects.length;

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentProject = myProjects[selectedIndex];

  const handleNavigation = (direction: string) => {
    setSelectedIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="py-20">
      <p className="sm:text-4xl text-3xl font-semibold text-gray_gradient">
        My Selected Works
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <Image
              src={currentProject.spotlight}
              alt="Spotlight"
              width={999}
              height={384}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-2 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <Image
              src={currentProject.logo}
              alt="logo"
              width={200}
              height={48}
              className="shadow-sm h-12 w-full"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center"
                >
                  <Image src={tag.path} alt={tag.name} height={40} width={40} />
                </div>
              ))}
            </div>

            <Link
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <FaArrowUp />
            </Link>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <ProjectCanvas texture={currentProject.texture} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
