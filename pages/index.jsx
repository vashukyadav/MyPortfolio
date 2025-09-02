import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CountUp from "react-countup";
import { BsArrowRight } from "react-icons/bs";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNode,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import TopLeftImg from "../components/TopLeftImg";
import Circles from "../components/Circles";
import Bulb from "../components/Bulb";
import ServiceSlider from "../components/ServiceSlider";

import { fadeIn } from "../variants";

const skillsData = [
  { name: "Java", icon: FaJava, level: 85 },
  { name: "JavaScript", icon: FaJs, level: 80 },
  { name: "React", icon: FaReact, level: 75 },
  { name: "HTML5", icon: FaHtml5, level: 90 },
  { name: "CSS3", icon: FaCss3, level: 85 },
  { name: "Node.js", icon: FaNode, level: 70 },
];

const jsProjects = [
  { title: "Songify Music Player", desc: "Music player with playlist features", image: "/thumb1.jpg" },
  { title: "WeKeep Notes", desc: "Notes app with LocalStorage", image: "/thumb2.jpg" },
  { title: "Quiz Web App", desc: "Interactive quiz application", image: "/thumb3.jpg" },
  { title: "Weather API App", desc: "Real-time weather data", image: "/thumb4.jpg" },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      alert("Thank you. I will get back to you ASAP.");
      setIsLoading(false);
      event.target.reset();
    }, 1000);
  };

  return (
    <div className="overflow-y-auto h-screen scroll-smooth">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-site bg-cover bg-center bg-no-repeat opacity-20 -z-10" />
      
      {/* Hero Section */}
      <section id="home" className="bg-primary/60 min-h-screen relative flex items-center">
        <TopLeftImg src="/top-left-img.png" alt="home page decoration" />
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-20 xl:text-left min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 mt-16 sm:mt-20 lg:mt-0"
            >
              Hi there <br className="hidden sm:block" /> 
              <span className="sm:hidden"> </span>
              I'm <span className="text-accent">Vashuk Yadav</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-xs sm:max-w-sm lg:max-w-xl mx-auto xl:mx-0 mb-8 sm:mb-10 xl:mb-16 px-4 sm:px-0 text-sm sm:text-base"
            >
              Aspiring Software Developer with expertise in <span className="text-accent">JavaScript</span>, <span className="text-accent">HTML/CSS</span>, <span className="text-accent">SQL</span>, and <span className="text-accent">Git</span>. Currently doing <span className="text-accent">120 Days DSA Challenge</span> and exploring <span className="text-accent">React.js</span> to become a full-stack developer.
            </motion.p>

            <div className="flex justify-center xl:hidden relative mb-8 sm:mb-0">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        
        <div className="w-full sm:w-[800px] lg:w-[1000px] xl:w-[1280px] h-full absolute right-0 bottom-0 overflow-hidden">
          <div
            role="img"
            className="bg-none lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
            aria-hidden
          />
          <ParticlesContainer />
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="hidden sm:block w-full h-full max-w-[400px] max-h-[400px] sm:max-w-[500px] sm:max-h-[500px] lg:max-w-[650px] lg:max-h-[600px] xl:max-w-[737px] xl:max-h-[678px] absolute -bottom-20 sm:-bottom-24 lg:bottom-0 right-[5%] sm:right-[8%] lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-primary/30 py-16 sm:py-24 lg:py-32">
        <Circles />
        <div className="container mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="h2 text-center mb-8 sm:mb-12"
          >
            My <span className="text-accent">Skills</span>
          </motion.h2>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
          >
            {skillsData.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <skill.icon className="text-2xl sm:text-3xl lg:text-4xl mr-3 sm:mr-4 text-accent flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-white/20 rounded-full h-2 sm:h-3 mb-2">
                  <div
                    className="bg-accent h-2 sm:h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                
                <p className="text-white/60 text-xs sm:text-sm">{skill.level}% Proficiency</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-primary/30 py-16 sm:py-24 lg:py-32">
        <Bulb />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="h2 text-center mb-8 sm:mb-12"
          >
            My <span className="text-accent">Projects</span>
          </motion.h2>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto"
          >
            {jsProjects.map((project, index) => (
              <div
                key={project.title}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-3 sm:mb-4 text-sm sm:text-base">{project.desc}</p>
                  
                  <Link 
                    href="/projects"
                    className="inline-block bg-accent hover:bg-accent/80 text-white px-3 sm:px-4 py-2 rounded transition-colors duration-300 text-sm sm:text-base"
                  >
                    View All Projects
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-primary/30 py-16 sm:py-24 lg:py-36 flex items-center">
        <Circles />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row gap-x-8 gap-y-8 xl:gap-y-0">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
                className="h2 xl:mt-8"
              >
                My services <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm sm:text-base px-4 sm:px-0"
              >
                I specialize in MERN stack development, problem solving, and UI/UX design. From creating frontend experiences to building complete backend systems.
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <ServiceSlider />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-primary/30 pb-0">
        <div className="container mx-auto py-16 sm:py-24 lg:py-32 text-center xl:text-left flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="h2 text-center mb-8 sm:mb-12"
            >
              Let's <span className="text-accent">connect.</span>
            </motion.h2>

            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-4 sm:gap-6 w-full mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input flex-1"
                  disabled={isLoading}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="input flex-1"
                  disabled={isLoading}
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input"
                disabled={isLoading}
                required
              />
              <textarea
                name="message"
                placeholder="Message..."
                className="textarea"
                disabled={isLoading}
                required
              />
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-6 sm:px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto xl:mx-0 text-sm sm:text-base"
                disabled={isLoading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Let's talk
                </span>
                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-lg sm:text-[22px]"
                  aria-hidden
                />
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;