import { motion } from "framer-motion";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    title: "Java Full Stack Development",
    company: "HCLTech",
    date: "Dec '25 - Feb '26",
    icon: <FaLaptopCode />,
    points: [
      "Gained hands-on experience in Java, Spring Boot, REST API development, and full-stack application architecture.",
      "Developed scalable web modules integrating React frontend with Java backend services.",
      "Learned industry practices, including MVC design pattern, database integration, and real-time application workflow.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 max-w-7xl mx-auto px-6 sm:px-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-24"
      >
        <span className="px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
          <FaBriefcase /> Professional Journey
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-purple-500">Training.</span>
        </h2>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Animated Glowing Timeline line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 w-1 bg-gradient-to-b from-primary via-secondary to-purple-600 shadow-[0_0_15px_#38bdf8]"
        ></motion.div>

        <div className="flex flex-col gap-16 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative grid gap-10 md:grid-cols-2 md:items-center group"
            >
              {/* Timeline Icon */}
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#0A0D1C] border-[3px] border-secondary flex items-center justify-center text-white text-2xl z-10 shadow-[0_0_20px_rgba(56,189,248,0.5)] cursor-pointer"
              >
                {exp.icon}
              </motion.div>

              {/* Experience Card */}
              <div className="w-full md:w-auto relative">
                {/* The Card */}
                <div className="glassmorphism p-8 rounded-3xl bg-[#0A0D1C]/80 backdrop-blur-xl border border-white/10 relative overflow-hidden group-hover:border-secondary/50 transition-colors duration-500 shadow-2xl">
                  {/* Subtle hover glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  
                  <div className="flex flex-col relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-gray-400">{exp.company}</h4>
                    <span className="inline-block px-3 py-1 mt-3 mb-5 w-fit rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-bold tracking-widest">
                      {exp.date}
                    </span>
                  </div>
                  <ul className="list-disc ml-4 space-y-3 relative z-10">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-300 text-[15px] leading-relaxed pl-2 marker:text-secondary marker:text-xl">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
