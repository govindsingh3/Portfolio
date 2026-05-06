import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGlobeAmericas, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiSpringboot } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-32 max-w-7xl mx-auto px-6 sm:px-16 relative overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-2 mb-16"
      >
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-12 bg-secondary"></div>
          <p className="text-secondary text-lg uppercase tracking-widest font-semibold">Discover Who I Am</p>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mt-4">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Me.</span>
        </h2>
      </motion.div>

      {/* Bento Box Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
        
        {/* Bento Box 1: Profile Photo (Tall) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 relative group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Animated Background Ring */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-purple-600 opacity-50 group-hover:opacity-100 blur transition duration-700"></div>
          
          <div className="relative h-full w-full bg-[#0A0D1C] z-10 p-2">
            <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
              <img
                src="/govind_photo.jpeg"
                alt="Govind Pratap Singh"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Floating Status Badge */}
              <div className="absolute bottom-6 left-6 right-6 glassmorphism bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 shadow-xl">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <p className="text-white text-sm font-bold tracking-wide">Available for Work</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bento Box 2: Main Intro (Wide) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1 glassmorphism p-8 sm:p-12 rounded-[2.5rem] border border-white/10 bg-[#0A0D1C]/80 backdrop-blur-xl relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500 shadow-2xl flex flex-col justify-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight relative z-10">
            Transforming complex problems into <br className="hidden lg:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">elegant digital solutions.</span>
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed relative z-10 max-w-4xl font-light">
            I am a passionate <span className="text-white font-semibold">Full Stack Developer</span> currently pursuing my B.Tech in Computer Science and Engineering at Lovely Professional University. With a deep-rooted foundation in modern software design patterns, I thrive on building high-performance backend systems and interactive frontend interfaces using the <span className="text-secondary font-semibold">MERN stack</span> and <span className="text-primary font-semibold">Java Spring Boot</span>.
          </p>
        </motion.div>

        {/* Bento Box 3: Location / Map */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1 glassmorphism p-8 rounded-[2.5rem] border border-white/10 bg-[#0A0D1C]/80 backdrop-blur-xl flex flex-col justify-between group hover:border-secondary/40 transition-colors duration-500 shadow-2xl overflow-hidden relative"
        >
          {/* Faint globe grid in background */}
          <div className="absolute -right-10 -bottom-10 text-[200px] text-white/5 group-hover:text-secondary/10 transition-colors duration-500 transform group-hover:rotate-12 pointer-events-none">
            <FaGlobeAmericas />
          </div>

          <div className="relative z-10">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-2">Based In</p>
            <h4 className="text-3xl font-extrabold text-white">Punjab, India</h4>
          </div>
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xl">
              <FaMapMarkerAlt />
            </div>
            <p className="text-gray-200 text-sm font-medium">Lovely Professional University</p>
          </div>
        </motion.div>

        {/* Bento Box 4: Floating Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 glassmorphism p-8 rounded-[2.5rem] border border-white/10 bg-[#0A0D1C]/80 backdrop-blur-xl flex flex-col justify-center relative overflow-hidden group hover:border-primary/40 transition-colors duration-500 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent pointer-events-none"></div>
          
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-6 relative z-10">Core Technologies</p>
          
          <div className="flex flex-wrap gap-4 relative z-10">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:scale-105 transform duration-300">
              <FaReact className="text-[#61DAFB] text-2xl" />
              <span className="text-white font-medium">React</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:scale-105 transform duration-300">
              <FaNodeJs className="text-[#339933] text-2xl" />
              <span className="text-white font-medium">Node.js</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:scale-105 transform duration-300">
              <SiMongodb className="text-[#47A248] text-2xl" />
              <span className="text-white font-medium">MongoDB</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:scale-105 transform duration-300">
              <FaJava className="text-[#007396] text-2xl" />
              <span className="text-white font-medium">Java</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors hover:scale-105 transform duration-300">
              <SiSpringboot className="text-[#6DB33F] text-2xl" />
              <span className="text-white font-medium">Spring Boot</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
