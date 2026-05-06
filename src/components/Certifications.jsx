import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";

const certifications = [
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Coursera",
    date: "April 2024",
    link: "#",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Server-side JavaScript with Node.js",
    issuer: "Coursera",
    date: "May 2024",
    link: "#",
    color: "from-green-500 to-emerald-400"
  },
  {
    title: "Generative AI with Large Language Models",
    issuer: "Coursera",
    date: "April 2024",
    link: "#",
    color: "from-purple-500 to-pink-500"
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 max-w-7xl mx-auto px-6 sm:px-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-20 relative z-10"
      >
        <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
          <FaAward /> Continuous Learning
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Certifications.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="group relative h-full cursor-pointer"
          >
            {/* Holographic Glowing Background Border */}
            <div className={`absolute -inset-0.5 rounded-[2rem] bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`}></div>
            
            <div className="relative h-full glassmorphism p-8 rounded-[2rem] bg-[#0A0D1C]/90 backdrop-blur-2xl border border-white/10 flex flex-col justify-between overflow-hidden z-10">
              
              {/* Sweeping Glare Effect */}
              <div className="absolute top-0 -left-[100%] group-hover:left-[200%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[25deg] transition-all duration-1000 ease-in-out pointer-events-none z-20"></div>

              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex justify-between items-start">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} p-[1px] shadow-lg`}>
                    <div className="w-full h-full rounded-2xl bg-[#0A0D1C] flex items-center justify-center text-3xl text-white">
                      <SiCoursera />
                    </div>
                  </div>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-1">Issuer</span>
                  <span className="text-gray-300 font-medium">{cert.issuer}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-1">Date</span>
                  <span className="px-3 py-1 rounded-md bg-white/5 text-gray-300 text-sm font-medium border border-white/5">
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
