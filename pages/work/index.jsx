import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import TopLeftImg from "../../components/TopLeftImg";
import { fadeIn } from "../../variants";

export const workData = [
  {
    title: "Sawariya",
    description:
      "Developed a responsive web solution for Sawariya with modern UI and optimized performance.",
    link: "#", // yaha apna live demo ya github link de sakte ho
  },
  {
    title: "Deepak",
    description:
      "Built a custom project for Deepak, focusing on MERN stack and real-time features.",
    link: "#",
  },
];

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <TopLeftImg src="/rounded-text.png" alt="work page decoration" />
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
              className="h2 xl:mt-12"
            >
              My work <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Here are some of my featured JavaScript projects including
              <span className="text-accent"> Songify Music Player</span>,{" "}
              <span className="text-accent">WeKeep Notes</span>, and{" "}
              <span className="text-accent">Quiz App</span>.
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
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
