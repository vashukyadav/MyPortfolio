import { motion } from "framer-motion";
import { useState } from "react";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import TopLeftImg from "../../components/TopLeftImg";
import { fadeIn } from "../../variants";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("javascript");

  const mernProjects = [
    { title: "MERN Stack Projects", desc: "Coming Soon", tech: "React, Node.js, Express, MongoDB", image: "/thumb1.jpg" },
  ];

  const jsProjects = [
    { title: "Songify Music Player", desc: "Music player with playlist features", tech: "HTML, CSS, JavaScript", image: "/thumb1.jpg", view: "#", code: "https://github.com/vashukyadav" },
    { title: "WeKeep Notes", desc: "Notes app with LocalStorage", tech: "JavaScript, TailwindCSS", image: "/thumb2.jpg", view: "#", code: "https://github.com/vashukyadav" },
    { title: "Quiz Web App", desc: "Interactive quiz application", tech: "JavaScript, TailwindCSS", image: "/thumb3.jpg", view: "#", code: "https://github.com/vashukyadav" },
    { title: "Weather API App", desc: "Real-time weather data", tech: "JavaScript, API Integration", image: "/thumb4.jpg", view: "#", code: "https://github.com/vashukyadav" },
    { title: "Todo List App", desc: "Modern UI with Glassmorphism", tech: "JavaScript, CSS", image: "/thumb1.jpg", view: "#", code: "https://github.com/vashukyadav" },
    { title: "Password Generator", desc: "Criteria-based password generator", tech: "JavaScript, HTML", image: "/thumb2.jpg", view: "#", code: "https://github.com/vashukyadav" },
    { title: "Age Calculator", desc: "Age calculator with birthday wishes", tech: "JavaScript, CSS", image: "/thumb3.jpg", view: "#", code: "https://github.com/vashukyadav" },
    { title: "Temperature Converter", desc: "Live temperature conversion", tech: "JavaScript, CSS", image: "/thumb4.jpg", view: "#", code: "https://github.com/vashukyadav" },
    { title: "Simple Calculator", desc: "Basic calculator with jQuery", tech: "JavaScript, jQuery", image: "/thumb1.jpg", view: "#", code: "https://github.com/vashukyadav" },
  ];

  return (
    <div className="min-h-screen bg-primary/30 py-16 sm:py-24 lg:py-32 relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 bg-site bg-cover bg-center bg-no-repeat opacity-20 -z-10" />
      <TopLeftImg src="/rounded-text.png" alt="projects page decoration" />
      <Circles />
      <Bulb />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-8 sm:mb-12"
        >
          My <span className="text-accent">Projects</span>
        </motion.h2>

        {/* Tabs */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="flex bg-white/10 rounded-full p-1 sm:p-2 w-full max-w-md sm:max-w-none sm:w-auto">
            <button
              onClick={() => setActiveTab("javascript")}
              className={`flex-1 sm:flex-none px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-base ${
                activeTab === "javascript" ? "bg-accent text-white" : "text-white/60 hover:text-white"
              }`}
            >
              JavaScript Projects
            </button>
            <button
              onClick={() => setActiveTab("mern")}
              className={`flex-1 sm:flex-none px-3 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-xs sm:text-base ${
                activeTab === "mern" ? "bg-accent text-white" : "text-white/60 hover:text-white"
              }`}
            >
              MERN Projects
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
        >
          {(activeTab === "javascript" ? jsProjects : mernProjects).map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn("up", 0.1 * index)}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 group"
            >
              {project.image && (
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-white/70 mb-3 sm:mb-4 text-sm sm:text-base">{project.desc}</p>
                
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech.split(", ").map((tech) => (
                    <span key={tech} className="bg-accent/20 text-accent px-2 py-1 rounded text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {activeTab === "javascript" && (
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a 
                      href={project.view} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 bg-accent hover:bg-accent/80 text-white px-3 sm:px-4 py-2 rounded text-center transition-colors duration-300 text-sm sm:text-base"
                    >
                      View Live
                    </a>
                    <a 
                      href={project.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 border border-white/30 hover:border-accent text-white hover:text-accent px-3 sm:px-4 py-2 rounded text-center transition-colors duration-300 text-sm sm:text-base"
                    >
                      View Code
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;