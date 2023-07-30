import React from "react";
import Link from "next/link";
import Image from "next/image";
import valleypay from "../assets/valleypay.png";
import bluecube from "../assets/bluecube.png";
// import airvend from "../assets/airvend.png";
// import flexit from "../assets/flexit.png";
import ajola from "../assets/ajola.png";
import krypt from "../assets/krypt.png";
import wasmer from "../assets/wasmer.png";

import fingos from "../assets/fingos.";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      name: "Transawave",
      url: "https://transawave.com/",
      about:
        "Transawave makes it easy to accept payments from local customers, even for one-off or variable amounts.",
      pics: valleypay,
    },
    {
      id: 2,
      name: "Fingo Africa",
      url: "https://play.google.com/store/search?q=fingo+africa&c=apps",
      about: "Simplified financial service for ambitious Africans",
      pics: fingos,
    },

    {
      id: 3,
      name: "Wasmer",
      url: "https://wasmerr.netlify.app/",
      about:
        "Serve sandboxed WebAssembly apps anywhere through a single runtime and do in days what others do in months.",
      pics: wasmer,
    },
    {
      id: 4,
      name: "Bluecube",
      about: "Bluecube let's you search for images of all type easily",

      url: "https://image-finder-mu.vercel.app/",
      pics: bluecube,
    },

    {
      id: 5,
      name: "Ajola",
      url: "https://play.google.com/store/apps/details?id=com.rckstrt.ajolla",
      about:
        "Connect with friends, family and people who share the same interests as you and receive donations for projects. Communicate privately, watch your favorite content, buy and sell items or just spend time with your community. On Ajolla, supporting the projects of people who matter most is easy. Build great projects with family, friends, and fans.",
      pics: ajola,
    },
    {
      id: 6,
      name: "KryptPush",
      url: "https://kryptpusha.netlify.app/",
      about:
        "This is a web3 project that allows ethereum holders to transafer eth to any wallet in the world. This app tracks the transactions and also keep counts of all transfer done",
      pics: krypt,
    },
  ];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={i}
          >
            <Image
              src={project.pics}
              alt="imggg"
              className="border border-gray-500 w-54 h-54 object-cover object-center md:w-58 md:h-58 xl:w-[400px] xl:h-[230px] filter group-hover:grayscale transition duration:300 ease-in-out"
            />
            <div className="space-y-10 px-10 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length} :{" "}
                </span>
                {project.name}
              </h4>

              <Link
                href={project.url}
                className="cursor-pointer text-sm text-green-300"
              >
                {project.url}
              </Link>
              <p className="text-lg text-center md:text-left">
                {project.about}
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
