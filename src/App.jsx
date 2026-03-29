import { useScrollY, useActiveSection } from "./hooks";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import { Contact, Footer } from "./components/Contact/Contact";
import "./styles/global.scss";

const SECTIONS = ["hero", "about", "projects", "experience", "contact"];

export default function App() {
  const scrollY = useScrollY();
  const active = useActiveSection(SECTIONS);

  return (
    <div>
      {/* Grain overlay */}
      <div className="noise-overlay" />

      <Navbar scrolled={scrollY > 60} active={active} />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
