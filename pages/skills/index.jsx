import { motion } from "framer-motion";
import { 
  FaJava, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaNodeJs 
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiExpress, 
  SiMysql 
} from "react-icons/si";
import TopLeftImg from "../../components/TopLeftImg";
import { fadeIn } from "../../variants";

const skillsData = [
  { name: "Java", icon: FaJava, level: 85, color: "#f89820" },
  { name: "JavaScript", icon: FaReact, level: 80, color: "#f7df1e" },
  { name: "React", icon: FaReact, level: 75, color: "#61dafb" },
  { name: "HTML5", icon: FaHtml5, level: 90, color: "#e34f26" },
  { name: "CSS3", icon: FaCss3Alt, level: 85, color: "#1572b6" },
  { name: "Bootstrap", icon: FaBootstrap, level: 80, color: "#7952b3" },
  { name: "Node.js", icon: FaNodeJs, level: 70, color: "#339933" },
  { name: "Express", icon: SiExpress, level: 65, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, level: 70, color: "#47a248" },
  { name: "SQL", icon: SiMysql, level: 80, color: "#4479a1" },
];

const Skills = () => {
  return (
    <div className="h-full bg-primary/30 py-32">
      <TopLeftImg src="/bulb.png" alt="skills page decoration" />
      
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-12"
        >
          My <span className="text-accent">Skills</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn("up", 0.1 * index)}
              initial="hidden"
              animate="show"
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <skill.icon 
                  className="text-4xl mr-4" 
                  style={{ color: skill.color }}
                />
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              
              <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                <motion.div
                  className="bg-accent h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 * index }}
                />
              </div>
              
              <p className="text-white/60 text-sm">{skill.level}% Proficiency</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;