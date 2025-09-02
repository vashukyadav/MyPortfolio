import { motion } from "framer-motion";
import TopLeftImg from "../../components/TopLeftImg";
import { fadeIn } from "../../variants";

const Resume = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <TopLeftImg src="/avatar.png" alt="resume page decoration" />
      
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-8"
        >
          My <span className="text-accent">Resume</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Vashuk Yadav</h1>
            <p className="text-accent text-lg">Aspiring Software Engineer | MERN Stack & DSA Enthusiast</p>
            <p className="text-white/60 mt-2">📍 Khategaon, Madhya Pradesh, India</p>
            <p className="text-white/60">📧 vashuuyadav08@gmail.com | 🔗 linkedin.com/in/vashuk-yadav9753</p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-accent mb-4">Top Skills</h3>
            <div className="flex flex-wrap gap-3">
              {["SQL", "Git", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Java"].map((skill) => (
                <span key={skill} className="bg-accent/20 text-white px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-accent mb-4">Summary</h3>
            <p className="text-white/80 leading-relaxed">
              Aspiring Software Developer with a strong foundation in Java, HTML, CSS, JavaScript, and SQL, 
              passionate about building responsive and interactive web applications that solve real-world problems. 
              Currently doing a 120 Days of DSA Challenge, focused on mastering Data Structures and Algorithms 
              to enhance problem-solving skills and prepare for technical interviews.
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-accent mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-white">Bachelor's degree, BCA</h4>
                <p className="text-accent">Vikram University</p>
                <p className="text-white/60">August 2023 – August 2026</p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-white">Mathematics</h4>
                <p className="text-accent">Chitransh Public Higher Secondary School, Nemawer</p>
                <p className="text-white/60">July 2022 – February 2023</p>
              </div>
            </div>
          </div>

          {/* Current Focus */}
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">Current Focus</h3>
            <ul className="text-white/80 space-y-2">
              <li>• 120 Days DSA Challenge - Mastering Data Structures and Algorithms</li>
              <li>• Building frontend projects with HTML, CSS, and JavaScript</li>
              <li>• Learning React.js for modern web development</li>
              <li>• Exploring Node.js, Express.js, and MongoDB for full-stack development</li>
              <li>• Active on Git and GitHub for version control and project showcase</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;