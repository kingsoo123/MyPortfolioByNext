import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import kings from "../assets/kingsley.jpeg";
import tw from "../assets/tw.png";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 mt-40 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        //viewport={{ once: true }}
      >
        <Image
          src={kings}
          alt="imggg"
          className=" md:mb-0 w-32 h-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px]"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">CEO DPLUS GLOBAL</h4>
        <p className="font-bold text-2xl mt-1">DPlus Global</p>
        <div className="flex space-x-2 my-2">
          <Image src={tw} alt="imggg" className="w-10 h-10 rounded-full" />
          <Image src={tw} alt="imggg" className="w-10 h-10 rounded-full" />
          <Image src={tw} alt="imggg" className="w-10 h-10 rounded-full" />
          <Image src={tw} alt="imggg" className="w-10 h-10 rounded-full" />
        </div>
        <p className="uppercase py-5 text-gray-500">started work... ended</p>
        <ul className="list-disc space-y-2 ml-5 text-sm">
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
