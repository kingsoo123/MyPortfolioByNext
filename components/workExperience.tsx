import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import fingo from "../assets/fingo.png";
import vooms from "../assets/vooms.jpeg";
import intel from "../assets/intel.jpeg";
import vogue from "../assets/vogue.png";
import card from "../assets/card.png";
import tingo from "../assets/tingo.png";
import airgate from "../assets/airgate.png";

type Props = {};

const DemoComp = () => {
  return <p>hello world</p>;
};

function WorkExperience({}: Props) {
  const experiences = [
    {
      id: 1,
      companyName: "FINGO AFRICA(YC)",
      jd: "Frontend Engineer",
      startDate: "May 2022",
      endDate: "Dec 2022",
      description:
        "As one of the key frontend engineer in Fingo a company based in USA and Kenya, I am responsible for building key features for the mobile app (using React Native). Also taking part in key UI/UX planning.",
      pics: fingo,
    },
    {
      id: 1,
      companyName: "Intelligent Innovations Company ",
      jd: "Frontend Engineer",
      startDate: "Sept 2022",
      endDate: "March 2023",
      description:
        "As a Front-End Software Developer, I work closely with a multidisciplinary team consisting of Project Managers, product designers, UI/UX designers, Backend and Front-End Developers",
      pics: intel,
    },
    {
      id: 1,
      companyName: "CARDINAL STONE INVESTMENT BANK ",
      jd: "Frontend Engineer",
      startDate: "Apr 2021",
      endDate: "Nov 2021",
      description:
        "This stock broking company has branches in Lagos,Abuja and the UK. I worked as the Frontend Developer utilizing React Framework. I was involved in API Request Response design patterns.",
      pics: card,
    },
    {
      id: 1,
      companyName: "VOGUEPAY COMPANY",
      jd: "Lead Frontend Engineer",
      startDate: "May 2021",
      endDate: "Oct 2022",
      description:
        "This FINTECH company has branches in Nigeria, UK and Malaysia. I work as a frontend Lead Developer (React and React Native) developer. Involved in building an online payment service for business merchants etc.",
      pics: vogue,
    },
    {
      id: 1,
      companyName: "VOOMSWAY LIMITED",
      jd: "Frontend Engineer",
      startDate: "Apr 2021",
      endDate: "Nov 2021",
      description:
        "This Transportation company. I work as a frontend (React and React Native) developer. Involved in building a bus ticketing App.",
      pics: vooms,
    },
    {
      id: 1,
      companyName: "TingoMobile",
      jd: "Frontend Engineer",
      startDate: "Sept 2022",
      endDate: " Nov 2022",
      description:
        "This FINTECH company has branches in Nigeria and UK. I  as a frontend Lead Developer (React) developer. Involved in building an online payment service for business merchants etc.",
      pics: tingo,
    },
    {
      id: 1,
      companyName: "Airvend",
      jd: "Frontend Engineer",
      startDate: "May 2022",
      endDate: " Oct 2022",
      description:
        "This FINTECH company has branches in Nigeria and UK. I work as a frontend Lead Developer (React) developer. Involved in building an online payment service for business merchants etc.",
      pics: airgate,
    },
  ];
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mt-20">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {experiences.map((experience, index) => {
          return (
            <ExperienceCard
              key={index}
              experience={experience.jd}
              companyName={experience.companyName}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              pics={experience.pics}
            />
          );
        })}

        {/* <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard /> */}
      </div>
      <DemoComp />
    </motion.div>
  );
}

export default WorkExperience;
