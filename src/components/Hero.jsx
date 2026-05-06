import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaArrowRight } from "react-icons/fa";

const titles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Java Backend Engineer"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050816]">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse duration-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-16 flex flex-col items-center justify-center text-center mt-20 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          {/* Availability Pill */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
            </div>
          </motion.div>

          {/* Massive Name */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-tight drop-shadow-2xl">
              <span className="block text-2xl sm:text-3xl md:text-4xl text-gray-400 font-medium mb-2 sm:mb-4 tracking-normal">Hello, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-purple-500 pb-2">
                Govind Pratap Singh
              </span>
            </h1>
          </motion.div>
          
          {/* Animated Role Titles */}
          <motion.div variants={itemVariants} className="h-14 sm:h-20 flex items-center justify-center overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.h2
                key={titleIndex}
                initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-200"
              >
                {titles[titleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-light mb-12"
          >
            I engineer scalable, high-performance web applications with a focus on cutting-edge design and robust backend architectures. Let's build something extraordinary together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5 justify-center w-full">
            <a href="#projects" className="group relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-secondary to-primary opacity-60 blur-md group-hover:opacity-100 transition duration-500"></div>
              <button className="relative px-8 py-4 rounded-full bg-[#0A0D1C] border border-white/10 text-white font-bold hover:bg-transparent transition-all duration-300 flex items-center gap-3">
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href="/Govind_Pratap_Singh_Resume.pdf" download="Govind_Pratap_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 rounded-full border border-secondary/50 bg-secondary/10 text-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                Download Resume
              </button>
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="mt-16 flex gap-6 justify-center">
            <SocialIcon href="https://github.com/govindsingh3" icon={<FaGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/govindsingh07/" icon={<FaLinkedin />} />
            <SocialIcon href="mailto:govindpratapsingh77@gmail.com" icon={<FaEnvelope />} />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 flex justify-center items-center w-full z-10"
      >
        <a href="#about">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <FaChevronDown size={18} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-2xl text-gray-400 hover:text-white hover:border-secondary hover:bg-secondary/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

export default Hero;
