import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaRocket } from "react-icons/fa";

const projects = [
  {
    name: "Bean & Brew",
    description: "A smart Coffee Queue System that transforms the café experience. Featuring real-time queue management, a live barista dashboard, and priority-based scheduling to effectively reduce customer wait time by ~20%.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
    tags: ["Spring Boot", "React", "WebSocket", "Docker"],
    source_code_link: "https://github.com/govindsingh3",
    live_link: "#",
    color: "from-amber-500 to-orange-600"
  },
  {
    name: "Luxe Stay",
    description: "An elegant full-stack MERN hotel booking platform. It boasts real-time room availability tracking, a comprehensive admin dashboard, and a highly optimized MongoDB database managing over 1000+ simultaneous reservation records.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    source_code_link: "https://github.com/govindsingh3",
    live_link: "#",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Library Management",
    description: "A robust console-based Java application implementing core Object-Oriented Programming principles. It utilizes advanced file handling for persistent data storage across sessions, ensuring an organized and highly readable data structure.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    tags: ["Java", "OOPs", "File I/O"],
    source_code_link: "https://github.com/govindsingh3",
    live_link: "#",
    color: "from-purple-500 to-pink-500"
  },
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-stretch w-full`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-[55%] relative group">
        {/* Decorative background glow */}
        <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full`}></div>
        
        {/* Image Container */}
        <div className="relative h-[300px] sm:h-[400px] xl:h-[480px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl z-10 transform transition-transform duration-700 group-hover:scale-[1.02]">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full lg:w-[48%] flex flex-col justify-between relative">
        {/* Massive Background Number */}
        <div className="absolute -top-16 lg:-top-24 left-0 text-[120px] lg:text-[180px] font-black text-white/5 select-none -z-10 leading-none" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.05)" }}>
          0{index + 1}
        </div>

        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          {project.name}
        </h3>

        <div className="glassmorphism p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 mb-8 shadow-xl">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {project.tags.map((tag, i) => (
            <span key={i} className={`px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${project.color} text-white shadow-lg`}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full">
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10 shadow-lg"
          >
            <FaGithub size={20} />
            Code
          </a>
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <FaExternalLinkAlt size={16} />
            Live Preview
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center mb-24 lg:mb-32"
      >
        <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
          <FaRocket /> Innovation & Creation
        </span>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects.</span>
        </h2>
      </motion.div>

      <div className="flex flex-col gap-24 lg:gap-40">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
