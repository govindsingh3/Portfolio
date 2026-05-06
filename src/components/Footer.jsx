import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-tertiary py-8 mt-20 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        <div className="flex flex-col items-center md:items-start">
          <p className="text-white text-xl font-bold">Govind Pratap Singh</p>
          <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/govindsingh3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/govindsingh07/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors p-2">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:govindpratapsingh77@gmail.com" className="text-gray-400 hover:text-white transition-colors p-2">
            <FaEnvelope size={20} />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Govind. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors hover-glow"
          >
            <FaArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
