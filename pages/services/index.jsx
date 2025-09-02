import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import TopLeftImg from "../../components/TopLeftImg";
import { fadeIn } from "../../variants";

export const serviceData = [
  {
    title: "Web Development",
    description:
      "Building responsive and scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).",
  },
  {
    title: "Frontend Development",
    description:
      "Crafting dynamic UIs with React, Redux, and Tailwind CSS for modern, fast, and user-friendly experiences.",
  },
  {
    title: "Backend Development",
    description:
      "Creating secure and efficient REST APIs with Node.js & Express, integrating databases like MongoDB.",
  },
  {
    title: "Problem Solving (DSA)",
    description:
      "Solving Data Structures & Algorithms problems daily to write optimized, clean, and efficient code.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces with Figma and basic graphic editing tools to ensure a smooth user experience.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 flex items-center justify-center">
      <TopLeftImg src="/bulb.png" alt="services page decoration" />
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I specialize in MERN stack development, problem solving, and UI/UX
              design. From creating frontend experiences to building complete
              backend systems, I deliver end-to-end solutions for modern web
              applications.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
