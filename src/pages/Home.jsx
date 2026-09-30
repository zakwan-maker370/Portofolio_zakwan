import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Organizations from "../components/Organizations";
import Philosophy from "../components/Philosophy";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Organizations />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
}
