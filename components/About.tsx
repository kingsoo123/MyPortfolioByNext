import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import kings from "../assets/kingsley.jpeg";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        className="pt-40"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        //viewport={{ once: true }}
      >
        <Image
          src={kings}
          alt="imggg"
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10 pt-20">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50 ">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Result driven Front-end Developer, proven to provide insight into
          business application, from architecture to implementation, design to
          testing. Product-minded with 5 years’ experience integrating latest
          Front-end skills to optimize Client-side systems. Am a software
          developer with a passion for building great apps that impact people,
          am driven by the aim to get results and make the most out of limited
          resources at my disposal. Am looking for opportunities that I can
          leverage on to help me grow as a developer.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
