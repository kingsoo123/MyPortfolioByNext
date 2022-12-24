import React from "react";
import Image from "next/image";
import tw from "../assets/tw.png";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <Image
              src={tw}
              alt="imggg"
              //className="border border-gray-500 w-24 h-24 rounded-full object-cover object-center md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration:300 ease-in-out"
            />
            <div className="space-y-10 px-10 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length} :
                </span>
                Netflix clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                distinctio unde voluptatem vero voluptatibus, hic iste, error
                itaque eaque nisi quam magnam ducimus laudantium fugiat facere!
                Placeat eius debitis incidunt.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
