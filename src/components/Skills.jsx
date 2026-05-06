import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, 
  FaJava, FaGitAlt, FaGithub, FaDocker, FaCode 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiJavascript, SiExpress, 
  SiSpringboot, SiMongodb, SiMysql, SiPostman, SiFramer
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skills = [
  { name: "React.js", category: "Frontend", icon: <FaReact />, color: "#61DAFB" },
  { name: "JavaScript", category: "Frontend", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "Tailwind CSS", category: "Frontend", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "HTML5", category: "Frontend", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", category: "Frontend", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Framer Motion", category: "Frontend", icon: <SiFramer />, color: "#E902B5" },
  
  { name: "Node.js", category: "Backend", icon: <FaNodeJs />, color: "#339933" },
  { name: "Express.js", category: "Backend", icon: <SiExpress />, color: "#ffffff" },
  { name: "Spring Boot", category: "Backend", icon: <SiSpringboot />, color: "#6DB33F" },
  { name: "Java", category: "Backend", icon: <FaJava />, color: "#007396" },
  
  { name: "MongoDB", category: "Database", icon: <SiMongodb />, color: "#47A248" },
  { name: "MySQL", category: "Database", icon: <SiMysql />, color: "#4479A1" },
  
  { name: "Git", category: "Tools", icon: <FaGitAlt />, color: "#F05032" },
  { name: "GitHub", category: "Tools", icon: <FaGithub />, color: "#ffffff" },
  { name: "Docker", category: "Tools", icon: <FaDocker />, color: "#2496ED" },
  { name: "VS Code", category: "Tools", icon: <VscCode />, color: "#007ACC" },
  { name: "Postman", category: "Tools", icon: <SiPostman />, color: "#FF6C37" },
];

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-32 max-w-7xl mx-auto px-6 sm:px-16 relative overflow-hidden">
      {/* Ambient glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-16 relative z-10"
      >
        <span className="px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <FaCode /> Technical Arsenal
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Capabilities.</span>
        </h2>
      </motion.div>

      {/* Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-16 relative z-10"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`relative px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 outline-none ${
              activeCategory === category
                ? "text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
          >
            {activeCategory === category && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-full z-[-1]"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group cursor-pointer relative"
            >
              {/* Glowing shadow behind the card matching the brand color */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-xl"
                style={{ backgroundColor: skill.color }}
              ></div>

              <div className="relative glassmorphism h-36 flex flex-col items-center justify-center p-6 rounded-3xl bg-[#0A0D1C]/80 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-colors duration-300 z-10 overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div 
                  className="text-5xl mb-4 transition-transform duration-500 group-hover:rotate-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
