import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import Link from "next/link";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaNode,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiGithub,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import TopLeftImg from "../../components/TopLeftImg";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Development",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, SiRedux, SiTailwindcss],
      },
      {
        title: "Backend & Database",
        icons: [FaNode, SiExpress, SiMongodb],
      },
      {
        title: "Tools & Platforms",
        icons: [FaFigma, SiGithub],
      },
    ],
  },
  {
    title: "achievements",
    info: [
      {
        title: "120 Days DSA Challenge – In Progress",
        stage: "2025",
      },
      {
        title: "Built Swiggy-like Food App (React + Redux)",
        stage: "2025",
      },
      {
        title: "Shared 25+ DSA Problems on LinkedIn",
        stage: "2025",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Freelance MERN Developer – Remote Projects",
        stage: "2024 - Present",
      },
      {
        title: "React Projects – College & Personal Work",
        stage: "2023 - Present",
      },
      {
        title: "Node.js & Express Backend Projects",
        stage: "2024 - Present",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "BCA (Bachelor of Computer Applications) – Vikram University",
        stage: "2023 - 2026",
      },
      {
        title: "DSA Learning & Problem Solving",
        stage: "Ongoing",
      },
      {
        title: "React, Node.js, MongoDB – Self Learning",
        stage: "Ongoing",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 flex items-center justify-center text-center xl:text-left py-16 sm:py-20 lg:py-0">
      <TopLeftImg src="/circles.png" alt="about page decoration" />
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 px-4 sm:px-6 lg:px-8">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mb-8 xl:mb-0">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4 sm:mb-6"
          >
            Turning <span className="text-accent">ideas</span> into scalable{" "}
            <span className="text-accent">web apps</span>.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-sm sm:text-base"
          >
            Aspiring Software Developer with strong foundation in Java, HTML, CSS, JavaScript, and SQL. Currently doing 120 Days DSA Challenge and exploring React.js to become a full-stack developer. Open to internships and tech collaborations.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden sm:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-6 sm:mb-8"
          >
            <div className="flex flex-1 gap-x-2 sm:gap-x-4 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-1 sm:mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[80px] sm:max-w-[100px]">
                  Years of learning & practice.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-1 sm:mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[80px] sm:max-w-[100px]">
                  Completed projects.
                </div>
              </div>

              {/* dsa problems */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-1 sm:mb-2">
                  <CountUp start={0} end={120} duration={5} />
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[80px] sm:max-w-[100px]">
                  DSA Problems solved.
                </div>
              </div>

              {/* achievements */}
              <div className="relative flex-1">
                <div className="text-xl sm:text-2xl xl:text-4xl font-extrabold text-accent mb-1 sm:mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[80px] sm:max-w-[100px]">
                  Major achievements.
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Resume Button */}
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            animate="show"
            className="flex justify-center xl:justify-start mt-6 sm:mt-8"
          >
            <Link href="/resume" className="btn rounded-full border border-white/50 max-w-[170px] px-6 sm:px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group text-sm sm:text-base">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">View Resume</span>
            </Link>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] min-h-[400px] sm:h-[480px]"
        >
          <div className="flex gap-x-2 sm:gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 overflow-x-auto">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative after:w-6 sm:after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 whitespace-nowrap flex-shrink-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-3 sm:gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col sm:flex-row max-w-max gap-x-2 items-center text-center sm:text-left text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 sm:mb-0 text-sm sm:text-base">{item.title}</div>
                <div className="hidden sm:flex">-</div>
                <div className="text-sm sm:text-base">{item.stage}</div>

                <div className="flex gap-x-2 sm:gap-x-4 mt-2 sm:mt-0">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-xl sm:text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
