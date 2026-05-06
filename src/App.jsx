import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-bg-dark">
        <CustomCursor />
        <ParticlesBackground />
        
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
