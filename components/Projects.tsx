import React from "react";
import Link from "next/link";
import Image from "next/image";
import vogue from "../assets/vogueWeb.png";
import bluecube from "../assets/bluecube.png";
import airvend from "../assets/airvend.png";
import flexit from "../assets/flexit.png";
import skillpaddy from "../assets/skillpaddy.png";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      name: "Voguepay",
      url: "https://www.voguepay.com/",
      about:
        "VoguePay makes it easy to collect payments from local customers, even for one-off or variable amounts.",
      pics: vogue,
    },
    {
      id: 2,
      name: "Bluecube",
      about: "Bluecube let's you search for images of all type easily",

      url: "https://image-finder-mu.vercel.app/",
      pics: bluecube,
    },
    {
      id: 3,
      name: "Airgate",
      url: "https://airgate.ng/",
      about:
        "Experience a fast and easy payment process; work with well-documented APIs that simplify the payment gateway development process. Our B2B and B2C online payment processor empowers businesses to thrive, from simple one-page projects to complex products.",
      pics: airvend,
    },
    {
      id: 4,
      name: "Flexit",
      url: "https://flexit.africa/",
      about:
        "Connect with the best Tech Professionals in the Country across industries seamlessly",
      pics: flexit,
    },
    {
      id: 4,
      name: "Skillpaddy",
      url: "https://skillpaddy.com/",
      about: "Looking to kickstart your journey in Tech but don’t know how?",
      pics: skillpaddy,
    },
  ];

  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <Image
              src={project.pics}
              alt="imggg"
              className="border border-gray-500 w-54 h-54 object-cover object-center md:w-58 md:h-58 xl:w-30 xl:h-42 filter group-hover:grayscale transition duration:300 ease-in-out"
            />
            <div className="space-y-10 px-10 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length} :{" "}
                </span>
                {project.name}
              </h4>

              <Link
                href="https://www.voguepay.com/"
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
