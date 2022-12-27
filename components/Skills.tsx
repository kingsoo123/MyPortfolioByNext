import React from "react";
import { motion } from "framer-motion";
import Skill from "./skill";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import fig from "../assets/fig.png";
import trell from "../assets/trell.png";
import gitss from "../assets/git.png";

import jira from "../assets/jira.png";
import rdx from "../assets/rdx.png";
import jss from "../assets/jss.jpeg";
import tss from "../assets/ts.jpeg";
import wind from "../assets/wind.jpeg";

type Props = {};

function Skills({}: Props) {
  const skillsObj = [
    {
      id: 1,
      pics: html5,
      level: "80%",
    },
    {
      id: 1,
      pics: css3,
      level: "80%",
    },
    {
      id: 1,
      pics: jss,
      level: "80%",
    },
    {
      id: 1,
      pics: tss,
      level: "70%",
    },
    {
      id: 1,
      pics: wind,
      level: "70%",
    },
    {
      id: 1,
      pics: rdx,
      level: "80%",
    },
    {
      id: 1,
      pics: fig,
      level: "50%",
    },
    {
      id: 1,
      pics: trell,
      level: "80%",
    },
    {
      id: 1,
      pics: jira,
      level: "80%",
    },
    {
      id: 1,
      pics: gitss,
      level: "80%",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill to view current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skillsObj.map((skill, index) => {
          return <Skill key={index} pics={skill.pics} level={skill.level} />;
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
